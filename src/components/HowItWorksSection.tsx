import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Calendar,
    step: "1",
    title: "Enter Birth Details",
    description: "Share your date, time, and place of birth for accurate analysis.",
  },
  {
    icon: Sparkles,
    step: "2",
    title: "AI Analyzes Kundali",
    description: "Our AI processes your birth chart using authentic Vedic methods.",
  },
  {
    icon: MessageCircle,
    step: "3",
    title: "Get Instant Guidance",
    description: "Receive detailed predictions and ask unlimited follow-up questions.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 lg:py-32" id="how-it-works">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting your astrology reading takes less than a minute.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}

              {/* Step number & Icon */}
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-2xl bg-card border border-border flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
