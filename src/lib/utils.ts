import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for merging Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format number with Polish locale
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("pl-PL").format(num);
}

/**
 * Create blur data URL for image placeholders
 */
export function shimmerDataUrl(w: number, h: number): string {
  const shimmer = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#0a0a0a" offset="0%"/>
          <stop stop-color="#1a1a1a" offset="50%"/>
          <stop stop-color="#0a0a0a" offset="100%"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#0a0a0a"/>
      <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite"/>
    </svg>
  `;
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  return `data:image/svg+xml;base64,${toBase64(shimmer)}`;
}
