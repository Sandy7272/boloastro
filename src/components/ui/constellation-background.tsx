import { motion } from "framer-motion";
import { memo, useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

interface ConstellationBackgroundProps {
  starCount?: number;
  className?: string;
}

const ConstellationBackground = memo(({ starCount = 50, className = "" }: ConstellationBackgroundProps) => {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      delay: Math.random() * 3,
    }));
  }, [starCount]);

  // Create constellation lines connecting nearby stars
  const constellationLines = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    const connectionDistance = 15;
    
    for (let i = 0; i < Math.min(stars.length, 20); i++) {
      for (let j = i + 1; j < Math.min(stars.length, 20); j++) {
        const dist = Math.sqrt(
          Math.pow(stars[i].x - stars[j].x, 2) + Math.pow(stars[i].y - stars[j].y, 2)
        );
        if (dist < connectionDistance && lines.length < 15) {
          lines.push({
            x1: stars[i].x,
            y1: stars[i].y,
            x2: stars[j].x,
            y2: stars[j].y,
          });
        }
      }
    }
    return lines;
  }, [stars]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      
      {/* Stars */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Constellation lines */}
        {constellationLines.map((line, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="hsl(var(--gold) / 0.15)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
        
        {/* Stars */}
        {stars.map((star) => (
          <motion.circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill="hsl(var(--gold))"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
});

ConstellationBackground.displayName = "ConstellationBackground";

export default ConstellationBackground;
