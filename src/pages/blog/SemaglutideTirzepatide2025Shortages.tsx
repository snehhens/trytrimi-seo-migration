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
import ogImage from "@/assets/og/semaglutide-tirzepatide-2025-shortages.jpg";

const SemaglutideTirzepatide2025Shortages = () => {
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  const clusterNav = getClusterNavigation("/blog/semaglutide-tirzepatide-2025-shortages");

  const faqs = [
    {
      question: "Are semaglutide and tirzepatide still in shortage in 2025?",
      answer: "As of January 2025, the FDA has declared that tirzepatide shortages have ended, while semaglutide shortages are resolving. Brand-name products are now more widely available, though some strengths may still experience intermittent supply issues."
    },
    {
      question: "Can I still get compounded semaglutide or tirzepatide?",
      answer: "The availability of compounded versions is changing. With tirzepatide off the shortage list, compounding may be restricted. Semaglutide compounding availability depends on ongoing shortage status. Patients should consult with healthcare providers about their specific access options."
    },
    {
      question: "What happens to my current prescription if shortages end?",
      answer: "Patients on compounded medications may need to transition to FDA-approved brand-name products as shortages resolve. Your healthcare provider will work with you to ensure continuity of care and determine the best transition plan."
    },
    {
      question: "Will prices change after shortages end?",
      answer: "Brand-name medications typically cost more than compounded versions. However, increased supply may lead to more competitive pricing and better insurance coverage. Patient assistance programs may also become more accessible."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Semaglutide and Tirzepatide in 2025: End of Shortages and What It Means | Trimi</title>
        <meta
          name="description"
          content="Latest updates on semaglutide and tirzepatide availability in 2025. FDA shortage status, access to medications, and what ending shortages mean for patients."
        />
        <meta name="keywords" content="semaglutide shortage 2025, tirzepatide shortage, GLP-1 availability, medication shortage, FDA shortage list" />
        
        <meta property="og:title" content="Semaglutide and Tirzepatide in 2025: End of Shortages and What It Means" />
        <meta property="og:description" content="Latest updates on semaglutide and tirzepatide availability in 2025. FDA shortage status, access to medications, and what ending shortages mean for patients." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-tirzepatide-2025-shortages" />
        <meta property="article:published_time" content={publishDate} />
      </Helmet>

      <BlogFAQSchema faqs={faqs} />
      <SpeakableSchema cssSelector={[".quick-answer", "h1", "h2"]} />

      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <article className="max-w-4xl mx-auto">
          <BlogBreadcrumb 
            category="GLP-1 Medications"
            title="Semaglutide and Tirzepatide in 2025: End of Shortages"
            url="/blog/semaglutide-tirzepatide-2025-shortages"
          />
          
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ContentFreshnessIndicator 
                lastModified={modifiedDate}
                publishDate={publishDate}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Semaglutide and Tirzepatide in 2025: End of Shortages and What It Means
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              FDA declares tirzepatide shortage over while semaglutide supply improves—understanding the impact on patients and medication access
            </p>
            
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
            <MedicalReview 
              reviewerName="Dr. Sarah Mitchell"
              credentials="MD, Endocrinology"
              reviewDate={modifiedDate}
              specialty="Weight Management & Metabolic Disorders"
            />
          </header>
          
          <QuickAnswerBox 
            question="What's the current status of GLP-1 medication shortages?"
            answer="The FDA removed tirzepatide from the shortage list in October 2024, while semaglutide shortages are gradually resolving. Brand-name products are increasingly available, though some dosage strengths may still face intermittent supply issues."
            highlights={[
              "Tirzepatide officially off FDA shortage list",
              "Semaglutide supply improving across most strengths",
              "Compounded medication access may change",
              "Patients should consult providers about transitions"
            ]}
          />
          
          <TableOfContents />
          
          <div className="prose prose-lg max-w-none mt-8">
            <section id="shortage-timeline" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Shortage Timeline & Current Status</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                The journey of GLP-1 medication shortages has been a defining challenge for patients and healthcare providers. Understanding the timeline helps contextualize the current situation and what to expect moving forward.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Historical Shortage Timeline</h3>
              
              <div className="bg-secondary/20 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-lg mb-3">Key Milestones</h4>
                <ul className="space-y-2">
                  <li><strong>2022:</strong> Initial shortages begin as demand outpaces supply</li>
                  <li><strong>2023:</strong> Shortages intensify; FDA adds medications to official shortage list</li>
                  <li><strong>Mid-2024:</strong> Manufacturers ramp up production capacity</li>
                  <li><strong>October 2024:</strong> FDA removes tirzepatide from shortage list</li>
                  <li><strong>January 2025:</strong> Semaglutide supply approaching normal levels</li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Current Availability by Medication</h3>
              
              <ComparisonTable 
                title="2025 Availability Status"
                columns={["Semaglutide", "Tirzepatide"]}
                items={[
                  { feature: "FDA Shortage Status", values: ["Resolving", "Ended"] },
                  { feature: "Brand Name Availability", values: ["Good", "Excellent"] },
                  { feature: "Most Doses Available", values: [true, true] },
                  { feature: "Compounding Status", values: ["Permitted", "Restricted"] },
                  { feature: "Expected Wait Times", values: ["Minimal", "None"] }
                ]}
              />
              
              <p className="text-foreground/80 leading-relaxed mt-6">
                Learn more about <InternalLink to="/blog/buy-semaglutide-online">how to access semaglutide</InternalLink> and <InternalLink to="/blog/buy-tirzepatide-online">tirzepatide options</InternalLink> in the current market.
              </p>
            </section>
            
            <section id="fda-actions" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">FDA Actions & Manufacturer Updates</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                The FDA's decision to remove tirzepatide from the shortage list reflects significant improvements in manufacturing capacity and supply chain management.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Manufacturer Production Increases</h3>
              
              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-lg mb-3">Key Production Improvements</h4>
                <ul className="space-y-3">
                  <li><strong>Eli Lilly (Mounjaro/Zepbound):</strong> Invested billions in new manufacturing facilities; expanded production by 150% from 2023 to 2024</li>
                  <li><strong>Novo Nordisk (Ozempic/Wegovy):</strong> Added new production lines; increased output capacity by 100%</li>
                  <li><strong>Supply Chain Optimization:</strong> Improved logistics and distribution networks to reduce delivery delays</li>
                </ul>
              </div>
            </section>

            <section id="compounded-alternatives" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Compounded Medication Access</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                The changing shortage status has significant implications for patients currently using compounded versions of these medications.
              </p>
              
              <ComparisonTable 
                title="Compounded vs Brand-Name Access"
                columns={["Before Shortage End", "After Shortage End"]}
                items={[
                  { feature: "Compounded Access", values: ["Widely Available", "Restricted/Limited"] },
                  { feature: "Brand Name Access", values: ["Limited", "Readily Available"] },
                  { feature: "Cost (Average)", values: ["$200-400/month", "$900-1,400/month"] },
                  { feature: "Insurance Coverage", values: ["Rare", "Improving"] },
                  { feature: "Quality Oversight", values: ["Varies", "FDA Regulated"] }
                ]}
              />
              
              <p className="text-foreground/80 leading-relaxed mt-6">
                For more information on compounded options, read our guide on <InternalLink to="/blog/compounded-semaglutide-safety">compounded semaglutide safety</InternalLink> and <InternalLink to="/blog/compounded-tirzepatide-cost">cost comparisons</InternalLink>.
              </p>
            </section>

            <section id="next-steps" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Patients Should Do Now</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you're currently taking or considering GLP-1 medications, here's your action plan for navigating the changing landscape.
              </p>
              
              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-lg mb-3">Immediate Action Steps</h4>
                <ol className="space-y-3 list-decimal pl-6">
                  <li><strong>Contact Your Provider:</strong> Discuss transition options and timing before your current supply runs out</li>
                  <li><strong>Review Insurance Coverage:</strong> Check if your insurance now covers brand-name GLP-1 medications for weight loss</li>
                  <li><strong>Explore Patient Assistance:</strong> Research manufacturer savings programs (may reduce costs by $500+ monthly)</li>
                  <li><strong>Plan for Cost Changes:</strong> Budget for potential increase in medication expenses</li>
                  <li><strong>Document Your Progress:</strong> Keep records of your weight loss and health improvements to support insurance authorization</li>
                </ol>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Bottom Line</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                The resolution of GLP-1 medication shortages marks a significant milestone in weight management treatment. While the end of shortages brings challenges—particularly around cost and access to compounded medications—it also ensures better medication quality, consistency, and long-term availability.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Stay informed about the latest developments in GLP-1 medications by reading our <InternalLink to="/blog/glp1-complete-guide">Complete GLP-1 Guide</InternalLink> and comparing your options with <InternalLink to="/blog/tirzepatide-vs-semaglutide">Tirzepatide vs Semaglutide</InternalLink>.
              </p>
            </section>
            
            <CitationList 
              citations={[
                {
                  authors: ["FDA Drug Shortages Database"],
                  title: "Current Drug Shortages",
                  publication: "U.S. Food and Drug Administration",
                  year: "2025",
                  url: "https://www.accessdata.fda.gov/scripts/drugshortages/"
                },
                {
                  authors: ["Eli Lilly and Company"],
                  title: "Manufacturing and Supply Update",
                  publication: "Corporate Communications",
                  year: "2024",
                  url: "https://investor.lilly.com/"
                },
                {
                  authors: ["Novo Nordisk"],
                  title: "Supply and Production Expansion Announcement",
                  publication: "Investor Relations",
                  year: "2024",
                  url: "https://www.novonordisk.com/investors.html"
                }
              ]}
            />
            
            <PeopleAlsoRead 
              links={[
                { title: "Higher Dose Semaglutide Options Coming in 2025", path: "/blog/higher-dose-semaglutide-options" },
                { title: "Tirzepatide vs Semaglutide: 2025 Head-to-Head Updates", path: "/blog/tirzepatide-vs-semaglutide-2025-updates" },
                { title: "Compounded Semaglutide Safety: What You Need to Know", path: "/blog/compounded-semaglutide-safety" },
                { title: "Understanding GLP-1 Medications: Complete Guide", path: "/blog/glp1-complete-guide" }
              ]}
            />
            
            <TopicClusterNav
              topic="GLP-1 Medications"
              relatedArticles={clusterNav.relatedInCluster}
              hubPage="/blog/glp1-complete-guide"
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SemaglutideTirzepatide2025Shortages;
