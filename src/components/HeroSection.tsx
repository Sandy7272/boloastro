import { MessageCircle, Star, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import zodiacWheel from "@/assets/zodiac-wheel.png";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%20BoloAstro!%20I%20want%20to%20know%20my%20horoscope";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background decorations */}
      <div className="absolute inset-0 stars-bg opacity-50" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-dark/30 to-cosmic-dark/60" />
      
      {/* Floating planets */}
      <div className="absolute top-24 left-[10%] animate-float-slow">
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gold to-saffron opacity-70" />
      </div>
      <div className="absolute top-40 right-[15%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-saffron to-gold opacity-50" />
      </div>
      <div className="absolute bottom-[30%] left-[8%] animate-float-slow" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 rounded-full bg-gold opacity-50" />
      </div>
      <div className="absolute top-[45%] right-[8%] animate-twinkle">
        <Star className="w-3 h-3 text-gold/50" fill="currentColor" />
      </div>
      <div className="absolute top-32 left-1/4 animate-twinkle" style={{ animationDelay: '0.5s' }}>
        <Star className="w-4 h-4 text-saffron/40" fill="currentColor" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/25 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Star className="w-4 h-4 text-gold" fill="currentColor" />
              <span className="text-sm text-gold font-semibold tracking-wide">AI-Powered Vedic Astrology</span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-gradient-saffron">BoloAstro</span>
              <span className="block mt-3 text-foreground text-4xl md:text-5xl lg:text-6xl font-semibold">Your Personal AI Astrologer</span>
            </motion.h1>
            
            {/* Tagline */}
            <motion.p 
              className="text-lg text-gold/80 font-medium italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              — Chat With Your Destiny —
            </motion.p>
            
            {/* Subtext */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get accurate kundali, daily horoscope & instant astrology answers on WhatsApp. 
              <span className="text-foreground/90 font-medium"> Apni kismat jaano, ghar baithe!</span>
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button variant="whatsapp" size="xl" className="group btn-premium-glow" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                onClick={() => scrollToSection("#services")}
              >
                <Moon className="w-5 h-5" />
                Generate Free Kundali
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/30 to-saffron/20 border-2 border-cosmic-dark flex items-center justify-center"
                    >
                      <Sun className="w-4 h-4 text-gold/70" />
                    </div>
                  ))}
                </div>
                <span className="font-medium">10,000+ Users</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
                <span className="ml-2 font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content - Zodiac wheel */}
          <motion.div 
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-gold/15 via-saffron/5 to-transparent blur-3xl" />
            
            {/* Zodiac wheel */}
            <div className="relative">
              <div className="animate-spin-slow">
                <img 
                  src={zodiacWheel} 
                  alt="Zodiac Wheel - Vedic Astrology" 
                  className="w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
              
              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-radial from-gold/30 to-transparent rounded-full animate-pulse-glow" />
            </div>
            
            {/* Floating WhatsApp mockup */}
            <motion.div 
              className="absolute -bottom-2 -right-2 md:bottom-8 md:-right-4 bg-glass rounded-2xl p-4 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">BoloAstro Bot</p>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online • Typing...
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cosmic-dark via-cosmic-dark/80 to-transparent" />
    </section>
  );
};

export default HeroSection;