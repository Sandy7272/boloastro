/**
 * DecorativeSeparator Component - Phase 2: Indian Visual Identity
 * 
 * A beautiful separator with a centered diamond ornament and 
 * extending gold gradient lines. Replaces plain <hr> elements
 * across the landing page for a premium Indian aesthetic.
 */

import { cn } from "@/lib/utils";

interface DecorativeSeparatorProps {
  className?: string;
  /** Size variant: sm (small), md (medium), lg (large) */
  size?: "sm" | "md" | "lg";
  /** Show the center diamond ornament */
  showOrnament?: boolean;
}

const DecorativeSeparator = ({ 
  className, 
  size = "md",
  showOrnament = true 
}: DecorativeSeparatorProps) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      lineWidth: "max-w-[60px]",
      ornamentSize: "w-2 h-2",
      gap: "gap-2",
    },
    md: {
      lineWidth: "max-w-[100px]",
      ornamentSize: "w-3 h-3",
      gap: "gap-3",
    },
    lg: {
      lineWidth: "max-w-[150px]",
      ornamentSize: "w-4 h-4",
      gap: "gap-4",
    },
  };

  const config = sizeConfig[size];

  return (
    <div 
      className={cn(
        "flex items-center justify-center w-full py-4",
        config.gap,
        className
      )}
      role="separator"
      aria-hidden="true"
    >
      {/* Left gradient line */}
      <div 
        className={cn(
          "flex-1 h-px",
          config.lineWidth,
          "bg-gradient-to-r from-transparent via-primary/30 to-primary/50"
        )}
      />
      
      {/* Center ornament - Diamond shape */}
      {showOrnament && (
        <div className="relative">
          {/* Outer glow */}
          <div 
            className={cn(
              "absolute inset-0 rotate-45 rounded-sm",
              "bg-primary/20 blur-sm scale-150"
            )}
          />
          {/* Main diamond */}
          <div 
            className={cn(
              config.ornamentSize,
              "rotate-45 rounded-sm",
              "bg-gradient-to-br from-primary via-primary to-accent",
              "shadow-sm"
            )}
          />
        </div>
      )}
      
      {/* Right gradient line */}
      <div 
        className={cn(
          "flex-1 h-px",
          config.lineWidth,
          "bg-gradient-to-l from-transparent via-primary/30 to-primary/50"
        )}
      />
    </div>
  );
};

/**
 * Ornate version with additional decorative elements
 * Use sparingly for major section breaks
 */
export const OrnateDecorativeSeparator = ({ className }: { className?: string }) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-center w-full py-6",
        className
      )}
      role="separator"
      aria-hidden="true"
    >
      {/* Left side decorations */}
      <div className="flex items-center gap-1">
        <div className="w-1 h-1 rounded-full bg-primary/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/50" />
      </div>
      
      {/* Center ornament - Lotus-inspired */}
      <div className="mx-4 relative">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rotate-45 bg-primary/40 rounded-sm" />
          <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-primary to-accent rounded-sm shadow-md" />
          <div className="w-2 h-2 rotate-45 bg-primary/40 rounded-sm" />
        </div>
      </div>
      
      {/* Right side decorations */}
      <div className="flex items-center gap-1">
        <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
        <div className="w-1 h-1 rounded-full bg-primary/30" />
      </div>
    </div>
  );
};

export default DecorativeSeparator;