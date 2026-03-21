import { BlogLayout } from "@/components/blog/BlogLayout";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { Card } from "@/components/ui/card";
import ogImage from "@/assets/og/tirzepatide-insurance-coverage.jpg";

const TirzepatideInsuranceCoverage = () => {
  const faqs = [
    {
      question: "Does insurance cover tirzepatide for weight loss?",
      answer: "Most insurance plans do NOT cover Zepbound (tirzepatide for weight loss). Medicare explicitly excludes weight loss medications. Some commercial plans cover it with prior authorization, but coverage remains rare. Mounjaro for diabetes has much better coverage."
    },
    {
      question: "What's the difference between Mounjaro and Zepbound coverage?",
      answer: "Mounjaro (for type 2 diabetes) is typically covered by most insurance plans with prior authorization. Zepbound (identical drug, approved for weight loss) is rarely covered as most plans exclude weight loss treatments. This is despite both containing the same medication."
    },
    {
      question: "How much does tirzepatide cost without insurance?",
      answer: "Without insurance: Mounjaro/Zepbound costs $1,050-$1,200/month retail. With manufacturer savings card (if eligible): can reduce to $25-$550/month. Compounded tirzepatide: $199-$345/month from FDA-registered pharmacies (not covered by insurance)."
    },
    {
      question: "What are the prior authorization requirements for tirzepatide?",
      answer: "Common requirements include: BMI ≥30 or BMI ≥27 with comorbidities, documented diet/exercise attempts (3-6 months), diabetes diagnosis (for Mounjaro), step therapy (trying other medications first), and detailed medical records. Approval process takes 3-7 business days typically."
    }
  ];

  const relatedArticles = [
    {
      title: "Tirzepatide Cost Comparison: Complete Guide",
      url: "/blog/tirzepatide-cost-comparison",
      excerpt: "Full pricing breakdown and affordable options",
      category: "Cost"
    },
    {
      title: "Compounded Tirzepatide: Safety Guide",
      url: "/blog/compounded-tirzepatide-safety-2025",
      excerpt: "Everything about compounded alternatives",
      category: "Cost"
    }
  ];

  return (
    <BlogLayout
      title="Tirzepatide Insurance Coverage: Will Your Plan Pay? 2025 Guide"
      description="Does insurance cover tirzepatide for weight loss? Learn which plans cover Mounjaro and Zepbound, prior authorization requirements, and affordable alternatives."
      publishDate="2025-01-28"
      currentPath="/blog/tirzepatide-insurance-coverage"
      pageKeywords={["tirzepatide insurance coverage", "mounjaro insurance", "zepbound coverage", "prior authorization"]}
      imageUrl={ogImage}
      readingTime={10}
      category="Insurance"
      relatedArticles={relatedArticles}
      faqs={faqs}
      isMedical={false}
    >
      <h2 className="text-3xl font-bold mb-6">The Short Answer: It Depends (Mostly on Why You're Taking It)</h2>
      
      <Card className="p-6 my-8 bg-accent/50">
        <h3 className="text-xl font-semibold mb-4">Coverage Quick Reference</h3>
        <div className="space-y-3">
          <div>
            <p className="font-semibold">Mounjaro (for type 2 diabetes):</p>
            <p className="text-sm text-muted-foreground">Covered by most insurance plans with prior authorization</p>
          </div>
          <div>
            <p className="font-semibold">Zepbound (for weight loss):</p>
            <p className="text-sm text-muted-foreground">Rarely covered; most plans specifically exclude weight loss treatments</p>
          </div>
          <div>
            <p className="font-semibold">Compounded tirzepatide:</p>
            <p className="text-sm text-muted-foreground">Not covered by insurance; cash-pay only ($199-$345/month)</p>
          </div>
        </div>
      </Card>

      <h2 className="text-3xl font-bold my-6">Understanding Mounjaro vs Zepbound Coverage</h2>
      <p className="text-muted-foreground mb-4">
        Tirzepatide is sold under two brand names by Eli Lilly: Mounjaro (approved for type 2 diabetes) and Zepbound (approved for chronic weight management). Same medication, different FDA indication, drastically different insurance coverage.
      </p>

      <TopicClusterNav
        hubPage="/blog/cost-affordability-hub"
        topic="Insurance & Affordability"
        relatedArticles={[
          {
            title: "Prior Authorization for GLP-1 Approval",
            url: "/blog/prior-authorization-glp1-approval",
            excerpt: "Step-by-step guide to navigating prior authorization for GLP-1 medications and winning insurance approval."
          },
          {
            title: "Appealing Insurance Denials for GLP-1",
            url: "/blog/appealing-insurance-denials-glp1",
            excerpt: "How to successfully appeal insurance denials for GLP-1 medications with winning strategies."
          },
          {
            title: "Compounded Tirzepatide Cost",
            url: "/blog/compounded-tirzepatide-cost",
            excerpt: "Affordable compounded tirzepatide options and pricing comparison."
          }
        ]}
      />
    </BlogLayout>
  );
};

export default TirzepatideInsuranceCoverage;
