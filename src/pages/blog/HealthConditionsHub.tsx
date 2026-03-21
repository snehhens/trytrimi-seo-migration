import { Helmet } from "@/compat/react-helmet-async";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { Heart, ArrowRight, Activity, Stethoscope, Brain, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const HealthConditionsHub = () => {
  const articles = [
    {
      title: "GLP-1s and Type 2 Diabetes: Beyond Weight Loss",
      url: "/blog/glp1-diabetes-benefits",
      excerpt: "How GLP-1 medications improve blood sugar control and reduce diabetes complications.",
      icon: Droplets,
      readTime: "9 min read"
    },
    {
      title: "Cardiovascular Benefits of GLP-1 Medications",
      url: "/blog/long-term-metabolic-benefits-glp1",
      excerpt: "Understanding heart health improvements and cardiovascular risk reduction with GLP-1 therapy.",
      icon: Heart,
      readTime: "8 min read"
    },
    {
      title: "GLP-1 Treatment for PCOS: What You Need to Know",
      url: "/blog/glp1-pcos-treatment",
      excerpt: "How GLP-1 medications can help manage PCOS symptoms and improve metabolic health.",
      icon: Activity,
      readTime: "7 min read"
    },
    {
      title: "Pre-Diabetes and GLP-1s: Prevention Strategies",
      url: "/blog/prediabetes-glp1-prevention",
      excerpt: "Using GLP-1 therapy to prevent progression from pre-diabetes to type 2 diabetes.",
      icon: Stethoscope,
      readTime: "6 min read"
    },
    {
      title: "GLP-1s and Thyroid Health: Safety Considerations",
      url: "/blog/glp1-thyroid-considerations",
      excerpt: "Important information about thyroid conditions and GLP-1 medication use.",
      icon: Brain,
      readTime: "6 min read"
    },
    {
      title: "GLP-1 Medications for Type 1 Diabetes: Off-Label Use",
      url: "/blog/glp1-type-1-diabetes",
      excerpt: "Explore the emerging evidence on GLP-1s for Type 1 diabetes patients, including off-label use for weight loss and glucose control.",
      icon: Activity,
      readTime: "12 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>GLP-1s for Health Conditions | Diabetes, PCOS & Heart Health</title>
        <meta 
          name="description" 
          content="Comprehensive guide to GLP-1 medications for various health conditions including diabetes, PCOS, cardiovascular health, and metabolic disorders." 
        />
        <meta name="keywords" content="GLP-1 diabetes, PCOS treatment, cardiovascular benefits, pre-diabetes, metabolic health, thyroid safety" />
        <link rel="canonical" href="https://trytrimi.com/blog/health-conditions-hub" />
      </Helmet>

      <OptimizedNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Heart className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Health Conditions Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how GLP-1 medications can help manage various health conditions beyond weight loss, from diabetes to cardiovascular health.
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
            <h2 className="text-2xl font-bold mb-4">Get Personalized Medical Guidance</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Consult with our medical team to understand how GLP-1 therapy can address your specific health conditions.
            </p>
            <Button size="lg" asChild>
              <Link to="/how-it-works">
                Schedule Consultation
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

export default HealthConditionsHub;
