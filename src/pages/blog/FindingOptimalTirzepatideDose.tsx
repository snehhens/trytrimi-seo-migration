import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "@/compat/react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const FindingOptimalTirzepatideDose = () => {
  const clusterNav = getClusterNavigation("dosage");

  const faqs = [
    {
      question: "How long does it take to find my optimal tirzepatide dose?",
      answer: "The full titration process typically takes 16-20 weeks to reach the maximum 15 mg dose. However, many patients find their optimal maintenance dose at 10 mg (around 16 weeks), depending on individual response and goals."
    },
    {
      question: "What are signs I should stay at my current dose vs. increase?",
      answer: "Stay at your current dose if you're losing 1-2 lbs/week consistently, have excellent appetite control, minimal side effects, and feel satisfied. Consider increasing if weight loss stalls for 2+ weeks, hunger returns, or your provider recommends advancement."
    },
    {
      question: "Can I find my optimal dose at lower than 10 mg?",
      answer: "Yes, some patients achieve excellent results at 5-7.5 mg weekly. Early responders who experience strong effects at lower doses may not need to advance to higher levels."
    },
    {
      question: "What if I experience side effects during titration?",
      answer: "It's normal to experience mild GI symptoms during dose increases. If side effects are severe or persistent, discuss staying at your current dose longer or slowing the titration schedule with your provider before advancing."
    }
  ];

  return (
    <>
      <BlogSEO
        title="How to Find Your Optimal Tirzepatide Maintenance Dose"
        description="Learn the step-by-step process to identify your ideal tirzepatide maintenance dose. Expert guidance on dose titration, adjustment signals, and long-term optimization."
        url="/blog/finding-optimal-tirzepatide-dose"
        publishDate="2025-01-15"
        modifiedDate="2025-01-15"
        keywords={[
          "optimal tirzepatide dose",
          "tirzepatide dosing",
          "tirzepatide titration",
          "maintenance dose tirzepatide",
          "tirzepatide dose adjustment",
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Finding Optimal Tirzepatide Dose", url: "/blog/finding-optimal-tirzepatide-dose" },
        ]}
        faqs={faqs}
        isMedical={true}
        medicalAudience={["Patient", "Clinician"]}
      />

      <OptimizedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              How to Find Your Optimal Tirzepatide Maintenance Dose
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <time dateTime="2025-01-15">January 15, 2025</time>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />9 min read
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="article-intro text-xl text-muted-foreground mb-8">
              Finding your optimal tirzepatide maintenance dose is a personalized journey. This comprehensive guide walks you through the titration process, key indicators to monitor, and strategies to identify the dose that delivers maximum benefits with minimal side effects.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Tirzepatide Titration Journey</h2>
              <p className="mb-4">
                Unlike one-size-fits-all approaches, finding your optimal dose requires a methodical titration process that balances efficacy with tolerability:
              </p>
              <Card className="p-6 bg-primary/5 mb-6">
                <h3 className="font-semibold text-lg mb-4">Standard Titration Schedule</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary min-w-[120px]">Weeks 1-4:</span>
                    <span>2.5 mg weekly - Initial adaptation phase, minimal appetite reduction</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary min-w-[120px]">Weeks 5-8:</span>
                    <span>5 mg weekly - Noticeable appetite suppression begins</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary min-w-[120px]">Weeks 9-12:</span>
                    <span>7.5 mg weekly - Significant weight loss acceleration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary min-w-[120px]">Weeks 13-16:</span>
                    <span>10 mg weekly - Therapeutic dose for many patients</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary min-w-[120px]">Weeks 17-20:</span>
                    <span>12.5 mg weekly - Higher maintenance option</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary min-w-[120px]">Week 21+:</span>
                    <span>15 mg weekly - Maximum approved dose</span>
                  </div>
                </div>
              </Card>
              <p className="text-sm text-muted-foreground">
                Note: Your provider may adjust this schedule based on your individual response, tolerance, and weight loss trajectory.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Indicators: When to Stay vs. Increase</h2>
              <p className="mb-4">
                At each dose level, monitor these signals to determine whether to advance or maintain:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5 border-l-4 border-l-green-500">
                  <h3 className="font-semibold mb-3 text-green-700 dark:text-green-400">Stay at Current Dose If:</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ Losing 1-2 lbs per week consistently</li>
                    <li>✓ Excellent appetite control</li>
                    <li>✓ Minimal to no side effects</li>
                    <li>✓ Feeling satisfied and energized</li>
                    <li>✓ Making progress toward goals</li>
                  </ul>
                </Card>
                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-3 text-primary">Consider Increasing If:</h3>
                  <ul className="text-sm space-y-2">
                    <li>→ Weight loss has stalled (2+ weeks)</li>
                    <li>→ Hunger returning between doses</li>
                    <li>→ Side effects have fully resolved</li>
                    <li>→ Portion sizes creeping back up</li>
                    <li>→ Provider recommends advancement</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The "Sweet Spot" Framework</h2>
              <p className="mb-4">
                Your optimal maintenance dose occurs at the intersection of three critical factors:
              </p>
              <div className="space-y-4 mb-6">
                <Card className="p-6 bg-accent/30">
                  <h3 className="font-bold text-xl mb-3 text-primary">1. Efficacy Zone</h3>
                  <p className="mb-3">
                    <strong>What to measure:</strong> Consistent weight loss, appetite control, metabolic improvements
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Target: 1-2 lbs/week or maintaining goal weight ±3 lbs</li>
                    <li>• Satisfied 4-5 hours between meals</li>
                    <li>• Improved blood sugar, blood pressure, or lipids</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-accent/30">
                  <h3 className="font-bold text-xl mb-3 text-primary">2. Tolerability Zone</h3>
                  <p className="mb-3">
                    <strong>What to measure:</strong> Side effect severity and impact on quality of life
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Nausea: None to mild, doesn't interfere with daily activities</li>
                    <li>• GI symptoms: Manageable, infrequent</li>
                    <li>• Energy levels: Normal to improved</li>
                    <li>• Can maintain social eating without distress</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-accent/30">
                  <h3 className="font-bold text-xl mb-3 text-primary">3. Sustainability Zone</h3>
                  <p className="mb-3">
                    <strong>What to measure:</strong> Long-term adherence likelihood and lifestyle integration
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Can afford medication long-term</li>
                    <li>• Weekly injections fit into routine</li>
                    <li>• Building healthy habits, not just relying on medication</li>
                    <li>• Feel this approach is maintainable for years</li>
                  </ul>
                </Card>
              </div>
              <Card className="p-5 bg-primary/10 border-primary">
                <p className="font-semibold">
                  🎯 Your optimal dose exists where all three zones overlap—maximum efficacy with tolerable side effects and sustainable long-term use.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Data Tracking for Dose Optimization</h2>
              <p className="mb-4">
                Make informed dose decisions by tracking these metrics consistently:
              </p>
              <Card className="p-6 bg-accent/30 border-primary/20 mb-6">
                <h3 className="font-semibold text-lg mb-4">Weekly Tracking Checklist</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Physical Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>□ Weight (same day/time weekly)</li>
                      <li>□ Waist circumference (biweekly)</li>
                      <li>□ Blood pressure (if monitoring)</li>
                      <li>□ Blood sugar (if diabetic/prediabetic)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Subjective Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>□ Hunger levels (1-10 scale)</li>
                      <li>□ Side effect severity (1-10 scale)</li>
                      <li>□ Energy levels (1-10 scale)</li>
                      <li>□ Overall satisfaction (1-10 scale)</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Dose-Finding Scenarios</h2>
              <p className="mb-4">
                Real-world examples of how different patients find their optimal dose:
              </p>
              <div className="space-y-4 mb-6">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Scenario 1: The "Early Responder"</h3>
                  <p className="text-sm mb-2">
                    <strong>Profile:</strong> Excellent response at 7.5 mg with 2 lbs/week loss, minimal side effects
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Recommendation:</strong> Stay at 7.5 mg for maintenance rather than advancing. Higher doses may add side effects without additional benefit.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Scenario 2: The "Plateau Breaker"</h3>
                  <p className="text-sm mb-2">
                    <strong>Profile:</strong> Weight loss stalled at 10 mg after initial success, hunger returning
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Recommendation:</strong> Advance to 12.5 mg after verifying diet/exercise consistency. May need higher dose to overcome plateau.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Scenario 3: The "Side Effect Sensitive"</h3>
                  <p className="text-sm mb-2">
                    <strong>Profile:</strong> Significant nausea at 7.5 mg but weight loss is excellent
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Recommendation:</strong> Consider staying at 5 mg longer or slowing titration. Efficacy at lower dose is better than intolerable side effects at higher doses.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Working with Your Provider</h2>
              <p className="mb-4">
                Optimize your dose-finding journey through effective provider communication:
              </p>
              <Card className="p-6 bg-primary/5 mb-6">
                <h3 className="font-semibold text-lg mb-4">What to Discuss at Each Appointment</h3>
                <ul className="space-y-2">
                  <li>✓ Weekly weight trends (not just current number)</li>
                  <li>✓ Appetite and hunger patterns throughout the week</li>
                  <li>✓ Side effect frequency, severity, and impact</li>
                  <li>✓ Adherence to diet and exercise recommendations</li>
                  <li>✓ Any life changes affecting weight loss (stress, medications, etc.)</li>
                  <li>✓ Questions about advancing, staying, or reducing dose</li>
                </ul>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Fine-Tuning Your Maintenance Dose</h2>
              <p className="mb-4">
                Once you've identified a maintenance dose, periodic reassessment ensures continued optimization:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5">
                  <h3 className="font-semibold mb-3 text-primary">Every 3 Months</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Assess weight trend (stable vs. regain)</li>
                    <li>• Evaluate appetite control adequacy</li>
                    <li>• Check metabolic markers (A1C, lipids)</li>
                    <li>• Discuss medication tolerance</li>
                  </ul>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-3 text-primary">Every 6-12 Months</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Consider trial dose reduction if habits are strong</li>
                    <li>• Reassess goals and expectations</li>
                    <li>• Evaluate cost vs. benefit for long-term use</li>
                    <li>• Discuss emerging research or alternatives</li>
                  </ul>
                </Card>
              </div>
            </section>

            <Card className="p-6 bg-primary/10 border-primary mb-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Find Your Optimal Dose?</h2>
              <p className="mb-4">
                Work with experienced providers who specialize in tirzepatide optimization and personalized weight loss strategies.
              </p>
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link to="/get-started">Get Started with Trimi →</Link>
              </Button>
            </Card>

            <Card className="p-6 bg-muted/50 border-muted mb-8">
              <p className="text-sm text-muted-foreground">
                <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Tirzepatide dose optimization should be conducted under the supervision of a qualified healthcare provider. Individual responses vary, and dose adjustments should be based on comprehensive clinical assessment.
              </p>
            </Card>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">References</h2>
              <ol className="text-sm space-y-2 text-muted-foreground">
                <li>1. Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205-216.</li>
                <li>2. Frias JP, et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes. N Engl J Med. 2021;385(6):503-515.</li>
                <li>3. Aronne LJ, et al. Continued Treatment With Tirzepatide for Maintenance of Weight Reduction. JAMA. 2024;331(1):38-48.</li>
                <li>4. Rosenstock J, et al. Efficacy and safety of a novel dual GIP and GLP-1 receptor agonist tirzepatide. Lancet. 2021;398(10295):143-155.</li>
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

export default FindingOptimalTirzepatideDose;
