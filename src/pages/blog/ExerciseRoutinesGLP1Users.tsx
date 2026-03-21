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
import { ArrowRight, Dumbbell, Heart, Clock, TrendingUp, Target, Zap, Calendar } from "lucide-react";

export default function ExerciseRoutinesGLP1Users() {
  const faqItems = [
    {
      question: "What is the best exercise while taking semaglutide or tirzepatide?",
      answer: "Resistance training (weight lifting) 2-3 times per week is the most important exercise on GLP-1 medications to preserve muscle mass during weight loss. Combine with moderate cardio for cardiovascular benefits and additional calorie burn."
    },
    {
      question: "How do I prevent muscle loss on GLP-1 medications?",
      answer: "Prevent muscle loss by eating 0.7-1g protein per pound of body weight daily, doing resistance training 2-3 times per week, ensuring adequate calorie intake (not too aggressive a deficit), and getting enough sleep for recovery."
    },
    {
      question: "Can I exercise on the day I take tirzepatide?",
      answer: "Yes, you can exercise on injection day, but some people prefer lighter workouts due to potential fatigue or nausea. Listen to your body and adjust intensity as needed. Avoid strenuous exercise if experiencing significant side effects."
    },
    {
      question: "How often should I work out on GLP-1 medications?",
      answer: "Aim for 2-3 resistance training sessions and 150+ minutes of moderate cardio weekly. Start slowly if new to exercise and build up gradually. Quality matters more than quantity—focus on compound movements."
    },
    {
      question: "Will exercise make my GLP-1 medication work better?",
      answer: "Yes, exercise enhances GLP-1 medication results by preserving muscle (which maintains metabolism), improving insulin sensitivity, reducing inflammation, and accelerating fat loss while maintaining lean mass."
    }
  ];

  const relatedArticles = [
    { title: "Managing Muscle Loss on Semaglutide", url: "/blog/managing-muscle-loss-semaglutide-exercise-nutrition", excerpt: "Complete guide to preserving muscle during weight loss" },
    { title: "Tirzepatide Exercise Guide", url: "/blog/tirzepatide-exercise", excerpt: "Optimizing exercise on tirzepatide" },
    { title: "Semaglutide Exercise Guide", url: "/blog/semaglutide-exercise", excerpt: "Best practices for exercise on semaglutide" },
    { title: "Best Foods for Semaglutide Success", url: "/blog/best-foods-recipes-semaglutide", excerpt: "Nutrition to complement your workout routine" }
  ];

  return (
    <>
      <BlogSEO
        title="Exercise Routines for GLP-1 Users: Building Muscle While Losing Weight"
        description="Complete workout guide for semaglutide and tirzepatide users. Learn resistance training routines, cardio recommendations, and strategies to preserve muscle while maximizing weight loss."
        url="/blog/exercise-routines-glp1-users"
        publishDate="2025-12-05"
        modifiedDate="2025-12-05"
        imageUrl="/og-glp1-exercise.jpg"
        keywords={["exercise on tirzepatide", "semaglutide workout plan", "glp-1 muscle preservation", "resistance training weight loss", "building muscle on ozempic"]}
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
                <Badge variant="secondary">Exercise</Badge>
                <Badge variant="outline">Lifestyle</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Exercise Routines for GLP-1 Users: Building Muscle While Losing Weight
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Evidence-based workout programs designed specifically for semaglutide and tirzepatide users to maximize fat loss while preserving lean muscle.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Last updated: December 5, 2025</span>
                <span>•</span>
                <span>18 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Exercise is the secret weapon that separates good results from great results on <InternalLink to="/treatments/semaglutide">semaglutide</InternalLink> and <InternalLink to="/treatments/tirzepatide">tirzepatide</InternalLink>. While these medications powerfully reduce appetite and promote weight loss, the right workout routine ensures you lose fat—not muscle—and maintain a healthy metabolism long-term.
              </p>

              <Card className="my-6 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Why Exercise Matters on GLP-1 Medications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>Preserves muscle mass:</strong> Up to 40% of weight loss can be muscle without resistance training</li>
                    <li><strong>Maintains metabolism:</strong> Muscle burns more calories at rest than fat</li>
                    <li><strong>Improves body composition:</strong> Look better at any weight with more muscle definition</li>
                    <li><strong>Enhances medication effects:</strong> Exercise improves insulin sensitivity synergistically</li>
                    <li><strong>Boosts energy:</strong> Combats fatigue sometimes associated with calorie restriction</li>
                    <li><strong>Supports long-term maintenance:</strong> Active individuals maintain weight loss better</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 id="muscle-loss-problem">The Muscle Loss Problem</h2>

              <p>
                Research shows that rapid weight loss from GLP-1 medications can result in significant muscle loss—up to 25-40% of total weight lost may be lean mass without proper intervention. This matters because:
              </p>

              <ul>
                <li>Less muscle = lower metabolic rate = easier weight regain</li>
                <li>Muscle loss can leave you "skinny fat"—lighter but not healthier-looking</li>
                <li>Reduced strength affects daily function and quality of life</li>
                <li>Bone density may also decrease with muscle loss</li>
              </ul>

              <p>
                The solution? A strategic combination of resistance training and adequate protein intake, which clinical studies show can reduce muscle loss to under 10% of weight lost.
              </p>

              <h2 id="resistance-training">Resistance Training Program</h2>

              <p>
                Resistance training (weight lifting) is the most important type of exercise for GLP-1 users. Here's a complete program designed for building and maintaining muscle.
              </p>

              <h3>Beginner Program (Weeks 1-8)</h3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    Full-Body Workout (2-3x per week)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Lower Body</h4>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• Goblet Squats: 3 sets x 10-12 reps</li>
                        <li>• Romanian Deadlifts: 3 sets x 10-12 reps</li>
                        <li>• Walking Lunges: 2 sets x 10 each leg</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Upper Body - Push</h4>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• Push-ups (or wall/incline): 3 sets x 8-12 reps</li>
                        <li>• Dumbbell Shoulder Press: 3 sets x 10-12 reps</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Upper Body - Pull</h4>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• Dumbbell Rows: 3 sets x 10-12 each arm</li>
                        <li>• Lat Pulldowns (or band pull-aparts): 3 sets x 12-15 reps</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Core</h4>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• Plank: 3 sets x 20-30 seconds</li>
                        <li>• Dead Bug: 2 sets x 10 each side</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Intermediate Program (Weeks 9+)</h3>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    Upper/Lower Split (4x per week)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Day 1: Lower Body A</h4>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• Barbell/Goblet Squats: 4 sets x 8-10 reps</li>
                        <li>• Romanian Deadlifts: 3 sets x 10-12 reps</li>
                        <li>• Leg Press: 3 sets x 12-15 reps</li>
                        <li>• Leg Curls: 3 sets x 12-15 reps</li>
                        <li>• Calf Raises: 3 sets x 15-20 reps</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Day 2: Upper Body A</h4>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• Bench Press/Dumbbell Press: 4 sets x 8-10 reps</li>
                        <li>• Bent-Over Rows: 4 sets x 8-10 reps</li>
                        <li>• Overhead Press: 3 sets x 10-12 reps</li>
                        <li>• Lat Pulldowns: 3 sets x 10-12 reps</li>
                        <li>• Tricep Pushdowns: 2 sets x 12-15 reps</li>
                        <li>• Bicep Curls: 2 sets x 12-15 reps</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Day 3: Lower Body B</h4>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• Deadlifts: 4 sets x 6-8 reps</li>
                        <li>• Bulgarian Split Squats: 3 sets x 10 each leg</li>
                        <li>• Hip Thrusts: 3 sets x 12-15 reps</li>
                        <li>• Leg Extensions: 3 sets x 12-15 reps</li>
                        <li>• Calf Raises: 3 sets x 15-20 reps</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Day 4: Upper Body B</h4>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• Incline Dumbbell Press: 4 sets x 8-10 reps</li>
                        <li>• Cable Rows: 4 sets x 10-12 reps</li>
                        <li>• Lateral Raises: 3 sets x 12-15 reps</li>
                        <li>• Face Pulls: 3 sets x 15-20 reps</li>
                        <li>• Tricep Dips: 2 sets x 10-12 reps</li>
                        <li>• Hammer Curls: 2 sets x 12-15 reps</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Key Training Principles</h3>

              <ul>
                <li><strong>Progressive overload:</strong> Gradually increase weight, reps, or sets over time</li>
                <li><strong>Compound movements:</strong> Focus on multi-joint exercises that work multiple muscles</li>
                <li><strong>Full range of motion:</strong> Control the weight through complete movements</li>
                <li><strong>Rest adequately:</strong> 48-72 hours between training the same muscle group</li>
                <li><strong>Track your workouts:</strong> Record weights and reps to ensure progress</li>
              </ul>

              <h2 id="cardio-guidelines">Cardio Guidelines</h2>

              <p>
                While resistance training takes priority, cardiovascular exercise provides additional health benefits and aids fat loss.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Heart className="h-5 w-5 text-red-500" />
                      Low-Intensity Steady State (LISS)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li><strong>What:</strong> Walking, cycling, swimming at conversational pace</li>
                      <li><strong>Duration:</strong> 30-60 minutes</li>
                      <li><strong>Frequency:</strong> 3-5x per week</li>
                      <li><strong>Benefits:</strong> Low stress, easy recovery, burns fat</li>
                      <li><strong>Best for:</strong> Daily activity, beginners, recovery days</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      High-Intensity Interval Training (HIIT)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li><strong>What:</strong> Alternating high/low intensity bursts</li>
                      <li><strong>Duration:</strong> 15-25 minutes</li>
                      <li><strong>Frequency:</strong> 1-2x per week max</li>
                      <li><strong>Benefits:</strong> Time-efficient, metabolic boost</li>
                      <li><strong>Caution:</strong> Can be too taxing during calorie deficit</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="my-6 bg-amber-500/5 border-amber-500/30">
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-500" />
                    Cardio Recommendation for GLP-1 Users
                  </h4>
                  <p className="text-muted-foreground">
                    Prioritize LISS over HIIT during active weight loss. Walking 7,000-10,000 steps daily provides excellent cardiovascular benefits without excessive calorie burn that could increase muscle loss or hunger. Save HIIT for maintenance phase when eating at higher calories.
                  </p>
                </CardContent>
              </Card>

              <h2 id="weekly-schedule">Sample Weekly Schedule</h2>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Optimized Weekly Training Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 font-semibold">Day</th>
                          <th className="text-left py-2 font-semibold">Workout</th>
                          <th className="text-left py-2 font-semibold">Duration</th>
                          <th className="text-left py-2 font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">Monday</td>
                          <td className="py-2">Lower Body A</td>
                          <td className="py-2">45-60 min</td>
                          <td className="py-2">Heavy compound focus</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Tuesday</td>
                          <td className="py-2">Walking + Light Core</td>
                          <td className="py-2">30-45 min</td>
                          <td className="py-2">Active recovery</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Wednesday</td>
                          <td className="py-2">Upper Body A</td>
                          <td className="py-2">45-60 min</td>
                          <td className="py-2">Push/pull balance</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Thursday</td>
                          <td className="py-2">Rest or Light Walk</td>
                          <td className="py-2">20-30 min</td>
                          <td className="py-2">Recovery day</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Friday</td>
                          <td className="py-2">Lower Body B</td>
                          <td className="py-2">45-60 min</td>
                          <td className="py-2">Different movement patterns</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Saturday</td>
                          <td className="py-2">Upper Body B</td>
                          <td className="py-2">45-60 min</td>
                          <td className="py-2">Finish strong</td>
                        </tr>
                        <tr>
                          <td className="py-2">Sunday</td>
                          <td className="py-2">Complete Rest</td>
                          <td className="py-2">-</td>
                          <td className="py-2">Recovery and meal prep</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <h2 id="nutrition-exercise">Nutrition for Exercise Performance</h2>

              <p>
                Proper nutrition around workouts maximizes muscle preservation and performance. Learn more in our <InternalLink to="/blog/best-foods-recipes-semaglutide">nutrition guide</InternalLink>.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pre-Workout (1-2 hours before)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• 20-30g protein (Greek yogurt, protein shake)</li>
                      <li>• Moderate carbs (banana, oatmeal, rice)</li>
                      <li>• Low fat (slower digestion)</li>
                      <li>• Stay hydrated</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Post-Workout (within 2 hours)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• 30-40g protein (chicken, fish, protein shake)</li>
                      <li>• Carbs to replenish glycogen</li>
                      <li>• Moderate fat is fine now</li>
                      <li>• Rehydrate with water + electrolytes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 id="tips-for-success">Tips for Exercise Success on GLP-1s</h2>

              <Card className="my-6">
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Start Slowly</h4>
                        <p className="text-sm text-muted-foreground">Begin with 2 sessions per week and build up. Your body is adjusting to medication and calorie changes.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Listen to Your Body</h4>
                        <p className="text-sm text-muted-foreground">If feeling fatigued or nauseous, do a lighter workout. Progress isn't linear.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Prioritize Protein</h4>
                        <p className="text-sm text-muted-foreground">Aim for 0.7-1g per pound of body weight daily. This is non-negotiable for muscle preservation.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Stay Hydrated</h4>
                        <p className="text-sm text-muted-foreground">GLP-1 medications can increase dehydration risk. Drink extra water around workouts.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Track Progress Beyond Scale</h4>
                        <p className="text-sm text-muted-foreground">Take measurements and progress photos. Muscle gain can mask fat loss on the scale.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 id="conclusion">Conclusion</h2>

              <p>
                Exercise, especially resistance training, is essential for getting the best results from your GLP-1 medication. The combination of proper nutrition and strategic exercise ensures you lose fat while preserving the muscle that keeps your metabolism healthy.
              </p>

              <p>
                Key takeaways:
              </p>

              <ul>
                <li>Resistance training 2-4x weekly is the priority for muscle preservation</li>
                <li>Low-intensity cardio (walking) supports fat loss without excess stress</li>
                <li>Protein intake of 0.7-1g per pound of body weight is essential</li>
                <li>Progressive overload—gradually increasing challenge—drives results</li>
                <li>Recovery matters as much as training; don't overdo it</li>
              </ul>

              <Card className="mt-8 bg-primary/10 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Ready to Maximize Your Results?</h3>
                  <p className="text-muted-foreground mb-4">
                    Get personalized guidance on combining exercise with your GLP-1 medication for optimal results.
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
              topic="lifestyle & exercise"
              relatedArticles={relatedArticles}
            />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
