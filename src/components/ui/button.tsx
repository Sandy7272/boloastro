import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Phase 6: Larger touch targets (min 48px) for elderly users
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-muted hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Hero buttons for BoloAstro
        hero: "bg-gradient-to-r from-saffron to-gold text-cosmic-dark font-bold hover:shadow-xl hover:shadow-saffron/30 hover:scale-105 transform",
        heroOutline: "border-2 border-saffron/60 text-foreground bg-transparent hover:bg-saffron/10 hover:border-saffron hover:shadow-lg hover:shadow-saffron/20",
        whatsapp: "bg-[#25D366] text-white font-bold hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-105 transform",
        gold: "bg-gradient-to-r from-gold to-saffron-light text-cosmic-dark font-bold hover:shadow-xl hover:shadow-gold/30",
        cosmic: "bg-gradient-to-r from-royal to-cosmic-purple text-foreground font-bold hover:shadow-xl hover:shadow-cosmic-purple/30",
      },
      size: {
        // Phase 6: Min 48px touch targets for elderly users
        default: "h-12 px-5 py-3",
        sm: "h-10 rounded-md px-4",
        lg: "h-14 rounded-xl px-8 text-lg",
        xl: "h-16 rounded-xl px-10 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
