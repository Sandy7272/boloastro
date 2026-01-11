import { MessageCircle, Clock, Shield, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const features = [
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Our AI astrologer never sleeps",
  },
  {
    icon: Zap,
    title: "Instant Replies",
    description: "Get answers in seconds",
  },
  {
    icon: Smartphone,
    title: "No App Needed",
    description: "Works right in WhatsApp",
  },
  {
    icon: Shield,
    title: "Privacy Safe",
    description: "Your data stays secure",
  },
];

const WhatsAppSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 stars-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/10 rounded-3xl p-8 md:p-12 lg:p-16 border border-[#25D366]/30 backdrop-blur-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <ScrollReveal direction="left" delay={0.1}>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/40">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span className="text-sm text-[#25D366] font-medium">WhatsApp Bot</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                    Meet Your AI <span className="text-[#25D366]">Astrologer</span> on WhatsApp
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    No complicated apps, no waiting in queues. Just send a message and get instant, 
                    accurate astrology predictions directly on WhatsApp. 
                    <span className="text-foreground"> Bilkul free mein shuru karein!</span>
                  </p>
                  
                  <Button variant="whatsapp" size="xl" className="group">
                    <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                    Start Chat on WhatsApp
                  </Button>
                </div>
              </ScrollReveal>
              
              {/* Right content - Features grid */}
              <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
                {features.map((feature, index) => (
                  <StaggerItem key={index} direction="right">
                    <div 
                      className="bg-cosmic-dark/50 backdrop-blur-lg rounded-2xl p-6 border border-border/30 hover:border-[#25D366]/40 transition-all duration-300 h-full"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-[#25D366]" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatsAppSection;
