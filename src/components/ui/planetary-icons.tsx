import { motion } from "framer-motion";
import { LucideIcon, Sun, Moon, Sparkles, Star, CircleDot } from "lucide-react";

// Planetary symbols and their meanings
export const PLANETS = {
  sun: { symbol: "☉", name: "Sun", hindi: "सूर्य", icon: Sun, color: "hsl(var(--gold))" },
  moon: { symbol: "☽", name: "Moon", hindi: "चंद्र", icon: Moon, color: "hsl(var(--cream))" },
  mars: { symbol: "♂", name: "Mars", hindi: "मंगल", icon: Sparkles, color: "hsl(0 70% 50%)" },
  mercury: { symbol: "☿", name: "Mercury", hindi: "बुध", icon: CircleDot, color: "hsl(120 40% 50%)" },
  jupiter: { symbol: "♃", name: "Jupiter", hindi: "गुरु", icon: Star, color: "hsl(45 80% 55%)" },
  venus: { symbol: "♀", name: "Venus", hindi: "शुक्र", icon: Sparkles, color: "hsl(330 60% 70%)" },
  saturn: { symbol: "♄", name: "Saturn", hindi: "शनि", icon: CircleDot, color: "hsl(220 30% 45%)" },
  rahu: { symbol: "☊", name: "Rahu", hindi: "राहु", icon: Moon, color: "hsl(260 40% 45%)" },
  ketu: { symbol: "☋", name: "Ketu", hindi: "केतु", icon: Star, color: "hsl(30 50% 50%)" },
} as const;

export type PlanetKey = keyof typeof PLANETS;

interface PlanetaryIconProps {
  planet: PlanetKey;
  size?: "sm" | "md" | "lg" | "xl";
  showLabel?: boolean;
  animated?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-lg",
  md: "w-12 h-12 text-2xl",
  lg: "w-16 h-16 text-3xl",
  xl: "w-20 h-20 text-4xl",
};

const containerSizes = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
  xl: "w-24 h-24",
};

export const PlanetaryIcon = ({ 
  planet, 
  size = "md", 
  showLabel = false, 
  animated = true,
  className = "" 
}: PlanetaryIconProps) => {
  const planetData = PLANETS[planet];
  
  return (
    <motion.div 
      className={`flex flex-col items-center gap-2 ${className}`}
      whileHover={animated ? { scale: 1.1 } : undefined}
      whileTap={animated ? { scale: 0.95 } : undefined}
    >
      <motion.div
        className={`${containerSizes[size]} rounded-full flex items-center justify-center bg-gradient-to-br from-muted/40 to-muted/20 border border-border/30 backdrop-blur-sm`}
        style={{ 
          boxShadow: `0 0 20px ${planetData.color}20, inset 0 1px 0 rgba(255,255,255,0.1)` 
        }}
        animate={animated ? { 
          boxShadow: [
            `0 0 15px ${planetData.color}10`,
            `0 0 25px ${planetData.color}30`,
            `0 0 15px ${planetData.color}10`,
          ]
        } : undefined}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className={sizeClasses[size]} style={{ color: planetData.color }}>
          {planetData.symbol}
        </span>
      </motion.div>
      
      {showLabel && (
        <div className="text-center">
          <p className="text-xs font-medium text-foreground">{planetData.name}</p>
          <p className="text-xs text-muted-foreground">{planetData.hindi}</p>
        </div>
      )}
    </motion.div>
  );
};

// Zodiac signs for the birth chart
export const ZODIAC_SIGNS = [
  { symbol: "♈", name: "Aries", hindi: "मेष" },
  { symbol: "♉", name: "Taurus", hindi: "वृषभ" },
  { symbol: "♊", name: "Gemini", hindi: "मिथुन" },
  { symbol: "♋", name: "Cancer", hindi: "कर्क" },
  { symbol: "♌", name: "Leo", hindi: "सिंह" },
  { symbol: "♍", name: "Virgo", hindi: "कन्या" },
  { symbol: "♎", name: "Libra", hindi: "तुला" },
  { symbol: "♏", name: "Scorpio", hindi: "वृश्चिक" },
  { symbol: "♐", name: "Sagittarius", hindi: "धनु" },
  { symbol: "♑", name: "Capricorn", hindi: "मकर" },
  { symbol: "♒", name: "Aquarius", hindi: "कुंभ" },
  { symbol: "♓", name: "Pisces", hindi: "मीन" },
] as const;

interface ZodiacIconProps {
  index: number;
  size?: "sm" | "md" | "lg";
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ZodiacIcon = ({ 
  index, 
  size = "md", 
  selected = false, 
  onClick,
  className = "" 
}: ZodiacIconProps) => {
  const sign = ZODIAC_SIGNS[index];
  
  return (
    <motion.button
      onClick={onClick}
      className={`
        ${containerSizes[size]} rounded-xl flex flex-col items-center justify-center gap-1 transition-all
        ${selected 
          ? "bg-gradient-to-br from-primary/20 to-accent/10 border-primary/40 shadow-glow-sm" 
          : "bg-muted/20 border-border/30 hover:bg-muted/40 hover:border-border/50"
        }
        border backdrop-blur-sm cursor-pointer
        ${className}
      `}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={`${size === "sm" ? "text-xl" : size === "md" ? "text-2xl" : "text-3xl"} ${selected ? "text-primary" : "text-foreground"}`}>
        {sign.symbol}
      </span>
      {size !== "sm" && (
        <span className={`text-xs ${selected ? "text-primary" : "text-muted-foreground"}`}>
          {sign.hindi}
        </span>
      )}
    </motion.button>
  );
};

// Planet grid for displaying birth chart
interface PlanetGridProps {
  planets?: PlanetKey[];
  className?: string;
}

export const PlanetGrid = ({ 
  planets = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"],
  className = ""
}: PlanetGridProps) => {
  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {planets.map((planet) => (
        <PlanetaryIcon key={planet} planet={planet} size="md" showLabel />
      ))}
    </div>
  );
};

export default PlanetaryIcon;
