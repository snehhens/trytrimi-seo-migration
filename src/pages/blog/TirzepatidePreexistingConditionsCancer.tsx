import { BlogLayout } from "@/components/blog/BlogLayout";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import ogImage from "@/assets/og/tirzepatide-preexisting-conditions-cancer.jpg";

const TirzepatidePreexistingConditionsCancer = () => {
  const publishDate = "2025-01-15";
  const clusterNav = getClusterNavigation("/blog/tirzepatide-preexisting-conditions-cancer");
  
  const faqs = [
    { question: "Can cancer survivors take tirzepatide?", answer: "Many cancer survivors can safely use tirzepatide after completing treatment and with oncologist approval. Individual assessment is essential based on cancer type, treatment history, and current health status." }
  ];

  return (
    <BlogLayout
      title="Tirzepatide for Obesity with Preexisting Conditions Like Cancer"
      description="Guide to tirzepatide safety in patients with preexisting conditions including cancer history. Medical considerations, contraindications, and monitoring."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="Tirzepatide"
      currentPath="/blog/tirzepatide-preexisting-conditions-cancer"
      pageKeywords={["tirzepatide cancer", "tirzepatide preexisting conditions", "mounjaro cancer survivors", "GLP-1 oncology", "weight loss after cancer"]}
      imageUrl={ogImage}
      authorName="Dr. James Anderson"
      authorCredentials="MD, Oncology"
      medicallyReviewed={true}
      reviewDate={publishDate}
      relatedArticles={[
        { title: "Tirzepatide Safety Profile", url: "/blog/tirzepatide-safety", excerpt: "Comprehensive safety information for tirzepatide treatment", category: "Tirzepatide" }
      ]}
      faqs={faqs}
      isMedical={true}
      medicalAudience={["Patient", "Physician", "Oncologist"]}
    >
      <QuickAnswerBox 
        question="Can patients with cancer history use tirzepatide?" 
        answer="Many cancer survivors can use tirzepatide safely after treatment completion and with medical clearance. However, absolute contraindications include personal/family history of medullary thyroid cancer or MEN2 syndrome." 
      />
      
      <div className="prose max-w-none mt-8">
        <p className="text-foreground/80">Comprehensive medical evaluation is essential before starting tirzepatide in patients with complex medical histories. See <InternalLink to="/blog/tirzepatide-safety">complete safety profile</InternalLink>.</p>
        
        <PeopleAlsoRead links={[
          { title: "Tirzepatide Safety Profile", path: "/blog/tirzepatide-safety" }
        ]} />
        
        <TopicClusterNav
          topic="Tirzepatide Safety"
          relatedArticles={clusterNav.relatedInCluster}
          hubPage="/blog/tirzepatide"
        />
      </div>
    </BlogLayout>
  );
};

export default TirzepatidePreexistingConditionsCancer;
