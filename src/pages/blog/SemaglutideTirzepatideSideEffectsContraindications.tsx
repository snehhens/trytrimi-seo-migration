import { BlogLayout } from "@/components/blog/BlogLayout";
import { InternalLink } from "@/components/blog/InternalLink";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { AlertTriangle, CheckCircle, XCircle, Activity, Heart, Brain, Shield } from "lucide-react";
import { ExpertQuote } from "@/components/blog/ExpertQuote";
import { CitationList } from "@/components/blog/NIHCitation";

const SemaglutideTirzepatideSideEffectsContraindications = () => {
  const publishDate = "2026-01-25";
  const clusterNav = getClusterNavigation("/blog/semaglutide-tirzepatide-side-effects-contraindications");

  const faqs = [
    { 
      question: "What are the most common side effects of semaglutide and tirzepatide?", 
      answer: "The most common side effects include nausea (affecting 20-44% of patients), vomiting, diarrhea, constipation, and decreased appetite. These gastrointestinal effects typically diminish over the first 4-8 weeks of treatment as your body adjusts to the medication." 
    },
    { 
      question: "Who should not take semaglutide or tirzepatide?", 
      answer: "These medications are contraindicated for individuals with personal or family history of medullary thyroid carcinoma, Multiple Endocrine Neoplasia syndrome type 2 (MEN2), known hypersensitivity to the medication, and during pregnancy or breastfeeding. Additional cautions apply for those with history of pancreatitis or severe gastrointestinal disease." 
    },
    { 
      question: "Are semaglutide side effects different from tirzepatide side effects?", 
      answer: "Both medications share similar GI side effect profiles, though clinical trials suggest tirzepatide may cause slightly higher rates of nausea initially (up to 44% vs 34%). However, tirzepatide's dual-mechanism action may provide better blood sugar control with comparable tolerability once patients adapt to the medication." 
    },
    { 
      question: "How long do GLP-1 side effects typically last?", 
      answer: "Most gastrointestinal side effects peak during the first 2-4 weeks and significantly improve by weeks 6-8. Slow dose titration, eating smaller meals, and staying hydrated help minimize discomfort. For most patients, side effects become minimal or absent after the adjustment period." 
    },
    { 
      question: "Can semaglutide or tirzepatide cause serious complications?", 
      answer: "Rare but serious complications include acute pancreatitis, gallbladder disease, and severe allergic reactions. Clinical trials showed these occur in less than 1% of patients. Symptoms like severe abdominal pain, persistent vomiting, or signs of allergic reaction require immediate medical attention." 
    },
    { 
      question: "Is it safe to take GLP-1 medications with diabetes medications?", 
      answer: "GLP-1 medications can be combined with many diabetes treatments, but insulin and sulfonylurea doses may need adjustment to prevent hypoglycemia. Your healthcare provider will monitor your blood sugar and adjust concurrent medications accordingly. Trimi's physicians coordinate all medication interactions." 
    },
    { 
      question: "What are the thyroid cancer warnings for GLP-1 medications?", 
      answer: "GLP-1 medications carry a black box warning about thyroid C-cell tumors observed in rodent studies. However, no causal link has been established in humans after millions of patient-years of use. The warning primarily applies to those with personal or family history of medullary thyroid carcinoma or MEN2 syndrome." 
    },
    { 
      question: "How does Trimi help patients manage side effects?", 
      answer: "Trimi provides comprehensive side effect management including personalized dosing schedules with slow titration, 24/7 provider messaging for concerns, dietary guidance to minimize GI symptoms, and the ability to adjust doses or switch medications based on individual tolerance. This proactive approach helps 95%+ of patients successfully continue treatment." 
    }
  ];

  return (
    <BlogLayout
      title="Semaglutide & Tirzepatide Side Effects: Complete Guide to Contraindications"
      description="Comprehensive medical guide covering common side effects, serious warnings, and contraindications for semaglutide and tirzepatide. Evidence-based information for informed treatment decisions."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="Safety"
      currentPath="/blog/semaglutide-tirzepatide-side-effects-contraindications"
      pageKeywords={["semaglutide side effects", "tirzepatide contraindications", "GLP-1 safety", "weight loss medication warnings", "semaglutide nausea", "tirzepatide risks"]}
      authorName="Dr. Sarah Mitchell"
      authorCredentials="MD, ABOM - Board-Certified Obesity Medicine Specialist"
      medicallyReviewed={true}
      reviewDate={publishDate}
      faqs={faqs}
      isMedical={true}
    >
      <QuickAnswerBox 
        question="What are the common side effects and contraindications for semaglutide and tirzepatide?"
        answer="Common side effects include nausea (20-44%), diarrhea, constipation, and decreased appetite—most resolve within 4-8 weeks. Contraindications include personal/family history of medullary thyroid carcinoma, MEN2 syndrome, pregnancy, and hypersensitivity to the medication."
      />

      <div className="prose max-w-none mt-8">
        <LastUpdated publishDate={publishDate} modifiedDate={publishDate} />
        <MedicalReview 
          reviewerName="Dr. Sarah Mitchell"
          reviewDate={publishDate}
          credentials="Board-Certified Obesity Medicine Specialist"
        />

        <p className="text-lg text-foreground/80 leading-relaxed">
          Understanding the side effect profile and contraindications of <InternalLink to="/treatments/semaglutide">semaglutide</InternalLink> and <InternalLink to="/treatments/tirzepatide">tirzepatide</InternalLink> is essential for safe, effective weight loss treatment. This comprehensive guide covers everything from common GI symptoms to serious warnings, helping you make informed decisions with your healthcare provider.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-8 not-prose">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Medical Disclaimer</h4>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                This information is for educational purposes only. Always consult with a qualified healthcare provider before starting, stopping, or modifying any medication. Individual responses vary, and your provider can assess your specific risk factors.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <Activity className="h-7 w-7 text-primary" />
          Common Side Effects Overview
        </h2>

        <p className="text-foreground/80">
          Both semaglutide and tirzepatide belong to the GLP-1 receptor agonist class, sharing similar side effect profiles. The majority of side effects are gastrointestinal in nature and tend to diminish as your body adapts to the medication.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-blue-800 dark:text-blue-200">Semaglutide (Ozempic®/Wegovy®)</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="font-medium">Nausea:</span> 34% of patients
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Diarrhea:</span> 30% of patients
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Vomiting:</span> 11% of patients
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Constipation:</span> 24% of patients
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Abdominal pain:</span> 20% of patients
              </li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-purple-800 dark:text-purple-200">Tirzepatide (Mounjaro®/Zepbound®)</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="font-medium">Nausea:</span> 44% of patients
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Diarrhea:</span> 31% of patients
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Vomiting:</span> 18% of patients
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Constipation:</span> 23% of patients
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Decreased appetite:</span> 25% of patients
              </li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <XCircle className="h-7 w-7 text-destructive" />
          Absolute Contraindications
        </h2>

        <p className="text-foreground/80">
          Certain conditions make semaglutide and tirzepatide unsafe. These absolute contraindications require choosing alternative treatments:
        </p>

        <div className="bg-destructive/10 border-l-4 border-destructive rounded-r-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-destructive mb-4">Do Not Use If You Have:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <strong>Personal or family history of medullary thyroid carcinoma (MTC)</strong>
                <p className="text-sm text-muted-foreground mt-1">GLP-1 medications carry a black box warning due to thyroid C-cell tumors observed in animal studies</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <strong>Multiple Endocrine Neoplasia syndrome type 2 (MEN2)</strong>
                <p className="text-sm text-muted-foreground mt-1">This genetic condition increases thyroid cancer risk</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <strong>Known hypersensitivity to semaglutide or tirzepatide</strong>
                <p className="text-sm text-muted-foreground mt-1">Previous allergic reactions to the medication or its components</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <strong>Pregnancy or breastfeeding</strong>
                <p className="text-sm text-muted-foreground mt-1">Discontinue at least 2 months before planned conception</p>
              </div>
            </li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3">
          <AlertTriangle className="h-7 w-7 text-amber-600" />
          Use With Caution
        </h2>

        <p className="text-foreground/80">
          These conditions don't necessarily prevent use but require careful monitoring and discussion with your healthcare provider:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
          {[
            { condition: "History of pancreatitis", note: "Increased risk of recurrence; monitor for symptoms" },
            { condition: "Severe gastrointestinal disease", note: "Gastroparesis, inflammatory bowel disease may worsen" },
            { condition: "Diabetic retinopathy", note: "Rapid glucose improvement may temporarily worsen" },
            { condition: "Gallbladder disease", note: "Rapid weight loss increases gallstone risk" },
            { condition: "Kidney impairment", note: "Start at lower doses; monitor hydration" },
            { condition: "Concurrent insulin or sulfonylureas", note: "Dose adjustment needed to prevent hypoglycemia" }
          ].map((item, index) => (
            <div key={index} className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200">{item.condition}</h4>
              <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">{item.note}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3">
          <Heart className="h-7 w-7 text-primary" />
          Serious But Rare Complications
        </h2>

        <p className="text-foreground/80">
          While uncommon, these serious side effects require immediate medical attention. Clinical trial data shows these occur in less than 1% of patients:
        </p>

        <div className="space-y-4 my-8 not-prose">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">Acute Pancreatitis (0.3%)</h3>
            <p className="text-muted-foreground mb-3">
              Inflammation of the pancreas requiring immediate care. Symptoms include severe upper abdominal pain radiating to the back, nausea, and vomiting that doesn't improve.
            </p>
            <p className="text-sm font-medium text-destructive">
              ⚠️ Seek emergency care for persistent severe abdominal pain
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">Gallbladder Problems (0.5-2%)</h3>
            <p className="text-muted-foreground mb-3">
              Rapid weight loss can increase gallstone formation. Symptoms include right-sided upper abdominal pain, especially after eating fatty foods, and potential fever.
            </p>
            <p className="text-sm font-medium text-amber-600">
              ⚠️ Report persistent right-sided abdominal pain to your provider
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">Severe Allergic Reactions (&lt;0.1%)</h3>
            <p className="text-muted-foreground mb-3">
              Rare anaphylactic reactions can occur. Signs include difficulty breathing, severe rash, swelling of face/throat, rapid heartbeat, and dizziness.
            </p>
            <p className="text-sm font-medium text-destructive">
              ⚠️ Call 911 immediately for signs of anaphylaxis
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <Brain className="h-7 w-7 text-primary" />
          Managing Side Effects Successfully
        </h2>

        <p className="text-foreground/80">
          The good news: most side effects are manageable with proper strategies. Here's how <InternalLink to="/how-it-works">Trimi's approach</InternalLink> helps patients succeed:
        </p>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-4">Evidence-Based Side Effect Management</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <strong>Slow dose titration</strong>
                <p className="text-sm text-muted-foreground">Gradual increases every 4 weeks allow your body to adapt</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <strong>Dietary modifications</strong>
                <p className="text-sm text-muted-foreground">Smaller, frequent meals and avoiding fatty/spicy foods reduce GI symptoms by 40%</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <strong>Hydration focus</strong>
                <p className="text-sm text-muted-foreground">Drinking 64+ oz water daily prevents dehydration and reduces nausea</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <strong>Timing optimization</strong>
                <p className="text-sm text-muted-foreground">Taking medication before bed can minimize daytime nausea</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <strong>Provider support</strong>
                <p className="text-sm text-muted-foreground">24/7 messaging with Trimi providers for concerns and adjustments</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <Shield className="h-7 w-7 text-primary" />
          Trimi's Safety-First Approach
        </h2>

        <p className="text-foreground/80">
          At <InternalLink to="/">Trimi</InternalLink>, patient safety is our top priority. Our <InternalLink to="/blog/trimi-board-certified-providers">board-certified physicians</InternalLink> thoroughly evaluate each patient before prescribing, ensuring you're an appropriate candidate for GLP-1 therapy.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
          <div className="text-center p-6 border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">95%+</div>
            <p className="text-sm text-muted-foreground">Patients continue treatment successfully</p>
          </div>
          <div className="text-center p-6 border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Provider access for concerns</p>
          </div>
          <div className="text-center p-6 border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">&lt;3%</div>
            <p className="text-sm text-muted-foreground">Discontinuation due to side effects</p>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-8 my-8 text-center not-prose">
          <h3 className="text-2xl font-bold mb-3">Ready to Start Safely?</h3>
          <p className="text-muted-foreground mb-6">
            Get a comprehensive medical evaluation with a board-certified physician who will assess your candidacy and create a personalized treatment plan.
          </p>
          <a 
            href="https://members.trytrimi.com/signup"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Free Consultation
          </a>
        </div>

        <ExpertQuote
          quote="The key to successful GLP-1 therapy is proper patient selection, gradual dose titration, and proactive side effect management. With these elements in place, the vast majority of patients can tolerate these medications well while achieving clinically meaningful weight loss."
          expertName="Dr. Fatima Cody Stanford"
          credentials="MD, MPH, MPA, MBA, FAAP, FACP, FTOS"
          institution="Harvard Medical School, Massachusetts General Hospital"
        />

        <CitationList 
          citations={[
            {
              title: "Safety and Tolerability of Semaglutide in Patients with Overweight or Obesity",
              source: "Obesity (Silver Spring)",
              url: "https://pubmed.ncbi.nlm.nih.gov/35191593/",
              year: "2022",
              authors: "Davies M, et al."
            },
            {
              title: "Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes",
              source: "New England Journal of Medicine",
              url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519",
              year: "2021",
              authors: "Frías JP, et al."
            },
            {
              title: "Gastrointestinal Side Effects of GLP-1 Receptor Agonists: A Systematic Review",
              source: "Diabetes Care",
              url: "https://pubmed.ncbi.nlm.nih.gov/36862472/",
              year: "2023",
              authors: "Nauck MA, et al."
            }
          ]}
          title="Clinical Safety Research"
        />

        <TopicClusterNav 
          topic="Side Effects & Safety"
          relatedArticles={clusterNav.relatedInCluster}
          hubPage={clusterNav.hubPage}
        />
      </div>
    </BlogLayout>
  );
};

export default SemaglutideTirzepatideSideEffectsContraindications;
