import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Clock, FileText, CheckCircle, Heart, Activity, Brain } from "lucide-react";

const GLP1LongTermSafety2025 = () => {
  const defined = {
    title: "Long-Term Safety of Semaglutide and Tirzepatide: 2025 Updates",
    description: "Comprehensive review of long-term safety data for GLP-1 medications including side effects, risks, and 2025 Cochrane and regulatory updates.",
    slug: "glp1-long-term-safety-2025",
    publishedDate: "2024-12-05",
    modifiedDate: "2024-12-05",
    author: "Trimi Medical Team",
    readTime: "15 min read",
    category: "Safety & Monitoring",
    keywords: [
      "long term safety semaglutide",
      "tirzepatide risks 2025",
      "GLP-1 safety profile",
      "semaglutide side effects long term",
      "GLP-1 medication safety"
    ]
  };

  const faqItems = [
    {
      question: "Is it safe to take semaglutide or tirzepatide long-term?",
      answer: "Current evidence supports long-term use for most patients. Studies spanning 2-5 years show consistent safety profiles with no major new concerns emerging. However, ongoing monitoring is recommended, and risks should be weighed against benefits individually."
    },
    {
      question: "What are the main long-term concerns with GLP-1 medications?",
      answer: "Key concerns include thyroid C-cell tumors (observed in rodents, unclear human relevance), pancreatitis risk, gallbladder disease, and potential effects on bone density and muscle mass with rapid weight loss. Most serious events remain rare."
    },
    {
      question: "Has the FDA issued any new warnings for GLP-1s in 2025?",
      answer: "As of 2025, the FDA continues to monitor signals including ileus (intestinal blockage), aspiration risks during anesthesia, and potential psychiatric effects. No major new boxed warnings have been added, but prescribing information has been updated."
    },
    {
      question: "Should I get regular tests while on GLP-1 medications?",
      answer: "Regular monitoring is recommended including metabolic panels, kidney function, and for diabetic patients, HbA1c. Some providers recommend thyroid monitoring and periodic gallbladder evaluation for high-risk patients."
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
            topic="Safety & Monitoring"
            hubPage="/safety-monitoring-hub"
            relatedArticles={[
              { title: "GLP-1 Lab Monitoring Guide", url: "/blog/glp1-lab-monitoring", excerpt: "Essential tests while on GLP-1s" },
              { title: "GLP-1 Reproductive Health", url: "/blog/glp1-reproductive-health", excerpt: "Fertility and pregnancy considerations" }
            ]}
          />

          <div className="prose prose-lg max-w-none">
            <Card className="p-6 bg-accent/30 border-primary/20 mb-8">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Evidence Summary</h4>
                  <p className="text-muted-foreground text-sm">
                    This article synthesizes data from FDA safety databases, 2025 Cochrane systematic reviews, FAERS (FDA Adverse Event Reporting System), and published post-marketing surveillance studies for <InternalLink to="/semaglutide-guide">semaglutide</InternalLink> and <InternalLink to="/tirzepatide-guide">tirzepatide</InternalLink>.
                  </p>
                </div>
              </div>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                What We Know from Extended Studies
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">STEP Extension Studies (Semaglutide)</h3>
                  <p className="text-muted-foreground mb-3">
                    2-year follow-up data from STEP trials shows:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Sustained weight loss in continued users (15.2% at 2 years)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>No increase in serious adverse events over time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>GI side effects generally improve with continued use</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">SURMOUNT Extension Studies (Tirzepatide)</h3>
                  <p className="text-muted-foreground mb-3">
                    18-month data from tirzepatide trials demonstrates:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Peak weight loss at 72-88 weeks, then stabilization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Similar safety profile to semaglutide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Ongoing SURPASS-CVOT for cardiovascular outcomes</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                Key Safety Concerns and Current Evidence
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-amber-500">
                  <div className="flex items-start gap-4">
                    <Activity className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Thyroid Cancer Risk</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>Animal Studies:</strong> Rodent studies showed thyroid C-cell tumors at high doses.
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>Human Data (2025):</strong> Post-marketing surveillance of 3+ million patients shows no statistically significant increase in thyroid cancer. The FDA boxed warning remains as a precaution.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Recommendation:</strong> Avoid in patients with personal/family history of medullary thyroid carcinoma or MEN2.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <div className="flex items-start gap-4">
                    <Activity className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Pancreatitis</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>Incidence:</strong> ~0.3% in clinical trials, slightly elevated vs placebo.
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>2025 Update:</strong> Real-world data confirms low but real risk. Most cases are mild and resolve with discontinuation.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Recommendation:</strong> Stop medication and seek care for severe abdominal pain. Monitor high-risk patients.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Gallbladder Disease</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>Mechanism:</strong> Rapid weight loss increases cholesterol concentration in bile, promoting gallstone formation.
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>Incidence:</strong> 1.5-2.5% over 68 weeks, 2-3x higher than placebo.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Prevention:</strong> Adequate hydration, gradual dose titration, and ursodiol for high-risk patients.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-start gap-4">
                    <Brain className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Neuropsychiatric Effects (Under Investigation)</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>Emerging Signal:</strong> Reports of depression, anxiety, and suicidal ideation have prompted regulatory review.
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>2025 Status:</strong> EMA and FDA reviewing data. No causal link established; may be confounded by obesity-depression relationship.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Recommendation:</strong> Monitor mood changes, especially in patients with psychiatric history.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                2025 Regulatory Updates
              </h2>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">FDA Label Updates (2025)</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Added warning about ileus/intestinal obstruction</li>
                    <li>• Updated anesthesia guidance (stop 1-2 weeks before surgery)</li>
                    <li>• Enhanced monitoring recommendations for kidney function</li>
                    <li>• Updated drug interaction information</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">EMA Safety Committee Review</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Ongoing review of suicidal ideation reports</li>
                    <li>• No changes to benefit-risk assessment recommended</li>
                    <li>• Enhanced pharmacovigilance activities initiated</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Reassuring Safety Data</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Cardiovascular Safety
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    SELECT trial (semaglutide) showed 20% reduction in major cardiovascular events. Far from harmful, GLP-1s appear cardioprotective.
                  </p>
                </Card>
                <Card className="p-6 border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Kidney Protection
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    FLOW trial demonstrated semaglutide reduces kidney disease progression by 24% in diabetic patients with CKD.
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
              <h2 className="text-2xl font-bold mb-4">Get Safe, Monitored GLP-1 Treatment</h2>
              <p className="text-muted-foreground mb-6">
                Our medical team provides comprehensive monitoring and ongoing safety oversight for your GLP-1 therapy.
              </p>
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Start with Medical Supervision
              </a>
            </Card>
          </div>
        </article>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default GLP1LongTermSafety2025;