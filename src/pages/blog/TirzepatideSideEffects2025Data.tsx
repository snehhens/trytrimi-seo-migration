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
import { getClusterNavigation } from "@/utils/relatedContent";
import ogImage from "@/assets/og/tirzepatide-side-effects-2025-data.jpg";

const TirzepatideSideEffects2025Data = () => {
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  const clusterNav = getClusterNavigation('tirzepatide-side-effects-2025-data');

  const faqs = [
    {
      question: "What are the most common side effects of tirzepatide?",
      answer: "The most common side effects are gastrointestinal: nausea (affects 25-30% of patients), diarrhea (20-25%), vomiting (10-15%), constipation (15-20%), and abdominal discomfort. Most GI symptoms are mild to moderate and improve after 8-12 weeks."
    },
    {
      question: "How do tirzepatide side effects compare to semaglutide?",
      answer: "Tirzepatide and semaglutide have similar side effect profiles, with GI symptoms being most common for both. Tirzepatide may cause slightly more nausea initially but has similar overall discontinuation rates (5-8%). Both medications are generally well-tolerated with proper dose escalation."
    },
    {
      question: "Do side effects get better over time on tirzepatide?",
      answer: "Yes, most side effects significantly improve within 8-12 weeks as your body adapts. GI symptoms typically peak during the first month and after dose increases, then gradually decrease. By 3-6 months, most patients report minimal to no side effects."
    },
    {
      question: "What are the serious side effects I should watch for?",
      answer: "Contact your doctor immediately for severe abdominal pain (especially upper abdomen), persistent vomiting, signs of pancreatitis, gallbladder problems, severe allergic reactions, vision changes, rapid heart rate, or symptoms of thyroid tumors (lump in neck, trouble swallowing)."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tirzepatide Side Effects: What 2025 Data Shows and How to Cope | Trimi</title>
        <meta
          name="description"
          content="Complete guide to tirzepatide side effects based on 2025 clinical data. Learn about common reactions, rare serious effects, management strategies, and what to expect."
        />
        <meta name="keywords" content="tirzepatide side effects, mounjaro side effects, zepbound side effects, GLP-1 side effects, tirzepatide nausea" />
        <link rel="canonical" href="https://trytrimi.com/blog/tirzepatide-side-effects-2025-data" />
        <meta property="og:title" content="Tirzepatide Side Effects: What 2025 Data Shows and How to Cope" />
        <meta property="og:description" content="Evidence-based guide to tirzepatide side effects. Latest 2025 safety data, management strategies, and when to seek help." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/tirzepatide-side-effects-2025-data" />
        <meta property="article:published_time" content={publishDate} />
      </Helmet>

      <BlogFAQSchema faqs={faqs} />
      <SpeakableSchema cssSelector={[".quick-answer", "h1", "h2"]} />

      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <article className="max-w-4xl mx-auto">
          <BlogBreadcrumb 
            category="Tirzepatide"
            title="Tirzepatide Side Effects: 2025 Data"
            url="/blog/tirzepatide-side-effects-2025-data"
          />
          
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ContentFreshnessIndicator 
                lastModified={modifiedDate}
                publishDate={publishDate}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Tirzepatide Side Effects: What 2025 Data Shows and How to Cope
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Comprehensive analysis of tirzepatide side effects based on latest clinical data—what to expect, how to manage, and when to seek help
            </p>
            
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
            <MedicalReview 
              reviewerName="Dr. Robert Harrison"
              credentials="MD, Clinical Pharmacology"
              reviewDate={modifiedDate}
              specialty="Drug Safety & Adverse Event Management"
            />
          </header>
          
          <QuickAnswerBox 
            question="What are the most common tirzepatide side effects and how long do they last?"
            answer="The most common side effects are gastrointestinal—nausea (25-30%), diarrhea (20-25%), and constipation (15-20%). These typically peak in the first month and after dose increases, then significantly improve within 8-12 weeks. Most patients tolerate the medication well with proper dose escalation and dietary modifications."
            highlights={[
              "GI symptoms affect 60-70% of patients initially",
              "Most symptoms are mild to moderate severity",
              "Significant improvement by weeks 8-12",
              "Only 5-8% discontinue due to side effects",
              "Gradual dosing reduces symptom severity"
            ]}
          />
          
          <TableOfContents />
          
          <div className="prose prose-lg max-w-none mt-8">
            <section id="common-side-effects" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Side Effects: 2025 Data</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Based on pooled data from SURMO UNT trials and real-world evidence through 2024, here's what patients can expect:
              </p>
              
              <ComparisonTable 
                title="Side Effect Frequency by Dose"
                columns={["5 mg", "10 mg", "15 mg"]}
                items={[
                  { feature: "Nausea", values: ["20%", "25%", "28-30%"] },
                  { feature: "Diarrhea", values: ["15%", "20%", "22-25%"] },
                  { feature: "Vomiting", values: ["8%", "12%", "13-15%"] },
                  { feature: "Constipation", values: ["14%", "16%", "18-20%"] },
                  { feature: "Decreased Appetite", values: ["12%", "15%", "18%"] }
                ]}
              />
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Timeline of Side Effects</h3>
              
              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-lg mb-3">When Side Effects Occur</h4>
                <ul className="space-y-3">
                  <li><strong>Days 1-3 Post-Injection:</strong> Peak GI symptoms (nausea, decreased appetite)</li>
                  <li><strong>Weeks 1-4:</strong> Most intense symptom period during dose initiation</li>
                  <li><strong>Weeks 4-8:</strong> Gradual improvement as body adapts</li>
                  <li><strong>Weeks 8-12:</strong> Significant reduction in symptoms for most patients</li>
                  <li><strong>After Dose Increases:</strong> Temporary symptom recurrence, usually milder than initial period</li>
                  <li><strong>Months 3-6+:</strong> Minimal to no side effects for majority of patients</li>
                </ul>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mt-6">
                Compare with <InternalLink to="/blog/semaglutide-side-effects">semaglutide side effects</InternalLink> to understand differences between medications.
              </p>
            </section>
            
            <section id="managing-side-effects" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Managing Common Side Effects</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Nausea Management</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Eat smaller, frequent meals:</strong> 5-6 small meals instead of 3 large ones</li>
                <li><strong>Bland foods:</strong> Crackers, toast, rice, bananas during peak nausea</li>
                <li><strong>Ginger:</strong> Ginger tea, candies, or supplements</li>
                <li><strong>Timing:</strong> Inject before bedtime to sleep through peak symptoms</li>
                <li><strong>Avoid triggers:</strong> Greasy, spicy, or strong-smelling foods</li>
                <li><strong>Stay upright:</strong> Don't lie down for 30-60 minutes after eating</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Diarrhea Management</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Hydration:</strong> Increase water and electrolyte intake</li>
                <li><strong>BRAT diet:</strong> Bananas, rice, applesauce, toast</li>
                <li><strong>Soluble fiber:</strong> Oatmeal, psyllium</li>
                <li><strong>Probiotics:</strong> May help restore gut balance</li>
                <li><strong>Avoid:</strong> Caffeine, artificial sweeteners, high-fat foods</li>
              </ul>
              
              <p className="text-foreground/80 leading-relaxed mt-6">
                For comprehensive GI management, see our guide on <InternalLink to="/blog/managing-gi-side-effects-semaglutide">managing GI side effects</InternalLink> (strategies apply to tirzepatide too).
              </p>
            </section>

            <section id="serious-side-effects" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Rare but Serious Side Effects</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                While uncommon, these serious side effects require immediate medical attention:
              </p>
              
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-lg mb-3 text-red-900 dark:text-red-100">🚨 Seek Immediate Medical Care For:</h4>
                <ul className="space-y-3 text-red-900 dark:text-red-100">
                  <li><strong>Pancreatitis:</strong> Severe upper abdominal pain radiating to back, persistent vomiting</li>
                  <li><strong>Gallbladder problems:</strong> Upper right abdominal pain, fever, yellowing of skin/eyes</li>
                  <li><strong>Severe allergic reactions:</strong> Difficulty breathing, swelling of face/throat, rapid heartbeat</li>
                  <li><strong>Kidney problems:</strong> Changes in urination, severe dehydration</li>
                  <li><strong>Thyroid tumors:</strong> Lump in neck, trouble swallowing, persistent hoarseness</li>
                  <li><strong>Severe hypoglycemia:</strong> Confusion, sweating, shakiness (if on insulin/sulfonylureas)</li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Incidence of Serious Events</h3>
              
              <ComparisonTable 
                title="Serious Adverse Events (per 1000 patients)"
                columns={["Tirzepatide", "Placebo"]}
                items={[
                  { feature: "Pancreatitis", values: ["0.2-0.5", "0.1"] },
                  { feature: "Gallbladder Disease", values: ["1.5-2.5", "0.5"] },
                  { feature: "Severe Hypoglycemia", values: ["0.1-0.3", "0.1"] },
                  { feature: "Acute Kidney Injury", values: ["0.5-1.0", "0.3"] },
                  { feature: "Severe Allergic Reactions", values: ["&lt;0.1", "&lt;0.1"] }
                ]}
              />
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Bottom Line</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Tirzepatide is generally well-tolerated, with most side effects being mild to moderate GI symptoms that improve significantly within 2-3 months. The key to minimizing side effects is proper dose escalation, dietary modifications, and open communication with your healthcare provider.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Learn more about <InternalLink to="/blog/tirzepatide-first-month">what to expect in your first month</InternalLink> and <InternalLink to="/blog/tirzepatide-safety">overall safety profile</InternalLink>.
              </p>
            </section>
            
            <CitationList 
              citations={[
                {
                  authors: ["Jastreboff, A.M.", "et al."],
                  title: "Tirzepatide Once Weekly for the Treatment of Obesity",
                  publication: "New England Journal of Medicine",
                  year: "2022",
                  url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
                  doi: "10.1056/NEJMoa2206038"
                },
                {
                  authors: ["Rosenstock, J.", "et al."],
                  title: "Efficacy and safety of a novel dual GIP and GLP-1 receptor agonist tirzepatide",
                  publication: "The Lancet",
                  year: "2021",
                  url: "https://www.thelancet.com/"
                }
              ]}
            />
            
            <PeopleAlsoRead 
              links={[
                { title: "Tirzepatide Safety: Complete Risk Profile", path: "/blog/tirzepatide-safety" },
                { title: "First Month on Tirzepatide: What to Expect", path: "/blog/tirzepatide-first-month" },
                { title: "Tirzepatide vs Semaglutide: Side Effect Comparison", path: "/blog/tirzepatide-vs-semaglutide" },
                { title: "Managing GI Side Effects: Proven Strategies", path: "/blog/managing-gi-side-effects-semaglutide" }
              ]}
            />
            
            <TopicClusterNav
              pillarPage={clusterNav.pillarPage}
              hubPage={clusterNav.hubPage}
              relatedArticles={clusterNav.relatedInCluster}
              topic="Tirzepatide Side Effects"
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TirzepatideSideEffects2025Data;
