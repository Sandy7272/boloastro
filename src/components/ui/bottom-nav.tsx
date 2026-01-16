import { motion } from "framer-motion";
import { Home, LayoutGrid, Sparkles, Settings, MessageCircle } from "lucide-react";
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
  { icon: LayoutGrid, label: "Services", path: "/services" },
  { icon: MessageCircle, label: "Chat", path: getWhatsAppLink(WHATSAPP_MESSAGES.default), isExternal: true },
  { icon: Sparkles, label: "Predict", path: "/#tools" },
  { icon: Settings, label: "More", path: "/about" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (item: NavItem) => {
    if (item.isExternal) {
      window.open(item.path, "_blank");
    } else if (item.path.startsWith("/#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(item.path.replace("/", ""));
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(item.path.replace("/", ""));
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
    >
      {/* Glass background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-t border-border/30" />
      
      {/* Safe area padding for iOS */}
      <div className="relative px-2 pb-safe">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item, index) => {
            const active = isActive(item.path);
            const isChat = item.label === "Chat";
            
            return (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`
                  relative flex flex-col items-center justify-center py-2 px-4 rounded-2xl transition-all
                  ${isChat 
                    ? "bg-[#25D366] -mt-6 shadow-lg shadow-[#25D366]/30" 
                    : active 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }
                `}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Active indicator */}
                {active && !isChat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <item.icon 
                  className={`relative z-10 ${isChat ? "w-6 h-6 text-white" : "w-5 h-5"}`} 
                />
                
                <span className={`
                  relative z-10 text-xs mt-1 font-medium
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
