// Helper functions for blog posts

// Extract keywords from title and content
export function extractKeywords(title: string, content?: string): string[] {
  const keywords: string[] = [];
  
  // Extract from title
  const titleWords = title.toLowerCase().split(' ');
  keywords.push(...titleWords.filter(word => word.length > 3));
  
  // Common medical terms
  const medicalTerms = [
    'semaglutide', 'tirzepatide', 'ozempic', 'wegovy', 'mounjaro',
    'weight loss', 'glp-1', 'diabetes', 'obesity', 'medication',
    'injection', 'dosage', 'side effects', 'treatment', 'prescription'
  ];
  
  medicalTerms.forEach(term => {
    if (title.toLowerCase().includes(term)) {
      keywords.push(term);
    }
  });
  
  return [...new Set(keywords)]; // Remove duplicates
}

// Generate table of contents from headings
export function generateTOC(content: string): Array<{ id: string; title: string; level: number }> {
  const toc: Array<{ id: string; title: string; level: number }> = [];
  
  // Match h2 and h3 headings
  const headingRegex = /<h([23])[^>]*>([^<]+)<\/h\1>/gi;
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const title = match[2].trim();
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    toc.push({ id, title, level });
  }
  
  return toc;
}

// Calculate comprehensive reading time
export function calculateDetailedReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  if (minutes < 1) return '1 min read';
  if (minutes === 1) return '1 min read';
  return `${minutes} min read`;
}

// Get related posts by category and keywords
export function findRelatedPosts(
  currentPost: { category: string; keywords?: string[] },
  allPosts: any[],
  currentSlug: string,
  limit: number = 3
): any[] {
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;
      
      // Same category gets high score
      if (post.category === currentPost.category) {
        score += 10;
      }
      
      // Keyword matches
      if (currentPost.keywords && post.keywords) {
        const matchingKeywords = currentPost.keywords.filter(
          kw => post.keywords.includes(kw)
        );
        score += matchingKeywords.length * 2;
      }
      
      return { ...post, relevanceScore: score };
    })
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
}

// Format date for display
export function formatPublishDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Add anchor IDs to headings in HTML content
export function addHeadingAnchors(html: string): string {
  return html.replace(
    /<h([23])>([^<]+)<\/h\1>/gi,
    (match, level, content) => {
      const id = content.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `<h${level} id="${id}">${content}</h${level}>`;
    }
  );
}

// Estimate SEO score based on content
export function calculateSEOScore(params: {
  title: string;
  excerpt: string;
  content: string;
  hasMetaDescription: boolean;
  hasH1: boolean;
  hasImages: boolean;
  internalLinks: number;
  externalLinks: number;
}): { score: number; suggestions: string[] } {
  let score = 0;
  const suggestions: string[] = [];
  
  // Title length (50-60 chars is ideal)
  if (params.title.length >= 50 && params.title.length <= 60) {
    score += 15;
  } else {
    suggestions.push('Optimize title length to 50-60 characters');
  }
  
  // Meta description
  if (params.hasMetaDescription && params.excerpt.length >= 120 && params.excerpt.length <= 160) {
    score += 15;
  } else {
    suggestions.push('Add meta description (120-160 characters)');
  }
  
  // H1 tag
  if (params.hasH1) {
    score += 10;
  } else {
    suggestions.push('Add H1 heading');
  }
  
  // Content length (1500+ words is ideal)
  const wordCount = params.content.split(/\s+/).length;
  if (wordCount >= 1500) {
    score += 20;
  } else if (wordCount >= 1000) {
    score += 10;
  } else {
    suggestions.push('Increase content to 1500+ words');
  }
  
  // Images
  if (params.hasImages) {
    score += 10;
  } else {
    suggestions.push('Add relevant images');
  }
  
  // Internal links (3-5 is ideal)
  if (params.internalLinks >= 3 && params.internalLinks <= 5) {
    score += 15;
  } else if (params.internalLinks < 3) {
    suggestions.push('Add more internal links (aim for 3-5)');
  }
  
  // External links (1-3 authoritative sources)
  if (params.externalLinks >= 1 && params.externalLinks <= 3) {
    score += 15;
  } else if (params.externalLinks === 0) {
    suggestions.push('Add external links to authoritative sources');
  }
  
  return { score, suggestions };
}
