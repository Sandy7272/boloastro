import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

type Language = "en" | "hi" | "mr";

interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

const languages: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "hi", label: "Hindi", nativeLabel: "हिंदी" },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी" },
];

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle = ({ className = "" }: LanguageToggleProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem("boloastro_language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    // Sync with i18n on mount
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("boloastro_language", lang);
    setIsOpen(false);
  };

  const currentLanguage = languages.find((l) => l.code === currentLang);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 text-sm font-medium"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-foreground">{currentLanguage?.nativeLabel}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 z-50 min-w-[160px] bg-card border border-border rounded-xl shadow-xl overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-muted/50 transition-colors ${
                    currentLang === lang.code ? "bg-primary/10" : ""
                  }`}
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {lang.nativeLabel}
                    </p>
                    <p className="text-xs text-muted-foreground">{lang.label}</p>
                  </div>
                  {currentLang === lang.code && (
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
