import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const blogPosts = [
  { title: "Tirzepatide for Older Adults: Safety and Benefits", slug: "tirzepatide-older-adults", description: "Comprehensive guide to tirzepatide use in older adults, including safety considerations and expected benefits", date: "2025-08-05" },
  { title: "Semaglutide and Stress: Impact on Cortisol Levels", slug: "semaglutide-stress-cortisol", description: "How semaglutide affects stress hormones and cortisol regulation for improved metabolic health", date: "2025-07-31" },
  { title: "Tirzepatide Exercise Timing: Optimize Your Workouts", slug: "tirzepatide-exercise-timing", description: "Best practices for timing exercise with tirzepatide injections for maximum results", date: "2025-07-27" },
  { title: "Semaglutide Cost Savings: Complete Money-Saving Guide", slug: "semaglutide-cost-savings", description: "Proven strategies to reduce semaglutide costs through insurance, programs, and alternatives", date: "2025-07-22" },
  { title: "Tirzepatide Appetite Control: How It Works", slug: "tirzepatide-appetite-control", description: "Understanding tirzepatide's powerful appetite suppression mechanism and effects", date: "2025-07-18" },
  { title: "Semaglutide Injection Site Reactions: Prevention & Treatment", slug: "semaglutide-injection-site-reactions", description: "Managing and preventing common injection site reactions with semaglutide", date: "2025-07-15" },
  { title: "Tirzepatide and Fatty Liver: Improving Liver Health", slug: "tirzepatide-fatty-liver", description: "How tirzepatide helps reverse fatty liver disease and improve metabolic health", date: "2025-07-09" },
  { title: "Semaglutide Food Aversions: What to Expect", slug: "semaglutide-food-aversions", description: "Understanding and managing food aversions on semaglutide treatment", date: "2025-07-03" },
  { title: "Tirzepatide Brain Health: Cognitive Benefits", slug: "tirzepatide-brain-health", description: "Exploring tirzepatide's neuroprotective effects and cognitive benefits", date: "2025-06-28" },
  { title: "Semaglutide Energy Levels: What to Expect", slug: "semaglutide-energy-levels", description: "How semaglutide affects energy, fatigue, and overall vitality during treatment", date: "2025-06-24" },
  { title: "Tirzepatide Water Retention: Causes and Solutions", slug: "tirzepatide-water-retention", description: "Managing fluid retention and bloating during tirzepatide treatment", date: "2025-06-19" },
  { title: "Semaglutide Vitamin Deficiencies: Prevention Guide", slug: "semaglutide-vitamin-deficiencies", description: "Essential vitamins to supplement while on semaglutide for optimal health", date: "2025-06-13" },
  { title: "Tirzepatide and Hormones: Comprehensive Effects", slug: "tirzepatide-hormones", description: "How tirzepatide influences hormones beyond GLP-1 and GIP pathways", date: "2025-06-08" },
  { title: "Semaglutide Bone Health: What You Need to Know", slug: "semaglutide-bone-health", description: "Impact of semaglutide on bone density and skeletal health", date: "2025-06-05" },
  { title: "Tirzepatide Travel Tips: Staying on Track", slug: "tirzepatide-travel-tips", description: "Essential guide for traveling with tirzepatide medication safely", date: "2025-05-30" },
  { title: "Semaglutide Gut Health: Microbiome Effects", slug: "semaglutide-gut-health", description: "How semaglutide affects gut bacteria and digestive health", date: "2025-05-25" },
  { title: "Tirzepatide and Inflammation: Anti-inflammatory Effects", slug: "tirzepatide-inflammation", description: "Understanding tirzepatide's role in reducing systemic inflammation", date: "2025-05-21" },
  { title: "Semaglutide Longevity: Long-term Health Benefits", slug: "semaglutide-longevity", description: "Exploring semaglutide's potential impact on lifespan and healthspan", date: "2025-05-15" },
  { title: "Tirzepatide and Menopause: Managing Symptoms", slug: "tirzepatide-menopause", description: "How tirzepatide helps with menopausal weight gain and symptoms", date: "2025-05-09" },
  { title: "Semaglutide Intermittent Fasting: Complete Guide", slug: "semaglutide-intermittent-fasting", description: "Combining semaglutide with intermittent fasting for enhanced results", date: "2025-05-04" },
  { title: "GLP-1 Complete Guide: Everything You Need to Know", slug: "glp1-complete-guide", description: "Comprehensive guide to GLP-1 medications for weight loss and diabetes", date: "2024-11-09" },
  { title: "Tirzepatide and Heart Health: Cardiovascular Benefits", slug: "tirzepatide-heart-health", description: "How tirzepatide improves heart health and reduces cardiovascular risk", date: "2025-02-19" },
  { title: "How Tirzepatide Works: Mechanism of Action Explained", slug: "how-tirzepatide-works", description: "Scientific explanation of tirzepatide's dual GIP/GLP-1 receptor mechanism", date: "2024-11-15" },
  { title: "Buy Semaglutide Online: Safe & Legal Guide 2025", slug: "buy-semaglutide-online", description: "Complete guide to safely purchasing semaglutide online from legitimate sources", date: "2024-05-24" },
  { title: "Semaglutide Cost: Complete Pricing Guide 2025", slug: "semaglutide-cost", description: "Comprehensive breakdown of semaglutide costs, insurance coverage, and savings options", date: "2024-06-11" },
  { title: "Semaglutide Side Effects: What to Expect & How to Manage", slug: "semaglutide-side-effects", description: "Complete guide to semaglutide side effects, from common to rare, with management tips", date: "2024-06-05" },
  { title: "Semaglutide Weight Loss Results: Clinical Data & Real Reviews", slug: "semaglutide-weight-loss-results", description: "Evidence-based analysis of semaglutide weight loss outcomes and patient experiences", date: "2024-05-30" },
  { title: "Tirzepatide vs Semaglutide: Which Is Right for You?", slug: "tirzepatide-vs-semaglutide", description: "Detailed comparison of tirzepatide and semaglutide for weight loss", date: "2024-10-22" },
  { title: "Semaglutide Dosage Guide: From Start to Maintenance", slug: "semaglutide-dosage-guide", description: "Complete semaglutide dosing schedule and titration guidance", date: "2025-02-04" },
  { title: "Tirzepatide Dosage Guide: Complete Dosing Schedule", slug: "tirzepatide-dosage-guide", description: "Comprehensive tirzepatide dosing from 1.5mg to 13.5mg with administration tips", date: "2024-12-30" },
  { title: "Tirzepatide Side Effects: Complete Management Guide", slug: "tirzepatide-side-effects", description: "Understanding and managing tirzepatide side effects for successful treatment", date: "2025-01-22" },
  { title: "Compounded Tirzepatide Cost: Affordable Options 2025", slug: "compounded-tirzepatide-cost", description: "Complete guide to compounded tirzepatide pricing and cost comparisons", date: "2024-12-08" },
  { title: "Online Semaglutide Prescription: How to Get Started", slug: "online-semaglutide-prescription", description: "Step-by-step guide to obtaining semaglutide prescriptions through telehealth", date: "2024-07-05" },
  { title: "Semaglutide First Month: What to Expect", slug: "semaglutide-first-month", description: "Complete guide to your first 30 days on semaglutide treatment", date: "2024-08-04" },
  { title: "Tirzepatide First Month: Week by Week Guide", slug: "tirzepatide-first-month", description: "What to expect during your first month on tirzepatide", date: "2025-02-25" },
  { title: "How to Start Semaglutide: Complete Beginner's Guide", slug: "how-to-start-semaglutide", description: "Everything you need to know before starting semaglutide treatment", date: "2024-07-15" },
  { title: "Semaglutide Diet Plan: Optimal Nutrition Guide", slug: "semaglutide-diet-plan", description: "Best foods and meal planning strategies while on semaglutide", date: "2024-07-29" },
  { title: "Tirzepatide Diet Guide: Eating for Success", slug: "tirzepatide-diet-guide", description: "Comprehensive nutrition guide for maximizing tirzepatide results", date: "2024-12-24" },
  { title: "Semaglutide Injection Guide: Step-by-Step Instructions", slug: "semaglutide-injection-guide", description: "Proper injection technique and best practices for semaglutide", date: "2024-09-03" },
  { title: "Compounded Semaglutide Safety: What You Should Know", slug: "compounded-semaglutide-safety", description: "Safety considerations and quality standards for compounded semaglutide", date: "2024-06-23" },
  { title: "Semaglutide Eligibility: Do You Qualify?", slug: "semaglutide-eligibility", description: "Requirements and criteria for semaglutide weight loss treatment", date: "2024-08-10" },
  { title: "Tirzepatide Safety: Clinical Evidence and Real-World Data", slug: "tirzepatide-safety", description: "Comprehensive safety profile and risk assessment for tirzepatide", date: "2025-01-16" },
  { title: "Cheapest Tirzepatide Online: Finding Affordable Options", slug: "cheapest-tirzepatide-online", description: "How to find the most affordable tirzepatide sources online", date: "2024-12-02" },
  { title: "Semaglutide Clinical Results: Evidence-Based Outcomes", slug: "semaglutide-clinical-results", description: "Analysis of major clinical trials and semaglutide efficacy data", date: "2024-07-23" },
  { title: "Tirzepatide Weight Loss Results: What to Expect", slug: "tirzepatide-weight-loss-results", description: "Clinical trial data and real-world tirzepatide weight loss outcomes", date: "2025-01-11" }
];

serve(async (req) => {
  const items = blogPosts.map(post => `
    <item>
      <title>${post.title}</title>
      <link>https://trytrimi.com/blog/${post.slug}</link>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>https://trytrimi.com/blog/${post.slug}</guid>
    </item>
  `).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Trimi - GLP-1 Weight Loss Blog</title>
    <link>https://trytrimi.com/blog</link>
    <description>Expert insights on semaglutide, tirzepatide, and GLP-1 weight loss medications from board-certified physicians</description>
    <language>en-us</language>
    <atom:link href="https://trytrimi.com/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>team@trytrimi.com (Trimi Medical Team)</managingEditor>
    <webMaster>team@trytrimi.com (Trimi Web Team)</webMaster>
    <category>Health</category>
    <category>Weight Loss</category>
    <category>GLP-1 Medications</category>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    },
  });
});
