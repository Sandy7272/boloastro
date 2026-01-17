/**
 * OmLoader Component - Phase 7: Om Symbol Loading Animation
 * 
 * A spiritual loading indicator featuring the sacred Om (ॐ) symbol
 * with pulsing glow animation. Perfect for kundali generation states.
 * 
 * Features:
 * - Pulsing Om symbol with golden glow
 * - Optional text message below
 * - Multiple size variants
 * - Can combine with ShlokaRotator
 */

import { cn } from "@/lib/utils";
import ShlokaRotator from "./ShlokaRotator";

interface OmLoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  message?: string;
  showShlokas?: boolean;
}

const OmLoader = ({
  className,
  size = "md",
  message = "Kundali taiyaar ho rahi hai...",
  showShlokas = true,
}: OmLoaderProps) => {
  const sizeClasses = {
    sm: "text-4xl",
    md: "text-6xl",
    lg: "text-8xl",
  };

  const glowSizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-6", className)}>
      {/* Om Symbol with Pulsing Glow */}
      <div className="relative">
        {/* Outer glow rings */}
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20",
            glowSizes[size],
            "animate-ping"
          )}
          style={{ animationDuration: "2s" }}
        />
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30",
            glowSizes[size],
            "animate-pulse"
          )}
        />
        
        {/* Om Symbol Container */}
        <div
          className={cn(
            "relative flex items-center justify-center rounded-full",
            "bg-gradient-to-br from-primary/10 to-accent/10",
            "border-2 border-primary/30",
            glowSizes[size]
          )}
        >
          {/* Om Symbol */}
          <span
            className={cn(
              "font-serif text-primary animate-pulse select-none",
              sizeClasses[size]
            )}
            style={{ 
              textShadow: "0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)",
              animationDuration: "1.5s"
            }}
          >
            ॐ
          </span>
        </div>
      </div>

      {/* Loading Message */}
      {message && (
        <p className="text-lg text-muted-foreground font-medium animate-pulse text-center">
          {message}
        </p>
      )}

      {/* Rotating Shlokas */}
      {showShlokas && (
        <div className="mt-4 max-w-md">
          <ShlokaRotator variant="compact" interval={5000} />
        </div>
      )}
    </div>
  );
};

export default OmLoader;