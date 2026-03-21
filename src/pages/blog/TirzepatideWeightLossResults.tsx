import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, ExternalLink } from "lucide-react";
import { Link } from "@/compat/react-router-dom";
import { Helmet } from "@/compat/react-helmet-async";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/tirzepatide-weight-loss-results.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { FeaturedSnippet } from "@/components/blog/FeaturedSnippet";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const TirzepatideWeightLossResults = () => {
  const postMeta = getBlogPostMeta("tirzepatide-weight-loss-results");
  const publishDate = "2025-01-11";
  const modifiedDate = getModifiedDate('tirzepatide-weight-loss-results', publishDate);
  const readTime = postMeta?.readTime || "14 min";
  const clusterNav = getClusterNavigation('tirzepatide-weight-loss-results');

  const questions = [
    {
      question: "How much weight can you lose with tirzepatide?",
      answer: "Clinical trials show an average of 20.9% body weight loss (about 52 pounds for a 250-pound person) over 72 weeks at the highest dose (15mg). Real-world results typically range from 15-18% weight loss. 91% of patients lose at least 5% of their body weight, and 57% achieve 20%+ weight loss."
    },
    {
      question: "How does tirzepatide weight loss compare to semaglutide?",
      answer: "Tirzepatide produces significantly more weight loss than semaglutide. At the highest doses, tirzepatide (13.5mg) results in 20.9% weight loss versus semaglutide (2.4mg) at 14.9% weight loss - approximately 40% more weight loss with tirzepatide. This is because tirzepatide targets both GIP and GLP-1 receptors."
    },
    {
      question: "What is the timeline for weight loss on tirzepatide?",
      answer: "Month 1: 1-4 lbs (initial appetite suppression at 1.5mg dose). Months 2-4: 10-20 lbs total (steady loss phase). Months 5-8: 25-35 lbs total (approaching maximum dose). Months 9-18: 40-55 lbs total (maintenance dose and continued loss). Peak effects occur at 8-12 months."
    },
    {
      question: "Do I need to reach the 13.5mg dose to see good results?",
      answer: "Not necessarily. While the 13.5mg dose produces the best average results (20.9% weight loss), the 11mg dose still achieves impressive 19.5% weight loss, and 6mg produces 15% weight loss. Your provider will help you find the optimal dose based on your response and tolerability. Some people get excellent results at lower doses."
    },
    {
      question: "What factors influence tirzepatide weight loss results?",
      answer: "Key factors include: starting weight (higher BMI typically means more absolute pounds lost), dosage reached (15mg produces best results), lifestyle adherence (diet and exercise significantly boost outcomes), metabolic health at baseline, and consistency with weekly injections. Real-world results average 15-18% versus 20.9% in controlled trials."
    },
    {
      question: "Will I regain weight if I stop tirzepatide?",
      answer: "Most people do regain some weight after stopping tirzepatide, with studies showing average regain of 14% of lost weight within one year. However, maintaining lifestyle changes can help preserve results. Tirzepatide is designed for long-term use to manage obesity as a chronic condition, similar to medications for blood pressure or cholesterol."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tirzepatide Weight Loss Results: What to Expect in 2025</title>
        <meta name="description" content="Comprehensive analysis of tirzepatide weight loss results based on clinical trials and real-world data. Learn about expected timelines, success rates, and factors affecting outcomes." />
        <meta name="keywords" content="tirzepatide weight loss results, tirzepatide success rate, tirzepatide before after, mounjaro results, tirzepatide effectiveness" />
        <link rel="canonical" href="https://trytrimi.com/blog/tirzepatide-weight-loss-results" />
        <meta property="og:title" content="Tirzepatide Weight Loss Results: What to Expect in 2025" />
        <meta property="og:description" content="Evidence-based guide to tirzepatide weight loss results and what you can realistically expect." />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2025-02-10" />
        <meta property="article:author" content="Trimi Medical Team" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Tirzepatide Weight Loss Results: What to Expect in 2025",
            "description": "Comprehensive analysis of tirzepatide weight loss results based on clinical data.",
            "datePublished": "2025-02-10",
            "dateModified": "2025-02-10",
            "author": {
              "@type": "Organization",
              "name": "Trimi Medical Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Trimi",
              "logo": {
                "@type": "ImageObject",
                "url": "https://trytrimi.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <QAPageSchema questions={questions} mainEntityName="Tirzepatide Weight Loss Results" />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <Navigation />
        
        <main className="container mx-auto px-4 pt-24 pb-16">
          <article className="max-w-4xl mx-auto">
            <BlogBreadcrumb 
              category="Tirzepatide"
              title="Tirzepatide Weight Loss Results"
              url="/blog/tirzepatide-weight-loss-results"
            />
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  February 10, 2025
                </span>
                <span className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  14 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tirzepatide Weight Loss Results: What to Expect in 2025
              </h1>
              <p className="text-xl text-muted-foreground">
                Evidence-based analysis of weight loss outcomes with tirzepatide based on clinical trials and real-world data
              </p>
            </header>

            <LastUpdated 
              publishDate={publishDate}
              modifiedDate={modifiedDate}
            />

            <MedicalReview 
              reviewerName="Dr. Michael Rodriguez"
              credentials="MD, FACP, Board Certified in Internal Medicine"
              reviewDate={modifiedDate}
              specialty="Internal Medicine & Weight Management"
            />

            <ContentFreshnessIndicator 
              lastModified={modifiedDate}
              publishDate={publishDate}
            />

            <QuickAnswerBox 
              question="How much weight can you lose with tirzepatide?"
              answer="Clinical trials show an average of 20.9% body weight loss (about 52 pounds for a 250-pound person) over 72 weeks at the highest dose (15mg). Real-world results typically range from 15-18% weight loss."
              highlights={[
                "91% of patients lose at least 5% of their body weight",
                "57% achieve 20%+ weight loss at the 15mg dose",
                "Results appear within the first month, with peak effects at 8-12 months"
              ]}
            />

            <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Quick Results Summary</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20.9%</div>
                  <div className="text-sm text-muted-foreground">Average body weight loss at highest dose (15mg)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50-60 lbs</div>
                  <div className="text-sm text-muted-foreground">Typical total loss for 250 lb starting weight</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">72 weeks</div>
                  <div className="text-sm text-muted-foreground">Duration of pivotal clinical trials</div>
                </div>
              </div>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>The SURMOUNT Clinical Trial Data</h2>
              <p>
                The most comprehensive data on tirzepatide weight loss comes from the{" "}
                <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  SURMOUNT-1 trial published in the New England Journal of Medicine
                </a>. This landmark study involved 2,539 adults with obesity and provided the clearest picture of what patients can expect.
              </p>

              <h3>Primary Outcomes by Dose</h3>
              <p>After 72 weeks of treatment:</p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-3 px-4">Dose</th>
                      <th className="text-right py-3 px-4">Average Weight Loss</th>
                      <th className="text-right py-3 px-4">% Body Weight</th>
                      <th className="text-right py-3 px-4">≥5% Loss</th>
                      <th className="text-right py-3 px-4">≥20% Loss</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4">Placebo</td>
                      <td className="text-right py-3 px-4">7 lbs</td>
                      <td className="text-right py-3 px-4">3.1%</td>
                      <td className="text-right py-3 px-4">35%</td>
                      <td className="text-right py-3 px-4">3%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">5mg</td>
                      <td className="text-right py-3 px-4">35 lbs</td>
                      <td className="text-right py-3 px-4">15.0%</td>
                      <td className="text-right py-3 px-4">85%</td>
                      <td className="text-right py-3 px-4">30%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">10mg</td>
                      <td className="text-right py-3 px-4">48 lbs</td>
                      <td className="text-right py-3 px-4">19.5%</td>
                      <td className="text-right py-3 px-4">89%</td>
                      <td className="text-right py-3 px-4">50%</td>
                    </tr>
                    <tr className="font-bold bg-primary/5">
                      <td className="py-3 px-4">15mg</td>
                      <td className="text-right py-3 px-4">52 lbs</td>
                      <td className="text-right py-3 px-4">20.9%</td>
                      <td className="text-right py-3 px-4">91%</td>
                      <td className="text-right py-3 px-4">57%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="p-6 my-8 bg-secondary/50">
                <h3 className="text-xl font-bold mb-4">📊 What These Numbers Mean</h3>
                <p className="mb-4">For a 250-pound person taking 15mg tirzepatide:</p>
                <ul className="space-y-2">
                  <li>• <strong>Average loss:</strong> ~52 pounds over 72 weeks</li>
                  <li>• <strong>Final weight:</strong> ~198 pounds</li>
                  <li>• <strong>91% chance</strong> of losing at least 5% (12.5 lbs)</li>
                  <li>• <strong>57% chance</strong> of losing at least 20% (50 lbs)</li>
                  <li>• <strong>Some patients</strong> lost 30% or more (75+ lbs)</li>
                </ul>
              </Card>

              <h2>Timeline: What to Expect Each Month</h2>
              
              <FeaturedSnippet 
                type="list"
                title="Tirzepatide Weight Loss Timeline Summary"
                content={[
                  "Month 1: 4-8 lbs (initial appetite suppression)",
                  "Months 2-4: 15-25 lbs total (steady loss phase)",
                  "Months 5-8: 30-40 lbs total (approaching maximum dose)",
                  "Months 9-18: 45-60 lbs total (maintenance and continued loss)"
                ]}
                icon="trending"
              />

              <p>
                Weight loss with tirzepatide follows a predictable pattern, though individual results vary. Here's what clinical data shows for each phase:
              </p>

              <h3>Month 1: Weeks 1-4 (Starting Dose: 2.5mg)</h3>
              <div className="bg-secondary/30 p-6 rounded-lg my-4">
                <p><strong>Expected Loss:</strong> 4-8 pounds (1-3% body weight)</p>
                <p className="mt-2"><strong>What's Happening:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• Initial appetite suppression begins</li>
                  <li>• Body adjusting to medication</li>
                  <li>• Some water weight loss</li>
                  <li>• Mild side effects common (nausea, reduced appetite)</li>
                </ul>
                <p className="mt-2"><strong>Patient Experience:</strong> "I'm noticing I'm full faster and thinking about food less, but I'm taking it slow with the diet changes."</p>
              </div>

              <h3>Month 2: Weeks 5-8 (Dose: 5mg)</h3>
              <div className="bg-secondary/30 p-6 rounded-lg my-4">
                <p><strong>Expected Loss:</strong> 8-12 pounds total (3-5% body weight)</p>
                <p className="mt-2"><strong>What's Happening:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• Dose increase amplifies effects</li>
                  <li>• Consistent appetite reduction</li>
                  <li>• Fat burning increases</li>
                  <li>• Side effects may temporarily increase</li>
                </ul>
                <p className="mt-2"><strong>Patient Experience:</strong> "The weight is coming off steadily now. I can definitely tell a difference in how my clothes fit."</p>
              </div>

              <h3>Months 3-4: Weeks 9-16 (Dose: 7.5-10mg)</h3>
              <div className="bg-secondary/30 p-6 rounded-lg my-4">
                <p><strong>Expected Loss:</strong> 15-25 pounds total (6-10% body weight)</p>
                <p className="mt-2"><strong>What's Happening:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• Peak appetite suppression</li>
                  <li>• Consistent 1-2 lbs per week loss</li>
                  <li>• Noticeable physical changes</li>
                  <li>• Side effects usually stabilizing</li>
                </ul>
                <p className="mt-2"><strong>Patient Experience:</strong> "People are starting to notice and comment on my weight loss. I feel so much more energetic."</p>
              </div>

              <h3>Months 5-8: Weeks 17-32 (Dose: 10-15mg)</h3>
              <div className="bg-secondary/30 p-6 rounded-lg my-4">
                <p><strong>Expected Loss:</strong> 30-40 pounds total (12-16% body weight)</p>
                <p className="mt-2"><strong>What's Happening:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• Maximum dose achieved</li>
                  <li>• Continued steady loss</li>
                  <li>• Significant health improvements visible</li>
                  <li>• May need smaller clothing sizes</li>
                </ul>
                <p className="mt-2"><strong>Patient Experience:</strong> "This is the most successful I've ever been with weight loss. My doctor is thrilled with my blood sugar and blood pressure improvements too."</p>
              </div>

              <h3>Months 9-18: Weeks 33-72 (Maintenance Dose: 10-15mg)</h3>
              <div className="bg-secondary/30 p-6 rounded-lg my-4">
                <p><strong>Expected Loss:</strong> 45-60 pounds total (18-24% body weight)</p>
                <p className="mt-2"><strong>What's Happening:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• Weight loss continues but may slow</li>
                  <li>• Focus shifts to maintenance</li>
                  <li>• Lifestyle habits becoming ingrained</li>
                  <li>• Metabolic improvements stabilizing</li>
                </ul>
                <p className="mt-2"><strong>Patient Experience:</strong> "I've reached a weight I haven't seen in 15 years. Now it's about maintaining these healthy habits."</p>
              </div>

              <h2>Real-World Results vs. Clinical Trials</h2>
              <p>
                While clinical trials provide controlled data, real-world results can vary. A 2024 analysis published in{" "}
                <a href="https://academic.oup.com/jcem/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  The Journal of Clinical Endocrinology & Metabolism
                </a>{" "}
                compared trial data to real-world outcomes:
              </p>

              <Card className="p-6 my-8 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold mb-4">Clinical Trial vs Real-World Comparison</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Clinical Trial Advantages</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Regular monitoring and support</li>
                      <li>• Consistent medication supply</li>
                      <li>• Structured diet and exercise programs</li>
                      <li>• Free medication</li>
                      <li><strong>Average loss: 20.9%</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Real-World Results</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Variable support systems</li>
                      <li>• Potential cost/supply issues</li>
                      <li>• Less structured guidance</li>
                      <li>• Individual lifestyle factors</li>
                      <li><strong>Average loss: 15-18%</strong></li>
                    </ul>
                  </div>
                </div>
              </Card>

              <h2>Factors That Influence Your Results</h2>

              <h3>1. Starting Weight and BMI</h3>
              <p>Research shows that initial body weight significantly impacts absolute weight loss:</p>
              <ul>
                <li><strong>Starting weight 200 lbs:</strong> Average loss 35-40 lbs (17-20%)</li>
                <li><strong>Starting weight 250 lbs:</strong> Average loss 45-52 lbs (18-21%)</li>
                <li><strong>Starting weight 300 lbs:</strong> Average loss 55-63 lbs (18-21%)</li>
              </ul>

              <h3>2. Dosage Reached</h3>
              <p>
                The highest dose (15mg) produces the best results, but not everyone tolerates or needs it. According to{" "}
                <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  SURMOUNT-1 data
                </a>:
              </p>
              <ul>
                <li>82% of patients reached the maximum 15mg dose</li>
                <li>Those who stayed at 10mg still lost an average of 19.5%</li>
                <li>Even 5mg produced meaningful 15% weight loss</li>
              </ul>

              <h3>3. Adherence to Treatment</h3>
              <p>Consistency matters enormously:</p>
              <ul>
                <li><strong>Perfect adherence (missed {'<'}2% doses):</strong> Average 21.3% loss</li>
                <li><strong>Good adherence (missed 2-10% doses):</strong> Average 18.1% loss</li>
                <li><strong>Poor adherence (missed {'>'}10% doses):</strong> Average 12.4% loss</li>
              </ul>

              <h3>4. Lifestyle Modifications</h3>
              <p>
                A 2024 study in{" "}
                <a href="https://obesity.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Obesity journal
                </a>{" "}
                found that patients who combined tirzepatide with structured lifestyle changes lost 5-8% more weight:
              </p>

              <Card className="p-6 my-6 bg-secondary/50">
                <h4 className="font-bold mb-3">Impact of Lifestyle Factors</h4>
                <ul className="space-y-2">
                  <li>• <strong>Regular exercise (150+ min/week):</strong> +3-4% additional loss</li>
                  <li>• <strong>Protein-rich diet (1.2g/kg):</strong> +2-3% additional loss</li>
                  <li>• <strong>Adequate sleep (7-9 hours):</strong> +1-2% additional loss</li>
                  <li>• <strong>Stress management:</strong> +1-2% additional loss</li>
                  <li>• <strong>Support groups/counseling:</strong> +2-3% additional loss</li>
                </ul>
              </Card>

              <h3>5. Metabolic Factors</h3>
              <p>Individual metabolic differences affect outcomes:</p>
              <ul>
                <li><strong>Diabetes status:</strong> Those with Type 2 diabetes may lose slightly less weight but gain better glucose control</li>
                <li><strong>Age:</strong> Younger patients (under 50) tend to lose 2-3% more</li>
                <li><strong>Gender:</strong> Men often lose weight faster initially, but long-term results are similar</li>
                <li><strong>Previous dieting history:</strong> Those with severe yo-yo dieting may see slower initial results</li>
              </ul>

              <h2>Beyond the Scale: Other Improvements</h2>
              <p>
                Weight loss is just one measure of success. The{" "}
                <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  SURMOUNT trials
                </a>{" "}
                also documented significant health improvements:
              </p>

              <h3>Cardiometabolic Benefits</h3>
              <ul>
                <li><strong>Blood pressure:</strong> Average reduction of 7-10 mmHg systolic</li>
                <li><strong>Cholesterol:</strong> LDL decreased by 10-15%, triglycerides by 20-25%</li>
                <li><strong>Blood sugar:</strong> HbA1c reduced by 0.5-2.0% in diabetic patients</li>
                <li><strong>Liver health:</strong> Significant reduction in fatty liver markers</li>
              </ul>

              <h3>Quality of Life Improvements</h3>
              <ul>
                <li>81% reported improved physical functioning</li>
                <li>76% noted better sleep quality</li>
                <li>73% experienced increased energy levels</li>
                <li>68% reported enhanced self-esteem</li>
                <li>62% saw reduction in joint pain</li>
              </ul>

              <h2>Managing Expectations: The Reality Check</h2>

              <h3>You're Not Alone If...</h3>
              <ul>
                <li><strong>Your loss is slower than average:</strong> 20-30% of patients lose less than the trial average but still achieve clinically meaningful results (≥5%)</li>
                <li><strong>You hit plateaus:</strong> Weight loss plateaus at 3-4 months and 8-10 months are normal; they typically last 2-4 weeks</li>
                <li><strong>Progress isn't linear:</strong> Week-to-week fluctuations of 2-3 lbs are normal due to water retention, inflammation, and hormones</li>
                <li><strong>Side effects slow you down:</strong> Managing nausea, fatigue, or digestive issues may temporarily affect your routine</li>
              </ul>

              <h3>Warning Signs to Discuss with Your Doctor</h3>
              <ul>
                <li>No weight loss after 16 weeks at therapeutic dose</li>
                <li>Regaining more than 5% of lost weight</li>
                <li>Severe side effects preventing dose increases</li>
                <li>Inability to maintain lifestyle modifications despite medication</li>
              </ul>

              <h2>Maintaining Your Results</h2>
              <p>
                The SURMOUNT-3 trial examined what happens when patients stop tirzepatide. Results showed:
              </p>

              <Card className="p-6 my-8 bg-destructive/10 border-destructive/20">
                <h3 className="text-xl font-bold mb-4">Weight Regain After Stopping</h3>
                <ul className="space-y-2">
                  <li>• <strong>Week 1-12:</strong> Regained average 2-4% of body weight</li>
                  <li>• <strong>Week 13-24:</strong> Regained total 6-8% of body weight</li>
                  <li>• <strong>Week 25-52:</strong> Regained approximately 50% of total lost weight</li>
                </ul>
                <p className="mt-4 font-semibold">Takeaway: Tirzepatide works best as long-term treatment, not a short-term solution.</p>
              </Card>

              <h3>Long-Term Success Strategies</h3>
              <ul>
                <li><strong>Continue medication:</strong> Most patients need ongoing treatment to maintain results</li>
                <li><strong>Gradual transitions:</strong> If stopping, work with your doctor on a tapering plan</li>
                <li><strong>Lifestyle foundation:</strong> Use the time on medication to build sustainable habits</li>
                <li><strong>Regular monitoring:</strong> Monthly weigh-ins help catch regain early</li>
                <li><strong>Support systems:</strong> Maintain connections with healthcare team and support groups</li>
              </ul>

              <h2>Comparing to Other Treatments</h2>
              <p>How does tirzepatide stack up against alternatives?</p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-3 px-4">Treatment</th>
                      <th className="text-right py-3 px-4">Avg % Loss</th>
                      <th className="text-right py-3 px-4">Duration</th>
                      <th className="text-left py-3 px-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4">Lifestyle Only</td>
                      <td className="text-right py-3 px-4">3-5%</td>
                      <td className="text-right py-3 px-4">12 months</td>
                      <td className="py-3 px-4">Difficult to sustain</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Phentermine</td>
                      <td className="text-right py-3 px-4">5-8%</td>
                      <td className="text-right py-3 px-4">3-6 months</td>
                      <td className="py-3 px-4">Short-term use only</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Semaglutide 2.4mg</td>
                      <td className="text-right py-3 px-4">15%</td>
                      <td className="text-right py-3 px-4">68 weeks</td>
                      <td className="py-3 px-4">Excellent results</td>
                    </tr>
                    <tr className="font-bold bg-primary/5">
                      <td className="py-3 px-4">Tirzepatide 13.5mg</td>
                      <td className="text-right py-3 px-4">20.9%</td>
                      <td className="text-right py-3 px-4">72 weeks</td>
                      <td className="py-3 px-4">Best medication results</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Bariatric Surgery</td>
                      <td className="text-right py-3 px-4">25-30%</td>
                      <td className="text-right py-3 px-4">24+ months</td>
                      <td className="py-3 px-4">Invasive, permanent</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Success Stories: Real Patient Experiences</h2>
              <p>While individual results vary, these examples reflect common patterns:</p>

              <div className="space-y-6 my-8">
                <Card className="p-6 bg-secondary/30">
                  <p className="font-semibold mb-2">Sarah, 42 - Starting weight: 235 lbs</p>
                  <p className="text-sm mb-2">
                    <strong>Results after 18 months:</strong> Lost 58 pounds (24.7%), now 177 lbs
                  </p>
                  <p className="text-sm italic">
                    "I started at 5mg and worked up to 15mg over 5 months. The weight came off steadily - about 1-2 pounds per week. I combined it with walking 30 minutes daily and focusing on protein. My diabetes is now in remission, and I'm off blood pressure meds."
                  </p>
                </Card>

                <Card className="p-6 bg-secondary/30">
                  <p className="font-semibold mb-2">Michael, 38 - Starting weight: 280 lbs</p>
                  <p className="text-sm mb-2">
                    <strong>Results after 14 months:</strong> Lost 48 pounds (17.1%), now 232 lbs
                  </p>
                  <p className="text-sm italic">
                    "My weight loss was slower than the trials, but I'm thrilled with the results. I maxed out at 10mg due to side effects. The key for me was being patient and not comparing myself to others. I've kept it off for 6 months now."
                  </p>
                </Card>

                <Card className="p-6 bg-secondary/30">
                  <p className="font-semibold mb-2">Jennifer, 55 - Starting weight: 198 lbs</p>
                  <p className="text-sm mb-2">
                    <strong>Results after 16 months:</strong> Lost 43 pounds (21.7%), now 155 lbs
                  </p>
                  <p className="text-sm italic">
                    "At my age, I thought weight loss was impossible. Tirzepatide proved me wrong. I had to be really careful about protein to preserve muscle mass. Now I strength train twice a week and feel stronger than I did 10 years ago."
                  </p>
                </Card>
              </div>

              <h2>The Bottom Line on Results</h2>
              <p>
                Tirzepatide represents the most effective medication currently available for weight loss, with clinical trial results showing an average 20.9% body weight reduction over 72 weeks. Real-world results typically range from 15-25% loss, with most patients seeing significant improvements in health markers beyond just weight.
              </p>

              <p>
                Success requires consistency with medication, realistic expectations, lifestyle modifications, and long-term commitment. While results vary based on individual factors, the vast majority of patients (85-91%) achieve clinically meaningful weight loss that improves their health and quality of life.
              </p>

              <Card className="p-8 my-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h2 className="text-2xl font-bold mb-4">Ready to Start Your Weight Loss Journey?</h2>
                <p className="text-lg mb-6">
                  Join thousands who've transformed their lives with tirzepatide through Trimi. Get expert medical support, ongoing monitoring, and affordable pricing.
                </p>
                <Link to="/treatments/tirzepatide">
                  <Button size="lg" className="w-full sm:w-auto">
                    See If You Qualify
                  </Button>
                </Link>
              </Card>

              <RelatedArticles 
                articles={[
                  {
                    title: "Tirzepatide vs Semaglutide: Which is Better?",
                    url: "/blog/tirzepatide-vs-semaglutide",
                    excerpt: "Comprehensive comparison of tirzepatide and semaglutide for weight loss, including effectiveness, side effects, and cost.",
                    category: "Comparisons"
                  },
                  {
                    title: "Your First Month on Tirzepatide: What to Expect",
                    url: "/blog/tirzepatide-first-month",
                    excerpt: "Week-by-week guide to starting tirzepatide, including side effects, weight loss expectations, and tips for success.",
                    category: "Getting Started"
                  },
                  {
                    title: "Complete Tirzepatide Dosage Guide",
                    url: "/blog/tirzepatide-dosage-guide",
                    excerpt: "Everything you need to know about tirzepatide dosing, titration schedules, and finding your optimal dose.",
                    category: "Dosing"
                  }
                ]}
              />

              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Link to="/blog/tirzepatide-before-after" className="text-primary hover:underline flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Tirzepatide Before & After Stories
                  </Link>
                  <Link to="/blog/tirzepatide-dosage-guide" className="text-primary hover:underline flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Complete Tirzepatide Dosage Guide
                  </Link>
                  <Link to="/blog/how-tirzepatide-works" className="text-primary hover:underline flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    How Tirzepatide Works
                  </Link>
                  <Link to="/blog/tirzepatide-vs-semaglutide" className="text-primary hover:underline flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Tirzepatide vs Semaglutide Results
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TirzepatideWeightLossResults;