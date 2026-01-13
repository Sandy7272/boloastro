import { MessageCircle, Calendar, FileText, HelpCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Click WhatsApp Button",
    description: "Start a chat with our AI astrologer on WhatsApp. No app download needed!",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Enter Your Details",
    description: "Share your date of birth, time, and place for accurate predictions.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Get Instant Report",
    description: "Receive your personalized kundali and astrology insights immediately.",
  },
  {
    icon: HelpCircle,
    step: "04",
    title: "Ask Unlimited Questions",
    description: "Chat anytime to get answers about career, love, health, and more.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-cosmic-light/40 to-cosmic-dark" />
      <div className="nebula-bg opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-20 space-y-6">
          <div className="ornament-divider mb-8">✦</div>
          <p className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">How It Works</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            How It <span className="text-gradient-saffron">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Getting your astrology reading is as simple as sending a WhatsApp message.
          </p>
        </ScrollReveal>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="relative group text-center">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[60%] w-full h-0.5 bg-gradient-to-r from-gold/40 to-transparent" />
                )}
                <div className="space-y-5">
                  <div className="relative inline-block">
                    <div className="w-28 h-28 rounded-3xl bg-glass-premium border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:shadow-xl group-hover:shadow-gold/15 transition-all duration-400">
                      <step.icon className="w-12 h-12 text-gold" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-saffron flex items-center justify-center text-cosmic-dark font-bold text-sm shadow-lg shadow-gold/30">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default HowItWorksSection;