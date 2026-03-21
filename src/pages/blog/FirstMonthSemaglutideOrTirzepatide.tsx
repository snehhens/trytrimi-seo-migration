import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, TrendingDown, Activity, Heart } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import { SocialShare } from "@/components/blog/SocialShare";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const FirstMonthSemaglutideOrTirzepatide = () => {
  const clusterNav = getClusterNavigation("/blog/first-month-semaglutide-or-tirzepatide");
  const publishDate = "2025-11-11";
  const modifiedDate = getModifiedDate("first-month-semaglutide-or-tirzepatide", publishDate);
  const readTime = "12 min";
  
  const questions = [
    {
      question: "What happens in the first month on semaglutide or tirzepatide?",
      answer: "The first month is an adjustment period focusing on tolerability. Both medications start at low doses (0.25mg weekly) to let your body adapt. You'll notice reduced appetite within 2-3 days, possible mild nausea, and typically lose 2-5 pounds. This month builds the foundation for more significant results in months 2-4."
    },
    {
      question: "Which has fewer side effects in the first month?",
      answer: "Both medications have similar side effect profiles in the first month, with mild nausea being most common (30-40% of users). Tirzepatide users report slightly less nausea in some studies, but individual responses vary. Starting at the lowest dose minimizes side effects for both medications."
    },
    {
      question: "How much weight will I lose in my first month?",
      answer: "Typical first-month weight loss is 2-5 pounds on either medication. Tirzepatide users may lose slightly more (3-6 pounds) due to its dual mechanism. Remember, the first month uses starter doses—significant weight loss accelerates after dose increases in months 2-4."
    },
    {
      question: "When will I feel the appetite suppression?",
      answer: "Most people notice reduced appetite within 2-3 days of their first injection for both medications. Peak effects occur at days 3-5. However, some people don't feel significant changes until weeks 2-3 or after the first dose increase. Both timelines are normal as the medication builds to steady state."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>What to Expect in the First Month on Semaglutide or Tirzepatide | Trimi</title>
        <meta name="description" content="Complete first-month guide comparing semaglutide and tirzepatide. Learn week-by-week expectations, side effects, weight loss timelines, and how to maximize your results from day one." />
        <meta name="keywords" content="semaglutide first month, tirzepatide first month, GLP-1 side effects, starting weight loss medication, ozempic first month, mounjaro first month" />
        <link rel="canonical" href="https://trytrimi.com/blog/first-month-semaglutide-or-tirzepatide" />
        <meta property="og:title" content="What to Expect in the First Month on Semaglutide or Tirzepatide" />
        <meta property="og:description" content="Week-by-week breakdown of your first month on semaglutide or tirzepatide, including side effects, weight loss, and success strategies." />
        <meta property="og:url" content="https://trytrimi.com/blog/first-month-semaglutide-or-tirzepatide" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://trytrimi.com/og-image.jpg" />
      </Helmet>

      <QAPageSchema questions={questions} mainEntityName="First Month on Semaglutide or Tirzepatide" />

      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <BlogBreadcrumb 
            category="Guide"
            title="First Month on Semaglutide or Tirzepatide"
            url="/blog/first-month-semaglutide-or-tirzepatide"
          />
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What to Expect in the First Month on Semaglutide or Tirzepatide
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <time dateTime={publishDate}>{new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span>•</span>
              <span>{readTime} read</span>
            </div>

            <LastUpdated 
              publishDate={publishDate}
              modifiedDate={modifiedDate}
            />

            <ContentFreshnessIndicator 
              lastModified={modifiedDate}
              publishDate={publishDate}
            />

            <MedicalReview 
              reviewerName="Dr. Amanda Foster"
              credentials="MD, Board Certified in Obesity Medicine"
              reviewDate={modifiedDate}
              specialty="Obesity Medicine & Weight Management"
            />
          </header>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl leading-relaxed">
              Starting a GLP-1 medication like <Link to="/blog/understanding-glp1-medications" className="text-primary hover:underline">semaglutide or tirzepatide</Link> marks the beginning of your weight loss journey. While both medications are highly effective, understanding what to expect in the crucial first month can help you navigate side effects, optimize results, and build habits for long-term success.
            </p>

            <Card className="p-6 bg-blue-50 border-blue-200 my-8">
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Key First Month Differences</h3>
                  <p className="text-sm leading-relaxed mb-2">
                    <strong>Semaglutide (Ozempic/Wegovy):</strong> Single GLP-1 agonist. Starting dose 0.25mg weekly. Typically 2-4 pounds lost first month.
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Tirzepatide (Mounjaro/Zepbound):</strong> Dual GIP/GLP-1 agonist. Starting dose 3mg weekly. Typically 3-6 pounds lost first month.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Activity className="h-8 w-8 text-primary" />
              Week-by-Week Expectations
            </h2>

            <section className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-6 rounded-lg my-6">
              <h3 className="font-semibold text-xl mb-3">Week 1: Initial Adjustment</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Semaglutide (0.25mg)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Appetite reduction in 2-3 days</li>
                    <li>• Mild nausea (30-40% of users)</li>
                    <li>• Fullness after smaller portions</li>
                    <li>• 1-3 pounds weight loss typical</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-2">Tirzepatide (3mg)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Stronger appetite suppression</li>
                    <li>• Similar nausea profile (30-35%)</li>
                    <li>• More pronounced fullness</li>
                    <li>• 2-4 pounds weight loss typical</li>
                  </ul>
                </div>
              </div>

              <Card className="p-4 border-l-4 border-primary">
                <h4 className="font-semibold mb-2">Week 1 Success Tips:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Start your injection on a Friday evening to manage weekend side effects</li>
                  <li>• Eat protein-rich foods in smaller portions (4-6 small meals daily)</li>
                  <li>• Drink 64+ oz of water to combat nausea and support weight loss</li>
                  <li>• Avoid greasy, fatty foods that worsen nausea</li>
                  <li>• Keep a symptom journal to track patterns</li>
                </ul>
              </Card>
            </section>

            <section className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-6 rounded-lg my-6">
              <h3 className="font-semibold text-xl mb-3">Week 2: Body Adaptation</h3>
              
              <p className="mb-4">
                Your second week brings continued adaptation as medication levels build in your system. Most side effects begin improving, though some people experience peak side effects this week before improvement.
              </p>

              <h4 className="font-semibold mb-2">What's Different This Week:</h4>
              <ul className="space-y-2 text-sm mb-4">
                <li>• <strong>Nausea typically improves</strong> by 30-50% compared to week 1</li>
                <li>• <strong>Appetite suppression stabilizes</strong>—you'll find your new "normal" portion sizes</li>
                <li>• <strong>Energy may dip</strong> as your body adjusts to lower calorie intake</li>
                <li>• <strong>Food preferences shift</strong>—many report aversions to previously favorite foods</li>
                <li>• <strong>Digestive changes</strong> like slower bowel movements become noticeable</li>
              </ul>

              <h4 className="font-semibold mb-2">Cumulative Weight Loss:</h4>
              <p className="text-sm">
                <strong>Semaglutide:</strong> 2-4 pounds total<br />
                <strong>Tirzepatide:</strong> 3-5 pounds total
              </p>
            </section>

            <section className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-6 rounded-lg my-6">
              <h3 className="font-semibold text-xl mb-3">Week 3: Finding Your Rhythm</h3>
              
              <p className="mb-4">
                By week three, most people have adapted well to the medication. Side effects continue to diminish, and you'll start developing sustainable eating patterns that will serve you throughout treatment.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Physical Changes:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Nausea minimal or resolved</li>
                    <li>• Stable appetite control</li>
                    <li>• Energy levels improving</li>
                    <li>• Better sleep quality</li>
                    <li>• Clothing fits slightly looser</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Behavioral Changes:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Comfortable with smaller portions</li>
                    <li>• Less food-focused thinking</li>
                    <li>• Meal planning becomes routine</li>
                    <li>• Exercise feels more manageable</li>
                    <li>• Hydration habits established</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-6 rounded-lg my-6">
              <h3 className="font-semibold text-xl mb-3">Week 4: Preparing for Dose Increase</h3>
              
              <p className="mb-4">
                Your final week on the starter dose prepares you for the next phase. You'll likely notice appetite returning slightly as your body adapts—this is normal and signals readiness for dose escalation.
              </p>

              <h4 className="font-semibold mb-2">End-of-Month Assessment:</h4>
              <ul className="space-y-2 text-sm mb-4">
                <li>• <strong>Total Weight Loss:</strong> Semaglutide 2-5 lbs, Tirzepatide 3-6 lbs</li>
                <li>• <strong>Side Effects:</strong> Should be minimal to none at this point</li>
                <li>• <strong>Appetite Control:</strong> Still present but less intense than weeks 1-2</li>
                <li>• <strong>Lifestyle Habits:</strong> New eating patterns becoming automatic</li>
              </ul>

              <Card className="p-4 bg-green-50 border-green-200">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-green-600" />
                  Ready for Month 2
                </h4>
                <p className="text-sm">
                  If you've tolerated the medication well and side effects are minimal, you're ready to increase your dose. Your provider will guide you to the next level (semaglutide 0.5mg or tirzepatide 6mg), where weight loss accelerates significantly.
                </p>
              </Card>
            </section>

            <h2 className="text-3xl font-bold mb-4 mt-8">
              Comparing Semaglutide vs Tirzepatide: First Month
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-secondary/20">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Semaglutide</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Tirzepatide</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Starting Dose</td>
                    <td className="border border-gray-300 p-3">0.25mg weekly</td>
                    <td className="border border-gray-300 p-3">2.5mg weekly</td>
                  </tr>
                  <tr className="bg-secondary/5">
                    <td className="border border-gray-300 p-3 font-medium">Avg Weight Loss</td>
                    <td className="border border-gray-300 p-3">2-5 pounds</td>
                    <td className="border border-gray-300 p-3">3-6 pounds</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Nausea Rate</td>
                    <td className="border border-gray-300 p-3">30-40%</td>
                    <td className="border border-gray-300 p-3">30-35%</td>
                  </tr>
                  <tr className="bg-secondary/5">
                    <td className="border border-gray-300 p-3 font-medium">Appetite Control</td>
                    <td className="border border-gray-300 p-3">Moderate to Strong</td>
                    <td className="border border-gray-300 p-3">Strong to Very Strong</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Cost (Compounded)</td>
                    <td className="border border-gray-300 p-3">$297-397/month</td>
                    <td className="border border-gray-300 p-3">$397-497/month</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-8">
              Managing First-Month Side Effects
            </h2>

            <Card className="p-6 my-6">
              <h3 className="font-semibold text-lg mb-4">Top 5 Side Effects and Solutions:</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">1. Nausea (Most Common)</h4>
                  <p className="text-sm mb-2">Peaks 1-2 days after injection, affects 30-40% of users.</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solutions:</strong> Eat small meals every 3 hours, avoid fatty foods, try ginger tea, stay hydrated, take medication before bed.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">2. Constipation</h4>
                  <p className="text-sm mb-2">Slower digestion affects 20-30% of users.</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solutions:</strong> Increase fiber intake (25-30g daily), drink 8+ glasses water, light exercise, consider magnesium supplement.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">3. Fatigue</h4>
                  <p className="text-sm mb-2">Low energy from reduced calories, especially weeks 1-2.</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solutions:</strong> Prioritize protein (80-100g daily), light exercise, quality sleep, B-vitamin supplement if needed.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">4. Food Aversions</h4>
                  <p className="text-sm mb-2">Previously loved foods suddenly unappealing.</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solutions:</strong> Embrace the change—it's working! Focus on tolerable proteins, simple carbs, vegetables. Try bland foods if needed.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">5. Injection Site Reactions</h4>
                  <p className="text-sm mb-2">Minor redness, bruising, or itching at injection site.</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solutions:</strong> Rotate injection sites, inject at room temperature, ice area before injection, apply gentle pressure after.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold mb-4 mt-8">
              Nutrition Guidelines for Month One
            </h2>

            <p>
              Your reduced appetite makes it challenging to meet nutritional needs. Focus on <Link to="/blog/semaglutide-diet-plan-meals" className="text-primary hover:underline">nutrient-dense foods</Link> that provide maximum nutrition in smaller volumes.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="font-semibold text-lg mb-3 text-green-800">Prioritize These Foods</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Lean Proteins:</strong> Chicken, fish, Greek yogurt, eggs (80-100g daily)</li>
                  <li>• <strong>Non-Starchy Vegetables:</strong> Broccoli, spinach, peppers (unlimited)</li>
                  <li>• <strong>Complex Carbs:</strong> Quinoa, sweet potato, oats (small portions)</li>
                  <li>• <strong>Healthy Fats:</strong> Avocado, nuts, olive oil (1-2 servings)</li>
                  <li>• <strong>Hydration:</strong> Water, herbal tea, broth (64+ oz daily)</li>
                </ul>
              </Card>

              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="font-semibold text-lg mb-3 text-red-800">Avoid These Foods</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Fatty/Greasy Foods:</strong> Fried foods, heavy sauces (worsen nausea)</li>
                  <li>• <strong>Very Sweet Items:</strong> Candy, pastries, soda (trigger discomfort)</li>
                  <li>• <strong>Alcohol:</strong> Increases nausea, dehydration, empty calories</li>
                  <li>• <strong>Spicy Foods:</strong> Can aggravate digestive symptoms</li>
                  <li>• <strong>Large Meals:</strong> Causes discomfort—eat 4-6 small meals instead</li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-8">
              Exercise During Your First Month
            </h2>

            <p className="mb-4">
              Start slowly with exercise during month one. Your reduced calorie intake and potential fatigue mean intense workouts may be difficult. Focus on building sustainable habits rather than pushing limits.
            </p>

            <Card className="p-6 my-6">
              <h3 className="font-semibold text-lg mb-3">Recommended First Month Activities:</h3>
              
              <ul className="space-y-3">
                <li>
                  <strong>Walking:</strong> 20-30 minutes daily. Low impact, aids digestion, manageable energy expenditure.
                </li>
                <li>
                  <strong>Light Yoga/Stretching:</strong> 15-20 minutes. Reduces stress, improves flexibility, gentle on system.
                </li>
                <li>
                  <strong>Swimming:</strong> 20-30 minutes. Full body workout without joint stress, refreshing.
                </li>
                <li>
                  <strong>Light Strength Training:</strong> 2-3x weekly. Preserves muscle mass during weight loss, short sessions.
                </li>
              </ul>

              <p className="text-sm text-muted-foreground mt-4">
                <strong>Wait Until Month 2-3 For:</strong> High-intensity interval training (HIIT), long-distance running, heavy lifting, endurance sports. Your energy and tolerance will improve significantly with dose increases.
              </p>
            </Card>

            <h2 className="text-3xl font-bold mb-4 mt-8">
              When to Contact Your Provider
            </h2>

            <Card className="p-6 bg-orange-50 border-orange-200 my-6">
              <h3 className="font-semibold text-lg mb-3">Seek Medical Attention If You Experience:</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Severe, persistent nausea/vomiting</strong> lasting more than 3 days or preventing hydration</li>
                <li>• <strong>Signs of dehydration:</strong> dark urine, dizziness, rapid heartbeat, confusion</li>
                <li>• <strong>Severe abdominal pain,</strong> especially in upper abdomen radiating to back</li>
                <li>• <strong>Vision changes</strong> or severe headaches</li>
                <li>• <strong>Allergic reactions:</strong> rash, difficulty breathing, swelling</li>
                <li>• <strong>Severe constipation</strong> lasting more than 5 days</li>
                <li>• <strong>Chest pain or irregular heartbeat</strong></li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold mb-4 mt-8">
              Setting Yourself Up for Long-Term Success
            </h2>

            <p className="mb-4">
              The first month establishes habits that will carry you through your entire weight loss journey. Focus on these key behaviors:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Track Your Progress</h3>
                <ul className="text-sm space-y-1">
                  <li>• Weekly weigh-ins (same day/time)</li>
                  <li>• Measurements (waist, hips, chest)</li>
                  <li>• Progress photos</li>
                  <li>• Symptom journal</li>
                  <li>• Food diary</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Build Support Systems</h3>
                <ul className="text-sm space-y-1">
                  <li>• Join online communities</li>
                  <li>• Tell close friends/family</li>
                  <li>• Regular provider check-ins</li>
                  <li>• Accountability partner</li>
                  <li>• Celebrate non-scale victories</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Develop Routines</h3>
                <ul className="text-sm space-y-1">
                  <li>• Consistent injection day/time</li>
                  <li>• Meal prep schedule</li>
                  <li>• Daily hydration goal</li>
                  <li>• Regular sleep schedule</li>
                  <li>• Movement every day</li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-8">
              What Comes After Month One
            </h2>

            <p className="mb-4">
              After successfully completing your first month, you'll increase your dose and enter the phase where significant weight loss accelerates:
            </p>

            <ul className="space-y-2 mb-6">
              <li>• <strong>Semaglutide:</strong> Increase to 0.5mg (month 2), then 1mg (month 3), continuing up to 2.4mg</li>
              <li>• <strong>Tirzepatide:</strong> Increase to 3mg (month 2), then 6mg, continuing up to 13.5mg</li>
              <li>• <strong>Weight Loss:</strong> Accelerates to 1-2% of body weight per week with higher doses</li>
              <li>• <strong>Side Effects:</strong> May briefly return with each increase but resolve faster than month 1</li>
              <li>• <strong>Appetite Control:</strong> Becomes stronger and more consistent</li>
            </ul>

            <Card className="p-6 bg-blue-50 border-blue-200 my-6">
              <h3 className="font-semibold text-lg mb-2">Month-by-Month Success Timeline</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Months 1-2:</strong> Adaptation phase, 5-10 pounds lost</li>
                <li>• <strong>Months 3-4:</strong> Acceleration phase, 10-15 pounds additional loss</li>
                <li>• <strong>Months 5-6:</strong> Continued progress, 10-15 pounds additional loss</li>
                <li>• <strong>Months 7-12:</strong> Plateau management, 15-20 pounds additional loss</li>
                <li>• <strong>Total 12 months:</strong> Average 40-60 pounds lost (15-20% body weight)</li>
              </ul>
            </Card>

            <section className="border-t pt-6 mt-8">
              <h3 className="text-xl font-semibold mb-3">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                This article is for informational purposes only and does not constitute medical advice. Semaglutide and tirzepatide should only be used under the supervision of a licensed healthcare provider. Individual experiences vary significantly. Always consult your provider with questions or concerns about your treatment.
              </p>
            </section>

            <section className="border-t pt-6 mt-8">
              <h3 className="text-xl font-semibold mb-3">References</h3>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. N Engl J Med. 2021;384(11):989-1002.</li>
                <li>2. Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205-216.</li>
                <li>3. Garvey WT, et al. Two-year effects of semaglutide in adults with overweight or obesity: the STEP 5 trial. Nat Med. 2022;28(10):2083-2091.</li>
                <li>4. Frias JP, et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes. N Engl J Med. 2021;385(6):503-515.</li>
              </ol>
            </section>

            <TopicClusterNav
              hubPage="/semaglutide-guide"
              topic="Getting Started"
              relatedArticles={[
                {
                  title: "Things to Know Before Starting Tirzepatide",
                  url: "/blog/things-to-know-before-starting-tirzepatide",
                  excerpt: "Essential preparation guide before beginning tirzepatide."
                },
                {
                  title: "Kickstarting Your Journey: Semaglutide Basics",
                  url: "/blog/kickstarting-semaglutide-basics",
                  excerpt: "Complete beginner's guide to semaglutide treatment."
                },
                {
                  title: "Best Foods to Eat While on Tirzepatide",
                  url: "/blog/best-foods-tirzepatide",
                  excerpt: "Simple guide to optimizing your diet on tirzepatide."
                },
                {
                  title: "Semaglutide Diet Plan: Meals for Optimal Results",
                  url: "/blog/semaglutide-diet-plan-meals",
                  excerpt: "Comprehensive meal planning guide for semaglutide."
                }
              ]}
            />

            <RelatedArticles 
              articles={[
                {
                  title: "How to Start Semaglutide: Beginner's Guide",
                  url: "/blog/how-to-start-semaglutide",
                  excerpt: "Step-by-step guide to beginning semaglutide treatment safely and effectively.",
                  category: "Getting Started"
                },
                {
                  title: "Tirzepatide Quick Start Guide",
                  url: "/blog/tirzepatide-quick-start",
                  excerpt: "Fast-track guide to starting tirzepatide with confidence.",
                  category: "Getting Started"
                },
                {
                  title: "Semaglutide vs Tirzepatide: Which Is Right for You?",
                  url: "/blog/tirzepatide-vs-semaglutide",
                  excerpt: "Comprehensive comparison to help you choose the best GLP-1 medication.",
                  category: "Comparison"
                }
              ]}
            />
            
            <TopicClusterNav
              topic="Getting Started with GLP-1 Medications"
              relatedArticles={clusterNav.relatedInCluster}
              hubPage="/blog/glp1-complete-guide"
            />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/treatments">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Today
              </Button>
            </Link>
            <Link to="/blog">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
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

export default FirstMonthSemaglutideOrTirzepatide;
