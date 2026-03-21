import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, Pill, Heart, FileText, TrendingUp, CheckCircle2, Calendar } from "lucide-react";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

export default function GettingStartedHub() {
  const semaglutideStartArticles = [
    { title: "How to Start Semaglutide", slug: "how-to-start-semaglutide", icon: Pill },
    { title: "Semaglutide Eligibility Guide", slug: "semaglutide-eligibility", icon: CheckCircle2 },
    { title: "First Month on Semaglutide", slug: "semaglutide-first-month", icon: Calendar },
    { title: "Kickstarting Semaglutide Basics", slug: "kickstarting-semaglutide-basics", icon: TrendingUp },
    { title: "Online Prescription Guide", slug: "online-semaglutide-prescription", icon: FileText },
  ];

  const tirzepatideStartArticles = [
    { title: "Tirzepatide Quick Start Guide", slug: "tirzepatide-quick-start", icon: Pill },
    { title: "How Tirzepatide Works", slug: "how-tirzepatide-works", icon: Heart },
    { title: "First Month on Tirzepatide", slug: "tirzepatide-first-month", icon: Calendar },
    { title: "Things to Know Before Starting", slug: "things-to-know-before-starting-tirzepatide", icon: CheckCircle2 },
    { title: "Online Prescription Guide", slug: "tirzepatide-online-prescription", icon: FileText },
  ];

  const generalStartArticles = [
    { title: "GLP-1 Beginner's Guide", slug: "glp1-beginner-guide", icon: FileText },
    { title: "First Month on GLP-1 Medications", slug: "first-month-semaglutide-tirzepatide", icon: Calendar },
    { title: "What to Expect: Complete Timeline", slug: "glp1-treatment-timeline", icon: TrendingUp },
    { title: "Best Telemedicine Apps for GLP-1 Prescriptions", slug: "glp1-telemedicine-apps", icon: FileText },
  ];

  const allArticles = [...semaglutideStartArticles, ...tirzepatideStartArticles, ...generalStartArticles];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="Getting Started with GLP-1 Medications - Complete Beginner's Guide | Trimi"
        description="Everything you need to start semaglutide or tirzepatide. Eligibility, first month guides, prescriptions, what to expect, and expert tips for success."
        canonical="https://trytrimi.com/getting-started-hub"
        keywords="how to start semaglutide, tirzepatide beginner guide, GLP-1 eligibility, first month weight loss"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="Getting Started with GLP-1 - All Guides"
        description="Complete collection of beginner guides for starting weight loss medications"
        items={allArticles.map(article => ({ name: article.title, url: `/blog/${article.slug}` }))}
      />
      <ProductSchema
        name="GLP-1 Weight Loss Starter Program"
        description="Comprehensive beginner program for starting semaglutide or tirzepatide including medical consultation, eligibility assessment, and personalized treatment plan."
        image="/og-getting-started.jpg"
        price="249"
        url="/getting-started-hub"
        ratingValue="4.9"
        reviewCount="980"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Rachel S.",
            rating: 5,
            reviewBody: "The getting started guide made everything so clear. No confusion, just simple steps to begin my journey.",
            datePublished: "2024-01-18"
          },
          {
            author: "Mark D.",
            rating: 5,
            reviewBody: "Best beginner resource I found. Covered everything I needed to know before starting tirzepatide.",
            datePublished: "2024-02-22"
          },
          {
            author: "Karen W.",
            rating: 5,
            reviewBody: "The first month guide prepared me perfectly. Knew exactly what to expect and how to handle side effects.",
            datePublished: "2024-03-12"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "980"
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <SmartBreadcrumbs />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4">Beginner's Resource Center</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Getting Started with GLP-1 Medications</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Complete guides for starting your weight loss journey with semaglutide or tirzepatide. Everything from eligibility to your first month and beyond.
                </p>
                <Button asChild size="lg">
                  <Link to="/get-started">Start Your Journey <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Pill className="h-8 w-8 text-primary" />Starting Semaglutide
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semaglutideStartArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <article.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{article.title}</h3>
                          <Button asChild variant="link" className="p-0 h-auto">
                            <Link to={`/blog/${article.slug}`}>
                              Read guide <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Heart className="h-8 w-8 text-primary" />Starting Tirzepatide
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tirzepatideStartArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <article.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{article.title}</h3>
                          <Button asChild variant="link" className="p-0 h-auto">
                            <Link to={`/blog/${article.slug}`}>
                              Read guide <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-primary" />General Getting Started Guides
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {generalStartArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <article.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{article.title}</h3>
                          <Button asChild variant="link" className="p-0 h-auto">
                            <Link to={`/blog/${article.slug}`}>
                              Read guide <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-accent/30 border-primary/20">
                <CardHeader>
                  <CardTitle>Ready to Take the First Step?</CardTitle>
                  <CardDescription>
                    Get started with a free online consultation and personalized treatment plan.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg">
                    <Link to="/get-started">Begin Your Journey <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
