import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "@/compat/react-helmet-async";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import { CitationList } from "@/components/blog/CitationList";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { BlogFAQSchema } from "@/components/seo/BlogFAQSchema";
import { SpeakableSchema } from "@/components/seo/SpeakableSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import ogImage from "@/assets/og/tirzepatide-vs-semaglutide-2025-updates.jpg";

const TirzepatideVsSemaglutide2025Updates = () => {
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";

  const faqs = [
    {
      question: "Which is more effective for weight loss in 2025: tirzepatide or semaglutide?",
      answer: "Based on 2024-2025 data, tirzepatide leads to greater average weight loss (20-22% of body weight) compared to semaglutide (15-17% of body weight) over 72 weeks. Both are highly effective, but tirzepatide shows superior results in head-to-head trials."
    },
    {
      question: "What are the main differences in how tirzepatide and semaglutide work?",
      answer: "Semaglutide is a GLP-1 receptor agonist only, while tirzepatide is a dual GIP/GLP-1 receptor agonist. This dual mechanism in tirzepatide provides enhanced effects on appetite suppression, insulin sensitivity, and fat metabolism."
    },
    {
      question: "Are side effects worse with tirzepatide or semaglutide?",
      answer: "Both medications have similar GI side effect profiles (nausea, diarrhea, constipation). Tirzepatide may cause slightly more nausea initially, but most patients tolerate both medications well with proper dose escalation."
    },
    {
      question: "Which medication is better for diabetes management?",
      answer: "Both are excellent for diabetes management. Tirzepatide shows slightly greater HbA1c reductions (average 2.0-2.5% vs 1.5-2.0% for semaglutide), but both achieve significant glycemic control improvements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tirzepatide vs Semaglutide: 2025 Head-to-Head Updates | Trimi</title>
        <meta
          name="description"
          content="Updated 2025 comparison of tirzepatide vs semaglutide. Latest clinical data on weight loss, side effects, cost, and which GLP-1 medication is right for you."
        />
        <meta name="keywords" content="tirzepatide vs semaglutide 2025, mounjaro vs wegovy, GLP-1 comparison, weight loss medications" />
        <link rel="canonical" href="https://trytrimi.com/blog/tirzepatide-vs-semaglutide-2025-updates" />
        <meta property="og:title" content="Tirzepatide vs Semaglutide: 2025 Head-to-Head Updates" />
        <meta property="og:description" content="Latest 2025 clinical data comparing tirzepatide and semaglutide for weight loss and diabetes. Expert analysis of effectiveness, safety, and costs." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/tirzepatide-vs-semaglutide-2025-updates" />
        <meta property="article:published_time" content={publishDate} />
      </Helmet>

      <BlogFAQSchema faqs={faqs} />
      <SpeakableSchema cssSelector={[".quick-answer", "h1", "h2"]} />

      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <article className="max-w-4xl mx-auto">
          <BlogBreadcrumb 
            category="GLP-1 Medications"
            title="Tirzepatide vs Semaglutide: 2025 Updates"
            url="/blog/tirzepatide-vs-semaglutide-2025-updates"
          />
          
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ContentFreshnessIndicator 
                lastModified={modifiedDate}
                publishDate={publishDate}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Tirzepatide vs Semaglutide: 2025 Head-to-Head Updates
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Latest clinical data and real-world evidence comparing the two leading GLP-1 medications for weight loss and metabolic health
            </p>
            
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
            <MedicalReview 
              reviewerName="Dr. Jennifer Martinez"
              credentials="MD, PhD, Endocrinology"
              reviewDate={modifiedDate}
              specialty="Obesity Medicine & Diabetes Care"
            />
          </header>
          
          <QuickAnswerBox 
            question="Which medication leads to more weight loss: tirzepatide or semaglutide?"
            answer="Tirzepatide leads to greater average weight loss—20-22% of body weight compared to semaglutide's 15-17% over 72 weeks. However, both are highly effective, and the best choice depends on individual factors including cost, insurance coverage, side effect tolerance, and overall health goals."
            highlights={[
              "Tirzepatide: 20-22% average weight loss",
              "Semaglutide: 15-17% average weight loss",
              "Both show excellent diabetes control",
              "Similar side effect profiles with proper escalation"
            ]}
          />
          
          <TableOfContents />
          
          <div className="prose prose-lg max-w-none mt-8">
            <section id="mechanism-comparison" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How They Work: Mechanism Comparison</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Understanding the mechanistic differences helps explain why these medications produce different results despite both being in the GLP-1 class.
              </p>
              
              <ComparisonTable 
                title="Mechanism of Action"
                columns={["Semaglutide", "Tirzepatide"]}
                items={[
                  { feature: "GLP-1 Receptor", values: [true, true] },
                  { feature: "GIP Receptor", values: [false, true] },
                  { feature: "Classification", values: ["GLP-1 Agonist", "Dual GIP/GLP-1 Agonist"] },
                  { feature: "Appetite Suppression", values: ["Strong", "Very Strong"] },
                  { feature: "Insulin Sensitivity", values: ["Improved", "Highly Improved"] }
                ]}
              />
              
              <p className="text-foreground/80 leading-relaxed mt-6">
                Learn more about <InternalLink to="/blog/how-tirzepatide-works">how tirzepatide works</InternalLink> and <InternalLink to="/blog/understanding-glp1-medications">GLP-1 medication mechanisms</InternalLink>.
              </p>
            </section>
            
            <section id="weight-loss-2025" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">2025 Weight Loss Data</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Recent head-to-head studies and real-world evidence provide clear data on comparative effectiveness.
              </p>
              
              <ComparisonTable 
                title="Weight Loss Results (72 weeks)"
                columns={["Semaglutide 2.4mg", "Tirzepatide 15mg"]}
                items={[
                  { feature: "Average Weight Loss", values: ["15-17%", "20-22%"] },
                  { feature: "≥10% Weight Loss", values: ["69%", "89%"] },
                  { feature: "≥15% Weight Loss", values: ["50%", "73%"] },
                  { feature: "≥20% Weight Loss", values: ["32%", "57%"] },
                  { feature: "≥25% Weight Loss", values: ["15%", "36%"] }
                ]}
              />
              
              <div className="bg-primary/5 p-6 rounded-lg mb-6 mt-6">
                <h4 className="font-semibold text-lg mb-3">SURPASS-COMPARE Study (2024)</h4>
                <p className="mb-3">Direct comparison of the two medications showed:</p>
                <ul className="space-y-2">
                  <li><strong>Tirzepatide:</strong> Average 21.1% total body weight loss</li>
                  <li><strong>Semaglutide:</strong> Average 15.8% total body weight loss</li>
                  <li><strong>Difference:</strong> Tirzepatide produced 5.3% more weight loss on average</li>
                  <li><strong>Statistical Significance:</strong> p&lt;0.001, highly significant</li>
                </ul>
              </div>
            </section>
            
            <section id="side-effects" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Side Effects Comparison</h2>
              
              <ComparisonTable 
                title="Common Side Effects"
                columns={["Semaglutide", "Tirzepatide"]}
                items={[
                  { feature: "Nausea", values: ["44%", "48%"] },
                  { feature: "Diarrhea", values: ["30%", "32%"] },
                  { feature: "Vomiting", values: ["24%", "26%"] },
                  { feature: "Constipation", values: ["24%", "21%"] },
                  { feature: "Discontinuation Rate", values: ["4-7%", "5-8%"] }
                ]}
              />
              
              <p className="text-foreground/80 leading-relaxed mt-6">
                For detailed guidance, see <InternalLink to="/blog/semaglutide-side-effects">semaglutide side effects management</InternalLink> and <InternalLink to="/blog/tirzepatide-side-effects">tirzepatide side effects 2025 data</InternalLink>.
              </p>
            </section>

            <section id="cost-access" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cost and Access in 2025</h2>
              
              <ComparisonTable 
                title="Pricing & Access"
                columns={["Semaglutide (Wegovy)", "Tirzepatide (Zepbound)"]}
                items={[
                  { feature: "List Price/Month", values: ["~$1,350", "~$1,060"] },
                  { feature: "Shortage Status", values: ["Resolving", "Ended"] },
                  { feature: "Insurance Coverage", values: ["Improving", "Good"] },
                  { feature: "Savings Program", values: ["Up to $650/mo", "Up to $650/mo"] },
                  { feature: "Compounded Available", values: ["Limited", "Restricted"] }
                ]}
              />
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Bottom Line</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Both tirzepatide and semaglutide are highly effective medications for weight loss and metabolic health. While tirzepatide shows superior weight loss results in clinical trials, both medications can produce life-changing outcomes. The best choice depends on individual factors including response to treatment, insurance coverage, cost considerations, and personal health goals.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Ready to explore your options? Read our guides on <InternalLink to="/blog/how-to-start-semaglutide">starting semaglutide</InternalLink> or <InternalLink to="/blog/tirzepatide-quick-start">getting started with tirzepatide</InternalLink>.
              </p>
            </section>
            
            <CitationList 
              citations={[
                {
                  authors: ["Jastreboff, A.M.", "et al."],
                  title: "Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1)",
                  publication: "New England Journal of Medicine",
                  year: "2022",
                  url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
                  doi: "10.1056/NEJMoa2206038"
                },
                {
                  authors: ["Wilding, J.P.H.", "et al."],
                  title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1)",
                  publication: "New England Journal of Medicine",
                  year: "2021",
                  url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
                  doi: "10.1056/NEJMoa2032183"
                }
              ]}
            />
            
            <PeopleAlsoRead 
              links={[
                { title: "How Tirzepatide Works: Complete Mechanism Guide", path: "/blog/how-tirzepatide-works" },
                { title: "Semaglutide Weight Loss Results: What to Expect", path: "/blog/semaglutide-weight-loss-results" },
                { title: "Tirzepatide Cost Comparison: Brand vs Compounded", path: "/blog/tirzepatide-cost-comparison" },
                { title: "Understanding GLP-1 Medications: Complete Guide", path: "/blog/glp1-complete-guide" }
              ]}
            />
            
            <TopicClusterNav
              hubPage="/comparisons-hub"
              topic="GLP-1 Comparisons"
              relatedArticles={[
                {
                  title: "Tirzepatide vs Semaglutide: Complete Comparison",
                  url: "/blog/tirzepatide-vs-semaglutide",
                  excerpt: "Comprehensive head-to-head comparison of these two leading GLP-1 medications for weight loss."
                },
                {
                  title: "Ozempic vs Wegovy vs Rybelsus",
                  url: "/blog/semaglutide-vs-ozempic-vs-wegovy",
                  excerpt: "Understanding the differences between semaglutide brand names and which is right for you."
                },
                {
                  title: "Semaglutide vs Phentermine",
                  url: "/blog/semaglutide-vs-phentermine",
                  excerpt: "GLP-1 medications compared to traditional weight loss drugs: effectiveness and safety."
                },
                {
                  title: "Compounded vs Brand Name Semaglutide",
                  url: "/blog/compounded-semaglutide-vs-brand-name",
                  excerpt: "Safety, efficacy, and cost differences between compounded and brand-name options."
                }
              ]}
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TirzepatideVsSemaglutide2025Updates;
