/**
 * DynamicCounter - Shows dynamic user activity
 * 
 * Features:
 * - Animated count display
 * - Randomly varies count for realism
 * - Updates periodically
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

interface DynamicCounterProps {
  className?: string;
}

const DynamicCounter = ({ className = "" }: DynamicCounterProps) => {
  const { t } = useTranslation();
  const [count, setCount] = useState(1240);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Randomly vary the count every 30 seconds for realism
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        // Random variation between 1000 and 2500
        const baseCount = 1000 + Math.floor(Math.random() * 1500);
        // Add some random increment
        const increment = Math.floor(Math.random() * 50);
        setCount(baseCount + increment);
        setIsVisible(true);
      }, 300);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center justify-center gap-2 text-sm text-muted-foreground ${className}`}
        >
          <Zap className="w-4 h-4 text-primary animate-pulse" />
          <span>
            <span className="font-semibold text-primary">{count.toLocaleString()}</span>
            {" "}people checked their Kundali today
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DynamicCounter;
