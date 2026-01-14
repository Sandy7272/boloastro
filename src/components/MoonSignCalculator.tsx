import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/config/constants";

const MOON_SIGNS = [
  { name: "Aries", hindi: "मेष", symbol: "♈", dates: "Mar 21 - Apr 19" },
  { name: "Taurus", hindi: "वृषभ", symbol: "♉", dates: "Apr 20 - May 20" },
  { name: "Gemini", hindi: "मिथुन", symbol: "♊", dates: "May 21 - Jun 20" },
  { name: "Cancer", hindi: "कर्क", symbol: "♋", dates: "Jun 21 - Jul 22" },
  { name: "Leo", hindi: "सिंह", symbol: "♌", dates: "Jul 23 - Aug 22" },
  { name: "Virgo", hindi: "कन्या", symbol: "♍", dates: "Aug 23 - Sep 22" },
  { name: "Libra", hindi: "तुला", symbol: "♎", dates: "Sep 23 - Oct 22" },
  { name: "Scorpio", hindi: "वृश्चिक", symbol: "♏", dates: "Oct 23 - Nov 21" },
  { name: "Sagittarius", hindi: "धनु", symbol: "♐", dates: "Nov 22 - Dec 21" },
  { name: "Capricorn", hindi: "मकर", symbol: "♑", dates: "Dec 22 - Jan 19" },
  { name: "Aquarius", hindi: "कुंभ", symbol: "♒", dates: "Jan 20 - Feb 18" },
  { name: "Pisces", hindi: "मीन", symbol: "♓", dates: "Feb 19 - Mar 20" },
];

const MoonSignCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<typeof MOON_SIGNS[0] | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateMoonSign = () => {
    if (!birthDate) return;
    
    setIsCalculating(true);
    
    // Simulate calculation
    setTimeout(() => {
      const date = new Date(birthDate);
      const month = date.getMonth();
      const day = date.getDate();
      
      // Simple approximation based on date
      let signIndex = month;
      if (day >= 21) signIndex = (month + 1) % 12;
      
      setResult(MOON_SIGNS[signIndex]);
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <div className="bg-glass-premium rounded-2xl p-6 border border-gold/15">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cosmic-purple/30 to-gold/20 flex items-center justify-center">
          <Moon className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold">Moon Sign Calculator</h3>
          <p className="text-sm text-muted-foreground">Discover your Rashi</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Your Birth Date
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/40 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all text-foreground"
          />
        </div>

        <Button
          onClick={calculateMoonSign}
          disabled={!birthDate || isCalculating}
          className="w-full bg-gradient-to-r from-cosmic-purple to-gold hover:opacity-90"
        >
          {isCalculating ? (
            <>
              <Sparkles className="w-4 h-4 animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              <Moon className="w-4 h-4" />
              Find My Moon Sign
            </>
          )}
        </Button>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-5 rounded-xl bg-gradient-to-br from-gold/10 to-saffron/5 border border-gold/20 text-center"
            >
              <div className="text-5xl mb-3">{result.symbol}</div>
              <h4 className="text-2xl font-display font-bold text-gold">
                {result.name}
              </h4>
              <p className="text-lg text-muted-foreground">{result.hindi}</p>
              <p className="text-sm text-muted-foreground mt-2">{result.dates}</p>
              
              <Button
                variant="whatsapp"
                size="sm"
                className="mt-4"
                asChild
              >
                <a
                  href={getWhatsAppLink(`Hi! My moon sign is ${result.name}. ${WHATSAPP_MESSAGES.default}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Full Reading
                </a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MoonSignCalculator;
