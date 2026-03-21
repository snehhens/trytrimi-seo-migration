// Enhanced SEO utilities for better search engine optimization

/**
 * Generate comprehensive meta tags for a page
 */
export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  ogImage?: string;
  noindex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
    tags?: string[];
  };
}

/**
 * Optimize title for search engines
 * - Keep under 60 characters
 * - Include primary keyword near the beginning
 * - Add brand name at the end
 */
export const optimizeTitle = (title: string, includeBrand = true): string => {
  const brand = " | Trimi";
  const maxLength = 60 - (includeBrand ? brand.length : 0);
  
  let optimized = title.trim();
  if (optimized.length > maxLength) {
    optimized = optimized.substring(0, maxLength - 3) + "...";
  }
  
  return includeBrand ? optimized + brand : optimized;
};

/**
 * Optimize meta description
 * - Keep between 150-160 characters
 * - Include primary keyword naturally
 * - Add call to action
 */
export const optimizeDescription = (description: string): string => {
  const maxLength = 160;
  const minLength = 150;
  
  let optimized = description.trim();
  
  if (optimized.length > maxLength) {
    // Find last complete sentence or word before limit
    const truncated = optimized.substring(0, maxLength);
    const lastPeriod = truncated.lastIndexOf('.');
    const lastSpace = truncated.lastIndexOf(' ');
    
    if (lastPeriod > minLength) {
      optimized = optimized.substring(0, lastPeriod + 1);
    } else if (lastSpace > minLength) {
      optimized = optimized.substring(0, lastSpace) + "...";
    } else {
      optimized = truncated + "...";
    }
  }
  
  return optimized;
};

/**
 * Generate keywords array from content
 * Focus on long-tail keywords for better ranking
 */
export const extractKeywords = (content: string, primaryKeyword: string): string[] => {
  const words = content.toLowerCase().split(/\s+/);
  const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for']);
  
  // Filter and count words
  const wordCount = new Map<string, number>();
  words.forEach(word => {
    const cleaned = word.replace(/[^a-z]/g, '');
    if (cleaned.length > 3 && !stopWords.has(cleaned)) {
      wordCount.set(cleaned, (wordCount.get(cleaned) || 0) + 1);
    }
  });
  
  // Sort by frequency and return top keywords
  const keywords = Array.from(wordCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([word]) => word);
  
  // Always include primary keyword first
  return [primaryKeyword, ...keywords.filter(k => k !== primaryKeyword)];
};

/**
 * Generate internal linking suggestions
 * Based on content relevance and keyword matching
 */
export interface InternalLink {
  url: string;
  anchorText: string;
  context: string;
}

export const generateInternalLinks = (
  currentContent: string,
  availablePages: Array<{ url: string; title: string; keywords: string[] }>
): InternalLink[] => {
  const suggestions: InternalLink[] = [];
  const contentLower = currentContent.toLowerCase();
  
  availablePages.forEach(page => {
    page.keywords.forEach(keyword => {
      if (contentLower.includes(keyword.toLowerCase())) {
        suggestions.push({
          url: page.url,
          anchorText: keyword,
          context: page.title
        });
      }
    });
  });
  
  // Return unique suggestions, max 5 per page
  return suggestions
    .filter((link, index, self) => 
      index === self.findIndex(l => l.url === link.url)
    )
    .slice(0, 5);
};

/**
 * Calculate reading time for content
 * Average reading speed: 200-250 words per minute
 */
export const calculateReadingTime = (content: string, wordsPerMinute = 225): string => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

/**
 * Generate FAQ schema from content headings
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export const extractFAQs = (content: string): FAQItem[] => {
  const faqs: FAQItem[] = [];
  const lines = content.split('\n');
  
  let currentQuestion = '';
  let currentAnswer = '';
  
  lines.forEach(line => {
    const trimmed = line.trim();
    
    // Detect question (lines ending with ?)
    if (trimmed.endsWith('?')) {
      if (currentQuestion && currentAnswer) {
        faqs.push({ question: currentQuestion, answer: currentAnswer.trim() });
      }
      currentQuestion = trimmed;
      currentAnswer = '';
    } else if (currentQuestion && trimmed) {
      currentAnswer += ' ' + trimmed;
    }
  });
  
  // Add last FAQ
  if (currentQuestion && currentAnswer) {
    faqs.push({ question: currentQuestion, answer: currentAnswer.trim() });
  }
  
  return faqs;
};

/**
 * Check content for SEO best practices
 */
export interface SEOAudit {
  score: number;
  issues: string[];
  recommendations: string[];
}

export const auditContentSEO = (
  content: string,
  title: string,
  description: string,
  primaryKeyword: string
): SEOAudit => {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;
  
  const contentLower = content.toLowerCase();
  const keywordLower = primaryKeyword.toLowerCase();
  
  // Title checks
  if (title.length > 60) {
    issues.push('Title is too long (>60 characters)');
    score -= 10;
  } else if (title.length < 30) {
    issues.push('Title is too short (<30 characters)');
    score -= 5;
  }
  
  if (!title.toLowerCase().includes(keywordLower)) {
    issues.push('Title does not include primary keyword');
    score -= 15;
  }
  
  // Description checks
  if (description.length > 160) {
    issues.push('Meta description is too long (>160 characters)');
    score -= 5;
  } else if (description.length < 120) {
    issues.push('Meta description is too short (<120 characters)');
    score -= 5;
  }
  
  if (!description.toLowerCase().includes(keywordLower)) {
    issues.push('Meta description does not include primary keyword');
    score -= 10;
  }
  
  // Content checks
  const wordCount = content.split(/\s+/).length;
  if (wordCount < 300) {
    issues.push('Content is too short (<300 words)');
    score -= 20;
    recommendations.push('Add more comprehensive content (aim for 1000+ words)');
  } else if (wordCount < 1000) {
    recommendations.push('Consider expanding content to 1500+ words for better ranking');
  }
  
  // Keyword density check (should be 1-2%)
  const keywordCount = (contentLower.match(new RegExp(keywordLower, 'g')) || []).length;
  const density = (keywordCount / wordCount) * 100;
  
  if (density < 0.5) {
    issues.push('Keyword density is too low (<0.5%)');
    score -= 10;
    recommendations.push(`Use "${primaryKeyword}" more naturally throughout content`);
  } else if (density > 3) {
    issues.push('Keyword density is too high (>3%) - may be considered keyword stuffing');
    score -= 15;
  }
  
  // Heading checks
  const h1Count = (content.match(/<h1/g) || []).length;
  if (h1Count === 0) {
    issues.push('Missing H1 heading');
    score -= 15;
  } else if (h1Count > 1) {
    issues.push('Multiple H1 headings detected');
    score -= 10;
  }
  
  // General recommendations
  if (wordCount >= 300) {
    if (!contentLower.includes('table of contents')) {
      recommendations.push('Add table of contents for better user experience');
    }
    if (keywordCount < 3) {
      recommendations.push('Include primary keyword in subheadings');
    }
  }
  
  return {
    score: Math.max(0, score),
    issues,
    recommendations
  };
};

/**
 * Generate social sharing text optimized for engagement
 */
export const generateSocialShareText = (title: string, type: 'twitter' | 'facebook' | 'linkedin'): string => {
  const maxLengths = {
    twitter: 280,
    facebook: 500,
    linkedin: 600
  };
  
  const maxLength = maxLengths[type];
  let text = title;
  
  // Add call-to-action based on platform
  const ctas = {
    twitter: '👇 Learn more:',
    facebook: 'Check out this comprehensive guide:',
    linkedin: 'Valuable insights on weight loss medication:'
  };
  
  const fullText = `${ctas[type]} ${text}`;
  
  if (fullText.length <= maxLength) {
    return fullText;
  }
  
  // Truncate if needed
  const truncated = text.substring(0, maxLength - ctas[type].length - 6) + '...';
  return `${ctas[type]} ${truncated}`;
};
