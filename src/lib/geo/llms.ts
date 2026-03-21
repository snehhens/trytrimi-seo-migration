import { blogPosts } from "@/data/blogPosts";
import { SITE_URL } from "@/lib/seo/site";

type KeyPage = {
  title: string;
  path: string;
  summary: string;
};

const keyPages: KeyPage[] = [
  {
    title: "Home",
    path: "/",
    summary: "Overview of Trimi's online GLP-1 weight-loss program, pricing, eligibility, and how the process works.",
  },
  {
    title: "Treatments",
    path: "/treatments",
    summary: "Overview comparing compounded semaglutide and compounded tirzepatide treatment options.",
  },
  {
    title: "Compounded Semaglutide",
    path: "/treatments/semaglutide",
    summary: "Treatment detail page covering semaglutide pricing, benefits, FAQs, and care model.",
  },
  {
    title: "Compounded Tirzepatide",
    path: "/treatments/tirzepatide",
    summary: "Treatment detail page covering tirzepatide pricing, benefits, FAQs, and care model.",
  },
  {
    title: "How It Works",
    path: "/how-it-works",
    summary: "Explains the online intake, provider review, prescription, and shipping workflow.",
  },
  {
    title: "FAQ",
    path: "/faq",
    summary: "Answers common questions about pricing, eligibility, side effects, shipping, and provider support.",
  },
  {
    title: "Important Safety Information",
    path: "/important-safety-information",
    summary: "Safety, side-effect, contraindication, and cautionary information for GLP-1 treatment.",
  },
  {
    title: "Blog",
    path: "/blog",
    summary: "Educational content hub covering GLP-1 medications, costs, side effects, dosing, and treatment comparisons.",
  },
  {
    title: "About",
    path: "/about",
    summary: "Background on Trimi's telehealth model, care philosophy, and healthcare-provider positioning.",
  },
];

function toAbsolute(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

function groupPostsByCategory() {
  const grouped = new Map<string, typeof blogPosts>();

  blogPosts.forEach((post) => {
    const existing = grouped.get(post.category) ?? [];
    existing.push(post);
    grouped.set(post.category, existing);
  });

  return [...grouped.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

export function buildLlmsTxt(): string {
  const topPosts = [...blogPosts]
    .sort((a, b) => {
      const aDate = a.modifiedDate ?? a.date;
      const bDate = b.modifiedDate ?? b.date;
      return bDate.localeCompare(aDate);
    })
    .slice(0, 18);

  const lines = [
    "# Trimi Health",
    "",
    "> Trimi Health is a US-focused online weight-loss clinic offering physician-guided access to compounded semaglutide and compounded tirzepatide, ongoing support, educational content, and safety information.",
    "",
    "## Core entities",
    `- Trimi Health: ${SITE_URL} - online medical-weight-loss brand and patient experience.`,
    "- Compounded Semaglutide: GLP-1-based weight-loss treatment option.",
    "- Compounded Tirzepatide: dual GIP/GLP-1-based weight-loss treatment option.",
    "- Beluga Health: telehealth provider network referenced in Trimi's care workflow.",
    "",
    "## Important pages",
    ...keyPages.map((page) => `- ${page.title}: ${toAbsolute(page.path)} - ${page.summary}`),
    "",
    "## High-value educational content",
    ...topPosts.map(
      (post) =>
        `- ${post.title}: ${toAbsolute(post.path)} - ${post.excerpt}`,
    ),
    "",
    "## Trust and policy pages",
    `- Safety information: ${SITE_URL}/important-safety-information`,
    `- Terms of service: ${SITE_URL}/terms-of-service`,
    `- Privacy policy: ${SITE_URL}/privacy-policy`,
    `- Refund policy: ${SITE_URL}/refund-policy`,
    "",
    "## Crawl references",
    `- Sitemap index: ${SITE_URL}/sitemap-index.xml`,
    `- Primary sitemap: ${SITE_URL}/sitemap.xml`,
    `- Image sitemap: ${SITE_URL}/image-sitemap.xml`,
  ];

  return `${lines.join("\n")}\n`;
}

export function buildLlmsFullTxt(): string {
  const lines = [
    "# Trimi Health GEO Index",
    "",
    "> Machine-readable content map for generative engines, assistants, and answer systems.",
    "",
    "## Site summary",
    "- Domain: https://trytrimi.com",
    "- Market: United States",
    "- Category: Online medical weight-loss / telehealth / GLP-1 education",
    "- Primary topics: compounded semaglutide, compounded tirzepatide, online prescriptions, dosing, side effects, pricing, safety, weight-loss outcomes",
    "",
    "## Brand and entity overview",
    "- Trimi Health: online patient-facing brand for weight-loss treatment and education.",
    "- Beluga Health: provider network referenced in Trimi patient onboarding and care delivery.",
    "- Core treatment entities: compounded semaglutide, compounded tirzepatide.",
    "",
    "## Canonical key pages",
    ...keyPages.map((page) => `- ${page.title}: ${toAbsolute(page.path)} | ${page.summary}`),
    "",
    "## Blog inventory by topic",
  ];

  groupPostsByCategory().forEach(([category, posts]) => {
    lines.push("");
    lines.push(`### ${category}`);
    posts
      .sort((a, b) => (b.modifiedDate ?? b.date).localeCompare(a.modifiedDate ?? a.date))
      .forEach((post) => {
        lines.push(
          `- ${post.title} | ${toAbsolute(post.path)} | published ${post.date}${
            post.modifiedDate ? ` | updated ${post.modifiedDate}` : ""
          } | ${post.excerpt}`,
        );
      });
  });

  lines.push("");
  lines.push("## Supporting trust pages");
  lines.push(`- Contact: ${SITE_URL}/contact`);
  lines.push(`- About: ${SITE_URL}/about`);
  lines.push(`- FAQ: ${SITE_URL}/faq`);
  lines.push(`- Important safety information: ${SITE_URL}/important-safety-information`);
  lines.push(`- Terms of service: ${SITE_URL}/terms-of-service`);
  lines.push(`- Privacy policy: ${SITE_URL}/privacy-policy`);
  lines.push(`- Refund policy: ${SITE_URL}/refund-policy`);
  lines.push("");
  lines.push("## Crawl references");
  lines.push(`- Robots: ${SITE_URL}/robots.txt`);
  lines.push(`- Sitemap index: ${SITE_URL}/sitemap-index.xml`);
  lines.push(`- Sitemap: ${SITE_URL}/sitemap.xml`);
  lines.push(`- Image sitemap: ${SITE_URL}/image-sitemap.xml`);

  return `${lines.join("\n")}\n`;
}
