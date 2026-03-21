import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";
import ogImage from "@/assets/og/semaglutide-eligibility.jpg";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { BlogFAQSchema } from "@/components/blog/BlogFAQSchema";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideEligibility = () => {
  const postMeta = getBlogPostMeta("semaglutide-eligibility");
  const publishDate = postMeta?.date || "2025-01-10";
  const modifiedDate = getModifiedDate("semaglutide-eligibility", publishDate);
  const clusterNav = getClusterNavigation("semaglutide-eligibility");
  
  const faqs = [
    { question: "What BMI do I need to qualify for semaglutide?", answer: "You typically need a BMI of 30 or higher, or 27 or higher with at least one weight-related health condition such as diabetes, high blood pressure, or sleep apnea." },
    { question: "Can I get semaglutide if I don't have diabetes?", answer: "Yes. Wegovy (semaglutide 2.4mg) is specifically approved for weight loss in people without diabetes who meet the BMI requirements." },
    { question: "What are the main disqualifying factors?", answer: "Personal or family history of medullary thyroid cancer, multiple endocrine neoplasia syndrome type 2, history of pancreatitis, severe gastroparesis, or pregnancy/breastfeeding." }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Who Qualifies for Semaglutide? Eligibility Requirements 2025 | Trimi</title>
        <meta 
          name="description" 
          content="Find out if you qualify for semaglutide treatment. Learn about BMI requirements, medical conditions, and eligibility criteria for weight loss prescriptions." 
        />
        <meta 
          name="keywords" 
          content="semaglutide eligibility, who qualifies for semaglutide, semaglutide requirements, ozempic qualifications, wegovy eligibility, BMI requirements" 
        />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-eligibility" />
        <meta property="og:title" content="Who Qualifies for Semaglutide? Eligibility Requirements 2025" />
        <meta property="og:description" content="Find out if you qualify for semaglutide treatment. Learn about BMI requirements and eligibility criteria." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-eligibility" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <BlogFAQSchema faqs={faqs} />
      
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <BlogBreadcrumb 
            category="Semaglutide"
            title="Who Qualifies for Semaglutide?"
            url="/blog/semaglutide-eligibility"
          />
          
          <header className="mb-8">
            <ContentFreshnessIndicator publishDate={publishDate} lastModified={modifiedDate} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Who Qualifies for Semaglutide? Eligibility Requirements 2025
            </h1>
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
            <MedicalReview 
              reviewerName="Dr. Sarah Mitchell" 
              credentials="MD, Endocrinology" 
              reviewDate={modifiedDate} 
              specialty="Weight Management"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>The Basic Qualification Criteria</h2>
            <p>
              Let's cut straight to it. The FDA-approved guidelines for semaglutide (marketed as Wegovy for weight loss) specify eligibility based on these primary factors:
            </p>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                You Typically Qualify If:
              </h3>
              <ul className="space-y-3">
                <li><strong>BMI ≥ 30:</strong> Obesity category, no additional conditions required</li>
                <li><strong>BMI ≥ 27:</strong> Overweight with at least one weight-related health condition (type 2 diabetes, high blood pressure, high cholesterol, sleep apnea, etc.)</li>
                <li><strong>Age 18+:</strong> Adult use is approved (pediatric use 12+ for certain indications)</li>
                <li><strong>Commitment to lifestyle changes:</strong> Willingness to follow diet and exercise recommendations</li>
              </ul>
            </Card>

            <h2>Understanding the BMI Requirements</h2>
            <p>
              BMI (Body Mass Index) is the primary metric used, though it's not perfect. Here's how it breaks down:
            </p>
            <ul>
              <li><strong>BMI 25-26.9:</strong> Generally not eligible unless exceptional circumstances</li>
              <li><strong>BMI 27-29.9:</strong> Eligible with weight-related comorbidities</li>
              <li><strong>BMI 30-34.9:</strong> Class I obesity—typically eligible</li>
              <li><strong>BMI 35-39.9:</strong> Class II obesity—definitely eligible</li>
              <li><strong>BMI 40+:</strong> Class III obesity—eligible, often prioritized</li>
            </ul>
            <p>
              Want to calculate your BMI? The formula is: weight (kg) ÷ [height (m)]² or weight (lbs) ÷ [height (inches)]² × 703
            </p>

            <h2>Weight-Related Health Conditions That Matter</h2>
            <p>
              If your BMI is 27-29.9, you'll need at least one of these conditions to qualify:
            </p>

            <Card className="p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Qualifying Comorbidities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Metabolic Conditions:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Type 2 diabetes</li>
                    <li>• Prediabetes</li>
                    <li>• Insulin resistance</li>
                    <li>• Metabolic syndrome</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cardiovascular:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• High blood pressure</li>
                    <li>• High cholesterol</li>
                    <li>• Cardiovascular disease</li>
                    <li>• History of heart attack/stroke</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other Conditions:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Obstructive sleep apnea</li>
                    <li>• Non-alcoholic fatty liver disease</li>
                    <li>• Polycystic ovary syndrome (PCOS)</li>
                    <li>• Osteoarthritis (weight-bearing joints)</li>
                  </ul>
                </div>
              </div>
            </Card>

            <h2>Who Should NOT Take Semaglutide</h2>
            <p>
              Just as important as knowing who qualifies is understanding who doesn't. These are contraindications—situations where semaglutide should not be used:
            </p>

            <Card className="p-6 my-8 bg-destructive/10 border-destructive/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-destructive" />
                You Should NOT Take Semaglutide If:
              </h3>
              <ul className="space-y-2">
                <li><strong>Personal or family history of medullary thyroid carcinoma (MTC)</strong></li>
                <li><strong>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</strong></li>
                <li><strong>Pregnant or planning pregnancy</strong> (stop 2 months before trying to conceive)</li>
                <li><strong>Breastfeeding</strong> (not enough safety data)</li>
                <li><strong>History of severe allergic reaction</strong> to semaglutide or ingredients</li>
                <li><strong>Personal history of pancreatitis</strong> (use with extreme caution)</li>
                <li><strong>Diabetic retinopathy</strong> (requires close monitoring)</li>
                <li><strong>History of eating disorders</strong> (may worsen symptoms)</li>
              </ul>
            </Card>

            <h2>Special Considerations and Gray Areas</h2>
            <p>
              Some situations require extra discussion with your healthcare provider:
            </p>

            <h3>If You Have Type 1 Diabetes</h3>
            <p>
              Semaglutide is NOT approved for type 1 diabetes. It's designed for type 2 diabetes and weight management. Type 1 diabetics should not use it off-label for weight loss.
            </p>

            <h3>If You're Over 65</h3>
            <p>
              Age alone isn't a disqualifier, but older adults may need closer monitoring. Kidney function, medication interactions, and overall health status become more important considerations.
            </p>

            <h3>If You Have Kidney Disease</h3>
            <p>
              Semaglutide can be used with mild to moderate kidney disease, but severe kidney impairment requires careful evaluation. Your healthcare provider will need recent kidney function tests.
            </p>

            <h3>If You're Taking Other Medications</h3>
            <p>
              Semaglutide slows stomach emptying, which can affect absorption of other medications, especially:
            </p>
            <ul>
              <li>Oral diabetes medications (especially insulin or sulfonylureas—hypoglycemia risk)</li>
              <li>Blood thinners like warfarin</li>
              <li>Oral contraceptives (may be less effective)</li>
              <li>Medications requiring precise timing</li>
            </ul>

            <h2>The Consultation Process: What to Expect</h2>
            <p>
              When you consult with a healthcare provider about semaglutide, here's what they'll typically assess:
            </p>

            <Card className="p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Standard Evaluation Includes:</h3>
              <ol className="space-y-3">
                <li><strong>1. Medical History Review:</strong> Past and current health conditions, medications, family history</li>
                <li><strong>2. BMI Calculation:</strong> Current height and weight measurement</li>
                <li><strong>3. Comorbidity Assessment:</strong> Screening for weight-related health issues</li>
                <li><strong>4. Contraindication Screening:</strong> Checking for reasons you shouldn't take it</li>
                <li><strong>5. Lab Work (often required):</strong> A1C, kidney function, liver function, thyroid panel</li>
                <li><strong>6. Discussion of Risks/Benefits:</strong> Realistic expectations, side effects, commitment required</li>
                <li><strong>7. Lifestyle Readiness:</strong> Your willingness to make diet and activity changes</li>
              </ol>
            </Card>

            <h2>Insurance Coverage vs. Cash Pay</h2>
            <p>
              Here's where things get tricky. You might medically qualify but face coverage issues:
            </p>

            <h3>Insurance Coverage Requirements</h3>
            <p>
              Most insurance plans have additional requirements beyond FDA criteria:
            </p>
            <ul>
              <li>Failed attempts at weight loss with diet and exercise (documented)</li>
              <li>BMI thresholds may be higher (sometimes requiring 35+ even without comorbidities)</li>
              <li>Specific comorbidity requirements may be more stringent</li>
              <li>Prior authorization required (can take weeks)</li>
              <li>Step therapy (trying cheaper medications first)</li>
            </ul>

            <h3>Cash Pay Options</h3>
            <p>
              If insurance doesn't cover it or you don't want to navigate the approval process, cash-pay options exist:
            </p>
            <ul>
              <li><strong>Compounded semaglutide:</strong> $199-$345/month through online providers</li>
              <li><strong>Brand name (Wegovy):</strong> $1,200-$1,400/month without insurance</li>
              <li><strong>Patient assistance programs:</strong> Available for those who qualify financially</li>
            </ul>

            <h2>Online Prescriptions: Are They Legitimate?</h2>
            <p>
              Yes, online healthcare providers can legally prescribe semaglutide IF they follow proper protocols:
            </p>
            <ul>
              <li>Licensed healthcare provider in your state</li>
              <li>Proper medical evaluation (not just a questionnaire)</li>
              <li>Ongoing monitoring and follow-up</li>
              <li>Medication from licensed pharmacies</li>
            </ul>

            <Card className="p-6 my-8 bg-accent/50">
              <h3 className="text-xl font-semibold mb-4">Red Flags to Watch For</h3>
              <p className="mb-4">Be cautious of online providers who:</p>
              <ul className="space-y-2">
                <li>Don't require any medical information or consultation</li>
                <li>Prescribe to anyone regardless of BMI or health status</li>
                <li>Source medication from overseas or unlicensed pharmacies</li>
                <li>Make unrealistic promises about results</li>
                <li>Don't offer ongoing medical support</li>
              </ul>
            </Card>

            <h2>What If You Don't Qualify?</h2>
            <p>
              If semaglutide isn't right for you, alternatives exist:
            </p>
            <ul>
              <li><strong>Tirzepatide:</strong> Similar mechanism, different eligibility criteria</li>
              <li><strong>Other GLP-1 agonists:</strong> Liraglutide (Saxenda) has different dosing</li>
              <li><strong>Non-GLP-1 options:</strong> Phentermine, naltrexone-bupropion, orlistat</li>
              <li><strong>Lifestyle interventions:</strong> Medical nutrition therapy, supervised exercise programs</li>
              <li><strong>Bariatric surgery:</strong> For those who qualify and haven't succeeded with medications</li>
            </ul>

            <h2>The Bottom Line on Eligibility</h2>
            <p>
              Most adults with a BMI of 30+ or BMI of 27+ with weight-related health conditions will qualify for semaglutide. The key is working with a legitimate healthcare provider who can properly evaluate your individual situation.
            </p>
            <p>
              Don't self-diagnose or self-prescribe. A proper medical evaluation ensures semaglutide is safe and appropriate for your specific circumstances.
            </p>

            <div className="mt-12 p-8 bg-accent/30 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Find Out If You Qualify</h3>
              <p className="mb-6">
                Complete a free online consultation with Trimi. Our licensed healthcare providers will review your medical history and determine if semaglutide is right for you.
              </p>
              <Button asChild size="lg">
                <Link to="/treatments/semaglutide">Check Your Eligibility</Link>
              </Button>
            </div>

            <RelatedArticles 
              articles={[
                {
                  title: "What to Expect Your First Month on Semaglutide",
                  url: "/blog/semaglutide-first-month",
                  excerpt: "Complete week-by-week guide to starting semaglutide, including side effects, weight loss expectations, and tips for success.",
                  category: "Getting Started"
                },
                {
                  title: "Compounded vs Brand Name Semaglutide",
                  url: "/blog/compounded-semaglutide-vs-brand-name",
                  excerpt: "Understanding the differences between compounded and brand-name semaglutide, including safety, cost, and effectiveness.",
                  category: "Treatment Options"
                },
                {
                  title: "Understanding GLP-1 Medications: Complete Guide",
                  url: "/blog/glp1-complete-guide",
                  excerpt: "Comprehensive guide to GLP-1 medications, how they work, and what makes them effective for weight loss.",
                  category: "Education"
                }
              ]}
            />
            
            <TopicClusterNav
              topic="Semaglutide Eligibility & Requirements"
              relatedArticles={clusterNav.relatedInCluster}
              hubPage="/blog/semaglutide"
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SemaglutideEligibility;
