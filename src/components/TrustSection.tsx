/**
 * TrustSection Component - Phase 2
 * 
 * Purpose: Build trust with Indian mass audience
 * Features:
 * - "Trusted by 10,000+ Indians" headline
 * - City names (Pune, Delhi, Mumbai, Jaipur)
 * - Pandit profile card with experience
 * - Star ratings
 * - Traditional + AI messaging
 */

import { useTranslation } from "react-i18next";
import { Star, MapPin, Users, Clock, ShieldCheck } from "lucide-react";

const TrustSection = () => {
  const { t } = useTranslation();

  const cities = ["Pune", "Delhi", "Mumbai", "Jaipur", "Bangalore", "Chennai"];

  const stats = [
    { 
      icon: Users, 
      value: "10,000+", 
      label: t("trust.happyUsers") || "Happy Users",
      labelHi: "खुश ग्राहक"
    },
    { 
      icon: Star, 
      value: "4.9", 
      label: t("trust.rating") || "Rating",
      labelHi: "रेटिंग"
    },
    { 
      icon: Clock, 
      value: "24/7", 
      label: t("trust.available") || "Available",
      labelHi: "उपलब्ध"
    },
  ];

  return (
    <section 
      className="py-12 bg-card border-y border-border"
      aria-labelledby="trust-heading"
    >
      <div className="container mx-auto px-4">
        {/* Main Trust Headline */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className="w-5 h-5 fill-primary text-primary" 
                aria-hidden="true"
              />
            ))}
            <span className="ml-2 text-sm font-medium text-foreground">4.9/5</span>
          </div>
          
          <h2 
            id="trust-heading" 
            className="text-2xl sm:text-3xl font-semibold text-foreground mb-2"
          >
            Trusted by 10,000+ Indians
          </h2>
          <p className="text-lg text-primary font-medium">
            10,000+ भारतीय भरोसा करते हैं
          </p>
          
          {/* City Names */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <MapPin className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">
              {cities.join(" • ")}
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 rounded-xl bg-background border border-border"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-primary">{stat.labelHi}</div>
            </div>
          ))}
        </div>

        {/* Pandit Profile Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-background border border-primary/20 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              {/* Pandit Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Pandit">🙏</span>
                </div>
              </div>
              
              {/* Pandit Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  Pandit Ramesh Sharma
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                  पंडित रमेश शर्मा
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <ShieldCheck className="w-4 h-4 text-green-600" aria-hidden="true" />
                  <span>10+ Years Vedic Astrology</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  10+ साल का वैदिक ज्योतिष अनुभव
                </p>
              </div>
            </div>
            
            {/* Trust Message */}
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-center text-foreground">
                <span className="font-medium">Traditional Vedic Astrology</span>
                {" "}+{" "}
                <span className="text-primary font-medium">AI Analysis</span>
              </p>
              <p className="text-xs text-center text-muted-foreground mt-1">
                पारंपरिक वैदिक ज्योतिष + AI विश्लेषण
              </p>
            </div>
          </div>
          
          {/* Additional Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-green-600" aria-hidden="true" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>Data Protected</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✅</span>
              <span>Verified Pandit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
