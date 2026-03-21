import { BlogLayout } from "@/components/blog/BlogLayout";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const CostEffectivenessTirzepatideVsSemaglutide = () => {
  const publishDate = "2025-01-15";
  const clusterNav = getClusterNavigation("/blog/cost-effectiveness-tirzepatide-vs-semaglutide");

  const faqs = [
    { question: "Which is more cost-effective: tirzepatide or semaglutide?", answer: "On a per-pound-lost basis, tirzepatide often provides better value despite higher upfront costs (~$1,000-1,200/month vs ~$900-1,000/month for brand-name)." },
    { question: "How much do tirzepatide and semaglutide cost monthly?", answer: "Brand-name costs $1,000-1,400/month. Compounded versions are $150-400/month for semaglutide and $200-500/month for tirzepatide." },
    { question: "Does insurance cover tirzepatide or semaglutide for weight loss?", answer: "About 30-40% of commercial insurance plans cover GLP-1s for obesity. Medicare does not cover weight loss medications." }
  ];

  return (
    <BlogLayout
      title="Cost-Effectiveness of Tirzepatide vs Semaglutide: 2025 Price Analysis"
      description="Compare costs of tirzepatide vs semaglutide for weight loss. Monthly prices (~$1,000), insurance coverage, cost per pound lost, and long-term value analysis."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="Cost & Affordability"
      currentPath="/blog/cost-effectiveness-tirzepatide-vs-semaglutide"
      pageKeywords={["tirzepatide cost", "semaglutide price", "GLP-1 cost comparison", "Wegovy vs Zepbound cost"]}
      authorName="Dr. Sarah Mitchell"
      authorCredentials="MD, Obesity Medicine"
      medicallyReviewed={true}
      reviewDate={publishDate}
      faqs={faqs}
      isMedical={true}
    >
      <QuickAnswerBox 
        question="Which GLP-1 medication offers better value for weight loss?"
        answer="While tirzepatide has a slightly higher monthly cost ($1,000-1,200 vs $900-1,100), it typically delivers 25-30% more weight loss. This translates to similar cost per pound lost ($70-85 vs $85-100). Compounded versions offer 60-80% savings."
      />
      
      <div className="prose max-w-none mt-8">
        <h2>Direct Price Comparison (2025)</h2>
        <p className="text-foreground/80"><strong>Brand Name:</strong> Wegovy $1,300-1,400/month, Zepbound $1,000-1,200/month. <strong>Compounded:</strong> Semaglutide $150-400/month, Tirzepatide $200-500/month. <strong>Trimi Health:</strong> $145-175 (semaglutide), $199-265 (tirzepatide). See <InternalLink to="/blog/semaglutide-cost">semaglutide cost guide</InternalLink>.</p>
        
        <h2>Cost Per Pound Lost Analysis</h2>
        <p className="text-foreground/80">For a 250 lb patient: Semaglutide loses ~37.5 lbs at ~$96-128/lb. Tirzepatide loses ~50 lbs at ~$96-120/lb. Similar value, but tirzepatide achieves more total loss.</p>
        
        <h2>Insurance & Coverage Options</h2>
        <p className="text-foreground/80">30-40% of commercial plans cover GLP-1s. Medicare Part D does NOT cover weight loss medications. Self-pay options include compounded medications (60-80% savings) and HSA/FSA eligibility. See <InternalLink to="/blog/semaglutide-without-insurance">semaglutide without insurance</InternalLink>.</p>
        
        <PeopleAlsoRead links={[
          { title: "Tirzepatide vs Semaglutide", path: "/blog/tirzepatide-vs-semaglutide" },
          { title: "Semaglutide Cost Breakdown", path: "/blog/semaglutide-cost-breakdown" }
        ]} />
        
        <TopicClusterNav topic="Cost & Affordability" relatedArticles={clusterNav.relatedInCluster} hubPage="/blog/cost-affordability-hub" />
      </div>
    </BlogLayout>
  );
};

export default CostEffectivenessTirzepatideVsSemaglutide;
