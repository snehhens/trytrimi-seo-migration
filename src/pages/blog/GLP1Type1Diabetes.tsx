import { Helmet } from "@/compat/react-helmet-async";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { Card } from "@/components/ui/card";
import { Activity, AlertTriangle, Beaker, FileText, Heart, Scale, Shield, Stethoscope } from "lucide-react";

const GLP1Type1Diabetes = () => {
  const defined = {
    title: "GLP-1 Medications for Type 1 Diabetes: Off-Label Use and Evidence",
    description: "Explore the emerging evidence on GLP-1 medications like semaglutide and tirzepatide for Type 1 diabetes patients, including off-label use for weight loss and glucose control.",
    slug: "glp1-type-1-diabetes",
    publishedDate: "2024-12-05",
    modifiedDate: "2024-12-05",
    author: "Trimi Medical Team",
    medicalReviewer: "Dr. James Chen, Endocrinologist",
    readTime: "12 min read",
    category: "Health Conditions",
    keywords: [
      "GLP-1 for type 1 diabetes",
      "semaglutide type 1",
      "tirzepatide T1D weight loss",
      "off-label GLP-1 use",
      "type 1 diabetes weight management"
    ]
  };

  const faqItems = [
    {
      question: "Are GLP-1 medications FDA-approved for Type 1 diabetes?",
      answer: "No, GLP-1 receptor agonists like semaglutide and tirzepatide are currently only FDA-approved for Type 2 diabetes and obesity. Use in Type 1 diabetes is considered off-label, though ongoing research is exploring their potential benefits in this population."
    },
    {
      question: "Can GLP-1 medications help with weight loss in Type 1 diabetes?",
      answer: "Yes, emerging research shows GLP-1 medications can promote significant weight loss in Type 1 diabetes patients. Studies report average weight losses of 5-10% body weight, which can improve insulin sensitivity and reduce total daily insulin requirements."
    },
    {
      question: "What are the risks of using GLP-1s with Type 1 diabetes?",
      answer: "The primary concerns include hypoglycemia (requiring careful insulin dose adjustments), diabetic ketoacidosis (DKA) risk if insulin is reduced too aggressively, and the typical GI side effects. Close monitoring by an endocrinologist familiar with T1D is essential."
    },
    {
      question: "Do GLP-1 medications reduce insulin requirements in T1D?",
      answer: "Studies show GLP-1 medications can reduce total daily insulin doses by 10-25% in T1D patients, primarily by slowing gastric emptying and reducing postprandial glucose spikes. However, basal insulin remains essential and should never be discontinued."
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
              { title: "GLP-1 and PCOS Weight Loss", url: "/blog/pcos-weight-loss-glp1", excerpt: "How GLP-1s help with PCOS management" },
              { title: "Understanding GLP-1 Side Effects", url: "/blog/glp1-side-effects-management", excerpt: "Managing common GLP-1 side effects" }
            ]}
          />

          <div className="prose prose-lg max-w-none">
            <Card className="p-6 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Medical Notice</h4>
                  <p className="text-amber-700 dark:text-amber-300 text-sm">
                    GLP-1 medications are not FDA-approved for Type 1 diabetes. Off-label use should only be considered under the supervision of an endocrinologist with expertise in T1D management. Never adjust insulin without medical guidance.
                  </p>
                </div>
              </div>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Activity className="h-8 w-8 text-primary" />
                The Growing Interest in GLP-1s for Type 1 Diabetes
              </h2>
              <p className="text-muted-foreground mb-4">
                While <InternalLink to="/semaglutide-guide">semaglutide</InternalLink> and <InternalLink to="/tirzepatide-guide">tirzepatide</InternalLink> are primarily prescribed for Type 2 diabetes and obesity, researchers and clinicians are increasingly exploring their potential benefits for people living with Type 1 diabetes (T1D).
              </p>
              <p className="text-muted-foreground mb-4">
                The rationale is compelling: many T1D patients, particularly those with insulin resistance or overweight/obesity, face similar metabolic challenges as T2D patients. GLP-1 medications address several of these challenges through mechanisms independent of pancreatic beta-cell function.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Beaker className="h-8 w-8 text-primary" />
                Current Research Evidence
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    Weight Loss Studies
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Multiple studies have demonstrated significant weight loss in T1D patients using GLP-1 medications:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>ADJUNCT ONE trial:</strong> Liraglutide showed 5-7% weight loss in overweight T1D patients</li>
                    <li>• <strong>Real-world data (2024-2025):</strong> Semaglutide produced 8-12% weight loss in T1D case series</li>
                    <li>• <strong>Emerging tirzepatide data:</strong> Early reports suggest even greater weight loss potential in T1D</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Glucose Control Improvements
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Research shows GLP-1s can improve glycemic control in T1D through several mechanisms:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Reduced postprandial glucose excursions (20-40% improvement)</li>
                    <li>• Decreased time-in-hyperglycemia</li>
                    <li>• Improved time-in-range on CGM data</li>
                    <li>• Modest A1c reductions (0.2-0.5% when added to optimized insulin therapy)</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Cardiovascular Benefits
                  </h3>
                  <p className="text-muted-foreground">
                    While cardiovascular outcome trials in T1D are limited, the known cardioprotective effects of GLP-1s observed in T2D may extend to T1D patients, particularly those with additional cardiovascular risk factors.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Stethoscope className="h-8 w-8 text-primary" />
                How GLP-1s Work in Type 1 Diabetes
              </h2>
              <p className="text-muted-foreground mb-4">
                Unlike in Type 2 diabetes, GLP-1 medications do not stimulate insulin secretion in T1D patients (since beta cells are non-functional). Instead, their benefits come from:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Delayed Gastric Emptying</h3>
                  <p className="text-muted-foreground text-sm">
                    Slows carbohydrate absorption, reducing postprandial glucose spikes and making insulin timing easier to manage.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Glucagon Suppression</h3>
                  <p className="text-muted-foreground text-sm">
                    Reduces inappropriate glucagon secretion, which contributes to hyperglycemia in T1D patients.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Central Appetite Regulation</h3>
                  <p className="text-muted-foreground text-sm">
                    Reduces hunger and promotes satiety, supporting weight management independent of glucose control.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Improved Insulin Sensitivity</h3>
                  <p className="text-muted-foreground text-sm">
                    Weight loss from GLP-1 therapy improves peripheral insulin sensitivity, reducing total insulin requirements.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Safety Considerations for T1D Patients
              </h2>
              
              <Card className="p-6 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 mb-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Critical DKA Warning</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Never reduce basal insulin doses without endocrinologist guidance. Aggressive insulin reduction while on GLP-1s can precipitate diabetic ketoacidosis (DKA), even with normal blood glucose levels (euglycemic DKA).
                    </p>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Hypoglycemia Risk</h3>
                  <p className="text-muted-foreground text-sm">
                    Delayed gastric emptying can cause insulin-meal timing mismatches. Bolus insulin doses often need reduction by 10-30%. Work with your care team to adjust pre-meal insulin timing and dosing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">GI Side Effects</h3>
                  <p className="text-muted-foreground text-sm">
                    Nausea, vomiting, and delayed gastric emptying may be more pronounced in T1D patients. Learn about <InternalLink to="/blog/glp1-side-effects-management">managing GLP-1 side effects</InternalLink>. Start with the lowest dose and titrate slowly.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Gastroparesis Considerations</h3>
                  <p className="text-muted-foreground text-sm">
                    T1D patients with existing gastroparesis may experience worsening symptoms. GLP-1s are generally not recommended for patients with documented gastroparesis.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                Practical Guidance for T1D Patients
              </h2>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2">1. Work with a Specialized Endocrinologist</h3>
                  <p className="text-muted-foreground text-sm">
                    Off-label GLP-1 use in T1D requires expertise in both T1D management and GLP-1 pharmacology. Your provider should be comfortable adjusting insulin regimens while monitoring for complications.
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2">2. Use Continuous Glucose Monitoring</h3>
                  <p className="text-muted-foreground text-sm">
                    CGM is essential for detecting hypo- and hyperglycemia patterns when adding GLP-1 therapy. Real-time data allows for safer insulin adjustments.
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2">3. Start Low, Go Slow</h3>
                  <p className="text-muted-foreground text-sm">
                    Begin with the lowest available dose and extend titration intervals. Many T1D patients do well on lower-than-standard doses.
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2">4. Monitor Ketones</h3>
                  <p className="text-muted-foreground text-sm">
                    Check blood or urine ketones more frequently, especially if experiencing nausea, vomiting, or reduced appetite that limits food intake.
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
              <h2 className="text-2xl font-bold mb-4">Considering GLP-1 Therapy for Type 1 Diabetes?</h2>
              <p className="text-muted-foreground mb-6">
                Our specialists can discuss whether off-label GLP-1 use might be appropriate for your situation.
              </p>
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation
              </a>
            </Card>
          </div>
        </article>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default GLP1Type1Diabetes;
