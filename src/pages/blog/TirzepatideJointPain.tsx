import { BlogLayout } from "@/components/blog/BlogLayout";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import ogImage from "@/assets/og/tirzepatide-joint-pain.jpg";

const TirzepatideJointPain = () => {
  const clusterNav = getClusterNavigation("/blog/tirzepatide-joint-pain");
  
  const faqs = [
    {
      question: "Can tirzepatide reduce joint pain?",
      answer: "Yes, through substantial weight loss that reduces joint stress."
    }
  ];

  return (
    <BlogLayout
      title="Tirzepatide and Joint Pain: Arthritis Relief"
      description="How tirzepatide reduces joint pain through weight loss."
      publishDate="2025-03-28"
      currentPath="/blog/tirzepatide-joint-pain"
      pageKeywords={["tirzepatide joint pain", "arthritis"]}
      imageUrl={ogImage}
      readingTime={15}
      category="Health Effects"
      faqs={faqs}
      isMedical={true}
    >
      <p className="text-lg mb-6">Weight loss dramatically reduces joint stress and pain.</p>
      
      <TopicClusterNav
        topic="Tirzepatide Health Effects"
        relatedArticles={clusterNav.relatedInCluster}
        hubPage="/blog/tirzepatide"
      />
    </BlogLayout>
  );
};

export default TirzepatideJointPain;
