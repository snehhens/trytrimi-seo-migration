import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { BookOpen, ArrowRight, DollarSign, Rocket, Scale, AlertCircle, Clock, TrendingUp, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const TirzepatideGuide = () => {
  const hubSections = [
    {
      title: "Cost & Affordability",
      icon: DollarSign,
      description: "Complete breakdown of tirzepatide costs, insurance coverage options, and strategies for affordable access.",
      link: "/blog/cost-affordability-hub",
      articles: [
        "Tirzepatide pricing guide",
        "Insurance coverage strategies",
        "Mounjaro vs Zepbound costs",
        "Savings programs availability"
      ]
    },
    {
      title: "Getting Started",
      icon: Rocket,
      description: "Everything you need to begin tirzepatide treatment, from eligibility to your first injection.",
      link: "/blog/getting-started-hub",
      articles: [
        "Tirzepatide eligibility",
        "Starting tirzepatide guide",
        "First month expectations",
        "Provider selection tips"
      ]
    },
    {
      title: "Dosage & Administration",
      icon: Zap,
      description: "Master tirzepatide dosing schedules, proper injection technique, and administration guidelines.",
      link: "/blog/dosage-administration-hub",
      articles: [
        "Tirzepatide dosing schedule",
        "Dose escalation protocol",
        "Injection best practices",
        "Managing dose adjustments"
      ]
    },
    {
      title: "Side Effects Management",
      icon: AlertCircle,
      description: "Learn to identify, manage, and minimize side effects for optimal comfort during treatment.",
      link: "/blog/side-effects-management-hub",
      articles: [
        "Common side effects",
        "Gastrointestinal management",
        "Dietary adjustments",
        "Safety monitoring"
      ]
    },
    {
      title: "Results & Effectiveness",
      icon: TrendingUp,
      description: "Understand realistic expectations, timelines, and strategies for maximizing weight loss results.",
      link: "/blog/long-term-outcomes-hub",
      articles: [
        "Weight loss expectations",
        "Clinical trial results",
        "Long-term outcomes",
        "Success optimization"
      ]
    },
    {
      title: "Comparisons",
      icon: Scale,
      description: "Compare tirzepatide with semaglutide and other treatments to make informed decisions.",
      link: "/blog/comparisons-hub",
      articles: [
        "Tirzepatide vs Semaglutide",
        "Mounjaro vs Zepbound",
        "Dual-action benefits",
        "Effectiveness comparison"
      ]
    }
  ];

  const keyBenefits = [
    {
      icon: Heart,
      title: "Superior Weight Loss",
      description: "Average 20-25% body weight reduction - highest among GLP-1 medications"
    },
    {
      icon: Zap,
      title: "Dual-Action Formula",
      description: "Targets both GLP-1 and GIP receptors for enhanced effectiveness"
    },
    {
      icon: Clock,
      title: "Once-Weekly Injection",
      description: "Convenient dosing schedule that fits seamlessly into your routine"
    }
  ];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <FAQSchema
        faqs={[
          {
            question: "What is tirzepatide and how does it differ from semaglutide?",
            answer: "Tirzepatide is a dual GIP/GLP-1 receptor agonist that targets two hormones instead of one. Clinical trials show it can produce up to 22% body weight loss compared to ~15% with semaglutide, making it the most effective weight loss medication available."
          },
          {
            question: "How much does tirzepatide cost?",
            answer: "Compounded tirzepatide typically costs $125-399/month. Brand-name Mounjaro or Zepbound can cost $1,000+ per month without insurance. Compounded versions provide the same active ingredient at significant savings."
          },
          {
            question: "What is the tirzepatide dosing schedule?",
            answer: "Tirzepatide starts at 1.5mg weekly for 4 weeks, then increases through 3mg, 6mg, 9mg, 11mg, up to a maximum of 13.5mg. Dose escalation helps minimize side effects while achieving optimal results."
          },
          {
            question: "Is tirzepatide more effective than semaglutide?",
            answer: "Yes, clinical trials show tirzepatide produces greater weight loss (up to 22% vs ~15%) due to its dual-action mechanism on both GLP-1 and GIP receptors. However, individual results may vary."
          }
        ]}
      />
      <SEOHead
        title="Complete Tirzepatide Guide 2025 | Mounjaro, Zepbound Cost, Dosage & Results"
        description="The ultimate guide to tirzepatide (Mounjaro, Zepbound) for weight loss. Learn about costs, insurance, dosing protocols, side effects, results, and how to start."
        canonical="https://trytrimi.com/tirzepatide-guide"
        keywords="tirzepatide guide, Mounjaro, Zepbound, GIP/GLP-1, weight loss medication, tirzepatide cost, tirzepatide dosage, dual incretin"
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
                Complete Tirzepatide Guide
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Everything you need to know about tirzepatide (Mounjaro & Zepbound) - the dual-action GLP-1/GIP medication showing superior weight loss results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/how-it-works">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/treatments/tirzepatide">
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
              Explore our expertly curated guides covering every aspect of tirzepatide treatment.
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

          {/* What is Tirzepatide Section */}
          <Card className="p-8 mb-12 bg-accent/30">
            <h2 className="text-3xl font-bold mb-4">What is Tirzepatide?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Tirzepatide is a groundbreaking dual-action medication that targets both GLP-1 and GIP receptors, making it uniquely effective for weight management. Available under brand names Mounjaro (for type 2 diabetes) and Zepbound (for weight loss), tirzepatide represents the next generation of metabolic medications.
              </p>
              <p className="text-muted-foreground mb-4">
                Clinical trials have demonstrated that tirzepatide achieves superior weight loss compared to single-action GLP-1 medications, with participants losing an average of 20-25% of their body weight. This dual-receptor approach not only enhances weight loss but also provides comprehensive metabolic benefits including improved insulin sensitivity, better blood sugar control, and cardiovascular health improvements.
              </p>
              <p className="text-muted-foreground">
                Administered as a convenient once-weekly subcutaneous injection, tirzepatide is FDA-approved for adults with a BMI of 30 or higher, or 27 or higher with at least one weight-related comorbidity such as hypertension, type 2 diabetes, or dyslipidemia.
              </p>
            </div>
          </Card>

          {/* Popular Topics */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Most Popular Topics</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/blog/tirzepatide-insurance-coverage" className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-primary">Insurance Coverage</h4>
                <p className="text-sm text-muted-foreground">Navigate insurance approval and coverage options</p>
              </Link>
              <Link to="/blog/tirzepatide-dosing-schedule" className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-primary">Dosing Schedule</h4>
                <p className="text-sm text-muted-foreground">Complete guide to dose escalation protocol</p>
              </Link>
              <Link to="/blog/semaglutide-vs-tirzepatide" className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-primary">vs Semaglutide</h4>
                <p className="text-sm text-muted-foreground">Compare effectiveness and choose the right option</p>
              </Link>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/20 py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Tirzepatide Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the most effective weight loss medication available. Get personalized medical guidance, affordable pricing, and comprehensive support.
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

export default TirzepatideGuide;
