import { useState } from "react";
import { motion } from "framer-motion";

type Language = "EN" | "HI";

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle = ({ className = "" }: LanguageToggleProps) => {
  const [language, setLanguage] = useState<Language>("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "HI" : "EN"));
    // In a real app, this would trigger translation context
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`relative flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted/40 border border-border/40 hover:border-gold/40 transition-all duration-300 text-sm font-medium ${className}`}
      aria-label="Toggle language"
    >
      <motion.span
        animate={{ 
          color: language === "EN" ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))" 
        }}
        className="transition-colors"
      >
        EN
      </motion.span>
      <span className="text-muted-foreground/50">|</span>
      <motion.span
        animate={{ 
          color: language === "HI" ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))" 
        }}
        className="transition-colors"
      >
        हिं
      </motion.span>
    </button>
  );
};

export default LanguageToggle;
