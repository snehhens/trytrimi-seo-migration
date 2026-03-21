import { BlogLayout } from "@/components/blog/BlogLayout";
import { Card } from "@/components/ui/card";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import ogImage from "@/assets/og/semaglutide-clinical-results.jpg";

const SemaglutideClinicalResults = () => {
  const clusterNav = getClusterNavigation("/blog/semaglutide-clinical-results");
  const faqs = [
    {
      question: "What are the clinical trial results for semaglutide weight loss?",
      answer: "In the landmark STEP 1 trial, patients lost an average of 14.9% body weight over 68 weeks. 86.4% lost at least 5%, 69.1% lost at least 10%, 50.5% lost at least 15%, and 32% lost at least 20% of body weight. Real-world results show 10-15% average weight loss."
    },
    {
      question: "How effective is semaglutide compared to placebo?",
      answer: "Semaglutide produces significantly better weight loss than placebo. In STEP 1, semaglutide participants lost 14.9% vs 2.4% with placebo. In STEP 2 (diabetes patients), semaglutide produced 9.6% weight loss with significant improvements in blood sugar control."
    },
    {
      question: "What happens when you stop taking semaglutide?",
      answer: "The STEP 4 trial showed that patients who stopped semaglutide after 20 weeks regained 6.9% of their weight, while those who continued lost an additional 7.9% for a total of 17.4%. This confirms weight tends to return when treatment is discontinued."
    },
    {
      question: "What are the cardiovascular benefits of semaglutide?",
      answer: "The SELECT trial showed semaglutide reduced major cardiovascular events by 20% in people with heart disease, including reduced risk of heart attack, stroke, and cardiovascular death. It also lowered blood pressure by 6.2 mmHg on average and improved lipid profiles."
    }
  ];

  return (
    <BlogLayout
      title="Real Results: What Clinical Studies Show About Semaglutide Weight Loss"
      description="Comprehensive review of semaglutide clinical trial results. STEP 1-5 trial data shows 15-20% average weight loss. Evidence-based analysis."
      publishDate="2025-01-10"
      pageKeywords={[
        "semaglutide clinical trials",
        "STEP trials",
        "semaglutide results",
        "weight loss data",
        "wegovy studies"
      ]}
      currentPath="/blog/semaglutide-clinical-results"
      readingTime={10}
      imageUrl={ogImage}
      category="Research"
      faqs={faqs}
      isMedical={true}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">The STEP Trial Program</h2>
        <p className="text-muted-foreground mb-4">
          Semaglutide's effectiveness for weight loss has been established through the
          landmark STEP (Semaglutide Treatment Effect in People with obesity) clinical trial
          program. This series of five major studies involved over 4,500 participants.
        </p>
      </section>

      <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <h3 className="text-2xl font-bold mb-4">STEP 1: The Landmark Study</h3>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-bold text-foreground">Study Details:</h4>
            <ul className="space-y-1 mt-2">
              <li>• 1,961 participants with obesity or overweight</li>
              <li>• 68 weeks of treatment</li>
              <li>• Average starting BMI: 38</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground">Key Results:</h4>
            <ul className="space-y-1 mt-2">
              <li>• Average weight loss: 14.9% (compared to 2.4% with placebo)</li>
              <li>• 86.4% of participants lost at least 5% of body weight</li>
              <li>• 69.1% lost at least 10%</li>
              <li>• 50.5% lost at least 15%</li>
              <li>• 32% lost at least 20%</li>
            </ul>
          </div>
        </div>
      </Card>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">STEP 2: Type 2 Diabetes</h2>
        <p className="text-muted-foreground mb-4">
          This study examined semaglutide's effectiveness in people with type 2 diabetes.
        </p>
        <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-6 rounded-lg mb-4">
          <h4 className="font-bold mb-3">Results:</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>• 1,210 participants with type 2 diabetes and obesity</li>
            <li>• Average weight loss: 9.6% with 2.4mg dose</li>
            <li>• 68.8% achieved at least 5% weight loss</li>
            <li>• Significant improvements in blood sugar control</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">STEP 3: Behavioral Therapy</h2>
        <div className="bg-secondary/5 p-6 rounded-lg mb-4">
          <h4 className="font-bold mb-3">Results:</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Average weight loss: 16.0% at 68 weeks</li>
            <li>• 86.6% lost at least 5%</li>
            <li>• 75.3% lost at least 10%</li>
            <li>• 55.8% lost at least 15%</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">STEP 4: Weight Maintenance</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Continued Semaglutide:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Lost an additional 7.9%</li>
              <li>• Total weight loss: 17.4%</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Switched to Placebo:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Regained 6.9%</li>
              <li>• Net weight loss: only 5.6%</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">STEP 5: Long-Term Results</h2>
        <Card className="p-6 mb-4">
          <h4 className="font-bold mb-3">Two-Year Results:</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>• 304 participants followed for 104 weeks</li>
            <li>• Average weight loss: 15.2% (sustained)</li>
            <li>• Weight loss plateau typically reached by week 60</li>
            <li>• No new safety concerns with long-term use</li>
          </ul>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Health Improvements Beyond Weight Loss</h2>
        
        <h3 className="text-2xl font-semibold mb-4 mt-8">Cardiovascular Improvements</h3>
        <ul className="space-y-2 mb-6">
          <li>• Blood pressure reduction: average 6.2 mmHg systolic</li>
          <li>• Improved lipid profile</li>
          <li>• Reduced inflammatory markers</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 mt-8">Metabolic Benefits</h3>
        <ul className="space-y-2 mb-6">
          <li>• Improved insulin sensitivity</li>
          <li>• Reduced risk of progression to type 2 diabetes</li>
          <li>• Lower fasting glucose levels</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">The SELECT Trial</h2>
        <Card className="p-8 mb-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <h4 className="font-bold text-lg mb-4">Major Findings:</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>• 17,604 participants with cardiovascular disease</li>
            <li>• 20% reduction in major adverse cardiovascular events</li>
            <li>• 15% reduction in cardiovascular death</li>
            <li>• 28% reduction in non-fatal heart attack</li>
            <li>• Average weight loss: 9.4%</li>
          </ul>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">What This Means for You</h2>
        <ul className="space-y-3 mb-6">
          <li><strong>Expect significant weight loss:</strong> Most people lose 10-15% of body weight</li>
          <li><strong>Results take time:</strong> Peak weight loss typically occurs around 60-68 weeks</li>
          <li><strong>Continued treatment is necessary:</strong> Stopping typically leads to weight regain</li>
          <li><strong>Health benefits beyond weight loss:</strong> Improvements in blood pressure, cholesterol, and cardiovascular health</li>
        </ul>
      </section>

      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg my-8">
        <h4 className="font-semibold mb-3">Note on Clinical Trials</h4>
        <p className="text-sm text-muted-foreground">
          Clinical trial participants typically receive closer medical supervision and more
          comprehensive lifestyle support. Your individual results may vary, but the trial data 
          provides a reliable indication of semaglutide's potential.
        </p>
      </div>

      <TopicClusterNav
        topic="Semaglutide Clinical Research"
        relatedArticles={clusterNav.relatedInCluster}
        hubPage="/blog/semaglutide"
      />
    </BlogLayout>
  );
};

export default SemaglutideClinicalResults;
