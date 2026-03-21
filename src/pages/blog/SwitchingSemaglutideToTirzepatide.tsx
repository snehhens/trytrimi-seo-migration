import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightLeft, AlertTriangle } from "lucide-react";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { BlogArticleSchema } from "@/components/seo/BlogArticleSchema";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { ReadingTime } from "@/components/blog/ReadingTime";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { CitationList } from "@/components/blog/CitationList";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { calculateReadingTime } from "@/utils/readingTime";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SwitchingSemaglutideToTirzepatide = () => {
  const clusterNav = getClusterNavigation("/blog/switching-semaglutide-to-tirzepatide");
  const publishDate = "2025-11-11";
  const modifiedDate = getModifiedDate('switching-semaglutide-to-tirzepatide', publishDate);
  const articleContent = "Switching from Semaglutide to Tirzepatide What You Need to Know dosing protocols timeline expectations managing side effects. Transitioning from semaglutide to tirzepatide requires careful planning and medical supervision to optimize results and minimize side effects. Start with 1.5mg tirzepatide after consulting your doctor.";
  const readingMinutes = calculateReadingTime(articleContent);
  
  const questions = [
    {
      question: "How do I switch from semaglutide to tirzepatide safely?",
      answer: "Consult your doctor, start tirzepatide at 1.5mg after your last semaglutide dose, expect an adjustment period with possible increased side effects, and monitor your response over 4-8 weeks."
    }
  ];

  const citations = [
    {
      authors: ["Frias JP", "Davies MJ", "Rosenstock J"],
      title: "Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes",
      publication: "New England Journal of Medicine",
      year: "2021",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519",
      doi: "10.1056/NEJMoa2107519"
    },
    {
      authors: ["Lingvay I", "Catarig AM", "Frias JP"],
      title: "Efficacy and safety of once-weekly semaglutide versus daily canagliflozin as add-on to metformin",
      publication: "Diabetes Care",
      year: "2020",
      url: "https://diabetesjournals.org/care/article/43/9/2074/35761",
      doi: "10.2337/dc19-2149"
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Switching from Semaglutide to Tirzepatide: Complete Guide | Trimi</title>
        <meta name="description" content="Learn how to safely switch from semaglutide to tirzepatide. Dosing protocols, timeline, what to expect, managing side effects, and maximizing results." />
        <meta name="author" content="Trimi Medical Team" />
        <meta name="article:published_time" content={publishDate} />
        <meta name="article:modified_time" content={modifiedDate} />
        <link rel="canonical" href="https://trytrimi.com/blog/switching-semaglutide-to-tirzepatide" />
      </Helmet>
      <QAPageSchema questions={questions} mainEntityName="Switching to Tirzepatide" />
      <BlogArticleSchema
        title="Switching from Semaglutide to Tirzepatide: Complete Guide"
        description="Learn how to safely switch from semaglutide to tirzepatide. Dosing protocols, timeline, what to expect, managing side effects, and maximizing results."
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        authorName="Trimi Medical Team"
        imageUrl="https://trytrimi.com/og/tirzepatide-vs-semaglutide.jpg"
        url="https://trytrimi.com/blog/switching-semaglutide-to-tirzepatide"
        category="Guide"
        keywords={["switching medications", "tirzepatide", "semaglutide", "transition", "dosing"]}
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <BlogBreadcrumb category="Guide" title="Switching from Semaglutide to Tirzepatide" url="/blog/switching-semaglutide-to-tirzepatide" />
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Switching from Semaglutide to Tirzepatide: What You Need to Know</h1>
            <ReadingTime minutes={readingMinutes} />
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
          </header>
          
          <TableOfContents />
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl">Transitioning from semaglutide to tirzepatide requires careful planning and medical supervision to optimize results and minimize side effects.</p>
            
            <h2 id="why-switch" className="text-3xl font-bold flex items-center gap-2"><ArrowRightLeft className="h-8 w-8 text-primary" />Why People Switch</h2>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Common Reasons for Switching</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Weight Loss Plateau:</strong> Reached limit on semaglutide</li>
                <li>• <strong>Need Greater Results:</strong> Tirzepatide shows higher weight loss (15-22% vs 12-15%)</li>
                <li>• <strong>Dual Mechanism:</strong> Benefit from GIP + GLP-1 action</li>
                <li>• <strong>Doctor Recommendation:</strong> Clinical assessment suggests better outcome</li>
              </ul>
            </Card>

            <h2 id="protocol" className="text-3xl font-bold mt-8">Step-by-Step Switching Protocol</h2>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Recommended Transition Process</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Step 1:</strong> Consult with your prescribing doctor (required)</div>
                <div><strong>Step 2:</strong> Take your last semaglutide dose as scheduled</div>
                <div><strong>Step 3:</strong> Wait 1 week after last semaglutide injection</div>
                <div><strong>Step 4:</strong> Start tirzepatide at 1.5mg (starter dose)</div>
                <div><strong>Step 5:</strong> Follow standard tirzepatide titration schedule</div>
                <div><strong>Step 6:</strong> Monitor response and side effects for 4-8 weeks</div>
              </div>
            </Card>

            <h2 id="expectations" className="text-3xl font-bold mt-8 flex items-center gap-2"><AlertTriangle className="h-8 w-8 text-primary" />What to Expect During Transition</h2>
            
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <h3 className="font-semibold text-lg mb-3">Adjustment Period (Weeks 1-4)</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Side Effects:</strong> May be stronger initially (nausea, fatigue)</li>
                <li>• <strong>Appetite Changes:</strong> Enhanced suppression with dual action</li>
                <li>• <strong>Weight Loss:</strong> Often accelerates after 2-3 weeks</li>
                <li>• <strong>Energy Levels:</strong> May fluctuate during adjustment</li>
              </ul>
            </Card>

            <h2 id="dosing" className="text-3xl font-bold mt-8">Dosing Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary/20">
                    <th className="border p-3 text-left">Week</th>
                    <th className="border p-3 text-left">Previous (Semaglutide)</th>
                    <th className="border p-3 text-left">New (Tirzepatide)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Last dose</td>
                    <td className="border p-3">Your current dose (e.g., 1.0mg)</td>
                    <td className="border p-3">—</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Week 1</td>
                    <td className="border p-3">None (washout)</td>
                    <td className="border p-3">Start 2.5mg</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Weeks 2-5</td>
                    <td className="border p-3">—</td>
                    <td className="border p-3">2.5mg (continue)</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Week 6+</td>
                    <td className="border p-3">—</td>
                    <td className="border p-3">Increase to 5mg (if tolerated)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="managing" className="text-3xl font-bold mt-8">Managing the Switch</h2>
            
            <ul className="space-y-2">
              <li>• <strong>Start Low:</strong> Always begin with 1.5mg tirzepatide regardless of previous semaglutide dose</li>
              <li>• <strong>Track Symptoms:</strong> Journal side effects and weight loss progress</li>
              <li>• <strong>Stay Hydrated:</strong> Drink 64+ oz water daily</li>
              <li>• <strong>Eat Small Meals:</strong> 4-6 small meals help manage nausea</li>
              <li>• <strong>Follow Up:</strong> Check in with doctor at 4 weeks</li>
            </ul>

            <CitationList citations={citations} className="mt-8" />
            
            <AuthorBio 
              name="Trimi Medical Team"
              bio="Our team of healthcare professionals specializes in weight management and metabolic health, providing evidence-based guidance for medication transitions."
            />

            <Card className="p-6 mt-8 bg-muted/50 border-muted">
              <p className="text-sm text-muted-foreground">
                <strong>Medical Disclaimer:</strong> Always consult with your healthcare provider before switching medications. This guide is for informational purposes only and does not replace medical advice.
              </p>
            </Card>
            
            <RelatedArticles articles={[
              { title: "Semaglutide vs Tirzepatide: Key Differences", url: "/blog/semaglutide-vs-tirzepatide-key-differences", excerpt: "Compare both medications side-by-side.", category: "Comparison" },
              { title: "Tirzepatide Dosage Guide", url: "/blog/tirzepatide-dosage-guide", excerpt: "Complete dosing protocol.", category: "Guide" },
              { title: "Kickstarting Your Journey: Semaglutide Basics", url: "/blog/kickstarting-semaglutide-basics", excerpt: "Semaglutide fundamentals.", category: "Guide" }
            ]} />
            
            <TopicClusterNav
              topic="Medication Transitions"
              relatedArticles={clusterNav.relatedInCluster}
              hubPage="/blog/glp1-complete-guide"
            />
          </div>
          <div className="mt-12"><Button asChild size="lg"><Link to="/treatments">Get Started with Trimi</Link></Button></div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default SwitchingSemaglutideToTirzepatide;
