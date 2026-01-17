// BoloAstro Configuration Constants
// Centralized configuration for the entire application

export const SITE_CONFIG = {
  name: "BoloAstro",
  tagline: "Chat with Your Destiny",
  description: "Your trusted AI-powered Vedic astrology companion. Get accurate predictions, kundali analysis, and life guidance on WhatsApp.",
  url: "https://boloastro.com",
  email: "support@boloastro.com",
  phone: "+91 7261 969798",
  location: "Pune, India",
} as const;

export const WHATSAPP_CONFIG = {
  number: "917261969798",
  baseUrl: "https://wa.me/",
  defaultMessage: "Hi BoloAstro! I want to know my horoscope",
} as const;

// Generate WhatsApp link with custom message
export const getWhatsAppLink = (message?: string) => {
  const msg = encodeURIComponent(message || WHATSAPP_CONFIG.defaultMessage);
  return `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${msg}`;
};

// Birth details interface for WhatsApp link generation
interface BirthDetailsForWhatsApp {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  lang?: string;
}

/**
 * Generate WhatsApp link with birth details pre-filled
 * Creates a clean, formatted message with all user details
 * @param details - User's birth details including name, dob, time, place, and optional language
 * @returns Encoded WhatsApp URL ready for redirect
 */
export const getWhatsAppLinkWithDetails = (details: BirthDetailsForWhatsApp): string => {
  // Format date for display (DD-MM-YYYY format preferred in India)
  const formatDate = (dateStr: string): string => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit", 
        year: "numeric"
      });
    } catch {
      return dateStr;
    }
  };

  // Format time for display (12-hour format)
  const formatTime = (timeStr: string): string => {
    try {
      const [hours, minutes] = timeStr.split(":");
      const h = parseInt(hours);
      const ampm = h >= 12 ? "PM" : "AM";
      const h12 = h % 12 || 12;
      return `${h12}:${minutes} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  // Build clean message with newlines (%0A for URL encoding)
  const message = `Namaste Pandit ji 🙏
Name: ${details.name}
DOB: ${formatDate(details.dateOfBirth)}
Time: ${formatTime(details.timeOfBirth)}
Place: ${details.placeOfBirth}
Language: ${details.lang || "en"}

Please send detailed kundali and remedies.`;

  return `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
};

// Pre-defined WhatsApp messages for different services
export const WHATSAPP_MESSAGES = {
  default: "Hi BoloAstro! I want to know my horoscope",
  freeKundali: "Hi BoloAstro! I want my FREE Kundali",
  premiumReport: "Hi BoloAstro! I'm interested in the Premium Report",
  vipConsultation: "Hi BoloAstro! I want VIP consultation with an astrologer",
  matchMaking: "Hi BoloAstro! I need match making / kundali matching",
  careerPrediction: "Hi BoloAstro! I need career prediction and guidance",
  financePrediction: "Hi BoloAstro! I need finance and wealth prediction",
  marriagePrediction: "Hi BoloAstro! I want marriage timing prediction",
  dailyHoroscope: "Hi BoloAstro! Send me my daily rashifal",
  askQuestion: "Hi BoloAstro! I have some astrology questions",
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/boloastro",
  instagram: "https://instagram.com/boloastro",
  twitter: "https://twitter.com/boloastro",
  youtube: "https://youtube.com/@boloastro",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "/refund" },
] as const;

// SEO Meta configurations per page
export const SEO_CONFIG = {
  home: {
    title: "BoloAstro - Free Kundali on WhatsApp | Vedic Astrology + AI",
    description: "Get your free kundali and horoscope predictions on WhatsApp. BoloAstro combines Vedic astrology with AI for accurate marriage, career, and life predictions.",
    keywords: "kundali, horoscope, vedic astrology, rashifal, marriage prediction, career astrology, free kundali",
  },
  about: {
    title: "About BoloAstro - Our Mission & Story | Vedic Astrology Experts",
    description: "Learn about BoloAstro's mission to make Vedic astrology accessible through AI. Trusted by 100,000+ users for accurate predictions.",
    keywords: "about boloastro, vedic astrology experts, astrology company india",
  },
  services: {
    title: "Astrology Services - Kundali, Predictions & Consultation | BoloAstro",
    description: "Explore BoloAstro's astrology services: Free Kundali, Premium Reports, VIP Consultation, Match Making, Career & Finance Predictions.",
    keywords: "astrology services, kundali matching, career prediction, marriage astrology",
  },
  blog: {
    title: "Astrology Blog - Tips, Rashifal & Vedic Wisdom | BoloAstro",
    description: "Read astrology articles, daily rashifal, nakshatra guides, and Vedic wisdom on BoloAstro's blog.",
    keywords: "astrology blog, rashifal, nakshatra, vedic astrology tips",
  },
  privacy: {
    title: "Privacy Policy | BoloAstro",
    description: "BoloAstro's privacy policy. Learn how we protect your personal data and birth details.",
  },
  terms: {
    title: "Terms of Service | BoloAstro",
    description: "BoloAstro's terms and conditions for using our astrology services.",
  },
  refund: {
    title: "Refund Policy | BoloAstro",
    description: "BoloAstro's refund policy. 7-day money-back guarantee on all paid plans.",
  },
} as const;

// Pricing Plans
export const PRICING_PLANS = [
  {
    name: "Free",
    price: "₹0",
    period: "",
    description: "Get started with basic astrology",
    features: [
      "Basic Kundali",
      "Today's Rashifal",
      "Moon Sign Calculator",
      "3 Questions/day",
    ],
    cta: "Start Free",
    message: WHATSAPP_MESSAGES.freeKundali,
    popular: false,
  },
  {
    name: "Premium",
    price: "₹299",
    period: "/month",
    description: "Complete astrology guidance",
    features: [
      "Detailed Kundali PDF",
      "Unlimited Questions",
      "Marriage Predictions",
      "Career Analysis",
      "Yearly Forecast",
      "Remedies & Solutions",
    ],
    cta: "Get Premium",
    message: WHATSAPP_MESSAGES.premiumReport,
    popular: true,
  },
  {
    name: "VIP",
    price: "₹999",
    period: "/month",
    description: "Personal astrologer access",
    features: [
      "Everything in Premium",
      "Human Astrologer Access",
      "Video Consultation",
      "Priority Support",
      "Match Making Service",
      "Detailed Dasha Analysis",
    ],
    cta: "Go VIP",
    message: WHATSAPP_MESSAGES.vipConsultation,
    popular: false,
  },
] as const;
