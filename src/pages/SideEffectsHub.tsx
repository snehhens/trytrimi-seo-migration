import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, AlertCircle, Heart, Shield, Pill, Activity } from "lucide-react";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

export default function SideEffectsHub() {
  const semaglutideSideEffectsArticles = [
    { 
      title: "Semaglutide Side Effects: Complete Guide", 
      slug: "semaglutide-side-effects", 
      icon: AlertCircle,
      description: "Comprehensive guide to common and rare side effects"
    },
    { 
      title: "Managing GI Side Effects on Semaglutide", 
      slug: "managing-gi-side-effects-semaglutide", 
      icon: Heart,
      description: "Proven strategies for nausea, diarrhea, and constipation"
    },
    { 
      title: "Semaglutide Nausea Management", 
      slug: "semaglutide-nausea", 
      icon: Pill,
      description: "Expert tips for preventing and managing nausea"
    },
  ];

  const tirzepatideSideEffectsArticles = [
    { 
      title: "Tirzepatide Side Effects Guide", 
      slug: "tirzepatide-side-effects", 
      icon: AlertCircle,
      description: "Everything you need to know about tirzepatide side effects"
    },
    { 
      title: "Tirzepatide Side Effects: 2025 Data", 
      slug: "tirzepatide-side-effects-2025-data", 
      icon: Activity,
      description: "Latest 2025 clinical data on side effects and management"
    },
    { 
      title: "Tirzepatide Side Effects Management", 
      slug: "tirzepatide-side-effects-management", 
      icon: Shield,
      description: "Proven strategies to manage and minimize common side effects"
    },
    { 
      title: "Tirzepatide Interactions: Alcohol & Medications", 
      slug: "tirzepatide-interactions-alcohol-medications", 
      icon: Pill,
      description: "Drug interactions, alcohol safety, and what to avoid on tirzepatide"
    },
  ];

  const generalArticles = [
    { 
      title: "GLP-1 Side Effects Management", 
      slug: "glp1-side-effects-management", 
      icon: Shield,
      description: "Comprehensive strategies for all GLP-1 medications"
    },
  ];

  const allArticles = [...semaglutideSideEffectsArticles, ...tirzepatideSideEffectsArticles, ...generalArticles];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="GLP-1 Side Effects Guide - Management Tips & What to Expect | Trimi"
        description="Complete guide to semaglutide and tirzepatide side effects. Learn about common reactions, rare serious effects, and proven management strategies from medical experts."
        canonical="https://trytrimi.com/side-effects-hub"
        keywords="semaglutide side effects, tirzepatide side effects, GLP-1 nausea management, weight loss medication side effects"
        ogImage="/og-side-effects-hub.jpg"
        ogType="website"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="GLP-1 Side Effects Guide - All Articles"
        description="Complete collection of side effect management guides for weight loss medications"
        items={allArticles.map(article => ({ name: article.title, url: `/blog/${article.slug}` }))}
      />
      <ProductSchema
        name="GLP-1 Side Effect Management Program"
        description="Comprehensive side effect management and support program including 24/7 provider access, symptom tracking, and personalized management strategies."
        image="/og-side-effects-hub.jpg"
        price="0"
        url="/side-effects-hub"
        ratingValue="4.8"
        reviewCount="920"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Michelle D.",
            rating: 5,
            reviewBody: "The management strategies really worked. My nausea improved within days of following their advice.",
            datePublished: "2024-01-25"
          },
          {
            author: "Robert H.",
            rating: 5,
            reviewBody: "Having all the side effect information in one place made me feel prepared and confident starting treatment.",
            datePublished: "2024-02-18"
          },
          {
            author: "Angela W.",
            rating: 4,
            reviewBody: "Practical tips that actually help. Wish I'd found this resource before starting my medication.",
            datePublished: "2024-03-08"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "920"
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <SmartBreadcrumbs />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4">Side Effects Resource Center</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">GLP-1 Side Effects Guide</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Comprehensive information about side effects of semaglutide and tirzepatide. Learn what to expect, how to manage symptoms, and when to seek medical attention.
                </p>
                <Button asChild size="lg">
                  <Link to="/get-started">Talk to a Provider <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-primary" />Semaglutide Side Effects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semaglutideSideEffectsArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0 mb-4">
                        <article.icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link to={`/blog/${article.slug}`}>
                            Read guide <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Activity className="h-8 w-8 text-primary" />Tirzepatide Side Effects
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tirzepatideSideEffectsArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0 mb-4">
                        <article.icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link to={`/blog/${article.slug}`}>
                            Read guide <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />General Side Effect Management
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {generalArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0 mb-4">
                        <article.icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link to={`/blog/${article.slug}`}>
                            Read guide <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-accent/30 border-primary/20">
                <CardHeader>
                  <CardTitle>Concerned About Side Effects?</CardTitle>
                  <CardDescription>
                    Our medical team is here to help you manage side effects and ensure a safe, comfortable treatment experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg">
                    <Link to="/get-started">Consult with a Provider <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
