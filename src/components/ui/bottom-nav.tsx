/**
 * BottomNav Component - Mobile Navigation Bar
 * 
 * Features:
 * - Fixed bottom navigation for mobile
 * - Safe area padding for notched devices
 * - Prominent WhatsApp CTA
 * - Smooth animations
 */

import { motion } from "framer-motion";
import { Home, LayoutGrid, Sparkles, Info, MessageCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/config/constants";

interface NavItem {
  icon: typeof Home;
  label: string;
  path: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", path: "/" },
  { icon: LayoutGrid, label: "Services", path: "/#services" },
  { icon: MessageCircle, label: "Chat", path: getWhatsAppLink(WHATSAPP_MESSAGES.default), isExternal: true },
  { icon: Sparkles, label: "Kundali", path: "/#birth-details-form" },
  { icon: Info, label: "About", path: "/about" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (item: NavItem) => {
    if (item.isExternal) {
      window.open(item.path, "_blank");
    } else if (item.path.startsWith("/#")) {
      const sectionId = item.path.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.path);
    }
  };

  const isActive = (path: string) => {
    if (path.startsWith("/#")) return false;
    if (path.startsWith("http")) return false;
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      aria-label="Mobile navigation"
    >
      {/* Glass background with safe area */}
      <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-lg">
        {/* Navigation items */}
        <div className="flex items-center justify-around px-1 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {navItems.map((item, index) => {
            const active = isActive(item.path);
            const isChat = item.label === "Chat";
            
            return (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`
                  relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all min-w-[56px]
                  ${isChat 
                    ? "bg-[#25D366] -mt-5 shadow-lg shadow-[#25D366]/30 px-4 py-2" 
                    : active 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
              >
                {/* Active indicator */}
                {active && !isChat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <item.icon 
                  className={`relative z-10 ${isChat ? "w-5 h-5 text-white" : "w-5 h-5"}`} 
                  aria-hidden="true"
                />
                
                <span className={`
                  relative z-10 text-[10px] mt-0.5 font-medium leading-tight
                  ${isChat ? "text-white" : ""}
                `}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default BottomNav;
