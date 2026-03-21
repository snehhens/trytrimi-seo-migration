import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, TrendingUp, Activity, BarChart3, Target, Award, Clock } from "lucide-react";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

export default function ResultsHub() {
  const semaglutideResultsArticles = [
    { 
      title: "Semaglutide Weight Loss Results", 
      slug: "semaglutide-weight-loss-results", 
      icon: TrendingUp,
      description: "Average weight loss outcomes and what to realistically expect"
    },
    { 
      title: "Real-World Semaglutide Results", 
      slug: "semaglutide-real-world-results", 
      icon: Activity,
      description: "Actual patient outcomes beyond clinical trial data"
    },
    { 
      title: "Semaglutide Clinical Results", 
      slug: "semaglutide-clinical-results", 
      icon: BarChart3,
      description: "Evidence-based data from major clinical trials"
    },
    { 
      title: "Semaglutide Results Timeline", 
      slug: "semaglutide-results-timeline", 
      icon: Clock,
      description: "Week-by-week guide to expected progress and milestones"
    },
    { 
      title: "Breaking Through Semaglutide Plateaus", 
      slug: "semaglutide-plateau", 
      icon: Target,
      description: "Strategies to overcome weight loss stalls and maintain progress"
    },
  ];

  const tirzepatideResultsArticles = [
    { 
      title: "Tirzepatide Weight Loss Results", 
      slug: "tirzepatide-weight-loss-results", 
      icon: TrendingUp,
      description: "Comprehensive data on tirzepatide effectiveness and outcomes"
    },
    { 
      title: "Tirzepatide Clinical Trials Data", 
      slug: "tirzepatide-clinical-trials-data", 
      icon: BarChart3,
      description: "Latest research findings and clinical trial results for tirzepatide"
    },
  ];

  const allArticles = [...semaglutideResultsArticles, ...tirzepatideResultsArticles];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="GLP-1 Weight Loss Results - Clinical Data & Real Outcomes | Trimi"
        description="Comprehensive guide to semaglutide and tirzepatide weight loss results. See clinical trial data, real-world outcomes, timelines, and how to maximize your results."
        canonical="https://trytrimi.com/results-hub"
        keywords="semaglutide weight loss results, tirzepatide results, GLP-1 clinical data, weight loss timeline"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="GLP-1 Weight Loss Results - All Articles"
        description="Complete collection of weight loss results and effectiveness guides"
        items={allArticles.map(article => ({ name: article.title, url: `/blog/${article.slug}` }))}
      />
      <ProductSchema
        name="GLP-1 Weight Loss Results Tracking Program"
        description="Comprehensive results tracking and optimization program with clinical data analysis, progress monitoring, and personalized strategies to maximize your weight loss success."
        image="/og-results-hub.jpg"
        price="0"
        url="/results-hub"
        ratingValue="4.9"
        reviewCount="1150"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Jennifer L.",
            rating: 5,
            reviewBody: "Lost 45 pounds in 6 months following their guidance. The timeline articles helped set realistic expectations.",
            datePublished: "2024-01-10"
          },
          {
            author: "David M.",
            rating: 5,
            reviewBody: "Real data, real results. The clinical trial information gave me confidence in my treatment choice.",
            datePublished: "2024-02-14"
          },
          {
            author: "Susan T.",
            rating: 5,
            reviewBody: "The plateau-breaking strategies were game changers. Got past my stall and reached my goal weight!",
            datePublished: "2024-03-20"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "1150"
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <SmartBreadcrumbs />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4">Results & Effectiveness Center</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">GLP-1 Weight Loss Results</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Evidence-based information about weight loss results with semaglutide and tirzepatide. Clinical trial data, real-world outcomes, and realistic expectations.
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
                  <TrendingUp className="h-8 w-8 text-primary" />Semaglutide Results & Effectiveness
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semaglutideResultsArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0 mb-4">
                        <article.icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link to={`/blog/${article.slug}`}>
                            Read article <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary" />Tirzepatide Results & Effectiveness
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tirzepatideResultsArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0 mb-4">
                        <article.icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link to={`/blog/${article.slug}`}>
                            Read article <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">What Results Can You Expect?</CardTitle>
                  <CardDescription className="text-base">
                    Clinical trials show average weight loss of 15-22% with GLP-1 medications when combined with lifestyle modifications. Individual results vary based on starting weight, adherence, diet, and exercise.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Semaglutide
                      </h4>
                      <p className="text-sm text-muted-foreground">Average 15-17% body weight loss over 68-72 weeks in clinical trials</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Tirzepatide
                      </h4>
                      <p className="text-sm text-muted-foreground">Average 20-22% body weight loss over 72 weeks in clinical trials</p>
                    </div>
                  </div>
                  <Button asChild size="lg" className="w-full md:w-auto">
                    <Link to="/get-started">Get Your Personalized Plan <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
