import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, DollarSign, Calculator, TrendingUp, Shield, CreditCard, Percent } from "lucide-react";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

export default function CostGuideHub() {
  const semaglutideCostArticles = [
    { title: "Semaglutide Cost Guide 2025", slug: "semaglutide-cost", icon: DollarSign },
    { title: "Complete Cost Breakdown", slug: "semaglutide-cost-breakdown", icon: Calculator },
    { title: "Cost Savings Strategies", slug: "semaglutide-cost-savings", icon: Percent },
    { title: "Without Insurance Options", slug: "semaglutide-without-insurance", icon: Shield },
    { title: "Online Cost Guide", slug: "semaglutide-weight-loss-online-cost", icon: TrendingUp },
    { title: "Compounded vs Brand Name", slug: "compounded-semaglutide-vs-brand-name", icon: Calculator },
  ];

  const tirzepatideCostArticles = [
    { title: "Compounded Tirzepatide Cost", slug: "compounded-tirzepatide-cost", icon: DollarSign },
    { title: "Cost Comparison Guide", slug: "tirzepatide-cost-comparison", icon: Calculator },
    { title: "Cheapest Options Online", slug: "cheapest-tirzepatide-online", icon: TrendingUp },
    { title: "Insurance Coverage", slug: "tirzepatide-insurance-coverage", icon: Shield },
  ];

  const generalCostArticles = [
    { title: "Weight Loss Injection Costs Compared", slug: "weight-loss-injection-costs", icon: Calculator },
    { title: "Affordability Programs", slug: "glp1-affordability", icon: CreditCard },
    { title: "GLP-1 Without Insurance 2026", slug: "glp1-without-insurance-2026", icon: Shield },
    { title: "GLP-1 Access and Equity: Bridging Healthcare Gaps", slug: "glp1-access-equity", icon: TrendingUp },
  ];

  const allArticles = [...semaglutideCostArticles, ...tirzepatideCostArticles, ...generalCostArticles];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="Complete GLP-1 Cost Guide 2025 - Prices, Insurance & Savings | Trimi"
        description="Comprehensive guide to semaglutide and tirzepatide costs. Compare brand vs compounded, insurance coverage, savings strategies, and affordable options."
        canonical="https://trytrimi.com/cost-guide"
        keywords="semaglutide cost, tirzepatide cost, GLP-1 insurance, weight loss medication prices"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="GLP-1 Cost Guide - All Articles"
        description="Complete collection of cost and affordability guides for weight loss medications"
        items={allArticles.map(article => ({ name: article.title, url: `/blog/${article.slug}` }))}
      />
      <ProductSchema
        name="Affordable GLP-1 Weight Loss Program"
        description="Cost-effective weight loss programs featuring semaglutide and tirzepatide with transparent pricing, insurance guidance, and savings strategies."
        image="/og-cost-guide.jpg"
        price="199"
        url="/cost-guide"
        ratingValue="4.8"
        reviewCount="1200"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Lisa T.",
            rating: 5,
            reviewBody: "The cost guide helped me save hundreds on my medication. Finally found affordable compounded options!",
            datePublished: "2024-01-20"
          },
          {
            author: "Brian K.",
            rating: 5,
            reviewBody: "Clear breakdown of all costs. No hidden fees. Exactly what I needed to make an informed decision.",
            datePublished: "2024-02-15"
          },
          {
            author: "Patricia M.",
            rating: 5,
            reviewBody: "The insurance navigation tips were invaluable. Got my treatment covered after following their advice.",
            datePublished: "2024-03-01"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "1200"
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <SmartBreadcrumbs />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4">Cost & Affordability Center</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete GLP-1 Cost Guide</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Everything you need to know about pricing, insurance coverage, and cost-saving strategies for semaglutide and tirzepatide.
                </p>
                <Button asChild size="lg">
                  <Link to="/pricing">Compare Prices <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-primary" />Semaglutide Cost Guides
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semaglutideCostArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <article.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{article.title}</h3>
                          <Button asChild variant="link" className="p-0 h-auto">
                            <Link to={`/blog/${article.slug}`}>
                              Read article <ArrowRight className="ml-1 h-4 w-4" />
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
                  <Calculator className="h-8 w-8 text-primary" />Tirzepatide Cost Guides
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tirzepatideCostArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <article.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{article.title}</h3>
                          <Button asChild variant="link" className="p-0 h-auto">
                            <Link to={`/blog/${article.slug}`}>
                              Read article <ArrowRight className="ml-1 h-4 w-4" />
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
                  <TrendingUp className="h-8 w-8 text-primary" />General Cost & Affordability
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {generalCostArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <article.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{article.title}</h3>
                          <Button asChild variant="link" className="p-0 h-auto">
                            <Link to={`/blog/${article.slug}`}>
                              Read article <ArrowRight className="ml-1 h-4 w-4" />
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
                  <CardTitle>Ready to Start Your Journey?</CardTitle>
                  <CardDescription>
                    Get personalized pricing and treatment options with our online consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg">
                    <Link to="/get-started">Get Personalized Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
