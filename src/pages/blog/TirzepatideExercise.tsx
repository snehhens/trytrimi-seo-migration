import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Dumbbell, Heart } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";

const TirzepatideExercise = () => {
  const postMeta = getBlogPostMeta("tirzepatide-exercise");
  const publishDate = postMeta?.date || "2025-02-03";
  const readTime = postMeta?.readTime || "14 min";
  
  return (
    <>
      <Helmet>
        <title>Exercise on Tirzepatide: Best Workouts to Preserve Muscle & Maximize Loss | Trimi</title>
        <meta name="description" content="Complete guide to exercising on tirzepatide. Learn the best workouts to preserve muscle, maximize fat loss, prevent fatigue, and optimize your results on Mounjaro or Zepbound." />
        <meta name="keywords" content="tirzepatide exercise, working out on tirzepatide, mounjaro exercise, zepbound workout, tirzepatide muscle loss, tirzepatide fitness" />
        <meta name="author" content="Trimi Medical Team" />
        <link rel="canonical" href="https://trytrimi.com/blog/tirzepatide-exercise" />
        
        <meta property="og:title" content="Exercise on Tirzepatide: Complete Workout Guide" />
        <meta property="og:description" content="Optimize your tirzepatide results with the right exercise routine. Preserve muscle and maximize fat loss." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/tirzepatide-exercise" />
        <meta property="og:published_time" content="2025-02-29T09:00:00Z" />
        <meta property="article:author" content="Trimi Medical Team" />
        <meta property="article:section" content="Fitness" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": "Exercise on Tirzepatide: Complete Workout Guide",
            "description": "Guide to exercising effectively while on tirzepatide",
            "datePublished": "2025-02-29T09:00:00Z",
            "dateModified": "2025-02-29T09:00:00Z",
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
              Exercise on Tirzepatide: Best Workouts to Preserve Muscle
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
              Combining tirzepatide with the right exercise program amplifies your results, preserves lean muscle mass, and sets you up for long-term success. Here's your complete guide to working out on tirzepatide.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Why Exercise Matters on Tirzepatide</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tirzepatide is remarkably effective for weight loss even without exercise—clinical trials showed significant results with no structured exercise requirements. However, adding appropriate exercise provides benefits that medication alone cannot:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Preserves lean muscle mass:</strong> Prevents the 20-30% muscle loss typical of rapid weight loss</li>
                <li><strong>Maintains metabolic rate:</strong> Muscle is metabolically active; preserving it keeps metabolism higher</li>
                <li><strong>Improves body composition:</strong> Enhances fat-to-muscle ratio for better aesthetics and function</li>
                <li><strong>Boosts cardiovascular health:</strong> Benefits beyond weight loss alone</li>
                <li><strong>Enhances insulin sensitivity:</strong> Amplifies tirzepatide's metabolic benefits</li>
                <li><strong>Supports long-term maintenance:</strong> Exercise habits predict successful weight maintenance</li>
                <li><strong>Improves mental health:</strong> Reduces anxiety and depression often associated with weight loss journey</li>
              </ul>
            </section>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                <Dumbbell className="mr-2 h-5 w-5 text-primary" />
                Optimal Exercise Formula for Tirzepatide
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Resistance Training:</span>
                  <span>3-4x per week, 30-45 minutes</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Cardiovascular Exercise:</span>
                  <span>150+ minutes weekly, moderate intensity</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Daily Activity (NEAT):</span>
                  <span>8,000-10,000 steps</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Recovery Days:</span>
                  <span>1-2 per week</span>
                </div>
              </div>
            </Card>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Resistance Training: Your Priority</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you can only do one type of exercise on tirzepatide, make it resistance training. This is your insurance policy against muscle loss during rapid weight reduction.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Why Resistance Training is Critical</h3>
              <p className="text-muted-foreground leading-relaxed">
                During calorie restriction (which tirzepatide facilitates), your body can burn muscle along with fat. Studies show that without resistance training, up to 25-30% of weight lost can be lean muscle mass. With proper resistance training, you can reduce this to 5-10% or even gain muscle while losing fat.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Beginner Resistance Training Program</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Frequency:</strong> 3 days per week (Monday, Wednesday, Friday)
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Full Body Workout:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Squats or leg press: 3 sets of 10-12 reps</li>
                <li>Push-ups or chest press: 3 sets of 10-12 reps</li>
                <li>Rows (dumbbell, cable, or band): 3 sets of 10-12 reps</li>
                <li>Lunges: 2 sets of 10 each leg</li>
                <li>Shoulder press: 2 sets of 10-12 reps</li>
                <li>Plank: 3 sets of 20-30 seconds</li>
                <li>Bicep curls: 2 sets of 12 reps</li>
                <li>Tricep extensions: 2 sets of 12 reps</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Intermediate/Advanced Program</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Frequency:</strong> 4 days per week (Upper/Lower split)
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Day 1 - Upper Body:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Bench press: 4 sets of 8-10 reps</li>
                <li>Bent-over rows: 4 sets of 8-10 reps</li>
                <li>Overhead press: 3 sets of 10 reps</li>
                <li>Pull-ups or lat pulldown: 3 sets of 10 reps</li>
                <li>Dumbbell curls: 3 sets of 12 reps</li>
                <li>Tricep dips: 3 sets of 12 reps</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Day 2 - Lower Body:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Squats: 4 sets of 8-10 reps</li>
                <li>Romanian deadlifts: 4 sets of 10 reps</li>
                <li>Leg press: 3 sets of 12 reps</li>
                <li>Leg curls: 3 sets of 12 reps</li>
                <li>Calf raises: 4 sets of 15 reps</li>
                <li>Core work: 3 sets</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Key Principles</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Progressive overload:</strong> Gradually increase weight, reps, or sets over time</li>
                <li><strong>Full range of motion:</strong> Complete movements prevent muscle imbalances</li>
                <li><strong>Control the negative:</strong> Slow, controlled lowering phase builds more muscle</li>
                <li><strong>Mind-muscle connection:</strong> Focus on the muscle you're working</li>
                <li><strong>Adequate rest between sets:</strong> 60-90 seconds for hypertrophy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Cardiovascular Exercise</h2>
              <p className="text-muted-foreground leading-relaxed">
                While not as critical as resistance training for muscle preservation, cardiovascular exercise provides important health and weight loss benefits.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">How Much Cardio?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Guidelines recommend 150-300 minutes of moderate-intensity cardio weekly. However, on tirzepatide with reduced energy from lower calorie intake, start conservatively:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Beginners:</strong> 100-150 minutes weekly</li>
                <li><strong>Intermediate:</strong> 150-200 minutes weekly</li>
                <li><strong>Advanced:</strong> 200-300 minutes weekly</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Best Cardio Options</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Walking:</strong> Low-impact, sustainable, can be done daily</li>
                <li><strong>Cycling:</strong> Joint-friendly, scalable intensity</li>
                <li><strong>Swimming:</strong> Excellent full-body workout, zero impact</li>
                <li><strong>Elliptical:</strong> Lower impact than running</li>
                <li><strong>Rowing:</strong> Full-body cardio with resistance component</li>
                <li><strong>Hiking:</strong> Combines cardio with nature exposure</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">High-Intensity Interval Training (HIIT)</h3>
              <p className="text-muted-foreground leading-relaxed">
                HIIT can be effective but should be approached cautiously on tirzepatide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Benefits:</strong> Time-efficient, preserves muscle better than steady-state cardio</li>
                <li><strong>Cautions:</strong> Higher energy demands may be challenging with reduced calorie intake</li>
                <li><strong>Recommendation:</strong> 1-2 HIIT sessions weekly max, not during first month on medication</li>
                <li><strong>Sample HIIT:</strong> 30 seconds hard effort, 90 seconds easy recovery, repeat 8-10 times</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">NEAT: The Underrated Game-Changer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Non-Exercise Activity Thermogenesis (NEAT) refers to all physical activity outside of formal exercise—fidgeting, standing, walking around your house, taking stairs, etc. NEAT can account for 15-30% of total daily energy expenditure.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Maximizing NEAT</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Daily step goal:</strong> Aim for 8,000-10,000 steps</li>
                <li><strong>Standing desk:</strong> Alternate sitting and standing throughout day</li>
                <li><strong>Take stairs:</strong> Whenever possible</li>
                <li><strong>Park farther away:</strong> Add extra walking to errands</li>
                <li><strong>Walk during phone calls:</strong> Combine activities</li>
                <li><strong>Commercial break movement:</strong> Walk or do light activity during TV commercials</li>
                <li><strong>Take movement breaks:</strong> Every hour, move for 2-3 minutes</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Research shows NEAT can vary by up to 2,000 calories daily between individuals. On tirzepatide, when you're eating less, maximizing NEAT becomes even more valuable for creating calorie deficit.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Exercise Timing and Nutrition</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">When to Exercise</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Best times on tirzepatide:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Morning:</strong> Many people feel best before eating much</li>
                <li><strong>2-3 hours after eating:</strong> Food has settled but you have energy</li>
                <li><strong>Avoid immediately after meals:</strong> Can worsen nausea and fullness</li>
                <li><strong>Consider injection timing:</strong> Some prefer not to exercise on injection day</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Pre-Workout Nutrition</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Small protein-rich snack 1-2 hours before (e.g., Greek yogurt, protein shake)</li>
                <li>Stay well-hydrated starting 2 hours before</li>
                <li>Avoid heavy, high-fat meals before exercise</li>
                <li>Some people perform well fasted; experiment to find what works</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Post-Workout Nutrition</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Protein within 2 hours:</strong> 20-30g to support muscle recovery</li>
                <li><strong>Rehydrate:</strong> 16-24oz water</li>
                <li><strong>Add carbs if intense workout:</strong> Replenish glycogen stores</li>
                <li><strong>Don't force large meals:</strong> Listen to your satiety signals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Managing Fatigue and Energy Levels</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some people experience fatigue on tirzepatide, especially in the first few weeks or with higher doses. This can affect exercise performance.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Strategies to Combat Fatigue</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Ensure adequate calories:</strong> Don't go too low (minimum 1200 for women, 1500 for men)</li>
                <li><strong>Prioritize protein:</strong> Supports energy and prevents muscle breakdown</li>
                <li><strong>Stay hydrated:</strong> Dehydration mimics and worsens fatigue</li>
                <li><strong>Quality sleep:</strong> 7-9 hours nightly non-negotiable</li>
                <li><strong>Reduce exercise intensity temporarily:</strong> If very fatigued, scale back rather than skip</li>
                <li><strong>Consider multivitamin:</strong> Ensure no micronutrient deficiencies</li>
                <li><strong>Pre-workout caffeine:</strong> If tolerated, can boost energy (moderate amounts)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">When to Reduce Exercise Volume</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Persistent fatigue not improving after 2-3 weeks</li>
                <li>Declining workout performance week over week</li>
                <li>Excessive muscle soreness or joint pain</li>
                <li>Mood disturbances or irritability</li>
                <li>Sleep disruptions</li>
              </ul>
            </section>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                <Heart className="mr-2 h-5 w-5 text-primary" />
                Sample Weekly Exercise Schedule
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="border-b border-border pb-2">
                  <p className="font-semibold text-foreground">Monday:</p>
                  <p>Resistance training - Full body (45 min) + 10,000 steps</p>
                </div>
                <div className="border-b border-border pb-2">
                  <p className="font-semibold text-foreground">Tuesday:</p>
                  <p>Moderate cardio - Walking/cycling (30 min) + 8,000 steps</p>
                </div>
                <div className="border-b border-border pb-2">
                  <p className="font-semibold text-foreground">Wednesday:</p>
                  <p>Resistance training - Full body (45 min) + 10,000 steps</p>
                </div>
                <div className="border-b border-border pb-2">
                  <p className="font-semibold text-foreground">Thursday:</p>
                  <p>Active recovery - Light yoga/stretching (20 min) + 8,000 steps</p>
                </div>
                <div className="border-b border-border pb-2">
                  <p className="font-semibold text-foreground">Friday:</p>
                  <p>Resistance training - Full body (45 min) + 10,000 steps</p>
                </div>
                <div className="border-b border-border pb-2">
                  <p className="font-semibold text-foreground">Saturday:</p>
                  <p>Longer cardio - Hiking/swimming (45-60 min)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sunday:</p>
                  <p>Rest or very light activity + 6,000+ steps</p>
                </div>
              </div>
            </Card>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Common Exercise Mistakes to Avoid</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">1. Doing Too Much Cardio, Not Enough Resistance Training</h3>
              <p className="text-muted-foreground leading-relaxed">
                Many people default to excessive cardio for weight loss. While cardio burns calories, it doesn't preserve muscle like resistance training. The result: you lose weight but become "skinny fat" with poor body composition.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">2. Starting Too Intensely</h3>
              <p className="text-muted-foreground leading-relaxed">
                Going from sedentary to intense daily workouts is a recipe for burnout, injury, and abandoned exercise plans. Start conservatively and build gradually.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">3. Not Eating Enough to Support Exercise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tirzepatide suppresses appetite, but if you're exercising regularly, you need adequate fuel. Don't go below 1200 calories (women) or 1500 calories (men) even with reduced appetite.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">4. Skipping Rest Days</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recovery is when your body adapts and builds muscle. Overtraining leads to plateau, fatigue, and increased injury risk.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">5. Comparing Your Journey to Others</h3>
              <p className="text-muted-foreground leading-relaxed">
                Everyone responds differently to tirzepatide and exercise. Some people maintain high energy; others need to scale back. Honor your individual response.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">The Bottom Line</h2>
              <p className="text-muted-foreground leading-relaxed">
                Exercise on tirzepatide isn't about burning maximum calories—the medication handles appetite control. Instead, exercise serves to preserve muscle mass, maintain metabolic rate, and build habits for long-term success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prioritize resistance training 3-4 times weekly, add moderate cardio for cardiovascular health, maximize daily movement through NEAT, and listen to your body's signals. This balanced approach optimizes your tirzepatide results while setting you up for sustainable maintenance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Remember: consistency beats intensity. A sustainable exercise routine you can maintain long-term is infinitely more valuable than an aggressive program you abandon after a month.
              </p>
            </section>

            <section className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This article is for informational purposes only and does not constitute medical or fitness advice. Always consult with your healthcare provider before starting a new exercise program, especially when taking medication or if you have any underlying health conditions. Individual exercise tolerance varies, and your program should be tailored to your specific needs, fitness level, and medical status.
              </p>
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-semibold mb-3 text-foreground">References</h3>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Johannsen DL, et al. Metabolic slowing with massive weight loss despite preservation of fat-free mass. J Clin Endocrinol Metab. 2012;97(7):2489-2496.</li>
                <li>Willis LH, et al. Effects of aerobic and/or resistance training on body mass and fat mass in overweight or obese adults. J Appl Physiol. 2012;113(12):1831-1837.</li>
                <li>Donnelly JE, et al. American College of Sports Medicine Position Stand: Appropriate Physical Activity Intervention Strategies for Weight Loss and Prevention of Weight Regain for Adults. Med Sci Sports Exerc. 2009;41(2):459-471.</li>
                <li>Levine JA. Non-exercise activity thermogenesis (NEAT). Best Pract Res Clin Endocrinol Metab. 2002;16(4):679-702.</li>
              </ol>
            </section>
          </div>

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

export default TirzepatideExercise;