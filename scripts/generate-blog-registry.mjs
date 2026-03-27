import fs from "fs";
import path from "path";

const ROOT_DIR = process.cwd();
const BLOG_DIR = path.join(ROOT_DIR, "src", "pages", "blog");
const OUTPUT_DIR = path.join(ROOT_DIR, "src", "generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "blog-registry.ts");
const LEGACY_ROUTE_FILE = path.join(ROOT_DIR, "pages", "blog", "[slug].tsx");

const EXCLUDED_FILES = new Set([
  "CategorySemaglutide.tsx",
  "CategoryTirzepatide.tsx",
  "StateGuide.tsx",
]);

function pascalToKebab(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-zA-Z])(\d+)/g, "$1-$2")
    .replace(/(\d+)([a-zA-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

function slugToTitle(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => {
      if (part === "glp1") return "GLP-1";
      if (part === "pcos") return "PCOS";
      if (/^\d+$/.test(part)) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

function inferCategory(slug) {
  if (slug.includes("tirzepatide")) return "Tirzepatide";
  if (slug.includes("semaglutide")) return "Semaglutide";
  if (slug.includes("compare") || slug.includes("comparison") || slug.includes("-vs-")) return "Comparisons";
  if (slug.includes("cost") || slug.includes("insurance") || slug.includes("pricing") || slug.includes("coverage")) return "Cost";
  if (slug.includes("safety") || slug.includes("side-effects") || slug.includes("warning") || slug.includes("contraindications")) return "Safety";
  if (slug.includes("results") || slug.includes("timeline") || slug.includes("before-after") || slug.includes("success")) return "Results";
  if (slug.includes("diet") || slug.includes("exercise") || slug.includes("nutrition") || slug.includes("meal") || slug.includes("food")) return "Lifestyle";
  if (slug.includes("pcos") || slug.includes("diabetes") || slug.includes("thyroid") || slug.includes("heart") || slug.includes("kidney")) return "Health";
  if (slug.includes("guide") || slug.includes("works") || slug.includes("basics") || slug.includes("complete")) return "Guide";
  if (slug.includes("first-month") || slug.includes("start") || slug.includes("signup") || slug.includes("beginner")) return "Getting Started";
  return "Education";
}

function toIsoDate(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mtime.toISOString().slice(0, 10);
}

function collectBlogFiles() {
  const legacyRegisteredFiles = fs.existsSync(LEGACY_ROUTE_FILE)
    ? new Set(
        Array.from(
          fs
            .readFileSync(LEGACY_ROUTE_FILE, "utf8")
            .matchAll(/import\("@\/pages\/blog\/([^"]+)"\)/g),
          (match) => `${match[1]}.tsx`,
        ),
      )
    : new Set();

  return fs
    .readdirSync(BLOG_DIR)
    .filter(
      (file) =>
        file.endsWith(".tsx") &&
        !EXCLUDED_FILES.has(file) &&
        !legacyRegisteredFiles.has(file),
    )
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const baseName = file.replace(/\.tsx$/, "");
      const slug = pascalToKebab(baseName);
      const absolutePath = path.join(BLOG_DIR, file);
      const title = slugToTitle(slug);

      return {
        file,
        baseName,
        slug,
        title,
        date: toIsoDate(absolutePath),
        category: inferCategory(slug),
        excerpt: `Read our guide on ${title}.`,
        path: `/blog/${slug}`,
      };
    });
}

function generateFileContent(entries) {
  const imports = [
    'import dynamic from "next/dynamic";',
    'import type { ComponentType } from "react";',
    "",
  ];

  const registry = [
    "export const blogComponents: Record<string, ComponentType> = {",
    ...entries.map(
      (entry) =>
        `  "${entry.slug}": dynamic(() => import("@/pages/blog/${entry.baseName}")),`,
    ),
    "};",
    "",
  ];

  const metadata = [
    "export interface AutoDiscoveredBlogPost {",
    "  slug: string;",
    "  title: string;",
    "  excerpt: string;",
    "  date: string;",
    "  modifiedDate: string;",
    "  category: string;",
    "  readTime: string;",
    "  readTimeMinutes: number;",
    "  path: string;",
    "}",
    "",
    "export const autoDiscoveredBlogPosts: AutoDiscoveredBlogPost[] = [",
    ...entries.map(
      (entry) => `  {
    slug: "${entry.slug}",
    title: ${JSON.stringify(entry.title)},
    excerpt: ${JSON.stringify(entry.excerpt)},
    date: "${entry.date}",
    modifiedDate: "${entry.date}",
    category: ${JSON.stringify(entry.category)},
    readTime: "8 min",
    readTimeMinutes: 8,
    path: "${entry.path}",
  },`,
    ),
    "];",
    "",
  ];

  return [...imports, ...registry, ...metadata].join("\n");
}

function main() {
  const entries = collectBlogFiles();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, generateFileContent(entries), "utf8");
  console.log(`Generated blog registry with ${entries.length} entries.`);
}

main();
