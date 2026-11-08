"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { Eyebrow } from "@/components/ui/Badge";
import { galleryItems } from "@/lib/constants";
import { easeSmooth } from "@/lib/motion";

/* ═══════════════════════════════════════════════════════════════════════════
   GALLERY SECTION — Horizontal infinite scroll
   ═══════════════════════════════════════════════════════════════════════════ */

export function Gallery() {
  // Double the items for seamless infinite scroll
  const doubledItems = [...galleryItems, ...galleryItems];

  return (
    <section
      id="realizacje"
      className="section overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeSmooth }}
          className="text-center"
        >
          <Eyebrow className="mb-4">Realizacje</Eyebrow>
          <h2
            id="gallery-heading"
            className={cn(
              "text-[clamp(2rem,5vw+0.5rem,4rem)]",
              "font-medium tracking-[-0.03em] leading-[1.1]"
            )}
          >
            Nasze
            <span className="text-[#52525B]"> prace</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling Gallery */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className={cn(
            "absolute left-0 top-0 bottom-0 w-32",
            "bg-gradient-to-r from-[#030303] to-transparent",
            "z-10 pointer-events-none"
          )}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-32",
            "bg-gradient-to-l from-[#030303] to-transparent",
            "z-10 pointer-events-none"
          )}
          aria-hidden="true"
        />

        {/* Infinite scroll container */}
        <motion.div
          className="flex gap-5 px-8"
          animate={{
            x: [0, -1750],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          aria-label="Portfolio gallery carousel"
        >
          {doubledItems.map((item, index) => (
            <GalleryCard
              key={`${item.id}-${index}`}
              item={item}
              index={index % galleryItems.length}
            />
          ))}
        </motion.div>
      </div>

      {/* Static grid for users who prefer reduced motion */}
      <noscript>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </noscript>
    </section>
  );
}
