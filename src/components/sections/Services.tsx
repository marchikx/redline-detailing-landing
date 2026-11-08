"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { LocationCard } from "@/components/cards/LocationCard";
import { Eyebrow } from "@/components/ui/Badge";
import { services } from "@/lib/constants";
import { containerVariants, fadeInUp, easeSmooth } from "@/lib/motion";

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICES SECTION — Bento grid of service cards
   ═══════════════════════════════════════════════════════════════════════════ */

export function Services() {
  const regularServices = services.filter((s) => !s.isLocation);
  const locationService = services.find((s) => s.isLocation);

  return (
    <section
      id="uslugi"
      className="section px-6 md:px-8"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeSmooth }}
          className="text-center mb-16 md:mb-20"
        >
          <Eyebrow className="mb-4">Co oferujemy?</Eyebrow>
          <h2
            id="services-heading"
            className={cn(
              "text-[clamp(2rem,5vw+0.5rem,4rem)]",
              "font-medium tracking-[-0.03em] leading-[1.1]"
            )}
          >
            Możliwości są
            <br />
            <span className="text-[#52525B]">nieograniczone</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            "gap-5"
          )}
        >
          {regularServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* Location Card */}
          {locationService && (
            <LocationCard
              service={locationService}
              index={regularServices.length}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
