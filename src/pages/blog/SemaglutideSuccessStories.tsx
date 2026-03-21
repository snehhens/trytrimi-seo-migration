import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Award } from "lucide-react";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import mariaTransformation from "@/assets/maria-transformation.png";

const SemaglutideSuccessStories = () => {
  const publishDate = "2025-11-11";
  const modifiedDate = getModifiedDate('semaglutide-success-stories', publishDate);
  const clusterNav = getClusterNavigation('semaglutide-success-stories');
  
  const questions = [
    {
      question: "What kind of results can I expect with semaglutide?",
      answer: "Most people lose 12-15% of body weight over 6-12 months. Success stories show 30-60+ lbs lost, improved energy, better blood sugar control, and significant health improvements when combined with lifestyle changes."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Success Stories: Real Results with Semaglutide Weight Loss | Trimi</title>
        <meta name="description" content="Read inspiring semaglutide success stories. Real patient results showing 30-60+ lbs lost, health improvements, and life-changing transformations with GLP-1 therapy." />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-success-stories" />
      </Helmet>
      <QAPageSchema questions={questions} mainEntityName="Semaglutide Success Stories" />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <BlogBreadcrumb category="Success Stories" title="Real Semaglutide Results" url="/blog/semaglutide-success-stories" />
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories: Real Results with Semaglutide Weight Loss</h1>
          </header>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl">Real people achieving life-changing results with semaglutide. These success stories demonstrate the transformative power of GLP-1 therapy combined with lifestyle changes.</p>
            
            <h2 className="text-3xl font-bold flex items-center gap-2"><Award className="h-8 w-8 text-primary" />Patient Success Profiles</h2>
            
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="font-semibold text-lg mb-3">Sarah, 42 - Lost 52 lbs in 9 months</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Starting Weight:</strong> 218 lbs (BMI 34) → <strong>Current:</strong> 166 lbs (BMI 26)</div>
                <div><strong>Key Changes:</strong> HbA1c dropped from 6.8% to 5.4%, stopped blood pressure medication</div>
                <div className="italic pt-2">&quot;Semaglutide gave me control over my appetite for the first time. Combined with walking 30 minutes daily, the weight came off steadily. My energy is incredible now!&quot;</div>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200 mt-4">
              <h3 className="font-semibold text-lg mb-3">Michael, 55 - Lost 68 lbs in 12 months</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Starting Weight:</strong> 285 lbs (BMI 38) → <strong>Current:</strong> 217 lbs (BMI 29)</div>
                <div><strong>Key Changes:</strong> Pre-diabetic to normal glucose levels, sleep apnea resolved</div>
                <div className="italic pt-2">&quot;After years of yo-yo dieting, semaglutide was different. The hunger control is real. I eat smaller portions naturally and the weight stays off.&quot;</div>
              </div>
            </Card>

            <Card className="p-6 bg-purple-50 border-purple-200 mt-4">
              <h3 className="font-semibold text-lg mb-3">Jennifer, 38 - Lost 45 lbs in 8 months</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Starting Weight:</strong> 195 lbs (BMI 32) → <strong>Current:</strong> 150 lbs (BMI 24)</div>
                <div><strong>Key Changes:</strong> Reversed PCOS symptoms, regular menstrual cycles restored</div>
                <div className="italic pt-2">&quot;Semaglutide helped break the insulin resistance cycle. My PCOS symptoms dramatically improved, and I feel like myself again.&quot;</div>
              </div>
            </Card>

            <Card className="p-6 bg-pink-50 border-pink-200 mt-4">
              <h3 className="font-semibold text-lg mb-3">Maria - Real Transformation Results</h3>
              <div className="space-y-3">
                <img 
                  src={mariaTransformation} 
                  alt="Maria's weight loss transformation showing before and after photos" 
                  className="w-full rounded-lg"
                />
                <div className="italic text-sm pt-2">&quot;My journey with semaglutide has been life-changing. The results speak for themselves!&quot;</div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold mt-8 flex items-center gap-2"><Star className="h-8 w-8 text-primary" />Common Success Patterns</h2>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">What Successful Patients Did</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Consistent Dosing:</strong> Never missed weekly injections</li>
                <li>• <strong>Protein Priority:</strong> Focused on 80-100g protein daily</li>
                <li>• <strong>Movement:</strong> Added 150+ minutes weekly activity</li>
                <li>• <strong>Hydration:</strong> Drank 64+ oz water daily</li>
                <li>• <strong>Small Meals:</strong> Ate 4-6 smaller meals vs 3 large</li>
                <li>• <strong>Support:</strong> Worked with healthcare provider regularly</li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold mt-8">Timeline of Results</h2>
            
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Month 1-2: Initial Changes</h3>
                <p className="text-sm">Average 5-8 lbs lost, appetite noticeably reduced, adjusting to medication</p>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Month 3-4: Acceleration Phase</h3>
                <p className="text-sm">15-25 lbs lost, energy improving, clothing sizes dropping, side effects diminishing</p>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Month 6-9: Transformation</h3>
                <p className="text-sm">30-50 lbs lost, metabolic improvements, confidence soaring, new lifestyle habits solidified</p>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Month 12+: Maintenance</h3>
                <p className="text-sm">40-70+ lbs lost, weight stabilizing, focus on long-term sustainability</p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-8">Beyond the Scale: Health Improvements</h2>
            
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <h3 className="font-semibold text-lg mb-3">Non-Scale Victories Reported</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Blood Sugar:</strong> HbA1c reductions of 1-2%</li>
                <li>• <strong>Blood Pressure:</strong> Average 10-15 mmHg decrease</li>
                <li>• <strong>Cholesterol:</strong> Improved lipid profiles</li>
                <li>• <strong>Energy Levels:</strong> Significant increases reported</li>
                <li>• <strong>Sleep Quality:</strong> Better sleep, reduced apnea</li>
                <li>• <strong>Joint Pain:</strong> Reduced inflammation and pain</li>
                <li>• <strong>Mental Health:</strong> Improved mood and confidence</li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold mt-8">Keys to Success</h2>
            
            <ul className="space-y-2">
              <li>• <strong>Set Realistic Expectations:</strong> 1-2 lbs per week is healthy progress</li>
              <li>• <strong>Be Patient:</strong> Results build over months, not days</li>
              <li>• <strong>Track Progress:</strong> Use measurements beyond just the scale</li>
              <li>• <strong>Stay Consistent:</strong> Weekly injections are crucial</li>
              <li>• <strong>Lifestyle Matters:</strong> Combine medication with healthy habits</li>
              <li>• <strong>Seek Support:</strong> Work with healthcare provider throughout journey</li>
            </ul>

            <RelatedArticles articles={[
              { title: "Semaglutide Weight Loss Results", url: "/blog/semaglutide-weight-loss-results", excerpt: "Expected weight loss timelines.", category: "Results" },
              { title: "First Month on Semaglutide or Tirzepatide", url: "/blog/first-month-semaglutide-or-tirzepatide", excerpt: "What to expect initially.", category: "Guide" },
              { title: "Kickstarting Your Journey: Semaglutide Basics", url: "/blog/kickstarting-semaglutide-basics", excerpt: "Complete beginner&apos;s guide.", category: "Guide" }
            ]} />
            
            <TopicClusterNav
              topic="Semaglutide Patient Experiences"
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

export default SemaglutideSuccessStories;
