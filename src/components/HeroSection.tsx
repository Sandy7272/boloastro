import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import KundaliTeaserResults from "@/components/KundaliTeaserResults";

interface FormData {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

const HeroSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem("boloastro_birth_details");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
      } catch (e) {
        // Invalid data
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage
    localStorage.setItem("boloastro_birth_details", JSON.stringify(formData));
    // Show teaser results instead of redirecting to WhatsApp
    setSubmittedData(formData);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setSubmittedData(null);
  };

  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 relative">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          {showResults && submittedData ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <KundaliTeaserResults details={submittedData} onReset={handleReset} />
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm text-primary font-medium">{t("hero.badge")}</span>
                </div>
                
                {/* Headline */}
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
                    {t("hero.headline")}{" "}
                    <span className="text-gradient-gold">{t("hero.headlineHighlight")}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg">
                    {t("hero.subheadline")}
                  </p>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>{t("hero.users")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">★★★★★</span>
                    <span>{t("hero.rating")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{t("hero.instant")}</span>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="lg:hidden">
                  <Button 
                    size="lg" 
                    className="w-full btn-gold text-lg py-6 rounded-xl gap-2"
                    onClick={() => document.getElementById('mobile-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("hero.cta")}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                id="mobile-form"
              >
                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      {t("hero.formTitle")}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {t("hero.formSubtitle")}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">{t("form.fullName")}</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={t("form.namePlaceholder")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 bg-background border-border focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dob" className="text-sm font-medium">{t("form.dateOfBirth")}</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        className="h-12 bg-background border-border focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tob" className="text-sm font-medium">{t("form.timeOfBirth")}</Label>
                      <Input
                        id="tob"
                        type="time"
                        value={formData.timeOfBirth}
                        onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                        className="h-12 bg-background border-border focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pob" className="text-sm font-medium">{t("form.placeOfBirth")}</Label>
                      <Input
                        id="pob"
                        type="text"
                        placeholder={t("form.placePlaceholder")}
                        value={formData.placeOfBirth}
                        onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                        className="h-12 bg-background border-border focus:border-primary"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full btn-gold text-lg py-6 rounded-xl gap-2 mt-6"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {t("form.submit")}
                      <ArrowRight className="w-5 h-5" />
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
