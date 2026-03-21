import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, AlertCircle } from "lucide-react";
import { Link } from "@/compat/react-router-dom";
import { Helmet } from "@/compat/react-helmet-async";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/compounded-semaglutide-vs-brand-name.jpg";
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
import { getClusterNavigation } from "@/utils/relatedContent";

const CompoundedSemaglutideVsBrandName = () => {
  const meta = getBlogPostMeta("compounded-semaglutide-vs-brand-name");
  const publishDate = meta?.date || "2025-01-06";
  const modifiedDate = getModifiedDate('compounded-semaglutide-vs-brand-name', publishDate);
  const clusterNav = getClusterNavigation('compounded-semaglutide-vs-brand-name');
  
  const qaData = [
    {
      question: "Is compounded semaglutide as effective as Wegovy?",
      answer: "Yes, compounded semaglutide contains the same active ingredient as Wegovy and produces equivalent weight loss results (15-20% body weight reduction). The molecular structure is identical, meaning therapeutic effects are the same when prepared correctly by licensed 503B pharmacies."
    },
    {
      question: "How much can I save with compounded semaglutide?",
      answer: "Compounded semaglutide costs $145-$350/month compared to $1,200-$1,400/month for brand-name Wegovy - a savings of up to 85%. Annual savings range from $10,000-$14,500, making treatment affordable for patients without insurance coverage."
    },
    {
      question: "Is compounded semaglutide safe?",
      answer: "When obtained from licensed 503B compounding pharmacies, compounded semaglutide is safe. These FDA-registered facilities follow strict quality standards, undergo regular inspections, conduct rigorous testing, and must report adverse events - similar oversight to FDA-approved medications."
    },
    {
      question: "Does insurance cover compounded semaglutide?",
      answer: "Insurance typically does not cover compounded medications. However, the out-of-pocket cost for compounded semaglutide ($145-$350/month) is often lower than insurance copays for brand-name Wegovy ($50-$200/month), making it more affordable for most patients."
    },
    {
      question: "What's the difference between 503A and 503B pharmacies?",
      answer: "503B facilities are FDA-registered, undergo mandatory inspections, follow cGMP standards, and must report adverse events. 503A pharmacies have minimal FDA oversight and self-regulate. Always choose 503B facilities for compounded semaglutide to ensure highest safety standards."
    },
    {
      question: "Can I switch from Wegovy to compounded semaglutide?",
      answer: "Yes, you can switch from brand-name Wegovy to compounded semaglutide since they contain the same active ingredient. Work with your healthcare provider to ensure seamless transition and maintain your current dosage schedule without interruption."
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <QAPageSchema 
        questions={qaData}
        mainEntityName="Compounded Semaglutide vs Brand Name Comparison"
      />
      <BlogFAQSchema faqs={qaData} />
      <Helmet>
        <title>Compounded Semaglutide vs Wegovy: Complete Cost Comparison 2025 | Trimi</title>
        <meta name="description" content="Detailed comparison of compounded semaglutide vs brand-name Wegovy. Compare costs, effectiveness, safety, and find out which option is right for you in 2025." />
        <meta name="keywords" content="compounded semaglutide vs wegovy, semaglutide cost comparison, compounded semaglutide price, wegovy alternative, cheap semaglutide" />
        
        <meta property="og:title" content="Compounded Semaglutide vs Brand Name: Complete Cost Comparison" />
        <meta property="og:description" content="Save up to 80% on semaglutide. Compare compounded vs brand-name options, costs, and effectiveness." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/compounded-semaglutide-vs-brand-name" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Compounded Semaglutide vs Brand Name: Complete Cost Comparison 2025",
            "description": "Detailed comparison of compounded semaglutide vs brand-name Wegovy including costs, effectiveness, and safety.",
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
                <span className="text-foreground">Compounded Semaglutide vs Brand Name</span>
              </nav>

              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Compounded Semaglutide vs Brand Name Wegovy: Complete Cost Comparison 2025
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <time>{meta?.date ? new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'January 2025'}</time>
                  <span>•</span>
                  <span>{meta?.readTime || '12 min'} read</span>
                </div>
                <div className="mb-6">
                  <ContentFreshnessIndicator 
                    lastModified={modifiedDate}
                    publishDate={publishDate}
                    showBadge={true}
                  />
                </div>
              </header>

              {/* Quick Summary */}
              <Card className="p-8 mb-12 bg-secondary/5 border-secondary">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-secondary" />
                  Quick Cost Comparison
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Brand Name Wegovy</h3>
                    <p className="text-3xl font-bold text-foreground mb-2">$1,200-$1,400</p>
                    <p className="text-sm text-muted-foreground">per month without insurance</p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg border-2 border-secondary">
                    <h3 className="font-bold text-lg mb-2 text-secondary">Compounded Semaglutide</h3>
                    <p className="text-3xl font-bold text-secondary mb-2">$145-$350</p>
                    <p className="text-sm text-muted-foreground">per month (Save up to 85%)</p>
                  </div>
                </div>
              </Card>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Your Semaglutide Options</h2>
                <p className="text-muted-foreground mb-4">
                  If you've been prescribed semaglutide for weight loss, you've likely experienced sticker shock at the pharmacy. Brand-name Wegovy can cost over $1,300 per month without insurance, making it financially impossible for many Americans to access this life-changing medication.
                </p>
                <p className="text-muted-foreground mb-4">
                  But there's a legal, safe alternative that's helping thousands save up to 85% on their medication costs: compounded semaglutide. In this comprehensive guide, we'll break down exactly what compounded semaglutide is, how it compares to brand-name Wegovy, and whether it's the right choice for you.
                </p>
              </div>

              {/* What is Compounded Semaglutide */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What is Compounded Semaglutide?</h2>
                <Card className="p-6 mb-6">
                  <p className="text-muted-foreground mb-4">
                    Compounded semaglutide is a custom-prepared version of the same active ingredient found in Wegovy and Ozempic. It's created by licensed compounding pharmacies, which are FDA-regulated facilities that specialize in preparing medications tailored to individual patient needs.
                  </p>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Key Points:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Contains the same active ingredient (semaglutide) as Wegovy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Prepared by licensed U.S. compounding pharmacies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Requires a valid prescription from a licensed provider</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Costs 70-85% less than brand-name Wegovy</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </section>

              {/* Detailed Cost Breakdown */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Detailed Cost Breakdown</h2>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-secondary/10">
                        <th className="border border-border p-4 text-left font-bold">Factor</th>
                        <th className="border border-border p-4 text-left font-bold">Brand Name Wegovy</th>
                        <th className="border border-border p-4 text-left font-bold">Compounded Semaglutide</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-4 font-semibold">Monthly Cost (Cash)</td>
                        <td className="border border-border p-4">$1,200 - $1,400</td>
                        <td className="border border-border p-4 text-secondary font-semibold">$145 - $350</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 font-semibold">Annual Cost (Cash)</td>
                        <td className="border border-border p-4">$14,400 - $16,800</td>
                        <td className="border border-border p-4 text-secondary font-semibold">$2,268 - $4,200</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 font-semibold">Insurance Coverage</td>
                        <td className="border border-border p-4">Often denied for weight loss</td>
                        <td className="border border-border p-4">Not covered (but still cheaper)</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 font-semibold">Savings Cards</td>
                        <td className="border border-border p-4">May reduce to $550/mo (limited)</td>
                        <td className="border border-border p-4">N/A (already affordable)</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 font-semibold">Consultation Fees</td>
                        <td className="border border-border p-4">Varies by doctor</td>
                        <td className="border border-border p-4">Often included ($0-99)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Card className="p-6 bg-green-50 border-green-200">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Potential Annual Savings
                  </h3>
                  <p className="text-2xl font-bold text-green-600 mb-2">$10,000 - $14,500 per year</p>
                  <p className="text-sm text-muted-foreground">By choosing compounded semaglutide over brand-name Wegovy</p>
                </Card>
              </section>

              {/* Effectiveness Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Is Compounded Semaglutide As Effective?</h2>
                <Card className="p-6 mb-6">
                  <p className="text-muted-foreground mb-4">
                    Both contain the same active ingredient - semaglutide - which means they work through the same biological mechanism. The active pharmaceutical ingredient (API) used in compounding comes from FDA-registered facilities.
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-3">Expected Results:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/5 rounded-lg">
                      <h4 className="font-bold mb-2">Average Weight Loss</h4>
                      <p className="text-2xl font-bold text-secondary mb-1">15-20%</p>
                      <p className="text-sm text-muted-foreground">of body weight over 6-12 months</p>
                    </div>
                    <div className="p-4 bg-secondary/5 rounded-lg">
                      <h4 className="font-bold mb-2">Success Rate</h4>
                      <p className="text-2xl font-bold text-secondary mb-1">85%+</p>
                      <p className="text-sm text-muted-foreground">of patients lose significant weight</p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Safety Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Safety and Quality Considerations</h2>
                <Card className="p-6 mb-6 border-secondary bg-secondary/5">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                    How to Ensure You're Getting Quality Compounded Semaglutide
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Verify Pharmacy License:</strong> Ensure the compounding pharmacy is licensed in your state and registered with the FDA (503A or 503B facility)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Check for Accreditation:</strong> Look for PCAB (Pharmacy Compounding Accreditation Board) certification
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Require a Prescription:</strong> Legitimate sources always require a valid prescription from a licensed U.S. provider
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Use Reputable Telehealth:</strong> Platforms like Trimi vet their pharmacy partners for quality and compliance
                      </div>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-orange-200 bg-orange-50">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                    Important Safety Notes
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    While compounded semaglutide uses the same active ingredient, it's important to understand:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Compounded medications are not FDA-approved (but made from FDA-approved ingredients)</li>
                    <li>• Quality can vary between compounding pharmacies - choose wisely</li>
                    <li>• Always work with a licensed healthcare provider</li>
                    <li>• Report any unusual side effects immediately</li>
                  </ul>
                </Card>
              </section>

              {/* Who Should Choose Which */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Which Option Is Right for You?</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Choose Brand-Name Wegovy If:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Your insurance covers it with low copay</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <span>You qualify for manufacturer savings cards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <span>You prefer FDA-approved branded medication</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Cost is not a primary concern</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-2 border-secondary bg-secondary/5">
                    <h3 className="text-xl font-bold text-secondary mb-4">Choose Compounded Semaglutide If:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <span>Insurance denies coverage for weight loss</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <span>You're paying cash/out-of-pocket</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <span>You want significant cost savings (70-85%)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <span>You work with a trusted telehealth provider</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* How to Get Started */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">How to Get Compounded Semaglutide</h2>
                <Card className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Complete Online Consultation</h3>
                        <p className="text-muted-foreground">
                          Connect with a licensed healthcare provider through a reputable telehealth platform. They'll review your health history and determine if semaglutide is right for you.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Get Your Prescription</h3>
                        <p className="text-muted-foreground">
                          If approved, your provider will send your prescription directly to a vetted compounding pharmacy.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex-shrink-0 font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Receive Your Medication</h3>
                        <p className="text-muted-foreground">
                          Your compounded semaglutide is shipped directly to your door with free shipping, usually within 3-5 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Related Articles */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link to="/blog/compounded-tirzepatide-cost">
                    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg font-bold text-foreground mb-2">How Much Does Compounded Tirzepatide Cost?</h3>
                      <p className="text-muted-foreground text-sm">Complete pricing guide for the dual-action weight loss medication</p>
                    </Card>
                  </Link>
                  <Link to="/blog/tirzepatide-vs-semaglutide">
                    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg font-bold text-foreground mb-2">Tirzepatide vs Semaglutide: Which Is Right for You?</h3>
                      <p className="text-muted-foreground text-sm">Compare both medications to find your best option</p>
                    </Card>
                  </Link>
                  <Link to="/blog/semaglutide-clinical-results">
                    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg font-bold text-foreground mb-2">Real Results: Semaglutide Clinical Studies</h3>
                      <p className="text-muted-foreground text-sm">What research shows about weight loss effectiveness</p>
                    </Card>
                  </Link>
                  <Link to="/blog/semaglutide-first-month">
                    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg font-bold text-foreground mb-2">What to Expect in Your First Month</h3>
                      <p className="text-muted-foreground text-sm">Complete guide to starting semaglutide treatment</p>
                    </Card>
                  </Link>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">Is compounded semaglutide legal?</h3>
                    <p className="text-muted-foreground">
                      Yes, when prepared by a licensed compounding pharmacy with a valid prescription. Compounding pharmacies are regulated by state boards and the FDA.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">Will my insurance cover compounded semaglutide?</h3>
                    <p className="text-muted-foreground">
                      Most insurance plans do not cover compounded medications. However, the cash price is often lower than the copay for brand-name Wegovy.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">How long can I use compounded semaglutide?</h3>
                    <p className="text-muted-foreground">
                      As long as your healthcare provider continues to prescribe it and monitor your progress. Many patients use it long-term for weight maintenance.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">Can I switch from Wegovy to compounded semaglutide?</h3>
                    <p className="text-muted-foreground">
                      Yes, you can switch with your doctor's guidance. The active ingredient is the same, so the transition is typically seamless.
                    </p>
                  </Card>
                </div>
              </section>

              {/* CTA */}
              <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to save up to 85% on semaglutide?</h2>
                <p className="text-xl mb-6 text-primary-foreground/90">
                  Get started with compounded semaglutide from Trimi - as low as $145/month
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-lg px-8"
                    onClick={() => window.location.href = 'https://app.trytrimi.com/start-online-visit/weight-loss-memberships'}
                  >
                    Get Started Today
                  </Button>
                  <Link to="/treatments/semaglutide">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      Learn More About Semaglutide
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
          
          <TopicClusterNav
            pillarPage={clusterNav.pillarPage}
            hubPage={clusterNav.hubPage}
            relatedArticles={clusterNav.relatedInCluster}
            topic="Semaglutide Cost & Comparisons"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CompoundedSemaglutideVsBrandName;