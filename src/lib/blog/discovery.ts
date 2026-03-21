import { blogPosts, type BlogPost } from "@/data/blogPosts";

export interface BlogTopicCluster {
  category: string;
  count: number;
  description: string;
  featuredPost: BlogPost;
  posts: BlogPost[];
}

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "in",
  "into",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "their",
  "this",
  "to",
  "what",
  "with",
  "your",
]);

const HIGH_INTENT_TERMS = [
  "before",
  "after",
  "buy",
  "compare",
  "comparison",
  "cost",
  "coverage",
  "diet",
  "dosage",
  "dose",
  "effects",
  "eligibility",
  "first",
  "guide",
  "insurance",
  "month",
  "online",
  "pricing",
  "results",
  "review",
  "reviews",
  "safety",
  "side",
  "start",
  "success",
  "timeline",
  "vs",
  "weight",
];

const EVERGREEN_TERMS = [
  "alcohol",
  "comparison",
  "cost",
  "diet",
  "dosage",
  "effects",
  "eligibility",
  "exercise",
  "faq",
  "first",
  "food",
  "foods",
  "guide",
  "how",
  "insurance",
  "month",
  "results",
  "safety",
  "side",
  "start",
  "works",
];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Comparisons: "High-intent comparison content for people deciding between medications, providers, or care models.",
  Cost: "Pricing, insurance, affordability, and cost-breakdown content for financially driven searchers.",
  "Getting Started": "Beginner-friendly guides that convert early-stage visitors into informed next-step readers.",
  Results: "Outcome-focused articles built around timelines, before-and-after expectations, and real-world progress.",
  Safety: "Trust-building safety content that answers risk, contraindication, and side-effect questions clearly.",
};

const REFERENCE_TIMESTAMP = blogPosts.reduce((latest, post) => {
  return Math.max(latest, toTimestamp(post.modifiedDate || post.date));
}, 0);

function toTimestamp(value?: string): number {
  if (!value) {
    return 0;
  }

  return new Date(`${value}T00:00:00Z`).getTime();
}

function getPostTimestamp(post: BlogPost): number {
  return toTimestamp(post.modifiedDate || post.date);
}

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token));
}

function getPostTerms(post: BlogPost): string[] {
  return Array.from(
    new Set(
      tokenize([post.title, post.excerpt, post.slug, post.category].join(" ")),
    ),
  );
}

function getIntentBucket(post: BlogPost): string {
  const haystack = `${post.slug} ${post.title}`.toLowerCase();

  if (haystack.includes("vs") || haystack.includes("compare") || haystack.includes("comparison")) {
    return "comparison";
  }
  if (haystack.includes("cost") || haystack.includes("price") || haystack.includes("insurance")) {
    return "cost";
  }
  if (haystack.includes("side") || haystack.includes("safety") || haystack.includes("contraindication")) {
    return "safety";
  }
  if (haystack.includes("dose") || haystack.includes("dosage") || haystack.includes("injection")) {
    return "dosage";
  }
  if (haystack.includes("result") || haystack.includes("before") || haystack.includes("after")) {
    return "results";
  }
  if (haystack.includes("start") || haystack.includes("first-month") || haystack.includes("beginner")) {
    return "getting-started";
  }
  if (haystack.includes("diet") || haystack.includes("meal") || haystack.includes("exercise")) {
    return "lifestyle";
  }

  return "general";
}

function getMedicationBucket(post: BlogPost): string {
  const haystack = `${post.slug} ${post.title} ${post.excerpt}`.toLowerCase();

  if (haystack.includes("tirzepatide")) {
    return "tirzepatide";
  }
  if (haystack.includes("semaglutide")) {
    return "semaglutide";
  }
  if (haystack.includes("trimi")) {
    return "trimi";
  }
  if (haystack.includes("glp1") || haystack.includes("glp-1")) {
    return "glp1";
  }

  return "general";
}

function getFreshnessScore(post: BlogPost): number {
  const timestamp = getPostTimestamp(post);
  const ageInDays = (REFERENCE_TIMESTAMP - timestamp) / (1000 * 60 * 60 * 24);

  if (ageInDays <= 30) {
    return 8;
  }
  if (ageInDays <= 90) {
    return 6;
  }
  if (ageInDays <= 180) {
    return 4;
  }
  if (ageInDays <= 365) {
    return 2;
  }

  return 1;
}

function getIntentScore(post: BlogPost): number {
  const terms = getPostTerms(post);
  return HIGH_INTENT_TERMS.reduce((score, term) => score + (terms.includes(term) ? 2 : 0), 0);
}

function getEvergreenScore(post: BlogPost): number {
  const terms = getPostTerms(post);
  let score = EVERGREEN_TERMS.reduce((total, term) => total + (terms.includes(term) ? 2 : 0), 0);

  if (getIntentBucket(post) !== "general") {
    score += 2;
  }

  if (getMedicationBucket(post) !== "general") {
    score += 1;
  }

  return score;
}

function getReachabilityScore(post: BlogPost): number {
  let score = getIntentScore(post) + getFreshnessScore(post) + getEvergreenScore(post);

  if (post.slug.endsWith("-hub")) {
    score += 6;
  }

  if (getMedicationBucket(post) === "trimi") {
    score += 3;
  }

  if (post.category === "Comparisons" || post.category === "Getting Started" || post.category === "Safety") {
    score += 4;
  }

  return score;
}

function sortByDiscovery(a: BlogPost, b: BlogPost): number {
  const scoreDiff = getReachabilityScore(b) - getReachabilityScore(a);

  if (scoreDiff !== 0) {
    return scoreDiff;
  }

  return getPostTimestamp(b) - getPostTimestamp(a);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedBlogPosts(posts: BlogPost[] = blogPosts): BlogPost[] {
  return [...posts].sort((a, b) => {
    const timestampDiff = getPostTimestamp(b) - getPostTimestamp(a);
    if (timestampDiff !== 0) {
      return timestampDiff;
    }

    return sortByDiscovery(a, b);
  });
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => !post.slug.endsWith("-hub"))
    .sort(sortByDiscovery)
    .slice(0, limit);
}

export function getTrendingBlogPosts(limit = 4): BlogPost[] {
  return [...blogPosts]
    .filter((post) => !post.slug.endsWith("-hub"))
    .sort((a, b) => {
      const trendScoreA = getFreshnessScore(a) * 3 + getIntentScore(a) + getEvergreenScore(a);
      const trendScoreB = getFreshnessScore(b) * 3 + getIntentScore(b) + getEvergreenScore(b);
      if (trendScoreB !== trendScoreA) {
        return trendScoreB - trendScoreA;
      }

      return getPostTimestamp(b) - getPostTimestamp(a);
    })
    .slice(0, limit);
}

export function getEvergreenBlogPosts(limit = 4): BlogPost[] {
  return [...blogPosts]
    .filter((post) => !post.slug.endsWith("-hub"))
    .sort((a, b) => {
      const evergreenDiff = getEvergreenScore(b) - getEvergreenScore(a);
      if (evergreenDiff !== 0) {
        return evergreenDiff;
      }

      return sortByDiscovery(a, b);
    })
    .slice(0, limit);
}

export function getTopicClusters(limit = 6): BlogTopicCluster[] {
  return Object.entries(
    blogPosts.reduce<Record<string, BlogPost[]>>((clusters, post) => {
      const key = post.category;
      clusters[key] = [...(clusters[key] || []), post];
      return clusters;
    }, {}),
  )
    .map(([category, posts]) => {
      const sortedPosts = getSortedBlogPosts(posts);
      const featuredPost = sortedPosts[0];

      return {
        category,
        count: posts.length,
        description:
          CATEGORY_DESCRIPTIONS[category] ||
          `Deep-dive articles and practical guidance on ${category.toLowerCase()} for GLP-1 patients and researchers.`,
        featuredPost,
        posts: sortedPosts.slice(0, 3),
      };
    })
    .sort((a, b) => {
      const scoreA = a.count * 3 + getReachabilityScore(a.featuredPost);
      const scoreB = b.count * 3 + getReachabilityScore(b.featuredPost);
      return scoreB - scoreA;
    })
    .slice(0, limit);
}

export function getRelatedBlogPosts(current: BlogPost | string | undefined, limit = 4): BlogPost[] {
  const currentPost = typeof current === "string" ? getBlogPostBySlug(current) : current;

  if (!currentPost) {
    return getFeaturedBlogPosts(limit);
  }

  const currentTerms = getPostTerms(currentPost);
  const currentIntent = getIntentBucket(currentPost);
  const currentMedication = getMedicationBucket(currentPost);

  return [...blogPosts]
    .filter((post) => post.slug !== currentPost.slug && !post.slug.endsWith("-hub"))
    .map((post) => {
      const sharedTerms = getPostTerms(post).filter((term) => currentTerms.includes(term)).length;
      let score = sharedTerms;

      if (post.category === currentPost.category) {
        score += 8;
      }
      if (getIntentBucket(post) === currentIntent) {
        score += 4;
      }
      if (getMedicationBucket(post) === currentMedication) {
        score += 4;
      }

      score += getFreshnessScore(post);
      score += getIntentScore(post);

      return { post, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return getPostTimestamp(b.post) - getPostTimestamp(a.post);
    })
    .slice(0, limit)
    .map(({ post }) => post);
}
