import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

/* ═══════════════════════════════════════════════════════════════════════════
   HOME PAGE — Section composition
   ═══════════════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <Hero />
        <Services />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
