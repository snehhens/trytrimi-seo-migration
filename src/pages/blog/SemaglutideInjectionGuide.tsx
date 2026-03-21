import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Syringe, AlertCircle } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/semaglutide-injection-guide.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideInjectionGuide = () => {
  const clusterNav = getClusterNavigation('semaglutide-injection-guide');
  const qaData = [
    {
      question: "Where should I inject semaglutide?",
      answer: "Inject semaglutide subcutaneously in three main areas: abdomen (most popular - anywhere at least 2 inches from belly button), thigh (front or outer portion, midway between hip and knee), or upper arm (back of upper arm, may need assistance). Rotate sites weekly."
    },
    {
      question: "How do I inject semaglutide step by step?",
      answer: "Wash hands, let medication reach room temperature, attach new needle, clean injection site with alcohol, let dry completely, pinch 1-2 inches of skin, insert needle at 90-degree angle, press dose button fully, count slowly to 6, then remove needle straight out."
    },
    {
      question: "How can I make semaglutide injections less painful?",
      answer: "Let medication warm to room temperature, ensure alcohol dries completely before injecting, use a new needle each time, inject slowly and steadily, avoid tense muscles, don't reuse injection sites within 4 weeks, and ice the area after if needed."
    },
    {
      question: "What should I do if I miss a semaglutide injection?",
      answer: "If less than 5 days late, take it as soon as possible. If more than 5 days late, skip that dose and take your next scheduled dose. Don't take two doses within 48 hours of each other. Contact your provider if unsure."
    },
    {
      question: "Can I inject semaglutide in the same spot each time?",
      answer: "No, you must rotate injection sites. Never inject in the exact same spot two weeks in a row. Move at least 1 inch away from your last injection site. This prevents lipodystrophy (lumps, dents, or thickened areas of skin) and ensures proper medication absorption."
    },
    {
      question: "How long does a semaglutide injection take?",
      answer: "The entire process takes 2-5 minutes: 30 seconds to prepare site, 5-10 seconds for the actual injection (count to 6 while holding button), and 1-2 minutes for cleanup. The injection itself is very quick once you're set up properly."
    }
  ];
  
  const postMeta = getBlogPostMeta("semaglutide-injection-guide");
  const publishDate = postMeta?.date || "2025-02-11";
  const modifiedDate = getModifiedDate('semaglutide-injection-guide', publishDate);
  const readTime = postMeta?.readTime || "18 min";
  
  return (
    <>
      <QAPageSchema 
        questions={qaData}
        mainEntityName="Semaglutide Injection Guide"
      />
      <Helmet>
        <title>How to Inject Semaglutide: Complete Step-by-Step Guide | Trimi</title>
        <meta name="description" content="Complete guide to injecting semaglutide safely and correctly. Learn proper injection technique, best sites, how to reduce pain, and common mistakes to avoid." />
        <meta name="keywords" content="semaglutide injection, how to inject semaglutide, semaglutide injection sites, ozempic injection, wegovy injection, semaglutide injection technique" />
        <meta name="author" content="Trimi Medical Team" />
        <link rel="canonical" href="https://trytrimi.com/blog/semaglutide-injection-guide" />
        
        <meta property="og:title" content="How to Inject Semaglutide: Complete Step-by-Step Guide" />
        <meta property="og:description" content="Master semaglutide injection technique with this comprehensive guide covering injection sites, pain reduction, and best practices." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://trytrimi.com/blog/semaglutide-injection-guide" />
        <meta property="og:image" content={ogImage} />
        <meta property="article:published_time" content="2025-02-11T09:00:00Z" />
        <meta property="article:author" content="Trimi Medical Team" />
        <meta property="article:section" content="How-To Guide" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Inject Semaglutide",
            "description": "Step-by-step guide to injecting semaglutide safely and correctly",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Prepare supplies",
                "text": "Gather semaglutide pen, alcohol swabs, and sharps container"
              },
              {
                "@type": "HowToStep",
                "name": "Choose injection site",
                "text": "Select abdomen, thigh, or upper arm area"
              },
              {
                "@type": "HowToStep",
                "name": "Clean injection site",
                "text": "Clean area with alcohol swab and let dry"
              },
              {
                "@type": "HowToStep",
                "name": "Inject medication",
                "text": "Insert needle at 90-degree angle and inject slowly"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <BlogBreadcrumb 
        category="Semaglutide"
        title="Semaglutide Injection Guide"
        url="/blog/semaglutide-injection-guide"
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <article className="container max-w-4xl mx-auto px-4 py-12">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              How to Inject Semaglutide: Complete Step-by-Step Guide
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                February 11, 2025
              </span>
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                10 min read
              </span>
              <ContentFreshnessIndicator 
                lastModified="2025-02-11"
                publishDate="2025-02-11"
              />
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Mastering proper semaglutide injection technique ensures maximum effectiveness while minimizing discomfort and side effects. Here's everything you need to know about administering your medication safely and confidently.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Understanding Semaglutide Injections</h2>
              <p className="text-muted-foreground leading-relaxed">
                Semaglutide is administered via subcutaneous injection—meaning the medication goes into the fatty tissue layer between skin and muscle. This is different from intramuscular (into muscle) or intravenous (into vein) injections.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The subcutaneous route allows for slow, steady absorption of the medication into your bloodstream, maintaining consistent levels throughout the week. Proper technique is crucial not only for comfort but also for ensuring the medication works as intended.
              </p>
            </section>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                <Syringe className="mr-2 h-5 w-5 text-primary" />
                Quick Injection Checklist
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Wash hands thoroughly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Let medication reach room temperature (15-30 minutes)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Check expiration date and medication appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Attach new needle for each injection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Select and clean injection site</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Inject at 90-degree angle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Dispose of needle in sharps container immediately</span>
                </li>
              </ul>
            </Card>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Choosing Your Injection Site</h2>
              <p className="text-muted-foreground leading-relaxed">
                Semaglutide can be injected in three main areas. Each has advantages and considerations:
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">1. Abdomen (Belly)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Most Popular Choice:</strong> The abdomen is the preferred site for most patients due to its larger surface area and generally higher comfort level.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Where exactly:</strong> Anywhere on your belly, at least 2 inches away from your belly button</li>
                <li><strong>Advantages:</strong> Easy to reach, larger area for rotation, typically has adequate subcutaneous fat</li>
                <li><strong>Tips:</strong> Avoid the area directly around your belly button and any surgical scars</li>
                <li><strong>Best for:</strong> Most people, especially those new to injections</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">2. Thigh</h3>
              <p className="text-muted-foreground leading-relaxed">
                The front or outer thigh provides another excellent injection site with good subcutaneous tissue.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Where exactly:</strong> Front or outer portion of thigh, midway between hip and knee</li>
                <li><strong>Advantages:</strong> Easy to access while sitting, good alternative if abdomen is uncomfortable</li>
                <li><strong>Tips:</strong> Avoid the inner thigh (too many blood vessels and nerves)</li>
                <li><strong>Best for:</strong> People who prefer not to inject in the abdomen</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">3. Upper Arm</h3>
              <p className="text-muted-foreground leading-relaxed">
                The back of the upper arm is the least commonly used site due to difficulty reaching it yourself.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Where exactly:</strong> Back of upper arm, in the fatty area</li>
                <li><strong>Advantages:</strong> Provides rotation option, can be less sensitive than other areas</li>
                <li><strong>Challenges:</strong> Difficult to reach yourself; may need assistance</li>
                <li><strong>Best for:</strong> Rotation when you have help, or those very flexible</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Site Rotation: Why It Matters</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rotating injection sites is crucial to prevent lipodystrophy—changes in subcutaneous fat tissue that can occur with repeated injections in the same spot. This can appear as lumps, dents, or thickened areas of skin.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Rotation Strategy</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Never inject in the exact same spot</strong> two weeks in a row</li>
                <li><strong>Move at least 1 inch away</strong> from your last injection site</li>
                <li><strong>Divide your abdomen into quadrants</strong> (imagine a tic-tac-toe grid) and rotate through them</li>
                <li><strong>Keep a log</strong> if needed—many people use the L/R pattern (left abdomen, right abdomen, left thigh, right thigh)</li>
                <li><strong>Allow each site to rest</strong> at least 4 weeks between injections</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Pro tip: Some patients find it helpful to mark their injection days on a calendar with which site they used, making rotation automatic.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Step-by-Step Injection Process</h2>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Before You Begin</h3>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li><strong>Wash your hands thoroughly</strong> with soap and water for at least 20 seconds</li>
                <li><strong>Remove medication from refrigerator</strong> 15-30 minutes before injection to allow it to reach room temperature (cold injections are more uncomfortable)</li>
                <li><strong>Gather all supplies:</strong> Medication pen, new needle, alcohol swabs, sharps container, cotton ball or gauze</li>
                <li><strong>Check the medication:</strong> Ensure it's not expired, appears clear and colorless, and has no particles</li>
              </ol>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Preparation Steps</h3>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>
                  <strong>Attach a new needle:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Remove cap from pen</li>
                    <li>Check that medication appears normal</li>
                    <li>Remove paper tab from new needle</li>
                    <li>Screw needle straight onto pen until secure</li>
                    <li>Remove outer needle cap (save this for later)</li>
                    <li>Remove inner needle cap and discard</li>
                  </ul>
                </li>
                <li>
                  <strong>Check medication flow (first time use only):</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Turn dose selector to flow check symbol</li>
                    <li>Hold pen with needle pointing up</li>
                    <li>Press and hold dose button until counter shows 0</li>
                    <li>Check for drop of medication at needle tip</li>
                    <li>If no drop appears, repeat once (if still no drop after 2 attempts, use new pen)</li>
                  </ul>
                </li>
                <li>
                  <strong>Select your dose:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Turn dose selector until it shows your prescribed dose</li>
                    <li>Double-check the dose before proceeding</li>
                  </ul>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">The Injection</h3>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>
                  <strong>Clean injection site:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Clean area with alcohol swab using circular motion</li>
                    <li>Let site air dry completely (30 seconds)—injecting into wet skin stings</li>
                    <li>Don't fan or blow on the area</li>
                  </ul>
                </li>
                <li>
                  <strong>Position the needle:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Hold pen like a pencil or dart</li>
                    <li>With other hand, gently pinch about 1-2 inches of skin and fatty tissue</li>
                    <li>Insert needle straight into skin at 90-degree angle</li>
                    <li>Push needle all the way in—don't be timid (the needle is very small)</li>
                  </ul>
                </li>
                <li>
                  <strong>Inject the medication:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Keep needle in skin</li>
                    <li>Press dose button all the way down</li>
                    <li>Keep button pressed and count slowly to 6 (this ensures full dose delivery)</li>
                    <li>Check that counter shows 0</li>
                  </ul>
                </li>
                <li>
                  <strong>Remove the needle:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Pull needle straight out of skin</li>
                    <li>Release pinched skin</li>
                    <li>If bleeding, apply gentle pressure with cotton ball or gauze</li>
                    <li>Don't rub the injection site</li>
                  </ul>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">After Injection</h3>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li><strong>Replace outer needle cap</strong> carefully (or use needle clipper if available)</li>
                <li><strong>Unscrew and dispose of needle</strong> immediately in sharps container</li>
                <li><strong>Replace pen cap</strong> and store pen in refrigerator</li>
                <li><strong>Record your injection</strong> (date, time, site, any reactions)</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Minimizing Injection Pain</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most people report that semaglutide injections are relatively painless, but here are tips to make them even more comfortable:
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Before Injection</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Allow medication to warm up:</strong> Cold injections hurt more</li>
                <li><strong>Use new needles every time:</strong> Dull needles cause more pain</li>
                <li><strong>Choose fattier areas:</strong> More subcutaneous fat = less pain</li>
                <li><strong>Relax:</strong> Tense muscles make injections more uncomfortable</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">During Injection</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Insert needle quickly and confidently:</strong> Slow insertion hurts more</li>
                <li><strong>Don't inject through fabric:</strong> Always expose skin completely</li>
                <li><strong>Ensure skin is completely dry:</strong> Alcohol on skin stings</li>
                <li><strong>Inject slowly:</strong> Give medication time to disperse (count to 6)</li>
                <li><strong>Stay still:</strong> Movement during injection increases discomfort</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Special Techniques</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Ice technique:</strong> Apply ice pack to site for 30-60 seconds before injection to numb area</li>
                <li><strong>Numbing cream:</strong> Over-the-counter topical lidocaine can be applied 30 minutes before (check with provider first)</li>
                <li><strong>Distraction:</strong> Watch TV, listen to music, or have someone talk to you during injection</li>
                <li><strong>Cough method:</strong> Coughing during needle insertion can reduce pain perception</li>
              </ul>
            </section>

            <Card className="p-6 bg-amber-500/10 border-amber-500/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                Common Injection Mistakes to Avoid
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong>Not rotating sites:</strong> Can cause lipodystrophy and reduce absorption
                </li>
                <li>
                  <strong>Reusing needles:</strong> Increases pain, infection risk, and can damage pen
                </li>
                <li>
                  <strong>Injecting cold medication:</strong> Makes injection more painful
                </li>
                <li>
                  <strong>Skipping hand washing:</strong> Increases infection risk
                </li>
                <li>
                  <strong>Not counting to 6:</strong> May not receive full dose
                </li>
                <li>
                  <strong>Rubbing injection site:</strong> Can cause bruising and affect absorption
                </li>
                <li>
                  <strong>Injecting air bubbles:</strong> Harmless but wastes medication
                </li>
                <li>
                  <strong>Injecting into muscle instead of fat:</strong> Affects absorption rate and hurts more
                </li>
              </ul>
            </Card>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Handling Injection Site Reactions</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Normal Reactions</h3>
              <p className="text-muted-foreground leading-relaxed">These are common and usually resolve within 24-48 hours:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Mild redness at injection site</li>
                <li>Small bruise (especially if you hit a tiny blood vessel)</li>
                <li>Slight swelling or bump under skin</li>
                <li>Mild itching</li>
                <li>Temporary tenderness</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Managing Normal Reactions</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Apply ice pack for 10-15 minutes if swelling</li>
                <li>Avoid touching or rubbing the area</li>
                <li>Wear loose clothing over injection site</li>
                <li>Take over-the-counter pain reliever if needed (acetaminophen preferred)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">When to Contact Your Provider</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Severe pain that doesn't improve</li>
                <li>Large area of redness or swelling</li>
                <li>Warmth and tenderness (signs of infection)</li>
                <li>Pus or drainage from injection site</li>
                <li>Fever after injection</li>
                <li>Severe allergic reaction (rash, difficulty breathing, swelling of face/throat)</li>
                <li>Hard lumps that don't resolve after several weeks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Proper Storage and Handling</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Before First Use</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Store in refrigerator at 36°F to 46°F (2°C to 8°C)</li>
                <li>Keep in original carton to protect from light</li>
                <li>Do not freeze—discard if frozen</li>
                <li>Check expiration date before using</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">After First Use</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Can be kept in refrigerator or at room temperature (up to 86°F/30°C)</li>
                <li>Discard 56 days after first use, even if medication remains</li>
                <li>Keep away from direct heat and light</li>
                <li>Always keep cap on when not in use</li>
                <li>Never store pen with needle attached</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Travel Tips</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use insulated travel case with ice pack if traveling more than 2 hours</li>
                <li>Don't check medication in luggage—keep in carry-on</li>
                <li>Bring prescription label and/or doctor's letter for airport security</li>
                <li>Pack extra needles in case of loss or damage</li>
                <li>Bring sharps container or use empty water bottle as temporary container</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Safe Needle Disposal</h2>
              <p className="text-muted-foreground leading-relaxed">
                Proper needle disposal is crucial for safety—never throw loose needles in regular trash.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Disposal Options</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>FDA-approved sharps container:</strong> Best option, available at pharmacies</li>
                <li><strong>Heavy-duty plastic container:</strong> Empty laundry detergent bottle works well</li>
                <li><strong>Community drop-off programs:</strong> Many pharmacies, hospitals, and health departments offer free disposal</li>
                <li><strong>Mail-back programs:</strong> Some areas offer sharps mail-back services</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Never</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Throw needles directly in trash</li>
                <li>Put in recycling bins</li>
                <li>Flush down toilet</li>
                <li>Recap needles with both hands (use one-handed technique or don't recap)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Troubleshooting Common Issues</h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Medication Leaking After Injection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Small droplet at injection site after removal is normal. To minimize: ensure you count to 6 before removing needle, and insert needle at proper 90-degree angle.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Needle Won't Attach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ensure you're screwing needle straight onto pen, not at an angle. If still won't attach, thread may be damaged—contact your pharmacy.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Dose Selector Stuck</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you can't turn selector to your dose, there may not be enough medication left in pen for that dose. Check remaining doses indicator.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-foreground">Forgot Which Day to Inject</h3>
              <p className="text-muted-foreground leading-relaxed">
                If less than 2 days late, inject as soon as you remember. If more than 2 days, skip that dose and inject on your next scheduled day. Never double up.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">The Bottom Line</h2>
              <p className="text-muted-foreground leading-relaxed">
                Proper injection technique becomes second nature with practice. Most people find that after 3-4 injections, the process feels routine and takes less than 2 minutes from start to finish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The key principles—site rotation, proper technique, and following safety guidelines—ensure you get the full benefit of your medication while minimizing discomfort and complications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you're ever unsure about any aspect of your injection technique, don't hesitate to ask your healthcare provider or pharmacist for a demonstration. Many providers offer video demonstrations or in-person training sessions.
              </p>
            </section>

            <section className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This article is for informational purposes only and does not constitute medical advice. Always follow the specific injection instructions provided by your healthcare provider and included with your medication. If you experience any concerning symptoms or have questions about injection technique, contact your healthcare provider immediately. The information provided here should not replace professional medical guidance or training.
              </p>
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-semibold mb-3 text-foreground">References</h3>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Novo Nordisk. Ozempic (semaglutide) Injection Instructions for Use. 2024.</li>
                <li>Novo Nordisk. Wegovy (semaglutide) Patient Information and Instructions. 2024.</li>
                <li>American Diabetes Association. Insulin Administration. Diabetes Care. 2023.</li>
                <li>FDA. Sharps Disposal Containers. U.S. Food and Drug Administration. 2023.</li>
                <li>Frid AH, et al. New Injection Recommendations for Patients with Diabetes. Diabetes Metab. 2016;42(4):S3-S18.</li>
              </ol>
            </section>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/treatments/semaglutide" className="flex-1">
              <Button size="lg" className="w-full">
                Start Semaglutide Treatment
              </Button>
            </Link>
            <Link to="/blog" className="flex-1">
              <Button size="lg" variant="outline" className="w-full">
                More Articles
              </Button>
            </Link>
          </div>
          
          <TopicClusterNav
            pillarPage={clusterNav.pillarPage}
            hubPage={clusterNav.hubPage}
            relatedArticles={clusterNav.relatedInCluster}
            topic="Dosage & Administration"
          />
          
          <RelatedArticles articles={[
            {
              title: "Semaglutide Dosage Guide",
              url: "/blog/semaglutide-dosage-guide",
              excerpt: "Complete guide to starting doses, titration schedules, and maintenance dosing for semaglutide.",
              category: "Semaglutide"
            },
            {
              title: "Semaglutide Side Effects",
              url: "/blog/semaglutide-side-effects",
              excerpt: "Understand common side effects and learn effective strategies to manage injection site reactions.",
              category: "Semaglutide"
            },
            {
              title: "Best Injection Sites for Semaglutide",
              url: "/blog/semaglutide-injection-site-reactions",
              excerpt: "Learn about injection site reactions, how to prevent them, and when to be concerned.",
              category: "Semaglutide"
            }
          ]} />
          
          <TopicClusterNav
            topic="Semaglutide Administration"
            relatedArticles={clusterNav.relatedInCluster}
            hubPage="/blog/semaglutide"
          />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default SemaglutideInjectionGuide;