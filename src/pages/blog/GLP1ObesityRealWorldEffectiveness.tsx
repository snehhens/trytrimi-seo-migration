import { BlogLayout } from "@/components/blog/BlogLayout";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const GLP1ObesityRealWorldEffectiveness = () => {
  const publishDate = "2025-01-15";
  const clusterNav = getClusterNavigation("/blog/glp1-obesity-real-world-effectiveness");

  const faqs = [
    { question: "How effective are GLP-1 medications for obesity in real-world use?", answer: "Real-world studies show GLP-1 medications deliver 12-18% body weight reduction on average, with some patients achieving 20%+ when combined with lifestyle changes." },
    { question: "What percentage of patients successfully lose weight on GLP-1 drugs?", answer: "Approximately 85-90% of patients experience meaningful weight loss (5%+ of body weight) on GLP-1 medications." },
    { question: "How long do GLP-1 weight loss results last?", answer: "Studies show weight loss is maintained as long as patients continue treatment. After discontinuation, some weight regain typically occurs within 12-24 months." }
  ];

  return (
    <BlogLayout
      title="GLP-1 Agonists for Obesity: Real-World Effectiveness & Results"
      description="Discover how effective GLP-1 medications are for obesity treatment in real-world settings. 15-20% weight loss data, patient stories, and long-term sustainability evidence."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="GLP-1 Medications"
      currentPath="/blog/glp1-obesity-real-world-effectiveness"
      pageKeywords={["GLP-1 effectiveness obesity", "real-world GLP-1 results", "semaglutide weight loss data", "tirzepatide obesity treatment"]}
      authorName="Dr. Sarah Mitchell"
      authorCredentials="MD, Obesity Medicine"
      medicallyReviewed={true}
      reviewDate={publishDate}
      faqs={faqs}
      isMedical={true}
    >
      <QuickAnswerBox 
        question="How effective are GLP-1 medications in real-world obesity treatment?"
        answer="Real-world data shows GLP-1 medications achieve 15-20% average body weight loss in patients with obesity. Approximately 85% of patients experience clinically significant weight loss, with results sustained through continued treatment."
      />
      
      <div className="prose max-w-none mt-8">
        <h2>Clinical Trial vs Real-World Results</h2>
        <p className="text-foreground/80">Clinical trials show semaglutide achieves 15-17% weight loss and tirzepatide 20-22%. Real-world studies show slightly lower results (12-14% and 16-18% respectively) due to variable adherence and lifestyle support. Learn more about the <InternalLink to="/blog/science-behind-glp1-effectiveness">science behind GLP-1 effectiveness</InternalLink>.</p>
        
        <h2>Real-World Effectiveness by Medication</h2>
        <p className="text-foreground/80"><strong>Semaglutide:</strong> 12-14% weight loss at 12 months, 68% achieve ≥10% loss. <strong>Tirzepatide:</strong> 16-18% weight loss at 12 months, 78% achieve ≥10% loss. Compare with <InternalLink to="/blog/tirzepatide-vs-semaglutide">tirzepatide vs semaglutide</InternalLink>.</p>
        
        <h2>Long-Term Sustainability</h2>
        <p className="text-foreground/80">Weight loss is maintained with continued treatment. After stopping, most patients regain 2/3 of lost weight within 12 months. Learn about <InternalLink to="/blog/weight-regain-prevention-glp1">preventing weight regain</InternalLink>.</p>
        
        <PeopleAlsoRead links={[
          { title: "Tirzepatide vs Semaglutide", path: "/blog/tirzepatide-vs-semaglutide" },
          { title: "Semaglutide Real-World Results", path: "/blog/semaglutide-real-world-results" }
        ]} />
        
        <TopicClusterNav topic="GLP-1 Comparisons" relatedArticles={clusterNav.relatedInCluster} hubPage="/blog/comparisons-hub" />
      </div>
    </BlogLayout>
  );
};

export default GLP1ObesityRealWorldEffectiveness;
