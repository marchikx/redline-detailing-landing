import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* ═══════════════════════════════════════════════════════════════════════════
   FONT CONFIGURATION
   ═══════════════════════════════════════════════════════════════════════════ */

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
});

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "RED LINE Detailing | Premium Auto Detailing Kraków",
  description:
    "Profesjonalny auto detailing w Krakowie. Powłoki ceramiczne, korekta lakieru, PPF, detailing wnętrza. 4.9★ na Booksy. Zarezerwuj wizytę online.",
  keywords: [
    "auto detailing",
    "powłoka ceramiczna",
    "korekta lakieru",
    "PPF",
    "detailing kraków",
    "myjnia ręczna",
    "pranie tapicerki",
    "ceramic pro",
    "red line detailing",
  ],
  authors: [{ name: "RED LINE Detailing" }],
  creator: "RED LINE Detailing",
  publisher: "RED LINE Detailing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://redline-detailing.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RED LINE Detailing | Premium Auto Detailing Kraków",
    description:
      "Profesjonalny auto detailing w Krakowie. Powłoki ceramiczne, korekta lakieru, PPF. 4.9★ na Booksy.",
    url: "https://redline-detailing.pl",
    siteName: "RED LINE Detailing",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RED LINE Detailing - Premium Auto Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RED LINE Detailing | Premium Auto Detailing Kraków",
    description:
      "Profesjonalny auto detailing w Krakowie. Powłoki ceramiczne, korekta lakieru, PPF.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ═══════════════════════════════════════════════════════════════════════════
   ROOT LAYOUT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
