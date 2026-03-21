import { BlogLayout } from "@/components/blog/BlogLayout";
import ogImage from "@/assets/og/semaglutide-bone-health.jpg";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideBoneHealth = () => {
  const clusterNav = getClusterNavigation('semaglutide-bone-health');
  const faqs = [
    {
      question: "Does semaglutide affect bone density?",
      answer: "Semaglutide itself doesn't directly harm bone health. However, the rapid weight loss it produces can lead to bone density reduction if proper precautions aren't taken. Studies show every 10% weight reduction is associated with 1-2% decrease in bone mineral density, primarily affecting weight-bearing sites like the hip and spine."
    },
    {
      question: "How can I protect my bones while on semaglutide?",
      answer: "Protect bones by consuming 1,000-1,200mg calcium daily, 1,000-2,000 IU vitamin D, 1.2-1.6g protein per kg body weight, engaging in weight-bearing and resistance exercises 2-3x weekly, and losing weight gradually (1-2 pounds weekly). Consider DEXA scans to monitor bone density if at high risk."
    },
    {
      question: "Who is at highest risk for bone loss on semaglutide?",
      answer: "Postmenopausal women, adults over 65, those with existing osteopenia or osteoporosis, people losing weight very rapidly, those with eating disorder history, corticosteroid users, smokers, and heavy alcohol users face higher bone loss risk during weight loss treatment."
    },
    {
      question: "Should I take calcium supplements on semaglutide?",
      answer: "If you can't consistently get 1,000-1,200mg calcium from food sources like dairy, leafy greens, and fortified foods, supplement with calcium citrate (better absorbed than carbonate). Split doses to no more than 500mg at once for optimal absorption."
    }
  ];

  return (
    <BlogLayout
      title="Semaglutide and Bone Health: Protecting Your Bones During Weight Loss"
      description="Learn how semaglutide affects bone density and bone health. Expert strategies for maintaining strong bones during GLP-1 weight loss treatment."
      publishDate="2025-06-15"
      pageKeywords={[
        "semaglutide bone health",
        "semaglutide bone density",
        "Ozempic bones",
        "GLP-1 osteoporosis",
        "semaglutide calcium"
      ]}
      currentPath="/blog/semaglutide-bone-health"
      readingTime={12}
      imageUrl={ogImage}
      faqs={faqs}
      isMedical={true}
    >
      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Bone health is crucial during weight loss. Discover how semaglutide affects bone density and learn 
        evidence-based strategies to maintain strong, healthy bones throughout your treatment.
      </p>

      <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
        <h3 className="text-xl font-semibold mb-3">Critical for Long-Term Health</h3>
        <p className="text-sm text-muted-foreground">
          Rapid weight loss can affect bone density if proper precautions aren't taken. Understanding and 
          implementing bone protection strategies ensures you emerge from treatment healthier in every way.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Understanding Bone Health and Weight Loss</h2>
        <p className="mb-4">
          Your bones are living tissue that constantly remodel themselves—breaking down old bone and building new 
          bone in a balanced process. This delicate equilibrium can be disrupted during significant weight loss, 
          particularly rapid weight loss, potentially leading to decreased bone density and increased fracture risk.
        </p>
        <p className="mb-4">
          Bone health matters throughout life, but becomes especially critical as we age. Peak bone mass is typically 
          achieved by age 30, after which bone density gradually declines. For women, this decline accelerates 
          dramatically after menopause.
        </p>
        <p>
          The good news: with proper attention to nutrition, exercise, and lifestyle factors, most people can successfully 
          lose weight on semaglutide while preserving or even improving bone health.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How Weight Loss Affects Bone Density</h2>
        
        <h3 className="text-2xl font-semibold mb-4">The Mechanical Load Factor</h3>
        <p className="mb-4">
          Bones adapt to the mechanical stress placed on them. When you lose significant weight, this mechanical 
          stimulus decreases, which can trigger bone remodeling that favors breakdown over formation.
        </p>
        <p className="mb-4">
          Research shows that every 10% reduction in body weight is associated with approximately 1-2% decrease in bone 
          mineral density, primarily affecting weight-bearing sites like the hip and spine.
        </p>

        <h3 className="text-2xl font-semibold mb-4 mt-8">Nutritional Factors</h3>
        <p className="mb-4">
          When people reduce caloric intake for weight loss, they often inadvertently decrease consumption of bone-critical 
          nutrients:
        </p>
        <ul className="space-y-2 my-4">
          <li><strong>Calcium:</strong> Primary structural component of bone</li>
          <li><strong>Vitamin D:</strong> Essential for calcium absorption</li>
          <li><strong>Protein:</strong> Provides building blocks for bone matrix</li>
          <li><strong>Magnesium, phosphorus, vitamin K:</strong> Supporting nutrients for bone formation</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Essential Strategies for Bone Protection</h2>

        <h3 className="text-2xl font-semibold mb-4">1. Optimize Calcium Intake</h3>
        <p className="mb-4">
          <strong>Target: 1,000-1,200mg daily</strong>
        </p>
        <p className="mb-4">Food sources are ideal:</p>
        <ul className="space-y-2 my-4">
          <li>Dairy products (milk, yogurt, cheese): 300mg per serving</li>
          <li>Fortified plant milks: 300-450mg per cup</li>
          <li>Leafy greens (collards, kale): 100-200mg per cup cooked</li>
          <li>Canned sardines/salmon with bones: 300-400mg per 3oz</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 mt-8">2. Ensure Adequate Vitamin D</h3>
        <p className="mb-4">
          <strong>Target: 1,000-2,000 IU daily</strong>
        </p>
        <p className="mb-4">
          Vitamin D is essential for calcium absorption and bone metabolism. Check your vitamin D level with a blood test.
        </p>

        <h3 className="text-2xl font-semibold mb-4 mt-8">3. Prioritize Protein Intake</h3>
        <p className="mb-4">
          <strong>Target: 1.2-1.6g per kg ideal body weight daily</strong>
        </p>
        <p className="mb-4">
          Protein is crucial for maintaining bone matrix and preserving muscle mass during weight loss.
        </p>

        <h3 className="text-2xl font-semibold mb-4 mt-8">4. Engage in Weight-Bearing Exercise</h3>
        <p className="mb-4">
          Exercise provides the mechanical stimulus that bones need to maintain density:
        </p>
        <ul className="space-y-2 my-4">
          <li>Weight-bearing aerobic exercise 4-5 days/week (walking, jogging, dancing)</li>
          <li>Resistance training 2-3 days/week</li>
          <li>Focus on all major muscle groups</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Monitoring Your Bone Health</h2>
        
        <h3 className="text-2xl font-semibold mb-4">When to Get a DEXA Scan</h3>
        <p className="mb-4">
          Consider baseline and follow-up scans if you:
        </p>
        <ul className="space-y-2 my-4">
          <li>Are postmenopausal</li>
          <li>Are over age 65 (women) or 70 (men)</li>
          <li>Have existing osteopenia or osteoporosis</li>
          <li>Plan to lose more than 50 pounds</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
        <ul className="space-y-2 my-4">
          <li>✓ Weight loss can affect bone density, but proper precautions minimize risks</li>
          <li>✓ Prioritize calcium (1,000-1,200mg), vitamin D (1,000-2,000 IU), and protein</li>
          <li>✓ Weight-bearing and resistance exercise are essential</li>
          <li>✓ Gradual weight loss (1-2 pounds weekly) is preferable for bone health</li>
          <li>✓ High-risk individuals should discuss DEXA scanning with their provider</li>
        </ul>
      </section>

      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg my-8">
        <h4 className="font-semibold mb-3">Medical Disclaimer</h4>
        <p className="text-sm text-muted-foreground">
          This article provides educational information about bone health during weight loss but does not constitute 
          medical advice. Always consult with your healthcare provider to develop a personalized bone health strategy.
        </p>
      </div>

      <TopicClusterNav
        pillarPage={clusterNav.pillarPage}
        hubPage={clusterNav.hubPage}
        relatedArticles={clusterNav.relatedInCluster}
        topic="Semaglutide"
      />
    </BlogLayout>
  );
};

export default SemaglutideBoneHealth;