"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════════════
   ANIMATED LINK — Expanding underline on hover
   ═══════════════════════════════════════════════════════════════════════════ */

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function AnimatedLink({
  href,
  children,
  className,
  external = false,
}: AnimatedLinkProps) {
  const isExternal = external || href.startsWith("http");
  const LinkComponent = isExternal ? "a" : Link;
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <LinkComponent
      href={href}
      className={cn(
        "relative inline-block",
        "text-[#A1A1AA] hover:text-white",
        "transition-colors duration-300",
        "group",
        className
      )}
      {...externalProps}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-white origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{ width: "100%" }}
      />
    </LinkComponent>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   NAV LINK — For header navigation
   ═══════════════════════════════════════════════════════════════════════════ */

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function NavLink({ href, children, className, index = 0 }: NavLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3 + index * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={href}
        className={cn(
          "relative text-[14px] text-[#A1A1AA]",
          "hover:text-white transition-colors duration-300",
          "py-2",
          className
        )}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ARROW LINK — With arrow icon
   ═══════════════════════════════════════════════════════════════════════════ */

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function ArrowLink({ href, children, className, color }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1",
        "text-[13px] font-medium",
        "transition-all duration-300",
        "hover:gap-2",
        className
      )}
      style={{ color: color || "#DC2626" }}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
