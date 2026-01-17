import { 
  Moon, 
  Sun, 
  Heart, 
  Briefcase, 
  Coins, 
  Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20know%20about%20";

const services = [
  {
    icon: Moon,
    title: "Kundali",
    description: "Complete Vedic birth chart analysis",
    query: "kundali",
  },
  {
    icon: Heart,
    title: "Love & Marriage",
    description: "Partner compatibility & timing",
    query: "marriage%20prediction",
  },
  {
    icon: Briefcase,
    title: "Career",
    description: "Job changes & growth insights",
    query: "career%20guidance",
  },
  {
    icon: Coins,
    title: "Money",
    description: "Financial forecasts & advice",
    query: "wealth%20forecast",
  },
  {
    icon: Sparkles,
    title: "Remedies",
    description: "Solutions for planetary issues",
    query: "remedies",
  },
  {
    icon: Sun,
    title: "Horoscope",
    description: "Daily & monthly predictions",
    query: "daily%20horoscope",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card/50" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">Our Services</p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg">
            Expert guidance for every aspect of your life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={`${WHATSAPP_LINK}${service.query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="bg-background border border-border rounded-xl p-6 lg:p-8 text-center hover-lift cursor-pointer group-hover:border-primary/30">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
