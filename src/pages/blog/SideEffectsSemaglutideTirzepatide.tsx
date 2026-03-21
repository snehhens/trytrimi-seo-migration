import { BlogLayout } from "@/components/blog/BlogLayout";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import { AlertCircle } from "lucide-react";

const SideEffectsSemaglutideTirzepatide = () => {
  const publishDate = "2025-01-15";
  const clusterNav = getClusterNavigation("/blog/side-effects-semaglutide-tirzepatide");

  const faqs = [
    { question: "What are the most common side effects of semaglutide and tirzepatide?", answer: "The most common are GI symptoms: nausea (30-45%), vomiting (15-25%), diarrhea (20-30%), and constipation (15-25%). These typically improve within 4-8 weeks." },
    { question: "Which has fewer side effects: semaglutide or tirzepatide?", answer: "Side effect rates are similar, though tirzepatide may cause slightly more GI symptoms at higher doses." },
    { question: "How long do GLP-1 side effects last?", answer: "Most side effects are temporary, lasting 2-8 weeks during titration. About 85% of patients find side effects manageable." }
  ];

  return (
    <BlogLayout
      title="Side Effects of Semaglutide and Tirzepatide: What to Expect"
      description="Complete guide to GLP-1 side effects. Compare semaglutide vs tirzepatide side effects, learn management strategies, and know when to seek medical help."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="Side Effects"
      currentPath="/blog/side-effects-semaglutide-tirzepatide"
      pageKeywords={["semaglutide side effects", "tirzepatide side effects", "GLP-1 nausea", "Wegovy side effects"]}
      authorName="Dr. Sarah Mitchell"
      authorCredentials="MD, Obesity Medicine"
      medicallyReviewed={true}
      reviewDate={publishDate}
      faqs={faqs}
      isMedical={true}
    >
      <QuickAnswerBox 
        question="What side effects should I expect from semaglutide or tirzepatide?"
        answer="The most common side effects are gastrointestinal: nausea (30-45%), diarrhea (20-30%), vomiting (15-25%), and constipation (15-25%). These typically peak during the first 4-8 weeks and improve as your body adjusts. Most patients (85-90%) find side effects manageable."
      />
      
      <div className="prose max-w-none mt-8">
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6 flex gap-3">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <p className="text-sm"><strong>Black Box Warning:</strong> Both medications carry a warning for thyroid C-cell tumors. Do not use if you have a history of medullary thyroid carcinoma (MTC) or MEN 2 syndrome.</p>
        </div>
        
        <h2>Common Side Effects Comparison</h2>
        <p className="text-foreground/80"><strong>Nausea:</strong> 30-44% (semaglutide), 35-45% (tirzepatide). <strong>Diarrhea:</strong> 20-30% both. <strong>Vomiting:</strong> 15-25% both. <strong>Constipation:</strong> 15-25% both. See <InternalLink to="/blog/semaglutide-side-effects">semaglutide side effects</InternalLink> and <InternalLink to="/blog/tirzepatide-side-effects-2025-data">tirzepatide side effects</InternalLink>.</p>
        
        <h2>Managing GI Symptoms</h2>
        <p className="text-foreground/80">Eat smaller, more frequent meals. Choose bland, low-fat foods. Stay well-hydrated. Ginger may help nausea. Increase fiber gradually for constipation. See <InternalLink to="/blog/managing-gi-side-effects-semaglutide">managing GI side effects</InternalLink>.</p>
        
        <h2>When to Seek Medical Help</h2>
        <p className="text-foreground/80"><strong>Emergency:</strong> Severe abdominal pain, persistent vomiting, difficulty breathing. <strong>Contact provider:</strong> Side effects not improving after 4+ weeks, neck lumps, severe mood changes. See <InternalLink to="/blog/when-to-call-doctor-glp1">when to call your doctor</InternalLink>.</p>
        
        <PeopleAlsoRead links={[
          { title: "Managing GI Side Effects", path: "/blog/managing-gi-side-effects-semaglutide" },
          { title: "Tirzepatide Pancreatitis Warning Signs", path: "/blog/tirzepatide-pancreatitis-warning-signs" }
        ]} />
        
        <TopicClusterNav topic="Side Effects Management" relatedArticles={clusterNav.relatedInCluster} hubPage="/blog/side-effects-management-hub" />
      </div>
    </BlogLayout>
  );
};

export default SideEffectsSemaglutideTirzepatide;
