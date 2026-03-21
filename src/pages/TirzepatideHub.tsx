import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, BookOpen, Calculator, DollarSign, FileText, Heart, Pill, TrendingUp } from "lucide-react";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";
import { WebsiteSchema } from "@/components/seo/WebsiteSchema";

export default function TirzepatideHub() {
  const gettingStartedArticles = [
    { title: "Tirzepatide Quick Start Guide", slug: "tirzepatide-quick-start", icon: Pill },
    { title: "How Tirzepatide Works", slug: "how-tirzepatide-works", icon: Heart },
    { title: "Online Prescription Guide", slug: "tirzepatide-online-prescription", icon: FileText },
    { title: "First Month on Tirzepatide", slug: "tirzepatide-first-month", icon: TrendingUp },
  ];

  const costArticles = [
    { title: "Compounded Tirzepatide Cost", slug: "compounded-tirzepatide-cost", icon: DollarSign },
    { title: "Cost Comparison Guide", slug: "tirzepatide-cost-comparison", icon: Calculator },
    { title: "Cheapest Options Online", slug: "cheapest-tirzepatide-online", icon: TrendingUp },
    { title: "Insurance Coverage", slug: "tirzepatide-insurance-coverage", icon: DollarSign },
  ];

  const dosageArticles = [
    { title: "Tirzepatide Dosage Guide", slug: "tirzepatide-dosage-guide", icon: Pill },
    { title: "Dosing Chart", slug: "tirzepatide-dosing-chart", icon: Calculator },
    { title: "Maintenance Dose", slug: "tirzepatide-maintenance-dose", icon: Heart },
    { title: "Mechanism Guide", slug: "tirzepatide-mechanism-guide", icon: FileText },
  ];

  const allArticles = [...gettingStartedArticles, ...costArticles, ...dosageArticles];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="Complete Tirzepatide Guide 2025 - Everything You Need to Know | Trimi"
        description="Your comprehensive resource for tirzepatide weight loss. Cost guides, dosing charts, results timelines, side effects, and expert medical advice."
        canonical="https://trytrimi.com/tirzepatide-hub"
        keywords="tirzepatide guide, Mounjaro, Zepbound, GIP/GLP-1, tirzepatide cost, tirzepatide dosage"
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <ItemListSchema
        name="Tirzepatide Complete Guide - All Articles"
        description="Comprehensive collection of tirzepatide weight loss guides"
        items={allArticles.map(article => ({ name: article.title, url: `/blog/${article.slug}` }))}
      />
      <ProductSchema
        name="Compounded Tirzepatide Weight Loss Program"
        description="Advanced medical weight loss program featuring compounded tirzepatide with dual GIP/GLP-1 action, physician supervision, and comprehensive care."
        image="/og-tirzepatide-hub.jpg"
        price="399"
        url="/tirzepatide-guide"
        ratingValue="4.9"
        reviewCount="620"
      />
      <ReviewSchema
        reviews={[
          {
            author: "David T.",
            rating: 5,
            reviewBody: "Tirzepatide delivered incredible results - lost 45 pounds in 5 months. Worth every penny.",
            datePublished: "2024-01-25"
          },
          {
            author: "Amanda K.",
            rating: 5,
            reviewBody: "The dual action formula really works. Better results than I had with semaglutide.",
            datePublished: "2024-02-18"
          },
          {
            author: "Robert P.",
            rating: 5,
            reviewBody: "Excellent medical support and the most effective weight loss treatment I've tried.",
            datePublished: "2024-03-05"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "620"
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <SmartBreadcrumbs />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4">Complete Resource Center</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Tirzepatide Guide</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Everything you need to know about tirzepatide for weight loss.
                </p>
                <Button asChild size="lg">
                  <Link to="/treatments/tirzepatide">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Pill className="h-8 w-8 text-primary" />Getting Started
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {gettingStartedArticles.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <article.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            <Link to={`/blog/${article.slug}`} className="hover:text-primary">{article.title}</Link>
                          </h3>
                          <Link to={`/blog/${article.slug}`} className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                            Read guide <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}