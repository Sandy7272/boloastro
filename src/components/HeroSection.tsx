import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20generate%20my%20kundali";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi BoloAstro! I want to generate my kundali.%0A%0AName: ${formData.name}%0ADate of Birth: ${formData.dateOfBirth}%0ATime of Birth: ${formData.timeOfBirth}%0APlace of Birth: ${formData.placeOfBirth}`;
    window.open(`https://wa.me/917261969798?text=${message}`, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 relative">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm text-primary font-medium">AI-Powered Vedic Astrology</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
                Chat With Your{" "}
                <span className="text-gradient-gold">Destiny</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get your free kundali & instant astrology guidance on WhatsApp. 
                Accurate predictions in seconds.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">★★★★★</span>
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Instant Response</span>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <Button 
                size="lg" 
                className="w-full btn-gold text-lg py-6 rounded-xl gap-2"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Generate Free Kundali
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Generate Free Kundali
                </h2>
                <p className="text-muted-foreground text-sm">
                  Enter your birth details to get started
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-background border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob" className="text-sm font-medium">Date of Birth</Label>
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
                  <Label htmlFor="tob" className="text-sm font-medium">Time of Birth</Label>
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
                  <Label htmlFor="pob" className="text-sm font-medium">Place of Birth</Label>
                  <Input
                    id="pob"
                    type="text"
                    placeholder="City, State"
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
                  Generate Free Kundali
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Your data is secure and never shared with third parties
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
