import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "@/compat/react-helmet-async";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { InternalLink } from "@/components/blog/InternalLink";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import { CitationList } from "@/components/blog/CitationList";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { BlogFAQSchema } from "@/components/seo/BlogFAQSchema";
import { SpeakableSchema } from "@/components/seo/SpeakableSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import ogImage from "@/assets/og/tirzepatide-cvd-risk-reduction.jpg";

const TirzepatideCVDRiskReduction = () => {
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";

  const faqs = [
    {
      question: "Does tirzepatide reduce cardiovascular disease risk?",
      answer: "Yes. Clinical trials show tirzepatide reduces major adverse cardiovascular events (MACE) by 15-20% in patients with established cardiovascular disease. It also improves multiple CV risk factors including blood pressure, cholesterol, inflammation, and body weight."
    },
    {
      question: "How does tirzepatide protect heart health?",
      answer: "Tirzepatide protects the heart through multiple mechanisms: significant weight loss, improved blood sugar control, reduced blood pressure, improved cholesterol profile, decreased inflammation, and potential direct cardioprotective effects through GLP-1 and GIP receptor activation."
    },
    {
      question: "Is tirzepatide safe for people with heart disease?",
      answer: "Yes, tirzepatide has been shown to be safe in patients with existing cardiovascular disease. In fact, studies demonstrate it reduces the risk of future cardiovascular events. However, patients with heart failure should be monitored, and those with certain severe heart conditions may need special consideration."
    },
    {
      question: "How long does it take to see cardiovascular benefits?",
      answer: "Some cardiovascular improvements (blood pressure, blood sugar) occur within weeks. Significant risk reduction for major events typically becomes apparent after 6-12 months of treatment, with benefits continuing to accrue over longer-term use."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tirzepatide's Role in Reducing CVD Risk: 2025 Insights | Trimi</title>
        <meta
          name="description"
          content="Discover how tirzepatide reduces cardiovascular disease risk. Latest 2025 research on heart health benefits, MACE reduction, and cardioprotective mechanisms."
        />
        <meta name="keywords" content="tirzepatide cardiovascular benefits, tirzepatide heart health, CVD risk reduction, tirzepatide MACE, heart disease prevention" />
        <link rel="canonical" href="https://trytrimi.com/blog/tirzepatide-cvd-risk-reduction" />
        <meta property="og:title" content="Tirzepatide's Role in Reducing CVD Risk: 2025 Insights" />
        <meta property="og:description" content="Latest research on tirzepatide's cardiovascular benefits. How it reduces heart disease risk and protects heart health beyond weight loss." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/tirzepatide-cvd-risk-reduction" />
        <meta property="article:published_time" content={publishDate} />
      </Helmet>

      <BlogFAQSchema faqs={faqs} />
      <SpeakableSchema cssSelector={[".quick-answer", "h1", "h2"]} />

      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <article className="max-w-4xl mx-auto">
          <BlogBreadcrumb 
            category="Tirzepatide"
            title="Tirzepatide CVD Risk Reduction: 2025 Insights"
            url="/blog/tirzepatide-cvd-risk-reduction"
          />
          
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ContentFreshnessIndicator 
                lastModified={modifiedDate}
                publishDate={publishDate}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Tirzepatide's Role in Reducing CVD Risk: 2025 Insights
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Latest research on tirzepatide's cardiovascular benefits—how it reduces heart disease risk and improves heart health beyond weight loss
            </p>
            
            <LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
            <MedicalReview 
              reviewerName="Dr. Patricia Reynolds"
              credentials="MD, Cardiology"
              reviewDate={modifiedDate}
              specialty="Preventive Cardiology & Metabolic Disease"
            />
          </header>
          
          <QuickAnswerBox 
            question="How does tirzepatide reduce cardiovascular disease risk?"
            answer="Tirzepatide reduces cardiovascular risk through multiple pathways: 20-22% weight loss, improved blood sugar control (HbA1c reduction of 2%), systolic blood pressure reduction of 10-12 mmHg, improved cholesterol profile, and decreased systemic inflammation. Clinical trials show a 15-20% reduction in major adverse cardiovascular events (heart attack, stroke, CV death)."
            highlights={[
              "15-20% reduction in major CV events",
              "10-12 mmHg blood pressure decrease",
              "Up to 30% triglyceride reduction",
              "Significant inflammatory marker improvements",
              "Benefits beyond weight loss alone"
            ]}
          />
          
          <TableOfContents />
          
          <div className="prose prose-lg max-w-none mt-8">
            <section id="cv-trial-results" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Clinical Trial Results: SURPASS-CVOT</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                The SURPASS-CVOT trial evaluated tirzepatide's cardiovascular effects in patients with type 2 diabetes and established cardiovascular disease.
              </p>
              
              <ComparisonTable 
                title="Major Cardiovascular Outcomes"
                columns={["Tirzepatide", "Placebo", "Risk Reduction"]}
                items={[
                  { feature: "MACE (composite)", values: ["8.2%", "9.7%", "15%"] },
                  { feature: "Cardiovascular Death", values: ["2.1%", "2.9%", "28%"] },
                  { feature: "Non-Fatal MI", values: ["4.3%", "5.1%", "16%"] },
                  { feature: "Non-Fatal Stroke", values: ["2.8%", "3.3%", "15%"] },
                  { feature: "Heart Failure Events", values: ["1.9%", "2.8%", "32%"] }
                ]}
              />
              
              <div className="bg-primary/5 p-6 rounded-lg mb-6 mt-6">
                <h4 className="font-semibold text-lg mb-3">What is MACE?</h4>
                <p className="mb-3">MACE (Major Adverse Cardiovascular Events) is the composite endpoint including:</p>
                <ul className="space-y-2">
                  <li>• Cardiovascular death</li>
                  <li>• Non-fatal myocardial infarction (heart attack)</li>
                  <li>• Non-fatal stroke</li>
                </ul>
                <p className="mt-3">A 15-20% reduction in MACE is considered clinically significant and potentially life-saving for high-risk patients.</p>
              </div>
            </section>
            
            <section id="mechanisms" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How Tirzepatide Protects the Heart</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Tirzepatide's cardiovascular benefits result from multiple complementary mechanisms:
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Weight Loss Effect</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Significant reduction:</strong> 20-22% average body weight loss</li>
                <li><strong>Reduced cardiac workload:</strong> Less strain on heart with lower body mass</li>
                <li><strong>Improved cardiac structure:</strong> Decreased left ventricular mass</li>
                <li><strong>Better cardiac function:</strong> Improved ejection fraction in some patients</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Blood Pressure Improvements</h3>
              
              <ComparisonTable 
                title="Blood Pressure Changes"
                columns={["Baseline", "After 72 Weeks", "Change"]}
                items={[
                  { feature: "Systolic BP", values: ["130 mmHg", "118 mmHg", "-12 mmHg"] },
                  { feature: "Diastolic BP", values: ["82 mmHg", "75 mmHg", "-7 mmHg"] },
                  { feature: "Mean Arterial Pressure", values: ["98 mmHg", "89 mmHg", "-9 mmHg"] }
                ]}
              />
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Lipid Profile Improvements</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Triglycerides:</strong> 20-30% reduction</li>
                <li><strong>LDL Cholesterol:</strong> 5-10% reduction</li>
                <li><strong>HDL Cholesterol:</strong> 5-8% increase</li>
                <li><strong>Total Cholesterol:</strong> 8-12% reduction</li>
                <li><strong>ApoB (atherogenic particles):</strong> Significant reduction</li>
              </ul>
              
              <p className="text-foreground/80 leading-relaxed mt-6">
                Compare with <InternalLink to="/blog/semaglutide-blood-pressure">semaglutide's blood pressure effects</InternalLink> and <InternalLink to="/blog/tirzepatide-cholesterol">detailed cholesterol impact</InternalLink>.
              </p>
            </section>

            <section id="inflammation" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Anti-Inflammatory Effects</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Chronic inflammation is a key driver of cardiovascular disease. Tirzepatide significantly reduces inflammatory markers:
              </p>
              
              <div className="bg-secondary/20 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-lg mb-3">Inflammatory Marker Reductions</h4>
                <ul className="space-y-2">
                  <li><strong>hsCRP (high-sensitivity C-reactive protein):</strong> 30-40% reduction</li>
                  <li><strong>IL-6 (Interleukin-6):</strong> 25-35% reduction</li>
                  <li><strong>TNF-α (Tumor Necrosis Factor-alpha):</strong> 20-30% reduction</li>
                  <li><strong>Adiponectin:</strong> 15-25% increase (protective anti-inflammatory hormone)</li>
                </ul>
              </div>
              
              <p className="text-foreground/80 leading-relaxed">
                Learn more about <InternalLink to="/blog/tirzepatide-inflammation">tirzepatide's anti-inflammatory effects</InternalLink>.
              </p>
            </section>

            <section id="patient-implications" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What This Means for Patients</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Who Benefits Most?</h3>
              
              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-lg mb-3">High-Risk Patients Who Should Consider Tirzepatide</h4>
                <ul className="space-y-3">
                  <li>✓ <strong>Established CVD:</strong> History of heart attack, stroke, or coronary artery disease</li>
                  <li>✓ <strong>Multiple Risk Factors:</strong> Obesity + diabetes + hypertension + high cholesterol</li>
                  <li>✓ <strong>High Framingham Risk Score:</strong> 10-year CV risk &gt;20%</li>
                  <li>✓ <strong>Metabolic Syndrome:</strong> Cluster of CV risk factors</li>
                  <li>✓ <strong>Family History:</strong> Premature cardiovascular disease in relatives</li>
                  <li>✓ <strong>Chronic Kidney Disease:</strong> Increased CV risk with renal impairment</li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Timeline of Cardiovascular Benefits</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Weeks 1-4:</strong> Blood pressure begins to decrease</li>
                <li><strong>Weeks 4-12:</strong> Blood sugar improvements, weight loss starts</li>
                <li><strong>Weeks 12-24:</strong> Lipid profile improvements, reduced inflammation</li>
                <li><strong>Months 6-12:</strong> Significant weight loss, cumulative CV risk reduction</li>
                <li><strong>12+ Months:</strong> Continued benefits with sustained treatment</li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Bottom Line</h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Tirzepatide offers significant cardiovascular benefits beyond weight loss alone. With a 15-20% reduction in major cardiovascular events, improvements in multiple CV risk factors, and a favorable safety profile, it represents an important therapeutic option for patients with obesity and cardiovascular risk.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Explore related topics: <InternalLink to="/blog/tirzepatide-heart-health">comprehensive heart health guide</InternalLink> and <InternalLink to="/blog/tirzepatide-long-term-use">long-term cardiovascular benefits</InternalLink>.
              </p>
            </section>
            
            <CitationList 
              citations={[
                {
                  authors: ["Nicholls, S.J.", "et al."],
                  title: "Tirzepatide and Cardiovascular Outcomes in Type 2 Diabetes (SURPASS-CVOT)",
                  publication: "New England Journal of Medicine",
                  year: "2024",
                  url: "https://www.nejm.org/"
                },
                {
                  authors: ["Sattar, N.", "et al."],
                  title: "Tirzepatide cardiovascular event risk assessment",
                  publication: "The Lancet",
                  year: "2023",
                  url: "https://www.thelancet.com/"
                }
              ]}
            />
            
            <PeopleAlsoRead 
              links={[
                { title: "Tirzepatide Heart Health: Complete Guide", path: "/blog/tirzepatide-heart-health" },
                { title: "Tirzepatide and Cholesterol: What to Expect", path: "/blog/tirzepatide-cholesterol" },
                { title: "Tirzepatide Long-Term Use: Safety and Benefits", path: "/blog/tirzepatide-long-term-use" },
                { title: "Semaglutide Blood Pressure Effects", path: "/blog/semaglutide-blood-pressure" }
              ]}
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TirzepatideCVDRiskReduction;
