"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════════════
   GLASS PANEL — Base container for all cards
   ═══════════════════════════════════════════════════════════════════════════ */

interface GlassPanelProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  hover?: boolean;
  glow?: "none" | "subtle" | "red";
}

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  (
    {
      children,
      className,
      as: Component = "div",
      hover = true,
      glow = "none",
      ...props
    },
    ref
  ) => {
    const MotionComponent = motion[Component] as typeof motion.div;

    return (
      <MotionComponent
        ref={ref}
        className={cn(
          // Base
          "relative rounded-3xl overflow-hidden",

          // Background — Glass effect
          "bg-[linear-gradient(180deg,rgba(20,20,20,0.6)_0%,rgba(10,10,10,0.4)_100%)]",
          "backdrop-blur-[12px]",

          // Border — Whisper thin
          "border border-white/[0.06]",
          hover && "hover:border-white/[0.12]",

          // Shadow — Depth
          "shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
          hover &&
            "hover:shadow-[0_8px_40px_rgba(0,0,0,0.6),inset_0_0_30px_rgba(255,255,255,0.02)]",
          hover && "hover:-translate-y-0.5",

          // Glow variants
          glow === "subtle" && "shadow-[0_0_60px_-15px_rgba(255,255,255,0.1)]",
          glow === "red" && "shadow-[0_0_40px_-10px_rgba(220,38,38,0.3)]",

          // Transition
          "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",

          className
        )}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

GlassPanel.displayName = "GlassPanel";

/* ═══════════════════════════════════════════════════════════════════════════
   TILT CARD — 3D perspective shift on hover
   ═══════════════════════════════════════════════════════════════════════════ */

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        variants={{
          initial: { rotateX: 0, rotateY: 0 },
          hover: { rotateX: 0, rotateY: 0 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
