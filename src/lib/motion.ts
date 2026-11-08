import type { Variants, Transition } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════════════════
   SPRING PHYSICS — For "weighted" feel
   ═══════════════════════════════════════════════════════════════════════════ */

export const springDefault: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 50,
  damping: 20,
  mass: 1.5,
};

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 15,
  mass: 0.5,
};

/* ═══════════════════════════════════════════════════════════════════════════
   EASING CURVES
   ═══════════════════════════════════════════════════════════════════════════ */

export const easeSmooth = [0.16, 1, 0.3, 1] as const;
export const easeHover = [0.4, 0, 0.2, 1] as const;
export const easeSmoothOut = [0.33, 1, 0.68, 1] as const;

/* ═══════════════════════════════════════════════════════════════════════════
   FADE IN UP — Primary entrance animation
   ═══════════════════════════════════════════════════════════════════════════ */

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeSmooth,
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   FADE IN SCALE — For images
   ═══════════════════════════════════════════════════════════════════════════ */

export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: easeSmooth,
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE IN FROM SIDE
   ═══════════════════════════════════════════════════════════════════════════ */

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeSmooth,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeSmooth,
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   STAGGER ANIMATIONS — For lists and grids
   ═══════════════════════════════════════════════════════════════════════════ */

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLL-TRIGGERED ANIMATIONS
   ═══════════════════════════════════════════════════════════════════════════ */

export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeSmooth,
    },
  },
};

export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: "-50px",
};

/* ═══════════════════════════════════════════════════════════════════════════
   HOVER ANIMATIONS — Subtle and purposeful
   ═══════════════════════════════════════════════════════════════════════════ */

export const cardHover = {
  whileHover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: easeHover,
    },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export const buttonHover = {
  whileHover: {
    scale: 1.02,
  },
  whileTap: {
    scale: 0.98,
  },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  },
};

export const iconHover = {
  whileHover: {
    rotate: 15,
    scale: 1.1,
    transition: { type: "spring", stiffness: 400 },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   HEADER ANIMATION
   ═══════════════════════════════════════════════════════════════════════════ */

export const headerVariants: Variants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   NAVBAR LINK VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const navLinkVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: easeSmooth,
    },
  }),
};
