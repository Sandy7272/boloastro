/**
 * SEO Component - Phase 4: Reusable SEO helper
 * 
 * Provides consistent SEO meta tags across all pages including:
 * - Title with brand suffix
 * - Meta description
 * - Keywords
 * - Canonical URL
 * - Open Graph tags
 * - Twitter Card tags
 * - Language meta
 * 
 * Usage:
 * <SEO 
 *   title="About Us"
 *   description="Learn about BoloAstro..."
 *   keywords="about, kundali, astrology"
 *   path="/about"
 * />
 */

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
  structuredData?: object | object[];
}

const SITE_URL = "https://boloastro.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const BRAND = "BoloAstro";

const SEO = ({
  title,
  description,
  keywords,
  path = "",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Format: "Page Title | BoloAstro" (max ~60 chars for Google)
  const fullTitle = title.includes(BRAND) ? title : `${title} | ${BRAND}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  
  // Get language-specific locale
  const getLocale = (lang: string) => {
    switch (lang) {
      case "hi": return "hi_IN";
      case "mr": return "mr_IN";
      default: return "en_IN";
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language */}
      <html lang={currentLang} />
      <meta httpEquiv="content-language" content={currentLang} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={getLocale(currentLang)} />
      <meta property="og:locale:alternate" content="hi_IN" />
      <meta property="og:locale:alternate" content="mr_IN" />
      <meta property="og:site_name" content={BRAND} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BoloAstro" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEO;

/**
 * Pre-configured SEO settings for common pages
 * Use these with the SEO component for consistency
 */
export const SEO_CONFIGS = {
  home: {
    title: "Free Kundali on WhatsApp – AI Vedic Astrology",
    description: "Get your free kundali and AI-powered Vedic astrology predictions on WhatsApp. Accurate janam kundali, rashifal, career, marriage, and life guidance. Trusted by 10,000+ Indians.",
    keywords: "kundali, janam kundali, free kundali, rashifal, horoscope, vedic astrology, career astrology, love marriage, panchang, AI astrology, कुंडली, राशिफल",
    path: "",
  },
  about: {
    title: "About Us – BoloAstro",
    description: "Learn about BoloAstro - India's trusted AI-powered Vedic astrology platform. Our mission is to make authentic astrology accessible to everyone on WhatsApp.",
    keywords: "about boloastro, vedic astrology, AI astrology, indian astrology, jyotish",
    path: "/about",
  },
  services: {
    title: "Astrology Services – Free Kundali, Match Making, Career Predictions",
    description: "Explore BoloAstro's astrology services: Free Kundali, Premium Reports, Match Making, Career & Finance predictions. Get personalized guidance on WhatsApp.",
    keywords: "kundali services, match making, gun milan, career astrology, finance astrology, premium kundali report",
    path: "/services",
  },
  privacy: {
    title: "Privacy Policy – BoloAstro",
    description: "Read BoloAstro's privacy policy. Learn how we collect, use, and protect your personal information.",
    keywords: "privacy policy, data protection, boloastro privacy",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service – BoloAstro",
    description: "BoloAstro terms of service. Understand our terms and conditions for using our astrology services.",
    keywords: "terms of service, terms and conditions, boloastro terms",
    path: "/terms",
  },
  refund: {
    title: "Refund Policy – BoloAstro",
    description: "BoloAstro refund policy. 7-day money-back guarantee on all paid services.",
    keywords: "refund policy, money back, boloastro refund",
    path: "/refund",
  },
};
