import type { LucideIcon } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICE TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  badge: string;
  price?: string;
  features?: string[];
  isLocation?: boolean;
}

/* ═══════════════════════════════════════════════════════════════════════════
   GALLERY TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  service: string;
  year: string;
}

/* ═══════════════════════════════════════════════════════════════════════════
   SITE CONFIG TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  contact: {
    address: string;
    city: string;
    district: string;
    hours: string;
    phone: string;
  };
  social: {
    booksy: string;
    instagram: string;
    facebook: string;
  };
  stats: {
    rating: number;
    reviews: number;
    years: number;
    cars: string;
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT PROP TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
  asChild?: boolean;
}

export interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  hover?: boolean;
  glow?: "none" | "subtle" | "red";
}

export interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
}

export interface GalleryCardProps {
  item: GalleryItem;
  index: number;
}

export interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export interface LocationCardProps {
  service: Service;
  index: number;
  className?: string;
}
