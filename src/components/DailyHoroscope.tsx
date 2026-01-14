import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/config/constants";

const ZODIAC_SIGNS = [
  { name: "Aries", hindi: "मेष", symbol: "♈" },
  { name: "Taurus", hindi: "वृषभ", symbol: "♉" },
  { name: "Gemini", hindi: "मिथुन", symbol: "♊" },
  { name: "Cancer", hindi: "कर्क", symbol: "♋" },
  { name: "Leo", hindi: "सिंह", symbol: "♌" },
  { name: "Virgo", hindi: "कन्या", symbol: "♍" },
  { name: "Libra", hindi: "तुला", symbol: "♎" },
  { name: "Scorpio", hindi: "वृश्चिक", symbol: "♏" },
  { name: "Sagittarius", hindi: "धनु", symbol: "♐" },
  { name: "Capricorn", hindi: "मकर", symbol: "♑" },
  { name: "Aquarius", hindi: "कुंभ", symbol: "♒" },
  { name: "Pisces", hindi: "मीन", symbol: "♓" },
];

const SAMPLE_PREDICTIONS = [
  "Today brings positive energy for new beginnings. Career opportunities may arise.",
  "Focus on relationships today. A meaningful conversation awaits.",
  "Financial gains are indicated. Trust your instincts in money matters.",
  "Health and wellness should be priority. Take time for self-care.",
  "Creative energy is high. Express yourself through art or writing.",
  "Travel plans may materialize. Adventure calls your name.",
];

const DailyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState<typeof ZODIAC_SIGNS[0] | null>(null);
  const [prediction, setPrediction] = useState("");

  const handleSignSelect = (sign: typeof ZODIAC_SIGNS[0]) => {
    setSelectedSign(sign);
    // Random prediction for demo
    setPrediction(SAMPLE_PREDICTIONS[Math.floor(Math.random() * SAMPLE_PREDICTIONS.length)]);
  };

  return (
    <div className="bg-glass-premium rounded-2xl p-6 border border-gold/15">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron/30 to-gold/20 flex items-center justify-center">
          <Sun className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold">Daily Rashifal</h3>
          <p className="text-sm text-muted-foreground">Select your zodiac sign</p>
        </div>
      </div>

      {/* Zodiac Grid */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {ZODIAC_SIGNS.map((sign) => (
          <motion.button
            key={sign.name}
            onClick={() => handleSignSelect(sign)}
            className={`p-3 rounded-xl text-center transition-all duration-300 ${
              selectedSign?.name === sign.name
                ? "bg-gradient-to-br from-gold/30 to-saffron/20 border-gold/40"
                : "bg-muted/20 hover:bg-muted/40 border-transparent"
            } border`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl block">{sign.symbol}</span>
            <span className="text-xs text-muted-foreground block mt-1">{sign.hindi}</span>
          </motion.button>
        ))}
      </div>

      {/* Prediction Result */}
      <AnimatePresence mode="wait">
        {selectedSign && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-5 rounded-xl bg-gradient-to-br from-gold/10 to-saffron/5 border border-gold/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{selectedSign.symbol}</span>
              <div>
                <h4 className="font-display font-semibold text-gold">{selectedSign.name}</h4>
                <p className="text-sm text-muted-foreground">{selectedSign.hindi} राशिफल</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 italic">"{prediction}"</p>
            
            <Button
              variant="whatsapp"
              size="sm"
              className="w-full"
              asChild
            >
              <a
                href={getWhatsAppLink(`Hi! I'm ${selectedSign.name} (${selectedSign.hindi}). Send me my detailed daily horoscope.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                Get Full Rashifal
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DailyHoroscope;
