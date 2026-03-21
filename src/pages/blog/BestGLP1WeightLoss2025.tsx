import { Helmet } from "@/compat/react-helmet-async";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { Card } from "@/components/ui/card";
import { Award, BarChart3, CheckCircle, DollarSign, Scale, Star, TrendingUp, Zap } from "lucide-react";

const BestGLP1WeightLoss2025 = () => {
  const defined = {
    title: "Best GLP-1 for Weight Loss: 2025 Comparisons and Choices",
    description: "Compare semaglutide, tirzepatide, and other GLP-1 medications for weight loss. Updated 2025 rankings based on clinical data, cost, and real-world results.",
    slug: "best-glp1-weight-loss-2025",
    publishedDate: "2024-12-05",
    modifiedDate: "2024-12-05",
    author: "Trimi Medical Team",
    medicalReviewer: "Dr. Amanda Foster, MD",
    readTime: "15 min read",
    category: "Comparisons",
    keywords: [
      "best GLP-1 for weight loss",
      "tirzepatide vs semaglutide 2025",
      "top GLP-1 drugs",
      "weight loss medication comparison",
      "GLP-1 rankings 2025"
    ]
  };

  const faqItems = [
    {
      question: "Which GLP-1 medication produces the most weight loss?",
      answer: "Based on 2025 clinical data, tirzepatide (Mounjaro/Zepbound) produces the highest average weight loss at 20-25% of body weight. Semaglutide (Wegovy/Ozempic) follows at 15-17%, with liraglutide (Saxenda) at 5-8%."
    },
    {
      question: "Is tirzepatide better than semaglutide for weight loss?",
      answer: "Clinical trials show tirzepatide produces greater weight loss than semaglutide on average (20-25% vs 15-17%). However, individual responses vary, and some patients respond better to semaglutide. Cost, availability, and side effect tolerance also factor into the best choice."
    },
    {
      question: "What is the most affordable GLP-1 for weight loss?",
      answer: "Compounded semaglutide is currently the most affordable option at $200-400/month. Brand-name options range from $900-1,300/month without insurance. See our cost guide for detailed pricing."
    },
    {
      question: "Are there new GLP-1 medications coming in 2025?",
      answer: "Yes, several new GLP-1 and combination medications are in late-stage trials, including oral tirzepatide, retatrutide (triple agonist), and orforglipron. These may offer improved efficacy, convenience, or tolerability."
    }
  ];

  return (
    <>
      <BlogSEO
        title={defined.title}
        description={defined.description}
        url={`/blog/${defined.slug}`}
        publishDate={defined.publishedDate}
        modifiedDate={defined.modifiedDate}
        authorName={defined.author}
        keywords={defined.keywords}
        faqs={faqItems}
        category={defined.category}
      />

      <OptimizedNavigation />
      <SmartBreadcrumbs />

      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{defined.category}</span>
              <span>•</span>
              <span>{defined.readTime}</span>
              <span>•</span>
              <span>Updated {defined.modifiedDate}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {defined.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {defined.description}
            </p>
          </header>

          <TopicClusterNav
            topic="Comparisons"
            hubPage="/blog/comparisons-hub"
            relatedArticles={[
              { title: "Semaglutide vs Tirzepatide", url: "/blog/semaglutide-vs-tirzepatide", excerpt: "Head-to-head comparison of top GLP-1s" },
              { title: "GLP-1 Cost Guide", url: "/cost-guide", excerpt: "Complete pricing and affordability options" }
            ]}
          />

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                2025 GLP-1 Rankings for Weight Loss
              </h2>
              <p className="text-muted-foreground mb-6">
                Based on the latest clinical trial data, real-world evidence, and meta-analyses, here are our rankings for GLP-1 medications for weight loss in 2025:
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-2 border-yellow-400 dark:border-yellow-600 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-yellow-900">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">Tirzepatide (Mounjaro/Zepbound)</h3>
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      </div>
                      <p className="text-muted-foreground mb-3">
                        The dual GIP/GLP-1 agonist leads all medications for weight loss efficacy. Learn more in our <InternalLink to="/tirzepatide-guide">complete tirzepatide guide</InternalLink>.
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white/60 dark:bg-white/10 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">20-25%</div>
                          <div className="text-xs text-muted-foreground">Avg Weight Loss</div>
                        </div>
                        <div className="bg-white/60 dark:bg-white/10 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">Weekly</div>
                          <div className="text-xs text-muted-foreground">Dosing</div>
                        </div>
                        <div className="bg-white/60 dark:bg-white/10 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">$$$</div>
                          <div className="text-xs text-muted-foreground">Cost</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-gray-300 dark:border-gray-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-700">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Semaglutide (Wegovy/Ozempic)</h3>
                      <p className="text-muted-foreground mb-3">
                        The most widely prescribed and studied GLP-1 for weight loss. Excellent efficacy with the longest safety record. See our <InternalLink to="/semaglutide-guide">semaglutide guide</InternalLink>.
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">15-17%</div>
                          <div className="text-xs text-muted-foreground">Avg Weight Loss</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">Weekly</div>
                          <div className="text-xs text-muted-foreground">Dosing</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">$$</div>
                          <div className="text-xs text-muted-foreground">Cost</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-amber-600 dark:border-amber-700">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Liraglutide (Saxenda)</h3>
                      <p className="text-muted-foreground mb-3">
                        The original GLP-1 approved for obesity. Less effective than newer options but well-studied with a strong safety profile.
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">5-8%</div>
                          <div className="text-xs text-muted-foreground">Avg Weight Loss</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">Daily</div>
                          <div className="text-xs text-muted-foreground">Dosing</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">$$</div>
                          <div className="text-xs text-muted-foreground">Cost</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                Head-to-Head Comparison
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="p-4 text-left font-semibold border">Feature</th>
                      <th className="p-4 text-left font-semibold border">Tirzepatide</th>
                      <th className="p-4 text-left font-semibold border">Semaglutide</th>
                      <th className="p-4 text-left font-semibold border">Liraglutide</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border font-medium">Avg Weight Loss</td>
                      <td className="p-4 border text-green-600 font-semibold">20-25%</td>
                      <td className="p-4 border">15-17%</td>
                      <td className="p-4 border">5-8%</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 border font-medium">Dosing Frequency</td>
                      <td className="p-4 border">Weekly</td>
                      <td className="p-4 border">Weekly</td>
                      <td className="p-4 border">Daily</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">A1c Reduction</td>
                      <td className="p-4 border text-green-600 font-semibold">2.0-2.4%</td>
                      <td className="p-4 border">1.5-1.8%</td>
                      <td className="p-4 border">1.0-1.2%</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 border font-medium">Brand Cost/Month</td>
                      <td className="p-4 border">$1,000-1,300</td>
                      <td className="p-4 border">$900-1,100</td>
                      <td className="p-4 border">$900-1,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Compounded Available</td>
                      <td className="p-4 border">Limited</td>
                      <td className="p-4 border text-green-600 font-semibold">Yes ($200-400)</td>
                      <td className="p-4 border">No</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 border font-medium">GI Side Effects</td>
                      <td className="p-4 border">Moderate</td>
                      <td className="p-4 border">Moderate</td>
                      <td className="p-4 border">Moderate-High</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">CV Outcomes Data</td>
                      <td className="p-4 border">Pending</td>
                      <td className="p-4 border text-green-600 font-semibold">Strong (SELECT)</td>
                      <td className="p-4 border">Neutral (LEADER)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                For detailed cost comparisons, see our <InternalLink to="/cost-guide">complete GLP-1 cost guide</InternalLink>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-primary" />
                Choosing the Right GLP-1 for You
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Choose Tirzepatide If:
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• You have significant weight to lose (BMI 35+)</li>
                    <li>• You have Type 2 diabetes and want maximum A1c reduction</li>
                    <li>• Cost is not a primary concern or you have good insurance</li>
                    <li>• You have not responded adequately to semaglutide</li>
                    <li>• You prefer the most aggressive treatment approach</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    Choose Semaglutide If:
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• You want a well-studied medication with strong safety data</li>
                    <li>• Cardiovascular protection is important to you</li>
                    <li>• Cost is a concern (compounded options available)</li>
                    <li>• You have moderate weight loss goals (10-20% body weight)</li>
                    <li>• You prefer a medication with extensive real-world evidence</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Choose Liraglutide If:
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• You prefer daily dosing over weekly injections</li>
                    <li>• You need to start with a very gradual titration</li>
                    <li>• You have had intolerable side effects with other GLP-1s</li>
                    <li>• Your weight loss goals are more modest (5-10%)</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                Coming in 2025-2026: Next-Generation Options
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Retatrutide (Triple Agonist)</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    GLP-1/GIP/Glucagon receptor agonist showing up to 24% weight loss in Phase 2 trials. Expected FDA decision: 2026.
                  </p>
                  <div className="text-xs text-primary">Eli Lilly • Phase 3</div>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Oral Tirzepatide</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Pill form of tirzepatide in development. Could eliminate need for injections while maintaining efficacy.
                  </p>
                  <div className="text-xs text-primary">Eli Lilly • Phase 3</div>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Orforglipron</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Novel oral GLP-1 showing 14% weight loss. Potential cost advantages over injectables.
                  </p>
                  <div className="text-xs text-primary">Eli Lilly • Phase 3</div>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">CagriSema</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Semaglutide + cagrilintide combination showing enhanced weight loss vs semaglutide alone.
                  </p>
                  <div className="text-xs text-primary">Novo Nordisk • Phase 3</div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-semibold mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </Card>
                ))}
              </div>
            </section>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center">
              <h2 className="text-2xl font-bold mb-4">Find Your Best GLP-1 Match</h2>
              <p className="text-muted-foreground mb-6">
                Our medical team will evaluate your health profile, goals, and preferences to recommend the optimal medication.
              </p>
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Personalized Recommendation
              </a>
            </Card>
          </div>
        </article>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default BestGLP1WeightLoss2025;
