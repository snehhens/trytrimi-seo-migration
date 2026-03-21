import { BlogLayout } from "@/components/blog/BlogLayout";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/semaglutide-alcohol.jpg";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideAlcohol = () => {
  const meta = getBlogPostMeta("semaglutide-alcohol");
  const clusterNav = getClusterNavigation('semaglutide-alcohol');
  
  return (
    <BlogLayout
      title="Semaglutide and Alcohol: What You Need to Know Before Drinking"
      description="Can you drink alcohol while taking semaglutide (Ozempic/Wegovy)? Complete guide to alcohol interactions, safety considerations, and practical recommendations for GLP-1 users."
      publishDate={meta?.date || "2024-10-08"}
      currentPath="/blog/semaglutide-alcohol"
      pageKeywords={["semaglutide alcohol", "ozempic drinking", "wegovy alcohol interaction", "GLP-1 and alcohol", "can you drink on semaglutide"]}
      imageUrl={ogImage}
      readingTime={meta?.readTime ? parseInt(meta.readTime) : 13}
      isMedical={true}
      medicalAudience={["Patient"]}
      category="Semaglutide"
    >
      <p className="text-xl text-muted-foreground mb-8">
        Can you drink alcohol while taking semaglutide? Understanding the interactions, risks, and practical guidelines for safe alcohol consumption on Ozempic or Wegovy.
      </p>

      <Card className="p-6 mb-8 border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-950/20">
        <div className="flex gap-4">
          <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Takeaway</h3>
            <p>While alcohol isn't strictly forbidden with semaglutide, it's best approached with caution. The medication can intensify alcohol's effects and increase nausea risk.</p>
          </div>
        </div>
      </Card>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">The Quick Answer</h2>
        <p className="text-lg leading-relaxed mb-6">
          You can drink alcohol while taking semaglutide, but moderation is crucial. Most experts recommend limiting intake and being aware of increased side effects.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Why Alcohol and Semaglutide Don't Mix Well</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Increased Nausea</h3>
            <p>Semaglutide slows stomach emptying, and alcohol can worsen nausea and digestive discomfort.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Blood Sugar Fluctuations</h3>
            <p>Both semaglutide and alcohol affect blood sugar. Drinking may increase hypoglycemia risk, especially for diabetics.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Reduced Tolerance</h3>
            <p>Many patients report feeling intoxicated faster and with less alcohol than before starting semaglutide.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Practical Recommendations</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li><strong>Limit intake:</strong> Stick to 1-2 drinks maximum</li>
          <li><strong>Choose wisely:</strong> Lower-sugar options are better</li>
          <li><strong>Eat first:</strong> Don't drink on an empty stomach</li>
          <li><strong>Stay hydrated:</strong> Alternate alcoholic drinks with water</li>
          <li><strong>Monitor your response:</strong> Pay attention to how you feel</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Medical Disclaimer</h2>
        <p className="text-sm text-muted-foreground">
          This information is for educational purposes only. Always consult your healthcare provider about alcohol consumption while taking semaglutide.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">References</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215256s000lbl.pdf" 
               className="text-primary hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              Ozempic (semaglutide) Prescribing Information
            </a>
          </li>
        </ol>
      </section>

      <TopicClusterNav
        pillarPage={clusterNav.pillarPage}
        hubPage={clusterNav.hubPage}
        relatedArticles={clusterNav.relatedInCluster}
        topic="Semaglutide"
      />
    </BlogLayout>
  );
};

export default SemaglutideAlcohol;
