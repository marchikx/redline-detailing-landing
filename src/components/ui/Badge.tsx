"use client";

import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════════════
   BADGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  size?: "sm" | "default";
  className?: string;
  color?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "default",
  className,
  color,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium",
        // Sizes
        size === "sm" && "px-2 py-0.5 text-[11px] rounded-md",
        size === "default" && "px-3 py-1 text-[12px] rounded-lg",
        // Variants
        variant === "default" &&
          "bg-white/[0.06] text-[#A1A1AA] border border-white/[0.06]",
        variant === "accent" &&
          "bg-[#DC2626]/10 text-[#DC2626] border border-[#DC2626]/20",
        variant === "outline" && "bg-transparent border border-white/[0.12] text-white",
        className
      )}
      style={
        color
          ? {
              backgroundColor: `${color}15`,
              color: color,
              borderColor: `${color}30`,
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   RATING BADGE — With stars
   ═══════════════════════════════════════════════════════════════════════════ */

interface RatingBadgeProps {
  rating: number;
  reviews: number;
  className?: string;
}

export function RatingBadge({ rating, reviews, className }: RatingBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3",
        "bg-black/60 backdrop-blur-xl",
        "border border-white/10",
        "rounded-2xl px-5 py-3",
        className
      )}
    >
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn(
              "w-4 h-4",
              i < Math.floor(rating) ? "text-yellow-400" : "text-white/20"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-white font-semibold">{rating}</span>
      <span className="text-[#71717A] text-sm">• {reviews} opinii</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   EYEBROW TEXT — Section label
   ═══════════════════════════════════════════════════════════════════════════ */

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[#DC2626] text-[13px] font-medium",
        "tracking-[0.2em] uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
