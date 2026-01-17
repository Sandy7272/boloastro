/**
 * ShlokaRotator Component - Phase 2: Indian Visual Identity
 * 
 * Displays rotating Sanskrit shlokas with translations.
 * Used during loading states to provide spiritual ambiance
 * and keep users engaged.
 * 
 * Features:
 * - Auto-rotates through shlokas every few seconds
 * - Shows Sanskrit text with English/Hindi translation
 * - Beautiful typography with serif fonts
 * - Optional spinner overlay for loading states
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Shloka {
  sanskrit: string;
  transliteration: string;
  english: string;
  hindi: string;
  source?: string;
}

interface ShlokaRotatorProps {
  className?: string;
  showSpinner?: boolean;
  interval?: number; // milliseconds
  variant?: "default" | "compact" | "card";
}

// Collection of auspicious shlokas - famous verses for loading states
const SHLOKAS: Shloka[] = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    transliteration: "Karmanye Vadhikaraste Ma Phaleshu Kadachana",
    english: "You have the right to work, but never to its fruits",
    hindi: "कर्म करो, फल की चिंता मत करो",
    source: "Bhagavad Gita 2.47",
  },
  {
    sanskrit: "सिद्धिर्भवतु कर्मणि",
    transliteration: "Siddhir Bhavatu Karmani",
    english: "May your actions be successful",
    hindi: "आपके कार्य सफल हों",
    source: "Vedic Blessing",
  },
  {
    sanskrit: "ॐ गं गणपतये नमः",
    transliteration: "Om Gam Ganapataye Namaha",
    english: "Salutations to Lord Ganesha, remover of obstacles",
    hindi: "विघ्नहर्ता गणेश जी को नमन",
    source: "Ganesha Mantra",
  },
  {
    sanskrit: "सर्वे भवन्तु सुखिनः",
    transliteration: "Sarve Bhavantu Sukhinah",
    english: "May all beings be happy",
    hindi: "सभी प्राणी सुखी हों",
    source: "Brihadaranyaka Upanishad",
  },
  {
    sanskrit: "योगः कर्मसु कौशलम्",
    transliteration: "Yogah Karmasu Kaushalam",
    english: "Yoga is skill in action",
    hindi: "योग कर्मों में कुशलता है",
    source: "Bhagavad Gita 2.50",
  },
  {
    sanskrit: "विद्या ददाति विनयं",
    transliteration: "Vidya Dadati Vinayam",
    english: "Knowledge gives humility",
    hindi: "विद्या विनम्रता देती है",
    source: "Hitopadesha",
  },
];

const ShlokaRotator = ({
  className,
  showSpinner = false,
  interval = 4000,
  variant = "default",
}: ShlokaRotatorProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentShloka = SHLOKAS[currentIndex];

  // Auto-rotate shlokas
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SHLOKAS.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  // Compact variant for loading overlays
  if (variant === "compact") {
    return (
      <div className={cn("text-center space-y-2", className)}>
        {showSpinner && (
          <motion.div
            className="w-8 h-8 mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
        )}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="space-y-1"
          >
            <p className="text-sm font-serif text-primary italic">
              "{currentShloka.sanskrit}"
            </p>
            <p className="text-xs text-muted-foreground">
              {currentShloka.english}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Card variant with background
  if (variant === "card") {
    return (
      <div
        className={cn(
          "bg-card border border-border rounded-xl p-6 text-center",
          "bg-gradient-to-br from-primary/5 to-accent/5",
          className
        )}
      >
        {showSpinner && (
          <motion.div
            className="w-12 h-12 mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-12 h-12 text-primary" />
          </motion.div>
        )}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {/* Sanskrit text */}
            <p className="text-2xl font-serif text-primary leading-relaxed">
              "{currentShloka.sanskrit}"
            </p>
            
            {/* Transliteration */}
            <p className="text-sm text-muted-foreground italic">
              — {currentShloka.transliteration}
            </p>
            
            {/* Divider */}
            <div className="w-16 h-px bg-primary/30 mx-auto my-3" />
            
            {/* Translation */}
            <p className="text-base text-foreground">
              {currentShloka.english}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentShloka.hindi}
            </p>
            
            {/* Source */}
            {currentShloka.source && (
              <p className="text-xs text-muted-foreground/70 mt-2">
                — {currentShloka.source}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {SHLOKAS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                i === currentIndex
                  ? "bg-primary w-4"
                  : "bg-primary/30 hover:bg-primary/50"
              )}
              aria-label={`Go to shloka ${i + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("text-center space-y-4", className)}>
      {showSpinner && (
        <motion.div
          className="w-16 h-16 mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-16 h-16 text-primary" />
        </motion.div>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-md mx-auto"
        >
          {/* Sanskrit text with decorative quotes */}
          <div className="relative">
            <span className="absolute -left-4 -top-2 text-4xl text-primary/20">"</span>
            <p className="text-xl md:text-2xl font-serif text-primary leading-relaxed px-6">
              {currentShloka.sanskrit}
            </p>
            <span className="absolute -right-4 -bottom-2 text-4xl text-primary/20">"</span>
          </div>
          
          {/* Transliteration */}
          <p className="text-sm text-muted-foreground italic">
            {currentShloka.transliteration}
          </p>
          
          {/* Translation */}
          <div className="pt-2 border-t border-border/50">
            <p className="text-base text-foreground">
              {currentShloka.english}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {currentShloka.hindi}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ShlokaRotator;