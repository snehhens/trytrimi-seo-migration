import { BlogLayout } from "@/components/blog/BlogLayout";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import ogImage from "@/assets/og/semaglutide-cost-breakdown.jpg";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";

const SemaglutideCostBreakdown = () => {
  const publishDate = "2025-10-10";
  const modifiedDate = getModifiedDate("semaglutide-cost-breakdown", publishDate);
  const clusterNav = getClusterNavigation("/blog/semaglutide-cost-breakdown");
  
  const faqs = [
    {
      question: "How much does semaglutide cost per month?",
      answer: "Brand-name semaglutide (Wegovy) costs $1,300-$1,500/month without insurance. Compounded semaglutide costs $200-$400/month. With insurance or coupons, costs may be lower."
    },
    {
      question: "Is compounded semaglutide cheaper than brand name?",
      answer: "Yes, compounded semaglutide is significantly cheaper, typically 70-85% less than brand-name options like Wegovy or Ozempic."
    },
    {
      question: "Does insurance cover semaglutide?",
      answer: "Many insurance plans cover semaglutide for diabetes (Ozempic) but fewer cover it for weight loss (Wegovy). Coverage varies by plan and BMI requirements."
    }
  ];

  const relatedArticles = [
    {
      title: "Semaglutide Cost Savings: Ways to Reduce Treatment Expenses",
      url: "/blog/semaglutide-cost-savings",
      excerpt: "Discover practical strategies to save money on semaglutide treatment.",
      category: "Cost"
    },
    {
      title: "Semaglutide Without Insurance: Affordable Options",
      url: "/blog/semaglutide-without-insurance",
      excerpt: "Complete guide to accessing semaglutide without insurance coverage.",
      category: "Cost"
    },
    {
      title: "Semaglutide Compounding Pharmacy: Complete Guide",
      url: "/blog/semaglutide-compounding-pharmacy",
      excerpt: "Everything you need to know about getting affordable compounded semaglutide.",
      category: "Guide"
    }
  ];

  return (
    <BlogLayout
      title="Semaglutide Cost Breakdown: Monthly Price Guide 2025"
      description="Quick breakdown of semaglutide costs per month including brand vs compounded, insurance coverage, and cheapest options available."
      publishDate={publishDate}
      lastUpdated={modifiedDate}
      currentPath="/blog/semaglutide-cost-breakdown"
      pageKeywords={["semaglutide cost", "wegovy price", "ozempic cost", "semaglutide monthly cost", "compounded semaglutide price"]}
      imageUrl={ogImage}
      readingTime={4}
      category="Cost"
      relatedArticles={relatedArticles}
      faqs={faqs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Brand-Name Semaglutide Costs</h2>
        <div className="bg-primary/5 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Wegovy (Weight Loss)</h3>
          <ul className="space-y-2">
            <li><strong>Without insurance:</strong> $1,300-$1,500/month</li>
            <li><strong>With insurance:</strong> $25-$200/month (varies by plan)</li>
            <li><strong>With manufacturer coupon:</strong> $0-$450/month</li>
          </ul>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Ozempic (Diabetes)</h3>
          <ul className="space-y-2">
            <li><strong>Without insurance:</strong> $900-$1,000/month</li>
            <li><strong>With insurance:</strong> $25-$100/month (varies by plan)</li>
            <li><strong>With manufacturer coupon:</strong> $25-$500/month</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Compounded Semaglutide Costs</h2>
        <div className="bg-secondary/50 p-6 rounded-lg">
          <p className="text-lg mb-4"><strong>$200-$400/month</strong></p>
          <ul className="space-y-2">
            <li>✓ 70-85% cheaper than brand-name</li>
            <li>✓ No insurance needed</li>
            <li>✓ Includes online consultation and prescription</li>
            <li>✓ Shipped directly to your door</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Insurance Coverage</h2>
        <p className="mb-4">Coverage varies significantly:</p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>For diabetes (Ozempic):</strong> Most plans cover with prior authorization</li>
          <li><strong>For weight loss (Wegovy):</strong> Fewer plans cover; often requires BMI ≥30 or ≥27 with comorbidity</li>
          <li><strong>Medicare:</strong> Generally doesn't cover weight loss medications</li>
          <li><strong>Medicaid:</strong> Coverage varies by state</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Total Treatment Costs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">6-Month Treatment</h3>
            <ul className="space-y-1">
              <li>Brand-name: $7,800-$9,000</li>
              <li>Compounded: $1,200-$2,400</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">12-Month Treatment</h3>
            <ul className="space-y-1">
              <li>Brand-name: $15,600-$18,000</li>
              <li>Compounded: $2,400-$4,800</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-primary/10 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Get Affordable Semaglutide at Trimi</h3>
        <p className="text-lg mb-6">Starting at $200/month including consultation, prescription, and shipping</p>
        <Button asChild size="lg">
          <Link to="/treatments">Get Started</Link>
        </Button>
      </div>
      
      <TopicClusterNav
        topic="Cost & Affordability"
        relatedArticles={clusterNav.relatedInCluster}
        hubPage="/blog/semaglutide-cost"
      />
    </BlogLayout>
  );
};

export default SemaglutideCostBreakdown;
