import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { Card } from "@/components/ui/card";
import { DollarSign, Users, AlertTriangle, Lightbulb, Building, Globe, Shield, TrendingUp } from "lucide-react";

const GLP1AccessEquity = () => {
  const defined = {
    title: "Access and Equity in GLP-1 Treatments: Barriers and Solutions",
    description: "Explore the access challenges facing GLP-1 treatments including costs, shortages, and fairness issues. Discover savings strategies and solutions for affordable tirzepatide and semaglutide.",
    slug: "glp1-access-equity-barriers-solutions",
    publishedDate: "2024-12-05",
    modifiedDate: "2024-12-05",
    author: "Trimi Medical Team",
    readTime: "14 min read",
    category: "Cost & Affordability",
    keywords: [
      "GLP-1 access issues",
      "affordable tirzepatide 2025",
      "semaglutide equity",
      "weight loss medication cost",
      "GLP-1 shortage solutions"
    ]
  };

  const faqItems = [
    {
      question: "Why are GLP-1 medications so expensive?",
      answer: "High prices reflect R&D costs, manufacturing complexity (biologics require special production), limited competition, and high demand. List prices of $900-1,500/month do not reflect negotiated rates insurers pay, creating a two-tiered access system."
    },
    {
      question: "Will GLP-1 medications become more affordable in 2025?",
      answer: "Several factors may improve affordability: potential new market entrants, ongoing compounding availability (though legally uncertain), expanded insurance coverage post-SELECT trial, and manufacturer patient assistance programs. Generic semaglutide is not expected until 2031+."
    },
    {
      question: "Are there programs to help pay for GLP-1 medications?",
      answer: "Yes, manufacturer savings programs (Novo Nordisk, Eli Lilly) can reduce costs to $25-500/month for eligible patients. Patient assistance programs exist for uninsured individuals, and some employers are adding coverage as a cost-saving measure."
    },
    {
      question: "Is it fair that only wealthy people can afford GLP-1s?",
      answer: "This is a significant ethical concern. Obesity disproportionately affects lower-income populations who have least access to effective treatments. Advocacy groups are pushing for Medicare/Medicaid coverage, and the Treat and Reduce Obesity Act aims to expand access."
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
            topic="Cost & Affordability"
            hubPage="/cost-guide"
            relatedArticles={[
              { title: "GLP-1 Without Insurance 2026", url: "/blog/glp1-without-insurance-2026", excerpt: "Affordable options without coverage" },
              { title: "Compounded Semaglutide Cost & Safety", url: "/blog/compounded-semaglutide-cost-safety", excerpt: "Understanding compounded options" }
            ]}
          />

          <div className="prose prose-lg max-w-none">
            <Card className="p-6 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">The Access Crisis</h4>
                  <p className="text-amber-700 dark:text-amber-300 text-sm">
                    While <InternalLink to="/semaglutide-guide">semaglutide</InternalLink> and <InternalLink to="/tirzepatide-guide">tirzepatide</InternalLink> represent medical breakthroughs, an estimated 70% of Americans who could benefit cannot access them due to cost, insurance barriers, or supply shortages.
                  </p>
                </div>
              </div>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <DollarSign className="h-8 w-8 text-primary" />
                The Cost Barrier: 2025 Pricing Reality
              </h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Medication</th>
                      <th className="text-left py-3 px-4">List Price/Month</th>
                      <th className="text-left py-3 px-4">With Insurance</th>
                      <th className="text-left py-3 px-4">Compounded</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Wegovy (semaglutide)</td>
                      <td className="py-3 px-4">$1,350</td>
                      <td className="py-3 px-4">$0-500</td>
                      <td className="py-3 px-4">$200-400</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Zepbound (tirzepatide)</td>
                      <td className="py-3 px-4">$1,060</td>
                      <td className="py-3 px-4">$0-550</td>
                      <td className="py-3 px-4">$350-500*</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Ozempic (semaglutide)</td>
                      <td className="py-3 px-4">$935</td>
                      <td className="py-3 px-4">$0-300</td>
                      <td className="py-3 px-4">$200-400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">*Compounded tirzepatide availability is limited and legally uncertain</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                Who Is Most Affected?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Uninsured/Underinsured</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    27 million uninsured Americans face full list prices. Even many insured face high deductibles that make GLP-1s unaffordable.
                  </p>
                  <div className="text-2xl font-bold text-primary">$16,200/year</div>
                  <div className="text-xs text-muted-foreground">Average out-of-pocket without coverage</div>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Medicare Beneficiaries</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Medicare Part D cannot cover weight loss drugs by law. Millions of seniors with obesity-related conditions are excluded.
                  </p>
                  <div className="text-2xl font-bold text-primary">65M+</div>
                  <div className="text-xs text-muted-foreground">Medicare enrollees affected</div>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Low-Income Populations</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Obesity rates are highest in lower-income communities, yet access to treatment is lowest. A cruel paradox of health equity.
                  </p>
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-xs text-muted-foreground">Higher obesity rates in low-income areas</div>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Rural Communities</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Limited specialty pharmacy access, fewer providers, and higher prevalence of obesity create compounding barriers.
                  </p>
                  <div className="text-2xl font-bold text-primary">46M</div>
                  <div className="text-xs text-muted-foreground">Rural Americans with limited access</div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                Practical Solutions for Patients
              </h2>
              
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold mb-2">1. Manufacturer Savings Programs</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Both Novo Nordisk and Eli Lilly offer savings cards reducing costs to $25-500/month for commercially insured patients.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Wegovy Savings Card: Up to $500/month savings</li>
                    <li>• Zepbound Savings Card: Pay as low as $25/month</li>
                    <li>• Not valid for government insurance (Medicare, Medicaid)</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold mb-2">2. Patient Assistance Programs</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Free medication for qualifying uninsured patients meeting income guidelines.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Novo Nordisk PAP: Income ≤400% FPL</li>
                    <li>• Lilly Cares: Income ≤400% FPL</li>
                    <li>• NeedyMeds.org for additional resources</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold mb-2">3. Compounded Medications</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Compounding pharmacies offer semaglutide at $200-400/month. Legal under FDA shortage guidelines, but quality varies.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Only use 503B-licensed facilities</li>
                    <li>• Verify pharmacy credentials</li>
                    <li>• <InternalLink to="/blog/compounded-semaglutide-cost-safety">Read our compounding safety guide</InternalLink></li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold mb-2">4. Employer Advocacy</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Ask HR about adding GLP-1 coverage. Studies show employer ROI of 3:1 through reduced diabetes, heart disease, and absenteeism costs.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Building className="h-8 w-8 text-primary" />
                Policy Solutions on the Horizon
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Treat and Reduce Obesity Act (TROA)</h3>
                      <p className="text-muted-foreground text-sm">
                        Bipartisan legislation that would allow Medicare to cover FDA-approved obesity medications. Passed House in 2024; Senate action pending.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">International Price Negotiation</h3>
                      <p className="text-muted-foreground text-sm">
                        The Inflation Reduction Act enables Medicare drug price negotiation. GLP-1s are candidates for future negotiation rounds, potentially lowering costs significantly.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Market Competition</h3>
                      <p className="text-muted-foreground text-sm">
                        New GLP-1s entering the market (orforglipron, retatrutide) may increase competition and lower prices. Oral formulations could reduce manufacturing costs.
                      </p>
                    </div>
                  </div>
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
              <h2 className="text-2xl font-bold mb-4">Explore Affordable GLP-1 Options</h2>
              <p className="text-muted-foreground mb-6">
                We help patients navigate costs, find savings programs, and access quality treatment at affordable prices.
              </p>
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Check Your Options
              </a>
            </Card>
          </div>
        </article>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default GLP1AccessEquity;