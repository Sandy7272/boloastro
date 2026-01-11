import { Sparkles, Zap, Shield, Users, IndianRupee } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const trustPoints = [
  {
    icon: Sparkles,
    title: "AI + Vedic Astrology",
    description: "Modern technology meets ancient wisdom for accurate predictions",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Get your readings in seconds, not days",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Premium astrology at pocket-friendly prices",
  },
  {
    icon: Shield,
    title: "Indian Astrology System",
    description: "Authentic Vedic methods used by generations",
  },
  {
    icon: Users,
    title: "Thousands of Users",
    description: "Trusted by 10,000+ satisfied customers across India",
  },
];

const WhyBoloAstroSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="why-us">
      <div className="absolute inset-0 stars-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                Why Choose <span className="text-gradient-saffron">BoloAstro?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                We combine the timeless wisdom of Vedic astrology with cutting-edge AI technology 
                to deliver accurate, instant, and affordable predictions that you can trust.
              </p>
              
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {trustPoints.map((point, index) => (
                  <StaggerItem key={index} direction="left">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <point.icon className="w-5 h-5 text-saffron" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-saffron transition-colors">
                          {point.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
          
          {/* Right content - Stats */}
          <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.15}>
            <StaggerItem direction="right">
              <div className="bg-glass rounded-2xl p-8 text-center space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-saffron">10K+</div>
                <div className="text-muted-foreground">Happy Users</div>
              </div>
            </StaggerItem>
            <StaggerItem direction="right">
              <div className="bg-glass rounded-2xl p-8 text-center space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">50K+</div>
                <div className="text-muted-foreground">Predictions Made</div>
              </div>
            </StaggerItem>
            <StaggerItem direction="right">
              <div className="bg-glass rounded-2xl p-8 text-center space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-saffron">4.9</div>
                <div className="text-muted-foreground">User Rating</div>
              </div>
            </StaggerItem>
            <StaggerItem direction="right">
              <div className="bg-glass rounded-2xl p-8 text-center space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">24/7</div>
                <div className="text-muted-foreground">Available</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default WhyBoloAstroSection;
