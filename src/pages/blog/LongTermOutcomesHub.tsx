import { Helmet } from "@/compat/react-helmet-async";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { ArrowRight, TrendingUp, Calendar, Heart, Activity, CheckCircle } from "lucide-react";
import { Link } from "@/compat/react-router-dom";
import { Button } from "@/components/ui/button";

export default function LongTermOutcomesHub() {
  const articles = [
    {
      title: "Tirzepatide and Semaglutide: Long-Term Effects and Maintenance",
      url: "/blog/glp1-long-term-effects-maintenance",
      excerpt: "Understanding what happens long-term on GLP-1 medications, weight maintenance after stopping, and strategies for lasting success.",
      icon: TrendingUp,
      readTime: "18 min"
    },
    {
      title: "Maintaining Weight Loss After Stopping GLP-1s",
      url: "/blog/maintaining-weight-loss-after-glp1",
      excerpt: "Evidence-based strategies for sustaining your weight loss results after discontinuing semaglutide or tirzepatide therapy.",
      icon: TrendingUp,
      readTime: "8 min"
    },
    {
      title: "Long-Term Health Effects of Semaglutide: 5-Year Data",
      url: "/blog/long-term-health-effects-semaglutide",
      excerpt: "Comprehensive analysis of extended semaglutide use on cardiovascular health, metabolic markers, and overall wellbeing.",
      icon: Heart,
      readTime: "10 min"
    },
    {
      title: "Sustainability Strategies for GLP-1 Therapy",
      url: "/blog/sustainability-strategies-glp1-therapy",
      excerpt: "Creating a sustainable long-term treatment plan with GLP-1 medications for lasting weight management success.",
      icon: Calendar,
      readTime: "7 min"
    },
    {
      title: "Lifestyle Changes for Post-GLP-1 Success",
      url: "/blog/lifestyle-changes-post-glp1-success",
      excerpt: "Building healthy habits during GLP-1 treatment to ensure continued success after medication discontinuation.",
      icon: Activity,
      readTime: "9 min"
    },
    {
      title: "Long-Term Metabolic Benefits of GLP-1 Medications",
      url: "/blog/long-term-metabolic-benefits-glp1",
      excerpt: "Understanding how GLP-1 therapies create lasting improvements in insulin sensitivity, inflammation, and metabolic health.",
      icon: CheckCircle,
      readTime: "8 min"
    },
    {
      title: "Managing Expectations for Long-Term GLP-1 Use",
      url: "/blog/managing-expectations-long-term-glp1",
      excerpt: "Setting realistic goals and understanding what to expect from extended GLP-1 therapy for weight management.",
      icon: TrendingUp,
      readTime: "6 min"
    },
    {
      title: "Weight Regain After Stopping GLP-1: Prevention Strategies",
      url: "/blog/weight-regain-prevention-glp1",
      excerpt: "Learn why weight regain occurs after stopping GLP-1 medications and discover evidence-based strategies to maintain your weight loss long-term.",
      icon: TrendingUp,
      readTime: "14 min"
    },
    {
      title: "Overcoming GLP-1 Weight Loss Plateaus",
      url: "/blog/glp1-weight-loss-plateaus-challenges",
      excerpt: "Practical strategies for breaking through weight loss stalls on semaglutide or tirzepatide and maximizing your results.",
      icon: Activity,
      readTime: "11 min"
    },
    {
      title: "Real-World GLP-1 Weight Loss Results: Clinical Studies",
      url: "/blog/real-world-results-glp1-studies-2025",
      excerpt: "Compare recent real-world tirzepatide and semaglutide outcomes from 2025 observational studies.",
      icon: TrendingUp,
      readTime: "10 min"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Long-Term Outcomes & Sustainability | GLP-1 Weight Loss Guide</title>
        <meta 
          name="description" 
          content="Comprehensive guide to long-term GLP-1 outcomes, maintenance strategies, and sustainable weight loss success after semaglutide or tirzepatide therapy." 
        />
        <meta name="keywords" content="GLP-1 long-term outcomes, maintaining weight loss, semaglutide sustainability, tirzepatide long-term effects, post-GLP-1 success" />
        <link rel="canonical" href="https://trytrimi.com/blog/long-term-outcomes-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <OptimizedNavigation />
        
        <main className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Long-Term Outcomes & Sustainability
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evidence-based insights on maintaining your weight loss success, understanding long-term health impacts, 
              and creating sustainable strategies for lasting results with GLP-1 medications.
            </p>
          </div>

          {/* Key Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Link 
                  key={index}
                  to={article.url}
                  className="group block p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium">
                    Read article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Start Your Weight Loss Journey?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get personalized GLP-1 treatment with ongoing support for long-term success. 
              Our medical team helps you build sustainable habits for lasting results.
            </p>
            <Button size="lg" asChild>
              <Link to="/">Get Started Today</Link>
            </Button>
          </div>
        </main>

        <OptimizedFooter />
      </div>
    </>
  );
}
