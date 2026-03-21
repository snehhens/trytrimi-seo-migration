import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { Utensils, Dumbbell, Moon, Plane } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

const LifestyleHub = () => {
  const lifestyleArticles = [
    {
      title: "Eating on Semaglutide: Complete Guide",
      url: "/blog/eating-on-semaglutide",
      excerpt: "What to eat, foods to avoid, and meal planning strategies for optimal results and minimal side effects.",
      category: "Nutrition"
    },
    {
      title: "Managing Food Interactions with Tirzepatide",
      url: "/blog/managing-food-interactions-tirzepatide",
      excerpt: "Timing meals, avoiding trigger foods, and nutritional strategies to reduce nausea.",
      category: "Nutrition"
    },
    {
      title: "Semaglutide and Alcohol",
      url: "/blog/semaglutide-alcohol",
      excerpt: "Safety guidelines, risks, and recommendations for alcohol consumption during treatment.",
      category: "Lifestyle"
    },
    {
      title: "Muscle Preservation on Semaglutide",
      url: "/blog/semaglutide-muscle-preservation",
      excerpt: "Protein strategies and resistance training to maintain lean muscle during weight loss.",
      category: "Exercise"
    },
    {
      title: "Exercise Guidelines for GLP-1 Users",
      url: "/blog/exercise-glp1-medications",
      excerpt: "Safe and effective workout plans while on semaglutide or tirzepatide.",
      category: "Exercise"
    },
    {
      title: "Sleep Quality on Tirzepatide",
      url: "/blog/tirzepatide-sleep-quality",
      excerpt: "How GLP-1 medications improve sleep apnea and overall sleep quality.",
      category: "Sleep"
    },
    {
      title: "Traveling with Semaglutide",
      url: "/blog/traveling-semaglutide",
      excerpt: "TSA guidelines, storage tips, and maintaining your injection schedule while traveling.",
      category: "Travel"
    },
    {
      title: "Stress and Cortisol Management",
      url: "/blog/semaglutide-stress-cortisol",
      excerpt: "Understanding how stress affects weight loss and strategies for cortisol balance.",
      category: "Mental Wellness"
    },
    {
      title: "Long-Term Lifestyle Success",
      url: "/blog/lifestyle-maintenance-glp1",
      excerpt: "Building sustainable habits for lasting weight management beyond medication.",
      category: "Long-Term"
    }
  ];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="Lifestyle & GLP-1 Medications Guide | Trimi"
        description="Complete lifestyle guide for semaglutide and tirzepatide users. Nutrition, exercise, sleep, and daily living strategies for optimal results."
        canonical="https://trytrimi.com/lifestyle-hub"
        keywords="semaglutide diet, tirzepatide exercise, GLP-1 lifestyle, weight loss nutrition"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="Lifestyle Integration with GLP-1 Medications"
        description="Comprehensive guides on integrating GLP-1 medications into daily life"
        items={lifestyleArticles.map(article => ({ name: article.title, url: article.url }))}
      />
      <ProductSchema
        name="GLP-1 Lifestyle Optimization Program"
        description="Complete lifestyle integration program with nutrition planning, exercise guidance, and daily living strategies for maximum weight loss success on semaglutide or tirzepatide."
        image="/og-lifestyle.jpg"
        price="0"
        url="/lifestyle-hub"
        ratingValue="4.9"
        reviewCount="1050"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Nicole F.",
            rating: 5,
            reviewBody: "The meal planning guide made everything so much easier. No more guessing what to eat to avoid nausea.",
            datePublished: "2024-01-17"
          },
          {
            author: "Kevin B.",
            rating: 5,
            reviewBody: "Exercise tips helped me maintain muscle while losing fat. Down 50 pounds and stronger than ever!",
            datePublished: "2024-02-21"
          },
          {
            author: "Diane R.",
            rating: 5,
            reviewBody: "Travel guide was a lifesaver! Went on vacation worry-free with all the TSA and storage information.",
            datePublished: "2024-03-18"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "1050"
        }}
      />

      <Navigation />
      <SmartBreadcrumbs />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Utensils className="h-4 w-4" />
              <span className="text-sm font-medium">Lifestyle Integration Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Living Well with GLP-1 Medications
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Practical strategies for integrating semaglutide and tirzepatide into your daily life. From nutrition and exercise to travel and social situations.
            </p>
          </div>

          {/* Key Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Utensils className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Nutrition</h3>
              <p className="text-sm text-muted-foreground">Meal planning and food strategies</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Dumbbell className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Exercise</h3>
              <p className="text-sm text-muted-foreground">Workout plans and muscle preservation</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Moon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Sleep & Recovery</h3>
              <p className="text-sm text-muted-foreground">Rest, stress management, and wellness</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Plane className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Travel & Social</h3>
              <p className="text-sm text-muted-foreground">Maintaining treatment on the go</p>
            </Card>
          </div>

          {/* Articles Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Lifestyle Integration Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifestyleArticles.map((article, index) => (
                <Link key={index} to={article.url}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all hover:border-primary/50">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {article.excerpt}
                    </p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-2">
                      Read Guide →
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Get Personalized Lifestyle Guidance</h2>
                <p className="text-muted-foreground mb-6">
                  Work with medical professionals who understand your lifestyle and goals
                </p>
                <Link to="/#quiz">
                  <Button size="lg" className="font-semibold">
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LifestyleHub;
