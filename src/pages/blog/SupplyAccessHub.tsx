import { Helmet } from "@/compat/react-helmet-async";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { Package, ArrowRight, AlertTriangle, Truck, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupplyAccessHub = () => {
  const articles = [
    {
      title: "Navigating GLP-1 Shortages: What You Need to Know",
      url: "/blog/glp1-shortage-navigation",
      excerpt: "Stay informed about supply issues and learn strategies to maintain continuous treatment.",
      icon: AlertTriangle,
      readTime: "8 min read"
    },
    {
      title: "Compounded Semaglutide vs Brand Name: Complete Guide",
      url: "/blog/compounded-vs-brand-semaglutide",
      excerpt: "Understanding the differences, safety, and effectiveness of compounded GLP-1 medications.",
      icon: ShieldCheck,
      readTime: "10 min read"
    },
    {
      title: "International Pharmacy Options for GLP-1 Medications",
      url: "/blog/international-pharmacy-glp1",
      excerpt: "Explore legitimate international sources for accessing GLP-1 medications safely and legally.",
      icon: Globe,
      readTime: "7 min read"
    },
    {
      title: "Ensuring Reliable GLP-1 Supply: Tips & Strategies",
      url: "/blog/reliable-glp1-supply",
      excerpt: "Practical strategies for maintaining consistent access to your GLP-1 medications.",
      icon: Truck,
      readTime: "6 min read"
    },
    {
      title: "Generic GLP-1 Timeline: When to Expect Lower Prices",
      url: "/blog/generic-glp1-timeline",
      excerpt: "Understanding patent expiration and the future of generic GLP-1 medication availability.",
      icon: Package,
      readTime: "6 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>GLP-1 Supply & Access Guide | Shortages, Compounding & Availability</title>
        <meta 
          name="description" 
          content="Navigate GLP-1 medication supply challenges with guides on shortages, compounded options, international pharmacies, and ensuring reliable access to treatment." 
        />
        <meta name="keywords" content="GLP-1 shortage, compounded semaglutide, international pharmacy, medication access, supply issues, generic GLP-1" />
        
      </Helmet>

      <OptimizedNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Package className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Supply & Access Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about GLP-1 medication availability, navigate supply challenges, and ensure continuous access to your treatment.
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
            <h2 className="text-2xl font-bold mb-4">Get Reliable GLP-1 Access</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Work with providers who ensure consistent medication supply and support throughout your treatment journey.
            </p>
            <Button size="lg" asChild>
              <Link to="/how-it-works">
                Explore Options
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

export default SupplyAccessHub;
