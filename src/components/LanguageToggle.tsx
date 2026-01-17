/**
 * LanguageToggle Component - Phase 3: Enhanced Language Selector
 * 
 * Features:
 * - Dropdown with EN, HI, MR options
 * - Persists selection in localStorage
 * - Shows native language names
 * - Accessible with ARIA labels
 * - Animated dropdown with framer-motion
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
  flag: string; // Emoji flag for visual identification
}

const languages: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
  { code: "hi", label: "Hindi", nativeLabel: "हिंदी", flag: "🇮🇳" },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी", flag: "🇮🇳" },
];

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle = ({ className = "" }: LanguageToggleProps) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem("boloastro_language");
    return (saved as Language) || "en";
  });

  // Sync with i18n on mount
  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

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
    setCurrentLang(lang);
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
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label={t("language.select") || "Select language"}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-foreground hidden sm:inline">{currentLanguage?.nativeLabel}</span>
        <span className="text-foreground sm:hidden">{currentLanguage?.code.toUpperCase()}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
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
            className="absolute right-0 top-full mt-2 z-50 min-w-[180px] bg-card border border-border rounded-xl shadow-xl overflow-hidden"
            role="listbox"
            aria-label={t("language.select") || "Select language"}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-muted/50 transition-colors focus:outline-none focus:bg-muted/50 ${
                  currentLang === lang.code ? "bg-primary/10" : ""
                }`}
                role="option"
                aria-selected={currentLang === lang.code}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{lang.flag}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {lang.nativeLabel}
                    </p>
                    <p className="text-xs text-muted-foreground">{lang.label}</p>
                  </div>
                </div>
                {currentLang === lang.code && (
                  <Check className="w-4 h-4 text-primary" />
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
