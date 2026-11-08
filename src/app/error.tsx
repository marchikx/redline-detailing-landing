"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { easeSmooth } from "@/lib/motion";

/* ═══════════════════════════════════════════════════════════════════════════
   ERROR BOUNDARY — Graceful error handling
   ═══════════════════════════════════════════════════════════════════════════ */

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to console in development
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeSmooth }}
        className="text-center max-w-md"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: easeSmooth }}
          className={cn(
            "w-16 h-16 mx-auto mb-6 rounded-2xl",
            "bg-[#DC2626]/10",
            "flex items-center justify-center"
          )}
        >
          <AlertTriangle className="w-8 h-8 text-[#DC2626]" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: easeSmooth }}
          className="text-2xl font-semibold text-white mb-3 tracking-[-0.02em]"
        >
          Coś poszło nie tak
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: easeSmooth }}
          className="text-[#A1A1AA] text-[15px] leading-[1.6] mb-8"
        >
          Przepraszamy za niedogodności. Spróbuj odświeżyć stronę lub wróć
          później.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: easeSmooth }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Retry button */}
          <button
            onClick={reset}
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "px-6 py-3 rounded-xl",
              "bg-white/5 hover:bg-white/10",
              "border border-white/10 hover:border-white/20",
              "text-white text-[15px] font-medium",
              "transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-white/20 focus-visible:ring-offset-2",
              "focus-visible:ring-offset-[#030303]"
            )}
          >
            <RefreshCw className="w-4 h-4" />
            Spróbuj ponownie
          </button>

          {/* Home link */}
          <a
            href="/"
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "px-6 py-3 rounded-xl",
              "bg-transparent hover:bg-white/5",
              "text-[#A1A1AA] hover:text-white text-[15px] font-medium",
              "transition-all duration-300"
            )}
          >
            Wróć do strony głównej
          </a>
        </motion.div>

        {/* Error digest (for debugging) */}
        {error.digest && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 text-[12px] text-[#52525B] font-mono"
          >
            Error ID: {error.digest}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
