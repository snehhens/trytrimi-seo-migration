import { Helmet } from "@/compat/react-helmet-async";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { Utensils, ArrowRight, Dumbbell, Users, Calendar, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const LifestyleIntegrationHub = () => {
  const articles = [
    {
      title: "Best Foods to Eat on Semaglutide: Nutrition Guide",
      url: "/blog/best-foods-on-semaglutide",
      excerpt: "Optimize your diet while on GLP-1 therapy with foods that support weight loss and minimize side effects.",
      icon: Utensils,
      readTime: "10 min read"
    },
    {
      title: "Exercise Optimization on GLP-1 Medications",
      url: "/blog/exercise-glp1-optimization",
      excerpt: "Learn how to adjust your workout routine for maximum results while on GLP-1 therapy.",
      icon: Dumbbell,
      readTime: "8 min read"
    },
    {
      title: "Best Exercise Routines for GLP-1 Users",
      url: "/blog/exercise-routines-glp1-users",
      excerpt: "Optimize your workouts with targeted routines designed specifically for those on GLP-1 medications.",
      icon: Dumbbell,
      readTime: "12 min read"
    },
    {
      title: "Social Situations on GLP-1s: Dining Out & Events",
      url: "/blog/social-situations-glp1",
      excerpt: "Navigate restaurants, holidays, and social gatherings while maintaining your GLP-1 treatment plan.",
      icon: Users,
      readTime: "7 min read"
    },
    {
      title: "Alcohol and GLP-1 Medications: What's Safe?",
      url: "/blog/alcohol-glp1-safety",
      excerpt: "Understanding alcohol consumption guidelines and safety considerations on GLP-1 therapy.",
      icon: Coffee,
      readTime: "6 min read"
    },
    {
      title: "Daily Routine Optimization for GLP-1 Success",
      url: "/blog/daily-routine-glp1",
      excerpt: "Create sustainable daily habits that complement your GLP-1 treatment for long-term success.",
      icon: Calendar,
      readTime: "9 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lifestyle Integration Guide for GLP-1s | Diet, Exercise & Daily Habits</title>
        <meta 
          name="description" 
          content="Learn how to integrate GLP-1 medications into your lifestyle with guides on nutrition, exercise, social situations, and daily routines for optimal results." 
        />
        <meta name="keywords" content="GLP-1 diet, exercise on semaglutide, lifestyle integration, meal planning, social eating, daily habits" />
        
      </Helmet>

      <OptimizedNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Utensils className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Lifestyle Integration Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly integrate GLP-1 therapy into your daily life with practical guides on nutrition, exercise, and sustainable lifestyle habits.
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
            <h2 className="text-2xl font-bold mb-4">Build Your Sustainable Lifestyle</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get personalized lifestyle coaching to make GLP-1 therapy work seamlessly with your daily routine.
            </p>
            <Button size="lg" asChild>
              <Link to="/how-it-works">
                Start Your Journey
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

export default LifestyleIntegrationHub;
