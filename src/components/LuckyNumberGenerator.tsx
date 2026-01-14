import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";

const LuckyNumberGenerator = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNumbers = () => {
    setIsGenerating(true);
    setNumbers([]);
    
    // Generate 3 lucky numbers with animation
    const newNumbers: number[] = [];
    
    const generateOne = (index: number) => {
      setTimeout(() => {
        const num = Math.floor(Math.random() * 99) + 1;
        newNumbers.push(num);
        setNumbers([...newNumbers]);
        
        if (index === 2) {
          setIsGenerating(false);
        }
      }, (index + 1) * 500);
    };
    
    [0, 1, 2].forEach(generateOne);
  };

  return (
    <div className="bg-glass-premium rounded-2xl p-6 border border-gold/15">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber/30 to-gold/20 flex items-center justify-center">
          <Hash className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold">Lucky Numbers</h3>
          <p className="text-sm text-muted-foreground">Based on cosmic energy</p>
        </div>
      </div>

      <Button
        onClick={generateNumbers}
        disabled={isGenerating}
        className="w-full bg-gradient-to-r from-amber to-gold hover:opacity-90 mb-6"
      >
        {isGenerating ? (
          <>
            <Sparkles className="w-4 h-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            Generate Lucky Numbers
          </>
        )}
      </Button>

      {/* Numbers Display */}
      <div className="flex justify-center gap-4">
        <AnimatePresence mode="popLayout">
          {numbers.map((num, index) => (
            <motion.div
              key={`${index}-${num}`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-saffron/10 border border-gold/30 flex items-center justify-center"
            >
              <span className="text-2xl font-display font-bold text-gold">{num}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Placeholder boxes when no numbers */}
        {numbers.length === 0 && !isGenerating && [0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-2xl bg-muted/20 border border-border/30 flex items-center justify-center"
          >
            <span className="text-2xl font-display text-muted-foreground/30">?</span>
          </div>
        ))}
      </div>

      {numbers.length === 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground mt-4"
        >
          Today's lucky numbers for you! 🍀
        </motion.p>
      )}
    </div>
  );
};

export default LuckyNumberGenerator;
