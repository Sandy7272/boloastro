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
    <section className="py-24 lg:py-32 relative overflow-hidden" id="services">
      <div className="absolute inset-0 stars-bg opacity-20" />
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20 space-y-5">
          <p className="text-gold font-medium uppercase tracking-widest text-sm">Our Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            What We <span className="text-gradient-saffron">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
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
                className="group cursor-pointer h-full hover-lift"
              >
                <CardContent className="p-6 lg:p-7 space-y-5 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-saffron/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:border-gold/40 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-auto text-gold hover:text-cosmic-dark hover:bg-gold/90 border border-gold/30 hover:border-gold transition-all duration-300"
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