import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "@/compat/react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideDoseAdjustment = () => {
  const clusterNav = getClusterNavigation("dosage");

  const faqs = [
    {
      question: "When should I increase my semaglutide maintenance dose?",
      answer: "Consider increasing if you've regained 5%+ of lost weight despite healthy habits, experience significant appetite return, or notice portions creeping back up. Always consult your provider before making dose changes."
    },
    {
      question: "Is it safe to decrease my semaglutide dose?",
      answer: "Yes, under medical supervision. Decrease gradually by one dose level at a time, staying at each level for 4+ weeks while monitoring weight stability. Most patients require some ongoing medication to maintain results."
    },
    {
      question: "How often should I reassess my maintenance dose?",
      answer: "Review your dose with your provider every 3-6 months. Life changes, improved lifestyle habits, or changing goals may warrant adjustments over time."
    },
    {
      question: "What if dose adjustments don't achieve my goals?",
      answer: "Consider switching to tirzepatide, adding complementary medications, working with specialists, or addressing underlying metabolic issues. Your provider can explore alternative strategies."
    }
  ];

  return (
    <>
      <BlogSEO
        title="Semaglutide Maintenance Dose: When and How to Adjust"
        description="Learn when to adjust your semaglutide maintenance dose. Expert guidance on recognizing adjustment triggers, dose reduction strategies, and optimization for sustained weight management."
        url="/blog/semaglutide-dose-adjustment"
        publishDate="2025-01-15"
        modifiedDate="2025-01-15"
        keywords={[
          "semaglutide dose adjustment",
          "when to adjust semaglutide",
          "semaglutide dose reduction",
          "maintenance dose changes",
          "semaglutide optimization",
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Semaglutide Dose Adjustment", url: "/blog/semaglutide-dose-adjustment" },
        ]}
        faqs={faqs}
        isMedical={true}
        medicalAudience={["Patient", "Clinician"]}
      />

      <OptimizedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Semaglutide Maintenance Dose: When and How to Adjust
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <time dateTime="2025-01-15">January 15, 2025</time>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />7 min read
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="article-intro text-xl text-muted-foreground mb-8">
              Your semaglutide maintenance dose isn't set in stone. Life changes, body adaptations, and evolving goals may require dose adjustments. This guide explains when to adjust, how to do it safely, and strategies for long-term optimization.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Clear Signs It's Time to Adjust</h2>
              <p className="mb-4">
                Monitor these indicators to know when your maintenance dose needs modification:
              </p>
              <div className="space-y-4 mb-6">
                <Card className="p-5 border-l-4 border-l-red-500">
                  <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">Increase Dose If:</h3>
                  <ul className="text-sm space-y-2">
                    <li>🔴 <strong>Weight Regain:</strong> Gained 5%+ of lost weight despite maintaining healthy habits</li>
                    <li>🔴 <strong>Returning Hunger:</strong> Significant appetite increase, food preoccupation between doses</li>
                    <li>🔴 <strong>Portion Creep:</strong> Gradually eating larger portions without satiety</li>
                    <li>🔴 <strong>Metabolic Decline:</strong> Blood sugar or other markers trending upward</li>
                    <li>🔴 <strong>Loss of Control:</strong> Difficulty adhering to eating plan that was previously manageable</li>
                  </ul>
                </Card>
                <Card className="p-5 border-l-4 border-l-blue-500">
                  <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">Decrease Dose If:</h3>
                  <ul className="text-sm space-y-2">
                    <li>🔵 <strong>Persistent Side Effects:</strong> Ongoing nausea, vomiting, or GI distress affecting quality of life</li>
                    <li>🔵 <strong>Excessive Restriction:</strong> Struggling to eat enough protein or meet nutritional needs</li>
                    <li>🔵 <strong>Overshoot Goals:</strong> Lost more weight than intended and want to stabilize</li>
                    <li>🔵 <strong>Lifestyle Improvements:</strong> Established strong diet/exercise habits, want to trial lower dose</li>
                    <li>🔵 <strong>Cost Concerns:</strong> Need more affordable maintenance option while preserving some benefits</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Increase Your Maintenance Dose Safely</h2>
              <p className="mb-4">
                If dose escalation is needed, follow these guidelines for safe and effective increases:
              </p>
              <Card className="p-6 bg-primary/5 mb-6">
                <h3 className="font-semibold text-lg mb-4">Dose Increase Protocol</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Step 1: Verify the Need (2-4 weeks)</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Confirm weight regain trend, not normal fluctuation</li>
                      <li>• Review diet and exercise consistency</li>
                      <li>• Rule out other factors (stress, medications, sleep)</li>
                      <li>• Document appetite and hunger patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Step 2: Consult Your Provider</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Present data showing need for adjustment</li>
                      <li>• Discuss previous dose tolerance</li>
                      <li>• Set realistic expectations for new dose</li>
                      <li>• Get approval before making changes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Step 3: Increase Gradually</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Increase by one dose level (e.g., 1.0 mg → 1.7 mg)</li>
                      <li>• Wait 4 weeks minimum at new dose before further increases</li>
                      <li>• Monitor for side effects carefully</li>
                      <li>• Track weight, appetite, and tolerance weekly</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Step 4: Assess Response (4-6 weeks)</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Evaluate weight loss resumption</li>
                      <li>• Check appetite control improvement</li>
                      <li>• Monitor side effect emergence</li>
                      <li>• Determine if further adjustment needed</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Decrease Your Maintenance Dose Safely</h2>
              <p className="mb-4">
                Dose reduction requires careful planning to avoid weight regain while alleviating side effects. Learn more about <Link to="/blog/managing-gi-side-effects-semaglutide" className="text-primary hover:underline">managing side effects</Link>:
              </p>
              <Card className="p-6 bg-accent/30 border-primary/20 mb-6">
                <h3 className="font-semibold text-lg mb-4">Dose Reduction Strategy</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Option 1: Gradual Step-Down</h4>
                    <p className="text-sm mb-2">Best for: Persistent side effects, overshoot of weight goals</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Reduce by one dose level at a time</li>
                      <li>• Stay at each level for 4+ weeks</li>
                      <li>• Monitor weight stability closely</li>
                      <li>• Stop reduction if weight begins increasing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Option 2: Extended Dosing Interval</h4>
                    <p className="text-sm mb-2">Best for: Good control but want to reduce exposure/cost</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Maintain same dose but inject every 10-14 days instead of weekly</li>
                      <li>• Effectively reduces weekly exposure by ~30-50%</li>
                      <li>• Monitor for return of hunger before next dose</li>
                      <li>• Less disruptive than dose reduction for some patients</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Option 3: Medication "Holiday"</h4>
                    <p className="text-sm mb-2">Best for: Trial discontinuation with strong lifestyle habits</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Temporarily pause medication for 4-8 weeks</li>
                      <li>• Intensify lifestyle interventions during break</li>
                      <li>• Monitor weight weekly for regain signals</li>
                      <li>• Resume at lower dose if needed to prevent significant regain</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 border-l-4">
                <p className="text-sm">
                  ⚠️ <strong>Important:</strong> Most patients require some level of ongoing medication to maintain weight loss. Complete discontinuation often leads to regain. Discuss realistic expectations with your provider.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Timing Your Adjustments Strategically</h2>
              <p className="mb-4">
                When you adjust your dose matters as much as how you adjust it:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5 border-green-500 border-l-4">
                  <h3 className="font-semibold mb-3 text-green-700 dark:text-green-400">Good Times to Adjust</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ After stable period (4+ weeks at current dose)</li>
                    <li>✓ When routine is predictable and stress is manageable</li>
                    <li>✓ With upcoming provider follow-up scheduled</li>
                    <li>✓ When you have time to monitor response carefully</li>
                  </ul>
                </Card>
                <Card className="p-5 border-red-500 border-l-4">
                  <h3 className="font-semibold mb-3 text-red-700 dark:text-red-400">Avoid Adjusting During</h3>
                  <ul className="text-sm space-y-2">
                    <li>✗ Holidays or vacations</li>
                    <li>✗ Major life stressors (moving, job change)</li>
                    <li>✗ Illness or medication changes</li>
                    <li>✗ Without provider consultation</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Managing Weight During Dose Changes</h2>
              <p className="mb-4">
                Dose adjustments can temporarily destabilize weight. Use these strategies to minimize disruption:
              </p>
              <Card className="p-6 bg-primary/5 mb-6">
                <h3 className="font-semibold text-lg mb-4">During Dose Increases</h3>
                <ul className="space-y-2">
                  <li>• Expect renewed appetite suppression—don't force food intake</li>
                  <li>• Prioritize protein and hydration even if hunger is very low</li>
                  <li>• Monitor for side effect recurrence (usually milder than initial titration)</li>
                  <li>• Weight loss may accelerate temporarily before stabilizing</li>
                </ul>
              </Card>
              <Card className="p-6 bg-accent/30 mb-6">
                <h3 className="font-semibold text-lg mb-4">During Dose Decreases</h3>
                <ul className="space-y-2">
                  <li>• Expect gradual return of appetite—prepare healthy options</li>
                  <li>• Increase focus on portion control and mindful eating</li>
                  <li>• May see 2-5 lbs initial water/glycogen weight return (not fat regain)</li>
                  <li>• Strengthen lifestyle habits to compensate for lower medication effect</li>
                </ul>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">What If Adjustment Doesn't Work?</h2>
              <p className="mb-4">
                If dose adjustments don't achieve desired results, consider these alternatives:
              </p>
              <ul className="space-y-3 mb-6">
                <li>
                  <strong className="text-primary">Combination Therapy:</strong> Your provider may add complementary medications (e.g., metformin, topiramate) to enhance effects
                </li>
                <li>
                  <strong className="text-primary">Switch Medications:</strong> Consider <Link to="/blog/switching-semaglutide-to-tirzepatide" className="text-primary hover:underline">switching to tirzepatide</Link> (Mounjaro/Zepbound) or other GLP-1 agonists if semaglutide response diminishes
                </li>
                <li>
                  <strong className="text-primary">Intensive Lifestyle Intervention:</strong> Work with dietitian and exercise specialist to maximize non-pharmacologic approaches
                </li>
                <li>
                  <strong className="text-primary">Metabolic Evaluation:</strong> Rule out thyroid issues, sleep apnea, or other factors affecting weight loss
                </li>
                <li>
                  <strong className="text-primary">Medication Break-Reinitiation:</strong> Some patients respond better after 8-12 week break followed by restarting
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Long-Term Dose Optimization Mindset</h2>
              <p className="mb-4">
                Successful maintenance requires ongoing flexibility and adjustment:
              </p>
              <Card className="p-6 bg-primary/10 border-primary">
                <h3 className="font-semibold text-lg mb-3">Think of Your Dose as Dynamic, Not Fixed</h3>
                <ul className="space-y-2">
                  <li>• Your optimal dose may change every 6-12 months</li>
                  <li>• Life stages (menopause, aging) affect medication needs</li>
                  <li>• Seasonal variations in activity may warrant adjustments</li>
                  <li>• Regular reassessment with provider ensures optimal outcomes</li>
                  <li>• The goal is lowest effective dose that maintains results</li>
                </ul>
              </Card>
            </section>

            <Card className="p-6 bg-primary/10 border-primary mb-8">
              <h2 className="text-2xl font-bold mb-4">Need Help Optimizing Your Dose?</h2>
              <p className="mb-4">
                Work with providers who specialize in weight management medication optimization and long-term success strategies.
              </p>
              <Link to="/get-started">
                <Button size="lg" className="w-full md:w-auto">
                  Get Personalized Support →
                </Button>
              </Link>
            </Card>

            <Card className="p-6 bg-muted/50 border-muted mb-8">
              <p className="text-sm text-muted-foreground">
                <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. All dose adjustments should be made under the supervision of a qualified healthcare provider based on individual assessment and monitoring.
              </p>
            </Card>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">References</h2>
              <ol className="text-sm space-y-2 text-muted-foreground">
                <li>1. Rubino D, et al. Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo on Weight Loss Maintenance. JAMA. 2021;325(14):1414-1425.</li>
                <li>2. Wilding JPH, et al. Weight regain and cardiometabolic effects after withdrawal of semaglutide. Diabetes Obes Metab. 2022;24(8):1553-1564.</li>
                <li>3. Garvey WT, et al. Two-year effects of semaglutide in adults with overweight or obesity: the STEP 5 trial. Nat Med. 2022;28(10):2083-2091.</li>
                <li>4. Davies M, et al. Semaglutide 2.4 mg once a week in adults with overweight or obesity, and type 2 diabetes (STEP 2). Lancet. 2021;397(10278):971-984.</li>
              </ol>
            </section>
          </div>

          <TopicClusterNav
            hubPage={clusterNav.hubPage}
            relatedArticles={clusterNav.relatedInCluster}
            topic="Dosage"
          />
        </article>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default SemaglutideDoseAdjustment;
