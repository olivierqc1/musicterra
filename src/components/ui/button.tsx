import React from "react";
import { cn } from "../../lib/utils";

type Variant = "default" | "primary" | "secondary" | "outline" | "ghost" | "destructive";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const VARIANTS: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
  outline: "border border-border bg-card text-foreground hover:bg-secondary",
  ghost: "text-foreground hover:bg-secondary",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

const SIZES: Record<Size, string> = {
  default: "h-10 px-4 text-sm",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-full font-semibold transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
