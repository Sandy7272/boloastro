import { MessageCircle, Clock, Shield, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20start%20my%20astrology%20journey";

const features = [
  { icon: Clock, title: "24/7 Available", description: "Our AI astrologer never sleeps" },
  { icon: Zap, title: "Instant Replies", description: "Get answers in seconds" },
  { icon: Smartphone, title: "No App Needed", description: "Works right in WhatsApp" },
  { icon: Shield, title: "Privacy Safe", description: "Your data stays secure" },
];

const WhatsAppSection = () => {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" aria-labelledby="whatsapp-heading">
      <div className="nebula-bg opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 stars-bg opacity-15" aria-hidden="true" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#25D366]/20 via-[#128C7E]/10 to-[#25D366]/15 rounded-[2rem] p-10 md:p-14 lg:p-20 border border-[#25D366]/30 backdrop-blur-2xl shadow-2xl shadow-[#25D366]/10">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40" role="status">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
                    <span className="text-sm text-[#25D366] font-bold tracking-wide">WhatsApp Bot</span>
                  </div>
                  
                  <h2 id="whatsapp-heading" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                    Meet Your AI <span className="text-[#25D366]">Astrologer</span> on WhatsApp
                  </h2>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    No complicated apps, no waiting in queues. Just send a message and get instant, 
                    accurate astrology predictions directly on WhatsApp. 
                    <span className="text-foreground font-semibold block mt-2">Bilkul free mein shuru karein!</span>
                  </p>
                  
                  <Button 
                    variant="whatsapp" 
                    size="xl" 
                    className="group btn-premium-glow text-lg px-10 py-7 rounded-2xl focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2" 
                    asChild
                  >
                    <a 
                      href={WHATSAPP_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Start Chat on WhatsApp - Opens in new tab"
                    >
                      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      Start Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
              
              <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
                {features.map((feature, index) => (
                  <StaggerItem key={index} direction="right">
                    <div className="bg-cosmic-dark/70 backdrop-blur-2xl rounded-2xl p-7 border border-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-400 h-full hover-lift" role="article">
                      <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center mb-5 border border-[#25D366]/30" aria-hidden="true">
                        <feature.icon className="w-7 h-7 text-[#25D366]" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                      <p className="text-base text-muted-foreground">{feature.description}</p>
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