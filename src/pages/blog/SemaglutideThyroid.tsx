import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import ogImage from "@/assets/og/semaglutide-thyroid.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideThyroid = () => {
  const postMeta = getBlogPostMeta("semaglutide-thyroid");
  const publishDate = postMeta?.date || "2025-02-03";
  const readTime = postMeta?.readTime || "14 min";
  const clusterNav = getClusterNavigation("semaglutide-thyroid");
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Semaglutide and Thyroid: Safety, Risks & What You Need to Know | Trimi</title>
        <meta 
          name="description" 
          content="Can you take semaglutide with thyroid conditions? Complete guide to thyroid safety, medullary thyroid cancer risk, and thyroid function on Ozempic and Wegovy." 
        />
        <meta 
          name="keywords" 
          content="semaglutide thyroid, ozempic thyroid cancer, wegovy thyroid safety, GLP-1 thyroid, hypothyroidism semaglutide" 
        />
        <meta name="author" content="Trimi Medical Team" />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-thyroid" />
        <meta property="og:title" content="Semaglutide and Thyroid Health: Complete Safety Guide" />
        <meta property="og:description" content="Evidence-based guide to thyroid safety and semaglutide use for weight loss." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-thyroid" />
        <meta property="og:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": "Semaglutide and Thyroid: Safety, Risks & What You Need to Know",
            "description": "Comprehensive guide to thyroid safety considerations with semaglutide treatment",
            "author": {
              "@type": "Organization",
              "name": "Trimi Medical Team"
            },
            "datePublished": "2024-10-22",
            "dateModified": "2024-10-22",
            "medicalAudience": [{
              "@type": "MedicalAudience",
              "audienceType": "Patient"
            }],
            "about": {
              "@type": "MedicalCondition",
              "name": "Thyroid Health and Weight Loss Medication"
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <BlogBreadcrumb 
            category={postMeta?.category || "Health"}
            title="Semaglutide and Thyroid Health"
            url="/blog/semaglutide-thyroid"
          />
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={publishDate}>{new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime} read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Semaglutide and Thyroid Health: Understanding the Connection
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Can you safely take semaglutide if you have thyroid problems? Understanding the medullary thyroid cancer warning, thyroid function effects, and safety considerations for Ozempic and Wegovy users.
          </p>

          <div className="prose prose-lg max-w-none">
            <Card className="p-6 my-8 bg-destructive/10 border-destructive/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                Critical Warning
              </h3>
              <p className="text-muted-foreground mb-0">
                <strong>Semaglutide has a black box warning regarding thyroid C-cell tumors.</strong> It should not be used in patients with a personal or family history of medullary thyroid carcinoma (MTC) or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).<sup>1</sup>
              </p>
            </Card>

            <h2>The Medullary Thyroid Cancer Concern</h2>
            
            <p>
              The thyroid warning on semaglutide stems from <strong>animal studies in rodents</strong>, where GLP-1 receptor agonists caused thyroid C-cell tumors at clinically relevant exposures. This led to the FDA requiring a black box warning—the most serious type of warning for prescription medications.<sup>2</sup>
            </p>

            <h3>What the Human Evidence Shows</h3>

            <p>
              Here&apos;s the important context: <strong>No causal relationship has been established in humans.</strong> Extensive clinical trials and post-marketing surveillance have not demonstrated an increased risk of medullary thyroid cancer in people taking semaglutide.<sup>3</sup>
            </p>

            <ul>
              <li><strong>SUSTAIN trials:</strong> Over 8,000 patients, no cases of MTC reported</li>
              <li><strong>STEP trials:</strong> Over 4,500 patients, no cases of MTC reported</li>
              <li><strong>Real-world data:</strong> Millions of patient-years of exposure, no clear signal</li>
            </ul>

            <h2>Who Should NOT Take Semaglutide</h2>

            <p>
              Despite the lack of human evidence, certain individuals should <strong>absolutely avoid</strong> semaglutide due to theoretical risk:
            </p>

            <ul>
              <li><strong>Personal history of medullary thyroid carcinoma (MTC)</strong></li>
              <li><strong>Family history of MTC</strong> (first-degree relative)</li>
              <li><strong>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</strong></li>
              <li><strong>Personal history of thyroid C-cell hyperplasia</strong></li>
            </ul>

            <Card className="p-6 my-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Key Point
              </h3>
              <p className="text-muted-foreground mb-0">
                If you have any of these contraindications, there are alternative weight loss medications without thyroid concerns—discuss options like phentermine, naltrexone-bupropion, or orlistat with your healthcare provider.
              </p>
            </Card>

            <h2>Hypothyroidism and Semaglutide</h2>

            <p>
              <strong>Good news:</strong> Having hypothyroidism is <strong>NOT a contraindication</strong> to semaglutide use. Many patients successfully use semaglutide while managing hypothyroidism with levothyroxine or other thyroid replacement medications.<sup>4</sup>
            </p>

            <h3>Important Considerations</h3>

            <ul>
              <li><strong>Thyroid function monitoring:</strong> Continue regular TSH testing as prescribed by your endocrinologist</li>
              <li><strong>Medication timing:</strong> Take levothyroxine on empty stomach, semaglutide timing doesn&apos;t affect absorption</li>
              <li><strong>Dose adjustments:</strong> Weight loss may affect thyroid hormone requirements—monitor symptoms</li>
              <li><strong>GI effects:</strong> Nausea from semaglutide may affect thyroid medication adherence—manage proactively</li>
            </ul>

            <h2>Monitoring and Screening</h2>

            <p>
              While routine thyroid monitoring isn&apos;t required for all patients starting semaglutide, your healthcare provider may recommend:
            </p>

            <ul>
              <li><strong>Baseline thyroid exam:</strong> Physical palpation of thyroid gland</li>
              <li><strong>Medical history review:</strong> Careful documentation of personal/family thyroid history</li>
              <li><strong>Symptom awareness:</strong> Education about warning signs requiring evaluation</li>
            </ul>

            <h3>Warning Signs to Report</h3>

            <p>
              Contact your healthcare provider immediately if you develop:
            </p>

            <ul>
              <li>Lump or swelling in the neck</li>
              <li>Hoarseness or voice changes</li>
              <li>Difficulty swallowing</li>
              <li>Shortness of breath</li>
              <li>Persistent cough not related to illness</li>
            </ul>

            <h2>Hyperthyroidism Considerations</h2>

            <p>
              Hyperthyroidism and Graves&apos; disease are <strong>not contraindications</strong> to semaglutide, but require additional consideration:
            </p>

            <ul>
              <li><strong>Heart rate effects:</strong> Both conditions can increase heart rate—monitor cardiovascular symptoms</li>
              <li><strong>Weight loss interactions:</strong> Hyperthyroidism already causes weight loss—discuss goals with provider</li>
              <li><strong>Metabolic stability:</strong> Optimize thyroid function before starting weight loss medication</li>
            </ul>

            <h2>The Bottom Line</h2>

            <p>
              For most people, semaglutide can be used safely despite the black box warning about thyroid tumors. The warning is based on animal data that hasn&apos;t translated to human risk in extensive clinical experience.
            </p>

            <p>
              <strong>Key takeaways:</strong>
            </p>

            <ul>
              <li>Absolute contraindication: Personal/family history of MTC or MEN 2</li>
              <li>Hypothyroidism is NOT a contraindication—treatment is compatible</li>
              <li>No routine thyroid screening required for average-risk patients</li>
              <li>Report any neck lumps or voice changes immediately</li>
              <li>Human clinical data is reassuring despite animal study findings</li>
              <li>Alternative medications available for those with contraindications</li>
            </ul>

            <div className="bg-secondary/10 border-l-4 border-secondary p-6 my-8">
              <h3 className="text-lg font-semibold mb-2">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground mb-0">
                This article is for educational purposes only and does not constitute medical advice. Thyroid health and medication decisions should be made in consultation with qualified healthcare providers. If you have any personal or family history of thyroid conditions, discuss semaglutide safety with your doctor before starting treatment.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">References</h3>
              <ol className="text-sm space-y-2 text-muted-foreground">
                <li>Novo Nordisk. Ozempic (semaglutide) Prescribing Information. 2024.</li>
                <li>Bjerre Knudsen L, et al. GLP-1 receptor agonists activate rodent thyroid C-cells causing calcitonin release and C-cell proliferation. Endocrinology. 2010;151(4):1473-1486.</li>
                <li>Marso SP, et al. Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes. N Engl J Med. 2016;375(19):1834-1844.</li>
                <li>Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. N Engl J Med. 2021;384(11):989-1002.</li>
              </ol>
            </div>
          </div>

          <RelatedPosts 
            currentSlug="semaglutide-thyroid"
            category={postMeta?.category || "Health"}
          />

          <TopicClusterNav
            pillarPage={clusterNav.pillarPage}
            hubPage={clusterNav.hubPage}
            relatedArticles={clusterNav.relatedInCluster}
            topic="Semaglutide"
          />

          <div className="mt-12 flex gap-4">
            <Link to="/treatments">
              <Button variant="default" size="lg">
                Explore Treatments
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg">
                More Articles
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SemaglutideThyroid;
