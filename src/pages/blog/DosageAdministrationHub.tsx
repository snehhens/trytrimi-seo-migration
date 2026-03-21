import { Helmet } from "@/compat/react-helmet-async";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { Syringe, ArrowRight, Calendar, ClipboardList, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const DosageAdministrationHub = () => {
  const articles = [
    {
      title: "Semaglutide Dosage Guide: Weekly Schedule Explained",
      url: "/blog/semaglutide-dosage-guide",
      excerpt: "Complete guide to semaglutide dosing schedules, from starter doses to maintenance levels.",
      icon: Calendar,
      readTime: "8 min read"
    },
    {
      title: "Tirzepatide Dosing Schedule: What to Expect",
      url: "/blog/tirzepatide-dosing-schedule",
      excerpt: "Understanding tirzepatide dose escalation and finding your optimal dose.",
      icon: ClipboardList,
      readTime: "7 min read"
    },
    {
      title: "First GLP-1 Injection Guide: Step-by-Step Instructions",
      url: "/blog/first-glp1-injection-guide",
      excerpt: "Everything you need to know for your first injection, with detailed instructions and tips.",
      icon: Syringe,
      readTime: "6 min read"
    },
    {
      title: "Managing Missed Doses: What to Do and When to Resume",
      url: "/blog/managing-missed-doses",
      excerpt: "Guidelines for handling missed doses safely and getting back on schedule.",
      icon: AlertCircle,
      readTime: "5 min read"
    },
    {
      title: "Injection Site Rotation: Best Practices for Comfort",
      url: "/blog/injection-site-rotation",
      excerpt: "Learn proper injection site rotation to minimize discomfort and maximize effectiveness.",
      icon: Clock,
      readTime: "5 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>GLP-1 Dosage & Administration Guide | Injection Tips & Schedules</title>
        <meta 
          name="description" 
          content="Complete guide to GLP-1 dosing schedules, injection techniques, and administration best practices for semaglutide and tirzepatide treatments." 
        />
        <meta name="keywords" content="GLP-1 dosage, injection guide, semaglutide dosing, tirzepatide schedule, missed dose, injection sites" />
        <link rel="canonical" href="https://trytrimi.com/blog/dosage-administration-hub" />
      </Helmet>

      <OptimizedNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Syringe className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Dosage & Administration Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master your GLP-1 treatment with comprehensive guides on dosing schedules, injection techniques, and administration best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {articles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Link to={article.url} className="group">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        <Link 
                          to={article.url}
                          className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                        >
                          Read more
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get personalized guidance on dosing and administration from our experienced medical team.
            </p>
            <Button size="lg" asChild>
              <Link to="/how-it-works">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </div>
      </main>

      <OptimizedFooter />
    </>
  );
};

export default DosageAdministrationHub;
