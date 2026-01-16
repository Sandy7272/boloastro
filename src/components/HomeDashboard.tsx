import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sun, Moon, Star, Calendar, Clock, Sparkles, 
  ArrowRight, TrendingUp, Heart, Briefcase,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ZodiacIcon, ZODIAC_SIGNS } from "@/components/ui/planetary-icons";
import ConstellationBackground from "@/components/ui/constellation-background";
import BirthDetailsForm from "@/components/BirthDetailsForm";
import KundaliResults from "@/components/KundaliResults";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/config/constants";

interface BirthDetails {
  name: string;
  date: string;
  time: string;
  place: string;
}

// Upcoming astrological events
const upcomingEvents = [
  { date: "Jan 29", event: "Full Moon in Leo", type: "moon" },
  { date: "Feb 1", event: "Mercury Direct", type: "planet" },
  { date: "Feb 12", event: "New Moon in Aquarius", type: "moon" },
  { date: "Feb 19", event: "Sun enters Pisces", type: "sun" },
];

// Quick action cards
const quickActions = [
  { icon: Sun, label: "Daily Horoscope", desc: "Your today's predictions", color: "from-amber-500/20 to-orange-500/10" },
  { icon: Heart, label: "Love Match", desc: "Check compatibility", color: "from-pink-500/20 to-rose-500/10" },
  { icon: Briefcase, label: "Career Forecast", desc: "Professional insights", color: "from-blue-500/20 to-cyan-500/10" },
  { icon: TrendingUp, label: "Wealth Analysis", desc: "Financial outlook", color: "from-green-500/20 to-emerald-500/10" },
];

const HomeDashboard = () => {
  const [showKundaliForm, setShowKundaliForm] = useState(false);
  const [kundaliDetails, setKundaliDetails] = useState<BirthDetails | null>(null);
  const [selectedZodiac, setSelectedZodiac] = useState<number | null>(null);

  const handleKundaliSubmit = (details: BirthDetails) => {
    setKundaliDetails(details);
    setShowKundaliForm(false);
  };

  const resetKundali = () => {
    setKundaliDetails(null);
    setShowKundaliForm(false);
  };

  // If kundali results are available, show them
  if (kundaliDetails) {
    return (
      <section className="relative min-h-screen pt-24 pb-32 px-4">
        <ConstellationBackground starCount={40} />
        <div className="relative z-10">
          <KundaliResults details={kundaliDetails} onReset={resetKundali} />
        </div>
      </section>
    );
  }

  // If kundali form is open
  if (showKundaliForm) {
    return (
      <section className="relative min-h-screen pt-24 pb-32 px-4 flex items-center justify-center">
        <ConstellationBackground starCount={40} />
        <div className="relative z-10 w-full">
          <motion.button
            onClick={() => setShowKundaliForm(false)}
            className="mb-6 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mx-auto"
            whileHover={{ x: -5 }}
          >
            ← Back to Dashboard
          </motion.button>
          <BirthDetailsForm onSubmit={handleKundaliSubmit} />
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen pt-24 pb-32 px-4" id="tools">
      <ConstellationBackground starCount={40} />
      
      <div className="container mx-auto relative z-10 space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            Welcome to <span className="text-gradient-saffron">BoloAstro</span>
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your personal AI astrologer. Explore your destiny with Vedic wisdom.
          </p>
        </motion.div>

        {/* Generate Kundali CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card variant="glass" className="overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
            <CardContent className="relative p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-xl font-semibold mb-1">
                  Get Your Free Kundali
                </h3>
                <p className="text-sm text-muted-foreground">
                  Enter your birth details and discover your cosmic blueprint
                </p>
              </div>
              <Button
                onClick={() => setShowKundaliForm(true)}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 h-12 px-6 rounded-xl"
              >
                Generate Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {quickActions.map((action, i) => (
            <motion.a
              key={action.label}
              href={getWhatsAppLink(`Hi! I want ${action.label.toLowerCase()} reading.`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card variant="glass" className={`h-full bg-gradient-to-br ${action.color} border-border/30 hover:border-primary/30 transition-colors`}>
                <CardContent className="p-4">
                  <action.icon className="w-6 h-6 text-primary mb-3" />
                  <p className="font-medium text-sm">{action.label}</p>
                  <p className="text-xs text-muted-foreground">{action.desc}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        {/* Select Your Zodiac */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card variant="glass">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-display flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Select Your Sign
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2">
                {ZODIAC_SIGNS.map((_, i) => (
                  <ZodiacIcon
                    key={i}
                    index={i}
                    size="sm"
                    selected={selectedZodiac === i}
                    onClick={() => setSelectedZodiac(i)}
                  />
                ))}
              </div>
              
              {selectedZodiac !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 p-4 rounded-xl bg-muted/30 border border-border/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{ZODIAC_SIGNS[selectedZodiac].symbol}</span>
                      <div>
                        <p className="font-semibold">{ZODIAC_SIGNS[selectedZodiac].name}</p>
                        <p className="text-sm text-muted-foreground">{ZODIAC_SIGNS[selectedZodiac].hindi}</p>
                      </div>
                    </div>
                    <Button variant="whatsapp" size="sm" asChild>
                      <a
                        href={getWhatsAppLink(`Hi! I'm ${ZODIAC_SIGNS[selectedZodiac].name}. Send me my horoscope.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Get Horoscope
                      </a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card variant="glass">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-display flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Upcoming Cosmic Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, i) => (
                  <motion.div
                    key={event.event}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {event.type === "moon" ? (
                        <Moon className="w-5 h-5 text-primary" />
                      ) : event.type === "sun" ? (
                        <Sun className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Star className="w-5 h-5 text-purple-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{event.event}</p>
                      <p className="text-xs text-muted-foreground">{event.date}, 2025</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeDashboard;
