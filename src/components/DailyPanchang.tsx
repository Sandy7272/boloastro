/**
 * DailyPanchang Component - Phase 2 & 3: Indian Visual Identity + i18n
 * 
 * Displays the daily Panchang (Hindu calendar) information including:
 * - Date (in multiple calendars)
 * - Tithi (lunar day)
 * - Nakshatra (lunar mansion)
 * - Yoga (auspicious combination)
 * - Rahu Kaal (inauspicious period - highlighted in saffron)
 * 
 * Phase 3: Full i18n localization for EN, HI, MR
 * 
 * Note: This uses simulated data. For production, integrate with
 * a Panchang API like drikpanchang.com or prokerala.com
 */

import { Calendar, Moon, Star, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface PanchangData {
  date: string;
  tithi: string;
  tithiEnds: string;
  nakshatra: string;
  nakshatraEnds: string;
  yoga: string;
  rahuKaal: string;
  sunrise: string;
  sunset: string;
}

interface DailyPanchangProps {
  className?: string;
  compact?: boolean;
}

/**
 * Generate simulated Panchang data
 * In production, replace with actual API call
 */
const getSimulatedPanchang = (lang: string): PanchangData => {
  const today = new Date();
  
  // Tithi names (30 tithis in lunar month) - multilingual
  const tithis: Record<string, string[]> = {
    en: [
      "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
      "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
      "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima/Amavasya"
    ],
    hi: [
      "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पंचमी",
      "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी",
      "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पूर्णिमा/अमावस्या"
    ],
    mr: [
      "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पंचमी",
      "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी",
      "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पौर्णिमा/अमावास्या"
    ],
  };
  
  // Nakshatra names (27 nakshatras) - multilingual
  const nakshatras: Record<string, string[]> = {
    en: [
      "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
      "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
      "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati",
      "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha",
      "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", 
      "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
    ],
    hi: [
      "अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशिरा",
      "आर्द्रा", "पुनर्वसु", "पुष्य", "अश्लेषा", "मघा",
      "पूर्वा फाल्गुनी", "उत्तरा फाल्गुनी", "हस्त", "चित्रा", "स्वाति",
      "विशाखा", "अनुराधा", "ज्येष्ठा", "मूल", "पूर्वाषाढ़ा",
      "उत्तराषाढ़ा", "श्रवण", "धनिष्ठा", "शतभिषा", 
      "पूर्व भाद्रपद", "उत्तर भाद्रपद", "रेवती"
    ],
    mr: [
      "अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशीर्ष",
      "आर्द्रा", "पुनर्वसू", "पुष्य", "अश्लेषा", "मघा",
      "पूर्वा फाल्गुनी", "उत्तरा फाल्गुनी", "हस्त", "चित्रा", "स्वाती",
      "विशाखा", "अनुराधा", "ज्येष्ठा", "मूळ", "पूर्वाषाढा",
      "उत्तराषाढा", "श्रवण", "धनिष्ठा", "शततारका", 
      "पूर्व भाद्रपदा", "उत्तर भाद्रपदा", "रेवती"
    ],
  };
  
  // Yoga names (27 yogas) - multilingual
  const yogas: Record<string, string[]> = {
    en: [
      "Vishkumbha", "Priti", "Ayushman", "Saubhagya", "Shobhana",
      "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda",
      "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
      "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva",
      "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma",
      "Indra", "Vaidhriti"
    ],
    hi: [
      "विष्कुम्भ", "प्रीति", "आयुष्मान", "सौभाग्य", "शोभन",
      "अतिगण्ड", "सुकर्मा", "धृति", "शूल", "गण्ड",
      "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र",
      "सिद्धि", "व्यतीपात", "वरीयान", "परिघ", "शिव",
      "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म",
      "इंद्र", "वैधृति"
    ],
    mr: [
      "विष्कुंभ", "प्रीती", "आयुष्मान", "सौभाग्य", "शोभन",
      "अतिगंड", "सुकर्मा", "धृती", "शूळ", "गंड",
      "वृद्धी", "ध्रुव", "व्याघात", "हर्षण", "वज्र",
      "सिद्धी", "व्यतीपात", "वरीयान", "परिघ", "शिव",
      "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म",
      "इंद्र", "वैधृती"
    ],
  };
  
  // Rahu Kaal by day of week (approximate for most cities)
  const rahuKaalByDay = [
    "4:30 PM - 6:00 PM", // Sunday
    "7:30 AM - 9:00 AM", // Monday
    "3:00 PM - 4:30 PM", // Tuesday
    "12:00 PM - 1:30 PM", // Wednesday
    "1:30 PM - 3:00 PM", // Thursday
    "10:30 AM - 12:00 PM", // Friday
    "9:00 AM - 10:30 AM", // Saturday
  ];

  const dayOfMonth = today.getDate();
  const dayOfWeek = today.getDay();
  
  // Get locale for date formatting
  const locale = lang === "hi" ? "hi-IN" : lang === "mr" ? "mr-IN" : "en-IN";
  
  return {
    date: today.toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    tithi: (tithis[lang] || tithis.en)[dayOfMonth % 15],
    tithiEnds: lang === "hi" ? "रात 11:23 बजे तक" : lang === "mr" ? "रात्री 11:23 पर्यंत" : "Until 11:23 PM",
    nakshatra: (nakshatras[lang] || nakshatras.en)[dayOfMonth % 27],
    nakshatraEnds: lang === "hi" ? "सुबह 8:45 बजे तक" : lang === "mr" ? "सकाळी 8:45 पर्यंत" : "Until 8:45 AM",
    yoga: (yogas[lang] || yogas.en)[dayOfMonth % 27],
    rahuKaal: rahuKaalByDay[dayOfWeek],
    sunrise: "6:18 AM",
    sunset: "6:42 PM",
  };
};

const DailyPanchang = ({ className, compact = false }: DailyPanchangProps) => {
  const { t, i18n } = useTranslation();
  const panchang = getSimulatedPanchang(i18n.language);

  // Compact view for mobile or sidebar
  if (compact) {
    return (
      <Card className={cn("card-gold-border", className)}>
        <CardContent className="p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            {t("panchang.title")}
          </h3>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-muted-foreground">{t("panchang.tithi")}:</span>
              <span className="ml-1 font-medium">{panchang.tithi}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t("panchang.nakshatra")}:</span>
              <span className="ml-1 font-medium">{panchang.nakshatra}</span>
            </div>
          </div>
          
          {/* Rahu Kaal highlight */}
          <div className="mt-3 p-2 rounded-lg panchang-highlight flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <div>
              <span className="text-xs text-muted-foreground">{t("panchang.rahuKaal").split("(")[0]}:</span>
              <span className="ml-1 text-xs font-semibold text-accent">{panchang.rahuKaal}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Full view
  return (
    <Card className={cn("card-gold-border overflow-hidden", className)}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/5 px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            {t("panchang.title")}
          </h3>
          <span className="text-xs text-muted-foreground">{panchang.date}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        {/* Main Panchang grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {/* Tithi */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Moon className="w-4 h-4" />
              <span className="text-xs font-medium">{t("panchang.tithi")}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{panchang.tithi}</p>
            <p className="text-xs text-muted-foreground">{panchang.tithiEnds}</p>
          </div>
          
          {/* Nakshatra */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Star className="w-4 h-4" />
              <span className="text-xs font-medium">{t("panchang.nakshatra")}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{panchang.nakshatra}</p>
            <p className="text-xs text-muted-foreground">{panchang.nakshatraEnds}</p>
          </div>
          
          {/* Yoga */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="text-sm">☯</span>
              <span className="text-xs font-medium">{t("panchang.yoga")}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{panchang.yoga}</p>
          </div>
          
          {/* Sun times */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="text-sm">☀️</span>
              <span className="text-xs font-medium">{t("panchang.sun")}</span>
            </div>
            <p className="text-xs text-foreground">↑ {panchang.sunrise}</p>
            <p className="text-xs text-foreground">↓ {panchang.sunset}</p>
          </div>
        </div>
        
        {/* Rahu Kaal - Highlighted */}
        <div className="panchang-highlight rounded-lg p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">
              {t("panchang.rahuKaal")}
            </p>
            <p className="text-base font-bold text-accent">{panchang.rahuKaal}</p>
            <p className="text-xs text-muted-foreground">
              {t("panchang.rahuKaalNote")}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyPanchang;
