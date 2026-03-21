import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "@/compat/react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const ComparingMaintenanceDoses = () => {
  const clusterNav = getClusterNavigation("comparisons");

  const faqs = [
    {
      question: "Which is more effective for weight loss maintenance: semaglutide or tirzepatide?",
      answer: "Clinical trials show tirzepatide produces approximately 6% greater weight loss (21% vs 15% average body weight) compared to semaglutide at maximum doses. However, individual response varies significantly."
    },
    {
      question: "Is tirzepatide or semaglutide more expensive for maintenance?",
      answer: "List prices are similar ($1,000-$1,500 monthly), but availability of savings programs, insurance coverage, and compounded options varies. Semaglutide has more established cost-reduction options currently."
    },
    {
      question: "Can I switch from semaglutide to tirzepatide during maintenance?",
      answer: "Yes, switching is common and generally well-tolerated. Start tirzepatide at 2.5 mg weekly and titrate up. Most patients who switch see accelerated weight loss after reaching therapeutic doses."
    },
    {
      question: "Which medication has fewer side effects for long-term use?",
      answer: "Both have similar GI side effect profiles. Some find semaglutide slightly better tolerated, while tirzepatide's dual mechanism may offer better glycemic control for diabetics. Individual tolerance varies."
    }
  ];

  return (
    <>
      <BlogSEO
        title="Semaglutide vs Tirzepatide Maintenance Doses: Complete Comparison"
        description="Compare semaglutide and tirzepatide maintenance doses side-by-side. Learn about efficacy, cost, side effects, and which medication offers the best long-term maintenance."
        url="/blog/comparing-maintenance-doses"
        publishDate="2025-01-15"
        modifiedDate="2025-01-15"
        keywords={[
          "semaglutide vs tirzepatide",
          "maintenance dose comparison",
          "tirzepatide vs semaglutide maintenance",
          "GLP-1 maintenance doses",
          "best weight loss maintenance",
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Comparing Maintenance Doses", url: "/blog/comparing-maintenance-doses" },
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
              Semaglutide vs Tirzepatide Maintenance Doses: Complete Comparison
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <time dateTime="2025-01-15">January 15, 2025</time>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />10 min read
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="article-intro text-xl text-muted-foreground mb-8">
              Choosing between semaglutide and tirzepatide for long-term weight maintenance is a critical decision. This comprehensive comparison examines maintenance doses, efficacy, side effects, costs, and real-world considerations to help you make an informed choice.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Comparison Overview</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-3 text-left">Factor</th>
                      <th className="border border-border p-3 text-left">Semaglutide (Wegovy/Ozempic)</th>
                      <th className="border border-border p-3 text-left">Tirzepatide (Zepbound/Mounjaro)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-semibold">Typical Maintenance Dose</td>
                      <td className="border border-border p-3">1.0-2.4 mg weekly</td>
                      <td className="border border-border p-3">10-15 mg weekly</td>
                    </tr>
                    <tr className="bg-accent/20">
                      <td className="border border-border p-3 font-semibold">Average Weight Loss (Maintenance)</td>
                      <td className="border border-border p-3">15-17% total body weight</td>
                      <td className="border border-border p-3">20-22% total body weight</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-semibold">Side Effect Profile</td>
                      <td className="border border-border p-3">Moderate GI symptoms</td>
                      <td className="border border-border p-3">Similar to higher GI symptoms initially</td>
                    </tr>
                    <tr className="bg-accent/20">
                      <td className="border border-border p-3 font-semibold">Cost Range (Monthly)</td>
                      <td className="border border-border p-3">$900-$1,400 without insurance</td>
                      <td className="border border-border p-3">$1,000-$1,500 without insurance</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-semibold">FDA Approval</td>
                      <td className="border border-border p-3">2021 (Wegovy)</td>
                      <td className="border border-border p-3">2023 (Zepbound)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Maintenance Dose Ranges Compared</h2>
              <p className="mb-4">
                Understanding typical maintenance doses helps set realistic expectations:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6 border-primary">
                  <h3 className="font-bold text-2xl mb-4 text-primary">Semaglutide Maintenance</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Low Maintenance: 0.5-1.0 mg</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• For early responders</li>
                        <li>• Good weight stability</li>
                        <li>• Minimal side effects</li>
                        <li>• Lower cost option</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Standard Maintenance: 1.7 mg</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Most common maintenance dose</li>
                        <li>• Balanced efficacy/tolerability</li>
                        <li>• Sustained appetite control</li>
                        <li>• FDA-studied dose</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">High Maintenance: 2.4 mg</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Maximum approved dose</li>
                        <li>• Greatest weight loss effect</li>
                        <li>• Stronger appetite suppression</li>
                        <li>• May have more GI effects</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-primary">
                  <h3 className="font-bold text-2xl mb-4 text-primary">Tirzepatide Maintenance</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Low Maintenance: 5-7.5 mg</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• For sensitive patients</li>
                        <li>• Less common maintenance range</li>
                        <li>• Reduced side effects</li>
                        <li>• Still effective for many</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Standard Maintenance: 10 mg</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Most common maintenance dose</li>
                        <li>• Strong efficacy</li>
                        <li>• Well-tolerated after titration</li>
                        <li>• Optimal for most patients</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">High Maintenance: 12.5-15 mg</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Maximum approved dose</li>
                        <li>• Superior weight loss</li>
                        <li>• Greatest metabolic benefits</li>
                        <li>• Higher cost</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Efficacy: Head-to-Head Results</h2>
              <p className="mb-4">
                Clinical trials provide direct comparison data between these medications. See our detailed <Link to="/blog/tirzepatide-vs-semaglutide" className="text-primary hover:underline">head-to-head comparison</Link>:
              </p>
              <Card className="p-6 bg-primary/5 mb-6">
                <h3 className="font-semibold text-lg mb-4">SURMOUNT-2 Trial Results (Direct Comparison)</h3>
                <div className="space-y-3">
                  <div>
                    <strong className="text-primary">At 72 Weeks:</strong>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Tirzepatide 15 mg: -21% average body weight loss</li>
                      <li>• Semaglutide 2.4 mg: -15% average body weight loss</li>
                      <li>• Tirzepatide showed 6% greater weight loss advantage</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-primary">Clinical Significance:</strong>
                    <p className="mt-2 text-sm">
                      For a 250 lb person, this translates to approximately 52 lbs lost with tirzepatide vs. 38 lbs with semaglutide—a 14 lb difference on average.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Side Effect Profile Comparison</h2>
              <p className="mb-4">
                Both medications share similar side effect profiles with some notable differences:
              </p>
              <div className="space-y-4 mb-6">
                <Card className="p-5">
                  <h3 className="font-semibold mb-3 text-primary">Common to Both (During Titration & Early Maintenance)</h3>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Nausea (30-40% of patients)</li>
                    <li>• Diarrhea or constipation (15-30%)</li>
                    <li>• Abdominal discomfort (10-20%)</li>
                    <li>• Fatigue (10-15%)</li>
                    <li>• Reduced appetite (intended effect)</li>
                  </ul>
                </Card>
                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-3">Key Differences</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">Semaglutide</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ Slightly better GI tolerability for some</li>
                        <li>✓ Longer track record (more data)</li>
                        <li>⚠️ More frequent injection site reactions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">Tirzepatide</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ Dual mechanism may reduce GI adaptation time</li>
                        <li>✓ Better glycemic control for diabetics</li>
                        <li>⚠️ Slightly higher nausea rates in trials</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Cost Comparison for Long-Term Maintenance</h2>
              <p className="mb-4">
                Cost is a critical factor for medications taken indefinitely. Here's what to expect:
              </p>
              <Card className="p-6 bg-accent/30 border-primary/20 mb-6">
                <h3 className="font-semibold text-lg mb-4">Monthly Cost Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Semaglutide (Brand: Wegovy)</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• List price: $1,349-$1,430/month</li>
                      <li>• With manufacturer coupon: $25-$550/month (eligibility criteria apply)</li>
                      <li>• Compounded options: $200-$400/month (varies by pharmacy)</li>
                      <li>• Insurance coverage: Variable (often requires prior authorization)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Tirzepatide (Brand: Zepbound)</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• List price: $1,059-$1,500/month (dose-dependent)</li>
                      <li>• With manufacturer coupon: $25-$550/month (eligibility criteria apply)</li>
                      <li>• Compounded options: $350-$500/month (varies by pharmacy)</li>
                      <li>• Insurance coverage: Newer, less predictable coverage</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Which Maintenance Dose Is Right for You?</h2>
              <p className="mb-4">
                Consider these factors when choosing between medications:
              </p>
              <div className="space-y-4 mb-6">
                <Card className="p-5 border-primary border-l-4">
                  <h3 className="font-semibold mb-2">Choose Semaglutide If:</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ You want a longer track record and more <Link to="/blog/semaglutide-clinical-results" className="text-primary hover:underline">extensive safety data</Link></li>
                    <li>✓ You've previously tried and tolerated GLP-1 medications well</li>
                    <li>✓ Your insurance covers Wegovy specifically</li>
                    <li>✓ You have more sensitive GI system and prefer conservative approach</li>
                    <li>✓ Weight loss goal is moderate (10-15% total body weight)</li>
                    <li>✓ Cost considerations favor semaglutide in your situation</li>
                  </ul>
                </Card>
                <Card className="p-5 border-primary border-l-4">
                  <h3 className="font-semibold mb-2">Choose Tirzepatide If:</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ You want maximum weight loss potential</li>
                    <li>✓ You have type 2 diabetes and need superior glycemic control</li>
                    <li>✓ You haven't responded optimally to semaglutide</li>
                    <li>✓ You're willing to tolerate potentially stronger initial side effects for greater efficacy</li>
                    <li>✓ Weight loss goal is more aggressive (15-25% total body weight)</li>
                    <li>✓ Your provider recommends based on your metabolic profile</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Switching Between Medications</h2>
              <p className="mb-4">
                Some patients switch from semaglutide to tirzepatide or vice versa. Here's what to know:
              </p>
              <Card className="p-6 bg-primary/5 mb-6">
                <h3 className="font-semibold text-lg mb-4">Switching Strategy</h3>
                <div className="space-y-3">
                  <div>
                    <strong className="text-primary">Semaglutide → Tirzepatide:</strong>
                    <p className="text-sm mt-1">
                      Most common switch. Start tirzepatide at 2.5 mg weekly and titrate up. May see accelerated weight loss after 8-12 weeks at therapeutic doses.
                    </p>
                  </div>
                  <div>
                    <strong className="text-primary">Tirzepatide → Semaglutide:</strong>
                    <p className="text-sm mt-1">
                      Less common. Usually for side effect management or cost reasons. Start at 0.25-0.5 mg weekly and titrate up based on tolerance.
                    </p>
                  </div>
                  <div>
                    <strong className="text-primary">Washout Period:</strong>
                    <p className="text-sm mt-1">
                      Generally not required. Can switch immediately after last dose of previous medication. Some providers prefer waiting one dose cycle.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Real-World Maintenance Success Rates</h2>
              <p className="mb-4">
                Beyond clinical trials, real-world data shows how patients maintain results:
              </p>
              <Card className="p-6 bg-accent/30 mb-6">
                <h3 className="font-semibold text-lg mb-4">1-Year Maintenance Data</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Semaglutide</h4>
                    <ul className="text-sm space-y-1">
                    <li>• 70-75% maintain &gt;10% weight loss at 1 year</li>
                    <li>• 45-50% maintain &gt;15% weight loss</li>
                      <li>• Discontinuation rate: ~20-25% (side effects/cost)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Tirzepatide</h4>
                    <ul className="text-sm space-y-1">
                    <li>• 80-85% maintain &gt;10% weight loss at 1 year</li>
                    <li>• 60-65% maintain &gt;15% weight loss</li>
                      <li>• Discontinuation rate: ~15-20% (newer data emerging)</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <Card className="p-6 bg-primary/10 border-primary mb-8">
              <h2 className="text-2xl font-bold mb-4">Get Expert Guidance on the Right Medication</h2>
              <p className="mb-4">
                Work with providers who can assess your individual needs and help you choose the optimal maintenance medication and dose.
              </p>
              <Link to="/get-started">
                <Button size="lg" className="w-full md:w-auto">
                  Find Your Best Option →
                </Button>
              </Link>
            </Card>

            <Card className="p-6 bg-muted/50 border-muted mb-8">
              <p className="text-sm text-muted-foreground">
                <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Medication choice and dosing should be determined by a qualified healthcare provider based on individual patient factors, medical history, insurance coverage, and treatment goals.
              </p>
            </Card>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">References</h2>
              <ol className="text-sm space-y-2 text-muted-foreground">
                <li>1. Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205-216.</li>
                <li>2. Garvey WT, et al. Two-year effects of semaglutide in adults with overweight or obesity: the STEP 5 trial. Nat Med. 2022;28(10):2083-2091.</li>
                <li>3. Aronne LJ, et al. Tirzepatide for the treatment of obesity: Rationale and design of the SURMOUNT clinical trial program. Obesity. 2023;31(1):96-110.</li>
                <li>4. Frias JP, et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes. N Engl J Med. 2021;385(6):503-515.</li>
              </ol>
            </section>
          </div>

          <TopicClusterNav
            hubPage={clusterNav.hubPage}
            relatedArticles={clusterNav.relatedInCluster}
            topic="Comparisons"
          />
        </article>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default ComparingMaintenanceDoses;
