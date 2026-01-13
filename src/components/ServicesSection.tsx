import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { 
  Moon, 
  Sun, 
  MessageCircle, 
  Heart, 
  Briefcase, 
  Coins, 
  Plane, 
  Baby 
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20know%20about%20";

const services = [
  {
    icon: Moon,
    title: "Kundali & Birth Chart",
    description: "Get your complete Vedic birth chart with planetary positions and dasha predictions.",
    query: "kundali",
  },
  {
    icon: Sun,
    title: "Daily Horoscope",
    description: "Start your day with personalized rashifal based on your moon sign.",
    query: "daily%20horoscope",
  },
  {
    icon: MessageCircle,
    title: "Ask Any Question",
    description: "Get instant answers to your life questions from our AI astrologer.",
    query: "astrology%20question",
  },
  {
    icon: Heart,
    title: "Marriage Prediction",
    description: "Know your ideal marriage time, partner compatibility & mangal dosha status.",
    query: "marriage%20prediction",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Discover your ideal career path and job change timing based on your stars.",
    query: "career%20guidance",
  },
  {
    icon: Coins,
    title: "Wealth Forecast",
    description: "Understand your financial destiny and best periods for investments.",
    query: "wealth%20forecast",
  },
  {
    icon: Plane,
    title: "Foreign Travel",
    description: "Find out if stars favor your foreign settlement or travel dreams.",
    query: "foreign%20travel",
  },
  {
    icon: Baby,
    title: "Children Prediction",
    description: "Know about santaan yoga, timing & blessings in your kundali.",
    query: "children%20prediction",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" id="services">
      {/* Background effects */}
      <div className="nebula-bg opacity-50" />
      <div className="absolute inset-0 stars-bg opacity-25" />
      
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/8 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-saffron/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-20 lg:mb-24 space-y-6">
          <div className="ornament-divider mb-8">✦</div>
          <p className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">Our Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            What We <span className="text-gradient-saffron">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover the ancient wisdom of Vedic astrology, powered by modern AI technology. 
            Get accurate predictions for every aspect of your life.
          </p>
        </ScrollReveal>
        
        {/* Services grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={0.08}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card 
                variant="service"
                className="group cursor-pointer h-full card-premium hover-lift"
              >
                <CardContent className="p-7 lg:p-8 space-y-6 flex flex-col h-full relative z-10">
                  {/* Icon container */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/25 to-saffron/15 border border-gold/25 flex items-center justify-center group-hover:scale-110 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-400">
                    <service.icon className="w-8 h-8 text-gold group-hover:text-gold-light transition-colors" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Button 
                    variant="ghost" 
                    size="default" 
                    className="w-full mt-auto text-gold hover:text-cosmic-dark hover:bg-gradient-to-r hover:from-gold hover:to-saffron border border-gold/40 hover:border-gold rounded-xl font-semibold transition-all duration-300"
                    asChild
                  >
                    <a href={`${WHATSAPP_LINK}${service.query}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Ask Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;