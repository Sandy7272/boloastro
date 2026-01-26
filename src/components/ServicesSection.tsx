/**
 * ServicesSection - Enhanced UX with clearer explanations
 * 
 * Features:
 * - Benefit-focused cards with simple explanations
 * - Visual icons and cleaner layout
 * - WhatsApp integration maintained
 */

import { 
  Moon, 
  Sun, 
  Heart, 
  Briefcase, 
  Coins, 
  Sparkles,
  Star,
  TrendingUp,
  HeartHandshake,
  Gem,
  Calendar,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20know%20about%20";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Star,
      title: "AI Kundali Report",
      titleHi: "AI कुंडली रिपोर्ट",
      description: "Complete birth chart analysis with all 12 houses, planetary positions, and life predictions.",
      benefits: ["Detailed PDF report", "Dasha predictions", "Lucky factors"],
      query: "kundali%20report",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500",
    },
    {
      icon: HeartHandshake,
      title: "Kundali Milan",
      titleHi: "कुंडली मिलान",
      description: "Marriage compatibility matching with Gun Milan score and relationship guidance.",
      benefits: ["36 Gunas analysis", "Compatibility score", "Dosha check"],
      query: "kundali%20matching",
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-500",
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      titleHi: "करियर मार्गदर्शन",
      description: "Get insights about job changes, business opportunities, and ideal career paths.",
      benefits: ["Best career timing", "Job change advice", "Business yoga"],
      query: "career%20guidance",
      color: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Love & Marriage",
      titleHi: "प्रेम और विवाह",
      description: "Relationship predictions, marriage timing, and spouse characteristics from your chart.",
      benefits: ["Marriage timing", "Love compatibility", "Partner traits"],
      query: "love%20marriage%20prediction",
      color: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-500",
    },
    {
      icon: TrendingUp,
      title: "Wealth & Finance",
      titleHi: "धन और वित्त",
      description: "Financial forecasts, investment timing, and wealth-building opportunities in your chart.",
      benefits: ["Money periods", "Investment advice", "Property yoga"],
      query: "wealth%20finance%20prediction",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
    },
    {
      icon: Gem,
      title: "Remedies & Gemstones",
      titleHi: "उपाय और रत्न",
      description: "Personalized remedies, mantras, and gemstone recommendations for planetary issues.",
      benefits: ["Custom remedies", "Gemstone advice", "Mantra guidance"],
      query: "remedies%20gemstones",
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-card/30" id="services" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Services • हमारी सेवाएं
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Expert Guidance for Every
            <span className="text-primary block sm:inline"> Aspect of Life</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic Vedic astrology combined with AI precision. Get answers to your most important questions about career, love, money, and more.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={`${WHATSAPP_LINK}${service.query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-primary/80 mb-3">{service.titleHi}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-5">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-sm font-medium text-primary group-hover:gap-3 gap-2 transition-all">
                  Ask on WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Have a specific question? Our AI astrologer is available 24/7
          </p>
          <Button 
            size="lg" 
            className="btn-gold rounded-xl px-8 py-6 text-lg gap-2"
            asChild
          >
            <a href={`${WHATSAPP_LINK}my%20question`} target="_blank" rel="noopener noreferrer">
              <Sparkles className="w-5 h-5" />
              Chat with AI Pandit
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
