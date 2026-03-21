import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { BlogArticleSchema } from "@/components/seo/BlogArticleSchema";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { ReadingTime } from "@/components/blog/ReadingTime";
import { CitationList } from "@/components/blog/CitationList";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { medicalReviewers } from "@/data/medicalReviewers";

const SemaglutideDietPlanMeals = () => {
  const publishDate = "2025-11-11";
  const modifiedDate = getModifiedDate('semaglutide-diet-plan-meals', publishDate);
  const reviewer = Object.values(medicalReviewers)[0];
  const clusterNav = getClusterNavigation("/blog/semaglutide-diet-plan-meals");
  
  const questions = [
    {
      question: "What should I eat on semaglutide for optimal results?",
      answer: "Eat 4-6 small protein-rich meals daily (80-100g protein total), plenty of vegetables, complex carbs in moderation, and stay hydrated with 64+ oz water. Avoid greasy, very sweet, or large meals that worsen nausea."
    }
  ];

  const citations = [
    {
      authors: ["Wilding JPH", "Batterham RL", "Calanna S"],
      title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity",
      publication: "N Engl J Med",
      year: "2021",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183"
    },
    {
      authors: ["Rubino D", "Abrahamsson N", "Davies M"],
      title: "Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo on Weight Loss Maintenance",
      publication: "JAMA",
      year: "2021",
      url: "https://jamanetwork.com/journals/jama"
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Semaglutide Diet Plan: Meals for Optimal Results | Trimi</title>
        <meta name="description" content="Complete semaglutide meal plan with sample menus, nutrition guidelines, and practical tips for maximizing weight loss results while managing side effects." />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-diet-plan-meals" />
        <meta name="author" content="Trimi Health Team" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />
      </Helmet>
      <QAPageSchema questions={questions} mainEntityName="Semaglutide Diet Plan" />
      <BlogArticleSchema
        title="Semaglutide Diet Plan: Meals for Optimal Results"
        description="Complete semaglutide meal plan with sample menus, nutrition guidelines, and practical tips for maximizing weight loss results."
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        authorName="Trimi Health Team"
        url="https://trytrimi.com/blog/semaglutide-diet-plan-meals"
        category="Nutrition"
        keywords={["semaglutide diet", "semaglutide meal plan", "what to eat on semaglutide", "semaglutide nutrition guide"]}
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <BlogBreadcrumb category="Semaglutide" title="Semaglutide Diet Plan: Meals" url="/blog/semaglutide-diet-plan-meals" />
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Semaglutide Diet Plan: Meals for Optimal Results</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <ReadingTime minutes={9} />
            </div>
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
            <MedicalReview 
              reviewerName={reviewer?.name ?? "Trimi Medical Team"}
              credentials={reviewer?.credentials ?? "Board-Certified Medical Review Team"}
              reviewDate={modifiedDate}
              specialty={reviewer?.specialty ?? "Obesity Medicine"}
            />
          </header>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl font-semibold">Maximize your semaglutide results with a structured meal plan. Focus on protein, small frequent meals, and nutrient-dense foods.</p>
            
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="font-semibold text-lg mb-2">Evidence-Based Nutrition Guidelines</h3>
              <ul className="text-sm space-y-1 mb-0">
                <li>• Clinical studies show protein intake of 80-100g daily optimizes results<sup>[1]</sup></li>
                <li>• 4-6 small meals help manage GLP-1 medication side effects<sup>[2]</sup></li>
                <li>• Proper hydration (64-80 oz) supports metabolic function</li>
              </ul>
            </Card>
            
            <h2 className="text-3xl font-bold flex items-center gap-2"><UtensilsCrossed className="h-8 w-8 text-primary" />Daily Meal Structure</h2>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Sample Day on Semaglutide</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Breakfast (7am):</strong> Greek yogurt with berries, 1 boiled egg</div>
                <div><strong>Snack (10am):</strong> Protein shake with banana</div>
                <div><strong>Lunch (1pm):</strong> Grilled chicken salad with olive oil</div>
                <div><strong>Snack (4pm):</strong> Hummus with vegetables</div>
                <div><strong>Dinner (7pm):</strong> Baked fish with roasted vegetables</div>
                <div><strong>Evening (9pm):</strong> Small portion of cottage cheese</div>
              </div>
            </Card>

            <h2 id="nutrition" className="text-3xl font-bold mt-8">Nutrition Guidelines</h2>
            <p>Research demonstrates that strategic nutrition timing and composition significantly impacts semaglutide effectiveness and tolerability.</p>
            <ul className="space-y-2">
              <li>• <strong>Protein:</strong> 80-100g daily minimum (1.2-1.6g per kg ideal body weight)</li>
              <li>• <strong>Hydration:</strong> 64-80 oz water daily, more if active</li>
              <li>• <strong>Meal Frequency:</strong> 4-6 small meals spaced 3-4 hours apart</li>
              <li>• <strong>Portion Control:</strong> Listen to satiety cues, stop when comfortable</li>
              <li>• <strong>Fiber:</strong> 25-35g daily from vegetables and whole grains</li>
            </ul>

            <CitationList citations={citations} />

            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-sm"><strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Consult with a qualified healthcare provider before starting semaglutide or making significant dietary changes. Individual nutritional needs may vary.</p>
            </div>

            <AuthorBio 
              name="Trimi Health Team"
              credentials="Reviewed by licensed healthcare professionals"
              bio="Our nutrition content is created by registered dietitians and reviewed by licensed physicians specializing in obesity medicine and metabolic health."
            />

            <RelatedArticles articles={[
              { title: "Best Foods to Eat While on Tirzepatide", url: "/blog/best-foods-tirzepatide", excerpt: "Simple nutrition guide for tirzepatide.", category: "Nutrition" },
              { title: "Kickstarting Your Journey: Semaglutide Basics", url: "/blog/kickstarting-semaglutide-basics", excerpt: "Complete beginner&apos;s guide to semaglutide.", category: "Guide" },
              { title: "Managing Food Interactions with Tirzepatide", url: "/blog/managing-food-interactions-tirzepatide", excerpt: "Complete food interaction guide.", category: "Nutrition" }
            ]} />

            <TopicClusterNav
              topic="Semaglutide Nutrition & Diet"
              relatedArticles={clusterNav.relatedInCluster}
              hubPage="/blog/semaglutide"
            />
          </div>
          <div className="mt-12"><Button asChild size="lg"><Link to="/treatments">Start Your Journey</Link></Button></div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default SemaglutideDietPlanMeals;
