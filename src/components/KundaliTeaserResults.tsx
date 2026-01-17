import { motion } from "framer-motion";
import { 
  Sun, Moon, Star, Heart, Briefcase, 
  TrendingUp, Calendar, Clock, MapPin, MessageCircle,
  ArrowLeft, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ZODIAC_SIGNS } from "@/components/ui/planetary-icons";
import { useTranslation } from "react-i18next";

interface BirthDetails {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface KundaliTeaserResultsProps {
  details: BirthDetails;
  onReset: () => void;
}

// Generate WhatsApp link with prefilled data
const getWhatsAppLink = (details: BirthDetails) => {
  const message = `Hi BoloAstro! I want my detailed kundali report.

Name: ${details.name}
DOB: ${details.dateOfBirth}
Time: ${details.timeOfBirth}
Place: ${details.placeOfBirth}`;

  return `https://wa.me/917261969798?text=${encodeURIComponent(message)}`;
};

// Simulated results based on birth details
const generateResults = (details: BirthDetails) => {
  const date = new Date(details.dateOfBirth);
  const month = date.getMonth();
  const day = date.getDate();
  
  // Simple calculation for demo
  const sunSignIndex = month;
  const moonSignIndex = (month + (day > 15 ? 1 : 0)) % 12;
  
  return {
    sunSign: ZODIAC_SIGNS[sunSignIndex],
    moonSign: ZODIAC_SIGNS[moonSignIndex],
    luckyNumber: (day % 9) + 1,
    luckyColor: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"][day % 7],
  };
};

const KundaliTeaserResults = ({ details, onReset }: KundaliTeaserResultsProps) => {
  const { t } = useTranslation();
  const results = generateResults(details);

  const teaserPredictions = [
    { 
      icon: Heart, 
      label: t("results.love"), 
      desc: t("results.loveDesc"),
      color: "text-pink-400",
      locked: false 
    },
    { 
      icon: Briefcase, 
      label: t("results.career"), 
      desc: t("results.careerDesc"),
      color: "text-blue-400",
      locked: false 
    },
    { 
      icon: TrendingUp, 
      label: t("results.finance"), 
      desc: "...",
      color: "text-green-400",
      locked: true 
    },
    { 
      icon: Calendar, 
      label: t("results.health"), 
      desc: "...",
      color: "text-purple-400",
      locked: true 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      {/* Back Button */}
      <motion.button
        onClick={onReset}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-4 h-4" />
        {t("results.generateAnother")}
      </motion.button>

      {/* Header Card */}
      <Card className="bg-card border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        
        <CardHeader className="relative text-center pb-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30">
              <span className="text-4xl">{results.moonSign.symbol}</span>
            </div>
          </motion.div>
          
          <CardTitle className="text-2xl font-semibold">
            {details.name}'s <span className="text-gradient-gold">{t("results.title")}</span>
          </CardTitle>
          
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

        <CardContent className="relative space-y-6">
          {/* Quick Insights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-xl bg-muted/30 border border-border"
            >
              <Sun className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-muted-foreground">{t("results.sunSign")}</p>
              <p className="font-semibold text-foreground">{results.sunSign.name}</p>
              <p className="text-xs text-muted-foreground">{results.sunSign.hindi}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-xl bg-muted/30 border border-border"
            >
              <Moon className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-muted-foreground">{t("results.moonSign")}</p>
              <p className="font-semibold text-foreground">{results.moonSign.name}</p>
              <p className="text-xs text-muted-foreground">{results.moonSign.hindi}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-4 rounded-xl bg-muted/30 border border-border"
            >
              <Star className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-muted-foreground">{t("results.luckyNumber")}</p>
              <p className="text-2xl font-bold text-primary">{results.luckyNumber}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-4 rounded-xl bg-muted/30 border border-border"
            >
              <div className="w-5 h-5 rounded-full mb-2" style={{ backgroundColor: results.luckyColor.toLowerCase() }} />
              <p className="text-xs text-muted-foreground">{t("results.luckyColor")}</p>
              <p className="font-semibold text-foreground">{results.luckyColor}</p>
            </motion.div>
          </div>

          {/* Predictions Preview */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              {t("results.predictions")}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {teaserPredictions.map((pred, i) => (
                <motion.div
                  key={pred.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className={`p-4 rounded-xl border ${
                    pred.locked 
                      ? "bg-muted/10 border-border/50" 
                      : "bg-muted/30 border-border"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <pred.icon className={`w-5 h-5 ${pred.locked ? "text-muted-foreground/50" : pred.color} mb-2`} />
                    {pred.locked && <Lock className="w-4 h-4 text-muted-foreground/50" />}
                  </div>
                  <p className={`font-medium text-sm ${pred.locked ? "text-muted-foreground/50" : ""}`}>
                    {pred.label}
                  </p>
                  <p className={`text-xs ${pred.locked ? "text-muted-foreground/30" : "text-muted-foreground"}`}>
                    {pred.locked ? "Unlock on WhatsApp" : pred.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA - Get Full Report on WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Card className="bg-gradient-to-r from-green-600/10 to-green-500/5 border-green-500/30">
          <CardContent className="p-6 text-center space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              {t("results.getDetailedReport")}
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Get complete Kundali with Dasha analysis, Mangal Dosha check, Marriage timing, Career predictions, and personalized remedies.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 rounded-xl text-lg gap-2"
              asChild
            >
              <a
                href={getWhatsAppLink(details)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                {t("results.getDetailedReport")}
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Your details are pre-filled. No need to type again!
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default KundaliTeaserResults;
