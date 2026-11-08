"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeSmooth, easeHover } from "@/lib/motion";
import type { Service } from "@/types";

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICE CARD — Displays a single service
   ═══════════════════════════════════════════════════════════════════════════ */

interface ServiceCardProps {
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

export function ServiceCard({ service, index, className }: ServiceCardProps) {
  const Icon = service.icon;

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
        // Glass effect
        "bg-[linear-gradient(180deg,rgba(20,20,20,0.6)_0%,rgba(10,10,10,0.4)_100%)]",
        "backdrop-blur-xl",
        // Border
        "border border-white/[0.06]",
        "hover:border-white/[0.12]",
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
          "transition-colors duration-300"
        )}
        style={{
          backgroundColor: `${service.color}15`,
        }}
      >
        <Icon
          className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
          style={{ color: service.color }}
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-white mb-3">
        {service.title}
      </h3>

      <p className="text-[#A1A1AA] text-[15px] leading-[1.6] mb-4">
        {service.description}
      </p>

      {/* Badge */}
      {service.badge && (
        <span
          className="text-[13px] font-medium inline-flex items-center gap-1"
          style={{ color: service.color }}
        >
          {service.badge}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      )}

      {/* Hover glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500 pointer-events-none"
        )}
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${service.color}10 0%, transparent 70%)`,
        }}
      />
    </motion.article>
  );
}
