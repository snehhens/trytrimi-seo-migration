// Enhanced internal linking system with topic clusters
export interface RelatedArticle {
  title: string;
  url: string;
  excerpt: string;
  category: string;
  relevanceScore?: number;
}

// Enhanced topic clusters for comprehensive SEO strategy
export const topicClusters = {
  // Main medication clusters
  semaglutide: {
    pillarPage: '/treatments/semaglutide',
    hubPage: '/semaglutide-guide',
    corePosts: [
      'semaglutide-weight-loss-results',
      'semaglutide-real-world-results',
      'semaglutide-dosage-guide',
      'semaglutide-side-effects',
      'managing-gi-side-effects-semaglutide',
      'buy-semaglutide-online',
      'semaglutide-cost',
      'how-to-start-semaglutide',
      'semaglutide-first-month',
      'kickstarting-semaglutide-basics',
      'online-semaglutide-prescription',
      'semaglutide-older-adults-guidance'
    ]
  },
  tirzepatide: {
    pillarPage: '/treatments/tirzepatide',
    hubPage: '/tirzepatide-guide',
    corePosts: [
      'tirzepatide-weight-loss-results',
      'tirzepatide-dosage-guide',
      'tirzepatide-side-effects',
      'tirzepatide-side-effects-2025-data',
      'buy-tirzepatide-online',
      'tirzepatide-vs-semaglutide',
      'tirzepatide-vs-semaglutide-2025-updates',
      'how-tirzepatide-works',
      'tirzepatide-first-month',
      'things-to-know-before-starting-tirzepatide',
      'tirzepatide-cvd-risk-reduction',
      'tirzepatide-preexisting-conditions-cancer'
    ]
  },
  
  // Thematic clusters
  costAndAffordability: {
    pillarPage: '/cost-guide',
    hubPage: '/blog',
    corePosts: [
      'semaglutide-cost',
      'semaglutide-cost-breakdown',
      'semaglutide-cost-savings',
      'semaglutide-without-insurance',
      'compounded-semaglutide-vs-brand-name',
      'semaglutide-weight-loss-online-cost',
      'compounded-tirzepatide-cost',
      'tirzepatide-cost-comparison',
      'cheapest-tirzepatide-online',
      'tirzepatide-insurance-coverage',
      'weight-loss-injection-costs'
    ]
  },
  
  dosageAndAdministration: {
    pillarPage: '/dosage-hub',
    hubPage: '/blog',
    corePosts: [
      'semaglutide-dosage-guide',
      'semaglutide-dosing-chart',
      'semaglutide-injection-guide',
      'semaglutide-injection-site-reactions',
      'higher-dose-semaglutide-options',
      'tirzepatide-dosage-guide',
      'tirzepatide-dosing-chart',
      'tirzepatide-maintenance-dose',
      'tirzepatide-mechanism-guide'
    ]
  },
  
  sideEffectsManagement: {
    pillarPage: '/side-effects-hub',
    hubPage: '/blog',
    corePosts: [
      'semaglutide-side-effects',
      'managing-gi-side-effects-semaglutide',
      'semaglutide-nausea',
      'tirzepatide-side-effects',
      'tirzepatide-side-effects-2025-data',
      'glp1-side-effects-management'
    ]
  },
  
  resultsAndEffectiveness: {
    pillarPage: '/results-hub',
    hubPage: '/blog',
    corePosts: [
      'semaglutide-weight-loss-results',
      'semaglutide-real-world-results',
      'semaglutide-clinical-results',
      'semaglutide-results-timeline',
      'semaglutide-plateau',
      'tirzepatide-weight-loss-results',
      'tirzepatide-clinical-trials-data'
    ]
  },
  
  gettingStarted: {
    pillarPage: '/getting-started-hub',
    hubPage: '/blog',
    corePosts: [
      'how-to-start-semaglutide',
      'semaglutide-eligibility',
      'semaglutide-first-month',
      'first-month-semaglutide-tirzepatide',
      'kickstarting-semaglutide-basics',
      'tirzepatide-quick-start',
      'tirzepatide-first-month',
      'things-to-know-before-starting-tirzepatide',
      'online-semaglutide-prescription',
      'tirzepatide-online-prescription'
    ]
  },
  
  healthConditions: {
    pillarPage: '/health-conditions-hub',
    hubPage: '/blog',
    corePosts: [
      'semaglutide-pcos',
      'semaglutide-diabetes',
      'semaglutide-blood-pressure',
      'semaglutide-kidney-function',
      'semaglutide-thyroid',
      'semaglutide-bone-health',
      'tirzepatide-cvd-risk-reduction',
      'tirzepatide-preexisting-conditions-cancer'
    ]
  },
  
  lifestyleIntegration: {
    pillarPage: '/lifestyle-hub',
    hubPage: '/blog',
    corePosts: [
      'semaglutide-diet-plan',
      'semaglutide-exercise',
      'semaglutide-intermittent-fasting',
      'semaglutide-alcohol',
      'maintaining-weight-loss-after-glp1'
    ]
  },
  
  comparisons: {
    pillarPage: '/comparisons-hub',
    hubPage: '/blog',
    corePosts: [
      'tirzepatide-vs-semaglutide',
      'tirzepatide-vs-semaglutide-2025-updates',
      'semaglutide-vs-ozempic-vs-wegovy',
      'semaglutide-vs-phentermine',
      'compounded-semaglutide-vs-brand-name'
    ]
  },
  
  supplyAndAccess: {
    pillarPage: '/supply-access-hub',
    hubPage: '/blog',
    corePosts: [
      'semaglutide-tirzepatide-2025-shortages',
      'buy-semaglutide-online',
      'buy-tirzepatide-online',
      'online-semaglutide-prescription',
      'tirzepatide-online-prescription'
    ]
  },
  
  safetyAndMonitoring: {
    pillarPage: '/safety-monitoring',
    hubPage: '/safety-monitoring',
    corePosts: [
      'glp1-lab-monitoring',
      'semaglutide-thyroid-cancer-risk',
      'tirzepatide-pancreatitis-warning-signs',
      'glp1-gallbladder-issues-prevention',
      'managing-glp1-side-effects',
      'when-to-call-doctor-glp1',
      'semaglutide-drug-interactions',
      'tirzepatide-allergic-reactions',
      'glp1-dehydration-prevention',
      'safe-glp1-use-with-other-medications'
    ]
  },
  
  insuranceAndAccess: {
    pillarPage: '/insurance-access',
    hubPage: '/insurance-access',
    corePosts: [
      'insurance-coverage-semaglutide-weight-loss',
      'semaglutide-savings-programs',
      'prior-authorization-glp1-approval',
      'appealing-insurance-denials-glp1',
      'compounded-semaglutide-cost-safety',
      'cash-pay-semaglutide-lowest-cost',
      'international-pharmacy-glp1-options',
      'employer-coverage-glp1-advocacy'
    ]
  }
};

// Expanded map of article keywords to related articles
export const relatedContentMap: Record<string, RelatedArticle[]> = {
  'semaglutide-cost': [
    {
      title: "Compounded Semaglutide vs Brand Name: What's the Difference?",
      url: "/blog/compounded-semaglutide-vs-brand-name",
      excerpt: "Understanding the differences between compounded and brand-name semaglutide, including safety, efficacy, and cost considerations.",
      category: "Semaglutide"
    },
    {
      title: "Semaglutide Without Insurance: Your Complete Guide",
      url: "/blog/semaglutide-without-insurance",
      excerpt: "How to access affordable semaglutide without insurance coverage. Learn about cost-saving strategies and alternative options.",
      category: "Semaglutide"
    },
    {
      title: "Online Semaglutide Weight Loss Cost Guide",
      url: "/blog/semaglutide-weight-loss-online-cost",
      excerpt: "Complete breakdown of online semaglutide programs, pricing comparison, and what to expect from telemedicine weight loss services.",
      category: "Semaglutide"
    }
  ],
  'tirzepatide-cost': [
    {
      title: "Tirzepatide vs Semaglutide: Which is Right for You?",
      url: "/blog/tirzepatide-vs-semaglutide",
      excerpt: "Comprehensive comparison of the two leading GLP-1 medications for weight loss, including effectiveness, side effects, and cost.",
      category: "Tirzepatide"
    },
    {
      title: "Compounded Tirzepatide Cost: Save Up to 75%",
      url: "/blog/compounded-tirzepatide-cost",
      excerpt: "Learn how compounded tirzepatide can provide the same benefits as Mounjaro at a fraction of the cost.",
      category: "Tirzepatide"
    },
    {
      title: "Weight Loss Injection Costs Compared",
      url: "/blog/weight-loss-injection-costs",
      excerpt: "Complete price comparison of all major weight loss injections including semaglutide, tirzepatide, and other options.",
      category: "GLP-1"
    }
  ],
  'side-effects': [
    {
      title: "Semaglutide Side Effects: What to Expect",
      url: "/blog/semaglutide-side-effects",
      excerpt: "Comprehensive guide to semaglutide side effects, how to manage them, and when to contact your doctor.",
      category: "Semaglutide"
    },
    {
      title: "Tirzepatide Side Effects Guide",
      url: "/blog/tirzepatide-side-effects",
      excerpt: "Everything you need to know about tirzepatide side effects, from common to rare, and how to minimize them.",
      category: "Tirzepatide"
    },
    {
      title: "Semaglutide and Nausea: Management Tips",
      url: "/blog/semaglutide-side-effects",
      excerpt: "Practical strategies for managing nausea and other gastrointestinal side effects of GLP-1 medications.",
      category: "Semaglutide"
    }
  ],
  'dosage': [
    {
      title: "Semaglutide Dosage Guide: From Start to Maintenance",
      url: "/blog/semaglutide-dosage-guide",
      excerpt: "Complete dosing schedule for semaglutide including titration protocol and maintenance doses.",
      category: "Semaglutide"
    },
    {
      title: "Tirzepatide Dosage Guide",
      url: "/blog/tirzepatide-dosage-guide",
      excerpt: "Step-by-step guide to tirzepatide dosing, including when and how to increase your dose safely.",
      category: "Tirzepatide"
    },
    {
      title: "Semaglutide Injection Guide",
      url: "/blog/semaglutide-injection-guide",
      excerpt: "Learn the proper technique for self-injecting semaglutide, including site selection and storage tips.",
      category: "Semaglutide"
    }
  ],
  'how-it-works': [
    {
      title: "How Tirzepatide Works for Weight Loss",
      url: "/blog/how-tirzepatide-works",
      excerpt: "Understanding the dual GIP/GLP-1 mechanism of tirzepatide and why it's so effective for weight loss.",
      category: "Tirzepatide"
    },
    {
      title: "The Complete Guide to GLP-1 Medications",
      url: "/blog/glp1-complete-guide",
      excerpt: "Everything you need to know about GLP-1 receptor agonists, how they work, and their benefits beyond weight loss.",
      category: "GLP-1"
    },
    {
      title: "Semaglutide for Diabetes vs Weight Loss",
      url: "/blog/semaglutide-for-diabetes",
      excerpt: "How semaglutide works for both diabetes management and weight loss, with dosing differences explained.",
      category: "Semaglutide"
    }
  ],
  'getting-started': [
    {
      title: "Buy Semaglutide Online: Complete Guide",
      url: "/blog/buy-semaglutide-online",
      excerpt: "How to safely purchase semaglutide online through legitimate telemedicine providers. Step-by-step process explained.",
      category: "Semaglutide"
    },
    {
      title: "Online Semaglutide Prescription Process",
      url: "/blog/online-semaglutide-prescription",
      excerpt: "Get your semaglutide prescription online. Learn about eligibility, consultation process, and what to expect.",
      category: "Semaglutide"
    },
    {
      title: "Semaglutide Eligibility: Do You Qualify?",
      url: "/blog/semaglutide-eligibility",
      excerpt: "BMI requirements, medical conditions, and other factors that determine if you're eligible for semaglutide.",
      category: "Semaglutide"
    }
  ]
};

// Generate contextual internal links based on content keywords
export const generateContextualLinks = (content: string, currentSlug: string): RelatedArticle[] => {
  const links: RelatedArticle[] = [];
  const keywords = [
    { term: 'cost', category: 'semaglutide-cost' },
    { term: 'side effects', category: 'side-effects' },
    { term: 'dosage', category: 'dosage' },
    { term: 'how it works', category: 'how-it-works' },
    { term: 'getting started', category: 'getting-started' },
    { term: 'tirzepatide', category: 'tirzepatide-cost' }
  ];

  keywords.forEach(kw => {
    if (content.toLowerCase().includes(kw.term) && relatedContentMap[kw.category]) {
      const categoryLinks = relatedContentMap[kw.category].filter(
        article => !article.url.includes(currentSlug)
      );
      links.push(...categoryLinks.slice(0, 1));
    }
  });

  return links.slice(0, 3);
};

export const getRelatedContent = (currentSlug: string, category: string = 'general'): RelatedArticle[] => {
  // Try to find exact match first
  if (relatedContentMap[currentSlug]) {
    return relatedContentMap[currentSlug];
  }

  // Try to match by category keywords
  const categoryKey = Object.keys(relatedContentMap).find(key => 
    currentSlug.includes(key) || key.includes(category.toLowerCase())
  );

  if (categoryKey) {
    return relatedContentMap[categoryKey];
  }

  // Default fallback
  return relatedContentMap['getting-started'];
};

// Get cluster navigation for topic hubs
export const getClusterNavigation = (currentSlug: string): { 
  pillarPage?: string; 
  hubPage?: string; 
  relatedInCluster: RelatedArticle[] 
} => {
  for (const [topic, cluster] of Object.entries(topicClusters)) {
    if (cluster.corePosts.includes(currentSlug)) {
      const relatedInCluster = cluster.corePosts
        .filter(slug => slug !== currentSlug)
        .slice(0, 4)
        .map(slug => {
          const matchedArticle = Object.values(relatedContentMap)
            .flat()
            .find(article => article.url.includes(slug));
          return matchedArticle || {
            title: slug.replace(/-/g, ' '),
            url: `/blog/${slug}`,
            excerpt: '',
            category: topic
          };
        });

      return {
        pillarPage: cluster.pillarPage,
        hubPage: cluster.hubPage,
        relatedInCluster
      };
    }
  }

  return { relatedInCluster: [] };
};
