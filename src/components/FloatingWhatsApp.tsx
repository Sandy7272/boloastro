import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/config/constants";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when footer is visible
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(footerRect.top > windowHeight - 100);
      }
    };

    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 8 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                className="absolute right-20 bottom-3 bg-card text-foreground px-4 py-2 rounded-xl shadow-lg whitespace-nowrap font-medium text-sm border border-border"
              >
                💬 Chat Now
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-card border-r border-t border-border" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-16 h-16 bg-[#25D366] rounded-full shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat Now on WhatsApp"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            
            {/* Icon container */}
            <span className="relative flex items-center justify-center w-full h-full">
              <MessageCircle className="w-8 h-8 text-white" />
            </span>
          </motion.a>
          
          {/* Chat Now label for mobile */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-medium whitespace-nowrap">
            Chat Now
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
