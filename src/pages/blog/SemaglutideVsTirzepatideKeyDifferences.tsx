import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitCompare } from "lucide-react";
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

const SemaglutideVsTirzepatideKeyDifferences = () => {
  const clusterNav = getClusterNavigation("/blog/semaglutide-vs-tirzepatide-key-differences");
  const publishDate = "2025-11-11";
  const modifiedDate = getModifiedDate('semaglutide-vs-tirzepatide-key-differences', publishDate);
  const articleContent = "Semaglutide vs Tirzepatide Key Differences Explained comparing mechanisms weight loss results side effects and costs. Both are effective GLP-1 medications for weight loss, but tirzepatide's dual-action mechanism typically produces greater weight loss results. Tirzepatide targets both GIP and GLP-1 receptors.";
  const readingMinutes = calculateReadingTime(articleContent);
  
  const questions = [
    {
      question: "What are the key differences between semaglutide and tirzepatide?",
      answer: "Tirzepatide targets both GIP and GLP-1 receptors (dual action) vs semaglutide targeting only GLP-1. Tirzepatide shows 15-22% weight loss vs 12-15% for semaglutide, with weekly injections for both."
    }
  ];

  const citations = [
    {
      authors: ["Wilding JPH", "Batterham RL", "Calanna S"],
      title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity",
      publication: "New England Journal of Medicine",
      year: "2021",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
      doi: "10.1056/NEJMoa2032183"
    },
    {
      authors: ["Jastreboff AM", "Aronne LJ", "Ahmad NN"],
      title: "Tirzepatide Once Weekly for the Treatment of Obesity",
      publication: "New England Journal of Medicine",
      year: "2022",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
      doi: "10.1056/NEJMoa2206038"
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Semaglutide vs Tirzepatide: Key Differences Explained | Trimi</title>
        <meta name="description" content="Compare semaglutide and tirzepatide side-by-side. Learn the mechanisms, weight loss results, side effects, costs, and which medication is right for you." />
        <meta name="author" content="Trimi Medical Team" />
        <meta name="article:published_time" content={publishDate} />
        <meta name="article:modified_time" content={modifiedDate} />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-vs-tirzepatide-key-differences" />
      </Helmet>
      <QAPageSchema questions={questions} mainEntityName="Semaglutide vs Tirzepatide Comparison" />
      <BlogArticleSchema
        title="Semaglutide vs Tirzepatide: Key Differences Explained"
        description="Compare semaglutide and tirzepatide side-by-side. Learn the mechanisms, weight loss results, side effects, costs, and which medication is right for you."
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        authorName="Trimi Medical Team"
        imageUrl="https://trytrimi.com/og/tirzepatide-vs-semaglutide.jpg"
        url="https://trytrimi.com/blog/semaglutide-vs-tirzepatide-key-differences"
        category="Comparison"
        keywords={["semaglutide", "tirzepatide", "comparison", "weight loss", "GLP-1"]}
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <BlogBreadcrumb category="Comparison" title="Semaglutide vs Tirzepatide: Key Differences" url="/blog/semaglutide-vs-tirzepatide-key-differences" />
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Semaglutide vs Tirzepatide: Key Differences Explained</h1>
            <ReadingTime minutes={readingMinutes} />
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
          </header>
          
          <TableOfContents />
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl">Both are effective GLP-1 medications for weight loss, but tirzepatide&apos;s dual-action mechanism typically produces greater weight loss results.</p>
            
            <h2 id="comparison" className="text-3xl font-bold flex items-center gap-2"><GitCompare className="h-8 w-8 text-primary" />Side-by-Side Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary/20">
                    <th className="border p-3 text-left">Feature</th>
                    <th className="border p-3 text-left">Semaglutide</th>
                    <th className="border p-3 text-left">Tirzepatide</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border p-3 font-semibold">Mechanism</td>
                    <td className="border p-3">GLP-1 receptor agonist</td>
                    <td className="border p-3">GIP + GLP-1 (dual action)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Weight Loss</td>
                    <td className="border p-3">12-15% body weight</td>
                    <td className="border p-3">15-22% body weight</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Dosing</td>
                    <td className="border p-3">Weekly injection</td>
                    <td className="border p-3">Weekly injection</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Common Side Effects</td>
                    <td className="border p-3">Nausea, diarrhea, constipation</td>
                    <td className="border p-3">Similar, slightly higher nausea</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Starting Dose</td>
                    <td className="border p-3">0.25mg weekly</td>
                    <td className="border p-3">2.5mg weekly</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Max Dose</td>
                    <td className="border p-3">2.4mg weekly</td>
                    <td className="border p-3">15mg weekly</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="mechanisms" className="text-3xl font-bold mt-8">How Each Works</h2>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Semaglutide (GLP-1 Only)</h3>
              <ul className="text-sm space-y-2">
                <li>• Mimics GLP-1 hormone naturally produced in gut</li>
                <li>• Slows gastric emptying → increased fullness</li>
                <li>• Reduces appetite through brain signals</li>
                <li>• Improves blood sugar control</li>
              </ul>
            </Card>

            <Card className="p-6 mt-4">
              <h3 className="font-semibold text-lg mb-3">Tirzepatide (GIP + GLP-1)</h3>
              <ul className="text-sm space-y-2">
                <li>• Activates both GIP and GLP-1 receptors (dual action)</li>
                <li>• GIP amplifies insulin secretion and fat metabolism</li>
                <li>• Enhanced appetite suppression from dual pathways</li>
                <li>• Greater overall metabolic impact</li>
              </ul>
            </Card>

            <h2 id="choosing" className="text-3xl font-bold mt-8">Which Should You Choose?</h2>
            
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="font-semibold text-lg mb-3">Consider Semaglutide If:</h3>
              <ul className="text-sm space-y-2">
                <li>• You have a lower BMI or less weight to lose</li>
                <li>• Cost is a primary concern</li>
                <li>• You&apos;re more sensitive to side effects</li>
              </ul>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200 mt-4">
              <h3 className="font-semibold text-lg mb-3">Consider Tirzepatide If:</h3>
              <ul className="text-sm space-y-2">
                <li>• You need maximum weight loss results</li>
                <li>• You have higher BMI or more weight to lose</li>
                <li>• You want dual metabolic benefits</li>
              </ul>
            </Card>

            <CitationList citations={citations} className="mt-8" />
            
            <AuthorBio 
              name="Trimi Medical Team"
              bio="Our team of healthcare professionals specializes in weight management and metabolic health, providing evidence-based information to help you make informed decisions."
            />

            <Card className="p-6 mt-8 bg-muted/50 border-muted">
              <p className="text-sm text-muted-foreground">
                <strong>Medical Disclaimer:</strong> This comparison is for educational purposes only. Consult with your healthcare provider to determine which medication is appropriate for your individual needs.
              </p>
            </Card>
            
            <RelatedArticles articles={[
              { title: "Tirzepatide vs Semaglutide Comparison", url: "/blog/tirzepatide-vs-semaglutide", excerpt: "Detailed comparison of effectiveness.", category: "Comparison" },
              { title: "Switching from Semaglutide to Tirzepatide", url: "/blog/switching-semaglutide-to-tirzepatide", excerpt: "Complete transition guide.", category: "Guide" },
              { title: "GLP-1 Complete Guide", url: "/blog/glp1-complete-guide", excerpt: "Everything about GLP-1 medications.", category: "Education" }
            ]} />
            
            <TopicClusterNav
              topic="GLP-1 Medication Comparisons"
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

export default SemaglutideVsTirzepatideKeyDifferences;
