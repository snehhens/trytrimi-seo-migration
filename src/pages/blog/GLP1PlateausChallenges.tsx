import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { InternalLink } from "@/components/blog/InternalLink";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { Card } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Target, Lightbulb, Dumbbell, Utensils, Brain, RefreshCw } from "lucide-react";

const GLP1PlateausChallenges = () => {
  const defined = {
    title: "Overcoming Plateaus and Challenges in GLP-1 Weight Loss Journeys",
    description: "Practical strategies for breaking through weight loss plateaus on semaglutide or tirzepatide. Evidence-based tips for stalls, motivation, and dose adjustments.",
    slug: "glp1-weight-loss-plateaus-challenges",
    publishedDate: "2024-12-05",
    modifiedDate: "2024-12-05",
    author: "Trimi Medical Team",
    readTime: "13 min read",
    category: "Long-Term Outcomes",
    keywords: [
      "GLP-1 weight loss plateau",
      "semaglutide not working",
      "tirzepatide challenges",
      "weight loss stall GLP-1",
      "breaking plateau semaglutide"
    ]
  };

  const faqItems = [
    {
      question: "Why did my weight loss stop on semaglutide?",
      answer: "Weight loss plateaus are normal and expected. After initial rapid loss, your body adapts by reducing metabolic rate and increasing hunger hormones. Most patients experience 2-4 plateaus during treatment. Plateaus typically last 2-6 weeks before weight loss resumes."
    },
    {
      question: "Should I increase my GLP-1 dose if I hit a plateau?",
      answer: "A dose increase may help if you have not reached the maximum dose and have been at your current dose for 4+ weeks. However, lifestyle adjustments should be tried first, as higher doses increase side effect risk without guaranteeing breakthrough."
    },
    {
      question: "Is it normal for GLP-1 medications to stop working?",
      answer: "True medication failure is rare. Most perceived failures are plateaus or unrealistic expectations. About 10-15% of patients are low responders who may benefit from medication switches or combination therapy."
    },
    {
      question: "How long should a plateau last before I worry?",
      answer: "Plateaus lasting 4-8 weeks are normal. If weight is stable for 12+ weeks with no measurement changes (waist, clothing fit), consult your provider about adjustments. Remember to also track non-scale victories."
    }
  ];

  return (
    <>
      <BlogSEO
        title={defined.title}
        description={defined.description}
        url={`/blog/${defined.slug}`}
        publishDate={defined.publishedDate}
        modifiedDate={defined.modifiedDate}
        authorName={defined.author}
        keywords={defined.keywords}
        faqs={faqItems}
        category={defined.category}
      />

      <OptimizedNavigation />
      <SmartBreadcrumbs />

      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{defined.category}</span>
              <span>•</span>
              <span>{defined.readTime}</span>
              <span>•</span>
              <span>Updated {defined.modifiedDate}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {defined.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {defined.description}
            </p>
          </header>

          <TopicClusterNav
            topic="Long-Term Outcomes"
            hubPage="/blog/long-term-outcomes-hub"
            relatedArticles={[
              { title: "Weight Regain Prevention", url: "/blog/weight-regain-prevention-glp1", excerpt: "Strategies to maintain weight loss" },
              { title: "GLP-1 Long-Term Effects", url: "/blog/glp1-long-term-effects-maintenance", excerpt: "Understanding long-term therapy" }
            ]}
          />

          <div className="prose prose-lg max-w-none">
            <Card className="p-6 bg-accent/30 border-primary/20 mb-8">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">The Reality of Plateaus</h4>
                  <p className="text-muted-foreground text-sm">
                    Almost everyone on <InternalLink to="/semaglutide-guide">semaglutide</InternalLink> or <InternalLink to="/tirzepatide-guide">tirzepatide</InternalLink> experiences plateaus. Research shows 85% of patients hit at least 2 stalls during their weight loss journey. This is biology, not failure.
                  </p>
                </div>
              </div>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                Why Plateaus Happen
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Metabolic Adaptation</h3>
                  <p className="text-muted-foreground text-sm">
                    As you lose weight, your body requires fewer calories to function. Your metabolism slows to protect against further weight loss—an evolutionary survival mechanism.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Hormonal Rebalancing</h3>
                  <p className="text-muted-foreground text-sm">
                    Leptin (satiety hormone) decreases with fat loss while ghrelin (hunger hormone) increases. Your body is fighting to regain lost weight.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Medication Tolerance</h3>
                  <p className="text-muted-foreground text-sm">
                    Some adaptation to appetite suppression can occur over time, though this is usually partial. GLP-1 receptors do not typically "burn out."
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Body Composition Shifts</h3>
                  <p className="text-muted-foreground text-sm">
                    You may be gaining muscle while losing fat, especially if exercising. Scale weight stalls while body composition improves.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                Breaking Through: Evidence-Based Strategies
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Utensils className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">1. Recalibrate Your Calories</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        As you lose weight, your calorie needs decrease. A person who lost 30 lbs needs 200-300 fewer daily calories than before.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Track food intake for 1 week to identify calorie creep</li>
                        <li>• Recalculate TDEE (Total Daily Energy Expenditure)</li>
                        <li>• Focus on protein (1g per lb goal body weight)</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Dumbbell className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">2. Add or Modify Exercise</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Resistance training builds muscle, which burns more calories at rest and prevents the "skinny fat" effect.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Start strength training 2-3x/week if you haven't</li>
                        <li>• Add HIIT sessions to boost metabolism</li>
                        <li>• Increase daily movement (steps, walking meetings)</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <RefreshCw className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">3. Consider Dose Adjustments</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        If lifestyle changes do not break the plateau after 4-6 weeks, discuss dose increases with your provider.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Semaglutide: Can increase up to 2.4mg weekly</li>
                        <li>• Tirzepatide: Can increase up to 13.5mg weekly</li>
                        <li>• Higher doses = more side effects, so titrate carefully</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Brain className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">4. Address Behavioral Factors</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Emotional eating, stress, and poor sleep can stall progress even on medication.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Prioritize 7-9 hours of quality sleep</li>
                        <li>• Manage stress through meditation or therapy</li>
                        <li>• Identify and address emotional eating triggers</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                When to Worry vs. When to Wait
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-700 dark:text-green-300 mb-3">Normal Plateau Signs</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Scale stable but clothes fitting better</li>
                    <li>• Measurements still decreasing</li>
                    <li>• Energy and mood remain good</li>
                    <li>• Appetite still suppressed</li>
                    <li>• Duration less than 8 weeks</li>
                  </ul>
                </Card>
                <Card className="p-6 border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-3">Time to Consult Provider</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• No progress for 12+ weeks</li>
                    <li>• Appetite returning significantly</li>
                    <li>• Weight regain occurring</li>
                    <li>• Measurements also stalled</li>
                    <li>• New symptoms developing</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Common Challenges and Solutions</h2>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">"The medication stopped working"</h3>
                  <p className="text-muted-foreground text-sm">
                    <strong>Reality:</strong> True medication failure is rare. More likely causes: calorie creep, reduced activity, or reached body's "defended" weight. Solution: Detailed food diary, activity audit, and realistic goal setting.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">"I lost motivation after initial success"</h3>
                  <p className="text-muted-foreground text-sm">
                    <strong>Solution:</strong> Set non-scale goals (fitness achievements, lab improvements), find an accountability partner, celebrate non-scale victories, and remember that maintenance is success.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">"Side effects are making it hard to eat healthy"</h3>
                  <p className="text-muted-foreground text-sm">
                    <strong>Solution:</strong> Focus on nutrient-dense foods in small portions, prioritize protein first, consider timing adjustments, and discuss dose reduction if severe.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">"Social situations derail my progress"</h3>
                  <p className="text-muted-foreground text-sm">
                    <strong>Solution:</strong> Plan ahead for restaurants/events, focus on protein, allow flexibility without guilt, and remember one meal does not define your journey.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-semibold mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </Card>
                ))}
              </div>
            </section>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center">
              <h2 className="text-2xl font-bold mb-4">Stuck on Your Weight Loss Journey?</h2>
              <p className="text-muted-foreground mb-6">
                Our medical team can help identify what is causing your plateau and develop a personalized breakthrough strategy.
              </p>
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Personalized Support
              </a>
            </Card>
          </div>
        </article>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default GLP1PlateausChallenges;