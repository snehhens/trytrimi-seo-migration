import { BlogLayout } from "@/components/blog/BlogLayout";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import ogImage from "@/assets/og/tirzepatide-heart-health.jpg";

const TirzepatideHeartHealth = () => {
  const clusterNav = getClusterNavigation("/blog/tirzepatide-heart-health");
  
  const faqs = [
    {
      question: "Does tirzepatide improve heart health?",
      answer: "Yes, through blood pressure reduction, improved lipid profiles, and decreased inflammation."
    }
  ];

  return (
    <BlogLayout
      title="Tirzepatide and Heart Health: Cardiovascular Benefits"
      description="How tirzepatide improves heart health and reduces cardiovascular risk."
      publishDate="2024-10-15"
      currentPath="/blog/tirzepatide-heart-health"
      pageKeywords={["tirzepatide heart health", "cardiovascular"]}
      imageUrl={ogImage}
      readingTime={17}
      category="Tirzepatide"
      faqs={faqs}
      authorName="Dr. Michael Chen"
      authorCredentials="MD, Cardiologist"
      isMedical={true}
    >
      <p className="text-lg mb-6">Tirzepatide offers powerful cardiovascular benefits beyond weight loss.</p>
      
      <TopicClusterNav
        topic="Tirzepatide Health Effects"
        relatedArticles={clusterNav.relatedInCluster}
        hubPage="/blog/tirzepatide"
      />
    </BlogLayout>
  );
};

export default TirzepatideHeartHealth;
