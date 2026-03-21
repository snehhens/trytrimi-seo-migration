import { BlogLayout } from "@/components/blog/BlogLayout";
import { Card } from "@/components/ui/card";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const TirzepatideKidneyHealth = () => {
  const clusterNav = getClusterNavigation("/blog/tirzepatide-kidney-health");
  
  const faqs = [
    {
      question: "Is tirzepatide safe for people with kidney disease?",
      answer: "Tirzepatide appears safe for mild to moderate chronic kidney disease (CKD stages 1-3). Studies show potential renal protection through improved glycemic control, blood pressure reduction, and decreased proteinuria. Patients with advanced CKD should use caution and work closely with nephrologists."
    },
    {
      question: "Does tirzepatide protect kidney function?",
      answer: "Emerging evidence suggests tirzepatide offers kidney protection through multiple mechanisms: improved blood sugar control preventing diabetic nephropathy, reduced inflammation, blood pressure lowering, and weight loss decreasing kidney workload. Ongoing SURPASS-CVOT trial will provide definitive renal outcome data."
    },
    {
      question: "Can tirzepatide help diabetic kidney disease?",
      answer: "Yes, tirzepatide shows promise for diabetic kidney disease by improving glycemic control (reducing HbA1c by 2%), lowering blood pressure, reducing proteinuria (protein in urine), and potentially slowing GFR decline. This is particularly important since diabetes is the leading cause of kidney failure."
    }
  ];

  const relatedArticles = [
    {
      title: "Tirzepatide Safety Profile: Complete Guide",
      url: "/blog/tirzepatide-safety",
      excerpt: "Comprehensive safety analysis",
      category: "Safety"
    }
  ];

  return (
    <BlogLayout
      title="Tirzepatide and Kidney Function: Renal Benefits for CKD Patients"
      description="How does tirzepatide affect kidney function? Learn about renal protection, safety in chronic kidney disease, and emerging evidence for kidney health benefits."
      publishDate="2024-11-05"
      currentPath="/blog/tirzepatide-kidney-health"
      pageKeywords={["tirzepatide kidney", "mounjaro CKD", "GLP-1 kidney disease", "diabetic nephropathy"]}
      readingTime={9}
      category="Health Effects"
      relatedArticles={relatedArticles}
      faqs={faqs}
      isMedical={true}
      medicalAudience={["Patient"]}
    >
      <h2 className="text-3xl font-bold mb-6">Why Kidney Health Matters for Diabetes and Obesity</h2>
      <p className="text-muted-foreground mb-4">
        Type 2 diabetes is the leading cause of chronic kidney disease (CKD) and kidney failure in the United States. About 1 in 3 adults with diabetes develops diabetic kidney disease.
      </p>

      <h2 className="text-3xl font-bold my-6">How Tirzepatide Protects Kidneys</h2>
      <ul className="space-y-3 text-muted-foreground">
        <li>• <strong>Improved glycemic control:</strong> Reduces HbA1c by ~2%, preventing diabetic nephropathy</li>
        <li>• <strong>Blood pressure reduction:</strong> Lowers systolic BP by 7-10 mmHg</li>
        <li>• <strong>Weight loss benefits:</strong> Reduces kidney workload and inflammation</li>
        <li>• <strong>Proteinuria reduction:</strong> Decreases protein leakage in urine</li>
      </ul>
      
      <TopicClusterNav
        topic="Tirzepatide Health Effects"
        relatedArticles={clusterNav.relatedInCluster}
        hubPage="/blog/tirzepatide"
      />
    </BlogLayout>
  );
};

export default TirzepatideKidneyHealth;
