import { BlogLayout } from "@/components/blog/BlogLayout";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const GLP1Trends2025 = () => {
  const publishDate = "2025-01-15";
  const clusterNav = getClusterNavigation("/blog/glp1-trends-2025");

  const faqs = [
    { question: "What new GLP-1 medications are coming in 2025?", answer: "Several new GLP-1 medications are in development including oral semaglutide alternatives, once-monthly injectable options, and combination therapies targeting multiple pathways. Eli Lilly's retatrutide (triple agonist) is particularly promising." },
    { question: "Will GLP-1 medication prices decrease in 2025?", answer: "Prices may decrease slightly due to increased competition and expanded manufacturing. Compounded versions remain significantly cheaper. Generic semaglutide is not expected until 2031-2033 due to patent protections." },
    { question: "How fast is the GLP-1 market growing?", answer: "The GLP-1 market is experiencing explosive growth, projected to reach $100+ billion by 2030. Tirzepatide prescriptions increased 8% in Q3 2025 alone. Demand continues to outpace supply in many regions." }
  ];

  return (
    <BlogLayout
      title="GLP-1 Trends in 2025: Market Growth and New Approvals"
      description="Explore the latest GLP-1 medication trends including new drug approvals, market growth projections, pipeline updates, and what's next for weight loss medications in 2025."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="GLP-1 Medications"
      currentPath="/blog/glp1-trends-2025"
      pageKeywords={["GLP-1 trends 2025", "new weight loss drugs 2025", "semaglutide market growth", "tirzepatide approvals", "GLP-1 pipeline"]}
      authorName="Dr. Sarah Mitchell"
      authorCredentials="MD, Obesity Medicine"
      medicallyReviewed={true}
      reviewDate={publishDate}
      faqs={faqs}
      isMedical={true}
    >
      <QuickAnswerBox 
        question="What are the biggest GLP-1 trends in 2025?"
        answer="Key trends include: explosive market growth (tirzepatide up 8% in Q3 2025), new drug approvals like higher-dose Rybelsus, pipeline drugs targeting multiple receptors (retatrutide), expanded indications for cardiovascular and kidney disease, and continued supply challenges driving innovation in manufacturing."
      />
      
      <div className="prose max-w-none mt-8">
        <h2>Market Growth and Dominance</h2>
        <p className="text-foreground/80">GLP-1 medications have become the fastest-growing drug class in pharmaceutical history:</p>
        <ul className="text-foreground/80">
          <li><strong>Market size:</strong> Projected $100+ billion globally by 2030</li>
          <li><strong>Tirzepatide growth:</strong> Prescriptions up 8% in Q3 2025 alone</li>
          <li><strong>Patient demand:</strong> Estimated 30+ million eligible patients in the US</li>
          <li><strong>Supply constraints:</strong> Ongoing shortages driving manufacturing expansion</li>
        </ul>
        <p className="text-foreground/80">See our <InternalLink to="/blog/semaglutide-tirzepatide-2025-shortages">2025 shortage updates</InternalLink>.</p>
        
        <h2>New Drug Approvals and Pipeline</h2>
        <p className="text-foreground/80">Several exciting developments are in progress:</p>
        
        <h3>Recently Approved / In Review</h3>
        <ul className="text-foreground/80">
          <li><strong>Higher-dose oral semaglutide:</strong> 25mg and 50mg Rybelsus for enhanced weight loss</li>
          <li><strong>Zepbound (tirzepatide):</strong> Expanded cardiovascular indications</li>
          <li><strong>Weekly oral GLP-1:</strong> Convenience improvements in development</li>
        </ul>
        
        <h3>Pipeline Drugs to Watch</h3>
        <ul className="text-foreground/80">
          <li><strong>Retatrutide (Eli Lilly):</strong> Triple agonist (GIP/GLP-1/glucagon) showing 24%+ weight loss</li>
          <li><strong>Orforglipron:</strong> Daily oral GLP-1, potential game-changer for convenience</li>
          <li><strong>CagriSema (Novo):</strong> Semaglutide + cagrilintide combination</li>
          <li><strong>Survodutide:</strong> Dual GLP-1/glucagon agonist for NASH and obesity</li>
        </ul>
        <p className="text-foreground/80">Compare current options: <InternalLink to="/blog/tirzepatide-vs-semaglutide">tirzepatide vs semaglutide</InternalLink>.</p>
        
        <h2>Expanded Medical Indications</h2>
        <p className="text-foreground/80">GLP-1 medications are being approved for additional conditions:</p>
        <ul className="text-foreground/80">
          <li><strong>Cardiovascular disease:</strong> Reduced MACE events by 20% (SELECT trial)</li>
          <li><strong>Chronic kidney disease:</strong> Kidney protection benefits</li>
          <li><strong>NASH/fatty liver:</strong> Significant liver fat reduction</li>
          <li><strong>Sleep apnea:</strong> Weight loss improving symptoms</li>
          <li><strong>Heart failure:</strong> Ongoing trials showing promise</li>
        </ul>
        <p className="text-foreground/80">Learn about <InternalLink to="/blog/tirzepatide-cvd-risk-reduction">cardiovascular benefits</InternalLink>.</p>
        
        <h2>Access and Affordability Trends</h2>
        <p className="text-foreground/80">Several developments are improving access:</p>
        <ul className="text-foreground/80">
          <li><strong>Insurance expansion:</strong> More employers covering weight loss medications</li>
          <li><strong>Medicare advocacy:</strong> Growing push for Medicare coverage of anti-obesity medications</li>
          <li><strong>Compounding:</strong> Legal compounded versions providing affordable access</li>
          <li><strong>Telehealth:</strong> Expanded remote prescribing making access easier</li>
          <li><strong>Manufacturing scale-up:</strong> Both Novo and Lilly investing billions in production</li>
        </ul>
        <p className="text-foreground/80">See <InternalLink to="/blog/cost-effectiveness-tirzepatide-vs-semaglutide">cost comparison guide</InternalLink>.</p>
        
        <h2>What's Next: 2025 and Beyond</h2>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
          <p className="text-foreground/80 mb-0"><strong>Key predictions:</strong> Continued supply improvements by mid-2025, potential FDA approval of retatrutide in 2026, growing competition driving innovation, expanded insurance coverage, and increasing focus on combination therapies targeting multiple metabolic pathways.</p>
        </div>
        
        <PeopleAlsoRead links={[
          { title: "Tirzepatide vs Semaglutide 2025 Updates", path: "/blog/tirzepatide-vs-semaglutide-2025-updates" },
          { title: "Higher Dose Semaglutide Options", path: "/blog/higher-dose-semaglutide-options" },
          { title: "2025 Supply Shortage Updates", path: "/blog/semaglutide-tirzepatide-2025-shortages" }
        ]} />
        
        <TopicClusterNav topic="GLP-1 Medications" relatedArticles={clusterNav.relatedInCluster} hubPage="/blog/comparisons-hub" />
      </div>
    </BlogLayout>
  );
};

export default GLP1Trends2025;
