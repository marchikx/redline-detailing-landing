import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════════════
   LOADING STATE — Skeleton UI with shimmer
   ═══════════════════════════════════════════════════════════════════════════ */

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#030303]">
      {/* Header Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo skeleton */}
          <div className="flex items-center gap-3">
            <Skeleton className="w-9 h-9 rounded-lg" />
            <Skeleton className="w-20 h-4 rounded" />
          </div>

          {/* Nav skeleton */}
          <div className="hidden md:flex items-center gap-8">
            <Skeleton className="w-16 h-4 rounded" />
            <Skeleton className="w-20 h-4 rounded" />
            <Skeleton className="w-14 h-4 rounded" />
          </div>

          {/* CTA skeleton */}
          <Skeleton className="w-28 h-10 rounded-xl hidden sm:block" />
        </div>
      </header>

      {/* Hero Skeleton */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pt-32 pb-20">
        <div className="text-center max-w-[900px] w-full">
          {/* Eyebrow */}
          <Skeleton className="w-48 h-4 mx-auto mb-6 rounded" />

          {/* Headline */}
          <Skeleton className="w-full max-w-[600px] h-16 mx-auto mb-4 rounded-lg" />
          <Skeleton className="w-full max-w-[500px] h-16 mx-auto mb-8 rounded-lg" />

          {/* Subheadline */}
          <Skeleton className="w-full max-w-[500px] h-6 mx-auto mb-3 rounded" />
          <Skeleton className="w-full max-w-[400px] h-6 mx-auto mb-12 rounded" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="w-48 h-14 rounded-2xl mx-auto sm:mx-0" />
            <Skeleton className="w-44 h-14 rounded-2xl mx-auto sm:mx-0" />
          </div>
        </div>

        {/* Hero Image skeleton */}
        <div className="mt-20 w-full max-w-[1000px]">
          <Skeleton className="w-full aspect-[16/9] rounded-3xl" />
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Skeleton className="w-32 h-4 mx-auto mb-4 rounded" />
            <Skeleton className="w-72 h-12 mx-auto mb-2 rounded-lg" />
            <Skeleton className="w-56 h-12 mx-auto rounded-lg" />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SKELETON BASE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

interface SkeletonProps {
  className?: string;
}

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#0a0a0a]",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",
        "before:animate-[shimmer_2s_infinite]",
        className
      )}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CARD SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

function CardSkeleton() {
  return (
    <div
      className={cn(
        "rounded-3xl bg-[#0a0a0a] border border-white/[0.06] p-8",
        "relative overflow-hidden"
      )}
    >
      {/* Icon skeleton */}
      <Skeleton className="w-14 h-14 rounded-2xl mb-6" />

      {/* Title skeleton */}
      <Skeleton className="h-6 w-3/4 rounded-lg mb-3" />

      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-5/6 rounded" />
      </div>

      {/* Badge skeleton */}
      <Skeleton className="h-4 w-32 rounded" />

      {/* Shimmer overlay */}
      <div
        className={cn(
          "absolute inset-0",
          "before:absolute before:inset-0",
          "before:bg-gradient-to-r before:from-transparent before:via-white/[0.02] before:to-transparent",
          "before:animate-[shimmer_2s_infinite]"
        )}
      />
    </div>
  );
}
