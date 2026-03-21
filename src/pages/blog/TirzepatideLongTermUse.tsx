import { BlogLayout } from "@/components/blog/BlogLayout";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const TirzepatideLongTermUse = () => {
  const faqs = [
    {
      question: "How long can you safely take tirzepatide?",
      answer: "Clinical trial data shows tirzepatide is safe through 72 weeks (18 months) with consistent safety profiles. Real-world experience extends beyond 2 years in many patients. Like other chronic disease treatments, most people require ongoing use for sustained weight maintenance."
    },
    {
      question: "What happens when you stop taking tirzepatide?",
      answer: "Discontinuation typically leads to weight regain. SURMOUNT-4 showed average 14% weight regain within 52 weeks after stopping. Appetite returns, metabolic rate may decrease, and previous eating patterns often resume. This mirrors what happens with other chronic treatments when discontinued."
    },
    {
      question: "Does tirzepatide lose effectiveness over time?",
      answer: "No evidence of tolerance or tachyphylaxis. Weight loss continues through 60-72 weeks before naturally plateauing (not from reduced effectiveness). Metabolic benefits (HbA1c, blood pressure, lipids) maintain or improve with continued treatment. Some patients successfully reduce to maintenance doses."
    },
    {
      question: "What are the long-term side effects of tirzepatide?",
      answer: "72-week data shows: GI side effects (nausea, diarrhea) typically diminish significantly after months 3-6. No increased risk of pancreatitis, gallstones, or other serious events with extended use. Safety profile remains consistent throughout treatment duration. Ongoing CVOT trials will provide 5+ year data."
    }
  ];

  const relatedArticles = [
    {
      title: "Tirzepatide Maintenance Dose: Complete Guide",
      url: "/blog/tirzepatide-maintenance-dose",
      excerpt: "Strategies for long-term weight maintenance",
      category: "Long-Term"
    }
  ];

  return (
    <BlogLayout
      title="Long-Term Tirzepatide Use: What 72-Week Data Really Tells Us"
      description="Comprehensive analysis of extended tirzepatide treatment based on SURMOUNT clinical trials. Learn about long-term safety, effectiveness, and maintenance strategies."
      publishDate="2025-03-12"
      currentPath="/blog/tirzepatide-long-term-use"
      pageKeywords={["tirzepatide long term safety", "mounjaro extended use", "zepbound chronic treatment", "GLP-1 long duration"]}
      readingTime={11}
      category="Long-Term Treatment"
      relatedArticles={relatedArticles}
      faqs={faqs}
      authorName="Trimi Medical Team"
      isMedical={true}
      medicallyReviewed={true}
    >
      <p className="text-xl text-muted-foreground mb-6">
        When tirzepatide first came to market, one question dominated: "Is this something I'll take forever?" With 72-week data from SURMOUNT trials and real-world experience, we can provide concrete answers.
      </p>

      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <div className="flex items-start gap-3">
          <TrendingUp className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Insights from Extended Treatment Data</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Safety profile remains consistent through 72 weeks of treatment</li>
              <li>• GI side effects typically diminish significantly after months 3-6</li>
              <li>• Weight loss continues progressively through 60-72 weeks before plateauing</li>
              <li>• Metabolic benefits (HbA1c, lipids, BP) maintain or improve</li>
              <li>• Discontinuation leads to average 14% weight regain within 52 weeks</li>
            </ul>
          </div>
        </div>
      </Card>

      <h2 className="text-3xl font-bold mb-6">What the SURMOUNT Trials Actually Showed</h2>
      <p className="text-muted-foreground mb-4">
        The SURMOUNT trial program provides the most comprehensive long-term data on tirzepatide for weight management, with SURMOUNT-1 following patients for 72 weeks (18 months).
      </p>

      <TopicClusterNav
        hubPage="/blog/long-term-outcomes-hub"
        topic="Long-Term GLP-1 Outcomes"
        relatedArticles={[
          {
            title: "Long-Term Metabolic Benefits of GLP-1",
            url: "/blog/long-term-metabolic-benefits-glp1",
            excerpt: "How GLP-1 therapies create lasting improvements in insulin sensitivity and metabolic health."
          },
          {
            title: "Maintaining Weight Loss After GLP-1",
            url: "/blog/maintaining-weight-loss-after-glp1",
            excerpt: "Evidence-based strategies for sustaining weight loss results after discontinuing medications."
          },
          {
            title: "Tirzepatide First Month Guide",
            url: "/blog/tirzepatide-first-month",
            excerpt: "Complete guide to your first 30 days on tirzepatide including what to expect."
          }
        ]}
      />
    </BlogLayout>
  );
};

export default TirzepatideLongTermUse;
