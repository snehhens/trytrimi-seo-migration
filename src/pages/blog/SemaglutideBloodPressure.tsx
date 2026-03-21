import { BlogLayout } from "@/components/blog/BlogLayout";
import { Card } from "@/components/ui/card";
import { Heart, Activity, TrendingDown } from "lucide-react";
import ogImage from "@/assets/og/semaglutide-blood-pressure.jpg";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideBloodPressure = () => {
  const clusterNav = getClusterNavigation('semaglutide-blood-pressure');
  const faqs = [
    {
      question: "How much does semaglutide lower blood pressure?",
      answer: "Clinical trials show semaglutide reduces systolic blood pressure by an average of 6.2 mmHg and diastolic pressure by 2.9 mmHg. The SELECT trial demonstrated a 20% reduction in major cardiovascular events."
    },
    {
      question: "Can semaglutide replace blood pressure medication?",
      answer: "Semaglutide should not replace blood pressure medication without medical supervision. However, about 40% of patients in clinical trials were able to reduce or eliminate BP medications under physician guidance."
    },
    {
      question: "How long does it take for blood pressure to improve on semaglutide?",
      answer: "Blood pressure improvements typically begin within 4-8 weeks as weight loss starts. Maximum benefits usually occur after 6+ months of consistent treatment with continued weight loss."
    }
  ];

  return (
    <BlogLayout
      title="Semaglutide and Blood Pressure: Cardiovascular Benefits Explained"
      description="How semaglutide lowers blood pressure and improves heart health. Evidence-based guide to hypertension reduction and cardiovascular benefits from clinical trials."
      publishDate="2025-04-12"
      pageKeywords={[
        "semaglutide blood pressure",
        "ozempic hypertension",
        "wegovy cardiovascular",
        "semaglutide heart health",
        "blood pressure reduction"
      ]}
      currentPath="/blog/semaglutide-blood-pressure"
      readingTime={13}
      authorName="Dr. Sarah Mitchell, MD"
      authorCredentials="Cardiovascular Medicine"
      authorBio="Dr. Sarah Mitchell is a board-certified cardiologist specializing in cardiovascular risk management and preventive cardiology."
      imageUrl={ogImage}
      category="Cardiovascular Health"
      faqs={faqs}
      isMedical={true}
      medicalAudience={["Patient"]}
    >
      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        Beyond weight loss, semaglutide offers significant cardiovascular benefits, particularly in reducing blood pressure. Clinical trials demonstrate consistent reductions in both systolic and diastolic blood pressure, with some patients achieving normal readings without additional antihypertensive medications.
      </p>

      <Card className="p-6 my-8 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Cardiovascular Finding</h3>
            <p className="text-muted-foreground">
              The SELECT trial showed semaglutide reduced major adverse cardiovascular events by 20% in patients with existing heart disease, with blood pressure reduction contributing significantly to this benefit.
            </p>
          </div>
        </div>
      </Card>

      {/* ... keep existing code (all remaining content sections) */}

      <TopicClusterNav
        pillarPage={clusterNav.pillarPage}
        hubPage={clusterNav.hubPage}
        relatedArticles={clusterNav.relatedInCluster}
        topic="Semaglutide"
      />
    </BlogLayout>
  );
};

export default SemaglutideBloodPressure;