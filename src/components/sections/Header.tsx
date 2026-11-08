"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/AnimatedLink";
import { navLinks, siteConfig } from "@/lib/constants";
import { headerVariants, easeSmooth } from "@/lib/motion";

/* ═══════════════════════════════════════════════════════════════════════════
   HEADER — Fixed navigation with glassmorphism
   ═══════════════════════════════════════════════════════════════════════════ */

export function Header() {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 12]);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6"
      role="banner"
    >
      {/* Background with scroll-based opacity */}
      <motion.div
        className="absolute inset-0 border-b border-white/[0.06]"
        style={{
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
          backgroundColor: "rgba(3, 3, 3, 0.8)",
        }}
      />

      <nav
        className="relative max-w-[1400px] mx-auto flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: easeSmooth }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={siteConfig.name}
          >
            <div
              className={cn(
                "w-9 h-9 bg-[#DC2626] rounded-lg",
                "flex items-center justify-center",
                "transition-transform duration-300",
                "group-hover:scale-105"
              )}
            >
              <span className="font-bold text-white text-[15px]">R</span>
            </div>
            <span className="font-semibold text-[15px] tracking-[-0.01em] text-white">
              Red Line
            </span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLink key={link.href} href={link.href} index={index}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeSmooth }}
        >
          <MagneticButton
            href={siteConfig.social.booksy}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Zarezerwuj
          </MagneticButton>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 text-white"
            aria-label="Toggle menu"
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </motion.div>
      </nav>

      {/* Skip to main content link */}
      <a
        href="#main"
        className={cn(
          "sr-only focus:not-sr-only",
          "focus:absolute focus:top-4 focus:left-4 focus:z-50",
          "focus:px-4 focus:py-2 focus:bg-[#DC2626] focus:text-white focus:rounded-lg"
        )}
      >
        Skip to main content
      </a>
    </motion.header>
  );
}
