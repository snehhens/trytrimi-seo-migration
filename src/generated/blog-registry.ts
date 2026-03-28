import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export const blogComponents: Record<string, ComponentType> = {
  "affordable-glp-1-injections-2025": dynamic(() => import("@/pages/blog/AffordableGLP1Injections2025")),
  "compounded-semaglutide-risks-2025": dynamic(() => import("@/pages/blog/CompoundedSemaglutideRisks2025")),
  "compounded-tirzepatide-safety-2025": dynamic(() => import("@/pages/blog/CompoundedTirzepatideSafety2025")),
  "semaglutide-cardiovascular-2025": dynamic(() => import("@/pages/blog/SemaglutideCardiovascular2025")),
  "semaglutide-generics-2025": dynamic(() => import("@/pages/blog/SemaglutideGenerics2025")),
  "semaglutide-real-world-2025": dynamic(() => import("@/pages/blog/SemaglutideRealWorld2025")),
  "tirzepatide-generics-2025": dynamic(() => import("@/pages/blog/TirzepatideGenerics2025")),
  "tirzepatide-prescribing-2025": dynamic(() => import("@/pages/blog/TirzepatidePrescribing2025")),
  "tirzepatide-real-world-2025": dynamic(() => import("@/pages/blog/TirzepatideRealWorld2025")),
  "tirzepatide-sleep-apnea-2025": dynamic(() => import("@/pages/blog/TirzepatideSleepApnea2025")),
};

export interface AutoDiscoveredBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modifiedDate: string;
  category: string;
  readTime: string;
  readTimeMinutes: number;
  path: string;
}

export const autoDiscoveredBlogPosts: AutoDiscoveredBlogPost[] = [
  {
    slug: "affordable-glp-1-injections-2025",
    title: "Affordable Glp 1 Injections 2025",
    excerpt: "Read our guide on Affordable Glp 1 Injections 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Education",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/affordable-glp-1-injections-2025",
  },
  {
    slug: "compounded-semaglutide-risks-2025",
    title: "Compounded Semaglutide Risks 2025",
    excerpt: "Read our guide on Compounded Semaglutide Risks 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Semaglutide",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/compounded-semaglutide-risks-2025",
  },
  {
    slug: "compounded-tirzepatide-safety-2025",
    title: "Compounded Tirzepatide Safety 2025",
    excerpt: "Read our guide on Compounded Tirzepatide Safety 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Tirzepatide",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/compounded-tirzepatide-safety-2025",
  },
  {
    slug: "semaglutide-cardiovascular-2025",
    title: "Semaglutide Cardiovascular 2025",
    excerpt: "Read our guide on Semaglutide Cardiovascular 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Semaglutide",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/semaglutide-cardiovascular-2025",
  },
  {
    slug: "semaglutide-generics-2025",
    title: "Semaglutide Generics 2025",
    excerpt: "Read our guide on Semaglutide Generics 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Semaglutide",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/semaglutide-generics-2025",
  },
  {
    slug: "semaglutide-real-world-2025",
    title: "Semaglutide Real World 2025",
    excerpt: "Read our guide on Semaglutide Real World 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Semaglutide",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/semaglutide-real-world-2025",
  },
  {
    slug: "tirzepatide-generics-2025",
    title: "Tirzepatide Generics 2025",
    excerpt: "Read our guide on Tirzepatide Generics 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Tirzepatide",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/tirzepatide-generics-2025",
  },
  {
    slug: "tirzepatide-prescribing-2025",
    title: "Tirzepatide Prescribing 2025",
    excerpt: "Read our guide on Tirzepatide Prescribing 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Tirzepatide",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/tirzepatide-prescribing-2025",
  },
  {
    slug: "tirzepatide-real-world-2025",
    title: "Tirzepatide Real World 2025",
    excerpt: "Read our guide on Tirzepatide Real World 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Tirzepatide",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/tirzepatide-real-world-2025",
  },
  {
    slug: "tirzepatide-sleep-apnea-2025",
    title: "Tirzepatide Sleep Apnea 2025",
    excerpt: "Read our guide on Tirzepatide Sleep Apnea 2025.",
    date: "2026-03-28",
    modifiedDate: "2026-03-28",
    category: "Tirzepatide",
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "/blog/tirzepatide-sleep-apnea-2025",
  },
];
