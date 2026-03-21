import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "@/compat/react-helmet-async";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { CitationList } from "@/components/blog/CitationList";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { BlogFAQSchema } from "@/components/seo/BlogFAQSchema";
import { SpeakableSchema } from "@/components/seo/SpeakableSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import { Card } from "@/components/ui/card";
import { Calendar, TrendingDown, Target, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";

const SemaglutideBeforeAfterResults = () => {
  const publishDate = "2025-12-05";
  const modifiedDate = "2025-12-05";
  const clusterNav = getClusterNavigation('semaglutide-before-after-results');

  const faqs = [
    {
      question: "How much weight can you lose on semaglutide in 3 months?",
      answer: "Most patients lose 5-10% of their body weight in the first 3 months on semaglutide. For someone weighing 200 lbs, this typically means 10-20 lbs of weight loss. Results vary based on starting dose, diet, exercise, and individual response."
    },
    {
      question: "What are realistic semaglutide results month by month?",
      answer: "Month 1: 2-5 lbs (appetite changes begin). Month 2: 5-10 lbs cumulative. Month 3: 8-15 lbs cumulative. Month 6: 12-20% total body weight loss. Month 12: Average 15-17% body weight loss at full dose with lifestyle modifications."
    },
    {
      question: "When do you see results from semaglutide?",
      answer: "Most patients notice reduced appetite within 1-2 weeks. Visible weight loss typically becomes noticeable by week 4-6. Significant before/after differences are usually apparent by month 3-4 as patients reach therapeutic doses."
    },
    {
      question: "Does everyone lose weight on semaglutide?",
      answer: "About 85-90% of patients lose weight on semaglutide. Approximately one-third of patients lose 20% or more of their body weight. Non-responders (those who don't lose at least 5% of body weight) may benefit from switching to tirzepatide or other treatments."
    },
    {
      question: "What happens after you stop taking semaglutide?",
      answer: "Weight regain is common after stopping semaglutide—studies show patients regain about two-thirds of lost weight within a year of discontinuation. Long-term maintenance strategies including lifestyle changes are essential for sustained results."
    }
  ];

  const citations = [
    {
      authors: ["Wilding JPH", "Batterham RL", "Calanna S", "et al."],
      title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1)",
      publication: "New England Journal of Medicine",
      year: "2021",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
      doi: "10.1056/NEJMoa2032183"
    },
    {
      authors: ["Davies M", "Færch L", "Jeppesen OK", "et al."],
      title: "Semaglutide 2.4 mg once a week in adults with overweight or obesity (STEP 2)",
      publication: "The Lancet",
      year: "2021",
      url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00213-0/fulltext",
      doi: "10.1016/S0140-6736(21)00213-0"
    },
    {
      authors: ["Wadden TA", "Bailey TS", "Billings LK", "et al."],
      title: "Effect of Subcutaneous Semaglutide vs Placebo as an Adjunct to Intensive Behavioral Therapy (STEP 3)",
      publication: "JAMA",
      year: "2021",
      url: "https://jamanetwork.com/journals/jama/fullarticle/2777886",
      doi: "10.1001/jama.2021.1831"
    },
    {
      authors: ["Rubino D", "Abrahamsson N", "Davies M", "et al."],
      title: "Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo on Weight Loss Maintenance (STEP 4)",
      publication: "JAMA",
      year: "2021",
      url: "https://jamanetwork.com/journals/jama/fullarticle/2777885",
      doi: "10.1001/jama.2021.3224"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Semaglutide Before and After: Real Patient Results and Timeline | Trimi</title>
        <meta
          name="description"
          content="Discover real semaglutide before and after results with a month-by-month timeline. See what weight loss to expect at 1, 3, 6, and 12 months based on clinical data."
        />
        <meta name="keywords" content="semaglutide before after, semaglutide weight loss timeline, semaglutide results month by month, semaglutide weight loss results, wegovy before and after" />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-before-after-results" />
        <meta property="og:title" content="Semaglutide Before and After: Real Patient Results and Timeline" />
        <meta property="og:description" content="Real semaglutide results with month-by-month timeline. Clinical data on weight loss expectations at 1, 3, 6, and 12 months." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-before-after-results" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />
      </Helmet>

      <BlogFAQSchema faqs={faqs} />
      <SpeakableSchema cssSelector={[".quick-answer", "h1", "h2"]} />

      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <article className="max-w-4xl mx-auto">
          <BlogBreadcrumb 
            category="Semaglutide"
            title="Semaglutide Before and After Results"
            url="/blog/semaglutide-before-after-results"
          />
          
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ContentFreshnessIndicator 
                lastModified={modifiedDate}
                publishDate={publishDate}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Semaglutide Before and After: Real Patient Results and Timeline
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              What to realistically expect from semaglutide—a month-by-month breakdown of weight loss results based on clinical trials and real patient experiences
            </p>
            
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
            <MedicalReview 
              reviewerName="Dr. Jennifer Collins"
              credentials="MD, Obesity Medicine Specialist"
              reviewDate={modifiedDate}
              specialty="Weight Management & Metabolic Health"
            />
          </header>
          
          <QuickAnswerBox 
            question="What are typical semaglutide before and after results?"
            answer="Clinical trials show average weight loss of 15-17% of body weight (about 35 lbs for a 200 lb person) over 68 weeks on semaglutide 2.4mg. Results typically begin in month 1 with 2-5 lbs lost, accelerate through months 3-6 (reaching 10-15% weight loss), and plateau around month 12-16. About one-third of patients lose 20% or more of their body weight."
          />
          
          <TableOfContents />

          <div className="prose prose-lg max-w-none mt-8">
            <p>
              If you're considering <InternalLink to="/treatments/semaglutide">semaglutide</InternalLink> for weight loss, you probably want to know: "What results can I realistically expect?" It's natural to be curious about before and after transformations, especially when making a significant health decision.
            </p>
            
            <p>
              This comprehensive guide breaks down semaglutide weight loss results month by month, based on the landmark STEP clinical trials and real-world patient data. We'll cover what to expect at each stage, factors that influence results, and how to set realistic expectations for your own journey.
            </p>

            <h2 id="clinical-trial-data" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <TrendingDown className="h-8 w-8 text-primary" />
              What the Clinical Trials Show
            </h2>
            
            <p>
              The STEP (Semaglutide Treatment Effect in People with obesity) trials provide our best evidence for semaglutide weight loss outcomes. These large-scale studies enrolled thousands of participants and tracked results over 68 weeks (about 16 months).
            </p>

            <Card className="p-6 my-8 bg-primary/5">
              <h3 className="text-xl font-semibold mb-4">STEP Trial Results Summary</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">STEP 1 (Non-Diabetic Adults)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Average weight loss: <strong>14.9% of body weight</strong></li>
                    <li>• 86% lost at least 5%</li>
                    <li>• 69% lost at least 10%</li>
                    <li>• 50% lost at least 15%</li>
                    <li>• 32% lost at least 20%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">STEP 3 (With Intensive Lifestyle)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Average weight loss: <strong>16.0% of body weight</strong></li>
                    <li>• Combined with intensive diet/exercise</li>
                    <li>• 75% lost at least 10%</li>
                    <li>• 56% lost at least 15%</li>
                    <li>• Shows lifestyle matters</li>
                  </ul>
                </div>
              </div>
            </Card>

            <h2 id="month-by-month-timeline" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              Semaglutide Results: Month-by-Month Timeline
            </h2>
            
            <p>
              Understanding the typical timeline helps set realistic expectations. Here's what most patients experience during their semaglutide journey:
            </p>

            <div className="space-y-6 my-8">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                  Month 1: The Beginning (Weeks 1-4)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">What to Expect:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Weight loss:</strong> 2-5 lbs (1-2% body weight)</li>
                      <li>• Starting dose: 0.25mg weekly</li>
                      <li>• Appetite reduction begins</li>
                      <li>• Food noise decreases</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Common Experiences:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Feeling full faster during meals</li>
                      <li>• Reduced cravings for snacks</li>
                      <li>• <InternalLink to="/blog/managing-gi-side-effects-semaglutide">Mild GI symptoms</InternalLink> may occur</li>
                      <li>• Energy levels adjusting</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                  Month 2: Building Momentum (Weeks 5-8)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">What to Expect:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Cumulative weight loss:</strong> 5-10 lbs (3-5% body weight)</li>
                      <li>• Dose increase to 0.5mg weekly</li>
                      <li>• Stronger appetite suppression</li>
                      <li>• Eating patterns changing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Common Experiences:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Clothes starting to fit differently</li>
                      <li>• Portion sizes naturally decreasing</li>
                      <li>• Less interest in high-calorie foods</li>
                      <li>• Side effects may intensify briefly</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                  Month 3: Visible Changes (Weeks 9-12)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">What to Expect:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Cumulative weight loss:</strong> 8-15 lbs (5-8% body weight)</li>
                      <li>• Dose increase to 1.0mg weekly</li>
                      <li>• Noticeable physical changes</li>
                      <li>• Others may comment on changes</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Common Experiences:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Face looks slimmer</li>
                      <li>• Need smaller clothing sizes</li>
                      <li>• Improved energy and mobility</li>
                      <li>• GI side effects often improving</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                  Months 4-6: Acceleration Phase (Weeks 13-24)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">What to Expect:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Cumulative weight loss:</strong> 15-25 lbs (8-12% body weight)</li>
                      <li>• Reaching therapeutic doses (1.7-2.4mg)</li>
                      <li>• Peak rate of weight loss</li>
                      <li>• Dramatic before/after differences</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Common Experiences:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Significant wardrobe changes needed</li>
                      <li>• Blood pressure/blood sugar improvements</li>
                      <li>• Better sleep quality</li>
                      <li>• Increased confidence and mobility</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                  Months 7-12: Continued Progress (Weeks 25-52)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">What to Expect:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Cumulative weight loss:</strong> 25-35+ lbs (12-17% body weight)</li>
                      <li>• Maintenance dose established</li>
                      <li>• Rate of loss may slow slightly</li>
                      <li>• Approaching maximum benefits</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Common Experiences:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Multiple clothing size drops</li>
                      <li>• Significant health marker improvements</li>
                      <li>• New relationship with food</li>
                      <li>• Side effects minimal for most</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-secondary">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">+</span>
                  Month 12+: Maintenance Phase
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">What to Expect:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Total weight loss:</strong> 15-20%+ of body weight</li>
                      <li>• Weight stabilization</li>
                      <li>• <InternalLink to="/blog/semaglutide-maintenance-dose">Maintenance dosing</InternalLink> considerations</li>
                      <li>• Long-term lifestyle integration</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Common Experiences:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Transformed body composition</li>
                      <li>• Improved health biomarkers</li>
                      <li>• Sustainable eating habits</li>
                      <li>• Planning for long-term success</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <h2 id="real-world-examples" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Real-World Before and After Examples
            </h2>
            
            <p>
              While clinical trials show averages, individual results vary significantly. Here are examples of typical patient journeys (based on composite patient experiences):
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3">Strong Responder Example</h4>
                <p className="text-sm text-muted-foreground mb-3">Female, 42, starting weight 220 lbs</p>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between"><span>Month 3:</span> <strong>-18 lbs (202 lbs)</strong></li>
                  <li className="flex justify-between"><span>Month 6:</span> <strong>-38 lbs (182 lbs)</strong></li>
                  <li className="flex justify-between"><span>Month 12:</span> <strong>-55 lbs (165 lbs)</strong></li>
                  <li className="flex justify-between"><span>Total loss:</span> <strong>25% body weight</strong></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">Combined with regular exercise and protein-focused diet</p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3">Average Responder Example</h4>
                <p className="text-sm text-muted-foreground mb-3">Male, 55, starting weight 280 lbs</p>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between"><span>Month 3:</span> <strong>-14 lbs (266 lbs)</strong></li>
                  <li className="flex justify-between"><span>Month 6:</span> <strong>-28 lbs (252 lbs)</strong></li>
                  <li className="flex justify-between"><span>Month 12:</span> <strong>-42 lbs (238 lbs)</strong></li>
                  <li className="flex justify-between"><span>Total loss:</span> <strong>15% body weight</strong></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">Moderate exercise, standard dietary changes</p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3">Slower Responder Example</h4>
                <p className="text-sm text-muted-foreground mb-3">Female, 60, starting weight 195 lbs</p>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between"><span>Month 3:</span> <strong>-8 lbs (187 lbs)</strong></li>
                  <li className="flex justify-between"><span>Month 6:</span> <strong>-15 lbs (180 lbs)</strong></li>
                  <li className="flex justify-between"><span>Month 12:</span> <strong>-22 lbs (173 lbs)</strong></li>
                  <li className="flex justify-between"><span>Total loss:</span> <strong>11% body weight</strong></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">Limited by mobility issues; slower dose titration</p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3">Significant Change Example</h4>
                <p className="text-sm text-muted-foreground mb-3">Male, 38, starting weight 340 lbs</p>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between"><span>Month 3:</span> <strong>-25 lbs (315 lbs)</strong></li>
                  <li className="flex justify-between"><span>Month 6:</span> <strong>-48 lbs (292 lbs)</strong></li>
                  <li className="flex justify-between"><span>Month 12:</span> <strong>-75 lbs (265 lbs)</strong></li>
                  <li className="flex justify-between"><span>Total loss:</span> <strong>22% body weight</strong></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">Working with dietitian; strength training 3x/week</p>
              </Card>
            </div>

            <h2 id="factors-affecting-results" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              Factors That Influence Your Results
            </h2>
            
            <p>
              Understanding what affects semaglutide outcomes can help you maximize your own results:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Factors That Boost Results
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Regular exercise:</strong> Especially resistance training to preserve muscle</li>
                  <li>• <strong>High protein intake:</strong> 0.8-1g per pound of ideal body weight</li>
                  <li>• <strong>Reaching full dose:</strong> 2.4mg shows best results</li>
                  <li>• <strong>Adequate hydration:</strong> Supports metabolism and reduces side effects</li>
                  <li>• <strong>Consistency:</strong> Taking medication on schedule</li>
                  <li>• <strong>Sleep quality:</strong> 7-9 hours supports weight loss</li>
                  <li>• <strong>Stress management:</strong> High cortisol can hinder results</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3">Factors That May Limit Results</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Certain medications:</strong> Some drugs promote weight gain</li>
                  <li>• <strong>Metabolic conditions:</strong> Thyroid issues, PCOS, insulin resistance</li>
                  <li>• <strong>Age:</strong> Metabolism slows with age</li>
                  <li>• <strong>Unable to reach full dose:</strong> Due to side effects</li>
                  <li>• <strong>Limited physical activity:</strong> Due to mobility or other factors</li>
                  <li>• <strong>Poor sleep:</strong> Disrupts hunger hormones</li>
                  <li>• <strong>High stress levels:</strong> Increases cortisol and appetite</li>
                </ul>
              </Card>
            </div>

            <h2 id="comparing-tirzepatide" className="text-3xl font-bold mt-12 mb-6">How Semaglutide Results Compare to Tirzepatide</h2>
            
            <p>
              For context, here's how semaglutide before and after results compare to <InternalLink to="/blog/tirzepatide-vs-semaglutide-2025-updates">tirzepatide</InternalLink>:
            </p>

            <Card className="p-6 my-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Semaglutide (STEP Trials)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Average weight loss: 15-17%</li>
                    <li>• ~50% lose ≥15% body weight</li>
                    <li>• ~32% lose ≥20% body weight</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tirzepatide (SURMOUNT Trials)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Average weight loss: 20-22%</li>
                    <li>• ~70% lose ≥15% body weight</li>
                    <li>• ~57% lose ≥20% body weight</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                If you're not seeing expected results on semaglutide, <InternalLink to="/blog/switch-semaglutide-tirzepatide-safely">switching to tirzepatide</InternalLink> may be an option to discuss with your provider.
              </p>
            </Card>

            <h2 id="beyond-the-scale" className="text-3xl font-bold mt-12 mb-6">Beyond Weight Loss: Other Changes to Expect</h2>
            
            <p>
              The before and after transformation extends beyond the number on the scale. Many patients experience:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="p-4">
                <h4 className="font-semibold mb-2">Health Improvements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lower blood pressure</li>
                  <li>• Improved blood sugar</li>
                  <li>• Better cholesterol levels</li>
                  <li>• Reduced joint pain</li>
                  <li>• Improved fatty liver markers</li>
                </ul>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold mb-2">Quality of Life</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Increased energy</li>
                  <li>• Better sleep quality</li>
                  <li>• Improved mobility</li>
                  <li>• Higher self-confidence</li>
                  <li>• Reduced "food noise"</li>
                </ul>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold mb-2">Relationship with Food</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Reduced cravings</li>
                  <li>• Better portion control</li>
                  <li>• Less emotional eating</li>
                  <li>• More mindful choices</li>
                  <li>• Fewer obsessive thoughts</li>
                </ul>
              </Card>
            </div>

            <h2 id="maintaining-results" className="text-3xl font-bold mt-12 mb-6">Maintaining Your Results Long-Term</h2>
            
            <p>
              A crucial consideration for any semaglutide before and after story is what happens next. Research shows that:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Continued treatment:</strong> Most patients maintain their weight loss while on semaglutide</li>
              <li><strong>After stopping:</strong> Without intervention, most patients regain about 2/3 of lost weight within a year</li>
              <li><strong>Lifestyle matters:</strong> Those who establish healthy habits during treatment have better long-term outcomes</li>
              <li><strong>Some patients may need indefinite treatment:</strong> Like other chronic conditions, obesity may require ongoing medication</li>
            </ul>

            <Card className="p-6 my-6 border-l-4 border-l-primary">
              <h4 className="font-semibold text-lg mb-3">Keys to Lasting Success</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Build sustainable habits while on medication</strong> — don't rely solely on appetite suppression</li>
                <li>• <strong>Establish a regular exercise routine</strong> — focus on both cardio and strength training</li>
                <li>• <strong>Learn proper nutrition</strong> — work with a dietitian if possible</li>
                <li>• <strong>Plan for the long term</strong> — discuss maintenance strategies with your provider</li>
                <li>• <strong>Address emotional eating</strong> — consider therapy or support groups</li>
              </ul>
            </Card>

            <h2 id="setting-realistic-expectations" className="text-3xl font-bold mt-12 mb-6">Setting Realistic Expectations</h2>
            
            <p>
              While semaglutide results can be life-changing, it's important to approach treatment with realistic expectations:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Not everyone responds equally:</strong> About 10-15% of patients are "non-responders"</li>
              <li><strong>Results take time:</strong> Maximum benefits typically take 12-16 months</li>
              <li><strong>The first month may feel slow:</strong> Patience during dose escalation is key</li>
              <li><strong>Side effects are part of the journey:</strong> Most improve with time</li>
              <li><strong>It's not a quick fix:</strong> Sustainable change requires lifestyle integration</li>
            </ul>

            <h2 id="conclusion" className="text-3xl font-bold mt-12 mb-6">The Bottom Line on Semaglutide Before and After</h2>
            
            <p>
              Semaglutide offers the potential for significant, life-changing weight loss—with clinical trial data showing average losses of 15-17% of body weight and some patients losing 20% or more. The transformation typically unfolds over 12-16 months, with the most dramatic changes occurring between months 3 and 9.
            </p>

            <p>
              Your personal before and after story will depend on factors including starting weight, dose tolerance, lifestyle factors, and genetic response to the medication. But for the majority of patients, semaglutide provides a powerful tool for achieving meaningful weight loss and improved health outcomes.
            </p>

            <p>
              The key to success is patience, consistency, and working closely with your healthcare provider to optimize your treatment plan. With the right approach, semaglutide can be the catalyst for a genuine transformation in your health and quality of life.
            </p>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Transformation?</h3>
              <p className="text-muted-foreground mb-6">Get personalized medical guidance and begin your weight loss journey with semaglutide.</p>
              <Link to="/get-started">
                <Button size="lg" className="text-lg px-8">Get Started Today <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
            </div>
          </div>

          <CitationList citations={citations} />
          
          <AuthorBio 
            name="Dr. Jennifer Collins"
            credentials="MD, Board-Certified in Obesity Medicine"
            bio="Dr. Collins has specialized in medical weight management for over 15 years. She has helped thousands of patients achieve sustainable weight loss through evidence-based treatments including GLP-1 therapies."
          />

          {clusterNav && (
            <TopicClusterNav
              hubPage={clusterNav.hubPage}
              relatedArticles={clusterNav.relatedInCluster}
              topic="Semaglutide Results"
            />
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SemaglutideBeforeAfterResults;
