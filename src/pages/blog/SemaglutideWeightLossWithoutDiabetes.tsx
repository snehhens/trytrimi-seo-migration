import { BlogLayout } from "@/components/blog/BlogLayout";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getClusterNavigation } from "@/utils/relatedContent";
import ogImage from "@/assets/og/semaglutide-weight-loss-without-diabetes.jpg";

const SemaglutideWeightLossWithoutDiabetes = () => {
  const publishDate = "2025-01-15";
  const clusterNav = getClusterNavigation('semaglutide-weight-loss-without-diabetes');
  
  const faqs = [
    { question: "Can I take semaglutide for weight loss if I don't have diabetes?", answer: "Yes. Wegovy (semaglutide 2.4mg) is FDA-approved for weight loss in adults with BMI ≥30 or BMI ≥27 with weight-related conditions, regardless of diabetes status." },
    { question: "Is semaglutide effective without diabetes?", answer: "Yes. Clinical trials show 15% average weight loss in non-diabetic patients, similar to results in diabetic patients." }
  ];

  return (
    <BlogLayout
      title="Using Semaglutide for Weight Loss Without Diabetes: What to Know"
      description="Complete guide to semaglutide for weight loss in non-diabetic patients. Eligibility, effectiveness, safety, and getting started without diabetes."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="Semaglutide"
      currentPath="/blog/semaglutide-weight-loss-without-diabetes"
      pageKeywords={["semaglutide without diabetes", "wegovy non-diabetic", "ozempic weight loss only", "GLP-1 obesity treatment", "semaglutide eligibility"]}
      imageUrl={ogImage}
      authorName="Dr. Sarah Mitchell"
      authorCredentials="MD, Endocrinology"
      medicallyReviewed={true}
      reviewDate={publishDate}
      relatedArticles={[
        { title: "Semaglutide Eligibility Requirements", url: "/blog/semaglutide-eligibility", excerpt: "Complete guide to determining if you qualify for semaglutide treatment", category: "Semaglutide" },
        { title: "How to Start Semaglutide", url: "/blog/how-to-start-semaglutide", excerpt: "Step-by-step guide to beginning semaglutide treatment", category: "Semaglutide" }
      ]}
      faqs={faqs}
      isMedical={true}
    >
      <QuickAnswerBox 
        question="Can non-diabetic patients use semaglutide for weight loss?" 
        answer="Yes. Wegovy (semaglutide 2.4mg) is FDA-approved specifically for weight loss in non-diabetic adults with BMI ≥30 or BMI ≥27 with weight-related health conditions. Clinical trials show 15% average weight loss." 
      />
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Eligibility Criteria</h2>
        <ComparisonTable 
          title="Who Qualifies" 
          columns={["Requirement", "Details"]} 
          items={[
            { feature: "BMI ≥30", values: ["Obesity alone qualifies"] },
            { feature: "BMI ≥27", values: ["With weight-related condition"] }
          ]} 
        />
        <p className="mt-6">Learn more about <InternalLink to="/blog/semaglutide-eligibility">eligibility requirements</InternalLink> and <InternalLink to="/blog/how-to-start-semaglutide">getting started</InternalLink>.</p>
      </section>
      
      <TopicClusterNav
        pillarPage={clusterNav.pillarPage}
        hubPage={clusterNav.hubPage}
        relatedArticles={clusterNav.relatedInCluster}
        topic="Semaglutide"
      />
      
      <PeopleAlsoRead links={[
        { title: "Semaglutide Eligibility Requirements", path: "/blog/semaglutide-eligibility" },
        { title: "How to Start Semaglutide", path: "/blog/how-to-start-semaglutide" }
      ]} />
    </BlogLayout>
  );
};

export default SemaglutideWeightLossWithoutDiabetes;
