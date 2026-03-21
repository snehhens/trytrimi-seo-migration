// Article modification tracking for content freshness
// This tracks when articles were last meaningfully updated
// Updated: November 26, 2025 - Full content freshness audit
const contentUpdates: Record<string, string> = {
  // Cost & Affordability Articles - Updated Nov 2025
  'buy-semaglutide-online': '2025-11-26',
  'semaglutide-cost': '2025-11-26',
  'semaglutide-cost-breakdown': '2025-11-26',
  'semaglutide-cost-savings': '2025-11-26',
  'semaglutide-compounding-pharmacy': '2025-11-26',
  'semaglutide-without-insurance': '2025-11-26',
  'weight-loss-injection-costs': '2025-11-26',
  'compounded-semaglutide-vs-brand-name': '2025-11-26',
  'compounded-tirzepatide-cost': '2025-11-26',
  'tirzepatide-cost-comparison': '2025-11-26',
  'buy-tirzepatide-online': '2025-11-26',
  'buy-tirzepatide-legally-online': '2025-11-26',
  'cheapest-tirzepatide-online': '2025-11-26',
  'cash-pay-semaglutide-lowest-cost': '2025-11-26',
  'affordable-glp1-injections-2025': '2025-11-26',
  'insurance-coverage-semaglutide-weight-loss': '2025-11-26',
  'appealing-insurance-denials-glp1': '2025-11-26',
  'employer-coverage-glp1-advocacy': '2025-11-26',
  'international-pharmacy-glp1-options': '2025-11-26',
  'prior-authorization-glp1-approval': '2025-11-26',
  'semaglutide-savings-programs': '2025-11-26',
  
  // Treatment Comparisons - Updated Nov 2025
  'tirzepatide-vs-semaglutide': '2025-11-26',
  'semaglutide-vs-tirzepatide-key-differences': '2025-11-26',
  'tirzepatide-vs-semaglutide-2025-updates': '2025-11-26',
  'semaglutide-vs-ozempic-vs-wegovy': '2025-11-26',
  'semaglutide-vs-phentermine': '2025-11-26',
  'glp1-agonists-compared': '2025-11-26',
  'compounded-semaglutide-safety': '2025-11-26',
  'compounded-semaglutide-risks-2025': '2025-11-26',
  'compounded-tirzepatide-safety-2025': '2025-11-26',
  'switching-semaglutide-to-tirzepatide': '2025-11-26',
  
  // Dosage & Administration - Updated Nov 2025
  'semaglutide-dosage-guide': '2025-11-26',
  'tirzepatide-dosage-guide': '2025-11-26',
  'semaglutide-dosing-chart': '2025-11-26',
  'tirzepatide-dosing-chart': '2025-11-26',
  'semaglutide-injection-guide': '2025-11-26',
  'higher-dose-semaglutide-options': '2025-11-26',
  'tirzepatide-maintenance-dose': '2025-11-26',
  
  // Getting Started - Updated Nov 2025
  'glp1-complete-guide': '2025-11-26',
  'understanding-glp1-medications': '2025-11-26',
  'how-to-start-semaglutide': '2025-11-26',
  'kickstarting-semaglutide-basics': '2025-11-26',
  'first-month-semaglutide-or-tirzepatide': '2025-11-26',
  'semaglutide-first-month': '2025-11-26',
  'tirzepatide-first-month': '2025-11-26',
  'tirzepatide-quick-start': '2025-11-26',
  'things-to-know-before-starting-tirzepatide': '2025-11-26',
  'semaglutide-weight-loss-online-guide': '2025-11-26',
  'online-semaglutide-prescription': '2025-11-26',
  'tirzepatide-online-prescription': '2025-11-26',
  'buying-semaglutide-online-safely': '2025-11-26',
  'online-semaglutide-weight-loss-programs': '2025-11-26',
  'semaglutide-eligibility': '2025-11-26',
  'tirzepatide-travel-tips': '2025-11-26',
  
  // Side Effects Management - Updated Nov 2025
  'semaglutide-side-effects': '2025-11-26',
  'tirzepatide-side-effects': '2025-11-26',
  'tirzepatide-side-effects-2025-data': '2025-11-26',
  'managing-glp1-side-effects': '2025-11-26',
  'managing-gi-side-effects-semaglutide': '2025-11-26',
  'managing-food-interactions-tirzepatide': '2025-11-26',
  'safe-glp1-use-with-other-medications': '2025-11-26',
  'semaglutide-drug-interactions': '2025-11-26',
  'tirzepatide-medication-interactions': '2025-11-26',
  'glp1-dehydration-prevention': '2025-11-26',
  'glp1-gallbladder-issues-prevention': '2025-11-26',
  'tirzepatide-water-retention': '2025-11-26',
  'semaglutide-injection-site-reactions': '2025-11-26',
  'tirzepatide-allergic-reactions': '2025-11-26',
  'when-to-call-doctor-glp1': '2025-11-26',
  'tirzepatide-pancreatitis-warning-signs': '2025-11-26',
  'glp1-lab-monitoring': '2025-11-26',
  
  // Results & Effectiveness - Updated Nov 2025
  'semaglutide-weight-loss-results': '2025-11-26',
  'tirzepatide-weight-loss-results': '2025-11-26',
  'semaglutide-clinical-results': '2025-11-26',
  'semaglutide-results-timeline': '2025-11-26',
  'semaglutide-plateau': '2025-11-26',
  'tirzepatide-before-after': '2025-11-26',
  'semaglutide-success-stories': '2025-11-26',
  'semaglutide-real-world-results': '2025-11-26',
  'semaglutide-real-world-2025': '2025-11-26',
  'tirzepatide-real-world-2025': '2025-11-26',
  'tirzepatide-prescribing-2025': '2025-11-26',
  'semaglutide-weight-loss-online-reviews': '2025-11-26',
  
  // Health Conditions - Updated Nov 2025
  'semaglutide-for-diabetes': '2025-11-26',
  'semaglutide-weight-loss-without-diabetes': '2025-11-26',
  'tirzepatide-for-prediabetes': '2025-11-26',
  'tirzepatide-pcos': '2025-11-26',
  'tirzepatide-pcos-insulin-resistance': '2025-11-26',
  'tirzepatide-cvd-risk-reduction': '2025-11-26',
  'semaglutide-cardiovascular-2025': '2025-11-26',
  'tirzepatide-heart-health': '2025-11-26',
  'semaglutide-blood-pressure': '2025-11-26',
  'tirzepatide-cholesterol': '2025-11-26',
  'semaglutide-thyroid': '2025-11-26',
  'semaglutide-thyroid-cancer-risk': '2025-11-26',
  'tirzepatide-fatty-liver': '2025-11-26',
  'semaglutide-kidney-function': '2025-11-26',
  'tirzepatide-kidney-health': '2025-11-26',
  'semaglutide-pregnancy': '2025-11-26',
  'tirzepatide-fertility': '2025-11-26',
  'tirzepatide-menopause': '2025-11-26',
  'semaglutide-older-adults-guidance': '2025-11-26',
  'tirzepatide-older-adults': '2025-11-26',
  'tirzepatide-sleep-apnea-2025': '2025-11-26',
  'tirzepatide-preexisting-conditions-cancer': '2025-11-26',
  
  // Lifestyle Integration - Updated Nov 2025
  'semaglutide-diet-plan': '2025-11-26',
  'semaglutide-diet-plan-meals': '2025-11-26',
  'tirzepatide-diet-guide': '2025-11-26',
  'best-foods-tirzepatide': '2025-11-26',
  'semaglutide-food-aversions': '2025-11-26',
  'semaglutide-exercise': '2025-11-26',
  'tirzepatide-exercise': '2025-11-26',
  'tirzepatide-exercise-timing': '2025-11-26',
  'semaglutide-muscle-preservation': '2025-11-26',
  'semaglutide-alcohol': '2025-11-26',
  'semaglutide-intermittent-fasting': '2025-11-26',
  'tirzepatide-athletic-performance': '2025-11-26',
  'tirzepatide-nutrition-absorption': '2025-11-26',
  'semaglutide-vitamin-deficiencies': '2025-11-26',
  
  // Long-Term Outcomes - Updated Nov 2025
  'maintaining-weight-loss-after-glp1': '2025-11-26',
  'long-term-health-effects-semaglutide': '2025-11-26',
  'long-term-metabolic-benefits-glp1': '2025-11-26',
  'managing-expectations-long-term-glp1': '2025-11-26',
  'sustainability-strategies-glp1-therapy': '2025-11-26',
  'lifestyle-changes-post-glp1-success': '2025-11-26',
  'tirzepatide-long-term-use': '2025-11-26',
  'semaglutide-stopping': '2025-11-26',
  'semaglutide-longevity': '2025-11-26',
  
  // Body Composition & Health Effects - Updated Nov 2025
  'semaglutide-bone-health': '2025-11-26',
  'semaglutide-hair-loss': '2025-11-26',
  'semaglutide-skin': '2025-11-26',
  'semaglutide-mental-health': '2025-11-26',
  'semaglutide-energy-levels': '2025-11-26',
  'semaglutide-stress-cortisol': '2025-11-26',
  'tirzepatide-brain-health': '2025-11-26',
  'tirzepatide-appetite-control': '2025-11-26',
  'tirzepatide-hormones': '2025-11-26',
  'tirzepatide-inflammation': '2025-11-26',
  'tirzepatide-sleep': '2025-11-26',
  'tirzepatide-joint-pain': '2025-11-26',
  'semaglutide-gut-health': '2025-11-26',
  'tirzepatide-gastric-emptying': '2025-11-26',
  
  // Supply & Access - Updated Nov 2025
  'semaglutide-tirzepatide-2025-shortages': '2025-11-26',
  'semaglutide-generics-2025': '2025-11-26',
  'tirzepatide-generics-2025': '2025-11-26',
  'compounded-semaglutide-cost-safety': '2025-11-26',
  'tirzepatide-safety': '2025-11-26',
  'semaglutide-weight-loss-online-cost': '2025-11-26',
  'semaglutide-weight-loss-online-safety': '2025-11-26',
  
  // Mechanisms & Science - Updated Nov 2025
  'tirzepatide-mechanism-guide': '2025-11-26',
  'how-tirzepatide-works': '2025-11-26',
  'tirzepatide-benefits-beyond-weight-loss': '2025-11-26',
  
  // Add more as articles are updated
};

// Get last modified date for blog posts
export const getModifiedDate = (slug: string, publishDate: string): string => {
  // Return updated date if available, otherwise use publish date
  return contentUpdates[slug] || publishDate;
};

export const formatDateForSchema = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString();
};
