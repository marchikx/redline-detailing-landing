"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";
import { MagneticButton, Button } from "@/components/ui/Button";
import { RatingBadge, Eyebrow } from "@/components/ui/Badge";
import { siteConfig } from "@/lib/constants";
import { fadeInUp, easeSmooth } from "@/lib/motion";

/* ═══════════════════════════════════════════════════════════════════════════
   HERO SECTION — Main landing area with parallax
   ═══════════════════════════════════════════════════════════════════════════ */

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pt-32 pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Glow */}
      <div
        className={cn(
          "absolute top-[20%] left-1/2 -translate-x-1/2",
          "w-[600px] md:w-[800px] h-[400px] md:h-[500px]",
          "bg-[#DC2626]/20 rounded-full blur-[150px]",
          "opacity-50 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="text-center relative z-10 max-w-[900px]"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easeSmooth }}
        >
          <Eyebrow className="mb-6">Premium Auto Detailing</Eyebrow>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: easeSmooth }}
          className={cn(
            "text-[clamp(3rem,8vw+1rem,9rem)]",
            "font-medium tracking-[-0.05em] leading-[0.9]",
            "mb-8"
          )}
        >
          Twój samochód.
          <br />
          <span className="text-[#71717A]">Nasza </span>
          <span className="bg-gradient-to-r from-[#DC2626] to-[#ff6b6b] bg-clip-text text-transparent">
            pasja.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: easeSmooth }}
          className={cn(
            "text-[#A1A1AA] text-[clamp(1rem,2vw,1.375rem)]",
            "leading-[1.5] max-w-[600px] mx-auto mb-12"
          )}
        >
          Powłoki ceramiczne, korekta lakieru i kompleksowa ochrona — wszystko w
          jednym miejscu w Krakowie.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: easeSmooth }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton
            href={siteConfig.social.booksy}
            variant="primary"
            size="lg"
            className="shadow-[0_0_50px_rgba(220,38,38,0.3)]"
          >
            Zarezerwuj wizytę
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <Button href="#uslugi" variant="secondary" size="lg">
            Dowiedz się więcej
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Image with Parallax */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: easeSmooth }}
        className="relative mt-16 md:mt-20 w-full max-w-[1000px] mx-auto"
      >
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10"
        >
          <Image
            src={asset("/images/car-porsche.png")}
            alt="Porsche 911 po profesjonalnym detailingu w Red Line"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            aria-hidden="true"
          />

          {/* Rating Badge */}
          <div className="absolute bottom-6 left-6">
            <RatingBadge
              rating={siteConfig.stats.rating}
              reviews={siteConfig.stats.reviews}
            />
          </div>
        </motion.div>

        {/* Reflection glow */}
        <div
          className={cn(
            "absolute -bottom-20 left-1/2 -translate-x-1/2",
            "w-[80%] h-[100px]",
            "bg-[#DC2626]/20 blur-[80px] rounded-full",
            "pointer-events-none"
          )}
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}
