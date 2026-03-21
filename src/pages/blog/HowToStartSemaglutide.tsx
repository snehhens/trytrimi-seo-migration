import { Helmet } from "@/compat/react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { BlogArticleSchema } from "@/components/blog/BlogArticleSchema";
import { BlogFAQSchema } from "@/components/blog/BlogFAQSchema";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { HowToSchema } from "@/components/seo/HowToSchema";
import ogImage from "@/assets/og/how-to-start-semaglutide.jpg";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";

const HowToStartSemaglutide = () => {
  const postMeta = getBlogPostMeta("how-to-start-semaglutide");
  const publishDate = postMeta?.date || "2025-01-15";
  const modifiedDate = getModifiedDate("how-to-start-semaglutide", publishDate);
  
  const faqs = [
    {
      question: "Can I start semaglutide without seeing a doctor in person?",
      answer: "Yes, many telemedicine services offer online consultations where a licensed doctor can prescribe semaglutide after reviewing your health history and eligibility."
    },
    {
      question: "How long does it take to start semaglutide?",
      answer: "From initial consultation to receiving your first dose typically takes 3-7 days with online services. Traditional doctor visits may take longer."
    },
    {
      question: "Do I need to meet BMI requirements?",
      answer: "Most providers require BMI ≥30, or BMI ≥27 with weight-related health conditions like high blood pressure or diabetes."
    }
  ];

  const relatedArticles = [
    {
      title: "Semaglutide Eligibility: Complete Requirements Guide",
      url: "/blog/semaglutide-eligibility",
      excerpt: "Determine if you qualify for semaglutide treatment.",
      category: "Guide"
    },
    {
      title: "First Month on Semaglutide: What to Expect",
      url: "/blog/semaglutide-first-month",
      excerpt: "Complete guide to your first month on semaglutide.",
      category: "Guide"
    },
    {
      title: "Online Semaglutide Prescription: How to Get Started",
      url: "/blog/online-semaglutide-prescription",
      excerpt: "Step-by-step guide to obtaining semaglutide prescriptions online.",
      category: "Guide"
    }
  ];

  const howToSteps = [
    {
      name: "Check Your Eligibility",
      text: "Confirm you meet BMI requirements (≥30 or ≥27 with conditions) and don't have contraindications like thyroid cancer history or pancreatitis."
    },
    {
      name: "Choose Your Provider",
      text: "Select between online telehealth services ($200-400/month all-inclusive) or traditional doctor visits (may require insurance)."
    },
    {
      name: "Complete Medical Consultation",
      text: "Answer health questionnaire or attend video consultation. Doctor reviews your medical history, current medications, and weight loss goals."
    },
    {
      name: "Receive Your Prescription",
      text: "If approved, prescription is sent to pharmacy (compounding or retail). Medication ships to your home within 3-7 days."
    },
    {
      name: "Start Treatment",
      text: "Begin with lowest dose (0.25mg weekly). Follow injection guide, track side effects, and schedule follow-up appointments for dose adjustments."
    }
  ];

  return (
    <>
      <Helmet>
        <title>How to Start Semaglutide: Quick Beginner's Guide | Trimi</title>
        <meta name="description" content="Simple 5-step guide to starting semaglutide for weight loss. Learn what you need, how to get prescribed, and what to expect." />
        <link rel="canonical" href="https://trytrimi.com/blog/how-to-start-semaglutide" />
        <meta property="og:title" content="How to Start Semaglutide: Quick Beginner's Guide" />
        <meta property="og:description" content="Simple 5-step guide to starting semaglutide for weight loss. Learn what you need, how to get prescribed, and what to expect." />
        <meta property="og:url" content="https://trytrimi.com/blog/how-to-start-semaglutide" />
        <meta property="og:image" content={`https://trytrimi.com${ogImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <BlogArticleSchema
        title="How to Start Semaglutide: Quick Beginner's Guide"
        description="Simple 5-step guide to starting semaglutide for weight loss."
        date="2025-10-09"
        image={ogImage}
        url="/blog/how-to-start-semaglutide"
        category="Guide"
        readTime="3 min"
      />

      <HowToSchema
        name="How to Start Semaglutide for Weight Loss"
        description="Complete step-by-step guide to starting semaglutide treatment"
        steps={howToSteps}
      />

      <BlogFAQSchema faqs={faqs} />

      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb 
              category="Guide"
              title="How to Start Semaglutide"
              url="/blog/how-to-start-semaglutide"
            />

            <header className="mb-8">
              <ContentFreshnessIndicator publishDate={publishDate} lastModified={modifiedDate} />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                How to Start Semaglutide: Quick Beginner's Guide
              </h1>
              <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
              <MedicalReview 
                reviewerName="Dr. Sarah Mitchell" 
                credentials="MD, Endocrinology" 
                reviewDate={modifiedDate} 
                specialty="Weight Management"
              />
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime="2025-10-09">October 9, 2025</time>
                <span>•</span>
                <span>3 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                Starting semaglutide is straightforward when you know the steps. Here's your quick guide to getting started safely.
              </p>

              <h2>Step 1: Check Your Eligibility</h2>
              <p><strong>Requirements:</strong></p>
              <ul>
                <li>BMI ≥30 (obese), OR</li>
                <li>BMI ≥27 with weight-related condition (diabetes, high blood pressure, high cholesterol)</li>
                <li>Age 18+ (some providers require 21+)</li>
              </ul>
              <p><strong>Cannot use if you have:</strong></p>
              <ul>
                <li>Personal/family history of thyroid cancer</li>
                <li>Pancreatitis history</li>
                <li>Pregnant or breastfeeding</li>
              </ul>

              <h2>Step 2: Choose Your Provider</h2>
              <p><strong>Online Telehealth (Fastest):</strong></p>
              <ul>
                <li>Cost: $200-$400/month (includes medication + consultation)</li>
                <li>Timeline: 3-7 days to receive medication</li>
                <li>Best for: Quick start, compounded semaglutide</li>
              </ul>
              <p><strong>Traditional Doctor:</strong></p>
              <ul>
                <li>Cost: Varies with insurance</li>
                <li>Timeline: 1-4 weeks</li>
                <li>Best for: Those with insurance coverage</li>
              </ul>

              <h2>Step 3: Complete Medical Consultation</h2>
              <p><strong>What to expect:</strong></p>
              <ul>
                <li>Health questionnaire (10-15 minutes)</li>
                <li>Current medications list</li>
                <li>Medical history review</li>
                <li>Video consultation (some providers)</li>
                <li>Weight loss goals discussion</li>
              </ul>

              <h2>Step 4: Receive Your Prescription</h2>
              <p><strong>If approved:</strong></p>
              <ul>
                <li>Prescription sent to pharmacy automatically</li>
                <li>Medication ships to your home</li>
                <li>Includes injection supplies and instructions</li>
                <li>Customer support available for questions</li>
              </ul>

              <h2>Step 5: Start Treatment</h2>
              <p><strong>First dose:</strong></p>
              <ul>
                <li>Start with 0.25mg once weekly</li>
                <li>Inject subcutaneously (under skin) in abdomen, thigh, or arm</li>
                <li>Same day each week</li>
                <li>Can take with or without food</li>
              </ul>
              <p><strong>Track progress:</strong></p>
              <ul>
                <li>Weigh yourself weekly</li>
                <li>Note any side effects</li>
                <li>Follow-up in 4 weeks for dose increase</li>
              </ul>

              <h2>What You'll Need</h2>
              <ul>
                <li>Valid ID and basic health information</li>
                <li>Payment method (insurance or credit card)</li>
                <li>Current medications list</li>
                <li>Recent weight and height measurements</li>
              </ul>

              <div className="bg-primary/5 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-3">Start Today with Trimi</h3>
                <p className="mb-4">
                  Get approved in 24 hours. Medication ships free within 3-5 days. All-inclusive pricing at $297/month.
                </p>
                <a 
                  href="/"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Begin Consultation
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

            <TopicClusterNav
              hubPage="/semaglutide-guide"
              topic="Semaglutide"
              relatedArticles={[
                {
                  title: "Semaglutide Dosage Guide",
                  url: "/blog/semaglutide-dosage-guide",
                  excerpt: "Complete dosing schedule and titration guidance."
                },
                {
                  title: "Semaglutide Eligibility",
                  url: "/blog/semaglutide-eligibility",
                  excerpt: "Requirements and qualifications for semaglutide treatment."
                },
                {
                  title: "Semaglutide First Month",
                  url: "/blog/semaglutide-first-month",
                  excerpt: "What to expect during your first 4 weeks on treatment."
                },
                {
                  title: "Online Semaglutide Prescription",
                  url: "/blog/online-semaglutide-prescription",
                  excerpt: "Getting your prescription through telehealth platforms."
                }
              ]}
            />

            <RelatedArticles articles={relatedArticles} />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HowToStartSemaglutide;
