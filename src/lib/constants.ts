import { Shield, Zap, Sparkles, Droplets, Car, MapPin } from "lucide-react";
import type { Service, GalleryItem, SiteConfig } from "@/types";

/* ═══════════════════════════════════════════════════════════════════════════
   SITE CONFIGURATION
   ═══════════════════════════════════════════════════════════════════════════ */

export const siteConfig: SiteConfig = {
  name: "RED LINE Detailing",
  tagline: "Premium Auto Detailing • Kraków",
  description:
    "Profesjonalny auto detailing w Krakowie. Powłoki ceramiczne, korekta lakieru, PPF. 4.9★ na Booksy.",
  contact: {
    address: "ul. Aleksandra Fredry 36",
    city: "30-605 Kraków",
    district: "Podgórze",
    hours: "Pon-Sob: 8:00 - 18:00",
    phone: "+48 XXX XXX XXX",
  },
  social: {
    booksy:
      "https://booksy.com/pl-pl/92055_red-line-myjnia-detailing_motoryzacja_8820_krakow",
    instagram: "#",
    facebook: "#",
  },
  stats: {
    rating: 4.9,
    reviews: 199,
    years: 5,
    cars: "1000+",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   NAVIGATION LINKS
   ═══════════════════════════════════════════════════════════════════════════ */

export const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICES — Повний контент для послуг
   ═══════════════════════════════════════════════════════════════════════════ */

export const services: Service[] = [
  {
    id: "ceramic",
    title: "Powłoka ceramiczna",
    description:
      "Wieloletnia ochrona lakieru z technologią SiO₂. Hydrofobowość i głęboki połysk.",
    icon: Shield,
    color: "#DC2626",
    badge: "Gwarancja do 5 lat",
    price: "od 2,500 PLN",
    features: [
      "9H twardość powłoki",
      "Hydrofobowa powierzchnia",
      "Ochrona UV",
      "Głęboki połysk",
    ],
  },
  {
    id: "ppf",
    title: "Paint Protection Film",
    description:
      "Niewidzialna folia chroniąca przed odpryskami kamieni i zarysowaniami.",
    icon: Zap,
    color: "#3B82F6",
    badge: "Self-healing technology",
    price: "od 4,000 PLN",
    features: [
      "Samoregeneracja",
      "10 lat gwarancji",
      "Niewidzialna ochrona",
      "TPU premium",
    ],
  },
  {
    id: "correction",
    title: "Korekta lakieru",
    description:
      "Profesjonalne usuwanie rys i hologramów. Przywracamy fabryczny połysk.",
    icon: Sparkles,
    color: "#F97316",
    badge: "3-fazowy proces",
    price: "od 1,200 PLN",
    features: [
      "Usuwanie rys",
      "Eliminacja hologramów",
      "Polerowanie",
      "Zabezpieczenie",
    ],
  },
  {
    id: "interior",
    title: "Detailing wnętrza",
    description:
      "Kompleksowe czyszczenie i zabezpieczenie wszystkich powierzchni wewnętrznych.",
    icon: Car,
    color: "#A855F7",
    badge: "Ozonowanie w cenie",
    price: "od 500 PLN",
    features: [
      "Pranie tapicerki",
      "Czyszczenie skóry",
      "Ozonowanie",
      "Impregnacja",
    ],
  },
  {
    id: "wash",
    title: "Pranie tapicerki",
    description:
      "Głębokie pranie foteli i dywaników. Usuwamy plamy i nieprzyjemne zapachy.",
    icon: Droplets,
    color: "#06B6D4",
    badge: "Ekstrakcja wodna",
    price: "od 300 PLN",
    features: ["Ekstrakcja", "Usuwanie plam", "Dezodoryzacja", "Impregnacja"],
  },
  {
    id: "location",
    title: "Kraków, Podgórze",
    description: "ul. Aleksandra Fredry 36\nPon-Sob: 8:00 - 18:00",
    icon: MapPin,
    color: "#DC2626",
    badge: "Sprawdź na mapie",
    isLocation: true,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   GALLERY — Реалізації
   ═══════════════════════════════════════════════════════════════════════════ */

export const galleryItems: GalleryItem[] = [
  {
    id: "porsche-911",
    src: "/images/car-porsche.png",
    title: "Porsche 911 Carrera",
    service: "Ceramic Pro",
    year: "2024",
  },
  {
    id: "g-wagon",
    src: "/images/car-gwagon.png",
    title: "Mercedes G63 AMG",
    service: "PPF Full Body",
    year: "2024",
  },
  {
    id: "bmw-m235",
    src: "/images/car-bmw.png",
    title: "BMW M235i",
    service: "Korekta + Ceramika",
    year: "2023",
  },
  {
    id: "focus-rs",
    src: "/images/car-focus.png",
    title: "Ford Focus RS",
    service: "Detailing kompletny",
    year: "2023",
  },
  {
    id: "bmw-touring",
    src: "/images/car-bmw-touring.png",
    title: "BMW 3 Touring",
    service: "Powłoka ceramiczna",
    year: "2024",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   STATISTICS
   ═══════════════════════════════════════════════════════════════════════════ */

export const stats = [
  { value: "1000+", label: "Zadowolonych klientów" },
  { value: "5", label: "Lat doświadczenia" },
  { value: "4.9", label: "Ocena na Booksy" },
  { value: "199", label: "Pozytywnych opinii" },
] as const;
