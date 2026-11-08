"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { easeSmooth, easeHover } from "@/lib/motion";
import type { Service } from "@/types";

/* ═══════════════════════════════════════════════════════════════════════════
   LOCATION CARD — Special card for address/location
   ═══════════════════════════════════════════════════════════════════════════ */

interface LocationCardProps {
  service: Service;
  index: number;
  className?: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: easeSmooth,
    },
  }),
};

export function LocationCard({ service, index, className }: LocationCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: easeHover },
      }}
      className={cn(
        // Base styles
        "group relative rounded-3xl p-8",
        // Gradient background
        "bg-gradient-to-br from-[#DC2626]/20 to-[#DC2626]/5",
        // Border with accent
        "border border-[#DC2626]/20",
        "hover:border-[#DC2626]/40",
        // Shadow
        "shadow-lg shadow-black/20",
        // Transition
        "transition-all duration-300",
        className
      )}
    >
      {/* Icon Container */}
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
          "bg-[#DC2626]/20"
        )}
      >
        <MapPin
          className="w-7 h-7 text-[#DC2626] transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-white mb-3">
        {service.title}
      </h3>

      <p className="text-[#A1A1AA] text-[15px] leading-[1.6] mb-4 whitespace-pre-line">
        {service.description}
      </p>

      {/* Badge */}
      {service.badge && (
        <a
          href="https://maps.google.com/?q=ul.+Aleksandra+Fredry+36,+Kraków"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#DC2626] text-[13px] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          {service.badge}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      )}

      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500 pointer-events-none",
          "bg-gradient-to-t from-[#DC2626]/10 via-transparent to-transparent"
        )}
      />

      {/* Decorative gradient border on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500 pointer-events-none",
          "before:absolute before:inset-0 before:rounded-3xl",
          "before:p-[1px] before:bg-gradient-to-br before:from-[#DC2626]/50 before:to-transparent"
        )}
      />
    </motion.article>
  );
}
