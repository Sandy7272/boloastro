import { Sparkles, Zap, Shield, Users, IndianRupee } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const trustPoints = [
  { icon: Sparkles, title: "AI + Vedic Astrology", description: "Modern technology meets ancient wisdom for accurate predictions" },
  { icon: Zap, title: "Instant Response", description: "Get your readings in seconds, not days" },
  { icon: IndianRupee, title: "Affordable Pricing", description: "Premium astrology at pocket-friendly prices" },
  { icon: Shield, title: "Indian Astrology System", description: "Authentic Vedic methods used by generations" },
  { icon: Users, title: "Thousands of Users", description: "Trusted by 10,000+ satisfied customers across India" },
];

const WhyBoloAstroSection = () => {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" id="why-us">
      <div className="nebula-bg opacity-40" />
      <div className="absolute inset-0 stars-bg opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-10">
              <div>
                <div className="ornament-divider mb-8 justify-start">✦</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Why Choose <span className="text-gradient-saffron">BoloAstro?</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We combine the timeless wisdom of Vedic astrology with cutting-edge AI technology 
                  to deliver accurate, instant, and affordable predictions that you can trust.
                </p>
              </div>
              
              <StaggerContainer className="space-y-5" staggerDelay={0.1}>
                {trustPoints.map((point, index) => (
                  <StaggerItem key={index} direction="left">
                    <div className="flex items-start gap-5 group p-4 rounded-2xl hover:bg-gold/5 transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/25 to-saffron/15 border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-gold/15 transition-all duration-400">
                        <point.icon className="w-7 h-7 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg group-hover:text-gold transition-colors">{point.title}</h3>
                        <p className="text-base text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.15}>
            {[
              { value: "10K+", label: "Happy Users", gradient: "saffron" },
              { value: "50K+", label: "Predictions Made", gradient: "gold" },
              { value: "4.9", label: "User Rating", gradient: "saffron" },
              { value: "24/7", label: "Available", gradient: "gold" },
            ].map((stat, index) => (
              <StaggerItem key={index} direction="right">
                <div className="bg-glass-premium rounded-3xl p-10 text-center space-y-3 border-gradient hover-lift">
                  <div className={`text-5xl md:text-6xl font-display font-bold text-gradient-${stat.gradient}`}>{stat.value}</div>
                  <div className="text-muted-foreground text-base font-medium">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default WhyBoloAstroSection;