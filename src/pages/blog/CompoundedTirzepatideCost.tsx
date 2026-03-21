import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, TrendingDown } from "lucide-react";
import { Link } from "@/compat/react-router-dom";
import { Helmet } from "@/compat/react-helmet-async";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/compounded-tirzepatide-cost.jpg";
import { MedicalWebPageSchema } from "@/components/seo/MedicalWebPageSchema";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { BlogFAQSchema } from "@/components/blog/BlogFAQSchema";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";

const CompoundedTirzepatideCost = () => {
  const meta = getBlogPostMeta("compounded-tirzepatide-cost");
  const publishDate = meta?.date || "2025-01-06";
  const modifiedDate = getModifiedDate('compounded-tirzepatide-cost', publishDate);
  
  const qaData = [
    {
      question: "How much does compounded tirzepatide cost per month?",
      answer: "Compounded tirzepatide costs $265-$345/month through online providers, with quarterly plans at $320/month ($960 total) and annual plans saving $960/year ($3,180 total). This includes medication, consultation, supplies, and shipping. Compare to brand-name Mounjaro/Zepbound at $1,100-$1,400/month."
    },
    {
      question: "Is compounded tirzepatide cheaper than Mounjaro?",
      answer: "Yes, significantly. Compounded tirzepatide costs $265-$345/month versus Mounjaro's $1,100-$1,400/month - a savings of 70-80%. Annual savings reach $10,000-$13,600. The active ingredient is identical, but compounded versions are prepared by specialized pharmacies at lower cost."
    },
    {
      question: "What's included in compounded tirzepatide pricing?",
      answer: "Monthly cost typically includes: full medication supply at prescribed dose, all injection supplies (syringes, alcohol swabs, sharps container), free direct-to-door shipping, initial provider consultation, ongoing provider support and messaging, dosage adjustments, and 24/7 patient portal access. Same price regardless of dose level."
    },
    {
      question: "Are there payment plans for compounded tirzepatide?",
      answer: "Yes, most providers offer: monthly subscriptions ($345/month, cancel anytime), quarterly plans ($960 upfront, save $75), and 6-12 month plans (save up to $960 annually). Some accept HSA/FSA cards or offer medical credit options like CareCredit for 0% APR promotional periods."
    },
    {
      question: "How does 503A vs 503B pharmacy affect tirzepatide cost?",
      answer: "503A pharmacies typically charge $250-$350/month with less FDA oversight. 503B facilities charge $350-$450/month but have mandatory FDA inspections, stricter quality standards, and better safety monitoring. The price difference reflects increased regulatory compliance and quality assurance."
    },
    {
      question: "Is compounded tirzepatide worth the cost?",
      answer: "Clinical data shows 20-22% average body weight loss with tirzepatide. At $295-$345/month, that's approximately $20-$25 per pound lost for most users. Long-term health savings from reduced diabetes, blood pressure, and cholesterol medications often offset medication costs within 2-3 years."
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <QAPageSchema 
        questions={qaData}
        mainEntityName="Compounded Tirzepatide Cost"
      />
      <BlogFAQSchema faqs={qaData} />
      <Helmet>
        <title>How Much Does Compounded Tirzepatide Cost? 2025 Pricing Guide | Trimi</title>
        <meta name="description" content="Complete 2025 pricing guide for compounded tirzepatide. Compare monthly costs, annual pricing, and find out how to save up to $1,000/month vs Mounjaro or Zepbound." />
        <meta name="keywords" content="compounded tirzepatide cost, tirzepatide price, mounjaro cost, zepbound price, cheap tirzepatide, tirzepatide pricing 2025" />
        <link rel="canonical" href="https://trytrimi.com/blog/compounded-tirzepatide-cost" />
        <meta property="og:title" content="How Much Does Compounded Tirzepatide Cost? Updated 2025 Pricing" />
        <meta property="og:description" content="Save up to $1,000/month with compounded tirzepatide. Complete pricing breakdown and cost comparison guide." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/compounded-tirzepatide-cost" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Much Does Compounded Tirzepatide Cost? 2025 Pricing Guide",
            "description": "Complete 2025 pricing guide for compounded tirzepatide with cost comparisons and savings strategies.",
            "author": {
              "@type": "Organization",
              "name": "Trimi Health"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Trimi Health"
            },
            "datePublished": meta?.date || "2025-01-06",
            "dateModified": meta?.date || "2025-01-06"
          })}
        </script>
      </Helmet>
      <Navigation />
      
      <main>
        <article className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
              <nav className="mb-8 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
                <span className="mx-2 text-muted-foreground">/</span>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-foreground">Compounded Tirzepatide Cost</span>
              </nav>

              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  How Much Does Compounded Tirzepatide Cost? 2025 Pricing Guide
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <time>{meta?.date ? new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'January 2025'}</time>
                  <span>•</span>
                  <span>{meta?.readTime || '10 min'} read</span>
                </div>
                <div className="mb-4">
                  <ContentFreshnessIndicator 
                    lastModified={modifiedDate}
                    publishDate={publishDate}
                    showBadge={true}
                  />
                </div>
              </header>

              {/* Quick Price Overview */}
              <Card className="p-8 mb-12 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-secondary" />
                  2025 Compounded Tirzepatide Pricing
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Monthly</p>
                    <p className="text-3xl font-bold text-secondary mb-1">$265-$345</p>
                    <p className="text-xs text-muted-foreground">Billed monthly</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border-2 border-secondary">
                    <p className="text-sm text-muted-foreground mb-2">Quarterly</p>
                    <p className="text-3xl font-bold text-secondary mb-1">$960</p>
                    <p className="text-xs text-green-600 font-semibold">Save $75</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Annual</p>
                    <p className="text-3xl font-bold text-secondary mb-1">$3,180</p>
                    <p className="text-xs text-green-600 font-semibold">Save $960/year</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-center font-semibold text-green-700">
                    💰 Save up to $12,000/year compared to brand-name Mounjaro or Zepbound
                  </p>
                </div>
              </Card>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Tirzepatide Costs in 2025</h2>
                <p className="text-muted-foreground mb-4">
                  Tirzepatide (sold as Mounjaro® for diabetes and Zepbound® for weight loss) has become one of the most effective weight loss medications available. However, the brand-name versions cost $1,100-$1,400 per month without insurance, putting them out of reach for most Americans.
                </p>
                <p className="text-muted-foreground mb-4">
                  Enter compounded tirzepatide: a legal, safe alternative that delivers the same active ingredient at 70-80% lower cost. But how much does it really cost, and what factors affect the price? Let's break down everything you need to know.
                </p>
              </div>

              {/* Price Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Brand Name vs Compounded: Complete Cost Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mb-6">
                    <thead>
                      <tr className="bg-secondary/10">
                        <th className="border border-border p-4 text-left font-bold">Option</th>
                        <th className="border border-border p-4 text-left font-bold">Monthly Cost</th>
                        <th className="border border-border p-4 text-left font-bold">Annual Cost</th>
                        <th className="border border-border p-4 text-left font-bold">Total Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-4 font-semibold">Mounjaro (Brand)</td>
                        <td className="border border-border p-4">$1,100 - $1,400</td>
                        <td className="border border-border p-4">$13,200 - $16,800</td>
                        <td className="border border-border p-4">-</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 font-semibold">Zepbound (Brand)</td>
                        <td className="border border-border p-4">$1,100 - $1,400</td>
                        <td className="border border-border p-4">$13,200 - $16,800</td>
                        <td className="border border-border p-4">-</td>
                      </tr>
                      <tr className="bg-secondary/5">
                        <td className="border border-border p-4 font-bold text-secondary">Compounded Tirzepatide</td>
                        <td className="border border-border p-4 font-bold text-secondary">$265 - $345</td>
                        <td className="border border-border p-4 font-bold text-secondary">$3,180 - $4,140</td>
                        <td className="border border-border p-4 font-bold text-green-600">$10,000 - $13,600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* What's Included */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What's Included in the Price?</h2>
                <Card className="p-6 mb-6">
                  <p className="text-muted-foreground mb-4">
                    Unlike brand-name options that often have hidden costs, reputable compounded tirzepatide providers typically include:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Monthly Medication Supply:</strong> Full month's worth of tirzepatide at your prescribed dose
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Injection Supplies:</strong> Syringes, alcohol swabs, and sharps container
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Free Shipping:</strong> Direct to your door with discreet packaging
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Provider Consultations:</strong> Initial consultation and ongoing support
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>24/7 Patient Portal:</strong> Access to your health information anytime
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Flexible Dosing:</strong> Same price regardless of dose level
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Pricing Tiers */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Trimi Health Pricing Tiers</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Monthly Plan</h3>
                    <p className="text-4xl font-bold text-secondary mb-2">$345</p>
                    <p className="text-sm text-muted-foreground mb-4">per month</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">No commitment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Cancel anytime</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Flexible dosing</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Choose Monthly</Button>
                  </Card>

                  <Card className="p-6 border-2 border-secondary relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">6-Month Plan</h3>
                    <p className="text-4xl font-bold text-secondary mb-2">$1,770</p>
                    <p className="text-sm text-muted-foreground mb-1">$295/month</p>
                    <p className="text-xs text-green-600 font-semibold mb-4">Save $300 vs monthly</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Best value</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Consistent supply</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Priority support</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-secondary hover:bg-secondary/90">Choose 6-Month</Button>
                  </Card>
                </div>
              </section>

              {/* Factors Affecting Cost */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Factors That Affect Compounded Tirzepatide Cost</h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-secondary" />
                      1. Pharmacy Type (503A vs 503B)
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      503B facilities (outsourcing facilities) often have slightly higher costs due to increased FDA oversight, but this can mean better quality control.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Typical range:</strong> 503A: $250-$350 | 503B: $350-$450
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-secondary" />
                      2. Included Services
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Providers offering comprehensive care (consultations, support, supplies) may charge more but provide better value.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-secondary" />
                      3. Supply Chain & Raw Materials
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Prices fluctuate based on availability of pharmaceutical-grade tirzepatide from FDA-registered suppliers.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-secondary" />
                      4. Subscription Length
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Longer commitments (3, 6, or 12 months) typically offer 15-25% savings vs month-to-month.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Is It Worth It */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Is Compounded Tirzepatide Worth the Cost?</h2>
                <Card className="p-6 mb-6 bg-secondary/5">
                  <h3 className="text-xl font-bold text-foreground mb-4">Expected Results & ROI</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Average Weight Loss</p>
                      <p className="text-3xl font-bold text-secondary mb-1">20-25%</p>
                      <p className="text-xs text-muted-foreground">of body weight in 12 months</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Monthly Cost Per Pound Lost</p>
                      <p className="text-3xl font-bold text-secondary mb-1">~$8-12</p>
                      <p className="text-xs text-muted-foreground">based on avg 25-30 lbs lost</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    When you consider the health benefits (reduced diabetes risk, improved cardiovascular health, better quality of life), many patients find compounded tirzepatide to be an excellent investment in their long-term health.
                  </p>
                </Card>
              </section>

              {/* Hidden Costs to Avoid */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Hidden Costs to Watch Out For</h2>
                <Card className="p-6 border-orange-200 bg-orange-50">
                  <p className="text-muted-foreground mb-4">
                    When comparing prices, beware of providers that advertise low costs but add hidden fees:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Consultation fees:</strong> Some charge $99-$299 per consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Shipping costs:</strong> $15-$30 per shipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Membership fees:</strong> Monthly platform fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Supplies not included:</strong> Syringes sold separately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Price increases by dose:</strong> Higher doses cost more</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded border border-orange-200">
                    <p className="text-sm font-semibold">💡 Trimi includes everything - no hidden fees, same price at any dose</p>
                  </div>
                </Card>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Pricing FAQs</h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">Does insurance cover compounded tirzepatide?</h3>
                    <p className="text-muted-foreground">
                      Generally no. Insurance typically only covers FDA-approved brand medications. However, the cash price for compounded is often lower than brand-name copays.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">Can I use my HSA/FSA?</h3>
                    <p className="text-muted-foreground">
                      Yes! Compounded tirzepatide prescribed by a licensed provider is typically HSA/FSA eligible.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">Do prices go up when my dose increases?</h3>
                    <p className="text-muted-foreground">
                      Not with Trimi. We charge the same price regardless of dose, from 2.5mg to 15mg.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">Are there cheaper options online?</h3>
                    <p className="text-muted-foreground">
                      Beware of prices below $200/month - these are often from unverified sources or "research chemical" suppliers that are illegal and dangerous. Legitimate compounded tirzepatide from licensed pharmacies ranges $250-$450.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Related Articles */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link to="/blog/compounded-semaglutide-vs-brand-name">
                    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg font-bold text-foreground mb-2">Compounded Semaglutide vs Brand Name</h3>
                      <p className="text-muted-foreground text-sm">Compare costs and savings between options</p>
                    </Card>
                  </Link>
                  <Link to="/blog/tirzepatide-vs-semaglutide">
                    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg font-bold text-foreground mb-2">Tirzepatide vs Semaglutide</h3>
                      <p className="text-muted-foreground text-sm">Which medication is right for your goals?</p>
                    </Card>
                  </Link>
                  <Link to="/blog/how-tirzepatide-works">
                    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg font-bold text-foreground mb-2">How Tirzepatide Works</h3>
                      <p className="text-muted-foreground text-sm">Science behind the dual-action mechanism</p>
                    </Card>
                  </Link>
                  <Link to="/blog/weight-loss-injection-costs">
                    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg font-bold text-foreground mb-2">Weight Loss Injection Cost Guide</h3>
                      <p className="text-muted-foreground text-sm">Compare all GLP-1 medication pricing</p>
                    </Card>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground text-center">
                <h2 className="text-3xl font-bold mb-4">Get Started with Compounded Tirzepatide</h2>
                <p className="text-xl mb-2 text-primary-foreground/90">
                  As low as $345/month with all-inclusive pricing
                </p>
                <p className="text-sm mb-6 text-primary-foreground/80">
                  No hidden fees • Free shipping • Same price at any dose
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-lg px-8"
                    onClick={() => window.location.href = 'https://app.trytrimi.com/start-online-visit/weight-loss-memberships'}
                  >
                    Start Your Journey
                  </Button>
                  <Link to="/treatments/tirzepatide">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      View Pricing Details
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </article>
        
        <TopicClusterNav
          hubPage="/cost-guide"
          topic="Tirzepatide Cost"
          relatedArticles={[
            {
              title: "Tirzepatide Cost Comparison Guide",
              url: "/blog/tirzepatide-cost-comparison",
              excerpt: "Compare all tirzepatide pricing options including Mounjaro, Zepbound, and compounded versions."
            },
            {
              title: "Cheapest Tirzepatide Online",
              url: "/blog/cheapest-tirzepatide-online",
              excerpt: "Find the most affordable tirzepatide options with our comprehensive pricing and provider comparison."
            },
            {
              title: "Weight Loss Injection Costs",
              url: "/blog/weight-loss-injection-costs",
              excerpt: "Complete cost comparison of all GLP-1 medications including tirzepatide and semaglutide."
            },
            {
              title: "Tirzepatide Insurance Coverage",
              url: "/blog/tirzepatide-insurance-coverage",
              excerpt: "Understanding insurance coverage options and how to maximize your benefits for tirzepatide."
            }
          ]}
        />
      </main>

      <Footer />
    </div>
  );
};


export default CompoundedTirzepatideCost;