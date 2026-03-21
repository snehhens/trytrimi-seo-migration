import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, AlertCircle, Info } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/tirzepatide-side-effects.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { getMedicalReviewer, getAuthor } from "@/data/medicalReviewers";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { BlogFAQSchema } from "@/components/blog/BlogFAQSchema";

const TirzepatideSideEffects = () => {
  const qaData = [
    {
      question: "What are the most common tirzepatide side effects?",
      answer: "The most common side effects are gastrointestinal: nausea (25-30% of patients), diarrhea (18-23%), decreased appetite (15-20%), vomiting (10-15%), and constipation (10-15%). Most are mild-to-moderate and decrease over time."
    },
    {
      question: "How long do tirzepatide side effects last?",
      answer: "Most side effects peak during the first 2-4 weeks after starting or increasing doses, then gradually improve. Nausea typically resolves within 2-4 weeks at each dose level. Severe side effects leading to discontinuation occur in only 4-7% of patients."
    },
    {
      question: "How can I reduce nausea on tirzepatide?",
      answer: "Eat smaller, more frequent meals; avoid high-fat, greasy, and spicy foods; stay hydrated; use ginger (tea or candies); take medication in the evening; choose cold foods over hot; stick to bland foods during nauseous periods; and avoid lying down immediately after eating."
    },
    {
      question: "What are the serious side effects of tirzepatide?",
      answer: "Rare but serious side effects include: pancreatitis (severe abdominal pain radiating to back), gallbladder problems (pain in upper right abdomen, fever, yellowing), kidney problems (decreased urination, swelling), severe allergic reactions, and vision changes. These require immediate medical attention."
    },
    {
      question: "Can I take anti-nausea medication with tirzepatide?",
      answer: "Yes, you can take over-the-counter anti-nausea medications like ondansetron (Zofran) or meclizine. However, consult your provider first, especially if nausea is severe or persistent, as they may recommend staying at your current dose longer before escalating."
    },
    {
      question: "Does everyone experience side effects on tirzepatide?",
      answer: "No, not everyone experiences side effects. While GI symptoms are common, their severity varies greatly. Many people tolerate tirzepatide well, especially when following the proper gradual dose escalation protocol. About 70-75% of patients continue treatment successfully."
    }
  ];

  return (
    <>
      <QAPageSchema 
        questions={qaData}
        mainEntityName="Tirzepatide Side Effects Management"
      />
      <BlogFAQSchema faqs={qaData} />
      <Helmet>
        <title>Tirzepatide Side Effects: Complete Guide to Managing Mounjaro Reactions | Trimi</title>
        <meta name="description" content="Comprehensive guide to tirzepatide (Mounjaro, Zepbound) side effects. Learn about common GI symptoms, serious risks, management strategies, and when to contact your doctor." />
        <meta name="keywords" content="tirzepatide side effects, mounjaro side effects, zepbound side effects, tirzepatide nausea, tirzepatide GI symptoms, mounjaro adverse effects" />
        <meta name="author" content="Trimi Medical Team" />
        <link rel="canonical" href="https://trytrimi.com/blog/tirzepatide-side-effects" />
        
        <meta property="og:title" content="Tirzepatide Side Effects: Complete Management Guide" />
        <meta property="og:description" content="Comprehensive guide to managing tirzepatide side effects, from common GI symptoms to rare serious reactions." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/tirzepatide-side-effects" />
        <meta property="article:published_time" content="2025-02-18T09:00:00Z" />
        <meta property="article:author" content="Trimi Medical Team" />
        <meta property="article:section" content="Weight Loss Medication" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": "Tirzepatide Side Effects: Complete Management Guide",
            "description": "Comprehensive guide to managing tirzepatide side effects",
            "datePublished": "2025-02-18T09:00:00Z",
            "dateModified": "2025-02-18T09:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "Trimi Medical Team"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <BlogBreadcrumb 
        category="Tirzepatide"
        title="Tirzepatide Side Effects"
        url="/blog/tirzepatide-side-effects"
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <article className="container max-w-4xl mx-auto px-4 py-12">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Tirzepatide Side Effects: Everything You Need to Know
            </h1>
            
            <LastUpdated 
              publishDate="2025-02-18"
              modifiedDate="2025-02-18"
            />

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Understanding tirzepatide's side effects helps you prepare, manage symptoms effectively, and know when to seek medical attention. Here's your complete guide to navigating treatment safely.
            </p>
          </header>

          <MedicalReview 
            reviewerName={getMedicalReviewer('drMichael')?.name || ''}
            credentials={getMedicalReviewer('drMichael')?.credentials || ''}
            specialty={getMedicalReviewer('drMichael')?.specialty}
            reviewDate="2025-02-18"
          />

          <AuthorBio 
            name={getAuthor('clinicalWriter')?.name}
            credentials={getAuthor('clinicalWriter')?.credentials}
            bio={getAuthor('clinicalWriter')?.bio}
          />

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Side Effects Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Like all medications, tirzepatide can cause side effects. The good news: most are mild, temporary, and manageable with proper strategies. Understanding what to expect—and how to respond—makes treatment much more comfortable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Clinical trials involving thousands of patients provide clear data on side effect frequency and severity. Most people tolerate tirzepatide well, especially when using the proper titration schedule. The gradual dose escalation protocol exists specifically to minimize side effects while maximizing benefits.
              </p>
            </section>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                <Info className="mr-2 h-5 w-5 text-primary" />
                Most Common Side Effects (SURMOUNT Trials)
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Nausea:</span>
                  <span>25-30% of patients</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Diarrhea:</span>
                  <span>18-23% of patients</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Decreased appetite:</span>
                  <span>15-20% of patients</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Vomiting:</span>
                  <span>10-15% of patients</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Constipation:</span>
                  <span>10-15% of patients</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Abdominal discomfort:</span>
                  <span>8-12% of patients</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                *Most side effects are mild-to-moderate and decrease over time. Severe side effects leading to discontinuation occurred in only 4-7% of patients.
              </p>
            </Card>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Gastrointestinal Side Effects: The Details</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Nausea</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nausea is the most frequently reported side effect, affecting 25-30% of patients in clinical trials. However, it's typically mild and transient, most pronounced during the first few weeks after starting treatment or increasing doses.
              </p>
              
              <h4 className="text-xl font-semibold mb-2 text-foreground">Management Strategies:</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Eat smaller, more frequent meals</strong> rather than 2-3 large meals</li>
                <li><strong>Avoid trigger foods:</strong> High-fat, greasy, spicy, or overly sweet foods</li>
                <li><strong>Stay hydrated:</strong> Sip water throughout the day (dehydration worsens nausea)</li>
                <li><strong>Ginger:</strong> Ginger tea, ginger candies, or ginger supplements can help</li>
                <li><strong>Timing adjustments:</strong> Take medication in the evening to sleep through peak nausea</li>
                <li><strong>Cold foods:</strong> Often better tolerated than hot foods</li>
                <li><strong>Bland foods:</strong> Crackers, toast, bananas, rice during nauseous periods</li>
                <li><strong>Fresh air:</strong> Go outside or open windows when feeling nauseated</li>
                <li><strong>Avoid lying down:</strong> Immediately after eating (wait 2-3 hours)</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-4">
                For most patients, nausea improves significantly within 2-4 weeks at each dose level. If nausea is severe or persistent, contact your provider—they may recommend staying at your current dose longer before escalating.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Diarrhea</h3>
              <p className="text-muted-foreground leading-relaxed">
                Approximately 18-23% of patients experience diarrhea, typically during the first few weeks of treatment or after dose increases. This occurs because tirzepatide slows gastric emptying and affects GI motility.
              </p>

              <h4 className="text-xl font-semibold mb-2 text-foreground">Management Strategies:</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Increase soluble fiber:</strong> Oats, bananas, apples (pectin helps bulk stool)</li>
                <li><strong>Avoid insoluble fiber initially:</strong> Raw vegetables, whole grains can worsen diarrhea</li>
                <li><strong>BRAT diet temporarily:</strong> Bananas, Rice, Applesauce, Toast</li>
                <li><strong>Probiotics:</strong> May help restore gut balance (discuss with provider)</li>
                <li><strong>Stay hydrated:</strong> Critical with diarrhea to prevent dehydration</li>
                <li><strong>Avoid dairy temporarily:</strong> Lactose can worsen symptoms</li>
                <li><strong>Limit caffeine and alcohol:</strong> Both can exacerbate diarrhea</li>
                <li><strong>Anti-diarrheal medications:</strong> Loperamide (Imodium) can help (consult provider first)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Constipation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Interestingly, 10-15% of patients experience constipation rather than diarrhea. The slowed gastric emptying can reduce bowel frequency for some people.
              </p>

              <h4 className="text-xl font-semibold mb-2 text-foreground">Management Strategies:</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Increase fiber gradually:</strong> Both soluble and insoluble (avoid sudden increases)</li>
                <li><strong>Hydration is critical:</strong> Fiber needs water to work properly</li>
                <li><strong>Physical activity:</strong> Exercise stimulates bowel motility</li>
                <li><strong>Prunes or prune juice:</strong> Natural laxative effect</li>
                <li><strong>Stool softeners:</strong> Docusate (Colace) can help</li>
                <li><strong>Magnesium supplements:</strong> Often helpful (check with provider for dose)</li>
                <li><strong>Establish routine:</strong> Try to use bathroom at same time daily</li>
                <li><strong>Don't ignore urges:</strong> Respond promptly to bowel movement signals</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Vomiting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Less common than nausea (10-15% of patients), but more concerning when it occurs. Occasional vomiting is manageable, but persistent vomiting requires medical attention.
              </p>

              <h4 className="text-xl font-semibold mb-2 text-foreground">When to Contact Your Provider:</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Vomiting more than 3 times in 24 hours</li>
                <li>Unable to keep down fluids for more than 12 hours</li>
                <li>Signs of dehydration (dark urine, dizziness, extreme thirst)</li>
                <li>Vomiting blood or material that looks like coffee grounds</li>
                <li>Severe abdominal pain accompanying vomiting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Less Common But Important Side Effects</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Injection Site Reactions</h3>
              <p className="text-muted-foreground leading-relaxed">
                About 3-5% of patients experience reactions at injection sites, including redness, itching, swelling, or bruising. These are usually mild and resolve within a few days.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Rotate injection sites:</strong> Don't inject in same spot repeatedly</li>
                <li><strong>Allow medication to warm:</strong> To room temperature before injecting</li>
                <li><strong>Use proper technique:</strong> Inject subcutaneously, not intramuscularly</li>
                <li><strong>Ice after injection:</strong> Can reduce discomfort and swelling</li>
                <li><strong>Avoid inflamed or irritated skin:</strong> Choose healthy injection sites</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Fatigue</h3>
              <p className="text-muted-foreground leading-relaxed">
                Some patients report increased tiredness, especially during the first few weeks. This typically improves as your body adjusts.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Ensure adequate calorie intake (reduced appetite can lead to insufficient nutrition)</li>
                <li>Maintain protein intake (critical for energy)</li>
                <li>Stay hydrated</li>
                <li>Prioritize sleep quality</li>
                <li>Light exercise can actually boost energy levels</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Headache</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reported by 5-8% of patients. Usually mild and often related to dehydration or dietary changes.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Increase water intake significantly</li>
                <li>Maintain regular meal times</li>
                <li>Monitor caffeine intake (reduction can trigger headaches)</li>
                <li>Standard pain relievers (acetaminophen, ibuprofen) are safe to use</li>
                <li>Persistent or severe headaches warrant medical evaluation</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Dizziness</h3>
              <p className="text-muted-foreground leading-relaxed">
                Can occur due to reduced blood sugar, dehydration, or blood pressure changes (especially if you're losing weight rapidly).
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Stand up slowly from sitting or lying positions</li>
                <li>Stay well-hydrated</li>
                <li>Maintain adequate salt intake (unless restricted by provider)</li>
                <li>Monitor blood pressure if you have hypertension</li>
                <li>Check blood sugar if diabetic</li>
              </ul>
            </section>

            <Card className="p-6 bg-amber-500/10 border-amber-500/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                Serious Side Effects: Seek Immediate Medical Attention
              </h3>
              <p className="text-muted-foreground mb-4">While rare, these serious side effects require prompt medical evaluation:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Pancreatitis:</strong> Severe abdominal pain radiating to back, with or without vomiting</li>
                <li><strong>Gallbladder problems:</strong> Pain in upper right abdomen, fever, yellowing of skin/eyes</li>
                <li><strong>Kidney problems:</strong> Decreased urination, swelling in legs/feet, severe fatigue</li>
                <li><strong>Severe allergic reaction:</strong> Difficulty breathing, severe rash, swelling of face/throat</li>
                <li><strong>Vision changes:</strong> Sudden vision loss, blurred vision, diabetic retinopathy changes</li>
                <li><strong>Severe hypoglycemia:</strong> (If combined with insulin or sulfonylureas) Extreme weakness, confusion, sweating, fast heartbeat</li>
                <li><strong>Thyroid tumors:</strong> Lump or swelling in neck, hoarseness, difficulty swallowing</li>
              </ul>
            </Card>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Rare But Serious: Detailed Information</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Pancreatitis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Occurs in approximately 0.2% of patients (2 in 1,000). Risk factors include history of pancreatitis, gallstones, high triglycerides, or heavy alcohol use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Symptoms:</strong> Severe, persistent abdominal pain (often radiating to back), nausea, vomiting, fever. This is a medical emergency—go to the ER immediately if suspected.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Gallbladder Disease</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rapid weight loss (from any cause) increases gallstone risk. Studies show slightly elevated gallbladder problems in patients taking tirzepatide, though rates are similar to other weight loss methods.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Symptoms:</strong> Pain in upper right abdomen, especially after meals, nausea, fever, jaundice. Severe cases may require surgery, but many resolve with conservative management.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Diabetic Retinopathy Worsening</h3>
              <p className="text-muted-foreground leading-relaxed">
                In patients with pre-existing diabetic retinopathy, rapid blood sugar improvement can temporarily worsen eye disease. This paradoxical effect is seen with any rapid diabetes improvement, not specific to tirzepatide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Prevention:</strong> If you have diabetic retinopathy, see your ophthalmologist before starting tirzepatide and monitor closely during treatment.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Thyroid C-Cell Tumors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Animal studies showed increased thyroid tumors in rats and mice, but this has not been observed in humans. Still, tirzepatide carries a black box warning and is contraindicated in people with personal or family history of medullary thyroid carcinoma or MEN 2 syndrome.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Monitoring:</strong> Report any neck lumps, hoarseness, or difficulty swallowing immediately.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Hypoglycemia Risk</h2>
              <p className="text-muted-foreground leading-relaxed">
                When used alone, tirzepatide rarely causes low blood sugar because it works in a glucose-dependent manner. However, risk increases significantly when combined with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Insulin:</strong> High risk—insulin doses typically need reduction</li>
                <li><strong>Sulfonylureas:</strong> (glipizide, glyburide, glimepiride) Moderate risk</li>
                <li><strong>Meglitinides:</strong> (repaglinide, nateglinide) Moderate risk</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Preventing Hypoglycemia</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Reduce insulin by 20-30% when starting tirzepatide (as directed by provider)</li>
                <li>Monitor blood sugars more frequently during titration</li>
                <li>Keep fast-acting glucose available (glucose tablets, juice)</li>
                <li>Know hypoglycemia symptoms: shakiness, sweating, confusion, rapid heartbeat</li>
                <li>Wear medical ID if on insulin</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Managing Side Effects: General Strategies</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Slow Titration</h3>
              <p className="text-muted-foreground leading-relaxed">
                The most important strategy for minimizing side effects is following the prescribed titration schedule. Never skip starter doses or escalate faster than recommended, even if you're tolerating the medication well.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Stay at Current Dose Longer</h3>
              <p className="text-muted-foreground leading-relaxed">
                If experiencing moderate side effects, stay at your current dose for an additional 4 weeks before increasing. Most side effects improve with time as your body adjusts.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Dietary Modifications</h3>
              <p className="text-muted-foreground leading-relaxed">
                Adjusting your diet can dramatically reduce GI side effects:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Smaller, more frequent meals</li>
                <li>Reduced fat intake (fat is hardest to digest)</li>
                <li>Avoid overly spicy foods</li>
                <li>Limit carbonated beverages</li>
                <li>Eat slowly and chew thoroughly</li>
                <li>Stop eating when satisfied (not full)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Hydration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cannot be overemphasized. Many side effects worsen with dehydration. Aim for at least 64 ounces (8 cups) daily, more if exercising or in hot weather.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Timing of Injection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Some patients find evening injections helpful—they sleep through the peak side effect window. Others prefer mornings. Experiment to find what works best for you.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">When to Contact Your Healthcare Provider</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Immediately (Emergency):</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Severe abdominal pain</li>
                <li>Signs of pancreatitis</li>
                <li>Severe allergic reaction</li>
                <li>Signs of dehydration with inability to keep fluids down</li>
                <li>Chest pain or difficulty breathing</li>
                <li>Severe hypoglycemia with confusion or loss of consciousness</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Within 24 Hours:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Persistent vomiting (more than 24 hours)</li>
                <li>Signs of gallbladder problems</li>
                <li>Changes in urination or signs of kidney problems</li>
                <li>Vision changes</li>
                <li>New lump or swelling in neck</li>
                <li>Severe side effects interfering with daily life</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">At Next Scheduled Appointment:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Mild-to-moderate side effects persisting beyond 2-3 weeks</li>
                <li>Questions about dose escalation</li>
                <li>Concerns about weight loss pace</li>
                <li>General questions about medication management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Side Effects vs. Treatment Benefits</h2>
              <p className="text-muted-foreground leading-relaxed">
                While side effects can be uncomfortable, it's important to weigh them against benefits:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Average weight loss of 15-20% of body weight</li>
                <li>Significant improvements in diabetes control (for those with type 2 diabetes)</li>
                <li>Reduced cardiovascular risk</li>
                <li>Improved blood pressure and cholesterol</li>
                <li>Enhanced quality of life and mobility</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Clinical trials showed that only 4-7% of patients discontinued tirzepatide due to side effects. The vast majority found side effects manageable and considered the benefits worth any temporary discomfort.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">The Bottom Line</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tirzepatide side effects, while common, are typically mild, temporary, and manageable. Most patients experience some GI symptoms during the first few weeks, but these improve significantly with time and proper management strategies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The key to successful treatment is education, preparation, and open communication with your healthcare provider. Know what to expect, implement preventive strategies, and don't hesitate to reach out if concerns arise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Serious side effects are rare, and with proper monitoring and medical supervision, tirzepatide is a safe and highly effective treatment for weight management and type 2 diabetes.
              </p>
            </section>

            <section className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This article is for informational purposes only and does not constitute medical advice. Side effect management should be individualized and supervised by qualified healthcare providers. Never start, stop, or adjust tirzepatide without medical supervision. If you experience concerning symptoms, contact your healthcare provider immediately. The information provided here should not replace professional medical guidance or emergency services when needed.
              </p>
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-semibold mb-3 text-foreground">References</h3>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205-216.</li>
                <li>Garvey WT, et al. Tirzepatide once weekly for the treatment of obesity in people with type 2 diabetes (SURMOUNT-2): a double-blind, randomised, multicentre, placebo-controlled, phase 3 trial. Lancet. 2023;402(10402):613-626.</li>
                <li>Rosenstock J, et al. Efficacy and safety of a novel dual GIP and GLP-1 receptor agonist tirzepatide in patients with type 2 diabetes (SURPASS-1): a double-blind, randomised, phase 3 trial. Lancet. 2021;398(10295):143-155.</li>
                <li>Dahl D, et al. Effect of Subcutaneous Tirzepatide vs Placebo Added to Titrated Insulin Glargine on Glycemic Control in Patients With Type 2 Diabetes: The SURPASS-5 Randomized Clinical Trial. JAMA. 2022;327(6):534-545.</li>
                <li>Eli Lilly. Mounjaro (tirzepatide) Prescribing Information. 2024.</li>
                <li>Eli Lilly. Zepbound (tirzepatide) Prescribing Information. 2024.</li>
              </ol>
            </section>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/treatments/tirzepatide" className="flex-1">
              <Button size="lg" className="w-full">
                Start Tirzepatide Treatment
              </Button>
            </Link>
            <Link to="/blog" className="flex-1">
              <Button size="lg" variant="outline" className="w-full">
                More Articles
              </Button>
            </Link>
          </div>
          
          <RelatedArticles articles={[
            {
              title: "Tirzepatide Dosage Guide",
              url: "/blog/tirzepatide-dosage-guide",
              excerpt: "Complete dosing schedule and administration tips for tirzepatide from 1.5mg to 13.5mg.",
              category: "Tirzepatide"
            },
            {
              title: "How Tirzepatide Works",
              url: "/blog/how-tirzepatide-works",
              excerpt: "Scientific explanation of tirzepatide's dual-action mechanism for weight loss.",
              category: "Tirzepatide"
            },
            {
              title: "Tirzepatide vs Semaglutide",
              url: "/blog/tirzepatide-vs-semaglutide",
              excerpt: "Comprehensive comparison of side effects, efficacy, and tolerability between these medications.",
              category: "Comparison"
            }
          ]} />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default TirzepatideSideEffects;