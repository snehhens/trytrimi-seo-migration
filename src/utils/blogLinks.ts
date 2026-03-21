// Internal linking suggestions for blog posts
export const blogCategories = {
  semaglutide: 'Semaglutide',
  tirzepatide: 'Tirzepatide',
  glp1: 'GLP-1',
  general: 'General'
};

export const relatedPostsMap: Record<string, string[]> = {
  'glp1-complete-guide': [
    'semaglutide-vs-ozempic-vs-wegovy',
    'tirzepatide-vs-semaglutide',
    'how-tirzepatide-works'
  ],
  'semaglutide-weight-loss-online-guide': [
    'buy-semaglutide-online',
    'online-semaglutide-prescription',
    'semaglutide-cost'
  ],
  'tirzepatide-heart-health': [
    'tirzepatide-cholesterol',
    'semaglutide-blood-pressure',
    'tirzepatide-safety'
  ],
  'semaglutide-side-effects': [
    'semaglutide-first-month',
    'semaglutide-injection-site-reactions',
    'semaglutide-gut-health'
  ],
  'tirzepatide-dosage-guide': [
    'tirzepatide-first-month',
    'tirzepatide-maintenance-dose',
    'how-tirzepatide-works'
  ],
  'tirzepatide-vs-semaglutide-pcos-weight-loss': [
    'tirzepatide-vs-semaglutide',
    'semaglutide-dosage-guide',
    'tirzepatide-cost-comparison'
  ],
  'cheap-affordable-glp1-tirzepatide-alternatives': [
    'semaglutide-cost',
    'tirzepatide-cost-comparison',
    'buy-semaglutide-online'
  ],
  'glp1-injections-near-me-clinic-guide': [
    'glp1-complete-guide',
    'buy-semaglutide-online',
    'online-semaglutide-prescription'
  ],
  'best-glp1-weight-loss-without-side-effects': [
    'semaglutide-side-effects',
    'tirzepatide-side-effects',
    'semaglutide-first-month'
  ],
  'managing-muscle-loss-semaglutide-exercise-nutrition': [
    'semaglutide-weight-loss-online-guide',
    'glp1-complete-guide',
    'semaglutide-gut-health'
  ]
};

export const popularPosts = [
  { title: 'Complete GLP-1 Guide', slug: 'glp1-complete-guide', category: 'GLP-1' },
  { title: 'Semaglutide vs Tirzepatide', slug: 'tirzepatide-vs-semaglutide', category: 'Comparison' },
  { title: 'How to Buy Semaglutide Online', slug: 'buy-semaglutide-online', category: 'Semaglutide' },
  { title: 'Tirzepatide Side Effects', slug: 'tirzepatide-side-effects', category: 'Tirzepatide' },
  { title: 'Semaglutide Dosage Guide', slug: 'semaglutide-dosage-guide', category: 'Semaglutide' },
  { title: 'GLP-1 for PCOS Weight Loss', slug: 'tirzepatide-vs-semaglutide-pcos-weight-loss', category: 'Health' },
  { title: 'Affordable GLP-1 Options', slug: 'cheap-affordable-glp1-tirzepatide-alternatives', category: 'Cost' },
  { title: 'Finding GLP-1 Clinics', slug: 'glp1-injections-near-me-clinic-guide', category: 'Getting Started' },
  { title: 'Managing Muscle Loss', slug: 'managing-muscle-loss-semaglutide-exercise-nutrition', category: 'Lifestyle' }
];

export const getPeopleAlsoRead = (currentSlug: string) => {
  return popularPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 5)
    .map(post => ({
      ...post,
      path: `/blog/${post.slug}`
    }));
};
