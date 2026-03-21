import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import { Apple, AlertTriangle, CheckCircle2 } from "lucide-react";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const TirzepatideNutritionAbsorption = () => {
  const postMeta = getBlogPostMeta("tirzepatide-nutrition-absorption");
  const publishDate = postMeta?.date || "2025-05-02";
  const readTime = postMeta?.readTime || "13 min";
  const clusterNav = getClusterNavigation("/blog/tirzepatide-nutrition-absorption");
  
  return (
    <>
      <Helmet>
        <title>Tirzepatide and Nutrient Absorption: Preventing Deficiencies | Trimi</title>
        <meta name="description" content="How tirzepatide affects vitamin and mineral absorption. Complete guide to preventing nutritional deficiencies during weight loss treatment." />
        <meta name="keywords" content="tirzepatide nutrition, mounjaro vitamin deficiency, tirzepatide supplements, nutrient absorption, weight loss vitamins" />
        <meta name="author" content="Dr. Amanda Rodriguez, RD, Clinical Nutrition" />
        <link rel="canonical" href="https://trytrimi.com/blog/tirzepatide-nutrition-absorption" />
        
        <meta property="og:title" content="Tirzepatide and Nutrient Absorption Guide" />
        <meta property="og:description" content="Preventing nutritional deficiencies while on tirzepatide treatment through proper supplementation and diet." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/tirzepatide-nutrition-absorption" />
        <meta property="article:published_time" content={publishDate} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": "Tirzepatide and Nutrient Absorption: Preventing Deficiencies",
            "datePublished": publishDate,
            "author": {
              "@type": "Person",
              "name": "Dr. Amanda Rodriguez",
              "jobTitle": "Clinical Nutritionist"
            }
          })}
        </script>
      </Helmet>
      
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Tirzepatide and Nutrient Absorption: Preventing Nutritional Deficiencies
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <time dateTime={publishDate}>
                {new Date(publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span>•</span>
              <span>{readTime} read</span>
              <span>•</span>
              <span>By Dr. Amanda Rodriguez, RD</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              While tirzepatide's appetite-suppressing effects drive impressive weight loss, reduced food intake and altered digestion can impact nutrient absorption. Understanding these effects and implementing proper supplementation strategies ensures you maintain optimal nutrition while losing weight—protecting muscle mass, bone health, energy levels, and overall wellbeing.
            </p>

            <Card className="p-6 my-8 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <Apple className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Essential Knowledge</h3>
                  <p className="text-muted-foreground">
                    Rapid weight loss from any method increases risk of nutritional deficiencies. Studies show that without proper supplementation, up to 80% of patients on GLP-1 medications develop at least one micronutrient deficiency within 6-12 months.<sup>1</sup>
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">How Tirzepatide Affects Nutrient Absorption</h2>
            
            <p>
              Tirzepatide impacts nutrition through several mechanisms that go beyond simple calorie restriction:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Reduced Food Intake</h3>

            <p>
              The most obvious but important factor:
            </p>

            <ul className="space-y-3 my-6">
              <li><strong>Dramatic calorie reduction:</strong> Average 500-1,000 calories less daily</li>
              <li><strong>Smaller meal volumes:</strong> Less food means fewer total nutrients</li>
              <li><strong>Food aversions:</strong> Some patients develop aversions to previously enjoyed foods</li>
              <li><strong>Reduced variety:</strong> Tendency to eat same "safe" foods repeatedly</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. Delayed Gastric Emptying</h3>

            <p>
              Slower stomach emptying affects how nutrients are absorbed:
            </p>

            <ul className="space-y-3 my-6">
              <li><strong>Altered absorption timing:</strong> Nutrients absorbed over longer periods</li>
              <li><strong>Potential malabsorption:</strong> Some vitamins and minerals may not be fully absorbed</li>
              <li><strong>Reduced stomach acid:</strong> Lower acid production affects mineral absorption</li>
              <li><strong>Changes in gut motility:</strong> Affects overall digestive efficiency<sup>2</sup></li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. Changes in Gut Hormones</h3>

            <ul className="space-y-3 my-6">
              <li><strong>Altered bile secretion:</strong> May affect fat-soluble vitamin absorption</li>
              <li><strong>Modified pancreatic enzymes:</strong> Impacts protein and fat digestion</li>
              <li><strong>Gut microbiome changes:</strong> Affects vitamin K and B vitamin production</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Nutrients at Highest Risk of Deficiency</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Protein</h3>

            <p>
              The single most important nutrient to prioritize during weight loss:
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg my-6">
              <h4 className="font-semibold mb-3 text-foreground">Why Protein Matters on Tirzepatide:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Preserves lean muscle mass during weight loss</li>
                <li>• Supports immune function and healing</li>
                <li>• Maintains metabolism (muscle burns more calories)</li>
                <li>• Promotes satiety between meals</li>
                <li>• Essential for skin, hair, and nail health</li>
              </ul>
            </div>

            <p>
              <strong>Target intake:</strong> 1.2-1.6g per kilogram of ideal body weight daily (approximately 80-120g for most adults)
            </p>

            <p>
              <strong>Best sources:</strong> Lean meats, fish, eggs, Greek yogurt, protein shakes, tofu, legumes
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Vitamin B12</h3>

            <p>
              One of the most commonly deficient micronutrients:
            </p>

            <ul className="space-y-3 my-6">
              <li><strong>Role:</strong> Energy production, nerve function, red blood cell formation</li>
              <li><strong>Why at risk:</strong> Requires stomach acid for absorption; reduced meat intake</li>
              <li><strong>Symptoms of deficiency:</strong> Fatigue, weakness, numbness, cognitive issues</li>
              <li><strong>Recommended supplement:</strong> 500-1,000 mcg daily, sublingual or methylcobalamin form</li>
              <li><strong>Food sources:</strong> Meat, fish, eggs, dairy, fortified foods<sup>3</sup></li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Iron</h3>

            <p>
              Particularly concerning for menstruating women:
            </p>

            <ul className="space-y-3 my-6">
              <li><strong>Role:</strong> Oxygen transport, energy production, immune function</li>
              <li><strong>Why at risk:</strong> Reduced red meat intake; requires stomach acid for absorption</li>
              <li><strong>Symptoms of deficiency:</strong> Fatigue, weakness, pale skin, cold intolerance, dizziness</li>
              <li><strong>Testing:</strong> Check ferritin, not just hemoglobin</li>
              <li><strong>Recommended supplement:</strong> 18-45mg daily for women; men may not need unless deficient</li>
              <li><strong>Food sources:</strong> Red meat, poultry, fish, beans, spinach (take with vitamin C for absorption)</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Calcium and Vitamin D</h3>

            <p>
              Critical for bone health during weight loss:
            </p>

            <ul className="space-y-3 my-6">
              <li><strong>Role:</strong> Bone strength, muscle function, immune health</li>
              <li><strong>Why at risk:</strong> Reduced dairy intake; less fat consumption affects vitamin D absorption</li>
              <li><strong>Consequences:</strong> Increased fracture risk, bone density loss, muscle weakness</li>
              <li><strong>Recommended supplement:</strong> Calcium 1,000-1,200mg; Vitamin D3 2,000-4,000 IU daily</li>
              <li><strong>Food sources:</strong> Dairy, fortified plant milk, fatty fish, egg yolks, sunshine for vitamin D</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Thiamine (Vitamin B1)</h3>

            <p>
              Often overlooked but clinically important:
            </p>

            <ul className="space-y-3 my-6">
              <li><strong>Role:</strong> Energy metabolism, nerve function, heart health</li>
              <li><strong>Why at risk:</strong> Reduced carbohydrate intake; nausea and vomiting can deplete stores</li>
              <li><strong>Serious complication:</strong> Wernicke encephalopathy (rare but serious neurological condition)</li>
              <li><strong>Recommended supplement:</strong> 50-100mg daily, especially if persistent vomiting</li>
              <li><strong>Food sources:</strong> Whole grains, pork, legumes, nuts, seeds<sup>4</sup></li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Magnesium</h3>

            <ul className="space-y-3 my-6">
              <li><strong>Role:</strong> Muscle and nerve function, bone health, energy production, blood sugar control</li>
              <li><strong>Why at risk:</strong> Reduced food variety; GI side effects cause losses</li>
              <li><strong>Symptoms of deficiency:</strong> Muscle cramps, fatigue, irregular heartbeat, restless legs</li>
              <li><strong>Recommended supplement:</strong> 300-400mg daily (magnesium glycinate better absorbed)</li>
              <li><strong>Food sources:</strong> Leafy greens, nuts, seeds, whole grains, beans</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Folate (Vitamin B9)</h3>

            <ul className="space-y-3 my-6">
              <li><strong>Role:</strong> Cell division, DNA synthesis, red blood cell production</li>
              <li><strong>Why at risk:</strong> Reduced leafy green and fortified grain intake</li>
              <li><strong>Critical for:</strong> Women of childbearing age (prevents neural tube defects)</li>
              <li><strong>Recommended supplement:</strong> 400-800 mcg daily</li>
              <li><strong>Food sources:</strong> Leafy greens, legumes, fortified grains, citrus</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Comprehensive Supplementation Strategy</h2>

            <Card className="p-6 my-8 border-destructive/30 bg-destructive/5">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Important Note on Supplements
              </h3>
              <p className="text-muted-foreground">
                Always take supplements with food when possible, and space them appropriately. Some nutrients compete for absorption. Consult your healthcare provider before starting any supplementation regimen.
              </p>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Essential Daily Supplements</h3>

            <div className="bg-secondary/20 p-6 rounded-lg my-8">
              <h4 className="font-semibold mb-4 text-foreground">Recommended Supplementation Protocol:</h4>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Morning (with breakfast):</p>
                  <ul className="mt-2 space-y-1">
                    <li>• High-quality multivitamin/mineral</li>
                    <li>• Vitamin D3: 2,000-4,000 IU</li>
                    <li>• Omega-3 fish oil: 1,000-2,000mg EPA/DHA</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Afternoon (with lunch):</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Calcium citrate: 500mg (if not in multivitamin)</li>
                    <li>• Magnesium glycinate: 200mg</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Evening (with dinner or snack):</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Calcium citrate: 500mg (second dose)</li>
                    <li>• Magnesium glycinate: 200mg</li>
                    <li>• B-complex vitamin (if not in multivitamin)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Additional as needed:</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Iron supplement (if deficient, take separately from calcium)</li>
                    <li>• B12 sublingual (if vegetarian or low stomach acid)</li>
                    <li>• Thiamine (if persistent nausea/vomiting)</li>
                    <li>• Vitamin C (supports iron absorption and immune health)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Choosing Quality Supplements</h3>

            <ul className="space-y-3 my-6">
              <li><strong>Third-party testing:</strong> Look for USP, NSF, or ConsumerLab verification</li>
              <li><strong>Bioavailable forms:</strong> Methylcobalamin (B12), magnesium glycinate, calcium citrate</li>
              <li><strong>Appropriate dosages:</strong> Avoid mega-doses unless medically indicated</li>
              <li><strong>Check interactions:</strong> Some supplements interact with medications</li>
              <li><strong>Avoid proprietary blends:</strong> Choose supplements with transparent labeling</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Optimizing Nutrition Through Food</h2>

            <p>
              While supplements are important, whole food should be your primary nutrition source:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Nutrient-Dense Foods to Prioritize</h3>

            <div className="bg-secondary/30 p-6 rounded-lg my-6">
              <h4 className="font-semibold mb-3 text-foreground">Focus on These High-Nutrient Foods:</h4>
              
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Protein powerhouses:</strong> Eggs, Greek yogurt, fish, chicken breast, lean beef</li>
                <li><strong>Leafy greens:</strong> Spinach, kale, Swiss chard (folate, iron, calcium)</li>
                <li><strong>Fatty fish:</strong> Salmon, sardines, mackerel (omega-3, vitamin D, protein)</li>
                <li><strong>Nuts and seeds:</strong> Almonds, pumpkin seeds, chia seeds (magnesium, healthy fats)</li>
                <li><strong>Fortified foods:</strong> Fortified cereals, plant milks (multiple vitamins)</li>
                <li><strong>Colorful vegetables:</strong> Bell peppers, tomatoes, carrots (vitamins A, C, antioxidants)</li>
                <li><strong>Berries:</strong> Blueberries, strawberries (antioxidants, fiber, vitamin C)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Meal Planning Strategies</h3>

            <ul className="space-y-3 my-6">
              <li><strong>Protein first:</strong> Start each meal with protein to ensure adequate intake</li>
              <li><strong>Rainbow plate:</strong> Include multiple colors for diverse micronutrients</li>
              <li><strong>Healthy fats:</strong> Don't fear fats; they're essential for vitamin absorption</li>
              <li><strong>Strategic snacking:</strong> Nutrient-dense snacks like nuts, cheese, hard-boiled eggs</li>
              <li><strong>Liquid nutrition:</strong> Protein smoothies can pack in nutrients when appetite is low</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Monitoring and Testing</h2>

            <Card className="p-6 my-8 bg-accent/10 border-accent/30">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Proactive Monitoring</h3>
                  <p className="text-muted-foreground">
                    Regular lab work catches deficiencies before symptoms appear, allowing early intervention and preventing complications.
                  </p>
                </div>
              </div>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Recommended Lab Testing Schedule</h3>

            <div className="bg-secondary/20 p-6 rounded-lg my-8">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Baseline (before starting):</strong> Complete blood count, comprehensive metabolic panel, vitamin D, B12, folate, iron panel</li>
                <li><strong>3 months:</strong> Recheck any abnormal values from baseline</li>
                <li><strong>6 months:</strong> Comprehensive nutrient panel including vitamins and minerals</li>
                <li><strong>Annually:</strong> Full nutritional assessment if stable</li>
                <li><strong>As needed:</strong> If symptoms of deficiency develop</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Signs of Nutritional Deficiency</h3>

            <p>
              Contact your healthcare provider if you experience:
            </p>

            <ul className="space-y-3 my-6">
              <li><strong>Persistent fatigue:</strong> May indicate iron, B12, or folate deficiency</li>
              <li><strong>Hair loss:</strong> Often protein, iron, or biotin deficiency</li>
              <li><strong>Muscle weakness or cramps:</strong> Possible magnesium, potassium, or calcium deficiency</li>
              <li><strong>Numbness or tingling:</strong> May be B12 or thiamine deficiency</li>
              <li><strong>Frequent infections:</strong> Could indicate protein, vitamin D, or zinc deficiency</li>
              <li><strong>Poor wound healing:</strong> Often protein, vitamin C, or zinc deficiency</li>
              <li><strong>Bone pain:</strong> Possible vitamin D or calcium deficiency<sup>5</sup></li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Special Populations</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Vegetarians and Vegans</h3>

            <p>
              Plant-based eaters need extra attention to certain nutrients:
            </p>

            <ul className="space-y-3 my-6">
              <li><strong>Vitamin B12:</strong> Must supplement (not naturally in plant foods)</li>
              <li><strong>Iron:</strong> Higher doses needed; plant iron less bioavailable</li>
              <li><strong>Protein:</strong> Combine plant proteins; consider protein powder</li>
              <li><strong>Omega-3:</strong> Algae-based supplement for EPA/DHA</li>
              <li><strong>Calcium:</strong> Focus on fortified foods and supplements</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Women of Childbearing Age</h3>

            <ul className="space-y-3 my-6">
              <li><strong>Folate:</strong> Essential for pregnancy planning (800 mcg daily)</li>
              <li><strong>Iron:</strong> Higher needs due to menstruation</li>
              <li><strong>Calcium:</strong> Building bone density for future</li>
              <li><strong>Discontinue tirzepatide:</strong> If planning pregnancy (discuss with doctor)</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Older Adults</h3>

            <ul className="space-y-3 my-6">
              <li><strong>Higher protein needs:</strong> 1.2-1.5g/kg to preserve muscle</li>
              <li><strong>Vitamin D:</strong> Often need higher doses (4,000 IU)</li>
              <li><strong>B12:</strong> Reduced stomach acid affects absorption</li>
              <li><strong>Calcium:</strong> Critical for bone health (1,200mg for women over 50)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Bottom Line on Nutrition</h2>

            <p>
              Proper nutrition is not optional on tirzepatide—it's essential for safe, effective, sustainable weight loss. While the medication drives impressive results, inadequate nutrition can lead to muscle loss, fatigue, hair thinning, weakened immunity, and other unwanted side effects that undermine your health goals.
            </p>

            <p>
              The good news is that with proper supplementation, strategic food choices, and regular monitoring, you can prevent virtually all nutritional deficiencies. Focus on protein at every meal, take a comprehensive supplement regimen, eat nutrient-dense foods, and work with your healthcare provider to monitor your nutritional status.
            </p>

            <p>
              Remember: the goal is not just weight loss, but optimal health. Proper nutrition ensures you lose fat while preserving muscle, maintaining energy, and supporting all body systems. This approach leads to better results, fewer side effects, and long-term success.
            </p>
            
            <TopicClusterNav
              topic="Tirzepatide Health Effects"
              relatedArticles={clusterNav.relatedInCluster}
              hubPage="/blog/tirzepatide"
            />

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                This article is for educational purposes only. Supplement recommendations are general guidelines; individual needs vary based on diet, medical conditions, and lab results. Always consult your healthcare provider before starting any supplement regimen. Never replace prescribed medications with supplements.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">References</h2>
            
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li>1. Parrott J, et al. "American Society for Metabolic and Bariatric Surgery Integrated Health Nutritional Guidelines for the Surgical Weight Loss Patient 2016 Update." <em>Surgery for Obesity and Related Diseases</em>. 2017;13(5):727-741.</li>
              <li>2. Urva S, et al. "The Effects of Tirzepatide on Gastric Emptying and Energy Intake in Healthy Subjects." <em>Diabetes, Obesity and Metabolism</em>. 2022;24(8):1606-1614.</li>
              <li>3. Brolin RE, et al. "Are vitamin B12 and folate deficiency clinically important after roux-en-Y gastric bypass?" <em>Journal of Gastrointestinal Surgery</em>. 1998;2(5):436-442.</li>
              <li>4. Malone M. "Recommended nutritional supplements for bariatric surgery patients." <em>Annals of Pharmacotherapy</em>. 2008;42(12):1851-1858.</li>
              <li>5. Mechanick JI, et al. "Clinical practice guidelines for the perioperative nutrition, metabolic, and nonsurgical support of patients undergoing bariatric procedures." <em>Obesity</em>. 2020;28(4):O1-O58.</li>
            </ol>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Related Articles</h3>
              <div className="grid gap-4">
                <Link to="/blog/tirzepatide-diet-guide" className="text-primary hover:underline">
                  → Best Diet for Tirzepatide: What to Eat for Maximum Weight Loss
                </Link>
                <Link to="/blog/semaglutide-muscle-preservation" className="text-primary hover:underline">
                  → Semaglutide and Muscle Preservation: Maintaining Lean Mass
                </Link>
                <Link to="/blog/tirzepatide-side-effects" className="text-primary hover:underline">
                  → Tirzepatide Side Effects: Complete Management Guide
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/treatments">
              <Button size="lg" className="text-lg px-8">
                Start Your Tirzepatide Journey
              </Button>
            </Link>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
};

export default TirzepatideNutritionAbsorption;