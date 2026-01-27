/**
 * LanguageToggle Component - Mobile-Optimized Language Selector
 * 
 * Features:
 * - Compact design for mobile navbar
 * - Dropdown with EN, HI, MR options
 * - Persists selection in localStorage
 * - Shows native language names
 * - Accessible with ARIA labels
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

type Language = "en" | "hi" | "mr";

interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "EN", flag: "🇬🇧" },
  { code: "hi", label: "Hindi", nativeLabel: "हिं", flag: "🇮🇳" },
  { code: "mr", label: "Marathi", nativeLabel: "मरा", flag: "🇮🇳" },
];

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle = ({ className = "" }: LanguageToggleProps) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Use i18n.language directly as single source of truth
  const currentLang = (i18n.language as Language) || "en";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("boloastro_language", lang);
    setIsOpen(false);
    
    // Update document lang attribute for SEO
    document.documentElement.lang = lang;
  };

  const currentLanguage = languages.find((l) => l.code === currentLang);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 min-w-0"
        aria-label={t("language.select") || "Select language"}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4 text-primary flex-shrink-0" />
        <span className="text-foreground text-xs sm:text-sm">{currentLanguage?.nativeLabel}</span>
        <ChevronDown
          className={`w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 z-[100] min-w-[160px] sm:min-w-[180px] bg-card border border-border rounded-xl shadow-xl overflow-hidden"
            role="listbox"
            aria-label={t("language.select") || "Select language"}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-3 sm:px-4 py-3 text-left flex items-center justify-between hover:bg-muted/50 transition-colors focus:outline-none focus:bg-muted/50 ${
                  currentLang === lang.code ? "bg-primary/10" : ""
                }`}
                role="option"
                aria-selected={currentLang === lang.code}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-base sm:text-lg">{lang.flag}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {lang.label}
                    </p>
                  </div>
                </div>
                {currentLang === lang.code && (
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
