"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { easeHover } from "@/lib/motion";
import type { GalleryItem } from "@/types";

/* ═══════════════════════════════════════════════════════════════════════════
   GALLERY CARD — Image card for portfolio
   ═══════════════════════════════════════════════════════════════════════════ */

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  className?: string;
}

export function GalleryCard({ item, index, className }: GalleryCardProps) {
  return (
    <motion.article
      className={cn("flex-shrink-0 w-[350px] group cursor-pointer", className)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06] mb-4">
        <Image
          src={item.src}
          alt={`${item.title} - ${item.service}`}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          className={cn(
            "object-cover",
            "transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            "group-hover:scale-105"
          )}
        />

        {/* Overlay gradient */}
        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-t from-black/60 via-transparent to-transparent",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-500"
          )}
        />

        {/* Year badge */}
        <motion.div
          className={cn(
            "absolute top-4 right-4",
            "px-3 py-1.5 rounded-full",
            "bg-black/40 backdrop-blur-sm",
            "border border-white/10",
            "text-[12px] text-white/80 font-medium",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300"
          )}
          initial={false}
          whileHover={{ scale: 1.05 }}
        >
          {item.year}
        </motion.div>

        {/* Service badge on hover */}
        <motion.div
          className={cn(
            "absolute bottom-4 left-4 right-4",
            "opacity-0 group-hover:opacity-100",
            "transition-all duration-300",
            "transform translate-y-2 group-hover:translate-y-0"
          )}
        >
          <span
            className={cn(
              "inline-block px-3 py-1.5 rounded-lg",
              "bg-[#DC2626]/90 backdrop-blur-sm",
              "text-[12px] text-white font-medium"
            )}
          >
            {item.service}
          </span>
        </motion.div>
      </div>

      {/* Text content */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3, ease: easeHover }}
      >
        <h3 className="font-semibold text-[16px] tracking-[-0.01em] text-white mb-1 group-hover:text-white/90 transition-colors">
          {item.title}
        </h3>
        <p className="text-[#71717A] text-[14px]">{item.service}</p>
      </motion.div>
    </motion.article>
  );
}
