import type { GetServerSideProps } from "next";
import App from "@/App";

/**
 * Catch-all fallback for routes that don't have a dedicated page file.
 * This covers internal/admin routes such as /auth, /seo-dashboard, /background-remover,
 * /calculators, hub pages, and any other pages not yet converted to individual Next.js pages.
 *
 * These routes are server-side rendered on each request. They are not primary
 * SEO targets, so SSR (vs SSG) is acceptable here.
 *
 * Pages with their own file (and therefore NOT handled here):
 *   /                     → pages/index.tsx (SSG)
 *   /blog/[slug]          → pages/blog/[slug].tsx (SSG, ~200 posts)
 *   /blog/category/[cat]  → pages/blog/category/[category].tsx (SSG)
 *   /blog                 → pages/blog/index.tsx (SSG)
 *   /treatments           → pages/treatments/index.tsx (SSG)
 *   /treatments/tirzepatide → pages/treatments/tirzepatide.tsx (SSG)
 *   /treatments/semaglutide → pages/treatments/semaglutide.tsx (SSG)
 *   /about, /faq, /contact, /how-it-works (SSG)
 *   /semaglutide-guide, /tirzepatide-guide (SSG)
 *   /privacy-policy, /terms-of-service, /refund-policy (SSG)
 *   /compare, /important-safety-information (SSG)
 *   /state/[state]        → pages/state/[state].tsx (SSG + ISR)
 */
export default function CatchAllPage() {
  return <App />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
