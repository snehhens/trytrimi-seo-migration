import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { BookOpen, ArrowRight, DollarSign, Rocket, Scale, AlertCircle, Clock, TrendingUp, Heart, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

const SemaglutideGuide = () => {
  const hubSections = [
    {
      title: "Cost & Affordability",
      icon: DollarSign,
      description: "Everything you need to know about semaglutide pricing, insurance coverage, and affordable access options.",
      link: "/blog/cost-affordability-hub",
      articles: [
        "Semaglutide cost without insurance",
        "Insurance coverage strategies",
        "Cheapest semaglutide options",
        "Savings programs and coupons"
      ]
    },
    {
      title: "Getting Started",
      icon: Rocket,
      description: "Step-by-step guides for beginning your semaglutide journey, from first consultation to first injection.",
      link: "/blog/getting-started-hub",
      articles: [
        "Quick start guide",
        "Eligibility requirements",
        "First month expectations",
        "Travel with semaglutide"
      ]
    },
    {
      title: "Dosage & Administration",
      icon: Pill,
      description: "Master proper dosing schedules, injection techniques, and administration best practices.",
      link: "/blog/dosage-administration-hub",
      articles: [
        "Weekly dosage schedule",
        "Injection technique guide",
        "Managing missed doses",
        "Injection site rotation"
      ]
    },
    {
      title: "Side Effects Management",
      icon: AlertCircle,
      description: "Learn how to identify, manage, and minimize common side effects for a comfortable treatment experience.",
      link: "/blog/side-effects-management-hub",
      articles: [
        "Common side effects guide",
        "Nausea management strategies",
        "Best foods to eat",
        "When to call your doctor"
      ]
    },
    {
      title: "Nutrition & Diet",
      icon: Heart,
      description: "Optimize your diet for maximum results with meal plans, recipes, and nutrition tips for semaglutide success.",
      link: "/blog/best-foods-recipes-semaglutide",
      articles: [
        "Best foods and recipes",
        "High-protein meal plans",
        "Foods to avoid",
        "Hydration strategies"
      ]
    },
    {
      title: "Results & Effectiveness",
      icon: TrendingUp,
      description: "Understand what to expect, realistic timelines, and how to maximize your weight loss results.",
      link: "/blog/long-term-outcomes-hub",
      articles: [
        "Weight loss timeline",
        "Success rate statistics",
        "Plateau management",
        "Maintaining results long-term"
      ]
    },
    {
      title: "Comparisons",
      icon: Scale,
      description: "Compare semaglutide with other treatments to make informed decisions about your weight loss journey.",
      link: "/blog/comparisons-hub",
      articles: [
        "Semaglutide vs Tirzepatide",
        "Brand name vs compounded",
        "Wegovy vs Ozempic",
        "Comparing all GLP-1 options"
      ]
    }
  ];

  const keyBenefits = [
    {
      icon: Heart,
      title: "Proven Weight Loss",
      description: "Average 15-20% body weight reduction in clinical trials"
    },
    {
      icon: Clock,
      title: "Once-Weekly Dosing",
      description: "Convenient injection schedule that fits your lifestyle"
    },
    {
      icon: TrendingUp,
      title: "Metabolic Benefits",
      description: "Improved blood sugar control and cardiovascular health"
    }
  ];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <FAQSchema
        faqs={[
          {
            question: "What is semaglutide and how does it work for weight loss?",
            answer: "Semaglutide is a GLP-1 receptor agonist medication that works by mimicking a hormone that regulates appetite and food intake. It helps reduce hunger, increase feelings of fullness, and can lead to 15-20% body weight loss in clinical trials."
          },
          {
            question: "How much does semaglutide cost without insurance?",
            answer: "Compounded semaglutide typically costs $99-299/month. Brand-name Wegovy can cost $1,000+ per month without insurance. Compounded versions offer the same active ingredient at a fraction of the cost."
          },
          {
            question: "What are the common side effects of semaglutide?",
            answer: "Common side effects include nausea, vomiting, diarrhea, constipation, and stomach discomfort. These usually improve over time as your body adjusts to the medication."
          },
          {
            question: "How long does it take to see results with semaglutide?",
            answer: "Most people start seeing noticeable weight loss within 4-8 weeks. Maximum results are typically achieved after 16-20 weeks at the therapeutic dose."
          }
        ]}
      />
      <SEOHead
        title="Complete Semaglutide Guide 2025 | Cost, Dosage, Side Effects & Results"
        description="The ultimate guide to semaglutide for weight loss. Learn about costs, insurance coverage, dosing schedules, side effects, results, and how to get started safely."
        canonical="https://trytrimi.com/semaglutide-guide"
        keywords="semaglutide guide, Wegovy, Ozempic, weight loss medication, GLP-1, semaglutide cost, semaglutide dosage, side effects"
      />

      <OptimizedNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <BookOpen className="h-20 w-20 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Complete Semaglutide Guide
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Everything you need to know about semaglutide for weight loss - from costs and coverage to dosing, side effects, and long-term results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/how-it-works">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/treatments/semaglutide">
                    View Treatment Options
                  </Link>
                </Button>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {keyBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="p-6 text-center bg-background/50 backdrop-blur">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Hub Sections */}
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Resource Library
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our expertly curated guides covering every aspect of semaglutide treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {hubSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                      <p className="text-muted-foreground mb-4">{section.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6 ml-4">
                    {section.articles.map((article, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {article}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to={section.link}>
                      Explore {section.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* What is Semaglutide Section */}
          <Card className="p-8 mb-12 bg-accent/30">
            <h2 className="text-3xl font-bold mb-4">What is Semaglutide?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Semaglutide is a GLP-1 receptor agonist medication originally developed for type 2 diabetes management, now FDA-approved for chronic weight management. Available under brand names Wegovy (for weight loss) and Ozempic (for diabetes), semaglutide works by mimicking a natural hormone that regulates appetite and blood sugar levels.
              </p>
              <p className="text-muted-foreground mb-4">
                The medication has shown remarkable effectiveness in clinical trials, with participants losing an average of 15-20% of their body weight when combined with lifestyle modifications. Beyond weight loss, semaglutide offers additional health benefits including improved cardiovascular outcomes, better blood sugar control, and reduced inflammation.
              </p>
              <p className="text-muted-foreground">
                Administered as a once-weekly subcutaneous injection, semaglutide offers a convenient treatment option for individuals with a BMI of 30 or higher, or 27 or higher with weight-related health conditions.
              </p>
            </div>
          </Card>

          {/* Popular Topics */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Most Popular Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/blog/semaglutide-cost-without-insurance" className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-primary">Cost Without Insurance</h4>
                <p className="text-sm text-muted-foreground">Learn about pricing and affordable access options</p>
              </Link>
              <Link to="/blog/semaglutide-dosage-guide" className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-primary">Dosage Schedule</h4>
                <p className="text-sm text-muted-foreground">Complete guide to weekly dosing protocols</p>
              </Link>
              <Link to="/blog/best-foods-on-semaglutide" className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-primary">Best Foods to Eat</h4>
                <p className="text-sm text-muted-foreground">Optimize your diet for best results</p>
              </Link>
              <Link to="/blog/semaglutide-before-after-results" className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-primary">Before & After Results</h4>
                <p className="text-sm text-muted-foreground">Real results and expectations by month</p>
              </Link>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/20 py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Semaglutide Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized medical guidance, affordable pricing, and ongoing support throughout your weight loss journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/how-it-works">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/blog/semaglutide-weight-loss-online-reviews">
                  Read Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default SemaglutideGuide;
