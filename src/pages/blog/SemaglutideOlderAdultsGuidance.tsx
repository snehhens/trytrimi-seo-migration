import { BlogLayout } from "@/components/blog/BlogLayout";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import { CitationList } from "@/components/blog/CitationList";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import ogImage from "@/assets/og/semaglutide-older-adults-guidance.jpg";

const SemaglutideOlderAdultsGuidance = () => {
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  const clusterNav = getClusterNavigation('semaglutide-older-adults-guidance');

  const faqs = [
    { question: "Is semaglutide safe for older adults over 65?", answer: "Yes, semaglutide is generally safe for older adults. Clinical trials included patients 65+ with good results. However, older adults require closer monitoring for side effects, hydration, nutrition, and potential medication interactions." },
    { question: "Do older adults lose as much weight on semaglutide?", answer: "Older adults typically lose 10-15% of body weight, similar to younger patients. However, preserving muscle mass is crucial, requiring adequate protein intake and resistance exercise." },
    { question: "What special precautions should older adults take?", answer: "Key precautions include: slower dose escalation, monitoring kidney function, ensuring adequate nutrition and hydration, protein intake of 1.2-1.6g/kg daily, vitamin supplementation, and regular strength training to preserve muscle mass." },
    { question: "Can semaglutide help with age-related health conditions?", answer: "Yes. Semaglutide improves multiple age-related conditions including type 2 diabetes, hypertension, cardiovascular disease risk, mobility issues related to obesity, and sleep apnea." }
  ];

  return (
    <BlogLayout
      title="Semaglutide for Older Adults: Benefits, Risks, and 2025 Guidance"
      description="Complete guide to semaglutide for adults 65+. Safety considerations, efficacy, muscle preservation, special precautions, and optimizing treatment in older adults."
      publishDate={publishDate}
      lastUpdated={modifiedDate}
      category="Semaglutide"
      currentPath="/blog/semaglutide-older-adults-guidance"
      pageKeywords={["semaglutide older adults", "semaglutide seniors", "wegovy elderly", "weight loss over 65", "GLP-1 older patients"]}
      imageUrl={ogImage}
      authorName="Dr. Margaret Sullivan"
      authorCredentials="MD, Geriatrics"
      medicallyReviewed={true}
      reviewDate={modifiedDate}
      relatedArticles={[
        { title: "Semaglutide Muscle Preservation Guide", url: "/blog/semaglutide-muscle-preservation", excerpt: "How to maintain muscle mass during semaglutide treatment", category: "Semaglutide" },
        { title: "Semaglutide Kidney Function Monitoring", url: "/blog/semaglutide-kidney-function", excerpt: "Kidney health considerations during treatment", category: "Semaglutide" }
      ]}
      faqs={faqs}
      isMedical={true}
      medicalAudience={["Patient", "Physician", "Geriatrician"]}
    >
      <p className="text-xl text-muted-foreground mb-6">Evidence-based guidance on using semaglutide safely and effectively in adults 65 and older</p>
      
      <QuickAnswerBox 
        question="Is semaglutide effective and safe for older adults?" 
        answer="Yes, clinical data shows semaglutide is effective and safe for adults 65+ with similar weight loss results (12-15%) as younger patients. Special monitoring for kidney function, muscle mass, nutrition, and medication interactions is essential for optimal safety." 
      />
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Safety and Efficacy in Older Adults</h2>
        <ComparisonTable 
          title="Outcomes by Age Group" 
          columns={["Age 18-64", "Age 65+"]} 
          items={[
            { feature: "Average Weight Loss", values: ["15%", "12-14%"] },
            { feature: "Side Effects", values: ["Standard", "Similar incidence"] },
            { feature: "Discontinuation Rate", values: ["6-7%", "8-10%"] }
          ]} 
        />
        <p className="text-foreground/80 leading-relaxed mt-6">Learn more about <InternalLink to="/blog/semaglutide-muscle-preservation">preserving muscle mass</InternalLink> during treatment.</p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Special Considerations for Older Adults</h2>
        <div className="bg-primary/5 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-lg mb-3">Key Monitoring Points</h4>
          <ul className="space-y-2">
            <li><strong>Muscle Mass:</strong> Regular body composition assessments</li>
            <li><strong>Kidney Function:</strong> Monitor creatinine and eGFR</li>
            <li><strong>Hydration Status:</strong> Ensure adequate fluid intake</li>
            <li><strong>Medication Interactions:</strong> Review all medications regularly</li>
            <li><strong>Nutritional Status:</strong> Monitor protein intake and vitamins</li>
          </ul>
        </div>
      </section>
      
      <CitationList citations={[
        { authors: ["Wilding, J.P.H.", "et al."], title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity", publication: "New England Journal of Medicine", year: "2021", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183", doi: "10.1056/NEJMoa2032183" }
      ]} />
      
      <PeopleAlsoRead links={[
        { title: "Semaglutide Muscle Preservation Guide", path: "/blog/semaglutide-muscle-preservation" },
        { title: "Semaglutide Kidney Function Monitoring", path: "/blog/semaglutide-kidney-function" }
      ]} />
      
      <TopicClusterNav
        pillarPage={clusterNav.pillarPage}
        hubPage={clusterNav.hubPage}
        relatedArticles={clusterNav.relatedInCluster}
        topic="Semaglutide"
      />
    </BlogLayout>
  );
};

export default SemaglutideOlderAdultsGuidance;
