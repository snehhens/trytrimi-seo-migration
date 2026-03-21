## TryTrimi – Next.js Migration Guide

### 1. Overview

This project was originally a Lovable/Vite SPA with `react-router-dom`.  
It has been migrated to **Next.js 16 (pages router)** with:

- **Static Site Generation (SSG)** for core marketing pages and ~200 blog posts.
- **Server-Side Rendering (SSR)** only for remaining utility/admin routes.
- SEO-focused routing, redirects, and metadata integration.

The goal is to make every SEO-relevant URL return **fully rendered HTML** on first byte, while keeping your existing React components and SEO tooling.

---

### 2. How to run locally

From the project root:

```bash
cd path/to/trytrimi-main-2/trytrimi-main

# 1) Install dependencies (only needed once)
npm install

# 2) Start development server
npm run dev
```

Notes:

- The dev command runs **Next.js**, even though the package name still says `vite_react_shadcn_ts`.
- If port `3000` is busy, Next will automatically switch to another port (e.g. `3001`) and print the URL.
- If you see `Unable to acquire lock ... .next/dev/lock`, it means another `next dev` is still running:
  - Stop any existing dev servers (close the terminal or use Task Manager to end `node`/`next`).
  - Then run `npm run dev` again.

For a production-like run:

```bash
npm run build
npm start
```

This serves the **prebuilt static + SSR pages** on the same port as your eventual production deployment.

---

### 3. What was implemented in the migration

**Routing & rendering**

- **Static pages (SSG + ISR)**
  - `/` (homepage)
  - `/treatments`, `/treatments/semaglutide`, `/treatments/tirzepatide`
  - `/about`, `/faq`, `/contact`, `/how-it-works`
  - `/semaglutide-guide`, `/tirzepatide-guide`
  - `/privacy-policy`, `/terms-of-service`, `/refund-policy`
  - `/compare`
  - `/important-safety-information`
  - `/blog`
  - `/blog/category/semaglutide`, `/blog/category/tirzepatide`
  - `/state/[state]` (ISR, fallback blocking)

- **Blog dynamic SSG**
  - `pages/blog/[slug].tsx` maps ~200 blog slugs to their existing React components.
  - Uses `getStaticPaths` + `getStaticProps` so **each blog post becomes its own static HTML file** at build time.

- **Catch‑all SSR**
  - `pages/[...slug].tsx` loads `App.tsx` for remaining internal/utility routes:
    - `/auth`, `/seo-dashboard`, `/seo-dashboard/*`, `/background-remover`, `/calculators`, `/resources`, etc.
  - These are not primary SEO landing pages, so SSR on demand is acceptable.

**App shell & providers**

- `pages/_app.tsx` now wraps all pages with:
  - `QueryClientProvider` (React Query).
  - `Toaster` and `Sonner` notification providers.
  - `BrowserRouter` compatibility layer, so existing React Router components still work on the client while Next controls the URLs.
  - Global styles from `src/index.css`.

**Configuration**

- `next.config.mjs`
  - Configures Turbopack aliases:
    - `@` → `./src`
    - `react-router-dom` → `./src/compat/react-router-dom.tsx`
    - `react-helmet-async` → `./src/compat/react-helmet-async.tsx`
  - Adds **permanent 301 redirects**:
    - `/semaglutide` → `/treatments/semaglutide`
    - `/tirzepatide` → `/treatments/tirzepatide`
  - Adds security & cache headers for better performance.

**SSR safety fixes**

- `src/utils/deferNonCritical.ts`
  - Wrapped `window.matchMedia` in a `typeof window !== "undefined"` guard so SSR does not crash.
- `tsconfig.json`
  - Excludes `supabase/` Deno functions from TypeScript compilation to avoid Next build errors.

---

### 4. How to manually QA that everything works

Use this checklist whenever you want to confirm the migration is healthy.

**A. Core route smoke test**

In the browser (dev or prod build), visit:

- `/`
- `/treatments`, `/treatments/semaglutide`, `/treatments/tirzepatide`
- `/about`, `/faq`, `/contact`, `/how-it-works`
- `/semaglutide-guide`, `/tirzepatide-guide`
- `/privacy-policy`, `/terms-of-service`, `/refund-policy`
- `/compare`
- `/important-safety-information`
- `/blog`
- `/blog/category/semaglutide`, `/blog/category/tirzepatide`
- One `state` URL like `/state/california`

For each, confirm:

- The page renders without runtime errors in the console.
- Navigation via the site header/footer works as expected.

**B. Blog SEO / SSG verification**

Pick a few high‑value posts, for example:

- `/blog/glp1-complete-guide`
- `/blog/semaglutide-weight-loss-online-guide`
- `/blog/buy-semaglutide-online`
- `/blog/tirzepatide-vs-semaglutide`

For each:

1. Open the page in the browser.
2. Use **“View Page Source”** (not Inspect).
3. Confirm:
   - The full article text is present in the HTML (not just an empty root div).
   - `<title>`, `<meta name="description">`, OpenGraph tags, and JSON-LD are visible in the head.

Optional CLI check (from another terminal while the dev server runs):

```bash
curl -s http://localhost:3000/blog/glp1-complete-guide | findstr /C:"GLP-1 medications"
```

Seeing content in the `curl` output confirms that crawlers receive real HTML without executing JavaScript.

**C. Redirects**

In the browser or via `curl -I`:

- Hit `/semaglutide` → should 301 to `/treatments/semaglutide`.
- Hit `/tirzepatide` → should 301 to `/treatments/tirzepatide`.

This preserves link equity from any old URLs.

**D. Utility/admin routes**

Check a few non‑SEO, internal tools:

- `/auth`
- `/seo-dashboard`
- `/seo-dashboard/backlinks`
- `/background-remover`
- `/calculators`

These should behave as before, since they are still rendered via `App.tsx` through the catch‑all.

**E. 404 behaviour**

- Visit a non‑existent URL like `/blog/this-does-not-exist`.
- Confirm your NotFound experience renders and returns a 404 status.

---

### 5. Why this Next.js version is better than the old Lovable SPA

**Compared to Lovable/Vite SPA:**

- **Full HTML on first byte**  
  - Old: `/blog/...` returned an empty shell; content was built client‑side.  
  - Now: All blog posts and key landing pages are **pre‑rendered static HTML**. Google and other crawlers read everything immediately.

- **Stronger metadata & structured data indexing**  
  - Old: `<title>`, `<meta>`, OpenGraph, and JSON‑LD were injected by client JavaScript.  
  - Now: They are present in the server response, which is more reliable for indexing and rich snippets.

- **Better Core Web Vitals**  
  - Static HTML from CDN reduces Time To First Byte (TTFB) and speeds up Largest Contentful Paint (LCP).

- **SEO‑friendly redirects**  
  - 301s are handled by Next at the edge, not by client‑side navigation, so link equity and canonicalization are preserved.

- **Still compatible with existing React code**  
  - The compat layer (`react-router-dom`, `react-helmet-async`) lets you keep your current page components while gaining SSR/SSG benefits.

In short: **Yes, it is good to migrate.**  
You keep your Lovable‑generated UI and SEO tooling, but gain the rendering model (SSR/SSG) and infrastructure that search engines and CDNs are optimized for.

---

### 6. Common local issues & fixes

- **“Port 3000 is in use”**  
  - Another dev server is running. Either:
    - Use the new port Next prints (e.g. `http://localhost:3001`), or
    - Stop the other process and rerun `npm run dev`.

- **“Unable to acquire lock at .next/dev/lock”**  
  - This means a previous `next dev` process is still holding the lock.
  - Fix:
    - Close any terminals running `npm run dev`, or stop the Node process via Task Manager.
    - Then start again with `npm run dev`.

If you hit any new errors, capture the terminal output and page URL and we can extend this guide.

