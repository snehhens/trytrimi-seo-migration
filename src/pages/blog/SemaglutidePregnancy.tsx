import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, AlertTriangle } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/semaglutide-pregnancy.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutidePregnancy = () => {
  const postMeta = getBlogPostMeta("semaglutide-pregnancy");
  const publishDate = postMeta?.date || "2025-02-07";
  const readTime = postMeta?.readTime || "12 min";
  const clusterNav = getClusterNavigation("semaglutide-pregnancy");
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Semaglutide and Pregnancy: Safety, Risks & Planning Guide | Trimi</title>
        <meta 
          name="description" 
          content="Is semaglutide safe during pregnancy or breastfeeding? Essential guidance on Ozempic/Wegovy and pregnancy planning, discontinuation timing, and fertility considerations." 
        />
        <meta 
          name="keywords" 
          content="semaglutide pregnancy, ozempic pregnancy safety, wegovy breastfeeding, GLP-1 fertility, pregnancy planning semaglutide" 
        />
        <meta name="author" content="Trimi Medical Team" />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-pregnancy" />
        <meta property="og:title" content="Semaglutide and Pregnancy: Complete Safety Guide" />
        <meta property="og:description" content="Evidence-based guidance on semaglutide use during pregnancy, breastfeeding, and family planning." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-pregnancy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": "Semaglutide and Pregnancy: Safety, Risks & Planning",
            "description": "Comprehensive guide to pregnancy safety and family planning considerations with semaglutide",
            "author": {
              "@type": "Organization",
              "name": "Trimi Medical Team"
            },
            "datePublished": "2025-02-22",
            "medicalAudience": [{
              "@type": "MedicalAudience",
              "audienceType": "Patient"
            }]
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime="2025-02-22">February 22, 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>10 min read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Semaglutide and Pregnancy: What You Need to Know
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Planning a family while taking semaglutide? Here's essential information about pregnancy safety, discontinuation timing, fertility effects, and breastfeeding considerations.
          </p>

          <Card className="p-6 my-8 bg-destructive/10 border-destructive/30">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Critical Warning
            </h3>
            <p className="text-muted-foreground mb-0">
              Semaglutide is NOT recommended during pregnancy or breastfeeding. If you are pregnant, planning pregnancy, or breastfeeding, do not start semaglutide. If you become pregnant while taking semaglutide, stop immediately and contact your healthcare provider.
            </p>
          </Card>

          <div className="prose prose-lg max-w-none">
            <h2>Official FDA Classification</h2>
            
            <p>
              Semaglutide has limited human data during pregnancy. Animal studies showed potential risks including:
            </p>

            <ul>
              <li>Increased risk of birth defects in rats at high doses</li>
              <li>Reduced fetal growth</li>
              <li>Skeletal abnormalities in offspring</li>
              <li>Pregnancy loss at exposures comparable to human therapeutic doses<sup>1</sup></li>
            </ul>

            <p>
              While animal data doesn't always predict human outcomes, the current recommendation is clear: avoid semaglutide during pregnancy.
            </p>

            <h2>Why is Semaglutide Not Recommended in Pregnancy?</h2>

            <h3>1. Insufficient Human Safety Data</h3>
            <p>
              Clinical trials of semaglutide excluded pregnant women. We simply don't have enough data on human pregnancies exposed to semaglutide to determine safety.<sup>2</sup>
            </p>

            <h3>2. Potential Teratogenic Effects</h3>
            <p>
              Animal studies suggest semaglutide may cause structural birth defects, particularly when exposure occurs during critical developmental windows in early pregnancy.
            </p>

            <h3>3. Weight Loss During Pregnancy</h3>
            <p>
              Pregnancy requires adequate nutrition for fetal development. Semaglutide's appetite suppression and weight loss effects are incompatible with healthy pregnancy nutrition needs.
            </p>

            <h3>4. Unknown Long-Term Effects</h3>
            <p>
              Even if immediate pregnancy outcomes appeared normal, we lack data on long-term developmental effects in children exposed to semaglutide in utero.
            </p>

            <h2>Pregnancy Planning: When to Stop Semaglutide</h2>

            <p>
              If you're planning to become pregnant, proper timing of discontinuation is critical:<sup>3</sup>
            </p>

            <h3>Recommended Washout Period</h3>

            <ul>
              <li><strong>Minimum:</strong> 2 months before attempting conception</li>
              <li><strong>Safer approach:</strong> 3-4 months before trying to conceive</li>
              <li><strong>Reasoning:</strong> Semaglutide has a half-life of approximately 1 week; waiting 8-16 weeks ensures complete elimination from the body</li>
            </ul>

            <h3>Why This Timeline Matters</h3>

            <p>
              The first 8-12 weeks of pregnancy are the most critical for fetal development. All major organ systems form during this period. Since many women don't realize they're pregnant until 4-6 weeks gestation, having semaglutide completely cleared before conception attempts provides maximum safety.
            </p>

            <h3>Planning Your Timeline</h3>

            <p>
              A typical pregnancy planning timeline might look like:
            </p>

            <ol>
              <li><strong>Month 1:</strong> Final semaglutide dose, start preconception health optimization</li>
              <li><strong>Months 2-3:</strong> Washout period, continue healthy habits, track cycles</li>
              <li><strong>Month 4+:</strong> Begin actively trying to conceive</li>
            </ol>

            <h2>What If You Become Pregnant While Taking Semaglutide?</h2>

            <p>
              If you discover you're pregnant while using semaglutide:<sup>4</sup>
            </p>

            <ol>
              <li><strong>Stop semaglutide immediately</strong></li>
              <li><strong>Contact your healthcare provider right away</strong> - don't wait for your next scheduled appointment</li>
              <li><strong>Schedule early prenatal care</strong> - you may need additional monitoring</li>
              <li><strong>Document exposure timing</strong> - note when you last took semaglutide and at what dose</li>
              <li><strong>Don't panic</strong> - accidental early pregnancy exposure doesn't guarantee problems; your provider will guide appropriate monitoring</li>
            </ol>

            <h3>Registry Participation</h3>

            <p>
              Novo Nordisk maintains a pregnancy exposure registry. If you were exposed to semaglutide during pregnancy, your provider may recommend enrollment to help gather safety data that benefits future patients.
            </p>

            <h2>Semaglutide and Fertility</h2>

            <p>
              An interesting paradox: while semaglutide isn't safe for pregnancy, it may actually improve fertility in some women.<sup>5</sup>
            </p>

            <h3>Improved Fertility Through Weight Loss</h3>

            <p>
              Obesity is a major cause of infertility. Weight loss from semaglutide can:
            </p>

            <ul>
              <li>Restore regular ovulation in women with PCOS</li>
              <li>Improve insulin sensitivity, which regulates reproductive hormones</li>
              <li>Reduce inflammation affecting reproductive organs</li>
              <li>Normalize menstrual cycles</li>
              <li>Increase pregnancy success rates after weight reduction</li>
            </ul>

            <h3>Important Contraception Considerations</h3>

            <p>
              Women who haven't had regular periods due to weight may suddenly become fertile on semaglutide. Critical points:
            </p>

            <ul>
              <li><strong>Use reliable contraception</strong> if you don't want to become pregnant</li>
              <li><strong>Oral contraceptive effectiveness may decrease</strong> - semaglutide slows gastric emptying, potentially reducing absorption of oral birth control pills</li>
              <li><strong>Consider non-oral contraception</strong> (IUD, implant, injection, patch) for most reliable pregnancy prevention</li>
              <li><strong>Be aware of changing fertility</strong> - pregnancy can occur even if you previously struggled with infertility</li>
            </ul>

            <h2>Semaglutide and Breastfeeding</h2>

            <p>
              Current recommendations advise against semaglutide use while breastfeeding:<sup>6</sup>
            </p>

            <h3>Why Avoid During Breastfeeding?</h3>

            <ul>
              <li>Unknown whether semaglutide passes into breast milk</li>
              <li>Potential effects on infant growth and development are unknown</li>
              <li>Reduced maternal appetite may compromise milk production</li>
              <li>Weight loss recommendations differ during breastfeeding period</li>
            </ul>

            <h3>Alternative Approaches</h3>

            <p>
              If you're breastfeeding and want to manage weight:
            </p>

            <ul>
              <li>Focus on gradual, sustainable lifestyle changes</li>
              <li>Work with a registered dietitian on breastfeeding-compatible nutrition</li>
              <li>Delay semaglutide until after weaning</li>
              <li>Discuss timing with both your OB and pediatrician</li>
            </ul>

            <h3>When Can You Resume Semaglutide?</h3>

            <p>
              After delivery, if not breastfeeding:
            </p>

            <ul>
              <li>Generally safe to start 6-8 weeks postpartum</li>
              <li>Ensure you're medically cleared for weight loss</li>
              <li>Address postpartum recovery and mental health first</li>
              <li>Consider waiting longer if planning to breastfeed later</li>
            </ul>

            <h2>Male Fertility and Semaglutide</h2>

            <p>
              Limited data exists on semaglutide's effects on male fertility:<sup>7</sup>
            </p>

            <ul>
              <li>Animal studies showed some effects on sperm but at very high doses</li>
              <li>No strong evidence of male infertility in humans</li>
              <li>Weight loss generally improves male fertility parameters</li>
              <li>Conservative approach: consider stopping 2-3 months before partner's conception attempt, though not strictly required</li>
            </ul>

            <h2>Managing Diabetes or Obesity When Stopping Semaglutide for Pregnancy</h2>

            <p>
              If you're using semaglutide for type 2 diabetes or significant obesity, stopping for pregnancy requires alternative management:<sup>8</sup>
            </p>

            <h3>For Diabetes Management</h3>

            <ul>
              <li><strong>Metformin:</strong> Generally considered safe in pregnancy</li>
              <li><strong>Insulin:</strong> Gold standard for pregnancy diabetes management</li>
              <li><strong>Tight glucose monitoring:</strong> Essential for healthy pregnancy outcomes</li>
              <li><strong>Preconception A1C optimization:</strong> Aim for below 6.5% before conception if possible</li>
            </ul>

            <h3>For Weight Management</h3>

            <ul>
              <li>Focus on maintaining current weight rather than continued loss</li>
              <li>Implement sustainable lifestyle changes before stopping medication</li>
              <li>Work with registered dietitian on pregnancy-compatible nutrition</li>
              <li>Moderate physical activity appropriate for pregnancy</li>
            </ul>

            <h2>Long-Term Family Planning Considerations</h2>

            <p>
              If you're of childbearing age and taking semaglutide:
            </p>

            <h3>If Pregnancy is Not in Your Plans</h3>

            <ul>
              <li>Use highly effective contraception</li>
              <li>Be aware that improved fertility may lead to unexpected pregnancy</li>
              <li>Have a plan for what you would do if you became pregnant</li>
            </ul>

            <h3>If You May Want Children Eventually</h3>

            <ul>
              <li>Discuss family planning timeline with your provider when starting semaglutide</li>
              <li>Consider completing childbearing before starting if pregnancy is imminent</li>
              <li>Recognize you'll need multi-month breaks for each pregnancy</li>
              <li>Plan for alternative weight/diabetes management during fertile years</li>
            </ul>

            <h3>If Pregnancy is Planned Soon</h3>

            <ul>
              <li>Consider whether semaglutide is the right choice at this time</li>
              <li>Explore pregnancy-compatible alternatives first</li>
              <li>If starting semaglutide, have clear stopping timeline</li>
              <li>Use the pre-pregnancy period for maximum benefit, then discontinue appropriately</li>
            </ul>

            <h2>The Bottom Line</h2>

            <p>
              Semaglutide offers remarkable benefits for weight loss and metabolic health, but it's not compatible with pregnancy or breastfeeding. If you're planning a family, careful timing and alternative management strategies are essential.
            </p>

            <p>
              The good news: weight loss achieved with semaglutide may improve your fertility and pregnancy outcomes when the timing is right. By stopping the medication with an appropriate washout period before conception, you can benefit from the metabolic improvements while minimizing risks to pregnancy.
            </p>

            <p>
              Work closely with your healthcare team to coordinate diabetes management, weight goals, and family planning. With proper planning, you can safely navigate semaglutide use while preserving your reproductive options.
            </p>

            <div className="bg-secondary/10 border-l-4 border-secondary p-6 my-8">
              <h3 className="text-lg font-semibold mb-2">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground mb-0">
                This article is for educational purposes only and does not constitute medical advice. Pregnancy planning and medication management require individualized medical care. Always consult with your healthcare provider, OB/GYN, and/or reproductive endocrinologist for personalized guidance regarding semaglutide and pregnancy.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">References</h3>
              <ol className="text-sm space-y-2 text-muted-foreground">
                <li>Novo Nordisk. Ozempic (semaglutide) Prescribing Information. 2024.</li>
                <li>Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. N Engl J Med. 2021;384(11):989-1002.</li>
                <li>American College of Obstetricians and Gynecologists. Weight Loss Medications and Pregnancy. ACOG Practice Advisory. 2024.</li>
                <li>FDA Drug Safety Communication. GLP-1 Receptor Agonists and Pregnancy Considerations. 2023.</li>
                <li>Cena H, et al. Obesity, Polycystic Ovary Syndrome, and Infertility: A New Avenue for GLP-1 Receptor Agonists. J Clin Endocrinol Metab. 2020;105(8):e2695-e2709.</li>
                <li>Drugs and Lactation Database (LactMed). Semaglutide. National Library of Medicine. Updated 2024.</li>
                <li>Palmer NO, et al. Impact of obesity on male fertility, sperm function and molecular composition. Spermatogenesis. 2012;2(4):253-263.</li>
                <li>American Diabetes Association. Management of Diabetes in Pregnancy: Standards of Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1):S282-S294.</li>
              </ol>
            </div>
          </div>

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

export default SemaglutidePregnancy;
