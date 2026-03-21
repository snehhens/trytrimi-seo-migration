import { SEOHead } from "@/components/seo/SEOHead";
import { MedicalWebPageSchema } from "@/components/seo/MedicalWebPageSchema";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, Activity, Heart, ShieldAlert, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SideEffectsManagementHub() {
  const articles = [
    {
      title: "Managing Nausea on GLP-1 Medications",
      url: "/blog/managing-nausea-glp1",
      excerpt: "Practical strategies to minimize and manage nausea, the most common side effect of GLP-1 medications.",
      icon: Activity
    },
    {
      title: "Preventing and Treating GI Side Effects",
      url: "/blog/preventing-gi-side-effects-glp1",
      excerpt: "Complete guide to managing digestive issues including diarrhea, constipation, and stomach discomfort.",
      icon: Heart
    },
    {
      title: "When to Call Your Doctor: Warning Signs",
      url: "/blog/glp1-warning-signs-doctor",
      excerpt: "Important information on serious side effects and when to seek immediate medical attention.",
      icon: ShieldAlert
    },
    {
      title: "Optimizing Your Experience on GLP-1s",
      url: "/blog/optimizing-glp1-experience",
      excerpt: "Tips and strategies to maximize benefits while minimizing side effects for the best possible outcomes.",
      icon: Sparkles
    }
  ];

  return (
    <>
      <SEOHead
        title="Managing GLP-1 Side Effects: Complete Guide | Trimi"
        description="Comprehensive guide to managing side effects of GLP-1 weight loss medications. Learn how to handle nausea, GI issues, and optimize your experience for better outcomes."
        canonical="https://trytrimi.com/blog/side-effects-management-hub"
        keywords="GLP-1 side effects, semaglutide nausea, tirzepatide GI issues, weight loss medication side effects"
      />
      
      <MedicalWebPageSchema
        title="Managing GLP-1 Side Effects: Complete Guide"
        description="Expert guidance on managing and minimizing side effects of GLP-1 medications including nausea, digestive issues, and when to seek medical attention."
        url="/blog/side-effects-management-hub"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Activity className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Side Effects Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Managing GLP-1 Medication Side Effects
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Evidence-based strategies to minimize discomfort and optimize your experience with GLP-1 weight loss medications.
          </p>
        </header>

        {/* Overview Section */}
        <section className="mb-12">
          <Card className="p-8 bg-accent/30 border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Understanding GLP-1 Side Effects</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              While GLP-1 medications are highly effective for weight loss, they can cause side effects, particularly in the first few weeks. The good news is that most side effects are manageable and often diminish as your body adjusts to the medication.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50-70%</div>
                <div className="text-sm text-muted-foreground">Experience GI Side Effects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2-4 weeks</div>
                <div className="text-sm text-muted-foreground">Typical Adjustment Period</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">90%+</div>
                <div className="text-sm text-muted-foreground">Continue Treatment</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Key Topics Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Essential Guides for Side Effect Management</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Link
                  key={index}
                  to={article.url}
                  className="group"
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                          {article.title}
                          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Common Side Effects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Most Common Side Effects & Solutions</h2>
          <Card className="p-6 border-primary/20">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Nausea (44-58%)</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  The most common side effect, usually mild to moderate and improves over time.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Solutions: Eat smaller meals, avoid fatty foods, stay hydrated, take medication before bed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Diarrhea (30-40%)</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Digestive system adjusts to slowed gastric emptying.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Solutions: Increase fiber gradually, stay hydrated, avoid trigger foods, consider probiotics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Constipation (20-24%)</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Slowed GI motility can lead to infrequent bowel movements.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Solutions: Increase water and fiber intake, regular exercise, consider stool softeners if needed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Fatigue (11-15%)</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Reduced calorie intake and body adjustments can cause temporary tiredness.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Solutions: Ensure adequate protein and nutrient intake, maintain sleep schedule, gentle exercise.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Warning Signs */}
        <section className="mb-12">
          <Card className="p-6 bg-destructive/10 border-destructive/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <ShieldAlert className="h-6 w-6 text-destructive" />
              When to Seek Medical Attention
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                Severe abdominal pain that doesn't improve
              </p>
              <p className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                Persistent vomiting preventing hydration
              </p>
              <p className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                Signs of pancreatitis (severe upper abdominal pain radiating to back)
              </p>
              <p className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                Vision changes or severe headache
              </p>
              <p className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                Signs of allergic reaction (rash, difficulty breathing, swelling)
              </p>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="p-8 bg-primary/5 border-primary/20 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Need Support with Side Effects?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Trimi's healthcare team provides ongoing support to help you manage side effects and optimize your GLP-1 therapy experience.
            </p>
            <Link 
              to="/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Get Expert Support
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Card>
        </section>
      </article>
    </>
  );
}
