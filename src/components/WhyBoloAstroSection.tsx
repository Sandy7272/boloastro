import { Shield, Zap, IndianRupee, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const WhyBoloAstroSection = () => {
  const { t } = useTranslation();

  const trustPoints = [
    { 
      icon: Shield, 
      title: t('trust.authenticTitle'), 
      description: t('trust.authenticDesc')
    },
    { 
      icon: Zap, 
      title: t('trust.instantTitle'), 
      description: t('trust.instantDesc')
    },
    { 
      icon: IndianRupee, 
      title: t('trust.affordableTitle'), 
      description: t('trust.affordableDesc')
    },
    { 
      icon: Users, 
      title: t('trust.trustedTitle'), 
      description: t('trust.trustedDesc')
    },
    { 
      icon: Clock, 
      title: t('trust.availableTitle'), 
      description: t('trust.availableDesc')
    },
  ];

  const stats = [
    { value: "10K+", label: t('trust.happyUsers') },
    { value: "50K+", label: t('trust.predictions') },
    { value: "4.9", label: t('trust.rating') },
    { value: "24/7", label: t('trust.available') },
  ];

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
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                {t('trust.badge')}
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                {t('trust.title')}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t('trust.subtitle')}
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