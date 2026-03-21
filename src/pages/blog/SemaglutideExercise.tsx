import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Dumbbell } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/semaglutide-exercise.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideExercise = () => {
  const postMeta = getBlogPostMeta("semaglutide-exercise");
  const publishDate = postMeta?.date || "2025-02-03";
  const modifiedDate = getModifiedDate("semaglutide-exercise", publishDate);
  const readTime = postMeta?.readTime || "14 min";
  const clusterNav = getClusterNavigation('semaglutide-exercise');
  
  const qaData = [
    {
      question: "Is exercise necessary while taking semaglutide?",
      answer: "While not strictly necessary, exercise is critical for preserving muscle mass during weight loss. Without resistance training and adequate protein, 20-30% of weight lost can be muscle instead of fat."
    },
    {
      question: "What type of exercise is best on semaglutide?",
      answer: "Resistance training 3-4 times per week is most important for muscle preservation. Combine with moderate cardio 2-3 times per week and daily movement."
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <QAPageSchema questions={qaData} mainEntityName="Exercise and Semaglutide" />
      
      <Helmet>
        <title>Exercise on Semaglutide: Best Workouts to Preserve Muscle & Maximize Loss | Trimi</title>
        <meta 
          name="description" 
          content="What's the best exercise routine while on semaglutide? Learn how to preserve muscle, optimize fat loss, and avoid common workout mistakes on Ozempic or Wegovy." 
        />
        <meta 
          name="keywords" 
          content="semaglutide exercise, ozempic workout plan, wegovy muscle loss, strength training on GLP-1, best exercise for semaglutide" 
        />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-exercise" />
        <meta property="og:title" content="Exercise on Semaglutide: Best Workouts to Preserve Muscle & Maximize Loss" />
        <meta property="og:description" content="Complete guide to exercising effectively while taking semaglutide medications." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-exercise" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Exercise on Semaglutide: Best Workouts to Preserve Muscle & Maximize Loss
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Exercise isn't optional on semaglutide—it's critical for preserving muscle during rapid weight loss. Here's exactly how to train for the best body composition results.
          </p>

          <MedicalReview
            reviewerName="Dr. Sarah Mitchell"
            credentials="MD, Endocrinology"
            reviewDate={modifiedDate}
            specialty="Obesity Medicine & Metabolic Health"
          />

          <div className="prose prose-lg max-w-none">
            <h2>Why Exercise Matters MORE on Semaglutide</h2>
            <p>
              Semaglutide causes significant weight loss—but weight loss always includes both fat AND muscle. Without proper exercise and protein intake, you could lose 20-30% of your weight as muscle instead of fat.
            </p>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Dumbbell className="h-5 w-5" />
                The Muscle Loss Problem
              </h3>
              <ul className="space-y-2">
                <li><strong>Typical weight loss:</strong> 20-30% is muscle mass without intervention</li>
                <li><strong>With strength training + protein:</strong> Can reduce muscle loss to 5-10%</li>
                <li><strong>Why it matters:</strong> Muscle burns calories, maintains strength, prevents "skinny fat" appearance</li>
                <li><strong>Metabolic impact:</strong> More muscle = higher resting metabolic rate</li>
              </ul>
            </Card>

            <h2>The Core Principle: Strength Training First</h2>
            <p>
              If you only do one type of exercise on semaglutide, make it strength training. Here's why:
            </p>

            <h3>Benefits of Resistance Training:</h3>
            <ul>
              <li><strong>Preserves lean mass:</strong> Signals your body to keep muscle during calorie deficit</li>
              <li><strong>Improves body composition:</strong> You'll look more toned at goal weight</li>
              <li><strong>Maintains strength:</strong> Don't want to lose 50 lbs but struggle with daily activities</li>
              <li><strong>Boosts metabolism:</strong> Muscle tissue burns more calories at rest than fat</li>
              <li><strong>Improves insulin sensitivity:</strong> Compounds semaglutide's metabolic benefits</li>
              <li><strong>Supports bone health:</strong> Rapid weight loss can affect bone density; resistance training protects</li>
            </ul>

            <h2>The Ideal Semaglutide Exercise Framework</h2>

            <Card className="p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Weekly Exercise Template</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Strength Training: 3-4x per week</p>
                  <p className="text-sm text-muted-foreground">Full-body or upper/lower split, 30-45 minutes per session</p>
                </div>
                <div>
                  <p className="font-semibold">Cardio: 2-3x per week</p>
                  <p className="text-sm text-muted-foreground">Moderate intensity, 20-30 minutes (walking, cycling, swimming)</p>
                </div>
                <div>
                  <p className="font-semibold">Daily Movement: 7-10k steps</p>
                  <p className="text-sm text-muted-foreground">NEAT (non-exercise activity thermogenesis)—just move throughout the day</p>
                </div>
                <div>
                  <p className="font-semibold">Rest/Recovery: 2-3 days</p>
                  <p className="text-sm text-muted-foreground">Active recovery (gentle yoga, stretching, walking) or complete rest</p>
                </div>
              </div>
            </Card>

            <h2>Strength Training Specifics</h2>

            <h3>Exercise Selection: Compound Movements First</h3>
            <p>
              Focus on exercises that work multiple muscle groups simultaneously:
            </p>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4">Essential Compound Exercises</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Lower Body:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Squats (bodyweight, goblet, barbell)</li>
                    <li>• Deadlifts or RDLs</li>
                    <li>• Lunges (forward, reverse, walking)</li>
                    <li>• Step-ups</li>
                    <li>• Leg press (if gym access)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Upper Body:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Push-ups (modified to full)</li>
                    <li>• Rows (dumbbell, cable, machine)</li>
                    <li>• Overhead press</li>
                    <li>• Chest press (dumbbell or machine)</li>
                    <li>• Pull-downs or assisted pull-ups</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Core:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Planks (front, side)</li>
                    <li>• Dead bugs</li>
                    <li>• Bird dogs</li>
                    <li>• Pallof press</li>
                  </ul>
                </div>
              </div>
            </Card>

            <h3>Sets, Reps, and Progression</h3>

            <Card className="p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Beginner Program (Weeks 1-8)</h3>
              <ul className="space-y-2">
                <li><strong>Frequency:</strong> 3x per week (Monday, Wednesday, Friday)</li>
                <li><strong>Format:</strong> Full-body each session</li>
                <li><strong>Sets × Reps:</strong> 2-3 sets of 10-12 reps per exercise</li>
                <li><strong>Exercises per session:</strong> 6-8 total</li>
                <li><strong>Rest:</strong> 60-90 seconds between sets</li>
                <li><strong>Progression:</strong> Add 1 rep per week, or increase weight by 5% when you hit 12 reps comfortably</li>
              </ul>
            </Card>

            <Card className="p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Intermediate Program (Month 3+)</h3>
              <ul className="space-y-2">
                <li><strong>Frequency:</strong> 4x per week</li>
                <li><strong>Format:</strong> Upper/Lower split (Upper Mon/Thu, Lower Tue/Fri)</li>
                <li><strong>Sets × Reps:</strong> 3-4 sets of 8-12 reps</li>
                <li><strong>Intensity:</strong> Lift to 2-3 reps shy of failure</li>
                <li><strong>Progression:</strong> Progressive overload—gradually increase weight, reps, or sets over time</li>
              </ul>
            </Card>

            <h3>Sample Full-Body Beginner Workout</h3>
            <ol className="space-y-2">
              <li><strong>1. Goblet Squats:</strong> 3 sets × 10 reps</li>
              <li><strong>2. Push-ups (modified if needed):</strong> 3 sets × 8-12 reps</li>
              <li><strong>3. Dumbbell Romanian Deadlifts:</strong> 3 sets × 10 reps</li>
              <li><strong>4. Dumbbell Rows:</strong> 3 sets × 10 reps per arm</li>
              <li><strong>5. Walking Lunges:</strong> 2 sets × 20 steps total</li>
              <li><strong>6. Plank:</strong> 3 sets × 30-45 seconds</li>
            </ol>

            <h2>Cardio: How Much and What Type?</h2>

            <h3>The Cardio Paradox on Semaglutide</h3>
            <p>
              Many people assume more cardio = more weight loss. But excessive cardio can actually work against you:
            </p>

            <ul>
              <li><strong>Can increase appetite:</strong> Long cardio sessions may trigger hunger</li>
              <li><strong>Burns muscle along with fat:</strong> Especially steady-state endurance cardio</li>
              <li><strong>Increases fatigue:</strong> Harder to recover when eating in deficit</li>
              <li><strong>Not necessary for weight loss:</strong> Semaglutide is already driving calorie deficit</li>
            </ul>

            <h3>The Right Approach to Cardio</h3>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4">Cardio Guidelines</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Low-Intensity Steady State (LISS):</strong>
                  <p className="text-sm text-muted-foreground mt-1">Walking, easy cycling, swimming. 2-3x week, 20-30 min. Good for recovery and general health.</p>
                </li>
                <li>
                  <strong>Moderate Intensity:</strong>
                  <p className="text-sm text-muted-foreground mt-1">Brisk walking, jogging, cycling. 2x week, 20-25 min. Cardiovascular conditioning without excessive fatigue.</p>
                </li>
                <li>
                  <strong>HIIT (if appropriate):</strong>
                  <p className="text-sm text-muted-foreground mt-1">1x week max, 15-20 min. Only if you're already fit and recovering well. Not necessary for beginners.</p>
                </li>
              </ul>
            </Card>

            <h2>Managing Energy Levels and Recovery</h2>

            <h3>Common Challenge: Fatigue</h3>
            <p>
              Many people on semaglutide experience reduced energy, especially in the first few months. This affects workout capacity.
            </p>

            <h3>Strategies to Maintain Energy:</h3>
            <ul>
              <li><strong>Don't undereat:</strong> Ensure you're getting at least 1,200-1,500 calories even with reduced appetite</li>
              <li><strong>Prioritize protein:</strong> 25-30g within 2 hours post-workout</li>
              <li><strong>Time your eating:</strong> Eat a small protein/carb snack 1-2 hours before training</li>
              <li><strong>Stay hydrated:</strong> Aim for 80-100 oz water daily</li>
              <li><strong>Adjust intensity:</strong> Some days you'll need to dial back—that's okay</li>
              <li><strong>Sleep 7-9 hours:</strong> Recovery happens during sleep</li>
            </ul>

            <h2>What About Walking?</h2>
            <p>
              Walking is underrated and incredibly valuable on semaglutide:
            </p>

            <Card className="p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Benefits of Daily Walking</h3>
              <ul className="space-y-2">
                <li>• Low-impact, accessible to everyone</li>
                <li>• Burns calories without increasing appetite</li>
                <li>• Doesn't interfere with recovery from strength training</li>
                <li>• Improves digestion (helpful given semaglutide's GI effects)</li>
                <li>• Mental health benefits</li>
                <li>• Can be done daily without overtraining</li>
              </ul>
            </Card>

            <p>
              <strong>Goal:</strong> Aim for 7,000-10,000 steps daily. Break it up throughout the day—doesn't need to be one continuous walk.
            </p>

            <h2>Common Exercise Mistakes on Semaglutide</h2>

            <Card className="p-6 my-8 bg-destructive/10 border-destructive/20">
              <h3 className="text-xl font-semibold mb-4">Mistakes to Avoid</h3>
              <ol className="space-y-3">
                <li>
                  <strong>1. Doing only cardio, no strength training</strong>
                  <p className="text-sm text-muted-foreground mt-1">Recipe for losing significant muscle mass along with fat</p>
                </li>
                <li>
                  <strong>2. Exercising on empty stomach consistently</strong>
                  <p className="text-sm text-muted-foreground mt-1">Can increase fatigue and muscle breakdown when in calorie deficit</p>
                </li>
                <li>
                  <strong>3. Not eating enough protein post-workout</strong>
                  <p className="text-sm text-muted-foreground mt-1">Muscle recovery and growth require adequate protein timing</p>
                </li>
                <li>
                  <strong>4. Overtraining</strong>
                  <p className="text-sm text-muted-foreground mt-1">Your body has less capacity to recover when eating less—more is not better</p>
                </li>
                <li>
                  <strong>5. Skipping rest days</strong>
                  <p className="text-sm text-muted-foreground mt-1">Recovery is when adaptation happens; rest is part of the program</p>
                </li>
                <li>
                  <strong>6. Using too light weights</strong>
                  <p className="text-sm text-muted-foreground mt-1">Need sufficient load to signal muscle preservation; challenge yourself</p>
                </li>
                <li>
                  <strong>7. Not tracking progressive overload</strong>
                  <p className="text-sm text-muted-foreground mt-1">Keep a simple log to ensure you're gradually increasing demands</p>
                </li>
              </ol>
            </Card>

            <h2>Training Through Side Effects</h2>

            <h3>Nausea Days</h3>
            <p>
              If you're feeling queasy (especially after dose increases):
            </p>
            <ul>
              <li><strong>Skip intense workouts:</strong> Listen to your body</li>
              <li><strong>Go for a walk instead:</strong> Gentle movement can actually help nausea</li>
              <li><strong>Eat small, bland snack before training:</strong> Crackers, banana, rice cake</li>
              <li><strong>Stay upright for 30+ min after eating:</strong> Before training</li>
            </ul>

            <h3>Low Energy Days</h3>
            <ul>
              <li><strong>Reduce volume, not frequency:</strong> Still go to gym, but do fewer sets</li>
              <li><strong>Focus on technique:</strong> Perfect your form with lighter weights</li>
              <li><strong>Make it a mobility/stretching day:</strong> Active recovery still counts</li>
            </ul>

            <h2>Tracking Progress Beyond the Scale</h2>
            <p>
              The scale doesn't tell the full story when you're strength training. Also track:
            </p>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4">Better Progress Metrics</h3>
              <ul className="space-y-2">
                <li>• <strong>Body measurements:</strong> Waist, hips, thighs (inches lost matter)</li>
                <li>• <strong>Progress photos:</strong> Weekly or biweekly, same lighting/time</li>
                <li>• <strong>Strength gains:</strong> Are you lifting heavier or doing more reps?</li>
                <li>• <strong>How clothes fit:</strong> Size changes often happen before scale moves significantly</li>
                <li>• <strong>Energy levels:</strong> Can you climb stairs without getting winded?</li>
                <li>• <strong>Body composition testing:</strong> DEXA scan or InBody scale if available</li>
              </ul>
            </Card>

            <h2>When to Start Exercising After Beginning Semaglutide</h2>

            <h3>Week 1-2 (Starting Dose):</h3>
            <ul>
              <li>Focus on adjusting to medication</li>
              <li>Gentle activity: walking, light stretching</li>
              <li>Don't start intense new program yet</li>
            </ul>

            <h3>Week 3-4:</h3>
            <ul>
              <li>Begin structured strength training if side effects are manageable</li>
              <li>Start conservatively—2x week full-body</li>
            </ul>

            <h3>Month 2+:</h3>
            <ul>
              <li>Ramp up to 3-4x week if recovering well</li>
              <li>Increase intensity and volume progressively</li>
            </ul>

            <h2>Working with a Trainer</h2>
            <p>
              Consider hiring a trainer (even for just a few sessions) if:
            </p>
            <ul>
              <li>You're new to strength training</li>
              <li>You want to ensure proper form</li>
              <li>You need accountability and program design</li>
              <li>You have prior injuries or limitations</li>
            </ul>

            <p>
              <strong>What to tell your trainer:</strong> You're on semaglutide, may have variable energy, need protein-sparing focus, and require progressive strength programming.
            </p>

            <h2>The Bottom Line on Exercise and Semaglutide</h2>
            <p>
              Exercise—particularly strength training—is not optional if you want optimal results on semaglutide. The medication will drive weight loss, but your exercise and nutrition choices determine whether you lose mostly fat (good) or a mix of fat and muscle (not ideal).
            </p>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
              <ul className="space-y-2">
                <li>✓ <strong>Prioritize strength training</strong> 3-4x per week</li>
                <li>✓ <strong>Keep cardio moderate</strong>—2-3x week, 20-30 minutes</li>
                <li>✓ <strong>Walk daily</strong> for general activity</li>
                <li>✓ <strong>Fuel your workouts</strong> with adequate protein and calories</li>
                <li>✓ <strong>Track more than weight</strong>—measurements, strength, photos</li>
                <li>✓ <strong>Listen to your body</strong> and adjust intensity as needed</li>
              </ul>
            </Card>

            <p>
              Remember: Semaglutide handles appetite suppression. Your job is to preserve muscle, stay strong, and build sustainable habits that will serve you long after the medication phase.
            </p>

            <div className="mt-12 p-8 bg-accent/30 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Maximize Your Semaglutide Results</h3>
              <p className="mb-6">
                Get personalized guidance on combining semaglutide with exercise for optimal body composition. Trimi providers offer comprehensive lifestyle support alongside medication.
              </p>
              <Button asChild size="lg">
                <Link to="/treatments/semaglutide">Start Today</Link>
              </Button>
            </div>

            <TopicClusterNav
              pillarPage={clusterNav.pillarPage}
              hubPage={clusterNav.hubPage}
              relatedArticles={clusterNav.relatedInCluster}
              topic="Lifestyle Integration"
            />

            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog/semaglutide-diet-plan" className="text-primary hover:underline">
                    Best Diet Plan for Semaglutide: What to Eat for Maximum Results
                  </Link>
                </li>
                <li>
                  <Link to="/blog/semaglutide-weight-loss-results" className="text-primary hover:underline">
                    Semaglutide Weight Loss Results: What to Really Expect
                  </Link>
                </li>
                <li>
                  <Link to="/blog/semaglutide-first-month" className="text-primary hover:underline">
                    What to Expect Your First Month on Semaglutide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SemaglutideExercise;
