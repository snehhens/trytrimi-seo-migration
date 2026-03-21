import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, BookOpen, Pill, Scale, Clock, DollarSign, AlertCircle, CheckCircle, Heart, Zap } from "lucide-react";

export default function GLP1BeginnerGuide() {
  const faqItems = [
    {
      question: "What is a GLP-1 medication?",
      answer: "GLP-1 (glucagon-like peptide-1) medications are injectable drugs that mimic a natural hormone to reduce appetite, slow digestion, and help regulate blood sugar. They're FDA-approved for weight loss and diabetes management."
    },
    {
      question: "What's the difference between semaglutide and tirzepatide?",
      answer: "Semaglutide (Wegovy, Ozempic) targets only GLP-1 receptors, while tirzepatide (Mounjaro, Zepbound) targets both GLP-1 and GIP receptors. Tirzepatide typically produces slightly more weight loss (up to 22% vs 15-17%) but may have more GI side effects initially."
    },
    {
      question: "How much weight can I lose on GLP-1 medications?",
      answer: "Average weight loss is 15-17% of body weight with semaglutide and 20-22% with tirzepatide over 68-72 weeks. Individual results vary based on starting weight, diet, exercise, and medication adherence."
    },
    {
      question: "Are GLP-1 medications safe?",
      answer: "Yes, GLP-1 medications are FDA-approved with extensive clinical trial data. Common side effects include nausea and digestive issues that typically improve over time. Serious side effects are rare but require monitoring."
    },
    {
      question: "How long do you take GLP-1 medications?",
      answer: "Most people take GLP-1 medications long-term, similar to blood pressure or cholesterol medications. Studies show weight regain is common when stopping, so ongoing treatment is often recommended."
    }
  ];

  const relatedArticles = [
    { title: "Semaglutide vs Tirzepatide", url: "/blog/tirzepatide-vs-semaglutide", excerpt: "Head-to-head comparison of the two leading GLP-1 medications" },
    { title: "How to Start Semaglutide", url: "/blog/how-to-start-semaglutide", excerpt: "Step-by-step guide to beginning your treatment" },
    { title: "First Month on Semaglutide", url: "/blog/semaglutide-first-month", excerpt: "What to expect during your first month" },
    { title: "GLP-1 Agonists Compared", url: "/blog/glp1-agonists-compared", excerpt: "Complete comparison of all GLP-1 medications" }
  ];

  return (
    <>
      <BlogSEO
        title="GLP-1 Medications: A Beginner's Guide to Semaglutide and Tirzepatide"
        description="Everything beginners need to know about GLP-1 weight loss medications. Learn how semaglutide and tirzepatide work, their differences, costs, side effects, and how to get started."
        url="/blog/glp1-beginner-guide"
        publishDate="2025-12-05"
        modifiedDate="2025-12-05"
        imageUrl="/og-glp1-beginner.jpg"
        keywords={["what is glp-1", "glp-1 weight loss guide", "semaglutide vs tirzepatide beginner", "glp-1 medications", "wegovy ozempic mounjaro guide", "glp-1 for beginners"]}
        faqs={faqItems}
        medicalAudience={["Patient"]}
      />

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <SmartBreadcrumbs />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10">
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">Beginner Guide</Badge>
                <Badge variant="outline">GLP-1</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                GLP-1 Medications: A Beginner's Guide to Semaglutide and Tirzepatide
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Your complete introduction to the weight loss medications that are changing millions of lives. Everything you need to know before starting treatment.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Last updated: December 5, 2025</span>
                <span>•</span>
                <span>20 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                If you've heard about Ozempic, Wegovy, Mounjaro, or Zepbound but aren't sure what they are or how they work, you're in the right place. This comprehensive guide explains everything beginners need to know about GLP-1 medications for weight loss—in plain English.
              </p>

              <Card className="my-6 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    What You'll Learn in This Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    <li>• What GLP-1 medications are and how they work</li>
                    <li>• The difference between semaglutide and tirzepatide</li>
                    <li>• All the brand names explained (Ozempic, Wegovy, Mounjaro, etc.)</li>
                    <li>• Expected weight loss results and timelines</li>
                    <li>• Common side effects and how to manage them</li>
                    <li>• Costs and insurance coverage options</li>
                    <li>• How to know if you're a candidate</li>
                    <li>• How to get started with treatment</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 id="what-is-glp1">What Are GLP-1 Medications?</h2>

              <p>
                GLP-1 stands for <strong>glucagon-like peptide-1</strong>, a hormone your body naturally produces in your gut after eating. This hormone does several important things:
              </p>

              <ul>
                <li><strong>Signals fullness to your brain:</strong> Tells you when you've eaten enough</li>
                <li><strong>Slows stomach emptying:</strong> Makes you feel satisfied longer</li>
                <li><strong>Regulates blood sugar:</strong> Helps your pancreas release insulin appropriately</li>
                <li><strong>Reduces food cravings:</strong> Decreases the "food noise" in your head</li>
              </ul>

              <p>
                GLP-1 medications are synthetic versions of this hormone that work much longer and more powerfully than your natural GLP-1. While your body's GLP-1 lasts only minutes, these medications work for days—which is why most are given as once-weekly injections.
              </p>

              <Card className="my-6 border-primary/30">
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    The "Food Noise" Effect
                  </h4>
                  <p className="text-muted-foreground">
                    Many patients describe GLP-1 medications as "turning off" the constant thoughts about food. Instead of thinking about what to eat next, when to eat, and battling cravings all day, people report feeling neutral about food—able to eat when hungry and stop when satisfied without the mental struggle.
                  </p>
                </CardContent>
              </Card>

              <h2 id="brand-names">Understanding the Brand Names</h2>

              <p>
                The medication landscape can be confusing because the same drugs have different brand names for different uses. Here's your complete guide:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Pill className="h-5 w-5 text-blue-600" />
                      Semaglutide Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Wegovy</p>
                        <p className="text-sm text-muted-foreground">FDA-approved for weight loss. Higher doses (up to 2.4mg). Covered by some insurance for weight management.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Ozempic</p>
                        <p className="text-sm text-muted-foreground">FDA-approved for diabetes. Lower doses (up to 2.0mg). Often prescribed off-label for weight loss.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Rybelsus</p>
                        <p className="text-sm text-muted-foreground">Oral tablet form. FDA-approved for diabetes. Less effective for weight loss than injections.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Pill className="h-5 w-5 text-purple-600" />
                      Tirzepatide Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Zepbound</p>
                        <p className="text-sm text-muted-foreground">FDA-approved for weight loss. Full dose range (2.5-15mg). Newer to market than Mounjaro.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Mounjaro</p>
                        <p className="text-sm text-muted-foreground">FDA-approved for diabetes. Same medication, different branding. Often prescribed off-label for weight loss.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 id="semaglutide-vs-tirzepatide">Semaglutide vs Tirzepatide: Key Differences</h2>

              <p>
                The biggest question beginners have is: which medication is better? Here's an honest <InternalLink to="/blog/tirzepatide-vs-semaglutide">comparison of tirzepatide vs semaglutide</InternalLink>:
              </p>

              <Card className="my-6">
                <CardContent className="pt-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 font-semibold">Factor</th>
                          <th className="text-left py-2 font-semibold">Semaglutide</th>
                          <th className="text-left py-2 font-semibold">Tirzepatide</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">Mechanism</td>
                          <td className="py-2">GLP-1 only</td>
                          <td className="py-2">GLP-1 + GIP (dual action)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Avg Weight Loss</td>
                          <td className="py-2">15-17%</td>
                          <td className="py-2">20-22%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Dosing</td>
                          <td className="py-2">Once weekly</td>
                          <td className="py-2">Once weekly</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Max Dose</td>
                          <td className="py-2">2.4mg</td>
                          <td className="py-2">15mg</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Time on Market</td>
                          <td className="py-2">Longer (since 2021)</td>
                          <td className="py-2">Newer (since 2022)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">GI Side Effects</td>
                          <td className="py-2">Common but manageable</td>
                          <td className="py-2">Often more intense initially</td>
                        </tr>
                        <tr>
                          <td className="py-2">Cost (Brand)</td>
                          <td className="py-2">$1,000-1,400/mo</td>
                          <td className="py-2">$1,000-1,200/mo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <h3>Which Should You Choose?</h3>

              <ul>
                <li><strong>Choose semaglutide if:</strong> You want a medication with more long-term safety data, have a sensitive stomach, or your insurance covers Wegovy/Ozempic better</li>
                <li><strong>Choose tirzepatide if:</strong> You want maximum weight loss potential, have significant insulin resistance, or your insurance covers Mounjaro/Zepbound better</li>
              </ul>

              <h2 id="how-they-work">How GLP-1 Medications Actually Work</h2>

              <p>
                Understanding how these medications work helps you use them more effectively:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Heart className="h-5 w-5 text-red-500" />
                      Brain
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Acts on appetite centers in the hypothalamus to reduce hunger signals and food reward pathways. Decreases the constant "food noise."
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Clock className="h-5 w-5 text-blue-500" />
                      Stomach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Slows gastric emptying (how fast food leaves your stomach), making you feel full longer after eating smaller portions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      Pancreas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Improves insulin release in response to meals and reduces glucagon, helping regulate blood sugar levels naturally.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 id="expected-results">What Results Can You Expect?</h2>

              <p>
                Setting realistic expectations is crucial for success. Here's what the research shows:
              </p>

              <Card className="my-6 bg-primary/5">
                <CardHeader>
                  <CardTitle>Weight Loss Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-20 font-semibold">Month 1</div>
                      <div className="text-muted-foreground">3-5 lbs average. You're on starting doses focused on tolerance, not weight loss.</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-20 font-semibold">Month 3</div>
                      <div className="text-muted-foreground">5-10% of starting weight. Appetite suppression is noticeable, you're eating less naturally.</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-20 font-semibold">Month 6</div>
                      <div className="text-muted-foreground">10-15% of starting weight. Many reach maintenance dose, weight loss accelerates.</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-20 font-semibold">Month 12+</div>
                      <div className="text-muted-foreground">15-22% of starting weight. Maximum effects achieved with consistent use.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p>
                <strong>Example:</strong> For someone starting at 250 lbs, this means losing 37-55 lbs over 12-18 months on semaglutide, or 50-55+ lbs on tirzepatide.
              </p>

              <h2 id="side-effects">Common Side Effects and How to Manage Them</h2>

              <p>
                Most side effects occur during the dose escalation phase and improve as your body adjusts. Here's what to expect:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      Common Side Effects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Nausea (40-50%):</strong> Usually worst weeks 1-4, improves with time</li>
                      <li><strong>Constipation (20-25%):</strong> Increase fiber and water intake</li>
                      <li><strong>Diarrhea (15-20%):</strong> Often temporary during dose changes</li>
                      <li><strong>Decreased appetite:</strong> This is actually the goal!</li>
                      <li><strong>Fatigue (10-15%):</strong> Ensure adequate protein and calories</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Management Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Eat smaller, more frequent meals</li>
                      <li>• Avoid fatty, greasy, or spicy foods initially</li>
                      <li>• Stay well-hydrated throughout the day</li>
                      <li>• Take your time with dose increases</li>
                      <li>• Ginger tea or candies help with nausea</li>
                      <li>• Don't force yourself to eat if not hungry</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p>
                For a complete guide, read our article on <InternalLink to="/blog/semaglutide-side-effects">managing semaglutide side effects</InternalLink> or <InternalLink to="/blog/tirzepatide-side-effects">tirzepatide side effects</InternalLink>.
              </p>

              <h2 id="costs">Understanding the Costs</h2>

              <p>
                Cost is often the biggest barrier to GLP-1 medications. Here's the reality:
              </p>

              <Card className="my-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">Brand Name (Without Insurance)</p>
                      <p className="text-muted-foreground">$1,000-1,400 per month for Wegovy, Ozempic, Mounjaro, or Zepbound</p>
                    </div>
                    <div>
                      <p className="font-semibold">With Insurance Coverage</p>
                      <p className="text-muted-foreground">$0-300 per month with copay cards and insurance (varies widely by plan)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Compounded Versions</p>
                      <p className="text-muted-foreground">$200-500 per month through licensed compounding pharmacies (currently available due to FDA shortage status)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Telehealth Programs</p>
                      <p className="text-muted-foreground">$199-599 per month all-inclusive (medication, visits, support)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p>
                Learn more about <InternalLink to="/blog/semaglutide-cost">semaglutide costs</InternalLink> and affordable options in our detailed cost guide.
              </p>

              <h2 id="eligibility">Are You a Candidate?</h2>

              <p>
                FDA guidelines for GLP-1 weight loss medications require one of the following:
              </p>

              <Card className="my-6 bg-green-500/5 border-green-500/30">
                <CardHeader>
                  <CardTitle>Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><CheckCircle className="inline h-4 w-4 mr-2 text-green-600" /><strong>BMI ≥ 30</strong> (obesity) regardless of other conditions</li>
                    <li><CheckCircle className="inline h-4 w-4 mr-2 text-green-600" /><strong>BMI ≥ 27</strong> (overweight) with at least one weight-related condition:
                      <ul className="ml-6 mt-1 text-muted-foreground">
                        <li>• High blood pressure</li>
                        <li>• Type 2 diabetes or prediabetes</li>
                        <li>• High cholesterol</li>
                        <li>• Sleep apnea</li>
                        <li>• Heart disease</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h3>Who Should NOT Take GLP-1 Medications</h3>

              <ul>
                <li>Personal or family history of medullary thyroid cancer</li>
                <li>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
                <li>History of pancreatitis</li>
                <li>Pregnant or planning to become pregnant</li>
                <li>Severe kidney or liver disease (discuss with doctor)</li>
                <li>History of eating disorders (relative contraindication)</li>
              </ul>

              <h2 id="getting-started">How to Get Started</h2>

              <p>
                Ready to begin? Here are your options:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Traditional Route</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-sm">
                      <li><strong>1.</strong> Schedule appointment with PCP or endocrinologist</li>
                      <li><strong>2.</strong> Discuss weight history and treatment options</li>
                      <li><strong>3.</strong> Get prescription if eligible</li>
                      <li><strong>4.</strong> Work with insurance on coverage</li>
                      <li><strong>5.</strong> Fill at pharmacy</li>
                    </ol>
                    <p className="text-xs text-muted-foreground mt-2">Timeline: 2-4 weeks typically</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Telehealth Route</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-sm">
                      <li><strong>1.</strong> Complete online health questionnaire</li>
                      <li><strong>2.</strong> Video consultation with licensed provider</li>
                      <li><strong>3.</strong> Receive prescription if eligible</li>
                      <li><strong>4.</strong> Medication shipped to your door</li>
                      <li><strong>5.</strong> Ongoing virtual support</li>
                    </ol>
                    <p className="text-xs text-muted-foreground mt-2">Timeline: 3-7 days typically</p>
                  </CardContent>
                </Card>
              </div>

              <h2 id="first-month">What to Expect Your First Month</h2>

              <p>
                Your <InternalLink to="/blog/semaglutide-first-month">first month on GLP-1 medication</InternalLink> is about building tolerance, not achieving maximum weight loss:
              </p>

              <Card className="my-6">
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Week 1</h4>
                      <p className="text-sm text-muted-foreground">First injection (lowest dose). May notice decreased appetite within 24-48 hours. Some people feel mild nausea.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Week 2</h4>
                      <p className="text-sm text-muted-foreground">Second injection. Body is adjusting. Appetite suppression may be more noticeable. Side effects may increase or decrease.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Week 3</h4>
                      <p className="text-sm text-muted-foreground">Third injection. Eating patterns are changing. May notice clothes fitting better. Most people lose 3-5 lbs by now.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Week 4</h4>
                      <p className="text-sm text-muted-foreground">Fourth injection. Preparing for dose increase. Establish baseline weight and measurements to track progress.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 id="tips-for-success">Tips for Maximum Success</h2>

              <ul>
                <li><strong>Protein first:</strong> Eat protein at every meal to preserve muscle mass</li>
                <li><strong>Stay hydrated:</strong> Drink 64-80oz of water daily</li>
                <li><strong>Move your body:</strong> Add resistance training to maintain muscle</li>
                <li><strong>Be patient:</strong> Results compound over months, not days</li>
                <li><strong>Track progress:</strong> Measurements matter more than scale weight</li>
                <li><strong>Plan for the long term:</strong> This is a marathon, not a sprint</li>
              </ul>

              <h2 id="conclusion">Conclusion</h2>

              <p>
                GLP-1 medications represent a significant breakthrough in weight management. They work by addressing the biological drivers of obesity—not through willpower or restriction, but by changing how your brain and body respond to food.
              </p>

              <p>
                While not a magic solution (lifestyle changes still matter), GLP-1 medications like semaglutide and tirzepatide give many people the metabolic support they need to finally achieve sustainable weight loss after years of struggling.
              </p>

              <p>
                If you're considering GLP-1 therapy, consult with a healthcare provider who can evaluate your individual situation and help you choose the best approach for your health goals.
              </p>

              <Card className="mt-8 bg-primary/10 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Ready to Start Your GLP-1 Journey?</h3>
                  <p className="text-muted-foreground mb-4">
                    Get personalized guidance, affordable access, and ongoing support from our medical team.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/get-started">
                      Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <TopicClusterNav
              topic="getting started"
              relatedArticles={relatedArticles}
            />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
