import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { Card } from "@/components/ui/card";
import { Heart, Activity, TrendingDown, Shield, CheckCircle, BarChart3, Droplets } from "lucide-react";

const GLP1CardiovascularBenefits = () => {
  const defined = {
    title: "Cardiovascular Benefits of GLP-1 Medications: Heart Health Guide",
    description: "Discover how GLP-1 medications like semaglutide and tirzepatide protect heart health. Evidence from SURPASS-CVOT and SELECT trials on reduced cardiovascular events.",
    slug: "glp1-cardiovascular-benefits-heart-health",
    publishedDate: "2024-12-05",
    modifiedDate: "2024-12-05",
    author: "Trimi Medical Team",
    readTime: "14 min read",
    category: "Health Conditions",
    keywords: [
      "GLP-1 heart benefits",
      "semaglutide cardiovascular",
      "tirzepatide for heart disease",
      "GLP-1 cardiac protection",
      "weight loss heart health"
    ]
  };

  const faqItems = [
    {
      question: "Do GLP-1 medications protect against heart attacks?",
      answer: "Yes, the SELECT trial showed semaglutide reduced the risk of heart attacks, strokes, and cardiovascular death by 20% in people with obesity and established cardiovascular disease. This is the first weight loss medication to demonstrate such protection."
    },
    {
      question: "How do GLP-1s improve heart health beyond weight loss?",
      answer: "GLP-1s have direct cardiovascular effects including reducing inflammation, improving blood vessel function, lowering blood pressure, and improving cholesterol profiles. These benefits occur partially independent of weight loss."
    },
    {
      question: "Is tirzepatide approved for heart protection?",
      answer: "Tirzepatide is not yet FDA-approved for cardiovascular risk reduction. The SURPASS-CVOT trial is ongoing and expected to report results in 2025-2026. Early data suggests similar or potentially greater benefits than semaglutide."
    },
    {
      question: "Should I take GLP-1s if I have heart disease?",
      answer: "If you have established cardiovascular disease and obesity, semaglutide (Wegovy) is now FDA-approved specifically to reduce cardiovascular risk. Discuss with your cardiologist whether GLP-1 therapy is appropriate for your situation."
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
            topic="Health Conditions"
            hubPage="/blog/health-conditions-hub"
            relatedArticles={[
              { title: "GLP-1 for Type 1 Diabetes", url: "/blog/glp1-type-1-diabetes", excerpt: "Off-label use and evidence" },
              { title: "Long-Term Metabolic Benefits", url: "/blog/long-term-metabolic-benefits-glp1", excerpt: "Metabolic improvements with GLP-1s" }
            ]}
          />

          <div className="prose prose-lg max-w-none">
            <Card className="p-6 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 mb-8">
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Landmark Finding</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    In March 2024, the FDA approved Wegovy (semaglutide 2.4mg) to reduce cardiovascular risk in adults with obesity and established heart disease—a first for any weight loss medication.
                  </p>
                </div>
              </div>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                The SELECT Trial: Game-Changing Evidence
              </h2>
              <p className="text-muted-foreground mb-4">
                The SELECT trial enrolled over 17,600 adults with obesity and established cardiovascular disease (but without diabetes) to test whether <InternalLink to="/semaglutide-guide">semaglutide</InternalLink> could prevent heart attacks, strokes, and cardiovascular death.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">20%</div>
                  <div className="text-sm text-muted-foreground">Reduction in Major Cardiovascular Events</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">28%</div>
                  <div className="text-sm text-muted-foreground">Reduction in Heart Attack Risk</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">18%</div>
                  <div className="text-sm text-muted-foreground">Reduction in All-Cause Mortality</div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Activity className="h-8 w-8 text-primary" />
                How GLP-1s Protect the Heart
              </h2>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingDown className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Blood Pressure Reduction</h3>
                      <p className="text-muted-foreground text-sm">
                        GLP-1s reduce systolic blood pressure by 3-6 mmHg on average, reducing strain on the heart and blood vessels. This effect occurs even before significant weight loss.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Improved Cholesterol Profile</h3>
                      <p className="text-muted-foreground text-sm">
                        Reductions in triglycerides (15-25%), LDL cholesterol (5-10%), and increases in HDL cholesterol help reduce atherosclerosis progression.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Reduced Inflammation</h3>
                      <p className="text-muted-foreground text-sm">
                        GLP-1s lower inflammatory markers like C-reactive protein (CRP) and IL-6, which contribute to plaque instability and cardiovascular events.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Direct Cardiac Effects</h3>
                      <p className="text-muted-foreground text-sm">
                        GLP-1 receptors exist in heart tissue. Activation may improve heart muscle function, reduce oxidative stress, and enhance cardiac energy metabolism.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Activity className="h-8 w-8 text-primary" />
                Tirzepatide: Emerging Cardiovascular Data
              </h2>
              <p className="text-muted-foreground mb-4">
                While <InternalLink to="/tirzepatide-guide">tirzepatide</InternalLink> is not yet approved for cardiovascular risk reduction, early data is promising:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">SURPASS-CVOT (Ongoing)</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>15,000+ participants with T2DM and CVD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Results expected 2025-2026</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Primary endpoint: MACE (major adverse cardiovascular events)</span>
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Preliminary Signals</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Greater weight loss may amplify CV benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Superior metabolic improvements vs semaglutide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>GIP receptor may provide additional cardioprotection</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Who Benefits Most?</h2>
              
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold mb-2">Established Cardiovascular Disease</h3>
                  <p className="text-muted-foreground text-sm">
                    Prior heart attack, stroke, or peripheral artery disease—SELECT trial population showed strongest benefits.
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold mb-2">Obesity with Multiple Risk Factors</h3>
                  <p className="text-muted-foreground text-sm">
                    High blood pressure, high cholesterol, family history of heart disease, or metabolic syndrome.
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold mb-2">Type 2 Diabetes with Cardiovascular Risk</h3>
                  <p className="text-muted-foreground text-sm">
                    Diabetic patients benefit from both glycemic control and cardioprotective effects.
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold mb-2">Heart Failure with Preserved Ejection Fraction (HFpEF)</h3>
                  <p className="text-muted-foreground text-sm">
                    STEP-HFpEF trial showed semaglutide improved symptoms and exercise capacity in obese HFpEF patients.
                  </p>
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
              <h2 className="text-2xl font-bold mb-4">Protect Your Heart While Losing Weight</h2>
              <p className="text-muted-foreground mb-6">
                Discover if GLP-1 therapy is right for your cardiovascular health goals.
              </p>
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Consult with a Provider
              </a>
            </Card>
          </div>
        </article>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default GLP1CardiovascularBenefits;