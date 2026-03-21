import { BlogLayout } from "@/components/blog/BlogLayout";
import { Card } from "@/components/ui/card";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const TirzepatideMechanismGuide = () => {
  const clusterNav = getClusterNavigation("/blog/tirzepatide-mechanism-guide");
  const faqs = [
    {
      question: "How does tirzepatide work for weight loss?",
      answer: "Tirzepatide mimics both GLP-1 and GIP hormones through a dual-action mechanism. It slows gastric emptying, reduces appetite, increases satiety, and improves insulin sensitivity. Clinical trials show 15-22% average weight loss over 72 weeks."
    },
    {
      question: "What makes tirzepatide different from semaglutide?",
      answer: "Tirzepatide is a dual GIP/GLP-1 receptor agonist, while semaglutide only targets GLP-1 receptors. This dual action typically produces greater weight loss (22.5% vs 15% average body weight loss) and may offer additional metabolic benefits."
    },
    {
      question: "What are the clinical trial results for tirzepatide?",
      answer: "SURMOUNT-1 showed average weight loss of 15% (5mg), 19.5% (10mg), and 22.5% (15mg) over 72 weeks. SURMOUNT-2 demonstrated 15.7% weight loss in type 2 diabetes patients. These results significantly exceeded placebo and active comparators."
    }
  ];

  const relatedArticles = [
    {
      title: "Tirzepatide vs Semaglutide: Complete Comparison",
      url: "/blog/tirzepatide-vs-semaglutide",
      excerpt: "Detailed comparison of mechanisms and results",
      category: "Comparison"
    }
  ];

  return (
    <BlogLayout
      title="Tirzepatide Mechanism: Complete Scientific Guide"
      description="Comprehensive scientific guide to tirzepatide's dual GIP/GLP-1 mechanism, clinical trial results, and how it works for weight loss."
      publishDate="2024-01-20"
      currentPath="/blog/tirzepatide-mechanism-guide"
      pageKeywords={["tirzepatide mechanism", "how tirzepatide works", "GIP GLP-1", "mounjaro science"]}
      readingTime={15}
      category="Science Deep-Dive"
      relatedArticles={relatedArticles}
      faqs={faqs}
      isMedical={true}
    >
      <Card className="p-8 mb-12 bg-primary/5">
        <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Tirzepatide mimics both GLP-1 and GIP hormones for enhanced weight loss</li>
          <li>• Dual-action mechanism provides advantages over single GLP-1 agonists</li>
          <li>• Clinical trials show 15-22% average weight loss over 72 weeks</li>
          <li>• Slows gastric emptying, promoting satiety and reducing food intake</li>
        </ul>
      </Card>

      <h2 className="text-3xl font-bold mb-4">The Dual Mechanism Explained</h2>
      <p className="text-muted-foreground mb-6">
        Tirzepatide works through two complementary pathways by mimicking both GLP-1 (glucagon-like peptide-1) and GIP (glucose-dependent insulinotropic polypeptide) hormones.
      </p>
      
      <TopicClusterNav
        topic="Tirzepatide Science"
        relatedArticles={clusterNav.relatedInCluster}
        hubPage="/blog/tirzepatide"
      />
    </BlogLayout>
  );
};

export default TirzepatideMechanismGuide;
