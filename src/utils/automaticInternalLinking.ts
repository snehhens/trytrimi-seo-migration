// Automatic internal linking for blog posts
// This utility helps maintain strong internal linking across the site

interface LinkOpportunity {
  keyword: string;
  url: string;
  anchorText: string[];
  priority: number;
}

// High-value linking opportunities
export const linkOpportunities: LinkOpportunity[] = [
  // Treatment pages (highest priority)
  {
    keyword: "semaglutide",
    url: "/treatments/semaglutide",
    anchorText: [
      "learn more about semaglutide",
      "semaglutide treatment",
      "get semaglutide",
      "about semaglutide"
    ],
    priority: 10
  },
  {
    keyword: "tirzepatide",
    url: "/treatments/tirzepatide",
    anchorText: [
      "learn more about tirzepatide",
      "tirzepatide treatment",
      "get tirzepatide",
      "about tirzepatide"
    ],
    priority: 10
  },
  
  // Hub pages
  {
    keyword: "glp-1|glp1",
    url: "/blog/glp1-complete-guide",
    anchorText: [
      "GLP-1 medications",
      "complete GLP-1 guide",
      "understanding GLP-1"
    ],
    priority: 9
  },
  
  // Comparison content
  {
    keyword: "compare|comparison|vs",
    url: "/compare",
    anchorText: [
      "compare treatments",
      "see comparison",
      "treatment comparison"
    ],
    priority: 9
  },
  {
    keyword: "tirzepatide vs semaglutide|semaglutide vs tirzepatide",
    url: "/blog/tirzepatide-vs-semaglutide",
    anchorText: [
      "compare tirzepatide and semaglutide",
      "tirzepatide vs semaglutide",
      "which medication is better"
    ],
    priority: 8
  },
  
  // Cost content (high conversion)
  {
    keyword: "cost|price|pricing|affordable",
    url: "/blog/semaglutide-cost",
    anchorText: [
      "semaglutide cost",
      "see pricing",
      "cost breakdown",
      "pricing guide"
    ],
    priority: 9
  },
  {
    keyword: "tirzepatide cost|tirzepatide price",
    url: "/blog/tirzepatide-cost-comparison",
    anchorText: [
      "tirzepatide cost",
      "tirzepatide pricing",
      "cost comparison"
    ],
    priority: 8
  },
  
  // How it works
  {
    keyword: "how it works|process|getting started",
    url: "/how-it-works",
    anchorText: [
      "how it works",
      "our process",
      "getting started"
    ],
    priority: 8
  },
  
  // Side effects (common search)
  {
    keyword: "side effects",
    url: "/blog/semaglutide-side-effects",
    anchorText: [
      "potential side effects",
      "common side effects",
      "side effects guide"
    ],
    priority: 7
  },
  {
    keyword: "tirzepatide side effects",
    url: "/blog/tirzepatide-side-effects",
    anchorText: [
      "tirzepatide side effects",
      "potential side effects of tirzepatide"
    ],
    priority: 7
  },
  
  // Dosage guides
  {
    keyword: "dosage|dosing|dose",
    url: "/blog/semaglutide-dosage-guide",
    anchorText: [
      "dosage guide",
      "dosing information",
      "recommended dosage"
    ],
    priority: 7
  },
  
  // Results content
  {
    keyword: "results|weight loss results|effectiveness",
    url: "/blog/semaglutide-weight-loss-results",
    anchorText: [
      "weight loss results",
      "expected results",
      "clinical results"
    ],
    priority: 7
  },
  
  // Interactive tools
  {
    keyword: "calculator|bmi calculator",
    url: "/calculators",
    anchorText: [
      "use our calculator",
      "BMI calculator",
      "cost calculator"
    ],
    priority: 6
  }
];

// Function to find linking opportunities in content
export const findLinkOpportunities = (
  content: string,
  currentUrl: string,
  maxLinks: number = 5
): Array<{url: string; anchorText: string; position: number}> => {
  const opportunities: Array<{url: string; anchorText: string; position: number; priority: number}> = [];
  const contentLower = content.toLowerCase();
  
  linkOpportunities.forEach(opportunity => {
    // Skip if linking to current page
    if (currentUrl.includes(opportunity.url)) return;
    
    // Check if keyword exists in content
    const keywords = opportunity.keyword.split('|');
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const match = regex.exec(contentLower);
      
      if (match) {
        // Pick a random anchor text variation
        const anchorText = opportunity.anchorText[
          Math.floor(Math.random() * opportunity.anchorText.length)
        ];
        
        opportunities.push({
          url: opportunity.url,
          anchorText,
          position: match.index,
          priority: opportunity.priority
        });
      }
    });
  });
  
  // Sort by priority and position, return top matches
  return opportunities
    .sort((a, b) => {
      if (a.priority !== b.priority) return b.priority - a.priority;
      return a.position - b.position;
    })
    .slice(0, maxLinks)
    .map(({url, anchorText, position}) => ({url, anchorText, position}));
};

// Generate contextual internal links for a blog post
export const generateContextualLinks = (
  postContent: string,
  postCategory: string,
  currentUrl: string
): string[] => {
  const links: string[] = [];
  
  // Category-based recommendations
  if (postCategory === 'semaglutide') {
    links.push(
      '<a href="/treatments/semaglutide">Learn more about semaglutide treatment</a>',
      '<a href="/blog/semaglutide-cost">See semaglutide pricing</a>',
      '<a href="/compare">Compare with tirzepatide</a>'
    );
  } else if (postCategory === 'tirzepatide') {
    links.push(
      '<a href="/treatments/tirzepatide">Learn more about tirzepatide treatment</a>',
      '<a href="/blog/tirzepatide-cost-comparison">See tirzepatide pricing</a>',
      '<a href="/compare">Compare with semaglutide</a>'
    );
  }
  
  // Add general high-value links
  if (!currentUrl.includes('/how-it-works')) {
    links.push('<a href="/how-it-works">See how our process works</a>');
  }
  
  if (!currentUrl.includes('/calculators')) {
    links.push('<a href="/calculators">Try our free weight loss calculator</a>');
  }
  
  return links;
};
