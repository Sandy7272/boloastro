import { MessageCircle, Calendar, FileText, HelpCircle } from "lucide-react";

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
    <section className="py-20 relative overflow-hidden" id="how-it-works">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-light/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            How It <span className="text-gradient-saffron">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting your astrology reading is as simple as sending a WhatsApp message. 
            Follow these easy steps!
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-saffron/40 to-transparent" />
              )}
              
              <div className="text-center space-y-4">
                {/* Step number with icon */}
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cosmic-light/80 to-cosmic-dark/60 backdrop-blur-lg border border-border/30 flex items-center justify-center group-hover:border-saffron/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-saffron/20">
                    <step.icon className="w-10 h-10 text-saffron" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-cosmic-dark font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
