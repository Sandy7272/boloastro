import { motion } from "framer-motion";
import { Star, Users, Award, Heart, Target, Sparkles, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { SITE_CONFIG } from "@/config/constants";

const stats = [
  { value: "100K+", label: "Happy Users", icon: Users },
  { value: "500K+", label: "Predictions Made", icon: Star },
  { value: "4.9★", label: "User Rating", icon: Award },
  { value: "24/7", label: "Available", icon: Heart },
];

const timeline = [
  { year: "2022", title: "BoloAstro Founded", description: "Started with a vision to make astrology accessible to everyone." },
  { year: "2023", title: "AI Integration", description: "Integrated advanced AI with traditional Vedic astrology." },
  { year: "2023", title: "10K Users", description: "Reached our first major milestone of 10,000 active users." },
  { year: "2024", title: "100K+ Users", description: "Trusted by over 100,000 users across India." },
];

const values = [
  { icon: Target, title: "Accuracy", description: "We combine AI precision with traditional Vedic wisdom for accurate predictions." },
  { icon: Heart, title: "Trust", description: "Your data is encrypted and never shared. We value your privacy." },
  { icon: Sparkles, title: "Accessibility", description: "Making astrology accessible to everyone through WhatsApp." },
  { icon: CheckCircle, title: "Authenticity", description: "Genuine Vedic astrology principles, not generic horoscopes." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 nebula-bg opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Making Astrology <br />
                  <span className="text-gradient-saffron">Accessible to Everyone</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {SITE_CONFIG.description}
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="text-center p-6 rounded-2xl bg-glass border border-gold/10">
                    <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-1">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Our <span className="text-gradient-saffron">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    BoloAstro was born from a simple observation: millions of Indians believe in astrology, 
                    yet accessing quality astrological guidance was either expensive or inconvenient.
                  </p>
                  <p>
                    We combined the ancient wisdom of Vedic astrology with modern AI technology to create 
                    an astrology companion that's available 24/7 on WhatsApp — the app everyone already uses.
                  </p>
                  <p>
                    Our mission is to make authentic Vedic astrology accessible, affordable, and convenient 
                    for every Indian, regardless of where they live or what they can afford.
                  </p>
                </div>
              </ScrollReveal>

              {/* Timeline */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-20 text-gold font-display font-bold">{item.year}</div>
                      <div className="flex-1 pb-6 border-l-2 border-gold/30 pl-6 relative">
                        <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-gold -translate-x-[7px]" />
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-b from-transparent via-cosmic-light/20 to-transparent">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Our <span className="text-gradient-saffron">Values</span>
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {values.map((value, index) => (
                <StaggerItem key={index}>
                  <div className="p-6 rounded-2xl bg-glass-premium border border-gold/10 h-full hover:border-gold/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-saffron/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Why Trust <span className="text-gradient-saffron">BoloAstro?</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    ✓ Based on authentic Vedic (Jyotish) astrology principles
                  </p>
                  <p>
                    ✓ AI trained on thousands of accurate horoscopes
                  </p>
                  <p>
                    ✓ Verified by professional astrologers
                  </p>
                  <p>
                    ✓ 100,000+ satisfied users across India
                  </p>
                  <p>
                    ✓ Transparent pricing with money-back guarantee
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
