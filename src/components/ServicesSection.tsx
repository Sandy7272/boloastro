import { Card, CardContent } from "@/components/ui/card";
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

const services = [
  {
    icon: Moon,
    title: "Kundali & Birth Chart",
    description: "Get your complete Vedic birth chart with planetary positions and dasha predictions.",
    gradient: "from-cosmic-purple/20 to-royal/20",
  },
  {
    icon: Sun,
    title: "Daily Horoscope",
    description: "Start your day with personalized rashifal based on your moon sign.",
    gradient: "from-saffron/20 to-gold/20",
  },
  {
    icon: MessageCircle,
    title: "Ask Any Question",
    description: "Get instant answers to your life questions from our AI astrologer.",
    gradient: "from-royal/20 to-cosmic-purple/20",
  },
  {
    icon: Heart,
    title: "Marriage Prediction",
    description: "Know your ideal marriage time, partner compatibility & mangal dosha status.",
    gradient: "from-destructive/20 to-saffron/20",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Discover your ideal career path and job change timing based on your stars.",
    gradient: "from-gold/20 to-saffron/20",
  },
  {
    icon: Coins,
    title: "Wealth Forecast",
    description: "Understand your financial destiny and best periods for investments.",
    gradient: "from-gold/30 to-saffron/20",
  },
  {
    icon: Plane,
    title: "Foreign Travel",
    description: "Find out if stars favor your foreign settlement or travel dreams.",
    gradient: "from-royal/20 to-cosmic-purple/20",
  },
  {
    icon: Baby,
    title: "Children Prediction",
    description: "Know about santaan yoga, timing & blessings in your kundali.",
    gradient: "from-saffron/20 to-gold/20",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="services">
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            What We <span className="text-gradient-saffron">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the ancient wisdom of Vedic astrology, powered by modern AI technology. 
            Get accurate predictions for every aspect of your life.
          </p>
        </ScrollReveal>
        
        {/* Services grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card 
                variant="service"
                className="group cursor-pointer h-full"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-saffron" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-saffron transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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
