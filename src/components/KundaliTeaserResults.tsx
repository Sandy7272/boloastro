/**
 * KundaliTeaserResults Component - Phase 1 & 5
 * 
 * Purpose: Show teaser astrological insights before WhatsApp redirect
 * This builds trust by providing immediate value
 * 
 * Features:
 * - Simple, readable teaser predictions (14-16px mobile-friendly)
 * - Sun sign, Moon sign, Lucky number, Lucky color
 * - 1-line tips for Career, Love, Health
 * - Prominent WhatsApp CTA with Hindi text
 * - Edit details button to go back to form
 * - Phase 5: Analytics tracking for WhatsApp clicks
 * - Now supports real API data via kundaliData prop
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Sun, Moon, Star, Heart, Briefcase, 
  Activity, Calendar, Clock, MapPin, MessageCircle,
  ArrowLeft, Edit3, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ZODIAC_SIGNS } from "@/components/ui/planetary-icons";
import { useTranslation } from "react-i18next";
import { getWhatsAppLinkWithDetails } from "@/config/constants";
import { trackWhatsAppClick, trackTeaserView } from "@/lib/analytics";
import type { KundaliData } from "@/pdf/types";

interface BirthDetails {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface KundaliTeaserResultsProps {
  details: BirthDetails;
  onReset: () => void;
  lang?: string;
  kundaliData?: KundaliData | null;
}

/**
 * Generate simulated astrological results based on birth details
 * Used as fallback when API data is not available
 */
const generateFallbackResults = (details: BirthDetails) => {
  const date = new Date(details.dateOfBirth);
  const month = date.getMonth();
  const day = date.getDate();
  
  const sunSignIndex = month;
  const moonSignIndex = (month + (day > 15 ? 1 : 0)) % 12;
  
  const luckyNumber = (day % 9) + 1;
  const luckyColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink"];
  const luckyColorIndex = day % 7;
  
  return {
    sunSign: ZODIAC_SIGNS[sunSignIndex],
    moonSign: ZODIAC_SIGNS[moonSignIndex],
    luckyNumber,
    luckyColor: luckyColors[luckyColorIndex],
    luckyColorHindi: ["लाल", "नारंगी", "पीला", "हरा", "नीला", "बैंगनी", "गुलाबी"][luckyColorIndex],
    nakshatra: undefined as string | undefined,
    rashi: undefined as string | undefined,
  };
};

/**
 * Extract display data from real API response
 */
const extractFromKundaliData = (kundaliData: KundaliData) => {
  const { userData, luckyFactors } = kundaliData;
  
  // Find moon sign from rashi
  const rashiToZodiac: Record<string, number> = {
    "मेष": 0, "वृषभ": 1, "मिथुन": 2, "कर्क": 3,
    "सिंह": 4, "कन्या": 5, "तुला": 6, "वृश्चिक": 7,
    "धनु": 8, "मकर": 9, "कुंभ": 10, "मीन": 11,
  };
  
  const moonSignIndex = rashiToZodiac[userData.rashi || ""] ?? 0;
  const sunSignIndex = rashiToZodiac[userData.lagnaRashi || ""] ?? 0;
  
  return {
    sunSign: ZODIAC_SIGNS[sunSignIndex],
    moonSign: ZODIAC_SIGNS[moonSignIndex],
    luckyNumber: luckyFactors.number,
    luckyColor: luckyFactors.color,
    luckyColorHindi: luckyFactors.colorHindi || luckyFactors.color,
    nakshatra: userData.nakshatra,
    rashi: userData.rashi,
  };
};

/**
 * Generate predictions from real API data or fallback
 */
const generatePredictions = (t: (key: string) => string, kundaliData?: KundaliData | null) => {
  if (kundaliData) {
    return [
      {
        icon: Heart,
        label: t("results.love"),
        tip: kundaliData.marriage.highlights?.[0] || "Relationships look favorable",
        tipHindi: "रिश्तों में अनुकूलता दिखती है",
        color: "text-pink-500",
      },
      {
        icon: Briefcase,
        label: t("results.career"),
        tip: kundaliData.career.highlights?.[0] || "Good opportunities for growth",
        tipHindi: "विकास के अच्छे अवसर हैं",
        color: "text-blue-500",
      },
      {
        icon: Activity,
        label: t("results.health"),
        tip: kundaliData.health.highlights?.[0] || "Focus on wellness",
        tipHindi: "स्वास्थ्य पर ध्यान दें",
        color: "text-green-500",
      },
    ];
  }
  
  return [
    {
      icon: Heart,
      label: t("results.love"),
      tip: t("teaser.loveTip") || "Relationships look favorable this month",
      tipHindi: "इस महीने रिश्तों में अनुकूलता दिखती है",
      color: "text-pink-500",
    },
    {
      icon: Briefcase,
      label: t("results.career"),
      tip: t("teaser.careerTip") || "Good opportunities for growth ahead",
      tipHindi: "आगे विकास के अच्छे अवसर हैं",
      color: "text-blue-500",
    },
    {
      icon: Activity,
      label: t("results.health"),
      tip: t("teaser.healthTip") || "Focus on mental wellness and rest",
      tipHindi: "मानसिक स्वास्थ्य और आराम पर ध्यान दें",
      color: "text-green-500",
    },
  ];
};

const KundaliTeaserResults = ({ details, onReset, lang = "en", kundaliData }: KundaliTeaserResultsProps) => {
  const { t } = useTranslation();
  
  // Use real API data if available, otherwise fallback
  const results = kundaliData 
    ? extractFromKundaliData(kundaliData)
    : generateFallbackResults(details);
  
  const predictions = generatePredictions(t, kundaliData);

  // Generate WhatsApp link with all details
  const whatsAppLink = getWhatsAppLinkWithDetails({
    ...details,
    lang,
  });

  // Track teaser view on mount - Phase 5
  useEffect(() => {
    trackTeaserView(results.sunSign.name);
  }, [results.sunSign.name]);

  // Handle WhatsApp CTA click with tracking
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("teaser_results", "detailed_kundali");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-2xl mx-auto space-y-6"
    >
      {/* Edit Details Button - Top */}
      <motion.button
        onClick={onReset}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
        whileHover={{ x: -3 }}
      >
        <Edit3 className="w-4 h-4" />
        {t("teaser.editDetails") || "Edit Details / विवरण बदलें"}
      </motion.button>

      {/* Header Card - User Info + Quick Stats */}
      <Card className="bg-card border-border overflow-hidden">
        <CardHeader className="text-center pb-4">
          {/* User Name and Zodiac Symbol */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/30">
              <span className="text-4xl">{results.moonSign.symbol}</span>
            </div>
            
            <CardTitle className="text-2xl font-semibold">
              {details.name}
              <span className="text-muted-foreground font-normal text-lg"> ki</span>{" "}
              <span className="text-gradient-gold">{t("results.title")}</span>
            </CardTitle>
          </motion.div>
          
          {/* Birth Details Summary */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(details.dateOfBirth).toLocaleDateString("en-IN", { 
                day: "numeric", month: "short", year: "numeric" 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {details.timeOfBirth}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {details.placeOfBirth}
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Quick Insights Grid - Simple, Large, Readable */}
          <div className="grid grid-cols-2 gap-4">
            {/* Sun Sign */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-xl bg-muted/30 border border-border text-center"
            >
              <Sun className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">{t("results.sunSign")}</p>
              <p className="text-lg font-semibold text-foreground">{results.sunSign.name}</p>
              <p className="text-sm text-muted-foreground">{results.sunSign.hindi}</p>
            </motion.div>

            {/* Moon Sign */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-xl bg-muted/30 border border-border text-center"
            >
              <Moon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">{t("results.moonSign")}</p>
              <p className="text-lg font-semibold text-foreground">{results.moonSign.name}</p>
              <p className="text-sm text-muted-foreground">{results.moonSign.hindi}</p>
            </motion.div>

            {/* Lucky Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-4 rounded-xl bg-muted/30 border border-border text-center"
            >
              <Star className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">{t("results.luckyNumber")}</p>
              <p className="text-3xl font-bold text-primary">{results.luckyNumber}</p>
            </motion.div>

            {/* Lucky Color */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-4 rounded-xl bg-muted/30 border border-border text-center"
            >
              <div 
                className="w-6 h-6 rounded-full mx-auto mb-2 border-2 border-white shadow-sm" 
                style={{ backgroundColor: results.luckyColor.toLowerCase() }} 
              />
              <p className="text-xs text-muted-foreground mb-1">{t("results.luckyColor")}</p>
              <p className="text-lg font-semibold text-foreground">{results.luckyColor}</p>
              <p className="text-sm text-muted-foreground">{results.luckyColorHindi}</p>
            </motion.div>
          </div>

          {/* Nakshatra display if available from API */}
          {results.nakshatra && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-center"
            >
              <p className="text-xs text-muted-foreground mb-1">नक्षत्र (Nakshatra)</p>
              <p className="text-xl font-semibold text-primary">{results.nakshatra}</p>
              {results.rashi && (
                <p className="text-sm text-muted-foreground">राशि: {results.rashi}</p>
              )}
            </motion.div>
          )}

          {/* Quick Predictions - Simple One-Liners */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              {t("teaser.quickInsights") || "Quick Insights / त्वरित जानकारी"}
            </h3>
            
            <div className="space-y-2">
              {predictions.map((pred, i) => (
                <motion.div
                  key={pred.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/50"
                >
                  <pred.icon className={`w-5 h-5 ${pred.color} mt-0.5 flex-shrink-0`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{pred.label}</p>
                    <p className="text-sm text-muted-foreground">{pred.tip}</p>
                    <p className="text-xs text-muted-foreground/70">{pred.tipHindi}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* WhatsApp CTA - Prominent, Hindi Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Card className="bg-gradient-to-r from-green-600/10 to-green-500/5 border-green-500/30">
          <CardContent className="p-6 text-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                {t("teaser.getFullReport") || "Get Detailed Kundali Report"}
              </h3>
              <p className="text-lg text-primary font-medium">
                पंडित जी से detailed report लें 🙏
              </p>
            </div>
            
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              {t("teaser.ctaDescription") || "Get complete Kundali with Dasha analysis, Mangal Dosha check, Marriage timing, Career predictions, and personalized remedies."}
            </p>
            
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 rounded-xl text-lg gap-2 w-full sm:w-auto"
              asChild
            >
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5" />
                {t("teaser.whatsappCta") || "Pandit ji se baat karein"}
              </a>
            </Button>
            
            <p className="text-xs text-muted-foreground">
              {t("teaser.prefilled") || "Your details are pre-filled. No need to type again!"}
              <br />
              <span className="text-muted-foreground/70">आपकी जानकारी पहले से भरी है!</span>
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Back to Form Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center"
      >
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("teaser.generateAnother") || "Generate for someone else / किसी और के लिए बनाएं"}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default KundaliTeaserResults;