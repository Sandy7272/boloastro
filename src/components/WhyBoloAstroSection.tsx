import { Shield, Zap, IndianRupee, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const trustPoints = [
  { 
    icon: Shield, 
    title: "Authentic Vedic Methods", 
    description: "Traditional astrology passed down through generations" 
  },
  { 
    icon: Zap, 
    title: "Instant Results", 
    description: "Get readings in seconds, not days" 
  },
  { 
    icon: IndianRupee, 
    title: "Affordable Prices", 
    description: "Premium quality at pocket-friendly rates" 
  },
  { 
    icon: Users, 
    title: "10,000+ Trusted Users", 
    description: "Join our growing community of believers" 
  },
  { 
    icon: Clock, 
    title: "24/7 Available", 
    description: "Ask questions anytime, anywhere" 
  },
];

const stats = [
  { value: "10K+", label: "Happy Users" },
  { value: "50K+", label: "Predictions" },
  { value: "4.9", label: "Rating" },
  { value: "24/7", label: "Available" },
];

const WhyBoloAstroSection = () => {
  return (
    <section className="py-24 lg:py-32" id="why-us">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">Why Choose Us</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Why BoloAstro?
              </h2>
              <p className="text-muted-foreground text-lg">
                We combine ancient Vedic wisdom with modern AI technology for accurate, instant predictions.
              </p>
            </div>

            {/* Trust Points */}
            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-semibold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyBoloAstroSection;
