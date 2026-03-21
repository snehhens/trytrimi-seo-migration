import { BlogLayout } from "@/components/blog/BlogLayout";
import { Card } from "@/components/ui/card";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import ogImage from "@/assets/og/glp1-complete-guide.jpg";

const GLP1CompleteGuide = () => {
  const publishDate = "2024-11-28";
  const modifiedDate = getModifiedDate('glp1-complete-guide', publishDate);
  const clusterNav = getClusterNavigation("/blog/glp1-complete-guide");

  const faqs = [
    {
      question: "What are GLP-1 medications and how do they work?",
      answer: "GLP-1 medications are injectable drugs that mimic a natural hormone (GLP-1) your body produces after eating. They work by reducing appetite through brain signaling, increasing satiety after meals, slowing stomach emptying, and regulating blood sugar. This leads to an average weight loss of 15-22% of body weight in clinical trials."
    },
    {
      question: "What's the difference between semaglutide and tirzepatide?",
      answer: "Semaglutide (Wegovy, Ozempic) targets only GLP-1 receptors and produces ~15% body weight loss. Tirzepatide (Zepbound, Mounjaro) is a dual agonist that targets both GIP and GLP-1 receptors, producing ~22% body weight loss. Both are weekly injections, but tirzepatide typically produces more weight loss due to its dual mechanism."
    },
    {
      question: "How much weight can I expect to lose on GLP-1 medications?",
      answer: "Weight loss varies by medication: Semaglutide 2.4mg produces average 15% body weight loss over 68 weeks (about 33 lbs for a 220 lb person). Tirzepatide 13.5mg produces average 22.5% weight loss over 72 weeks. Liraglutide produces average 8% weight loss. Individual results depend on starting weight, lifestyle factors, and medication adherence."
    },
    {
      question: "Who qualifies for GLP-1 weight loss medications?",
      answer: "GLP-1 medications are FDA-approved for adults with BMI of 30+ (obesity) or BMI of 27+ (overweight) with at least one weight-related condition like type 2 diabetes, high blood pressure, high cholesterol, or sleep apnea. They work best when combined with a reduced-calorie diet and increased physical activity."
    },
    {
      question: "What are the common side effects of GLP-1 medications?",
      answer: "Most common side effects are gastrointestinal: nausea (20-44%), diarrhea (21-30%), vomiting (9-24%), and constipation (11-24%). These typically occur during dose escalation and improve over time. Starting at low doses and gradually increasing helps minimize side effects. Serious side effects are rare but include pancreatitis, gallbladder problems, and thyroid concerns."
    }
  ];

  const relatedArticles = [
    {
      title: "Semaglutide vs Tirzepatide: Complete Comparison",
      url: "/blog/semaglutide-vs-tirzepatide",
      excerpt: "Detailed comparison of the two leading GLP-1 medications for weight loss.",
      category: "Comparison"
    },
    {
      title: "GLP-1 Side Effects: Complete Management Guide",
      url: "/blog/glp1-side-effects",
      excerpt: "Understanding and managing common side effects of GLP-1 medications.",
      category: "Guide"
    },
    {
      title: "How to Get GLP-1 Medications: Complete Guide",
      url: "/blog/how-to-get-glp1",
      excerpt: "Step-by-step guide to accessing GLP-1 medications for weight loss.",
      category: "Guide"
    }
  ];

  return (
    <BlogLayout
      title="GLP-1 Complete Guide: Everything You Need to Know in 2025"
      description="Comprehensive guide to GLP-1 medications for weight loss including how they work, expected results, side effects, costs, and who qualifies. Evidence-based medical information about semaglutide, tirzepatide, and liraglutide."
      publishDate={publishDate}
      lastUpdated={modifiedDate}
      currentPath="/blog/glp1-complete-guide"
      pageKeywords={["GLP-1 medications", "semaglutide", "tirzepatide", "weight loss medications", "GLP-1 agonists", "Wegovy", "Ozempic", "Mounjaro", "Zepbound"]}
      imageUrl={ogImage}
      readingTime={10}
      category="GLP-1 Education"
      relatedArticles={relatedArticles}
      faqs={faqs}
      authorName="Trimi Medical Team"
      authorBio="Our medical team consists of board-certified physicians specializing in obesity medicine, endocrinology, and metabolic health."
      isMedical={true}
      medicalAudience={["Patient"]}
    >
      <p className="text-lg text-muted-foreground mb-6">
        GLP-1 receptor agonists have revolutionized weight loss treatment, offering the most effective pharmacological approach to obesity with some formulations producing over 20% body weight loss in clinical trials.
      </p>

      <h2 className="text-3xl font-bold mb-6">What Are GLP-1 Medications?</h2>
      <p className="text-muted-foreground mb-4">
        GLP-1 (glucagon-like peptide-1) is a hormone your body naturally produces in your intestines after eating.
      </p>

      <ComparisonTable
        title="GLP-1 Medications Comparison"
        columns={["Medication", "Mechanism", "Dosing", "Weight Loss"]}
        items={[
          {
            feature: "Liraglutide (Saxenda)",
            values: ["GLP-1 only", "Daily injection", "~8% body weight"]
          },
          {
            feature: "Semaglutide (Wegovy)",
            values: ["GLP-1 only", "Weekly injection", "~15% body weight"]
          },
          {
            feature: "Tirzepatide (Mounjaro)",
            values: ["Dual GIP/GLP-1", "Weekly injection", "~22% body weight"]
          }
        ]}
      />

      <h2 className="text-3xl font-bold my-6">Expected Weight Loss Results</h2>
      <ul className="space-y-2 text-muted-foreground mb-4">
        <li>• <strong>Semaglutide 2.4mg:</strong> Average 15% body weight loss over 68 weeks</li>
        <li>• <strong>Tirzepatide 13.5mg:</strong> Average 22.5% body weight loss over 72 weeks</li>
        <li>• <strong>Liraglutide 3mg:</strong> Average 8% body weight loss over 56 weeks</li>
      </ul>

      <Card className="p-6 my-8 bg-primary/5 border-primary/20">
        <h3 className="text-xl font-semibold mb-2">Medical Disclaimer</h3>
        <p className="text-muted-foreground mb-0">
          This article is for educational purposes only. Always consult with a qualified healthcare provider before starting any weight loss medication.
        </p>
      </Card>
      
      <TopicClusterNav
        topic="GLP-1 Education"
        relatedArticles={clusterNav.relatedInCluster}
        hubPage="/blog/glp1-complete-guide"
      />
    </BlogLayout>
  );
};

export default GLP1CompleteGuide;
