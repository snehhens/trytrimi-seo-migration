import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/semaglutide-dosing-chart.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { InternalLink } from "@/components/blog/InternalLink";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";


const SemaglutideDosingChart = () => {
  const postMeta = getBlogPostMeta("semaglutide-dosing-chart");
  const clusterNav = getClusterNavigation("semaglutide-dosing-chart");
  const publishDate = "2025-10-11";
  const modifiedDate = "2025-12-15";
  const readTime = "10 min";
  
  const sections = [
    { id: "overview", title: "Understanding Semaglutide Titration" },
    { id: "visual-schedule", title: "Complete Visual Dosing Chart" },
    { id: "monthly-progression", title: "Month-by-Month Progression" },
    { id: "dosing-flexibility", title: "Customizing Your Schedule" },
    { id: "tracking-response", title: "Tracking Dose Response" },
    { id: "maintenance-strategy", title: "Finding Your Maintenance Dose" },
    { id: "special-scenarios", title: "Special Dosing Scenarios" }
  ];

  return (
    <>
      <Helmet>
        <title>Semaglutide Dosing Chart & Schedule: Visual 0.25mg to 2.4mg Guide 2025</title>
        <meta name="description" content="Complete semaglutide dosing chart with visual timeline from 0.25mg to 2.4mg. Week-by-week schedule, adjustment guidelines, and personalized dosing strategies for optimal weight loss." />
        <meta name="keywords" content="semaglutide dosing chart, semaglutide schedule, semaglutide titration schedule, ozempic dosing chart, wegovy schedule, semaglutide week by week, semaglutide dose escalation" />
        <meta name="author" content="Trimi Medical Team" />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-dosing-chart" />
        
        <meta property="og:title" content="Semaglutide Dosing Chart: Complete Visual Schedule Guide" />
        <meta property="og:description" content="Visual semaglutide dosing chart with complete week-by-week schedule from 0.25mg to 2.4mg maintenance dose." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-dosing-chart" />
        <meta property="og:image" content={ogImage} />
        <meta property="article:published_time" content={`${publishDate}T09:00:00Z`} />
        <meta property="article:modified_time" content={`${modifiedDate}T09:00:00Z`} />
        <meta property="article:author" content="Trimi Medical Team" />
        <meta property="article:section" content="Medication Guides" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": "Semaglutide Dosing Chart & Schedule: Complete Visual Guide",
            "description": "Complete semaglutide dosing chart with week-by-week schedule and visual timeline",
            "datePublished": `${publishDate}T09:00:00Z`,
            "dateModified": `${modifiedDate}T09:00:00Z`,
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
            },
            "mainEntity": {
              "@type": "MedicalGuideline",
              "name": "Semaglutide Dosing Schedule",
              "guidelineSubject": {
                "@type": "MedicalTherapy",
                "name": "Semaglutide Weight Loss Treatment"
              }
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Follow the Semaglutide Dosing Schedule",
            "description": "Step-by-step guide to semaglutide dose titration",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Begin at Starting Dose",
                "text": "Start with 0.25mg weekly for initial 4 weeks to minimize side effects"
              },
              {
                "@type": "HowToStep",
                "name": "First Dose Increase",
                "text": "Increase to 0.5mg weekly during weeks 5-8 as body adapts"
              },
              {
                "@type": "HowToStep",
                "name": "Progressive Titration",
                "text": "Continue increasing every 4 weeks through 1.0mg and 1.7mg doses"
              },
              {
                "@type": "HowToStep",
                "name": "Maximum Therapeutic Dose",
                "text": "Reach 2.4mg maintenance dose if needed for optimal results"
              },
              {
                "@type": "HowToStep",
                "name": "Find Optimal Dose",
                "text": "Determine your ideal maintenance dose based on results and tolerance"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to reach maximum semaglutide dose?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Following the standard schedule, it takes approximately 16-17 weeks (about 4 months) to reach the maximum 2.4mg dose. The schedule progresses from 0.25mg through 0.5mg, 1.0mg, and 1.7mg, spending 4 weeks minimum at each dose level before advancing."
                }
              },
              {
                "@type": "Question",
                "name": "Can I stay at 1.0mg semaglutide instead of going to 2.4mg?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Approximately 30% of patients find their optimal dose at 1.0mg and achieve excellent weight loss results without advancing further. If you're losing weight steadily with minimal side effects at 1.0mg, staying at that dose is perfectly appropriate and often recommended."
                }
              },
              {
                "@type": "Question",
                "name": "What makes the semaglutide dosing schedule important?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The gradual titration schedule allows your GLP-1 receptors to adapt properly to the medication. Rushing through doses significantly increases side effects like nausea and vomiting, often leading to treatment discontinuation. The 4-week increments were determined through clinical trials to provide the best balance of efficacy and tolerability."
                }
              },
              {
                "@type": "Question",
                "name": "When should I slow down my semaglutide titration schedule?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Extend time at your current dose if side effects persist beyond the first week, if you're achieving excellent results (1-2 lbs weekly), or if you experience dehydration or difficulty maintaining adequate nutrition. Your provider can approve staying at any dose level for 6-8 weeks instead of 4 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if I miss a semaglutide dose?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If fewer than 5 days have passed since your missed dose, take it immediately. If 5 or more days have passed, skip that dose and resume your regular schedule. Never double dose. If you miss multiple consecutive doses, contact your provider as you may need to restart at a lower dose."
                }
              },
              {
                "@type": "Question",
                "name": "How much weight loss can I expect at each semaglutide dose?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At 0.25mg: 2-4 lbs monthly. At 0.5mg: 4-8 lbs monthly. At 1.0mg: 6-10 lbs monthly. At 1.7mg: 6-10 lbs monthly. At 2.4mg maintenance: 1-2 lbs weekly or stabilization if near goal weight. Total average weight loss at 2.4mg over 68 weeks is 15-17% of starting body weight."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best day of the week to take semaglutide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose a day that fits your schedule consistently. Many patients prefer Fridays or Saturdays to manage any side effects over the weekend. The most important factor is maintaining the same day each week for consistent medication levels."
                }
              },
              {
                "@type": "Question",
                "name": "Is compounded semaglutide dosed the same way?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, compounded semaglutide follows the same titration schedule. The difference is measurement method—compounded solutions require manual measurement (ml) rather than fixed-dose pens. Always verify concentration calculations with your provider before administering compounded medication."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <BlogBreadcrumb 
        category="Semaglutide"
        title="Semaglutide Dosing Chart"
        url="/blog/semaglutide-dosing-chart"
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <article className="container max-w-4xl mx-auto px-4 py-12">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Semaglutide Dosing Chart: Complete Week-by-Week Schedule
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {readTime} read
              </span>
            </div>
            
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />

            <MedicalReview 
              reviewerName="Dr. Sarah Chen, MD"
              reviewDate="2025-12-15"
              credentials="Board Certified Endocrinologist"
            />

            <p className="text-xl text-muted-foreground leading-relaxed mt-6">
              Semaglutide's dosing schedule spans four months and five dose levels. This comprehensive chart walks you through each phase, helping you understand when increases happen, what to expect at each dose, and how to determine your ideal maintenance level.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
            <div className="prose prose-lg max-w-none overflow-hidden">
            <section id="overview" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding Semaglutide's Titration Logic</h2>
              <p className="text-muted-foreground leading-relaxed">
                The semaglutide dosing chart isn't arbitrary—it represents years of clinical research determining the safest path to effective weight loss. Think of it as a carefully mapped journey where each stop allows your body to adapt before advancing. Rushing this process doesn't accelerate results; it typically triggers intense side effects that derail treatment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here's the science: your <InternalLink to="/blog/how-semaglutide-works">GLP-1 receptors need time</InternalLink> to adjust to semaglutide's presence. When introduced gradually, these receptors adapt smoothly, leading to sustainable appetite suppression and steady weight loss. Jump too quickly, and those receptors become overwhelmed, triggering the <InternalLink to="/blog/semaglutide-side-effects">severe nausea and digestive distress</InternalLink> that causes many patients to abandon treatment entirely.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The STEP clinical trials—which established semaglutide's efficacy for weight loss—tested multiple titration protocols before settling on this specific schedule. Patients who followed the gradual approach had significantly better adherence rates, meaning they actually completed treatment long enough to see transformative results. Those who tried accelerating the schedule? Most discontinued within the first two months due to intolerable side effects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Understanding this logic helps frame your expectations correctly: the slow ramp-up isn't delaying your success—it's ensuring it. Every week at a lower dose prepares your body for the therapeutic levels that will drive meaningful, sustainable weight loss.
              </p>
            </section>

            <section id="visual-schedule">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Complete Semaglutide Dosing Timeline</h2>
              
              <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 mb-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="mr-3 h-7 w-7 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Standard 16-Week Titration Schedule
                  </h3>
                </div>
                
                <div className="space-y-5">
                  <div className="relative border-l-4 border-primary pl-8 pb-6">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">Weeks 1-4</h4>
                        <p className="text-sm text-muted-foreground">Foundation Phase</p>
                      </div>
                      <span className="text-3xl font-bold text-primary">0.25 mg</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      Starting dose for body acclimation. Minimal therapeutic effect expected. Focus: establishing injection routine and monitoring tolerance. Average weight loss: 2-4 lbs total.
                    </p>
                  </div>

                  <div className="relative border-l-4 border-primary pl-8 pb-6">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">Weeks 5-8</h4>
                        <p className="text-sm text-muted-foreground">Early Therapeutic Phase</p>
                      </div>
                      <span className="text-3xl font-bold text-primary">0.5 mg</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      First therapeutic increase. Noticeable appetite suppression begins for most patients. Weekly weight loss: 1-2 lbs typical. Side effects most common 2-3 days post-injection.
                    </p>
                  </div>

                  <div className="relative border-l-4 border-primary pl-8 pb-6">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">Weeks 9-12</h4>
                        <p className="text-sm text-muted-foreground">Primary Therapeutic Phase</p>
                      </div>
                      <span className="text-3xl font-bold text-primary">1.0 mg</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      Strong appetite control established. Weight loss often accelerates to 2-3 lbs weekly. About 30% of patients find their optimal maintenance dose here. Significant changes in food preferences common.
                    </p>
                  </div>

                  <div className="relative border-l-4 border-primary pl-8 pb-6">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">Weeks 13-16</h4>
                        <p className="text-sm text-muted-foreground">Higher Therapeutic Dose</p>
                      </div>
                      <span className="text-3xl font-bold text-primary">1.7 mg</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      Enhanced therapeutic effect for patients needing additional support. Consistent 2-3 lb weekly weight loss. Many patients establish long-term maintenance here rather than advancing to 2.4mg.
                    </p>
                  </div>

                  <div className="relative border-l-4 border-primary pl-8">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">Week 17+</h4>
                        <p className="text-sm text-muted-foreground">Maximum Maintenance Dose</p>
                      </div>
                      <span className="text-3xl font-bold text-primary">2.4 mg</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      Maximum approved dose. Clinical trials demonstrated average 15-17% total body weight reduction over 68 weeks. Represents peak therapeutic effect for chronic weight management.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" />
                  Critical Schedule Reminders
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Each dose level requires minimum 4 weeks before advancing (no shortcuts)</li>
                  <li>• Reaching maximum 2.4mg dose is not mandatory—find your optimal level</li>
                  <li>• You can pause progression at any dose that delivers good results with minimal side effects</li>
                  <li>• Provider approval required for any schedule modifications</li>
                  <li>• Side effects typically peak 48-72 hours after dose increases</li>
                </ul>
              </Card>
            </section>

            <section id="monthly-progression">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Month-by-Month: What Really Happens</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Month 1: Getting Started (0.25mg)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your <InternalLink to="/blog/semaglutide-first-month">first month on semaglutide</InternalLink> centers on adaptation rather than dramatic weight loss. At 0.25mg, you're essentially teaching your GLP-1 receptors to recognize the medication. This dose is intentionally subtherapeutic—designed to prime your system while minimizing side effects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>What to expect realistically:</strong> Most patients notice very little at first, and that's completely normal. Some experience subtle fullness after meals, perhaps eating slightly less without conscious effort. Others feel virtually no difference this first month. Don't let that discourage you—the adaptation happening internally is setting the stage for everything that follows.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Common experiences:</strong> Mild nausea affecting about 15-20% of patients (usually resolves within 48-72 hours after each injection). Slight decrease in appetite beginning week 2-3. Minimal to no side effects for roughly 70-80% of patients. Weight loss averaging 2-4 pounds total for the month—modest but meaningful.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Focus this month:</strong> Establish your weekly injection routine. Choose a consistent day and time. Master proper <InternalLink to="/blog/semaglutide-injection-guide">injection technique and site rotation</InternalLink>. Begin tracking weight, side effects, and appetite changes to establish your personal baseline for comparison later.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Month 2: Entering Therapeutic Territory (0.5mg)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The jump to 0.5mg represents your first significant dose increase—and this is when most patients truly feel the medication working. Your GLP-1 receptors have had 4 weeks to adapt, and now they're receiving a therapeutic signal strong enough to produce noticeable effects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>The reality check:</strong> Week 5 (your first 0.5mg injection) often brings temporary side effect resurgence. Expect possible nausea for 2-3 days—uncomfortable but manageable for most patients. By week 6, these effects typically diminish significantly as your receptors adapt to the higher dose level.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Weight loss acceleration:</strong> Most patients begin losing 1-2 pounds weekly at this dose. That translates to 4-8 pounds for the month—often enough that clothes start fitting differently. Your appetite suppression becomes more obvious: portions that satisfied you before now seem too large, and the constant background hunger that characterized your pre-treatment life fades noticeably.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Metabolic shifts:</strong> Beyond appetite changes, many patients report altered food preferences. Rich, heavy foods lose their appeal. High-fat meals that once sounded delicious now cause mild queasiness or simply don't interest you. These changes aren't forced—they happen naturally as semaglutide modulates your brain's reward pathways related to food.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Month 3: The Sweet Spot (1.0mg)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Welcome to what many consider semaglutide's primary therapeutic dose. By month three, your body has had 8 weeks adapting to the medication. The increase to 1.0mg typically triggers less dramatic side effects than the 0.5mg jump because your GLP-1 receptors have developed tolerance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Peak weight loss velocity:</strong> Many patients experience their fastest weight loss during this phase—2-3 pounds weekly is common. That's 8-12 pounds for the month. You're now 12 weeks into treatment with potentially 15-20 pounds lost total. Physical changes become undeniable: face slimming, waistline shrinking, overall body composition visibly shifting.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Appetite control mastery:</strong> At 1.0mg, most patients describe feeling completely in control around food for the first time in years. The medication doesn't eliminate hunger entirely—you still experience physical hunger signals when your body needs nutrition—but the obsessive food thoughts, constant cravings, and emotional eating impulses diminish dramatically.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Critical decision point:</strong> About 30% of patients in clinical trials found their optimal maintenance dose right here at 1.0mg. If you're losing weight steadily, tolerating the medication well, and approaching your goals, staying at 1.0mg makes perfect sense. There's no requirement to advance further—success is about finding what works for your body.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Month 4: Higher Therapeutic Level (1.7mg)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For patients who advance to 1.7mg, this phase typically delivers enhanced appetite suppression and continued robust weight loss. Side effects at this level vary—some patients tolerate it as easily as 1.0mg, while others experience increased nausea or fatigue that requires management strategies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Performance at this level:</strong> Patients who maintain 1.7mg long-term typically achieve 12-15% total body weight reduction over 9-12 months. For someone starting at 200 pounds, that represents 24-30 pounds lost—significant improvement in health markers and quality of life.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>The decision point:</strong> After 4 weeks at 1.7mg (around week 16-17 of treatment), you and your provider will evaluate whether advancing to 2.4mg makes sense. Key considerations include: Are you still losing 1-2+ pounds weekly? How tolerable are any side effects? Have you reached or approached your goal weight? Is the current dose effectively controlling appetite?
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Maintenance consideration:</strong> Many patients establish their long-term maintenance dose at 1.7mg rather than advancing to 2.4mg. If you're achieving goals, tolerating the medication well, and continuing to lose or maintain weight, remaining at 1.7mg makes perfect sense. The maximum dose isn't mandatory—it's simply available for those who need it.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Month 5+: Maximum Maintenance (2.4mg)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The 2.4mg dose represents semaglutide's maximum approved strength for weight management. Clinical trials at this level produced the headline results—average weight loss of 15-17% over 68 weeks, with some patients losing over 20% of their starting body weight.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Who benefits most:</strong> Patients with significant weight to lose (BMI 35+) who tolerated lower doses well and continue needing robust appetite suppression. Those with type 2 diabetes alongside obesity, as higher doses provide superior glycemic control. Individuals who plateaued at 1.7mg but haven't reached their health goals.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Long-term expectations:</strong> At 2.4mg maintenance, most patients transition from rapid weight loss to steady, sustainable reduction. Expect 1-2 pounds weekly if you have significant weight remaining to lose, or weight stabilization if you've approached your goal. The medication continues providing powerful appetite control—the benefit is sustained, not diminishing.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Staying power:</strong> Research indicates that patients who reach and maintain 2.4mg have excellent long-term adherence. The initial titration difficulties have long passed, side effects typically remain minimal at this stage, and the dramatic results serve as powerful motivation to continue treatment.
                  </p>
                </div>
              </div>
            </section>

            <section id="dosing-flexibility">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Customizing Your Dosing Schedule</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The standard 4-weeks-per-dose schedule works well for most patients, but individualization matters. Here's when and how to modify your progression:
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">When Slower Titration Makes Sense</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Persistent Side Effects</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        If nausea, vomiting, or GI issues continue beyond the first week after a dose increase, extending that phase to 6-8 weeks allows more adaptation time. No point advancing if you're struggling to maintain adequate nutrition.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Implementation:</strong> Simply stay at your current dose for the additional weeks. Your next injection continues at the same level until side effects resolve. Then wait 4 more weeks at that dose before considering advancement.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Older Adults (65+)</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Older patients often benefit from extending each dose phase to 6 weeks. Age-related changes in metabolism, kidney function, and medication sensitivity mean a more conservative approach often produces better outcomes with fewer complications.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">History of GI Sensitivity</h4>
                      <p className="text-muted-foreground text-sm">
                        Patients with pre-existing conditions like IBS, gastritis, or GERD sometimes require longer acclimation periods. If you've always had a sensitive stomach, discuss a modified schedule with your provider from the start.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Excellent Results at Current Dose</h4>
                      <p className="text-muted-foreground text-sm">
                        Losing 1-2+ pounds weekly with minimal side effects at your current dose? There's no rush to increase. Many patients achieve their goals without reaching maximum dosing. The medication isn't more effective just because you're on a higher dose—it's about finding your optimal therapeutic level.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">When Faster Progression Might Work</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Faster titration is rare but occasionally appropriate:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>
                      <strong>Exceptional tolerance:</strong> If you experience absolutely zero side effects through multiple dose increases, your provider might consider 3-week phases instead of 4-week. This remains uncommon—most patients do better with standard timing even when tolerating the medication well.
                    </li>
                    <li>
                      <strong>Previous GLP-1 experience:</strong> Patients transitioning from other GLP-1 medications (liraglutide, tirzepatide) sometimes accelerate through early semaglutide doses since their GLP-1 receptors are already adapted.
                    </li>
                    <li>
                      <strong>Medical urgency:</strong> In cases where rapid weight loss is medically necessary (pre-surgical requirements, severe diabetes complications), providers may adjust the schedule. This requires careful medical supervision.
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    The Golden Rule of Dose Advancement
                  </h3>
                  <p className="text-muted-foreground">
                    Only advance when you're confident the current dose is fully tolerated. If you're still experiencing bothersome side effects, adding more medication only makes them worse. Patience during titration translates to better long-term adherence—and adherence is what drives results. A slower schedule that keeps you on the medication beats a faster one that leads to discontinuation.
                  </p>
                </Card>
              </div>
            </section>

            <section id="tracking-response">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Tracking Your Dose Response</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Monitoring your journey through the dosing schedule helps you and your provider make informed decisions. Here's what to track at each stage:
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Essential Metrics by Phase</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Daily During Dose Increases</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• <strong>Side effect intensity (1-10 scale):</strong> Helps identify patterns and when effects resolve</li>
                      <li>• <strong>Food intake quality:</strong> Ensure you're eating enough despite reduced appetite</li>
                      <li>• <strong>Hydration status:</strong> Especially important with any nausea or vomiting</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Weekly Measurements</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• <strong>Weight:</strong> Same day, same time, same conditions (morning, after bathroom, before eating)</li>
                      <li>• <strong>Current dose and injection date:</strong> Track which dose you're on and when you took it</li>
                      <li>• <strong>Appetite rating (1-10):</strong> How hungry do you feel between meals?</li>
                      <li>• <strong>Energy levels:</strong> Note any patterns related to dose changes</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Monthly Check-ins</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• <strong>Body measurements:</strong> Waist, hips, chest—changes often appear here before the scale moves</li>
                      <li>• <strong>Progress photos:</strong> Front, side, and back views in similar lighting</li>
                      <li>• <strong>Overall wellbeing:</strong> Sleep quality, mood, physical stamina</li>
                      <li>• <strong>Side effect trends:</strong> Are they improving, stable, or worsening?</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Dose Increase Checklist</h4>
                    <p className="text-muted-foreground text-sm mb-2">Before each dose increase, ask yourself:</p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>□ Have I completed at least 4 weeks at current dose?</li>
                      <li>□ Are side effects minimal or resolved?</li>
                      <li>□ Am I maintaining adequate nutrition and hydration?</li>
                      <li>□ Is my weight loss steady (at least 1 lb per week)?</li>
                      <li>□ Have I discussed the increase with my provider?</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">What Your Tracking Reveals</h4>
                <p className="text-muted-foreground mb-3">
                  Consistent tracking helps identify your optimal dose level. Signs you've found it include:
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Steady weight loss of 1-2 pounds weekly</li>
                  <li>• Minimal or no persistent side effects</li>
                  <li>• Good appetite control without feeling deprived</li>
                  <li>• Stable energy and mood</li>
                  <li>• Ability to maintain adequate nutrition and hydration</li>
                </ul>
                <p className="text-muted-foreground mt-3 text-sm">
                  If you're hitting all these markers, you've likely found your therapeutic sweet spot—whether that's 1.0mg, 1.7mg, or 2.4mg.
                </p>
              </div>
            </section>

            <section id="maintenance-strategy">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Finding Your Maintenance Dose</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Not everyone needs to reach 2.4mg. Understanding when you've found your optimal dose prevents unnecessary increases and potential side effects.
              </p>

              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Optimal Dose Indicators</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                        Stay at Current Dose If:
                      </h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Losing 1-2+ pounds weekly consistently</li>
                        <li>• Side effects are minimal or absent</li>
                        <li>• Appetite control feels natural</li>
                        <li>• Energy levels remain stable</li>
                        <li>• Approaching or at goal weight</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                        Consider Advancing If:
                      </h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Weight loss has plateaued for 4+ weeks</li>
                        <li>• Appetite suppression weakening</li>
                        <li>• Still significant weight to lose</li>
                        <li>• Tolerating current dose very well</li>
                        <li>• Provider recommends advancement</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Dose Distribution in Clinical Trials</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Understanding where patients typically settle helps set realistic expectations:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-secondary/10 rounded">
                      <span className="font-medium text-foreground">1.0mg maintenance</span>
                      <span className="text-primary font-semibold">~30% of patients</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary/10 rounded">
                      <span className="font-medium text-foreground">1.7mg maintenance</span>
                      <span className="text-primary font-semibold">~25% of patients</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary/10 rounded">
                      <span className="font-medium text-foreground">2.4mg maintenance</span>
                      <span className="text-primary font-semibold">~45% of patients</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    More than half of successful patients found their optimal dose below the maximum. The goal isn't reaching 2.4mg—it's finding the dose that works for your body with acceptable side effects.
                  </p>
                </Card>
              </div>
            </section>

            <section id="special-scenarios">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Special Dosing Scenarios</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Restarting After a Break</h3>
                  <p className="text-muted-foreground mb-4">
                    Life happens, and sometimes semaglutide treatment gets interrupted. How you restart depends on how long you've been off:
                  </p>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div className="p-3 bg-secondary/5 rounded">
                      <h4 className="font-semibold text-foreground mb-1">Missed 1-2 weeks (up to 14 days)</h4>
                      <p>Resume at your previous dose. Monitor for side effects—your tolerance may have decreased slightly. If nausea returns significantly, drop back one dose level for a week.</p>
                    </div>
                    <div className="p-3 bg-secondary/5 rounded">
                      <h4 className="font-semibold text-foreground mb-1">Missed 3-4 weeks (15-28 days)</h4>
                      <p>Drop back one dose level (e.g., from 1.0mg to 0.5mg) for 1-2 weeks before returning to your previous dose. Your GLP-1 receptors have partially reset and need time to re-adapt.</p>
                    </div>
                    <div className="p-3 bg-secondary/5 rounded">
                      <h4 className="font-semibold text-foreground mb-1">Missed 5+ weeks (29+ days)</h4>
                      <p>Full re-titration from 0.25mg recommended. However, you can progress through doses faster (2-3 weeks per level instead of 4) since your body has prior experience with the medication.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Switching from Tirzepatide</h3>
                  <p className="text-muted-foreground mb-4">
                    Patients transitioning from tirzepatide to semaglutide need careful dose mapping. Your starting dose depends on your tirzepatide level:
                  </p>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <div className="flex justify-between p-2 bg-background rounded">
                      <span><strong>From tirzepatide 3mg</strong></span>
                      <span>Start semaglutide at 0.25mg or 0.5mg</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background rounded">
                      <span><strong>From tirzepatide 6mg</strong></span>
                      <span>Start semaglutide at 0.5mg</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background rounded">
                      <span><strong>From tirzepatide 9mg-11mg</strong></span>
                      <span>Start semaglutide at 1.0mg</span>
                    </div>
                    <div className="flex justify-between p-2 bg-background rounded">
                      <span><strong>From tirzepatide 13.5mg</strong></span>
                      <span>Start semaglutide at 1.7mg</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    Note: Tirzepatide activates both GIP and GLP-1 receptors, while semaglutide only targets GLP-1. This means appetite suppression effects may feel different, and some patients require higher relative semaglutide doses to achieve similar results.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Compounded Semaglutide Dosing</h3>
                  <p className="text-muted-foreground mb-4">
                    Compounded semaglutide typically comes in vials requiring manual measurement rather than fixed-dose pens. Common concentrations and their corresponding volumes:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-2 font-semibold text-foreground">Target Dose</th>
                          <th className="text-left p-2 font-semibold text-foreground">5mg/ml Solution</th>
                          <th className="text-left p-2 font-semibold text-foreground">10mg/ml Solution</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border/50">
                          <td className="p-2">0.25mg</td>
                          <td className="p-2 font-mono">0.05 ml</td>
                          <td className="p-2 font-mono">0.025 ml</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">0.5mg</td>
                          <td className="p-2 font-mono">0.10 ml</td>
                          <td className="p-2 font-mono">0.05 ml</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">1.0mg</td>
                          <td className="p-2 font-mono">0.20 ml</td>
                          <td className="p-2 font-mono">0.10 ml</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">1.7mg</td>
                          <td className="p-2 font-mono">0.34 ml</td>
                          <td className="p-2 font-mono">0.17 ml</td>
                        </tr>
                        <tr>
                          <td className="p-2">2.4mg</td>
                          <td className="p-2 font-mono">0.48 ml</td>
                          <td className="p-2 font-mono">0.24 ml</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    <strong>Critical safety note:</strong> Always verify concentration and dosing calculations with your provider before administering compounded medication. Measurement errors with concentrated solutions can result in serious underdosing or overdosing.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Changing Your Injection Day</h3>
                  <p className="text-muted-foreground mb-4">
                    Need to change your weekly injection day? You can, with one important rule: maintain at least 48-72 hours (2-3 days) between doses.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Example:</strong> If you normally inject Mondays but want to switch to Fridays, you have two options: (1) Take your Monday injection, then wait until Friday (4 days) for the next one and continue Fridays; or (2) Wait a full week plus a few days, injecting on the new Friday directly. Both approaches work—just never take two doses within 48 hours of each other.
                  </p>
                </Card>

                <Card className="p-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" />
                    When to Contact Your Provider Immediately
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Persistent vomiting preventing food/fluid intake for 24+ hours</li>
                    <li>• Severe abdominal pain, especially if accompanied by fever</li>
                    <li>• Signs of dehydration: dark urine, dizziness, rapid heartbeat</li>
                    <li>• Vision changes or severe headaches</li>
                    <li>• Suspected allergic reaction: rash, itching, difficulty breathing</li>
                    <li>• Suicidal thoughts or severe mood changes</li>
                    <li>• Any symptom that significantly interferes with daily function</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Your Dosing Journey: Final Perspective</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This dosing chart represents months of gradual progression, but those months pass whether you're on semaglutide or not. The difference is that following this schedule gives you a proven path to meaningful, sustainable weight loss backed by some of the strongest clinical evidence in obesity medicine.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Success with semaglutide isn't about speed—it's about finding the approach that works for your body, tolerating the medication well enough to stick with it long-term, and achieving results that meaningfully improve your health and quality of life. Some patients reach those goals at 1.0mg. Others need 2.4mg. Both outcomes represent success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Keep this dosing chart as your reference guide, communicate openly with your healthcare team, track your progress honestly, and trust that the gradual process serves an important purpose. In four to six months, when you're looking back at where you started, you'll understand why patience through this titration schedule made all the difference.
              </p>
            </section>
            </div>

            <aside className="hidden lg:block">
              <TableOfContents />
            </aside>
          </div>

          <SocialShare
            title="Semaglutide Dosing Chart & Schedule Guide"
            url="https://trytrimi.com/blog/semaglutide-dosing-chart"
          />

          <div className="mt-16">
            <PeopleAlsoRead links={getPeopleAlsoRead("semaglutide-dosing-chart")} />
          </div>

          <TopicClusterNav
            topic="Semaglutide"
            pillarPage={clusterNav.pillarPage}
            hubPage={clusterNav.hubPage}
            relatedArticles={clusterNav.relatedInCluster}
          />

          <Card className="mt-12 p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Semaglutide Journey?</h3>
            <p className="text-xl mb-6 text-primary-foreground/90">
              Get personalized dosing plans and expert medical guidance throughout your treatment
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8"
              onClick={() => window.location.href = 'https://app.trytrimi.com/start-online-visit/weight-loss-memberships'}
            >
              Start Your Consultation
            </Button>
          </Card>

          <div className="mt-16">
            <AuthorBio />
          </div>

        </article>
      </main>

      <Footer />
    </>
  );
};

export default SemaglutideDosingChart;
