import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, Moon, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConstellationBackground from "@/components/ui/constellation-background";
import logo from "@/assets/logo.png";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Sparkles,
    title: "Welcome to BoloAstro",
    subtitle: "Your Personal AI Astrologer",
    description: "Discover your destiny with the power of Vedic astrology and modern AI.",
  },
  {
    icon: Star,
    title: "Know Your Kundali",
    subtitle: "Birth Chart Analysis",
    description: "Get your complete birth chart with planetary positions and life predictions.",
  },
  {
    icon: Moon,
    title: "Daily Guidance",
    subtitle: "Horoscope & Rashifal",
    description: "Receive personalized daily, weekly, and monthly horoscope readings.",
  },
  {
    icon: MessageCircle,
    title: "Chat Anytime",
    subtitle: "WhatsApp Integration",
    description: "Ask questions and get instant answers from our AI astrologer on WhatsApp.",
  },
];

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleComplete();
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      localStorage.setItem("boloastro_onboarded", "true");
      onComplete();
    }, 500);
  };

  const slide = slides[currentSlide];
  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background"
        >
          <ConstellationBackground starCount={60} />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-between p-6 pb-safe">
            {/* Skip button */}
            <div className="w-full flex justify-end pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSkip}
                className="text-muted-foreground hover:text-foreground"
              >
                Skip
              </Button>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Logo on first slide */}
                  {currentSlide === 0 && (
                    <motion.img
                      src={logo}
                      alt="BoloAstro"
                      className="h-20 mx-auto logo-glow"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20"
                    initial={{ scale: 0.5, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                  >
                    <slide.icon className="w-12 h-12 text-primary" />
                  </motion.div>

                  {/* Text */}
                  <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-display font-bold">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-primary font-medium">
                      {slide.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom section */}
            <div className="w-full max-w-md space-y-6">
              {/* Progress dots */}
              <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  onClick={handleNext}
                  className="w-full h-14 rounded-2xl text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  {isLastSlide ? (
                    <>
                      Get Started
                      <Sparkles className="w-5 h-5 ml-2" />
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </motion.div>

              {/* Already have account */}
              <p className="text-center text-sm text-muted-foreground">
                Already using BoloAstro?{" "}
                <button 
                  onClick={handleComplete}
                  className="text-primary hover:underline"
                >
                  Skip intro
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnboardingScreen;
