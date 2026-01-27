/**
 * HeroSection Component - Mobile-First Responsive Design
 * 
 * Features:
 * - Fully responsive for all screen sizes
 * - Clear value proposition with simple language
 * - Dual CTAs (Generate Kundali + WhatsApp)
 * - Mobile-optimized form with large touch targets
 */

import { useState } from "react";
import { MessageCircle, ArrowRight, CheckCircle2, AlertCircle, Clock, RotateCcw, Sparkles, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import DynamicCounter from "@/components/DynamicCounter";
import { trackFormSubmit } from "@/lib/analytics";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getWhatsAppLinkWithDetails, getWhatsAppLink } from "@/config/constants";

interface FormData {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  timeFormat: "12h" | "24h";
  timePeriod: "AM" | "PM";
  placeOfBirth: string;
}

interface ValidationState {
  isValid: boolean;
  touched: boolean;
}

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    timeFormat: "12h",
    timePeriod: "AM",
    placeOfBirth: "",
  });
  
  const [validation, setValidation] = useState<Record<"name" | "dateOfBirth" | "timeOfBirth" | "placeOfBirth", ValidationState>>({
    name: { isValid: false, touched: false },
    dateOfBirth: { isValid: false, touched: false },
    timeOfBirth: { isValid: false, touched: false },
    placeOfBirth: { isValid: false, touched: false },
  });
  
  type ValidatableField = "name" | "dateOfBirth" | "timeOfBirth" | "placeOfBirth";

  // Calculate form progress
  const calculateProgress = (): number => {
    let filledFields = 0;
    if (formData.name.trim().length >= 2) filledFields++;
    if (formData.dateOfBirth) filledFields++;
    if (formData.timeOfBirth) filledFields++;
    if (formData.placeOfBirth.trim().length >= 2) filledFields++;
    return (filledFields / 4) * 100;
  };

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

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    const validatableFields: ValidatableField[] = ["name", "dateOfBirth", "timeOfBirth", "placeOfBirth"];
    if (validatableFields.includes(field as ValidatableField) && validation[field as ValidatableField]?.touched) {
      setValidation(prev => ({
        ...prev,
        [field]: { isValid: validateField(field as ValidatableField, value), touched: true }
      }));
    }
  };

  const handleFieldBlur = (field: ValidatableField) => {
    setValidation(prev => ({
      ...prev,
      [field]: { isValid: validateField(field, formData[field]), touched: true }
    }));
  };

  const isFormValid = (): boolean => {
    const validatableFields: ValidatableField[] = ["name", "dateOfBirth", "timeOfBirth", "placeOfBirth"];
    return validatableFields.every(field => validateField(field, formData[field]));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setValidation({
      name: { isValid: validateField("name", formData.name), touched: true },
      dateOfBirth: { isValid: validateField("dateOfBirth", formData.dateOfBirth), touched: true },
      timeOfBirth: { isValid: validateField("timeOfBirth", formData.timeOfBirth), touched: true },
      placeOfBirth: { isValid: validateField("placeOfBirth", formData.placeOfBirth), touched: true },
    });

    if (!isFormValid()) return;

    trackFormSubmit(true, i18n.language);
    
    let displayTime = formData.timeOfBirth;
    if (formData.timeFormat === "12h" && formData.timeOfBirth) {
      displayTime = `${formData.timeOfBirth} ${formData.timePeriod}`;
    }
    
    const whatsappUrl = getWhatsAppLinkWithDetails({
      name: formData.name,
      dateOfBirth: formData.dateOfBirth,
      timeOfBirth: displayTime,
      placeOfBirth: formData.placeOfBirth,
      lang: i18n.language,
    });
    
    window.open(whatsappUrl, "_blank");
  };

  const handleClearForm = () => {
    setFormData({
      name: "",
      dateOfBirth: "",
      timeOfBirth: "",
      timeFormat: "12h",
      timePeriod: "AM",
      placeOfBirth: "",
    });
    setValidation({
      name: { isValid: false, touched: false },
      dateOfBirth: { isValid: false, touched: false },
      timeOfBirth: { isValid: false, touched: false },
      placeOfBirth: { isValid: false, touched: false },
    });
  };

  const getValidationIcon = (field: ValidatableField) => {
    if (!validation[field].touched) return null;
    return validation[field].isValid ? (
      <CheckCircle2 className="w-4 h-4 text-green-500" />
    ) : (
      <AlertCircle className="w-4 h-4 text-red-500" />
    );
  };

  const getInputClass = (field: ValidatableField): string => {
    const base = "h-12 sm:h-14 bg-background focus:border-primary text-base rounded-xl";
    if (!validation[field].touched) return `${base} border-border`;
    return validation[field].isValid 
      ? `${base} border-green-500 focus:border-green-500` 
      : `${base} border-red-500 focus:border-red-500`;
  };

  const progress = calculateProgress();

  return (
    <section 
      className="min-h-screen flex items-center pt-20 sm:pt-24 pb-24 sm:pb-16 relative overflow-hidden"
      id="main-content"
      aria-labelledby="hero-heading"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-primary font-medium">{t('hero.badge')}</span>
            </motion.div>
            
            {/* Main Headline */}
            <header className="space-y-4 sm:space-y-6">
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-[1.15] tracking-tight">
                {t('hero.headline')}
                <span className="block text-primary mt-1">{t('hero.headlineHighlight')}</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                {t('hero.subheadline')}
              </p>
            </header>

            {/* Value Propositions - Mobile optimized grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { icon: Zap, text: t('hero.instant'), subtext: "तुरंत रिपोर्ट" },
                { icon: Shield, text: "100% Safe", subtext: "डेटा सुरक्षित" },
                { icon: Users, text: t('hero.users').split(' ')[0], subtext: "भरोसेमंद" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-card/50 border border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-1 sm:mb-2">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground text-xs sm:text-sm text-center">{item.text}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground text-center">{item.subtext}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators - Hidden on mobile to save space */}
            <div className="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm text-muted-foreground">{t('hero.users')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">★★★★★</span>
                <span className="text-xs sm:text-sm text-muted-foreground">{t('hero.rating')}</span>
              </div>
            </div>

            {/* Secondary CTA - Direct WhatsApp (Hidden on mobile, shown below form) */}
            <div className="hidden lg:block pt-2">
              <Button 
                size="lg"
                variant="outline"
                className="gap-2 py-6 px-6 rounded-xl border-green-500/30 text-green-600 hover:bg-green-500/10"
                onClick={() => window.open(getWhatsAppLink("Hi! I want to ask about my horoscope"), "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                {t('nav.chatOnWhatsApp')}
              </Button>
            </div>
          </motion.div>

          {/* Right - Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="birth-details-form"
            className="w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl shadow-primary/5">
              {/* Form Header - More compact on mobile */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">
                  {t('hero.formTitle')}
                </h2>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {t('hero.formSubtitle')}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Progress</span>
                  <span className="text-xs font-medium text-primary">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name Field */}
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-medium flex items-center justify-between">
                    <span>{t('form.fullName')} <span className="text-red-500">*</span></span>
                    {getValidationIcon("name")}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t('form.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    onBlur={() => handleFieldBlur("name")}
                    className={getInputClass("name")}
                    required
                    autoComplete="name"
                  />
                  {validation.name.touched && !validation.name.isValid && (
                    <p className="text-xs text-red-500">{t("form.nameError")}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="space-y-1.5">
                  <Label htmlFor="dob" className="text-sm font-medium flex items-center justify-between">
                    <span>{t('form.dateOfBirth')} <span className="text-red-500">*</span></span>
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
                  />
                </div>

                {/* Time of Birth */}
                <div className="space-y-1.5">
                  <Label htmlFor="tob" className="text-sm font-medium flex items-center justify-between">
                    <span>{t('form.timeOfBirth')} <span className="text-red-500">*</span></span>
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
                    />
                    <ToggleGroup 
                      type="single" 
                      value={formData.timeFormat}
                      onValueChange={(value) => value && setFormData(prev => ({ ...prev, timeFormat: value as "12h" | "24h" }))}
                      className="border border-border rounded-xl flex-shrink-0"
                    >
                      <ToggleGroupItem value="12h" className="px-3 h-12 sm:h-14 text-xs sm:text-sm rounded-l-xl data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                        12H
                      </ToggleGroupItem>
                      <ToggleGroupItem value="24h" className="px-3 h-12 sm:h-14 text-xs sm:text-sm rounded-r-xl data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                        24H
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  {formData.timeFormat === "12h" && formData.timeOfBirth && (
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <ToggleGroup 
                        type="single" 
                        value={formData.timePeriod}
                        onValueChange={(value) => value && setFormData(prev => ({ ...prev, timePeriod: value as "AM" | "PM" }))}
                        className="border border-border rounded-lg flex-1"
                      >
                        <ToggleGroupItem value="AM" className="flex-1 h-10 text-xs sm:text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                          AM (सुबह)
                        </ToggleGroupItem>
                        <ToggleGroupItem value="PM" className="flex-1 h-10 text-xs sm:text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                          PM (शाम)
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  )}
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                    💡 {t('form.timeHint')}
                  </p>
                </div>

                {/* Place of Birth */}
                <div className="space-y-1.5">
                  <Label htmlFor="pob" className="text-sm font-medium flex items-center justify-between">
                    <span>{t('form.placeOfBirth')} <span className="text-red-500">*</span></span>
                    {getValidationIcon("placeOfBirth")}
                  </Label>
                  <Input
                    id="pob"
                    type="text"
                    placeholder={t('form.placePlaceholder')}
                    value={formData.placeOfBirth}
                    onChange={(e) => handleFieldChange("placeOfBirth", e.target.value)}
                    onBlur={() => handleFieldBlur("placeOfBirth")}
                    className={getInputClass("placeOfBirth")}
                    required
                    autoComplete="address-level2"
                  />
                </div>

                {/* Form Actions - Stacked on mobile */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-gold text-base sm:text-lg py-6 sm:py-7 rounded-xl gap-2 order-1 sm:order-2 sm:flex-1"
                    disabled={!isFormValid()}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('hero.cta')}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    className="py-6 sm:py-7 rounded-xl order-2 sm:order-1 sm:px-4"
                    onClick={handleClearForm}
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span className="sm:hidden ml-2">{t('form.clear')}</span>
                  </Button>
                </div>
              </form>

              {/* Security & Counter */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/50 space-y-3">
                <p className="text-[10px] sm:text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  {t('hero.dataSecure')}
                </p>
                <DynamicCounter />
              </div>
            </div>

            {/* Mobile WhatsApp CTA - Below form */}
            <div className="mt-4 lg:hidden">
              <Button 
                size="lg"
                variant="outline"
                className="w-full gap-2 py-5 rounded-xl border-green-500/30 text-green-600 hover:bg-green-500/10"
                onClick={() => window.open(getWhatsAppLink("Hi! I want to ask about my horoscope"), "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                {t('nav.chatOnWhatsApp')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
