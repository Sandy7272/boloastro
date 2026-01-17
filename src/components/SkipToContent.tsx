/**
 * SkipToContent Component - Phase 6: Accessibility
 * 
 * Provides a skip link for keyboard users to jump directly to main content.
 * This is a WCAG 2.1 AA requirement for navigation.
 */

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
