import { BlogLayout } from "@/components/blog/BlogLayout";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const TirzepatideMenopause = () => {
  const clusterNav = getClusterNavigation("/blog/tirzepatide-menopause");
  const faqs = [
    {
      question: "Can tirzepatide help with menopause weight gain?",
      answer: "Yes, tirzepatide can be highly effective for menopause-related weight gain. Clinical data shows 15-22% weight loss even in postmenopausal women. It addresses metabolic slowdown, insulin resistance, and appetite changes that occur during menopause, making it particularly useful when traditional approaches fail."
    },
    {
      question: "Is tirzepatide safe for women going through menopause?",
      answer: "Tirzepatide appears safe for perimenopausal and postmenopausal women. Studies include women across age ranges showing consistent safety profiles. However, women should discuss with healthcare providers, especially if using hormone replacement therapy (HRT) or managing other menopausal symptoms."
    },
    {
      question: "Does tirzepatide affect hormones during menopause?",
      answer: "Tirzepatide doesn't directly affect reproductive hormones like estrogen or progesterone. However, weight loss and improved insulin sensitivity can positively impact hormone balance, potentially reducing some menopausal symptoms. It works synergistically with metabolic changes during menopause."
    }
  ];

  const relatedArticles = [
    {
      title: "Tirzepatide and Hormones: Complete Guide",
      url: "/blog/tirzepatide-hormones",
      excerpt: "How tirzepatide affects hormonal balance",
      category: "Health Effects"
    }
  ];

  return (
    <BlogLayout
      title="Tirzepatide for Menopause Weight Gain: What Women Need to Know"
      description="Discover how tirzepatide can help with menopause-related weight gain and metabolic changes. Expert guidance for women navigating perimenopause and menopause."
      publishDate="2025-05-26"
      currentPath="/blog/tirzepatide-menopause"
      pageKeywords={["tirzepatide menopause", "Mounjaro menopause", "menopause weight loss", "perimenopause weight gain"]}
      readingTime={13}
      category="Women's Health"
      relatedArticles={relatedArticles}
      faqs={faqs}
      isMedical={true}
      medicalAudience={["Patient"]}
    >
      <p className="text-xl text-muted-foreground mb-8">
        Menopause brings significant hormonal changes that often lead to stubborn weight gain and metabolic shifts. Learn how tirzepatide can help women navigate this challenging life stage.
      </p>

      <h2 className="text-3xl font-bold mb-6">Understanding Menopause-Related Weight Gain</h2>
      <p className="text-muted-foreground mb-4">
        The transition through perimenopause and menopause brings profound hormonal shifts that affect metabolism, body composition, and weight distribution. On average, women gain 5-10 pounds during the menopausal transition.
      </p>

      <h2 className="text-3xl font-bold my-6">How Tirzepatide Helps</h2>
      <ul className="space-y-3 text-muted-foreground">
        <li>• <strong>Addresses metabolic slowdown:</strong> Counteracts declining metabolic rate</li>
        <li>• <strong>Improves insulin resistance:</strong> Restores insulin sensitivity that worsens during menopause</li>
        <li>• <strong>Reduces visceral fat:</strong> Targets stubborn abdominal fat accumulation</li>
        <li>• <strong>Controls appetite:</strong> Helps manage increased hunger and cravings</li>
      </ul>
      
      <TopicClusterNav
        topic="Tirzepatide Women's Health"
        relatedArticles={clusterNav.relatedInCluster}
        hubPage="/blog/tirzepatide"
      />
    </BlogLayout>
  );
};

export default TirzepatideMenopause;
