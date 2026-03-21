import { Helmet } from "@/compat/react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { BlogArticleSchema } from "@/components/blog/BlogArticleSchema";
import { BlogFAQSchema } from "@/components/blog/BlogFAQSchema";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import ogImage from "@/assets/og/semaglutide-results-timeline.jpg";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideResultsTimeline = () => {
  const publishDate = "2025-10-08";
  const modifiedDate = getModifiedDate('semaglutide-results-timeline', publishDate);
  const clusterNav = getClusterNavigation('semaglutide-results-timeline');
  
  const qaData = [
    {
      question: "How fast do you see results on semaglutide?",
      answer: "Most people notice reduced appetite within 2-3 days. Visible weight loss typically starts in week 3-4 (2-4 pounds). Significant results appear by month 3 (10-15 pounds total). Peak weight loss occurs around month 9-12 (25-40+ pounds, 10-15% body weight)."
    },
    {
      question: "What is the typical weight loss timeline on semaglutide?",
      answer: "Week 1-2: 0-2 lbs; Week 3-4: 2-4 lbs total; Month 2: 4-8 lbs total (1-2 lbs/week); Month 3: 10-15 lbs; Month 4-6: 15-25 lbs (5-8% body weight); Month 7-12: 25-40+ lbs (10-15% body weight). Individual results vary based on starting weight, diet, and exercise."
    },
    {
      question: "When does semaglutide start working for weight loss?",
      answer: "Semaglutide begins suppressing appetite within 2-3 days of first injection. Measurable weight loss starts around week 3-4. Weight loss accelerates after dose increases at months 2-3. Maximum effectiveness is reached at maintenance dose (1.7mg or 2.4mg) around month 4-5."
    },
    {
      question: "How much weight can you lose in 3 months on semaglutide?",
      answer: "Average weight loss in 3 months is 10-15 pounds (about 5-7% of body weight). For a 200 lb person, expect 10-14 lbs. Factors affecting results include starting weight (higher BMI = more loss), diet adherence, exercise routine, and metabolic conditions."
    },
    {
      question: "What happens after 6 months on semaglutide?",
      answer: "After 6 months, average weight loss is 10-12% of body weight (20-24 lbs for a 200 lb person). Weight loss continues but may slow. You'll typically be at or near maintenance dose (1.7-2.4mg). Focus shifts to sustaining weight loss and building long-term healthy habits."
    }
  ];
  const faqs = [
    {
      question: "When will I see results on semaglutide?",
      answer: "Most people notice reduced appetite within days. Visible weight loss typically starts in week 3-4, with significant results by month 3-6."
    },
    {
      question: "How much weight can I lose in the first month?",
      answer: "Average first-month weight loss is 4-8 pounds. Some lose more, others less depending on starting weight, diet, and exercise."
    },
    {
      question: "Does everyone lose the same amount of weight?",
      answer: "No, results vary significantly. Clinical trials show average 15% total body weight loss, but range is typically 10-20% over 12+ months."
    }
  ];

  const relatedArticles = [
    {
      title: "Semaglutide Weight Loss Results: What to Expect",
      url: "/blog/semaglutide-weight-loss-results",
      excerpt: "Comprehensive guide to average weight loss and factors affecting outcomes.",
      category: "Results"
    },
    {
      title: "First Month on Semaglutide: What to Expect",
      url: "/blog/semaglutide-first-month",
      excerpt: "Complete guide to your first month including side effects and tips.",
      category: "Guide"
    },
    {
      title: "Semaglutide Clinical Results: What the Research Shows",
      url: "/blog/semaglutide-clinical-results",
      excerpt: "Evidence-based overview of clinical trial data and long-term efficacy.",
      category: "Science"
    }
  ];

  return (
    <>
      <QAPageSchema 
        questions={qaData}
        mainEntityName="Semaglutide Results Timeline"
      />
      <Helmet>
        <title>Semaglutide Results Timeline: Week by Week Guide | Trimi</title>
        <meta name="description" content="See what results to expect each week on semaglutide. Quick timeline from week 1 to month 6 with average weight loss." />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-results-timeline" />
        <meta property="og:title" content="Semaglutide Results Timeline: Week by Week Guide" />
        <meta property="og:description" content="See what results to expect each week on semaglutide. Quick timeline from week 1 to month 6 with average weight loss." />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-results-timeline" />
        <meta property="og:image" content={`https://trytrimi.com${ogImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <BlogArticleSchema
        title="Semaglutide Results Timeline: Week by Week Guide"
        description="See what results to expect each week on semaglutide."
        date="2025-10-08"
        image={ogImage}
        url="/blog/semaglutide-results-timeline"
        category="Results"
        readTime="4 min"
      />

      <BlogFAQSchema faqs={faqs} />

      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb 
              category="Results"
              title="Semaglutide Results Timeline"
              url="/blog/semaglutide-results-timeline"
            />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Semaglutide Results Timeline: Week by Week Guide
              </h1>
              <LastUpdated 
                publishDate={publishDate}
                modifiedDate={modifiedDate}
              />
            </header>

            <MedicalReview 
              reviewerName="Dr. Michael Chen"
              credentials="MD, Board Certified in Obesity Medicine"
              specialty="Weight Management"
              reviewDate={modifiedDate}
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                Wondering when you'll see results on semaglutide? Here's a realistic week-by-week timeline based on clinical data and patient experiences.
              </p>

              <h2>Week 1-2: Initial Effects</h2>
              <p><strong>What to expect:</strong></p>
              <ul>
                <li><strong>Appetite:</strong> Noticeably reduced within 2-3 days</li>
                <li><strong>Weight loss:</strong> 0-2 pounds (mostly water weight)</li>
                <li><strong>Side effects:</strong> Mild nausea possible</li>
                <li><strong>Energy:</strong> May feel slightly tired as body adjusts</li>
              </ul>
              <p><strong>Dose:</strong> 0.25mg weekly (starting dose)</p>

              <h2>Week 3-4: Early Weight Loss</h2>
              <p><strong>What to expect:</strong></p>
              <ul>
                <li><strong>Weight loss:</strong> 2-4 pounds total</li>
                <li><strong>Appetite:</strong> Consistently lower, smaller portions satisfying</li>
                <li><strong>Cravings:</strong> Reduced, especially for sweets and fatty foods</li>
                <li><strong>Side effects:</strong> Usually minimal at this dose</li>
              </ul>
              <p><strong>Dose:</strong> Still 0.25mg (dose increases at month 2)</p>

              <h2>Month 2: Dose Increase</h2>
              <p><strong>What to expect:</strong></p>
              <ul>
                <li><strong>Weight loss:</strong> 4-8 pounds total (1-2 lbs/week)</li>
                <li><strong>Appetite:</strong> Further reduced with dose increase</li>
                <li><strong>Clothes:</strong> Noticing looser fit</li>
                <li><strong>Side effects:</strong> May return briefly with dose increase</li>
              </ul>
              <p><strong>Dose:</strong> Increase to 0.5mg weekly</p>

              <h2>Month 3: Noticeable Changes</h2>
              <p><strong>What to expect:</strong></p>
              <ul>
                <li><strong>Weight loss:</strong> 10-15 pounds total</li>
                <li><strong>Visible changes:</strong> Face, waist, and overall body composition</li>
                <li><strong>Energy:</strong> Often improved as weight drops</li>
                <li><strong>Blood markers:</strong> Blood sugar and blood pressure improving</li>
              </ul>
              <p><strong>Dose:</strong> May stay at 0.5mg or increase to 1mg</p>

              <h2>Month 4-6: Steady Progress</h2>
              <p><strong>What to expect:</strong></p>
              <ul>
                <li><strong>Weight loss:</strong> 15-25 pounds total (5-8% body weight)</li>
                <li><strong>Pattern:</strong> Consistent 1-2 lbs loss per week</li>
                <li><strong>Habits:</strong> New eating patterns feel natural</li>
                <li><strong>Others notice:</strong> Friends and family commenting on changes</li>
              </ul>
              <p><strong>Dose:</strong> Typically 1mg, sometimes increased to 1.7mg</p>

              <h2>Month 7-12: Maximum Results</h2>
              <p><strong>What to expect:</strong></p>
              <ul>
                <li><strong>Weight loss:</strong> 25-40+ pounds total (10-15% body weight)</li>
                <li><strong>Peak loss:</strong> Usually around month 9-12</li>
                <li><strong>Plateau periods:</strong> Normal, don't get discouraged</li>
                <li><strong>Maintenance:</strong> Transitioning to weight maintenance phase</li>
              </ul>
              <p><strong>Dose:</strong> Maintenance dose (1.7mg or 2.4mg weekly)</p>

              <h2>Factors Affecting Your Timeline</h2>
              <p><strong>Faster results:</strong></p>
              <ul>
                <li>Higher starting weight</li>
                <li>Following lower-calorie diet</li>
                <li>Regular exercise routine</li>
                <li>Good sleep and stress management</li>
              </ul>
              <p><strong>Slower results:</strong></p>
              <ul>
                <li>Lower starting weight</li>
                <li>Metabolic conditions (hypothyroid, PCOS)</li>
                <li>Certain medications</li>
                <li>Sedentary lifestyle</li>
              </ul>

              <h2>Average Total Weight Loss</h2>
              <p>Based on clinical trials:</p>
              <ul>
                <li><strong>6 months:</strong> 10-12% body weight</li>
                <li><strong>12 months:</strong> 15-17% body weight</li>
                <li><strong>18+ months:</strong> Up to 20% body weight</li>
              </ul>
              <p><strong>Example:</strong> 200 lb person typically loses 20-24 lbs by month 6, 30-34 lbs by month 12.</p>

              <div className="bg-primary/5 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-3">Track Your Progress</h3>
                <p className="mb-4">
                  Trimi includes progress tracking, provider support, and medication delivery. Start your journey today.
                </p>
                <a 
                  href="/"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </a>
              </div>

              <h2>Frequently Asked Questions</h2>
              {faqs.map((faq, index) => (
                <div key={index} className="my-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            <RelatedArticles articles={relatedArticles} />
            
            <TopicClusterNav
              pillarPage={clusterNav.pillarPage}
              hubPage={clusterNav.hubPage}
              relatedArticles={clusterNav.relatedInCluster}
              topic="Semaglutide"
            />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SemaglutideResultsTimeline;
