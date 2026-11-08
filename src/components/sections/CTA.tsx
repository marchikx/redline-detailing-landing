"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { easeSmooth } from "@/lib/motion";

/* ═══════════════════════════════════════════════════════════════════════════
   CTA SECTION — Final call to action
   ═══════════════════════════════════════════════════════════════════════════ */

export function CTA() {
  return (
    <section
      id="kontakt"
      className="section px-6 md:px-8 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background glow */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-[600px] h-[400px]",
          "bg-[#DC2626]/10 rounded-full blur-[120px]",
          "pointer-events-none"
        )}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: easeSmooth }}
        className="max-w-[800px] mx-auto text-center relative z-10"
      >
        {/* Headline */}
        <h2
          id="cta-heading"
          className={cn(
            "text-[clamp(2.25rem,6vw+0.5rem,4.5rem)]",
            "font-medium tracking-[-0.04em] leading-[1.1]",
            "mb-6 md:mb-8"
          )}
        >
          Gotowy na
          <br />
          <span className="bg-gradient-to-r from-[#DC2626] to-[#ff6b6b] bg-clip-text text-transparent">
            transformację?
          </span>
        </h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: easeSmooth }}
          className={cn(
            "text-[#A1A1AA] text-[clamp(1rem,1.5vw,1.25rem)]",
            "leading-[1.6] mb-10 md:mb-12",
            "max-w-[500px] mx-auto"
          )}
        >
          Zarezerwuj wizytę i dołącz do setek zadowolonych klientów w Krakowie.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: easeSmooth }}
        >
          <MagneticButton
            href={siteConfig.social.booksy}
            className={cn(
              "bg-white text-[#030303] font-semibold",
              "px-10 py-5 text-[16px] rounded-2xl",
              "shadow-[0_0_60px_rgba(255,255,255,0.15)]",
              "hover:shadow-[0_0_80px_rgba(255,255,255,0.25)]",
              "hover:bg-white/95",
              "transition-all duration-300"
            )}
            variant="secondary"
            size="lg"
          >
            <span className="text-[#030303]">Zarezerwuj na Booksy</span>
            <ArrowRight className="w-5 h-5 text-[#030303]" />
          </MagneticButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, ease: easeSmooth }}
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 text-[14px] text-[#71717A]"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Dostępne terminy
          </span>
          <span>•</span>
          <span>Gwarancja jakości</span>
          <span>•</span>
          <span>Bezpłatna wycena</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
