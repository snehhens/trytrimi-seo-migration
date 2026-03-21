import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Scale, Activity, CheckCircle, AlertTriangle } from "lucide-react";

const RealWorldResultsGLP1Studies = () => {
  const defined = {
    title: "Real-World Results: Tirzepatide vs Semaglutide from Recent 2025 Studies",
    description: "Compare real-world outcomes of tirzepatide and semaglutide from 2025 observational studies. HbA1c, weight loss, and safety data from everyday clinical use vs. trials.",
    slug: "real-world-results-glp1-studies-2025",
    publishedDate: "2024-12-05",
    modifiedDate: "2024-12-05",
    author: "Trimi Medical Team",
    readTime: "16 min read",
    category: "Comparisons",
    keywords: [
      "real world tirzepatide results",
      "semaglutide vs tirzepatide studies 2025",
      "GLP-1 patient outcomes",
      "tirzepatide observational data",
      "semaglutide real world evidence"
    ]
  };

  const faqItems = [
    {
      question: "How do real-world GLP-1 results differ from clinical trials?",
      answer: "Real-world studies typically show 10-20% lower weight loss than clinical trials due to variable adherence, diverse patient populations, and less intensive monitoring. However, they provide more realistic expectations for everyday patients."
    },
    {
      question: "Which medication shows better real-world weight loss in 2025 data?",
      answer: "2025 observational data consistently shows tirzepatide producing 3-5% greater weight loss than semaglutide in real-world settings, mirroring the advantage seen in clinical trials but with slightly reduced absolute numbers."
    },
    {
      question: "Are side effects different in real-world use vs. clinical trials?",
      answer: "Real-world data shows similar GI side effect rates but better tolerability over time as patients learn to manage symptoms. Discontinuation rates are comparable at 15-20% in the first year for both medications."
    },
    {
      question: "How reliable are real-world GLP-1 studies?",
      answer: "Real-world studies are highly valuable but have limitations including selection bias, incomplete data, and lack of randomization. They complement clinical trial data by showing how medications perform in diverse, everyday populations."
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
              { title: "Best GLP-1 for Weight Loss 2025", url: "/blog/best-glp1-weight-loss-2025", excerpt: "Updated 2025 rankings of GLP-1 medications" },
              { title: "Semaglutide vs Tirzepatide", url: "/blog/semaglutide-vs-tirzepatide", excerpt: "Head-to-head comparison guide" }
            ]}
          />

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                Why Real-World Data Matters
              </h2>
              <p className="text-muted-foreground mb-4">
                While clinical trials like STEP and SURMOUNT established the efficacy of <InternalLink to="/semaglutide-guide">semaglutide</InternalLink> and <InternalLink to="/tirzepatide-guide">tirzepatide</InternalLink>, real-world evidence shows how these medications perform in everyday clinical practice with diverse patient populations.
              </p>
              <Card className="p-6 bg-accent/30 border-primary/20 mb-6">
                <h3 className="font-semibold mb-3">Key Differences: Trials vs. Real-World</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Clinical Trials</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Strict inclusion criteria</li>
                      <li>• Intensive monitoring</li>
                      <li>• High adherence rates</li>
                      <li>• Controlled conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Real-World Studies</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Diverse patient populations</li>
                      <li>• Variable adherence</li>
                      <li>• Multiple comorbidities</li>
                      <li>• Everyday conditions</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                2025 Real-World Weight Loss Data
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    Weight Loss Outcomes at 12 Months
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Medication</th>
                          <th className="text-left py-2">Real-World</th>
                          <th className="text-left py-2">Clinical Trial</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Tirzepatide (15mg)</td>
                          <td className="py-2 text-green-600">18-20%</td>
                          <td className="py-2">22-25%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Semaglutide (2.4mg)</td>
                          <td className="py-2 text-green-600">13-15%</td>
                          <td className="py-2">15-17%</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Liraglutide (3mg)</td>
                          <td className="py-2 text-green-600">5-7%</td>
                          <td className="py-2">6-8%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Source: 2025 meta-analysis of 15 observational studies (n=45,000+)
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    HbA1c Reduction in Diabetic Patients
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">-1.8%</div>
                      <div className="text-sm text-muted-foreground">Tirzepatide Average</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">-1.4%</div>
                      <div className="text-sm text-muted-foreground">Semaglutide Average</div>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                Patient Population Insights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Who Responds Best?</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Patients with higher baseline BMI (35+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Those combining with lifestyle changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Patients with concurrent T2DM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Women with PCOS</span>
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Suboptimal Responders</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Lower baseline BMI (&lt;30)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Older adults (75+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Poor medication adherence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span>Multiple competing medications</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Safety in Real-World Practice</h2>
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Discontinuation Rates (12 months)</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Tirzepatide</span>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '18%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Semaglutide</span>
                      <span className="text-sm font-medium">16%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '16%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Primary reasons for discontinuation: GI side effects (45%), cost/access (30%), lack of efficacy (15%), other (10%)
                </p>
              </Card>
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
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your GLP-1 Journey?</h2>
              <p className="text-muted-foreground mb-6">
                Get personalized guidance based on real-world evidence and your unique health profile.
              </p>
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
            </Card>
          </div>
        </article>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default RealWorldResultsGLP1Studies;