import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, BookOpen, Calculator, DollarSign, FileText, Heart, Pill, TrendingUp } from "lucide-react";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";
import { WebsiteSchema } from "@/components/seo/WebsiteSchema";

export default function SemaglutideHub() {
  const gettingStartedArticles = [
    { title: "How to Start Semaglutide", slug: "how-to-start-semaglutide", icon: Pill },
    { title: "Semaglutide Eligibility Guide", slug: "semaglutide-eligibility", icon: Heart },
    { title: "Online Semaglutide Prescription", slug: "online-semaglutide-prescription", icon: FileText },
    { title: "First Month on Semaglutide", slug: "semaglutide-first-month", icon: TrendingUp },
  ];

  const costArticles = [
    { title: "Semaglutide Cost Guide", slug: "semaglutide-cost", icon: DollarSign },
    { title: "Semaglutide Cost Breakdown", slug: "semaglutide-cost-breakdown", icon: Calculator },
    { title: "Cost Savings Strategies", slug: "semaglutide-cost-savings", icon: TrendingUp },
    { title: "Without Insurance Options", slug: "semaglutide-without-insurance", icon: DollarSign },
  ];

  const dosageArticles = [
    { title: "Semaglutide Dosage Guide", slug: "semaglutide-dosage-guide", icon: Pill },
    { title: "Dosing Chart", slug: "semaglutide-dosing-chart", icon: Calculator },
    { title: "Injection Guide", slug: "semaglutide-injection-guide", icon: Heart },
    { title: "Injection Site Reactions", slug: "semaglutide-injection-site-reactions", icon: FileText },
  ];

  const resultsArticles = [
    { title: "Weight Loss Results", slug: "semaglutide-weight-loss-results", icon: TrendingUp },
    { title: "Clinical Results", slug: "semaglutide-clinical-results", icon: FileText },
    { title: "Results Timeline", slug: "semaglutide-results-timeline", icon: BookOpen },
    { title: "Breaking Through Plateaus", slug: "semaglutide-plateau", icon: Heart },
  ];

  const healthArticles = [
    { title: "Blood Pressure Effects", slug: "semaglutide-blood-pressure", icon: Heart },
    { title: "Kidney Function", slug: "semaglutide-kidney-function", icon: Heart },
    { title: "Thyroid Considerations", slug: "semaglutide-thyroid", icon: Heart },
    { title: "Bone Health", slug: "semaglutide-bone-health", icon: Heart },
  ];

  const lifestyleArticles = [
    { title: "Diet Plan Guide", slug: "semaglutide-diet-plan", icon: Heart },
    { title: "Exercise Recommendations", slug: "semaglutide-exercise", icon: TrendingUp },
    { title: "Intermittent Fasting", slug: "semaglutide-intermittent-fasting", icon: BookOpen },
    { title: "Alcohol Interactions", slug: "semaglutide-alcohol", icon: FileText },
  ];

  const comparisonArticles = [
    { title: "Semaglutide vs Tirzepatide", slug: "tirzepatide-vs-semaglutide", icon: BookOpen },
    { title: "Ozempic vs Wegovy", slug: "semaglutide-vs-ozempic-vs-wegovy", icon: BookOpen },
    { title: "vs Phentermine", slug: "semaglutide-vs-phentermine", icon: BookOpen },
    { title: "Compounded vs Brand Name", slug: "compounded-semaglutide-vs-brand-name", icon: BookOpen },
  ];

  const allArticles = [
    ...gettingStartedArticles,
    ...costArticles,
    ...dosageArticles,
    ...resultsArticles,
    ...healthArticles,
    ...lifestyleArticles,
    ...comparisonArticles
  ];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="Complete Semaglutide Guide 2025 - Everything You Need to Know | Trimi"
        description="Your comprehensive resource for semaglutide weight loss. Cost guides, dosing charts, results timelines, side effects, and expert medical advice. Start your journey today."
        canonical="https://trytrimi.com/semaglutide-hub"
        keywords="semaglutide guide, Wegovy, Ozempic, GLP-1 weight loss, semaglutide cost, semaglutide dosage"
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <ItemListSchema
        name="Semaglutide Complete Guide - All Articles"
        description="Comprehensive collection of semaglutide weight loss guides and resources"
        items={allArticles.map(article => ({
          name: article.title,
          url: `/blog/${article.slug}`
        }))}
      />
      <ProductSchema
        name="Compounded Semaglutide Weight Loss Program"
        description="Medical weight loss program featuring compounded semaglutide with comprehensive support, including physician consultations, dosing guidance, and ongoing care."
        image="/og-semaglutide-hub.jpg"
        price="299"
        url="/semaglutide-guide"
        ratingValue="4.9"
        reviewCount="850"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Sarah M.",
            rating: 5,
            reviewBody: "Lost 35 pounds in 4 months with semaglutide. The medical team was supportive throughout my journey.",
            datePublished: "2024-01-15"
          },
          {
            author: "Michael R.",
            rating: 5,
            reviewBody: "Amazing results and very affordable compared to brand name options. Highly recommend.",
            datePublished: "2024-02-20"
          },
          {
            author: "Jennifer L.",
            rating: 5,
            reviewBody: "The comprehensive guide helped me understand everything about semaglutide before starting.",
            datePublished: "2024-03-10"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "850"
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <SmartBreadcrumbs />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4">Complete Resource Center</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Complete Semaglutide Guide
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Everything you need to know about semaglutide for weight loss. From getting started to long-term success, we've got you covered with expert medical guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/treatments/semaglutide">
                      Get Started with Semaglutide <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/compare">
                      Compare Treatments
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Tools */}
          <section className="py-12 bg-secondary/5">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Quick Tools & Calculators</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Cost Calculator</h3>
                  <p className="text-sm text-muted-foreground mb-4">Calculate your monthly costs</p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/calculators">Try Calculator</Link>
                  </Button>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Weight Loss Predictor</h3>
                  <p className="text-sm text-muted-foreground mb-4">Estimate your results</p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/calculators">Predict Results</Link>
                  </Button>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Pill className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Dosage Guide</h3>
                  <p className="text-sm text-muted-foreground mb-4">Find your correct dose</p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/blog/semaglutide-dosage-guide">View Guide</Link>
                  </Button>
                </Card>
              </div>
            </div>
          </section>

          {/* Article Categories */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto space-y-16">
                
                {/* Getting Started */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Pill className="h-8 w-8 text-primary" />
                    Getting Started
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {gettingStartedArticles.map((article) => (
                      <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <article.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              <Link to={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                {article.title}
                              </Link>
                            </h3>
                            <Link 
                              to={`/blog/${article.slug}`}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Read guide <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Cost & Insurance */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <DollarSign className="h-8 w-8 text-primary" />
                    Cost & Insurance
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {costArticles.map((article) => (
                      <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <article.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              <Link to={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                {article.title}
                              </Link>
                            </h3>
                            <Link 
                              to={`/blog/${article.slug}`}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Read guide <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Dosage & Administration */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Calculator className="h-8 w-8 text-primary" />
                    Dosage & Administration
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {dosageArticles.map((article) => (
                      <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <article.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              <Link to={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                {article.title}
                              </Link>
                            </h3>
                            <Link 
                              to={`/blog/${article.slug}`}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Read guide <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Results & Timeline */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    Results & Timeline
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {resultsArticles.map((article) => (
                      <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <article.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              <Link to={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                {article.title}
                              </Link>
                            </h3>
                            <Link 
                              to={`/blog/${article.slug}`}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Read guide <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Health & Safety */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Heart className="h-8 w-8 text-primary" />
                    Health & Safety
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {healthArticles.map((article) => (
                      <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <article.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              <Link to={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                {article.title}
                              </Link>
                            </h3>
                            <Link 
                              to={`/blog/${article.slug}`}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Read guide <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Lifestyle & Diet */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    Lifestyle & Diet
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {lifestyleArticles.map((article) => (
                      <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <article.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              <Link to={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                {article.title}
                              </Link>
                            </h3>
                            <Link 
                              to={`/blog/${article.slug}`}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Read guide <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Comparisons */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    Comparisons
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {comparisonArticles.map((article) => (
                      <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <article.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              <Link to={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                {article.title}
                              </Link>
                            </h3>
                            <Link 
                              to={`/blog/${article.slug}`}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Read comparison <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get personalized medical guidance, competitive pricing, and ongoing support with Trimi's semaglutide program.
              </p>
              <Button asChild size="lg">
                <Link to="/treatments/semaglutide">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}