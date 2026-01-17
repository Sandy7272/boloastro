/**
 * Analytics Utility - Phase 5: Performance & Analytics
 * 
 * Provides event tracking for Google Analytics 4 (GA4).
 * Also includes helpers for common conversion events.
 * 
 * Setup:
 * 1. Add your GA4 Measurement ID to index.html
 * 2. Import and use track functions in components
 * 
 * Usage:
 * import { trackEvent, trackWhatsAppClick, trackFormSubmit } from '@/lib/analytics';
 * trackWhatsAppClick('hero_cta');
 */

// Type declarations for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Generic event tracking
 * @param eventName - GA4 event name (snake_case recommended)
 * @param params - Additional parameters to send with the event
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
    
    // Debug logging in development
    if (import.meta.env.DEV) {
      console.log(`[Analytics] Event: ${eventName}`, params);
    }
  }
};

/**
 * Track WhatsApp CTA clicks
 * @param location - Where the click originated (e.g., 'hero', 'footer', 'pricing')
 * @param service - Optional service type (e.g., 'free_kundali', 'premium')
 */
export const trackWhatsAppClick = (
  location: string,
  service?: string
): void => {
  trackEvent("whatsapp_click", {
    click_location: location,
    service_type: service || "general",
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track birth form submissions
 * @param hasAllFields - Whether all fields were filled
 * @param language - Current language selection
 */
export const trackFormSubmit = (
  hasAllFields: boolean,
  language: string
): void => {
  trackEvent("birth_form_submit", {
    complete: hasAllFields,
    language,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track pricing plan selection
 * @param planName - Name of the selected plan (e.g., 'Free', 'Premium', 'VIP')
 * @param planPrice - Price of the plan
 */
export const trackPlanSelect = (
  planName: string,
  planPrice: string
): void => {
  trackEvent("pricing_select", {
    plan_name: planName,
    plan_price: planPrice,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track page views (for SPAs)
 * @param pagePath - Current page path
 * @param pageTitle - Current page title
 */
export const trackPageView = (
  pagePath: string,
  pageTitle: string
): void => {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

/**
 * Track language changes
 * @param fromLang - Previous language
 * @param toLang - New language
 */
export const trackLanguageChange = (
  fromLang: string,
  toLang: string
): void => {
  trackEvent("language_change", {
    from_language: fromLang,
    to_language: toLang,
  });
};

/**
 * Track teaser result views
 * @param sunSign - Calculated sun sign
 */
export const trackTeaserView = (sunSign: string): void => {
  trackEvent("teaser_result_view", {
    sun_sign: sunSign,
  });
};

/**
 * Track FAQ interactions
 * @param questionIndex - Which FAQ was opened
 */
export const trackFAQOpen = (questionIndex: number): void => {
  trackEvent("faq_open", {
    question_index: questionIndex,
  });
};

/**
 * Track scroll depth milestones
 * @param percentage - Scroll depth percentage (25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage: number): void => {
  trackEvent("scroll_depth", {
    depth_percentage: percentage,
  });
};

/**
 * Initialize scroll depth tracking
 * Automatically tracks when user scrolls to 25%, 50%, 75%, 100%
 */
export const initScrollTracking = (): (() => void) => {
  const milestones = [25, 50, 75, 100];
  const reached = new Set<number>();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    milestones.forEach((milestone) => {
      if (scrolled >= milestone && !reached.has(milestone)) {
        reached.add(milestone);
        trackScrollDepth(milestone);
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  
  // Return cleanup function
  return () => window.removeEventListener("scroll", handleScroll);
};

/**
 * Performance timing helper
 * Use to track how long key interactions take
 */
export const trackTiming = (
  category: string,
  variable: string,
  timeMs: number
): void => {
  trackEvent("timing_complete", {
    timing_category: category,
    timing_variable: variable,
    timing_value: timeMs,
  });
};

export default {
  trackEvent,
  trackWhatsAppClick,
  trackFormSubmit,
  trackPlanSelect,
  trackPageView,
  trackLanguageChange,
  trackTeaserView,
  trackFAQOpen,
  trackScrollDepth,
  initScrollTracking,
  trackTiming,
};
