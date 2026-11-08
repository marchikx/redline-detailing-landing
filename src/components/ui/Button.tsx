"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { springSnappy } from "@/lib/motion";

/* ═══════════════════════════════════════════════════════════════════════════
   BUTTON VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

const variants = {
  primary: cn(
    "bg-[#DC2626] text-white font-semibold",
    "shadow-[0_0_40px_-10px_rgba(220,38,38,0.4)]",
    "hover:bg-[#EF4444]",
    "hover:shadow-[0_0_50px_-10px_rgba(220,38,38,0.6)]",
    "active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626]/50",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
  ),
  secondary: cn(
    "bg-white/5 text-white font-medium",
    "border border-white/10",
    "hover:bg-white/10 hover:border-white/20",
    "active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
  ),
  ghost: cn(
    "bg-transparent text-[#A1A1AA]",
    "hover:text-white hover:bg-white/5",
    "active:scale-[0.98]"
  ),
};

const sizes = {
  sm: "px-4 py-2 text-[13px] rounded-xl",
  default: "px-6 py-3 text-[15px] rounded-2xl",
  lg: "px-8 py-4 text-[16px] rounded-2xl",
};

/* ═══════════════════════════════════════════════════════════════════════════
   BUTTON COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  size = "default",
  children,
  className,
  href,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseClassName = cn(
    "inline-flex items-center justify-center gap-2",
    "transition-all duration-200",
    "cursor-pointer",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={springSnappy}
        className={baseClassName}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={springSnappy}
      className={baseClassName}
    >
      {children}
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAGNETIC BUTTON — Cursor follows effect
   ═══════════════════════════════════════════════════════════════════════════ */

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  size = "default",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "transition-colors duration-200",
        "cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
