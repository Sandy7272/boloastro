import { MessageCircle, Clock, Shield, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20start%20my%20astrology%20journey";

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
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 stars-bg opacity-15" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#25D366]/15 to-[#128C7E]/8 rounded-3xl p-8 md:p-12 lg:p-16 border border-[#25D366]/25 backdrop-blur-xl shadow-2xl shadow-[#25D366]/5">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left content */}
              <ScrollReveal direction="left" delay={0.1}>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/30">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span className="text-sm text-[#25D366] font-semibold">WhatsApp Bot</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                    Meet Your AI <span className="text-[#25D366]">Astrologer</span> on WhatsApp
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    No complicated apps, no waiting in queues. Just send a message and get instant, 
                    accurate astrology predictions directly on WhatsApp. 
                    <span className="text-foreground font-medium"> Bilkul free mein shuru karein!</span>
                  </p>
                  
                  <Button variant="whatsapp" size="xl" className="group btn-premium-glow" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                      Start Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
              
              {/* Right content - Features grid */}
              <StaggerContainer className="grid grid-cols-2 gap-5 lg:gap-6" staggerDelay={0.1}>
                {features.map((feature, index) => (
                  <StaggerItem key={index} direction="right">
                    <div 
                      className="bg-cosmic-dark/60 backdrop-blur-xl rounded-2xl p-6 border border-[#25D366]/15 hover:border-[#25D366]/40 transition-all duration-300 h-full hover-lift"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center mb-4 border border-[#25D366]/20">
                        <feature.icon className="w-6 h-6 text-[#25D366]" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1.5">{feature.title}</h3>
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