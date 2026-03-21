import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, Utensils, Leaf, Clock, CheckCircle, Apple, Salad, Fish, Egg } from "lucide-react";

export default function BestFoodsRecipesSemaglutide() {
  const faqItems = [
    {
      question: "What are the best foods to eat while taking semaglutide?",
      answer: "The best foods on semaglutide include lean proteins (chicken, fish, eggs), non-starchy vegetables, complex carbohydrates in moderation, and healthy fats. Focus on nutrient-dense foods since you'll be eating smaller portions."
    },
    {
      question: "Should I follow a specific diet plan on semaglutide?",
      answer: "While no specific diet is required, a high-protein, moderate-carb diet tends to work best. Aim for 25-30% of calories from protein to preserve muscle mass while losing weight."
    },
    {
      question: "What foods should I avoid on semaglutide?",
      answer: "Avoid high-fat, greasy foods that can worsen nausea, sugary foods and drinks, alcohol (especially initially), and very large portions that can cause discomfort."
    },
    {
      question: "How many calories should I eat on semaglutide?",
      answer: "Most people naturally reduce to 1,200-1,500 calories daily due to appetite suppression. Work with your provider to determine the right calorie target for your goals."
    },
    {
      question: "Can I drink coffee while taking semaglutide?",
      answer: "Yes, coffee is generally fine on semaglutide. However, some people find caffeine increases nausea initially. Start with smaller amounts and avoid adding excessive sugar or cream."
    }
  ];

  const relatedArticles = [
    { title: "Semaglutide Diet Plan", url: "/blog/semaglutide-diet-plan", excerpt: "Complete diet plan for optimal results on semaglutide" },
    { title: "Semaglutide Side Effects", url: "/blog/semaglutide-side-effects", excerpt: "Managing common side effects and what to expect" },
    { title: "First Month on Semaglutide", url: "/blog/semaglutide-first-month", excerpt: "What to expect during your first month of treatment" },
    { title: "Managing Muscle Loss on Semaglutide", url: "/blog/managing-muscle-loss-semaglutide-exercise-nutrition", excerpt: "Preserve muscle mass while losing weight" }
  ];

  return (
    <>
      <BlogSEO
        title="Best Foods and Recipes for Semaglutide Success | Complete Diet Guide"
        description="Discover the best foods to eat on semaglutide, complete meal plans, and easy recipes to maximize weight loss while minimizing side effects. Expert nutrition tips for GLP-1 success."
        url="/blog/best-foods-recipes-semaglutide"
        publishDate="2025-12-05"
        modifiedDate="2025-12-05"
        imageUrl="/og-semaglutide-foods.jpg"
        keywords={["foods to eat on semaglutide", "semaglutide diet plan", "glp-1 recipes", "semaglutide meal plan", "best diet for semaglutide", "semaglutide nutrition"]}
        faqs={faqItems}
        medicalAudience={["Patient"]}
      />

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <SmartBreadcrumbs />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10">
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">Nutrition</Badge>
                <Badge variant="outline">Semaglutide</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Best Foods and Recipes for Semaglutide Success
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                A complete nutrition guide with meal plans and recipes to maximize your weight loss results while taking semaglutide.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Last updated: December 5, 2025</span>
                <span>•</span>
                <span>15 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Nutrition plays a crucial role in maximizing your success on <InternalLink to="/treatments/semaglutide">semaglutide</InternalLink>. While the medication naturally reduces appetite, making smart food choices helps you lose more weight, preserve muscle mass, and minimize uncomfortable side effects like nausea.
              </p>

              <h2 id="nutrition-principles">Key Nutrition Principles on Semaglutide</h2>
              
              <p>
                When taking semaglutide, your relationship with food fundamentally changes. Most people experience significant appetite reduction, which means every calorie counts. Here's how to make the most of your smaller portions:
              </p>

              <Card className="my-6 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    The 4 Pillars of Semaglutide Nutrition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>Protein First:</strong> Prioritize protein at every meal to preserve muscle mass</li>
                    <li><strong>Nutrient Density:</strong> Choose foods packed with vitamins and minerals</li>
                    <li><strong>Gentle on Digestion:</strong> Select foods that are easy on your stomach</li>
                    <li><strong>Hydration:</strong> Drink plenty of water throughout the day</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 id="best-proteins">Best Protein Sources for Semaglutide Users</h2>

              <p>
                Protein is absolutely essential while on semaglutide. Research shows that <InternalLink to="/blog/managing-muscle-loss-semaglutide-exercise-nutrition">preserving muscle mass</InternalLink> during weight loss requires adequate protein intake—aim for 0.7-1 gram per pound of body weight daily.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Fish className="h-5 w-5 text-primary" />
                      Lean Proteins
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Grilled chicken breast (31g protein per 4oz)</li>
                      <li>• Salmon and white fish (25-28g per 4oz)</li>
                      <li>• Shrimp and shellfish (24g per 4oz)</li>
                      <li>• Turkey breast (30g per 4oz)</li>
                      <li>• Lean ground beef 93% (23g per 4oz)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Egg className="h-5 w-5 text-primary" />
                      Other Protein Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Greek yogurt (15-20g per cup)</li>
                      <li>• Cottage cheese (14g per 1/2 cup)</li>
                      <li>• Eggs (6g each)</li>
                      <li>• Tofu and tempeh (10-20g per serving)</li>
                      <li>• Protein powder (20-30g per scoop)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 id="best-vegetables">Best Vegetables and Fruits</h2>

              <p>
                Non-starchy vegetables should fill half your plate at every meal. They provide essential nutrients, fiber for digestive health, and volume without excessive calories.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Salad className="h-5 w-5 text-green-600" />
                      Top Vegetables
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Spinach and leafy greens</li>
                      <li>• Broccoli and cauliflower</li>
                      <li>• Zucchini and summer squash</li>
                      <li>• Bell peppers</li>
                      <li>• Asparagus and green beans</li>
                      <li>• Cucumber and celery</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Apple className="h-5 w-5 text-red-500" />
                      Best Fruits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Berries (low sugar, high fiber)</li>
                      <li>• Apples and pears</li>
                      <li>• Citrus fruits</li>
                      <li>• Melon (watermelon, cantaloupe)</li>
                      <li>• Stone fruits in moderation</li>
                      <li>• Kiwi and papaya (digestive enzymes)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 id="sample-meal-plans">Sample Meal Plans</h2>

              <p>
                Here are complete meal plans designed specifically for semaglutide users, focusing on high protein, nutrient density, and digestive comfort.
              </p>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    Sample Day 1 (1,400 calories, 100g protein)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Breakfast</h4>
                      <p className="text-muted-foreground">Greek yogurt parfait: 1 cup plain Greek yogurt, 1/2 cup berries, 1 tbsp chia seeds, drizzle of honey (300 cal, 25g protein)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lunch</h4>
                      <p className="text-muted-foreground">Grilled chicken salad: 4oz chicken breast, mixed greens, cucumber, cherry tomatoes, 2 tbsp olive oil vinaigrette (400 cal, 35g protein)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Snack</h4>
                      <p className="text-muted-foreground">1 hard-boiled egg + 1/4 avocado on rice cake (200 cal, 8g protein)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Dinner</h4>
                      <p className="text-muted-foreground">Baked salmon with roasted asparagus and quinoa: 5oz salmon, 1 cup asparagus, 1/2 cup quinoa (500 cal, 35g protein)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    Sample Day 2 (1,350 calories, 95g protein)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Breakfast</h4>
                      <p className="text-muted-foreground">Veggie egg scramble: 2 eggs + 2 egg whites, spinach, mushrooms, 1 slice whole grain toast (280 cal, 22g protein)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lunch</h4>
                      <p className="text-muted-foreground">Turkey lettuce wraps: 4oz sliced turkey, butter lettuce, hummus, cucumber, tomato (320 cal, 28g protein)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Snack</h4>
                      <p className="text-muted-foreground">Cottage cheese with cucumber slices (150 cal, 14g protein)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Dinner</h4>
                      <p className="text-muted-foreground">Shrimp stir-fry: 5oz shrimp, broccoli, bell peppers, snap peas, 1/2 cup brown rice, low-sodium soy sauce (600 cal, 35g protein)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 id="easy-recipes">Easy High-Protein Recipes</h2>

              <h3>1. Protein-Packed Greek Yogurt Bowl</h3>
              <Card className="my-4 bg-accent/30">
                <CardContent className="pt-4">
                  <p className="font-semibold mb-2">Ingredients:</p>
                  <ul className="text-sm mb-4">
                    <li>• 1 cup plain Greek yogurt (0% or 2%)</li>
                    <li>• 1 scoop vanilla protein powder</li>
                    <li>• 1/2 cup mixed berries</li>
                    <li>• 1 tbsp almond butter</li>
                    <li>• 1 tbsp chia seeds</li>
                  </ul>
                  <p className="font-semibold mb-2">Instructions:</p>
                  <p className="text-sm">Mix yogurt with protein powder until smooth. Top with berries, almond butter, and chia seeds. Makes one serving with 45g protein.</p>
                </CardContent>
              </Card>

              <h3>2. Easy Baked Salmon with Lemon Dill</h3>
              <Card className="my-4 bg-accent/30">
                <CardContent className="pt-4">
                  <p className="font-semibold mb-2">Ingredients:</p>
                  <ul className="text-sm mb-4">
                    <li>• 6oz salmon fillet</li>
                    <li>• 1 tbsp olive oil</li>
                    <li>• 1 lemon, sliced</li>
                    <li>• Fresh dill</li>
                    <li>• Salt and pepper to taste</li>
                  </ul>
                  <p className="font-semibold mb-2">Instructions:</p>
                  <p className="text-sm">Preheat oven to 400°F. Place salmon on foil, drizzle with olive oil, season, and top with lemon slices and dill. Bake 12-15 minutes. Serves 1 with 34g protein.</p>
                </CardContent>
              </Card>

              <h3>3. Quick Chicken Stir-Fry</h3>
              <Card className="my-4 bg-accent/30">
                <CardContent className="pt-4">
                  <p className="font-semibold mb-2">Ingredients:</p>
                  <ul className="text-sm mb-4">
                    <li>• 5oz chicken breast, sliced</li>
                    <li>• 2 cups mixed vegetables (broccoli, bell peppers, snap peas)</li>
                    <li>• 2 tbsp low-sodium soy sauce</li>
                    <li>• 1 tbsp sesame oil</li>
                    <li>• 1 clove garlic, minced</li>
                    <li>• 1/2 tsp fresh ginger</li>
                  </ul>
                  <p className="font-semibold mb-2">Instructions:</p>
                  <p className="text-sm">Heat sesame oil in a wok or large pan. Cook chicken until done, about 5-6 minutes. Add garlic, ginger, and vegetables. Stir-fry 3-4 minutes. Add soy sauce and serve. Makes 1 serving with 38g protein.</p>
                </CardContent>
              </Card>

              <h2 id="foods-to-avoid">Foods to Avoid or Limit</h2>

              <p>
                While no foods are strictly forbidden, certain choices can worsen <InternalLink to="/blog/semaglutide-side-effects">semaglutide side effects</InternalLink> or slow your progress:
              </p>

              <Card className="my-6 border-destructive/50 bg-destructive/5">
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li><strong>High-fat, greasy foods:</strong> Can trigger or worsen nausea and delayed gastric emptying</li>
                    <li><strong>Sugary drinks and sweets:</strong> Empty calories that don't support nutrition goals</li>
                    <li><strong>Alcohol:</strong> Can increase nausea and reduce weight loss effectiveness</li>
                    <li><strong>Large portions:</strong> Even healthy foods can cause discomfort if eaten in excess</li>
                    <li><strong>Carbonated beverages:</strong> May increase bloating and discomfort</li>
                    <li><strong>Highly processed foods:</strong> Low nutritional value for limited calorie budget</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 id="hydration-tips">Hydration Strategies</h2>

              <p>
                Proper hydration is essential on semaglutide. Many people confuse thirst for hunger, and staying hydrated helps manage side effects and supports overall health.
              </p>

              <ul>
                <li><strong>Aim for 64-80oz daily:</strong> More if you're active or in hot weather</li>
                <li><strong>Sip throughout the day:</strong> Don't chug large amounts at once</li>
                <li><strong>Try herbal teas:</strong> Ginger and peppermint can soothe nausea</li>
                <li><strong>Eat water-rich foods:</strong> Cucumber, watermelon, and soups count toward intake</li>
                <li><strong>Limit caffeine:</strong> Can worsen dehydration and nausea for some</li>
              </ul>

              <h2 id="timing-tips">Meal Timing Tips</h2>

              <p>
                When and how you eat matters almost as much as what you eat. These timing strategies help maximize comfort and results:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      Best Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Eat slowly—take 20+ minutes per meal</li>
                      <li>• Stop eating when satisfied, not full</li>
                      <li>• Wait 30 min between fluids and meals</li>
                      <li>• Eat protein first at each meal</li>
                      <li>• Have 4-5 smaller meals vs 3 large ones</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Leaf className="h-5 w-5 text-green-600" />
                      Injection Day Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Eat a light meal before injecting</li>
                      <li>• Choose bland, easy-to-digest foods</li>
                      <li>• Stay extra hydrated the first 24-48 hours</li>
                      <li>• Have ginger tea or candies ready</li>
                      <li>• Avoid alcohol for 24 hours</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 id="conclusion">Conclusion</h2>

              <p>
                Success on semaglutide isn't just about taking the medication—it's about fueling your body with the right foods to maximize weight loss, preserve muscle, and feel your best. Focus on protein at every meal, fill up on vegetables, stay hydrated, and listen to your body's signals.
              </p>

              <p>
                Remember, your <InternalLink to="/blog/semaglutide-first-month">first month on semaglutide</InternalLink> is an adjustment period. Give yourself grace as you learn what foods work best for you. If you're struggling with side effects or need personalized nutrition guidance, speak with your healthcare provider or a registered dietitian.
              </p>

              <Card className="mt-8 bg-primary/10 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Ready to Start Your Weight Loss Journey?</h3>
                  <p className="text-muted-foreground mb-4">
                    Get personalized guidance, ongoing support, and affordable access to semaglutide.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/get-started">
                      Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <TopicClusterNav
              topic="semaglutide"
              relatedArticles={relatedArticles}
            />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
