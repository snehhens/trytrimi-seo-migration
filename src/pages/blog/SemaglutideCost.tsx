import { BlogLayout } from "@/components/blog/BlogLayout";
import { Card } from "@/components/ui/card";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import ogImage from "@/assets/og/semaglutide-cost.jpg";

const SemaglutideCost = () => {
  const publishDate = "2025-02-13";
  const modifiedDate = getModifiedDate('semaglutide-cost', publishDate);

  const faqs = [
    {
      question: "How much does semaglutide cost without insurance?",
      answer: "Wegovy costs $1,349-$1,430/month without insurance. Ozempic costs $968-$1,023/month. Compounded semaglutide costs $199-$345/month from FDA-registered pharmacies."
    },
    {
      question: "Does insurance cover semaglutide for weight loss?",
      answer: "Coverage varies significantly. Most plans cover Ozempic for diabetes but many exclude Wegovy for weight loss. Medicare doesn't cover weight loss medications."
    }
  ];

  const relatedArticles = [
    {
      title: "Semaglutide Cost Breakdown",
      url: "/blog/semaglutide-cost-breakdown",
      excerpt: "Monthly price guide",
      category: "Cost"
    }
  ];

  return (
    <BlogLayout
      title="Semaglutide Cost: $299/mo vs $1,400 | 2025 Price Guide"
      description="Compare Ozempic, Wegovy, compounded prices. Insurance tips and affordable options."
      publishDate={publishDate}
      lastUpdated={modifiedDate}
      currentPath="/blog/semaglutide-cost"
      pageKeywords={["semaglutide cost", "ozempic price", "wegovy cost"]}
      imageUrl={ogImage}
      readingTime={12}
      category="Cost"
      relatedArticles={relatedArticles}
      faqs={faqs}
      authorName="Trimi Medical Team"
      isMedical={true}
    >
      <p className="text-lg mb-6">Comprehensive cost guide for semaglutide in 2025.</p>
      
      <ComparisonTable
        title="Semaglutide Cost Comparison 2025"
        columns={["Option", "Monthly Cost", "Annual Cost"]}
        items={[
          { feature: "Wegovy (Brand)", values: ["$1,349-$1,430", "$16,188-$17,160"] },
          { feature: "Compounded", values: ["$199-$345", "$2,388-$4,140"] }
        ]}
      />
      
      <TopicClusterNav
        hubPage="/cost-guide"
        topic="Cost & Affordability"
        relatedArticles={[
          {
            title: "Semaglutide Cost Breakdown",
            url: "/blog/semaglutide-cost-breakdown",
            excerpt: "Detailed monthly pricing for all semaglutide options with insurance and payment plan information."
          },
          {
            title: "Semaglutide Without Insurance",
            url: "/blog/semaglutide-without-insurance",
            excerpt: "How to afford semaglutide without insurance coverage, including savings strategies and affordable alternatives."
          },
          {
            title: "Weight Loss Injection Costs Compared",
            url: "/blog/weight-loss-injection-costs",
            excerpt: "Complete price comparison of all GLP-1 medications including semaglutide, tirzepatide, and liraglutide."
          },
          {
            title: "Compounded vs Brand Name Semaglutide",
            url: "/blog/compounded-semaglutide-vs-brand-name",
            excerpt: "Understanding the cost and quality differences between compounded and brand-name semaglutide options."
          }
        ]}
      />
    </BlogLayout>
  );
};

export default SemaglutideCost;
