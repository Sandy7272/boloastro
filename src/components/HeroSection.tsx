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
import { MessageCircle, ArrowRight, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import KundaliTeaserResults from "@/components/KundaliTeaserResults";
import OmLoader from "@/components/OmLoader";
import { trackFormSubmit } from "@/lib/analytics";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Storage key for sessionStorage persistence
const STORAGE_KEY = "boloastro_birth_details";

interface FormData {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  timeFormat: "12h" | "24h";
  timePeriod: "AM" | "PM";
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
    timeFormat: "12h",
    timePeriod: "AM",
    placeOfBirth: "",
  });
  
  // Validation state per field (only for required text fields)
  const [validation, setValidation] = useState<Record<"name" | "dateOfBirth" | "timeOfBirth" | "placeOfBirth", ValidationState>>({
    name: { isValid: false, touched: false },
    dateOfBirth: { isValid: false, touched: false },
    timeOfBirth: { isValid: false, touched: false },
    placeOfBirth: { isValid: false, touched: false },
  });
  
  type ValidatableField = "name" | "dateOfBirth" | "timeOfBirth" | "placeOfBirth";
  
  // Results display state
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const validateField = (field: ValidatableField, value: string): boolean => {
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
    
    // Update validation if field was already touched (only for validatable fields)
    const validatableFields: ValidatableField[] = ["name", "dateOfBirth", "timeOfBirth", "placeOfBirth"];
    if (validatableFields.includes(field as ValidatableField) && validation[field as ValidatableField]?.touched) {
      setValidation(prev => ({
        ...prev,
        [field]: { isValid: validateField(field as ValidatableField, value), touched: true }
      }));
    }
  };

  // Handle field blur for validation
  const handleFieldBlur = (field: ValidatableField) => {
    setValidation(prev => ({
      ...prev,
      [field]: { isValid: validateField(field, formData[field]), touched: true }
    }));
  };

  // Check if entire form is valid
  const isFormValid = (): boolean => {
    const validatableFields: ValidatableField[] = ["name", "dateOfBirth", "timeOfBirth", "placeOfBirth"];
    return validatableFields.every(field => 
      validateField(field, formData[field])
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
    
    // Show loading state with Om animation
    setIsLoading(true);
    setSubmittedData(formData);
    
    // Simulate kundali generation time (2-3 seconds for spiritual effect)
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2500);
  };

  // Reset to show form again (Edit details)
  const handleReset = () => {
    setShowResults(false);
    // Keep submitted data in state so form stays prefilled
  };

  // Get validation icon for a field
  const getValidationIcon = (field: ValidatableField) => {
    if (!validation[field].touched) return null;
    
    return validation[field].isValid ? (
      <CheckCircle2 className="w-4 h-4 text-green-500" />
    ) : (
      <AlertCircle className="w-4 h-4 text-red-500" />
    );
  };

  // Get input border class based on validation
  const getInputClass = (field: ValidatableField): string => {
    const base = "h-14 bg-background focus:border-primary text-lg";
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
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center min-h-[60vh]"
              role="status"
              aria-label="Generating your Kundali"
            >
              <OmLoader 
                size="lg" 
                message="Kundali taiyaar ho rahi hai..."
                showShlokas={true}
              />
            </motion.div>
          ) : showResults && submittedData ? (
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
                
                {/* Headline - Simplified for mass users */}
                <header className="space-y-4">
                  <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                    {t("hero.headline")}
                  </h1>
                  <p className="text-xl sm:text-2xl text-primary font-medium">
                    {t("hero.headlineHighlight")}
                  </p>
                  <p className="text-lg text-muted-foreground max-w-lg">
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
                      <Label htmlFor="name" className="text-base font-medium flex items-center justify-between">
                        <span>{t("form.fullName")} <span className="text-red-500" aria-hidden="true">*</span></span>
                        {getValidationIcon("name")}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={t("form.namePlaceholder")}
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
                        <p id="name-error" className="text-sm text-red-500" role="alert">{t("form.nameError")}</p>
                      )}
                    </div>

                    {/* Date of Birth Field */}
                    <div className="space-y-2">
                      <Label htmlFor="dob" className="text-base font-medium flex items-center justify-between">
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
                        <p id="dob-error" className="text-sm text-red-500" role="alert">{t("form.dobError")}</p>
                      )}
                    </div>

                    {/* Time of Birth Field with AM/PM Toggle */}
                    <div className="space-y-2">
                      <Label htmlFor="tob" className="text-base font-medium flex items-center justify-between">
                        <span>{t("form.timeOfBirth")} <span className="text-red-500" aria-hidden="true">*</span></span>
                        {getValidationIcon("timeOfBirth")}
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id="tob"
                          type="time"
                          value={formData.timeOfBirth}
                          onChange={(e) => handleFieldChange("timeOfBirth", e.target.value)}
                          onBlur={() => handleFieldBlur("timeOfBirth")}
                          className={`flex-1 ${getInputClass("timeOfBirth")}`}
                          required
                          aria-required="true"
                          aria-invalid={validation.timeOfBirth.touched && !validation.timeOfBirth.isValid}
                          aria-describedby="tob-hint"
                        />
                        {/* Time Format Toggle */}
                        <ToggleGroup 
                          type="single" 
                          value={formData.timeFormat}
                          onValueChange={(value) => value && setFormData(prev => ({ ...prev, timeFormat: value as "12h" | "24h" }))}
                          className="border border-border rounded-lg"
                        >
                          <ToggleGroupItem value="12h" className="px-3 h-14 text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                            12H
                          </ToggleGroupItem>
                          <ToggleGroupItem value="24h" className="px-3 h-14 text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                            24H
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </div>
                      {formData.timeFormat === "12h" && formData.timeOfBirth && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <ToggleGroup 
                            type="single" 
                            value={formData.timePeriod}
                            onValueChange={(value) => value && setFormData(prev => ({ ...prev, timePeriod: value as "AM" | "PM" }))}
                            className="border border-border rounded-lg"
                          >
                            <ToggleGroupItem value="AM" className="px-4 h-10 text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                              AM (सुबह)
                            </ToggleGroupItem>
                            <ToggleGroupItem value="PM" className="px-4 h-10 text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                              PM (शाम)
                            </ToggleGroupItem>
                          </ToggleGroup>
                        </div>
                      )}
                      <p id="tob-hint" className="text-xs text-muted-foreground">
                        {t("form.timeHint")}
                      </p>
                    </div>

                    {/* Place of Birth Field */}
                    <div className="space-y-2">
                      <Label htmlFor="pob" className="text-base font-medium flex items-center justify-between">
                        <span>{t("form.placeOfBirth")} <span className="text-red-500" aria-hidden="true">*</span></span>
                        {getValidationIcon("placeOfBirth")}
                      </Label>
                      <Input
                        id="pob"
                        type="text"
                        placeholder={t("form.placePlaceholder")}
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
                        <p id="pob-error" className="text-sm text-red-500" role="alert">{t("form.placeError")}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full btn-gold text-xl py-7 rounded-xl gap-3 mt-6 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      disabled={!isFormValid()}
                      aria-disabled={!isFormValid()}
                    >
                      <MessageCircle className="w-6 h-6" aria-hidden="true" />
                      {t("form.submit")}
                      <ArrowRight className="w-6 h-6" aria-hidden="true" />
                    </Button>
                  </form>

                  <p className="text-sm text-muted-foreground text-center mt-6">
                    🔒 {t("hero.dataSecure")}
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
