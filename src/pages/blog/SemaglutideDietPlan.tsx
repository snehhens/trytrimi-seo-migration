import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { Calendar, Clock, Utensils } from "lucide-react";
import ogImage from "@/assets/og/semaglutide-diet-plan.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import { HowToSchema } from "@/components/seo/HowToSchema";

const SemaglutideDietPlan = () => {
  const postMeta = getBlogPostMeta("semaglutide-diet-plan");
  const publishDate = postMeta?.date || "2025-02-04";
  const modifiedDate = getModifiedDate("semaglutide-diet-plan", publishDate);
  const readTime = postMeta?.readTime || "13 min";
  const clusterNav = getClusterNavigation('semaglutide-diet-plan');
  
  const qaData = [
    {
      question: "What should I eat while taking semaglutide?",
      answer: "Focus on protein-first meals (0.8-1g per pound of ideal body weight), high-volume vegetables, complex carbohydrates, and moderate healthy fats. Prioritize lean meats, fish, Greek yogurt, eggs, leafy greens, and whole grains while avoiding greasy, fried, and high-sugar foods that trigger nausea."
    },
    {
      question: "How much protein do I need on semaglutide?",
      answer: "Aim for 0.8-1.2g of protein per pound of ideal body weight daily to preserve muscle mass during weight loss. For a 150-pound goal weight, target 120-150g protein daily from sources like chicken, fish, Greek yogurt, eggs, and protein powder."
    },
    {
      question: "What foods should I avoid on semaglutide?",
      answer: "Minimize greasy/fried foods, heavy cream sauces, carbonated beverages, alcohol, high-sugar foods, and processed meats. These foods often trigger nausea, bloating, and digestive discomfort due to semaglutide's effect on stomach emptying."
    },
    {
      question: "Can I eat carbs while on semaglutide?",
      answer: "Yes, focus on complex carbs with fiber like oats, quinoa, sweet potatoes, legumes, and whole grain bread. Avoid refined carbs like white bread, white rice, and sugary foods that spike blood sugar without providing satiety."
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <QAPageSchema questions={qaData} mainEntityName="Semaglutide Diet Plan" />
      <HowToSchema 
        name="How to Eat on Semaglutide for Best Results"
        description="Complete dietary guide for optimizing weight loss while minimizing side effects on semaglutide"
        totalTime="P1D"
        steps={[
          {
            name: "Prioritize protein at every meal",
            text: "Aim for 25-30g protein per meal from lean meats, fish, eggs, Greek yogurt, or plant-based sources to preserve muscle mass and maintain satiety."
          },
          {
            name: "Choose nutrient-dense foods",
            text: "Focus on vegetables, fruits, whole grains, and healthy fats. These provide essential nutrients while keeping you satisfied on fewer calories."
          },
          {
            name: "Eat smaller, more frequent meals",
            text: "Have 4-5 small meals instead of 3 large ones. This prevents overwhelming your slowed digestive system and reduces nausea."
          },
          {
            name: "Stay hydrated throughout the day",
            text: "Drink 64-80 ounces of water daily. Sip slowly between meals rather than with meals to avoid feeling too full."
          },
          {
            name: "Avoid trigger foods",
            text: "Minimize greasy, fried, high-sugar, and heavily processed foods that can worsen side effects and provide empty calories."
          }
        ]}
      />
      <Helmet>
        <title>Best Diet Plan for Semaglutide: What to Eat for Maximum Results | Trimi</title>
        <meta 
          name="description" 
          content="Optimize your semaglutide results with the right diet. Learn what to eat, foods to avoid, meal timing, and practical meal ideas while on Ozempic or Wegovy." 
        />
        <meta 
          name="keywords" 
          content="semaglutide diet, ozempic diet plan, wegovy meal plan, what to eat on semaglutide, best foods for GLP-1, semaglutide nutrition" 
        />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-diet-plan" />
        <meta property="og:title" content="Best Diet Plan for Semaglutide: What to Eat for Maximum Results" />
        <meta property="og:description" content="Complete guide to eating right while on semaglutide for optimal weight loss and minimal side effects." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-diet-plan" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-diet-plan" />
      </Helmet>

      <Navigation />
      
      <BlogBreadcrumb 
        category="Semaglutide"
        title="Semaglutide Diet Plan"
        url="/blog/semaglutide-diet-plan"
      />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={publishDate}>{new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <ContentFreshnessIndicator publishDate={publishDate} lastModified={modifiedDate} />

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Best Diet Plan for Semaglutide: What to Eat for Maximum Results
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Semaglutide works, but your food choices significantly impact both results and side effects. Here's exactly what to eat (and avoid) for the best experience.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2>Why Diet Matters More Than You Think</h2>
            <p>
              Semaglutide suppresses appetite and slows stomach emptying—but that doesn't mean you can eat whatever you want in smaller portions. Your food choices affect:
            </p>
            <ul>
              <li><strong>Rate of weight loss:</strong> Protein and nutrient-dense foods optimize results</li>
              <li><strong>Side effect severity:</strong> Certain foods trigger nausea and GI distress</li>
              <li><strong>Muscle preservation:</strong> Inadequate protein leads to muscle loss alongside fat</li>
              <li><strong>Energy levels:</strong> Too few calories causes fatigue and weakness</li>
              <li><strong>Long-term sustainability:</strong> Building healthy habits makes maintenance easier</li>
            </ul>

            <h2>The Core Principles: Protein-First, Nutrient-Dense</h2>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Utensils className="h-5 w-5" />
                The Semaglutide Diet Framework
              </h3>
              <ol className="space-y-2">
                <li><strong>1. Protein First:</strong> 0.8-1g per pound of ideal body weight daily</li>
                <li><strong>2. Volume Eating:</strong> Fill up on high-volume, low-calorie vegetables</li>
                <li><strong>3. Minimize Processed Foods:</strong> Avoid foods that don't promote satiety</li>
                <li><strong>4. Strategic Fat:</strong> Moderate healthy fats (they slow digestion even more)</li>
                <li><strong>5. Smart Carbs:</strong> Prioritize complex carbs with fiber</li>
                <li><strong>6. Hydration Focus:</strong> 8-10 glasses of water daily</li>
              </ol>
            </Card>

            <h2>Priority #1: Protect Your Muscle with Protein</h2>
            <p>
              When you lose weight rapidly, you risk losing muscle along with fat. Adequate protein intake is critical.
            </p>

            <h3>How Much Protein Do You Need?</h3>
            <ul>
              <li><strong>Minimum:</strong> 0.8g per pound of ideal body weight</li>
              <li><strong>Optimal:</strong> 1.0-1.2g per pound of ideal body weight</li>
              <li><strong>Example:</strong> If your goal weight is 150 lbs, aim for 120-150g protein daily</li>
            </ul>

            <Card className="p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Best Protein Sources on Semaglutide</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Lean Meats:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Chicken breast (30g per 4 oz)</li>
                    <li>• Turkey breast (29g per 4 oz)</li>
                    <li>• Lean ground turkey (22g per 4 oz)</li>
                    <li>• Pork tenderloin (26g per 4 oz)</li>
                    <li>• Extra lean ground beef (24g per 4 oz)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fish & Seafood:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Cod, tilapia (23g per 4 oz)</li>
                    <li>• Shrimp (24g per 4 oz)</li>
                    <li>• Salmon (25g per 4 oz)</li>
                    <li>• Tuna (26g per 4 oz)</li>
                    <li>• Halibut (24g per 4 oz)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dairy & Eggs:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Greek yogurt, plain (15-20g per cup)</li>
                    <li>• Cottage cheese (25g per cup)</li>
                    <li>• Eggs (6g per egg)</li>
                    <li>• Egg whites (4g per white)</li>
                    <li>• Low-fat cheese (7g per oz)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Plant-Based:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Tofu (10g per 4 oz)</li>
                    <li>• Tempeh (15g per 4 oz)</li>
                    <li>• Edamame (9g per 1/2 cup)</li>
                    <li>• Lentils (18g per cup cooked)</li>
                    <li>• Protein powder (20-30g per scoop)</li>
                  </ul>
                </div>
              </div>
            </Card>

            <h3>Pro Tip: Eat Protein First</h3>
            <p>
              With reduced appetite, eat your protein portion before anything else on your plate. This ensures you hit your protein target even if you feel full and can't finish the meal.
            </p>

            <h2>What Vegetables to Load Up On</h2>
            <p>
              Vegetables provide volume, fiber, and nutrients without many calories. They help you feel full without triggering nausea.
            </p>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4">Best Vegetables for Semaglutide</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Leafy Greens (unlimited):</p>
                  <p className="text-muted-foreground">Spinach, kale, arugula, lettuce, collards, Swiss chard</p>
                </div>
                <div>
                  <p className="font-semibold">Cruciferous (great for satiety):</p>
                  <p className="text-muted-foreground">Broccoli, cauliflower, Brussels sprouts, cabbage</p>
                </div>
                <div>
                  <p className="font-semibold">Low-Carb Staples:</p>
                  <p className="text-muted-foreground">Zucchini, bell peppers, asparagus, green beans, mushrooms, cucumbers</p>
                </div>
                <div>
                  <p className="font-semibold">Moderate Portions:</p>
                  <p className="text-muted-foreground">Carrots, beets, squash, sweet potatoes (higher carb but nutrient-dense)</p>
                </div>
              </div>
            </Card>

            <h2>Strategic Carbohydrate Choices</h2>
            <p>
              You don't need to eliminate carbs, but choosing the right types makes a huge difference in satiety and blood sugar stability.
            </p>

            <h3>Best Carbs on Semaglutide:</h3>
            <ul>
              <li><strong>Oats:</strong> Steel-cut or rolled (not instant)</li>
              <li><strong>Quinoa:</strong> Complete protein, high fiber</li>
              <li><strong>Brown rice:</strong> In moderation</li>
              <li><strong>Sweet potatoes:</strong> Nutrient-dense, satisfying</li>
              <li><strong>Legumes:</strong> Black beans, chickpeas, lentils (bonus protein!)</li>
              <li><strong>Whole grain bread:</strong> Look for 3g+ fiber per slice</li>
              <li><strong>Berries:</strong> Lowest sugar fruits with high antioxidants</li>
            </ul>

            <h3>Carbs to Minimize:</h3>
            <ul>
              <li>White bread, white rice, pasta (low fiber, spikes blood sugar)</li>
              <li>Sugary cereals</li>
              <li>Baked goods (cookies, cakes, pastries)</li>
              <li>Candy and added sugars</li>
              <li>Fruit juice (lacks fiber, high sugar concentration)</li>
            </ul>

            <h2>The Fat Question: How Much and What Kind</h2>
            <p>
              Semaglutide slows stomach emptying. Fat slows it even more. Too much fat = prolonged fullness and potential nausea.
            </p>

            <h3>The Strategy:</h3>
            <ul>
              <li><strong>Keep fat moderate:</strong> 20-30% of total calories</li>
              <li><strong>Choose healthy sources:</strong> Avocado, nuts, seeds, olive oil, fatty fish</li>
              <li><strong>Avoid high-fat + high-carb combos:</strong> Pizza, fried foods, creamy pasta—these are the worst for nausea</li>
              <li><strong>Save fat for later in the meal:</strong> Eat protein and veggies first</li>
            </ul>

            <Card className="p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Healthy Fats in Moderation</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Avocado:</strong> 1/4 to 1/2 per day</li>
                <li>• <strong>Nuts/seeds:</strong> 1 oz (small handful) as snack</li>
                <li>• <strong>Olive oil:</strong> 1-2 tbsp for cooking/dressing</li>
                <li>• <strong>Salmon/mackerel:</strong> 2-3x per week</li>
                <li>• <strong>Nut butter:</strong> 1-2 tbsp</li>
                <li>• <strong>Chia/flax seeds:</strong> 1-2 tbsp (bonus: fiber!)</li>
              </ul>
            </Card>

            <h2>Foods That Often Trigger Side Effects</h2>

            <Card className="p-6 my-8 bg-destructive/10 border-destructive/20">
              <h3 className="text-xl font-semibold mb-4">Foods to Avoid or Minimize</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Greasy/fried foods:</strong> French fries, fried chicken, donuts
                  <p className="text-sm text-muted-foreground mt-1">High fat content = prolonged fullness and nausea</p>
                </li>
                <li>
                  <strong>Heavy cream sauces:</strong> Alfredo, carbonara, creamy soups
                  <p className="text-sm text-muted-foreground mt-1">Fat + dairy can be hard to digest</p>
                </li>
                <li>
                  <strong>Spicy foods (for some):</strong> Hot peppers, spicy curry
                  <p className="text-sm text-muted-foreground mt-1">Can irritate already-sensitive stomach</p>
                </li>
                <li>
                  <strong>Carbonated beverages:</strong> Soda, sparkling water
                  <p className="text-sm text-muted-foreground mt-1">Increases bloating and discomfort</p>
                </li>
                <li>
                  <strong>Alcohol:</strong> All types, but especially sugary cocktails
                  <p className="text-sm text-muted-foreground mt-1">Slows metabolism further, empty calories, can worsen nausea</p>
                </li>
                <li>
                  <strong>High-sugar foods:</strong> Candy, desserts, sugary cereals
                  <p className="text-sm text-muted-foreground mt-1">Blood sugar spikes followed by crashes, no satiety</p>
                </li>
                <li>
                  <strong>Processed meats:</strong> Bacon, sausage, deli meats
                  <p className="text-sm text-muted-foreground mt-1">High sodium, often high fat, less nutritious</p>
                </li>
              </ul>
            </Card>

            <h2>Sample Meal Plans</h2>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4">Day 1: Standard Protein-Focused</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Breakfast (7am):</p>
                  <p className="text-muted-foreground">3-egg omelet with spinach and mushrooms, 1 slice whole grain toast, berries</p>
                  <p className="text-xs text-muted-foreground">~400 calories, 30g protein</p>
                </div>
                <div>
                  <p className="font-semibold">Snack (10am):</p>
                  <p className="text-muted-foreground">Greek yogurt (plain) with 1 tbsp chia seeds</p>
                  <p className="text-xs text-muted-foreground">~150 calories, 15g protein</p>
                </div>
                <div>
                  <p className="font-semibold">Lunch (1pm):</p>
                  <p className="text-muted-foreground">Grilled chicken breast (4 oz), large salad with olive oil dressing, quinoa (1/2 cup)</p>
                  <p className="text-xs text-muted-foreground">~450 calories, 35g protein</p>
                </div>
                <div>
                  <p className="font-semibold">Snack (4pm):</p>
                  <p className="text-muted-foreground">Small apple with 1 tbsp almond butter</p>
                  <p className="text-xs text-muted-foreground">~180 calories, 4g protein</p>
                </div>
                <div>
                  <p className="font-semibold">Dinner (6:30pm):</p>
                  <p className="text-muted-foreground">Baked salmon (5 oz), roasted broccoli and Brussels sprouts, small sweet potato</p>
                  <p className="text-xs text-muted-foreground">~500 calories, 40g protein</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold">Daily Total:</p>
                  <p className="text-muted-foreground">~1,680 calories, 124g protein</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Day 2: Plant-Forward Option</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Breakfast:</p>
                  <p className="text-muted-foreground">Smoothie: protein powder, spinach, banana, almond milk, 1 tbsp peanut butter</p>
                  <p className="text-xs text-muted-foreground">~380 calories, 30g protein</p>
                </div>
                <div>
                  <p className="font-semibold">Snack:</p>
                  <p className="text-muted-foreground">Cottage cheese (1 cup) with cucumber slices</p>
                  <p className="text-xs text-muted-foreground">~180 calories, 25g protein</p>
                </div>
                <div>
                  <p className="font-semibold">Lunch:</p>
                  <p className="text-muted-foreground">Tofu stir-fry (6 oz tofu) with mixed vegetables, brown rice (3/4 cup)</p>
                  <p className="text-xs text-muted-foreground">~420 calories, 25g protein</p>
                </div>
                <div>
                  <p className="font-semibold">Snack:</p>
                  <p className="text-muted-foreground">Edamame (1 cup), cherry tomatoes</p>
                  <p className="text-xs text-muted-foreground">~150 calories, 12g protein</p>
                </div>
                <div>
                  <p className="font-semibold">Dinner:</p>
                  <p className="text-muted-foreground">Lentil soup (2 cups), side salad with chickpeas, whole grain roll</p>
                  <p className="text-xs text-muted-foreground">~480 calories, 28g protein</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold">Daily Total:</p>
                  <p className="text-muted-foreground">~1,610 calories, 120g protein</p>
                </div>
              </div>
            </Card>

            <h2>Meal Timing and Portion Strategies</h2>

            <h3>1. Eat Smaller, More Frequent Meals</h3>
            <p>
              Instead of 3 large meals, try 4-5 smaller ones. This prevents overfilling your slower-emptying stomach.
            </p>

            <h3>2. Stop When Satisfied, Not Full</h3>
            <p>
              Semaglutide changes your "full" signal. If you eat until physically full, you'll likely feel uncomfortably stuffed for hours. Stop at "satisfied."
            </p>

            <h3>3. Eat Slowly and Mindfully</h3>
            <p>
              Take 20-30 minutes per meal. Put your fork down between bites. This gives your brain time to register fullness.
            </p>

            <h3>4. Avoid Eating Late at Night</h3>
            <p>
              With slower digestion, late meals can lead to uncomfortable fullness while trying to sleep. Finish eating 3+ hours before bed.
            </p>

            <h2>Hydration Is Critical</h2>
            <p>
              Dehydration is common on semaglutide due to reduced appetite (people forget to drink) and potential GI side effects.
            </p>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4">Hydration Guidelines</h3>
              <ul className="space-y-2">
                <li>• <strong>Target:</strong> 8-10 glasses (64-80 oz) daily, more if exercising</li>
                <li>• <strong>Morning routine:</strong> Start with 16 oz upon waking</li>
                <li>• <strong>Before meals:</strong> Drink 8 oz 20-30 minutes before eating</li>
                <li>• <strong>Sip throughout day:</strong> Don't chug large amounts at once</li>
                <li>• <strong>Limit with meals:</strong> Too much liquid while eating can increase fullness/nausea</li>
                <li>• <strong>Add electrolytes if needed:</strong> Especially if experiencing diarrhea</li>
              </ul>
            </Card>

            <h2>Supplements to Consider</h2>
            <p>
              With reduced food intake, certain nutrients may be harder to get:
            </p>

            <ul>
              <li><strong>Multivitamin:</strong> Basic insurance for micronutrients</li>
              <li><strong>Vitamin D:</strong> Many people are deficient regardless</li>
              <li><strong>B12:</strong> Especially if eating less meat</li>
              <li><strong>Calcium:</strong> If not consuming dairy</li>
              <li><strong>Fiber supplement:</strong> If struggling with constipation (psyllium husk)</li>
              <li><strong>Protein powder:</strong> Helps hit protein targets when appetite is very low</li>
            </ul>

            <p>
              <strong>Always check with your healthcare provider</strong> before starting new supplements, especially if you have other medical conditions.
            </p>

            <h2>The Bottom Line on Semaglutide Diet</h2>
            <p>
              The best diet on semaglutide is one that:
            </p>
            <ul>
              <li>Prioritizes protein to preserve muscle mass</li>
              <li>Includes plenty of vegetables for volume and nutrients</li>
              <li>Chooses complex carbs with fiber over refined carbs</li>
              <li>Limits high-fat and greasy foods that worsen side effects</li>
              <li>Stays hydrated throughout the day</li>
              <li>Focuses on nutrient density over calorie counting</li>
            </ul>

            <p>
              Remember: Semaglutide is a tool, not a magic solution. The medication creates the conditions for success, but your food choices determine how well you feel and how much muscle you maintain during weight loss.
            </p>

            <div className="mt-12 p-8 bg-accent/30 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Get Comprehensive Support with Semaglutide</h3>
              <p className="mb-6">
                Trimi provides nutrition guidance alongside your semaglutide treatment. Work with healthcare providers who understand how to optimize your diet for the best results.
              </p>
              <Button asChild size="lg">
                <Link to="/treatments/semaglutide">Start Your Journey</Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog/semaglutide-side-effects" className="text-primary hover:underline">
                    Semaglutide Side Effects: What to Expect & How to Manage
                  </Link>
                </li>
                <li>
                  <Link to="/blog/semaglutide-first-month" className="text-primary hover:underline">
                    What to Expect Your First Month on Semaglutide
                  </Link>
                </li>
                <li>
                  <Link to="/blog/semaglutide-weight-loss-results" className="text-primary hover:underline">
                    Semaglutide Weight Loss Results: What to Really Expect
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <TopicClusterNav
            pillarPage={clusterNav.pillarPage}
            hubPage={clusterNav.hubPage}
            relatedArticles={clusterNav.relatedInCluster}
            topic="Lifestyle Integration"
          />
          
          <RelatedArticles articles={[
            {
              title: "Semaglutide Side Effects",
              url: "/blog/semaglutide-side-effects",
              excerpt: "Learn how to manage common side effects while optimizing your diet for comfort.",
              category: "Semaglutide"
            },
            {
              title: "Semaglutide First Month Guide",
              url: "/blog/semaglutide-first-month",
              excerpt: "Complete guide to your first month on semaglutide, including dietary adjustments.",
              category: "Semaglutide"
            },
            {
              title: "Semaglutide and Intermittent Fasting",
              url: "/blog/semaglutide-intermittent-fasting",
              excerpt: "Can you combine intermittent fasting with semaglutide? Expert guidance on timing.",
              category: "Semaglutide"
            }
          ]} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SemaglutideDietPlan;
