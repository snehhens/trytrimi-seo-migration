/**
 * Content optimization utilities for better SEO and user engagement
 */

/**
 * Extract headings from content to generate a table of contents
 */
export interface Heading {
  id: string;
  text: string;
  level: number;
}

export const extractHeadings = (content: string): Heading[] => {
  const headingRegex = /<h([1-6])[^>]*>([^<]+)<\/h[1-6]>/gi;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    headings.push({ id, text, level });
  }

  return headings;
};

/**
 * Generate anchor links for headings automatically
 */
export const addAnchorLinksToHeadings = (content: string): string => {
  return content.replace(
    /<h([1-6])([^>]*)>([^<]+)<\/h[1-6]>/gi,
    (match, level, attrs, text) => {
      const id = text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
      return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    }
  );
};

/**
 * Calculate content freshness score (0-100)
 * Based on how recently the content was updated
 */
export const calculateFreshnessScore = (publishDate: Date, lastModified?: Date): number => {
  const now = new Date();
  const dateToCheck = lastModified || publishDate;
  const daysSinceUpdate = Math.floor((now.getTime() - dateToCheck.getTime()) / (1000 * 60 * 60 * 24));
  
  // Perfect score if updated within last 30 days
  if (daysSinceUpdate <= 30) return 100;
  
  // Gradual decline over 2 years
  if (daysSinceUpdate <= 730) {
    return Math.max(50, 100 - ((daysSinceUpdate - 30) / 700 * 50));
  }
  
  // Minimum score after 2 years
  return 50;
};

/**
 * Suggest content updates based on freshness
 */
export const suggestContentUpdates = (publishDate: Date, lastModified?: Date): string[] => {
  const suggestions: string[] = [];
  const now = new Date();
  const dateToCheck = lastModified || publishDate;
  const daysSinceUpdate = Math.floor((now.getTime() - dateToCheck.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysSinceUpdate > 90) {
    suggestions.push('Update statistics and data with latest research');
  }
  
  if (daysSinceUpdate > 180) {
    suggestions.push('Review and update pricing information');
    suggestions.push('Add new developments in the field');
  }
  
  if (daysSinceUpdate > 365) {
    suggestions.push('Comprehensive content refresh needed');
    suggestions.push('Update all external links');
    suggestions.push('Add new FAQs based on recent questions');
  }
  
  return suggestions;
};

/**
 * Generate meta keywords from content (deprecated but still used by some search engines)
 */
export const generateMetaKeywords = (
  title: string,
  content: string,
  maxKeywords: number = 10
): string[] => {
  // Combine title and content
  const text = `${title} ${content}`.toLowerCase();
  
  // Common stop words to filter out
  const stopWords = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
    'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
    'to', 'was', 'will', 'with', 'the', 'this', 'but', 'they', 'have',
    'not', 'can', 'what', 'which', 'their', 'been', 'more', 'when',
    'your', 'all', 'would', 'there', 'may', 'also', 'than', 'how'
  ]);
  
  // Extract words
  const words = text.match(/\b[a-z]{4,}\b/g) || [];
  
  // Count frequency
  const frequency = new Map<string, number>();
  words.forEach(word => {
    if (!stopWords.has(word)) {
      frequency.set(word, (frequency.get(word) || 0) + 1);
    }
  });
  
  // Sort by frequency and return top keywords
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

/**
 * Check content readability (Flesch Reading Ease)
 * Score: 0-100 (higher is easier to read)
 */
export const calculateReadability = (content: string): {
  score: number;
  level: string;
  suggestion: string;
} => {
  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, ' ');
  
  // Count sentences
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  
  // Count words
  const words = text.split(/\s+/).filter(w => w.length > 0).length;
  
  // Count syllables (simplified)
  const syllables = text.split(/\s+/).reduce((count, word) => {
    return count + Math.max(1, word.match(/[aeiouy]+/gi)?.length || 1);
  }, 0);
  
  if (words === 0 || sentences === 0) {
    return { score: 0, level: 'Unknown', suggestion: 'Add more content to calculate readability' };
  }
  
  // Flesch Reading Ease formula
  const score = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
  const clampedScore = Math.max(0, Math.min(100, score));
  
  let level: string;
  let suggestion: string;
  
  if (clampedScore >= 90) {
    level = 'Very Easy';
    suggestion = 'Perfect for all audiences';
  } else if (clampedScore >= 80) {
    level = 'Easy';
    suggestion = 'Good for general audience';
  } else if (clampedScore >= 70) {
    level = 'Fairly Easy';
    suggestion = 'Suitable for most readers';
  } else if (clampedScore >= 60) {
    level = 'Standard';
    suggestion = 'Good for educated readers';
  } else if (clampedScore >= 50) {
    level = 'Fairly Difficult';
    suggestion = 'Consider simplifying some sentences';
  } else if (clampedScore >= 30) {
    level = 'Difficult';
    suggestion = 'Simplify language and break up long sentences';
  } else {
    level = 'Very Difficult';
    suggestion: 'Content is too complex for most readers - major simplification needed';
  }
  
  return { score: Math.round(clampedScore), level, suggestion };
};

/**
 * Optimize images for web
 * Returns recommendations for image optimization
 */
export interface ImageOptimization {
  currentFormat: string;
  recommendedFormat: string;
  reason: string;
  altTextPresent: boolean;
  dimensionsOptimal: boolean;
}

export const analyzeImageOptimization = (
  imageUrl: string,
  altText?: string,
  width?: number,
  height?: number
): ImageOptimization => {
  const extension = imageUrl.split('.').pop()?.toLowerCase();
  let currentFormat = extension || 'unknown';
  let recommendedFormat = 'webp';
  let reason = 'WebP offers best compression with quality';
  
  // Determine if dimensions are optimal (max 1920px)
  const dimensionsOptimal = width && height ? 
    (width <= 1920 && height <= 1920) : false;
  
  // Special cases
  if (extension === 'svg') {
    recommendedFormat = 'svg';
    reason = 'SVG is optimal for vector graphics';
  } else if (extension === 'gif' && imageUrl.includes('animated')) {
    recommendedFormat = 'gif';
    reason = 'Keep GIF for animations (consider video alternative)';
  }
  
  return {
    currentFormat,
    recommendedFormat,
    reason,
    altTextPresent: !!altText && altText.length > 5,
    dimensionsOptimal
  };
};

/**
 * Generate social media preview text
 */
export const generateSocialPreview = (
  content: string,
  maxLength: number = 200
): string => {
  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, ' ').trim();
  
  // Remove multiple spaces
  const cleaned = text.replace(/\s+/g, ' ');
  
  if (cleaned.length <= maxLength) {
    return cleaned;
  }
  
  // Truncate at last complete sentence before max length
  const truncated = cleaned.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  
  if (lastPeriod > maxLength * 0.7) {
    return truncated.substring(0, lastPeriod + 1);
  }
  
  // Otherwise truncate at last space
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
};

/**
 * Check for broken internal links
 */
export const validateInternalLinks = async (
  content: string,
  baseUrl: string = 'https://trytrimi.com'
): Promise<{ url: string; broken: boolean }[]> => {
  const linkRegex = /href=["']([^"']+)["']/gi;
  const links: Set<string> = new Set();
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[1];
    // Only check internal links
    if (url.startsWith('/') || url.startsWith(baseUrl)) {
      links.add(url);
    }
  }
  
  // Check each link (in production, you'd make actual HTTP requests)
  const results = Array.from(links).map(url => ({
    url,
    broken: false // Placeholder - implement actual checking in production
  }));
  
  return results;
};

/**
 * Generate schema markup suggestions based on content type
 */
export const suggestSchemaTypes = (
  content: string,
  currentSchemas: string[] = []
): string[] => {
  const suggestions: string[] = [];
  const contentLower = content.toLowerCase();
  
  if (contentLower.includes('recipe') && !currentSchemas.includes('Recipe')) {
    suggestions.push('Recipe');
  }
  
  if (contentLower.match(/\bstep \d|\bhow to\b/) && !currentSchemas.includes('HowTo')) {
    suggestions.push('HowTo');
  }
  
  if (contentLower.includes('faq') || contentLower.match(/\?.*\?/)) {
    if (!currentSchemas.includes('FAQPage')) {
      suggestions.push('FAQPage');
    }
  }
  
  if (contentLower.includes('review') || contentLower.includes('rating')) {
    if (!currentSchemas.includes('Review')) {
      suggestions.push('Review');
    }
  }
  
  if (contentLower.match(/\$\d+|\bprice\b|\bcost\b/) && !currentSchemas.includes('Product')) {
    suggestions.push('Product');
  }
  
  return suggestions;
};
