import { MessageCircle, Sparkles, Star, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import zodiacWheel from "@/assets/zodiac-wheel.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 stars-bg opacity-60" />
      
      {/* Floating planets */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gold to-saffron opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-saffron to-gold opacity-50" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float-slow" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 rounded-full bg-gold opacity-40" />
      </div>
      <div className="absolute top-60 right-40 animate-twinkle">
        <Star className="w-4 h-4 text-gold/40" fill="currentColor" />
      </div>
      <div className="absolute top-32 left-1/4 animate-twinkle" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="w-5 h-5 text-saffron/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 border border-saffron/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-saffron" />
              <span className="text-sm text-saffron font-medium">AI-Powered Vedic Astrology</span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-gradient-saffron">BoloAstro</span>
              <span className="block mt-2 text-foreground">Your Personal AI Astrologer</span>
            </motion.h1>
            
            {/* Subtext */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get accurate kundali, daily horoscope & instant astrology answers on WhatsApp. 
              <span className="text-foreground/80"> Apni kismat jaano, ghar baithe!</span>
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button variant="whatsapp" size="xl" className="group">
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Chat on WhatsApp
              </Button>
              <Button variant="heroOutline" size="xl">
                <Moon className="w-5 h-5" />
                Generate Free Kundali
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              className="flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-saffron/30 to-gold/30 border-2 border-cosmic-dark flex items-center justify-center"
                    >
                      <Sun className="w-4 h-4 text-gold/60" />
                    </div>
                  ))}
                </div>
                <span>10,000+ Users</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content - Zodiac wheel */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-saffron/20 via-transparent to-transparent blur-3xl" />
            
            {/* Zodiac wheel */}
            <div className="relative">
              <div className="animate-spin-slow">
                <img 
                  src={zodiacWheel} 
                  alt="Zodiac Wheel - Vedic Astrology" 
                  className="w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-radial from-gold/40 to-transparent rounded-full animate-pulse-glow" />
            </div>
            
            {/* Floating WhatsApp mockup hint */}
            <motion.div 
              className="absolute -bottom-4 -right-4 md:bottom-10 md:right-0 bg-glass rounded-2xl p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">BoloAstro Bot</p>
                  <p className="text-xs text-muted-foreground">Online • Typing...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cosmic-dark to-transparent" />
    </section>
  );
};

export default HeroSection;
