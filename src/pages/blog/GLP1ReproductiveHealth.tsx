import { Helmet } from "@/compat/react-helmet-async";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Baby, Heart, HeartPulse, Shield, Stethoscope, Users, Clock } from "lucide-react";

const GLP1ReproductiveHealth = () => {
  const defined = {
    title: "GLP-1 Drugs and Reproductive Health: Fertility, Pregnancy, and Safety",
    description: "Essential guide to GLP-1 medications and reproductive health. Learn about effects on fertility, pregnancy considerations, and safety guidelines for women planning families.",
    slug: "glp1-reproductive-health",
    publishedDate: "2024-12-05",
    modifiedDate: "2024-12-05",
    author: "Trimi Medical Team",
    medicalReviewer: "Dr. Rachel Kim, OB/GYN",
    readTime: "13 min read",
    category: "Safety & Monitoring",
    keywords: [
      "GLP-1 and fertility",
      "semaglutide pregnancy",
      "tirzepatide reproduction effects",
      "GLP-1 safety women",
      "weight loss medication pregnancy"
    ]
  };

  const faqItems = [
    {
      question: "Can I take GLP-1 medications while trying to conceive?",
      answer: "GLP-1 medications should be stopped at least 2 months before attempting conception (semaglutide) or 1 month before (tirzepatide). While weight loss from GLP-1s can improve fertility, the medications themselves should not be taken during active attempts to conceive due to limited safety data."
    },
    {
      question: "What happens if I get pregnant while on semaglutide or tirzepatide?",
      answer: "If you discover you are pregnant while taking a GLP-1 medication, stop the medication immediately and contact your healthcare provider. While the absolute risk is unclear, animal studies have shown potential developmental effects, prompting recommendations to avoid use during pregnancy."
    },
    {
      question: "Do GLP-1 medications affect fertility?",
      answer: "GLP-1 medications can actually improve fertility indirectly by promoting weight loss, which helps regulate hormones in conditions like PCOS. However, there are concerns about potential effects on ovarian function during active treatment, which is why stopping before conception is recommended."
    },
    {
      question: "Can I breastfeed while taking GLP-1 medications?",
      answer: "GLP-1 medications are not recommended during breastfeeding due to limited data on excretion in breast milk and potential effects on infant development. Discuss timing of resuming treatment with your healthcare provider after completing breastfeeding."
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
            hubPage="/blog/safety-monitoring-hub"
            relatedArticles={[
              { title: "GLP-1 Long-Term Safety", url: "/blog/glp1-long-term-effects-maintenance", excerpt: "Long-term safety considerations" },
              { title: "Managing Side Effects", url: "/blog/glp1-side-effects-management", excerpt: "How to manage common side effects" }
            ]}
          />

          <div className="prose prose-lg max-w-none">
            <Card className="p-6 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Important Safety Notice</h4>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    GLP-1 medications (semaglutide, tirzepatide) are contraindicated during pregnancy and breastfeeding. If you are planning pregnancy or discover you are pregnant, discontinue medication immediately and contact your healthcare provider.
                  </p>
                </div>
              </div>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                Understanding GLP-1s and Reproductive Health
              </h2>
              <p className="text-muted-foreground mb-4">
                As <InternalLink to="/semaglutide-guide">semaglutide</InternalLink> and <InternalLink to="/tirzepatide-guide">tirzepatide</InternalLink> have become increasingly popular for weight management, questions about their effects on reproductive health have grown. This is especially important given that many women of reproductive age use these medications.
              </p>
              <p className="text-muted-foreground mb-4">
                This guide covers the latest 2025 research on GLP-1 medications and fertility, pregnancy considerations, and practical guidance for women planning families.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <HeartPulse className="h-8 w-8 text-primary" />
                Effects on Fertility
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Potential Fertility Benefits</h3>
                  <p className="text-green-700 dark:text-green-300 mb-3">
                    Weight loss from GLP-1 therapy can significantly improve fertility in several ways:
                  </p>
                  <ul className="text-green-700 dark:text-green-300 space-y-2 text-sm">
                    <li>• <strong>PCOS improvement:</strong> Weight loss of 5-10% can restore ovulation in many women with PCOS</li>
                    <li>• <strong>Hormone regulation:</strong> Reduced body fat leads to more balanced estrogen and progesterone levels</li>
                    <li>• <strong>Improved insulin sensitivity:</strong> Better metabolic health supports reproductive function</li>
                    <li>• <strong>IVF success:</strong> Studies show improved IVF outcomes at healthier BMIs</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">Potential Concerns</h3>
                  <p className="text-amber-700 dark:text-amber-300 mb-3">
                    There are theoretical concerns about GLP-1 effects on reproductive function:
                  </p>
                  <ul className="text-amber-700 dark:text-amber-300 space-y-2 text-sm">
                    <li>• <strong>Ovarian function:</strong> 2025 research suggests possible effects on ovarian hormone production during treatment</li>
                    <li>• <strong>Rapid weight loss:</strong> Very rapid weight loss can temporarily disrupt menstrual cycles</li>
                    <li>• <strong>Nutritional status:</strong> Reduced appetite may affect nutrient intake important for conception</li>
                    <li>• <strong>Limited human data:</strong> Long-term effects on human fertility are still being studied</li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 mt-6">
                <h3 className="font-semibold mb-3">The "Ozempic Baby" Phenomenon</h3>
                <p className="text-muted-foreground">
                  Many women have reported unexpected pregnancies while on GLP-1 medications, sometimes called "Ozempic babies." This likely reflects improved fertility from weight loss rather than a direct medication effect. Important considerations:
                </p>
                <ul className="text-muted-foreground mt-3 space-y-1 text-sm">
                  <li>• GLP-1s may reduce effectiveness of oral contraceptives due to slowed absorption</li>
                  <li>• Women not using reliable contraception should monitor for pregnancy signs</li>
                  <li>• Improved metabolic health can restore ovulation in previously anovulatory women</li>
                </ul>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Baby className="h-8 w-8 text-primary" />
                Pregnancy Considerations
              </h2>
              
              <Card className="p-6 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 mb-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">FDA Pregnancy Category</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Both semaglutide and tirzepatide are labeled as contraindicated during pregnancy. Animal studies have shown adverse effects on embryo-fetal development. Human data is limited.
                    </p>
                  </div>
                </div>
              </Card>

              <h3 className="text-xl font-semibold mb-4">What Animal Studies Show</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Semaglutide Studies</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Reduced fetal growth at high doses</li>
                    <li>• Skeletal abnormalities in some studies</li>
                    <li>• Effects seen at doses comparable to human therapeutic levels</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Tirzepatide Studies</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Similar developmental concerns</li>
                    <li>• Reduced fetal weight observed</li>
                    <li>• Limited data compared to semaglutide</li>
                  </ul>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mb-4">What Human Data Shows</h3>
              <p className="text-muted-foreground mb-4">
                Human pregnancy data is limited but growing. Pregnancy registries and case reports show:
              </p>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>• Most reported inadvertent exposures in early pregnancy have not shown clear signals of harm</li>
                <li>• Data is insufficient to make definitive safety conclusions</li>
                <li>• The recommendation remains to avoid use during pregnancy out of caution</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                Planning for Pregnancy: Washout Periods
              </h2>
              
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2">Semaglutide (Wegovy/Ozempic)</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong>Recommended washout:</strong> At least 2 months before conception
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Semaglutide has a long half-life (~7 days) and takes several weeks to clear from the body completely. The 2-month recommendation provides a safety margin for complete elimination.
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2">Tirzepatide (Mounjaro/Zepbound)</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong>Recommended washout:</strong> At least 1 month before conception
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Tirzepatide has a similar half-life (~5 days). The shorter recommended washout reflects less accumulated data, so some providers recommend longer periods.
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2">Liraglutide (Saxenda/Victoza)</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong>Recommended washout:</strong> At least 2 months before conception
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Despite daily dosing, liraglutide also requires adequate washout time before pregnancy attempts.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                Practical Guidance for Women
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">If You Are Planning Pregnancy</h3>
                  <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                    <li>Discuss your timeline with your healthcare provider</li>
                    <li>Stop GLP-1 medication at least 2 months before trying to conceive</li>
                    <li>Focus on maintaining weight loss through lifestyle during washout</li>
                    <li>Start prenatal vitamins (especially folate) before conception</li>
                    <li>Develop a plan for weight management during pregnancy</li>
                  </ol>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">If You Discover You Are Pregnant While on GLP-1</h3>
                  <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                    <li><strong>Stop the medication immediately</strong></li>
                    <li>Contact your healthcare provider right away</li>
                    <li>Schedule early prenatal care</li>
                    <li>Consider additional fetal monitoring if early exposure occurred</li>
                    <li>Do not panic—most inadvertent exposures have shown reassuring outcomes</li>
                  </ol>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Contraception Considerations</h3>
                  <p className="text-muted-foreground mb-3">
                    If you are not planning pregnancy while on GLP-1 therapy:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Consider non-oral contraception (IUD, implant, injection, ring, patch)</li>
                    <li>• If using oral contraceptives, use backup methods during GI symptoms</li>
                    <li>• Be aware that improved fertility from weight loss may increase pregnancy risk</li>
                    <li>• Discuss contraception options with your provider</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                After Pregnancy: When Can You Resume?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">If Not Breastfeeding</h3>
                  <p className="text-muted-foreground text-sm">
                    GLP-1 medications can typically be resumed after delivery once you are medically stable. Discuss timing with your provider based on your health status and weight management goals.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">If Breastfeeding</h3>
                  <p className="text-muted-foreground text-sm">
                    GLP-1 medications are not recommended during breastfeeding due to unknown effects on infant development. Wait until breastfeeding is completed before resuming treatment.
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
              <h2 className="text-2xl font-bold mb-4">Planning Your Family and Weight Loss Journey?</h2>
              <p className="text-muted-foreground mb-6">
                Our medical team can help you create a personalized plan that aligns with your reproductive goals.
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

export default GLP1ReproductiveHealth;
