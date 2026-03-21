import { BlogLayout } from "@/components/blog/BlogLayout";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { medicalReviewers } from "@/data/medicalReviewers";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const BestFoodsTirzepatide = () => {
  const publishDate = "2025-11-11";
  const modifiedDate = getModifiedDate('best-foods-tirzepatide', publishDate);
  const reviewer = Object.values(medicalReviewers)[0];
  const clusterNav = getClusterNavigation('best-foods-tirzepatide');
  
  const faqs = [
    {
      question: "What are the best foods to eat while on tirzepatide?",
      answer: "Focus on lean proteins (chicken, fish, Greek yogurt), non-starchy vegetables, complex carbs in moderation, and healthy fats. Eat 4-6 small meals daily, prioritize 80-100g protein, and stay hydrated with 64+ oz water."
    }
  ];

  const citations = [
    {
      authors: ["Jastreboff AM", "Aronne LJ", "Ahmad NN", "Wharton S"],
      title: "Tirzepatide Once Weekly for the Treatment of Obesity",
      publication: "N Engl J Med",
      year: "2022",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038"
    },
    {
      authors: ["Frias JP", "Davies MJ", "Rosenstock J"],
      title: "Efficacy and safety of tirzepatide in type 2 diabetes: a systematic review",
      publication: "Diabetes Obes Metab",
      year: "2023",
      url: "https://pubmed.ncbi.nlm.nih.gov/"
    }
  ];
  
  return (
    <BlogLayout
      title="Best Foods to Eat While on Tirzepatide: A Simple Guide"
      description="Simple guide to the best foods for tirzepatide success. Learn what to eat, what to avoid, meal timing, and practical tips for optimal weight loss results."
      publishDate={publishDate}
      lastUpdated={modifiedDate}
      currentPath="/blog/best-foods-tirzepatide"
      pageKeywords={["tirzepatide diet", "tirzepatide foods", "best foods tirzepatide", "tirzepatide nutrition", "tirzepatide meal plan"]}
      category="Nutrition"
      authorName={reviewer?.name ?? "Trimi Medical Team"}
      authorCredentials={reviewer?.credentials ?? "Board-Certified Medical Review Team"}
      medicallyReviewed={true}
      reviewDate={modifiedDate}
      faqs={faqs}
      isMedical={true}
    >
      <section className="mb-12" id="top-foods">
        <h2 className="text-3xl font-bold mb-6">Top Food Categories</h2>
        
        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            1. Lean Proteins (Priority #1)
          </h3>
          <p className="mb-3">Aim for 80-100g daily to preserve muscle and stay satisfied.</p>
          <ul className="space-y-2">
            <li>• Chicken breast, turkey</li>
            <li>• White fish (cod, tilapia)</li>
            <li>• Greek yogurt (0% fat)</li>
            <li>• Egg whites</li>
            <li>• Protein shakes (whey or plant-based)</li>
          </ul>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            2. Non-Starchy Vegetables (Unlimited)
          </h3>
          <ul className="space-y-2">
            <li>• Leafy greens (spinach, kale, lettuce)</li>
            <li>• Broccoli, cauliflower</li>
            <li>• Bell peppers, zucchini</li>
            <li>• Cucumbers, tomatoes</li>
            <li>• Green beans, asparagus</li>
          </ul>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            3. Complex Carbs (Moderate Portions)
          </h3>
          <ul className="space-y-2">
            <li>• Oatmeal (½ cup cooked)</li>
            <li>• Quinoa, brown rice (½ cup)</li>
            <li>• Sweet potato (small)</li>
            <li>• Whole grain bread (1 slice)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            4. Healthy Fats (Small Amounts)
          </h3>
          <ul className="space-y-2">
            <li>• Avocado (¼ fruit)</li>
            <li>• Olive oil (1 tbsp)</li>
            <li>• Nuts (small handful)</li>
            <li>• Fatty fish (salmon, mackerel)</li>
          </ul>
        </Card>
      </section>

      <section className="mb-12" id="foods-avoid">
        <h2 className="text-3xl font-bold mb-6">Foods to Avoid</h2>
        <div className="bg-destructive/10 p-6 rounded-lg">
          <ul className="space-y-2">
            <li>• <strong>High-fat fried foods:</strong> Increase nausea</li>
            <li>• <strong>Sugary foods/drinks:</strong> Blood sugar spikes</li>
            <li>• <strong>Processed foods:</strong> Low nutrition, high calories</li>
            <li>• <strong>Heavy dairy:</strong> Can worsen GI symptoms</li>
            <li>• <strong>Carbonated drinks:</strong> Increase bloating</li>
            <li>• <strong>Large portions:</strong> Overwhelm reduced stomach capacity</li>
          </ul>
        </div>
      </section>

      <section className="mb-12" id="meal-timing">
        <h2 className="text-3xl font-bold mb-6">Meal Timing Strategies</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li><strong>Eat 4-6 small meals:</strong> Better than 3 large meals</li>
          <li><strong>Don't skip breakfast:</strong> Sets metabolism for the day</li>
          <li><strong>Stop eating 2-3 hours before bed:</strong> Reduces reflux</li>
          <li><strong>Eat protein first:</strong> At each meal for satiety</li>
          <li><strong>Take 20-30 minutes per meal:</strong> Slow eating reduces nausea</li>
        </ul>
      </section>

      <section className="mb-12" id="hydration">
        <h2 className="text-3xl font-bold mb-6">Hydration Tips</h2>
        <div className="bg-primary/5 p-6 rounded-lg">
          <p className="mb-4"><strong>Aim for 64+ oz (8+ cups) water daily</strong></p>
          <ul className="space-y-2">
            <li>• Drink water between meals, not during</li>
            <li>• Start day with 16 oz water</li>
            <li>• Add electrolytes if needed</li>
            <li>• Avoid sugary drinks</li>
            <li>• Herbal tea counts toward hydration</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">References</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          {citations.map((citation, index) => (
            <li key={index}>
              {citation.authors.join(", ")}. {citation.title}. <em>{citation.publication}</em>. {citation.year}.{' '}
              <a href={citation.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </li>
          ))}
        </ol>
      </section>

      <TopicClusterNav
        hubPage={clusterNav.hubPage}
        relatedArticles={clusterNav.relatedInCluster}
        topic="Tirzepatide"
      />

      <div className="bg-primary/10 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Get Started with Trimi</h3>
        <p className="text-lg mb-6">Personalized support for your tirzepatide journey</p>
        <Button asChild size="lg">
          <Link to="/treatments">Start Now</Link>
        </Button>
      </div>
    </BlogLayout>
  );
};

export default BestFoodsTirzepatide;
