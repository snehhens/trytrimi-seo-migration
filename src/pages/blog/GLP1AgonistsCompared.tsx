import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
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

const GLP1AgonistsCompared = () => {
  const publishDate = "2025-11-11";
  const modifiedDate = getModifiedDate('glp1-agonists-compared', publishDate);
  const articleContent = "GLP-1 Agonists Compared Semaglutide Tirzepatide and More comprehensive comparison effectiveness side effects costs dosing. A comprehensive comparison of all major GLP-1 receptor agonists for weight loss including tirzepatide semaglutide liraglutide dulaglutide and exenatide helping you understand which medication best fits your needs.";
  const readingMinutes = calculateReadingTime(articleContent);
  const clusterNav = getClusterNavigation('glp1-agonists-compared');
  
  const questions = [
    {
      question: "What are the main differences between GLP-1 medications?",
      answer: "Semaglutide (GLP-1 only, 12-15% weight loss), tirzepatide (GIP+GLP-1, 15-22% weight loss), liraglutide (daily injection, 8-12% weight loss), and dulaglutide (weekly, similar to semaglutide). All work through appetite suppression and blood sugar control."
    }
  ];

  const citations = [
    {
      authors: ["Nauck MA", "Quast DR", "Wefers J", "Meier JJ"],
      title: "GLP-1 receptor agonists in the treatment of type 2 diabetes - state-of-the-art",
      publication: "Molecular Metabolism",
      year: "2021",
      url: "https://www.sciencedirect.com/science/article/pii/S2212877820301642",
      doi: "10.1016/j.molmet.2020.101102"
    },
    {
      authors: ["Jastreboff AM", "Aronne LJ", "Ahmad NN"],
      title: "Tirzepatide Once Weekly for the Treatment of Obesity",
      publication: "New England Journal of Medicine",
      year: "2022",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
      doi: "10.1056/NEJMoa2206038"
    },
    {
      authors: ["Pi-Sunyer X", "Astrup A", "Fujioka K"],
      title: "A Randomized, Controlled Trial of 3.0 mg of Liraglutide in Weight Management",
      publication: "New England Journal of Medicine",
      year: "2015",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1411892",
      doi: "10.1056/NEJMoa1411892"
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>GLP-1 Agonists Compared: Semaglutide, Tirzepatide, and More | Trimi</title>
        <meta name="description" content="Complete comparison of GLP-1 medications: semaglutide, tirzepatide, liraglutide, and dulaglutide. Compare effectiveness, side effects, costs, and dosing." />
        <meta name="author" content="Trimi Medical Team" />
        <meta name="article:published_time" content={publishDate} />
        <meta name="article:modified_time" content={modifiedDate} />
        <link rel="canonical" href="https://trytrimi.com/blog/glp1-agonists-compared" />
      </Helmet>
      <QAPageSchema questions={questions} mainEntityName="GLP-1 Agonists Comparison" />
      <BlogArticleSchema
        title="GLP-1 Agonists Compared: Semaglutide, Tirzepatide, and More"
        description="Complete comparison of GLP-1 medications: semaglutide, tirzepatide, liraglutide, and dulaglutide. Compare effectiveness, side effects, costs, and dosing."
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        authorName="Trimi Medical Team"
        imageUrl="https://trytrimi.com/og/understanding-glp1-medications.jpg"
        url="https://trytrimi.com/blog/glp1-agonists-compared"
        category="Education"
        keywords={["GLP-1", "semaglutide", "tirzepatide", "liraglutide", "comparison", "weight loss"]}
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <BlogBreadcrumb category="Education" title="GLP-1 Agonists Compared" url="/blog/glp1-agonists-compared" />
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GLP-1 Agonists Compared: Semaglutide, Tirzepatide, and More</h1>
            <ReadingTime minutes={readingMinutes} />
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
          </header>
          
          <TableOfContents />
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl">A comprehensive comparison of all major GLP-1 receptor agonists for weight loss, helping you understand which medication best fits your needs.</p>
            
            <h2 id="comparison" className="text-3xl font-bold flex items-center gap-2"><BarChart3 className="h-8 w-8 text-primary" />Complete Medication Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary/20">
                    <th className="border p-3 text-left">Medication</th>
                    <th className="border p-3 text-left">Type</th>
                    <th className="border p-3 text-left">Dosing</th>
                    <th className="border p-3 text-left">Weight Loss</th>
                    <th className="border p-3 text-left">Brand Names</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-semibold">Tirzepatide</td>
                    <td className="border p-3">GIP + GLP-1</td>
                    <td className="border p-3">Weekly injection</td>
                    <td className="border p-3">15-22%</td>
                    <td className="border p-3">Mounjaro, Zepbound</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Semaglutide</td>
                    <td className="border p-3">GLP-1 only</td>
                    <td className="border p-3">Weekly injection</td>
                    <td className="border p-3">12-15%</td>
                    <td className="border p-3">Ozempic, Wegovy</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Liraglutide</td>
                    <td className="border p-3">GLP-1 only</td>
                    <td className="border p-3">Daily injection</td>
                    <td className="border p-3">8-12%</td>
                    <td className="border p-3">Saxenda, Victoza</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Dulaglutide</td>
                    <td className="border p-3">GLP-1 only</td>
                    <td className="border p-3">Weekly injection</td>
                    <td className="border p-3">10-13%</td>
                    <td className="border p-3">Trulicity</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Exenatide</td>
                    <td className="border p-3">GLP-1 only</td>
                    <td className="border p-3">Daily or weekly</td>
                    <td className="border p-3">6-10%</td>
                    <td className="border p-3">Byetta, Bydureon</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="profiles" className="text-3xl font-bold mt-8">Detailed Medication Profiles</h2>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Tirzepatide (Most Effective)</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Mechanism:</strong> Dual GIP + GLP-1 receptor agonist</li>
                <li>• <strong>Pros:</strong> Highest weight loss, weekly dosing, improved metabolic markers</li>
                <li>• <strong>Cons:</strong> Higher cost, stronger side effects initially</li>
                <li>• <strong>Best For:</strong> Maximum weight loss, higher BMI</li>
              </ul>
            </Card>

            <Card className="p-6 mt-4">
              <h3 className="font-semibold text-lg mb-3">Semaglutide (Balanced Choice)</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Mechanism:</strong> GLP-1 receptor agonist only</li>
                <li>• <strong>Pros:</strong> Excellent efficacy, weekly dosing, well-studied</li>
                <li>• <strong>Cons:</strong> GI side effects, requires titration</li>
                <li>• <strong>Best For:</strong> Reliable results, moderate weight loss goals</li>
              </ul>
            </Card>

            <Card className="p-6 mt-4">
              <h3 className="font-semibold text-lg mb-3">Liraglutide (Daily Option)</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Mechanism:</strong> GLP-1 receptor agonist</li>
                <li>• <strong>Pros:</strong> Long track record, flexible dosing control</li>
                <li>• <strong>Cons:</strong> Daily injections, lower weight loss than newer options</li>
                <li>• <strong>Best For:</strong> Those preferring daily dosing, FDA-approved longest</li>
              </ul>
            </Card>

            <h2 id="choosing" className="text-3xl font-bold mt-8">How to Choose the Right GLP-1</h2>
            
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="font-semibold text-lg mb-3">Decision Factors</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Weight Loss Goals:</strong> Higher goals → Tirzepatide; Moderate → Semaglutide</li>
                <li>• <strong>Injection Preference:</strong> Weekly preferred by most patients</li>
                <li>• <strong>Cost Considerations:</strong> Compounded versions more affordable</li>
                <li>• <strong>Side Effect Sensitivity:</strong> Start with lower-dose options</li>
                <li>• <strong>Medical History:</strong> Discuss with provider for personalized choice</li>
              </ul>
            </Card>

            <h2 id="side-effects" className="text-3xl font-bold mt-8">Common Side Effects Across All GLP-1s</h2>
            <ul className="space-y-2">
              <li>• Nausea (most common, usually temporary)</li>
              <li>• Diarrhea or constipation</li>
              <li>• Decreased appetite</li>
              <li>• Fatigue (especially during titration)</li>
              <li>• Injection site reactions</li>
            </ul>

            <CitationList citations={citations} className="mt-8" />
            
            <AuthorBio 
              name="Trimi Medical Team"
              bio="Our team of healthcare professionals specializes in weight management and metabolic health, providing comprehensive, evidence-based information about GLP-1 medications."
            />

            <Card className="p-6 mt-8 bg-muted/50 border-muted">
              <p className="text-sm text-muted-foreground">
                <strong>Medical Disclaimer:</strong> This comparison is for educational purposes only. Consult with your healthcare provider to determine which GLP-1 medication is appropriate for your individual health needs.
              </p>
            </Card>
            
            <TopicClusterNav
              hubPage={clusterNav.hubPage}
              relatedArticles={clusterNav.relatedInCluster}
              topic="GLP-1 Medications"
            />

            <RelatedArticles articles={[
              { title: "GLP-1 Complete Guide", url: "/blog/glp1-complete-guide", excerpt: "Everything about GLP-1 medications.", category: "Education" },
              { title: "Semaglutide vs Tirzepatide: Key Differences", url: "/blog/semaglutide-vs-tirzepatide-key-differences", excerpt: "Direct comparison of top two options.", category: "Comparison" },
              { title: "Understanding GLP-1 Medications", url: "/blog/understanding-glp1-medications", excerpt: "How GLP-1 drugs work.", category: "Education" }
            ]} />
          </div>
          <div className="mt-12"><Button asChild size="lg"><Link to="/treatments">Get Started with Trimi</Link></Button></div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GLP1AgonistsCompared;
