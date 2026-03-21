import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Utensils, CheckCircle } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";

const TirzepatideDietGuide = () => {
  const postMeta = getBlogPostMeta("tirzepatide-diet-guide");
  const publishDate = postMeta?.date || "2025-02-03";
  const readTime = postMeta?.readTime || "14 min";
  
  return (
    <>
      <Helmet>
        <title>Best Diet for Tirzepatide: What to Eat for Maximum Weight Loss | Trimi</title>
        <meta name="description" content="Complete diet guide for tirzepatide (Mounjaro, Zepbound). Learn what foods to eat, what to avoid, meal timing, protein needs, and how to optimize your nutrition for maximum results." />
        <meta name="keywords" content="tirzepatide diet, what to eat on tirzepatide, mounjaro diet plan, zepbound food guide, tirzepatide nutrition, tirzepatide meal plan" />
        <meta name="author" content="Trimi Medical Team" />
        <link rel="canonical" href="https://trytrimi.com/blog/tirzepatide-diet-guide" />
        
        <meta property="og:title" content="Best Diet for Tirzepatide: Complete Nutrition Guide" />
        <meta property="og:description" content="Optimize your tirzepatide results with the right diet. Complete guide to eating on Mounjaro or Zepbound." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/tirzepatide-diet-guide" />
        <meta property="article:published_time" content="2025-02-25T09:00:00Z" />
        <meta property="article:author" content="Trimi Medical Team" />
        <meta property="article:section" content="Nutrition" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": "Best Diet for Tirzepatide: Complete Nutrition Guide",
            "description": "Complete diet guide for optimizing tirzepatide weight loss",
            "datePublished": "2025-02-25T09:00:00Z",
            "dateModified": "2025-02-25T09:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "Trimi Medical Team"
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <article className="container max-w-4xl mx-auto px-4 py-12">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Best Diet for Tirzepatide: Complete Nutrition Guide
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={publishDate}>{new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </span>
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {readTime} read
              </span>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              While tirzepatide is powerfully effective on its own, the right diet amplifies your results, minimizes side effects, and preserves muscle mass. Here's your complete guide to eating optimally on tirzepatide.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Understanding Nutrition on Tirzepatide</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tirzepatide creates a unique nutritional situation: dramatically reduced appetite combined with slowed gastric emptying. This means you'll eat significantly less while feeling full longer—which is excellent for weight loss but requires strategic nutrition to ensure you're getting adequate nutrients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The goal isn't just to eat less—it's to eat smartly. Focus on nutrient-dense foods that provide maximum nutrition in smaller volumes. Quality becomes even more important than quantity when your capacity is reduced.
              </p>
            </section>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                <Utensils className="mr-2 h-5 w-5 text-primary" />
                Core Nutritional Principles on Tirzepatide
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Protein first:</strong> 25-30g per meal minimum to preserve muscle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Nutrient density:</strong> Choose foods packed with vitamins and minerals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Smaller, frequent meals:</strong> Better tolerated than 2-3 large meals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Hydration priority:</strong> 64+ ounces water daily</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Avoid trigger foods:</strong> High-fat, greasy, spicy foods worsen GI symptoms</span>
                </li>
              </ul>
            </Card>

            {/* Continue with full comprehensive content following same structure as other blog posts... */}
            
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Protein: Your Most Important Nutrient</h2>
              <p className="text-muted-foreground leading-relaxed">
                Adequate protein intake is absolutely critical on tirzepatide for three key reasons: it preserves lean muscle mass during weight loss, increases satiety (helping you feel full), and has the highest thermic effect of all macronutrients (your body burns more calories digesting it).
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">How Much Protein Do You Need?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aim for 0.7-1.0 grams of protein per pound of your goal body weight daily. For most people, this translates to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Women:</strong> 80-120g daily</li>
                <li><strong>Men:</strong> 100-150g daily</li>
                <li><strong>Athletes/highly active:</strong> Upper end of range</li>
                <li><strong>Minimum per meal:</strong> 25-30g</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Best Protein Sources</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Chicken breast:</strong> 31g per 4oz, lean and versatile</li>
                <li><strong>Greek yogurt (nonfat):</strong> 20g per cup, easy to digest</li>
                <li><strong>Eggs:</strong> 6g per egg, complete protein</li>
                <li><strong>Fish (salmon, cod, tuna):</strong> 20-25g per 4oz, omega-3 bonus</li>
                <li><strong>Lean beef/turkey:</strong> 25-30g per 4oz</li>
                <li><strong>Cottage cheese:</strong> 14g per 1/2 cup</li>
                <li><strong>Protein powder:</strong> 20-30g per scoop, convenient</li>
                <li><strong>Edamame:</strong> 17g per cup, plant-based</li>
                <li><strong>Lentils:</strong> 18g per cup cooked</li>
                <li><strong>Tofu:</strong> 10g per 1/2 cup</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Protein Timing Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Distribute protein throughout the day rather than loading it all in one meal. Your body can only utilize about 25-40g of protein per meal for muscle synthesis, so spreading intake optimizes utilization.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Foods That Work Well on Tirzepatide</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Lean Proteins</h3>
              <p className="text-muted-foreground leading-relaxed">
                Generally well-tolerated and should form the foundation of every meal:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Grilled chicken or turkey</li>
                <li>Baked or grilled fish</li>
                <li>Eggs (prepared without excessive fat)</li>
                <li>Low-fat dairy (Greek yogurt, cottage cheese)</li>
                <li>Lean cuts of beef or pork (tenderloin, sirloin)</li>
                <li>Shrimp and shellfish</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Non-Starchy Vegetables</h3>
              <p className="text-muted-foreground leading-relaxed">
                High in fiber, vitamins, and minerals while being low in calories. Eat these liberally:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Leafy greens (spinach, kale, lettuce)</li>
                <li>Broccoli and cauliflower</li>
                <li>Bell peppers</li>
                <li>Zucchini and summer squash</li>
                <li>Asparagus</li>
                <li>Green beans</li>
                <li>Cucumbers and celery</li>
                <li>Mushrooms</li>
                <li>Tomatoes</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Complex Carbohydrates (Moderate Portions)</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Oatmeal (steel-cut or rolled oats)</li>
                <li>Sweet potatoes</li>
                <li>Quinoa</li>
                <li>Brown rice (small portions)</li>
                <li>Legumes (beans, lentils)</li>
                <li>Whole grain bread (1-2 slices)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Healthy Fats (Small Amounts)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Important for nutrient absorption and hormone production, but use sparingly as fat can worsen GI symptoms:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Avocado (1/4 avocado serving)</li>
                <li>Nuts and seeds (1oz portions)</li>
                <li>Olive oil (1-2 teaspoons for cooking)</li>
                <li>Fatty fish (salmon, mackerel)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Fruits (Moderate Portions)</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Berries (excellent fiber-to-sugar ratio)</li>
                <li>Apples and pears</li>
                <li>Citrus fruits</li>
                <li>Melon</li>
                <li>Bananas (for potassium)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Foods to Avoid or Limit</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">High-Fat Foods</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fat is the slowest macronutrient to digest, and with already-slowed gastric emptying, high-fat foods often cause significant discomfort:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fried foods of any kind</li>
                <li>Fast food burgers and fries</li>
                <li>Pizza (greasy cheese)</li>
                <li>Fatty cuts of meat (ribeye, bacon, sausage)</li>
                <li>Heavy cream sauces</li>
                <li>Full-fat dairy products</li>
                <li>Excessive nuts or nut butters</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Spicy and Acidic Foods</h3>
              <p className="text-muted-foreground leading-relaxed">
                Can irritate an already-sensitive digestive system:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Very spicy dishes</li>
                <li>Excessive hot sauce or peppers</li>
                <li>Citrus in large amounts (for some people)</li>
                <li>Tomato-based sauces (can trigger reflux)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Ultraprocessed Foods</h3>
              <p className="text-muted-foreground leading-relaxed">
                Low nutrient density, high in empty calories:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Chips, crackers, pretzels</li>
                <li>Cookies, cakes, pastries</li>
                <li>Candy and sweets</li>
                <li>Sugary cereals</li>
                <li>Processed meats (hot dogs, deli meats)</li>
                <li>Frozen dinners high in sodium</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Carbonated Beverages</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Soda (regular and diet)</li>
                <li>Sparkling water (some people tolerate, others don't)</li>
                <li>Beer</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Alcohol</h3>
              <p className="text-muted-foreground leading-relaxed">
                While not strictly forbidden, alcohol has several downsides on tirzepatide:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Empty calories that don't satisfy</li>
                <li>Can worsen GI side effects</li>
                <li>May hit harder due to slowed gastric emptying</li>
                <li>Lowers inhibitions around food choices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Sample Meal Plans</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Day 1: 1200-1400 Calories</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Breakfast (300 cal, 30g protein):</p>
                  <ul className="list-disc pl-6">
                    <li>3 egg white omelet with vegetables</li>
                    <li>1/2 cup Greek yogurt</li>
                    <li>1/2 cup berries</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Lunch (350 cal, 35g protein):</p>
                  <ul className="list-disc pl-6">
                    <li>6oz grilled chicken breast</li>
                    <li>Large mixed green salad</li>
                    <li>Balsamic vinegar dressing</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Snack (150 cal, 15g protein):</p>
                  <ul className="list-disc pl-6">
                    <li>Protein shake with 1/2 banana</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dinner (400 cal, 30g protein):</p>
                  <ul className="list-disc pl-6">
                    <li>5oz baked salmon</li>
                    <li>1/2 cup quinoa</li>
                    <li>Steamed broccoli</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Day 2: 1200-1400 Calories</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Breakfast (280 cal, 25g protein):</p>
                  <ul className="list-disc pl-6">
                    <li>1 cup Greek yogurt</li>
                    <li>1/4 cup granola</li>
                    <li>Mixed berries</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Lunch (380 cal, 32g protein):</p>
                  <ul className="list-disc pl-6">
                    <li>Turkey and avocado wrap (whole wheat tortilla)</li>
                    <li>Side of cucumber slices</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Snack (120 cal, 12g protein):</p>
                  <ul className="list-disc pl-6">
                    <li>1/2 cup cottage cheese</li>
                    <li>Cherry tomatoes</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dinner (420 cal, 35g protein):</p>
                  <ul className="list-disc pl-6">
                    <li>6oz lean beef stir-fry</li>
                    <li>Mixed vegetables</li>
                    <li>1/2 cup brown rice</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Meal Timing and Frequency</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Smaller, More Frequent Meals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Most people tolerate 4-6 smaller meals better than 2-3 large ones. Smaller meals reduce the feeling of uncomfortable fullness and help ensure adequate nutrient intake.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Optimal Eating Schedule</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Breakfast:</strong> Within 2 hours of waking</li>
                <li><strong>Mid-morning snack:</strong> 2-3 hours after breakfast</li>
                <li><strong>Lunch:</strong> Midday</li>
                <li><strong>Afternoon snack:</strong> 2-3 hours after lunch</li>
                <li><strong>Dinner:</strong> 3-4 hours before bed</li>
                <li><strong>Evening snack (optional):</strong> Light protein if needed</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Don't Force Yourself</h3>
              <p className="text-muted-foreground leading-relaxed">
                While meeting nutritional needs is important, don't force food when you're not hungry. However, ensure you're meeting minimum protein and calorie requirements even if appetite is very suppressed.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Hydration Strategy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Proper hydration is crucial but often overlooked on tirzepatide:
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Daily Hydration Goals</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Minimum:</strong> 64 ounces (8 cups) daily</li>
                <li><strong>Optimal:</strong> Half your body weight in ounces</li>
                <li><strong>Active days:</strong> Add 16-32oz more</li>
                <li><strong>Hot weather:</strong> Increase by 20-30%</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Hydration Tips</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Drink water between meals, not with meals (can increase fullness discomfort)</li>
                <li>Start morning with 16oz water</li>
                <li>Set hourly reminders to drink</li>
                <li>Herbal tea counts toward hydration</li>
                <li>Monitor urine color (pale yellow is ideal)</li>
                <li>Add electrolytes if exercising heavily</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Supplements to Consider</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Essential Supplements</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Multivitamin:</strong> Comprehensive coverage for reduced food intake</li>
                <li><strong>Protein powder:</strong> Helps meet daily protein goals</li>
                <li><strong>Vitamin D3:</strong> Many people are deficient</li>
                <li><strong>Omega-3 fatty acids:</strong> If not eating fatty fish regularly</li>
                <li><strong>B-complex:</strong> Supports energy metabolism</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Helpful but Optional</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Probiotics:</strong> May help GI symptoms</li>
                <li><strong>Magnesium:</strong> Helps with constipation</li>
                <li><strong>Fiber supplement:</strong> If not meeting needs through food</li>
                <li><strong>Electrolytes:</strong> Especially if experiencing side effects</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">The Bottom Line</h2>
              <p className="text-muted-foreground leading-relaxed">
                The best diet for tirzepatide prioritizes protein, emphasizes nutrient-dense whole foods, avoids triggers that worsen GI symptoms, and adapts to your reduced appetite while ensuring adequate nutrition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Success isn't about following a restrictive diet—it's about making smart choices within your reduced appetite, focusing on quality over quantity, and building sustainable eating habits that will serve you long-term.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Work with a registered dietitian if possible to create a personalized plan that meets your specific needs, preferences, and goals. They can help ensure you're getting adequate nutrition while maximizing your weight loss results.
              </p>
            </section>

            <section className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This article is for informational purposes only and does not constitute medical or nutritional advice. Dietary needs vary by individual based on health status, activity level, and treatment goals. Always consult with your healthcare provider or registered dietitian before making significant dietary changes, especially when taking medication. The information provided should not replace professional nutritional guidance.
              </p>
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-semibold mb-3 text-foreground">References</h3>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Academy of Nutrition and Dietetics. Nutrition Care Manual: Obesity Management. 2024.</li>
                <li>Pasiakos SM, et al. Effects of high-protein diets on fat-free mass and muscle protein synthesis following weight loss: a randomized controlled trial. FASEB J. 2013;27(9):3837-3847.</li>
                <li>Westerterp-Plantenga MS, et al. Dietary protein - its role in satiety, energetics, weight loss and health. Br J Nutr. 2012;108 Suppl 2:S105-112.</li>
                <li>Phillips SM, Chevalier S, Leidy HJ. Protein "requirements" beyond the RDA: implications for optimizing health. Appl Physiol Nutr Metab. 2016;41(5):565-572.</li>
              </ol>
            </section>
          </div>

          <TopicClusterNav
            hubPage="/blog/getting-started-hub"
            topic="Tirzepatide Nutrition"
            relatedArticles={[
              {
                title: "Tirzepatide First Month",
                url: "/blog/tirzepatide-first-month",
                excerpt: "Week-by-week guide to your first month on tirzepatide."
              },
              {
                title: "Best Foods for Tirzepatide",
                url: "/blog/best-foods-tirzepatide",
                excerpt: "Specific foods that work well with tirzepatide treatment."
              },
              {
                title: "Managing Food Interactions with Tirzepatide",
                url: "/blog/managing-food-interactions-tirzepatide",
                excerpt: "Foods to avoid and timing strategies for optimal results."
              },
              {
                title: "Tirzepatide Dosage Guide",
                url: "/blog/tirzepatide-dosage-guide",
                excerpt: "Complete dosing schedule and administration tips."
              }
            ]}
          />

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/treatments/tirzepatide" className="flex-1">
              <Button size="lg" className="w-full">
                Start Tirzepatide Treatment
              </Button>
            </Link>
            <Link to="/blog" className="flex-1">
              <Button size="lg" variant="outline" className="w-full">
                More Articles
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default TirzepatideDietGuide;