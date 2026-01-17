/**
 * DailyPanchang Component - Phase 2: Indian Visual Identity
 * 
 * Displays the daily Panchang (Hindu calendar) information including:
 * - Date (in multiple calendars)
 * - Tithi (lunar day)
 * - Nakshatra (lunar mansion)
 * - Yoga (auspicious combination)
 * - Rahu Kaal (inauspicious period - highlighted in saffron)
 * 
 * Note: This uses simulated data. For production, integrate with
 * a Panchang API like drikpanchang.com or prokerala.com
 */

import { Calendar, Moon, Star, Clock, AlertTriangle } from "lucide-react";
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
const getSimulatedPanchang = (): PanchangData => {
  const today = new Date();
  
  // Tithi names (30 tithis in lunar month)
  const tithis = [
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
    "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
    "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima/Amavasya"
  ];
  
  // Nakshatra names (27 nakshatras)
  const nakshatras = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
    "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
    "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati",
    "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha",
    "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", 
    "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
  ];
  
  // Yoga names (27 yogas)
  const yogas = [
    "Vishkumbha", "Priti", "Ayushman", "Saubhagya", "Shobhana",
    "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda",
    "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
    "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva",
    "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma",
    "Indra", "Vaidhriti"
  ];
  
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
  
  return {
    date: today.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    tithi: tithis[dayOfMonth % 15],
    tithiEnds: "Until 11:23 PM",
    nakshatra: nakshatras[dayOfMonth % 27],
    nakshatraEnds: "Until 8:45 AM",
    yoga: yogas[dayOfMonth % 27],
    rahuKaal: rahuKaalByDay[dayOfWeek],
    sunrise: "6:18 AM",
    sunset: "6:42 PM",
  };
};

const DailyPanchang = ({ className, compact = false }: DailyPanchangProps) => {
  const { t } = useTranslation();
  const panchang = getSimulatedPanchang();

  // Compact view for mobile or sidebar
  if (compact) {
    return (
      <Card className={cn("card-gold-border", className)}>
        <CardContent className="p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            {t("panchang.title") || "Today's Panchang"}
          </h3>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-muted-foreground">Tithi:</span>
              <span className="ml-1 font-medium">{panchang.tithi}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Nakshatra:</span>
              <span className="ml-1 font-medium">{panchang.nakshatra}</span>
            </div>
          </div>
          
          {/* Rahu Kaal highlight */}
          <div className="mt-3 p-2 rounded-lg panchang-highlight flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <div>
              <span className="text-xs text-muted-foreground">Rahu Kaal:</span>
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
            {t("panchang.title") || "आज का पंचांग / Today's Panchang"}
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
              <span className="text-xs font-medium">{t("panchang.tithi") || "Tithi"}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{panchang.tithi}</p>
            <p className="text-xs text-muted-foreground">{panchang.tithiEnds}</p>
          </div>
          
          {/* Nakshatra */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Star className="w-4 h-4" />
              <span className="text-xs font-medium">{t("panchang.nakshatra") || "Nakshatra"}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{panchang.nakshatra}</p>
            <p className="text-xs text-muted-foreground">{panchang.nakshatraEnds}</p>
          </div>
          
          {/* Yoga */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="text-sm">☯</span>
              <span className="text-xs font-medium">{t("panchang.yoga") || "Yoga"}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{panchang.yoga}</p>
          </div>
          
          {/* Sun times */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="text-sm">☀️</span>
              <span className="text-xs font-medium">{t("panchang.sun") || "Sun"}</span>
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
              {t("panchang.rahuKaal") || "Rahu Kaal (Inauspicious Period)"}
            </p>
            <p className="text-base font-bold text-accent">{panchang.rahuKaal}</p>
            <p className="text-xs text-muted-foreground">
              {t("panchang.rahuKaalNote") || "Avoid starting new ventures during this time"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyPanchang;