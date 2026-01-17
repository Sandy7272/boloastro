/**
 * HeroSection Component - Phase 1 & 5
 * 
 * Purpose: Capture birth details and show teaser results before WhatsApp redirect
 * Flow: Form → Teaser Results → WhatsApp CTA
 * 
 * Key features:
 * - sessionStorage persistence (data survives refresh within session)
 * - Bilingual placeholders (English + Hindi)
 * - Inline validation with visual feedback
 * - Mobile-first responsive design
 * - Phase 5: Analytics tracking for form submission
 */

import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import KundaliTeaserResults from "@/components/KundaliTeaserResults";
import { trackFormSubmit } from "@/lib/analytics";

// Storage key for sessionStorage persistence
const STORAGE_KEY = "boloastro_birth_details";

interface FormData {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

// Validation state for each field
interface ValidationState {
  isValid: boolean;
  touched: boolean;
}

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });
  
  // Validation state per field
  const [validation, setValidation] = useState<Record<keyof FormData, ValidationState>>({
    name: { isValid: false, touched: false },
    dateOfBirth: { isValid: false, touched: false },
    timeOfBirth: { isValid: false, touched: false },
    placeOfBirth: { isValid: false, touched: false },
  });
  
  // Results display state
  const [showResults, setShowResults] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // Load saved data from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: FormData = JSON.parse(saved);
        setFormData(parsed);
        
        // Validate loaded data
        setValidation({
          name: { isValid: parsed.name.trim().length >= 2, touched: true },
          dateOfBirth: { isValid: !!parsed.dateOfBirth, touched: true },
          timeOfBirth: { isValid: !!parsed.timeOfBirth, touched: true },
          placeOfBirth: { isValid: parsed.placeOfBirth.trim().length >= 2, touched: true },
        });
        
        // If all fields are valid, show results automatically
        const allValid = parsed.name.trim().length >= 2 && 
                        !!parsed.dateOfBirth && 
                        !!parsed.timeOfBirth && 
                        parsed.placeOfBirth.trim().length >= 2;
        
        if (allValid) {
          setSubmittedData(parsed);
          setShowResults(true);
        }
      }
    } catch (e) {
      console.error("Failed to load saved birth details:", e);
    }
  }, []);

  // Validate a single field
  const validateField = (field: keyof FormData, value: string): boolean => {
    switch (field) {
      case "name":
        return value.trim().length >= 2;
      case "dateOfBirth":
        return !!value && new Date(value) <= new Date();
      case "timeOfBirth":
        return !!value;
      case "placeOfBirth":
        return value.trim().length >= 2;
      default:
        return false;
    }
  };

  // Handle field change with validation
  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Update validation if field was already touched
    if (validation[field].touched) {
      setValidation(prev => ({
        ...prev,
        [field]: { isValid: validateField(field, value), touched: true }
      }));
    }
  };

  // Handle field blur for validation
  const handleFieldBlur = (field: keyof FormData) => {
    setValidation(prev => ({
      ...prev,
      [field]: { isValid: validateField(field, formData[field]), touched: true }
    }));
  };

  // Check if entire form is valid
  const isFormValid = (): boolean => {
    return Object.keys(formData).every(field => 
      validateField(field as keyof FormData, formData[field as keyof FormData])
    );
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched for validation display
    setValidation({
      name: { isValid: validateField("name", formData.name), touched: true },
      dateOfBirth: { isValid: validateField("dateOfBirth", formData.dateOfBirth), touched: true },
      timeOfBirth: { isValid: validateField("timeOfBirth", formData.timeOfBirth), touched: true },
      placeOfBirth: { isValid: validateField("placeOfBirth", formData.placeOfBirth), touched: true },
    });

    if (!isFormValid()) {
      return;
    }

    // Phase 5: Track form submission
    trackFormSubmit(true, i18n.language);

    // Save to sessionStorage for persistence within session
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
    // Show teaser results instead of redirecting to WhatsApp
    setSubmittedData(formData);
    setShowResults(true);
  };

  // Reset to show form again (Edit details)
  const handleReset = () => {
    setShowResults(false);
    // Keep submitted data in state so form stays prefilled
  };

  // Get validation icon for a field
  const getValidationIcon = (field: keyof FormData) => {
    if (!validation[field].touched) return null;
    
    return validation[field].isValid ? (
      <CheckCircle2 className="w-4 h-4 text-green-500" />
    ) : (
      <AlertCircle className="w-4 h-4 text-red-500" />
    );
  };

  // Get input border class based on validation
  const getInputClass = (field: keyof FormData): string => {
    const base = "h-12 bg-background focus:border-primary text-base";
    if (!validation[field].touched) return `${base} border-border`;
    return validation[field].isValid 
      ? `${base} border-green-500 focus:border-green-500` 
      : `${base} border-red-500 focus:border-red-500`;
  };

  return (
    <section 
      className="min-h-screen flex items-center pt-28 pb-20 relative"
      id="main-content"
      aria-labelledby="hero-heading"
    >
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" aria-hidden="true" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          {showResults && submittedData ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              role="region"
              aria-label="Your Kundali Results"
            >
              <KundaliTeaserResults 
                details={submittedData} 
                onReset={handleReset}
                lang={i18n.language}
              />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Left - Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20" role="status">
                  <span className="text-sm text-primary font-medium">{t("hero.badge")}</span>
                </div>
                
                {/* Headline */}
                <header className="space-y-4">
                  <h1 id="hero-heading" className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
                    {t("hero.headline")}{" "}
                    <span className="text-gradient-gold">{t("hero.headlineHighlight")}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg">
                    {t("hero.subheadline")}
                  </p>
                </header>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground" role="list" aria-label="Trust indicators">
                  <div className="flex items-center gap-2" role="listitem">
                    <div className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                    <span>{t("hero.users")}</span>
                  </div>
                  <div className="flex items-center gap-2" role="listitem">
                    <span className="text-primary" aria-label="5 out of 5 stars">★★★★★</span>
                    <span>{t("hero.rating")}</span>
                  </div>
                  <div className="flex items-center gap-2" role="listitem">
                    <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                    <span>{t("hero.instant")}</span>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="lg:hidden">
                  <Button 
                    size="lg" 
                    className="w-full btn-gold text-lg py-6 rounded-xl gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => document.getElementById('birth-details-form')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Go to birth details form"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    {t("hero.cta")}
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Button>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                id="birth-details-form"
              >
                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg" role="region" aria-labelledby="form-title">
                  <div className="text-center mb-8">
                    <h2 id="form-title" className="text-2xl font-semibold text-foreground mb-2">
                      {t("hero.formTitle")}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {t("hero.formSubtitle")}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" aria-describedby="form-instructions" noValidate>
                    <p id="form-instructions" className="sr-only">
                      Fill in your birth details to get your personalized Kundali. All fields are required.
                    </p>
                    
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium flex items-center justify-between">
                        <span>{t("form.fullName")} <span className="text-red-500" aria-hidden="true">*</span></span>
                        {getValidationIcon("name")}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Apna naam / अपना नाम"
                        value={formData.name}
                        onChange={(e) => handleFieldChange("name", e.target.value)}
                        onBlur={() => handleFieldBlur("name")}
                        className={getInputClass("name")}
                        required
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={validation.name.touched && !validation.name.isValid}
                        aria-describedby={validation.name.touched && !validation.name.isValid ? "name-error" : undefined}
                      />
                      {validation.name.touched && !validation.name.isValid && (
                        <p id="name-error" className="text-xs text-red-500" role="alert">{t("form.nameError") || "कृपया अपना नाम दर्ज करें (Please enter your name)"}</p>
                      )}
                    </div>

                    {/* Date of Birth Field */}
                    <div className="space-y-2">
                      <Label htmlFor="dob" className="text-sm font-medium flex items-center justify-between">
                        <span>{t("form.dateOfBirth")} <span className="text-red-500" aria-hidden="true">*</span></span>
                        {getValidationIcon("dateOfBirth")}
                      </Label>
                      <Input
                        id="dob"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleFieldChange("dateOfBirth", e.target.value)}
                        onBlur={() => handleFieldBlur("dateOfBirth")}
                        className={getInputClass("dateOfBirth")}
                        required
                        max={new Date().toISOString().split("T")[0]}
                        aria-required="true"
                        aria-invalid={validation.dateOfBirth.touched && !validation.dateOfBirth.isValid}
                        aria-describedby={validation.dateOfBirth.touched && !validation.dateOfBirth.isValid ? "dob-error" : undefined}
                      />
                      {validation.dateOfBirth.touched && !validation.dateOfBirth.isValid && (
                        <p id="dob-error" className="text-xs text-red-500" role="alert">{t("form.dobError") || "जन्म तिथि चुनें (Select date of birth)"}</p>
                      )}
                    </div>

                    {/* Time of Birth Field */}
                    <div className="space-y-2">
                      <Label htmlFor="tob" className="text-sm font-medium flex items-center justify-between">
                        <span>{t("form.timeOfBirth")} <span className="text-red-500" aria-hidden="true">*</span></span>
                        {getValidationIcon("timeOfBirth")}
                      </Label>
                      <Input
                        id="tob"
                        type="time"
                        value={formData.timeOfBirth}
                        onChange={(e) => handleFieldChange("timeOfBirth", e.target.value)}
                        onBlur={() => handleFieldBlur("timeOfBirth")}
                        className={getInputClass("timeOfBirth")}
                        required
                        aria-required="true"
                        aria-invalid={validation.timeOfBirth.touched && !validation.timeOfBirth.isValid}
                        aria-describedby="tob-hint"
                      />
                      <p id="tob-hint" className="text-xs text-muted-foreground">
                        {t("form.timeHint") || "Tip: Check birth certificate / जन्म प्रमाणपत्र देखें"}
                      </p>
                    </div>

                    {/* Place of Birth Field */}
                    <div className="space-y-2">
                      <Label htmlFor="pob" className="text-sm font-medium flex items-center justify-between">
                        <span>{t("form.placeOfBirth")} <span className="text-red-500" aria-hidden="true">*</span></span>
                        {getValidationIcon("placeOfBirth")}
                      </Label>
                      <Input
                        id="pob"
                        type="text"
                        placeholder="City, State / शहर, राज्य"
                        value={formData.placeOfBirth}
                        onChange={(e) => handleFieldChange("placeOfBirth", e.target.value)}
                        onBlur={() => handleFieldBlur("placeOfBirth")}
                        className={getInputClass("placeOfBirth")}
                        required
                        autoComplete="address-level2"
                        aria-required="true"
                        aria-invalid={validation.placeOfBirth.touched && !validation.placeOfBirth.isValid}
                        aria-describedby={validation.placeOfBirth.touched && !validation.placeOfBirth.isValid ? "pob-error" : undefined}
                      />
                      {validation.placeOfBirth.touched && !validation.placeOfBirth.isValid && (
                        <p id="pob-error" className="text-xs text-red-500" role="alert">{t("form.placeError") || "जन्म स्थान दर्ज करें (Enter place of birth)"}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full btn-gold text-lg py-6 rounded-xl gap-2 mt-6 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      disabled={!isFormValid()}
                      aria-disabled={!isFormValid()}
                    >
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                      {t("form.submit")}
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-6">
                    {t("hero.dataSecure")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
