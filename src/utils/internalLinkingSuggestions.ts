// Advanced internal linking suggestions based on content analysis

export interface LinkSuggestion {
  text: string;
  url: string;
  relevance: number;
  context: string;
}

interface ContentMap {
  [key: string]: {
    keywords: string[];
    url: string;
    title: string;
    category: string;
  };
}

// High-value internal linking targets
const contentMap: ContentMap = {
  'semaglutide-cost': {
    keywords: ['cost', 'price', 'affordable', 'pricing', 'expensive'],
    url: '/blog/semaglutide-cost',
    title: 'Semaglutide Cost: Complete Pricing Guide',
    category: 'semaglutide'
  },
  'tirzepatide-cost': {
    keywords: ['tirzepatide cost', 'mounjaro price', 'zepbound price'],
    url: '/blog/tirzepatide-cost-comparison',
    title: 'Tirzepatide Cost Comparison Guide',
    category: 'tirzepatide'
  },
  'semaglutide-side-effects': {
    keywords: ['side effects', 'nausea', 'adverse', 'reactions'],
    url: '/blog/semaglutide-side-effects',
    title: 'Semaglutide Side Effects Guide',
    category: 'semaglutide'
  },
  'tirzepatide-side-effects': {
    keywords: ['tirzepatide side effects', 'mounjaro side effects'],
    url: '/blog/tirzepatide-side-effects',
    title: 'Tirzepatide Side Effects Guide',
    category: 'tirzepatide'
  },
  'how-it-works': {
    keywords: ['how it works', 'mechanism', 'glp-1', 'weight loss process'],
    url: '/how-it-works',
    title: 'How It Works',
    category: 'general'
  },
  'comparison': {
    keywords: ['compare', 'vs', 'difference', 'better'],
    url: '/compare',
    title: 'Compare Treatments',
    category: 'general'
  },
  'dosage-guide': {
    keywords: ['dosage', 'dose', 'how much', 'titration'],
    url: '/blog/semaglutide-dosage-guide',
    title: 'Semaglutide Dosage Guide',
    category: 'semaglutide'
  },
  'results': {
    keywords: ['results', 'weight loss', 'outcomes', 'effectiveness'],
    url: '/blog/semaglutide-weight-loss-results',
    title: 'Semaglutide Weight Loss Results',
    category: 'semaglutide'
  },
  'pcos-comparison': {
    keywords: ['pcos', 'polycystic ovary', 'insulin resistance', 'hormonal'],
    url: '/blog/tirzepatide-vs-semaglutide-pcos-weight-loss',
    title: 'Tirzepatide vs Semaglutide for PCOS',
    category: 'health-conditions'
  },
  'affordable-alternatives': {
    keywords: ['cheap', 'affordable', 'cost', 'savings', 'budget', 'price'],
    url: '/blog/cheap-affordable-glp1-tirzepatide-alternatives',
    title: 'Affordable GLP-1 Alternatives',
    category: 'cost'
  },
  'local-clinics': {
    keywords: ['near me', 'clinic', 'provider', 'doctor', 'prescription', 'where to get'],
    url: '/blog/glp1-injections-near-me-clinic-guide',
    title: 'Finding GLP-1 Clinics Near You',
    category: 'getting-started'
  },
  'side-effects-comparison': {
    keywords: ['side effects', 'tolerated', 'nausea', 'best glp-1', 'minimize'],
    url: '/blog/best-glp1-weight-loss-without-side-effects',
    title: 'Best GLP-1 Without Side Effects',
    category: 'side-effects'
  },
  'muscle-loss': {
    keywords: ['muscle loss', 'lean mass', 'protein', 'exercise', 'resistance training'],
    url: '/blog/managing-muscle-loss-semaglutide-exercise-nutrition',
    title: 'Managing Muscle Loss on Semaglutide',
    category: 'lifestyle'
  }
};

export const analyzeContentForLinks = (content: string, currentUrl: string): LinkSuggestion[] => {
  const suggestions: LinkSuggestion[] = [];
  const contentLower = content.toLowerCase();
  
  Object.entries(contentMap).forEach(([key, data]) => {
    // Skip if it's the current page
    if (currentUrl.includes(data.url)) return;
    
    let relevance = 0;
    let matchedKeywords: string[] = [];
    
    // Check for keyword matches
    data.keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = contentLower.match(regex);
      if (matches) {
        relevance += matches.length;
        matchedKeywords.push(keyword);
      }
    });
    
    if (relevance > 0) {
      suggestions.push({
        text: data.title,
        url: data.url,
        relevance,
        context: `Found ${relevance} mention(s) of: ${matchedKeywords.join(', ')}`
      });
    }
  });
  
  // Sort by relevance
  return suggestions.sort((a, b) => b.relevance - a.relevance).slice(0, 5);
};

// Get related posts based on category and keywords
export const getRelatedPosts = (
  category: string,
  keywords: string[],
  currentUrl: string,
  limit: number = 3
): LinkSuggestion[] => {
  const related: LinkSuggestion[] = [];
  
  Object.entries(contentMap).forEach(([key, data]) => {
    if (currentUrl.includes(data.url)) return;
    
    let relevance = 0;
    
    // Category match bonus
    if (data.category === category) {
      relevance += 10;
    }
    
    // Keyword matches
    keywords.forEach(keyword => {
      if (data.keywords.some(k => k.includes(keyword.toLowerCase()))) {
        relevance += 5;
      }
    });
    
    if (relevance > 0) {
      related.push({
        text: data.title,
        url: data.url,
        relevance,
        context: data.category
      });
    }
  });
  
  return related.sort((a, b) => b.relevance - a.relevance).slice(0, limit);
};

// Generate contextual anchor text variations
export const generateAnchorText = (targetPage: string): string[] => {
  const variations: { [key: string]: string[] } = {
    'semaglutide-cost': [
      'learn about semaglutide pricing',
      'see current semaglutide costs',
      'compare semaglutide prices',
      'view our pricing guide'
    ],
    'tirzepatide-cost': [
      'check tirzepatide pricing',
      'see tirzepatide costs',
      'compare tirzepatide prices',
      'view tirzepatide pricing'
    ],
    'how-it-works': [
      'learn how the process works',
      'see how our program works',
      'understand the process',
      'discover how it works'
    ],
    'comparison': [
      'compare treatment options',
      'see treatment comparison',
      'compare semaglutide vs tirzepatide',
      'view our comparison guide'
    ]
  };
  
  const key = Object.keys(variations).find(k => targetPage.includes(k));
  return key ? variations[key] : ['learn more', 'read more', 'see our guide'];
};
