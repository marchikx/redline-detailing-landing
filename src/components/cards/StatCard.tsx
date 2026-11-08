"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeSmooth } from "@/lib/motion";

/* ═══════════════════════════════════════════════════════════════════════════
   STAT CARD — Displays a single statistic
   ═══════════════════════════════════════════════════════════════════════════ */

interface StatCardProps {
  value: string;
  label: string;
  index: number;
  className?: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeSmooth,
    },
  }),
};

export function StatCard({ value, label, index, className }: StatCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      custom={index}
      className={cn(
        "text-center px-6 py-4",
        "border-l border-white/[0.06] first:border-l-0",
        className
      )}
    >
      <motion.p
        className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em] text-white mb-1"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: easeSmooth }}
      >
        {value}
      </motion.p>
      <p className="text-[#71717A] text-[14px]">{label}</p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   STATS ROW — Horizontal stats display
   ═══════════════════════════════════════════════════════════════════════════ */

interface StatsRowProps {
  stats: readonly { value: string; label: string }[];
  className?: string;
}

export function StatsRow({ stats, className }: StatsRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: easeSmooth }}
      className={cn(
        "flex flex-wrap justify-center",
        "bg-[linear-gradient(180deg,rgba(20,20,20,0.6)_0%,rgba(10,10,10,0.4)_100%)]",
        "backdrop-blur-xl",
        "border border-white/[0.06]",
        "rounded-2xl",
        "p-4",
        className
      )}
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          index={index}
        />
      ))}
    </motion.div>
  );
}
