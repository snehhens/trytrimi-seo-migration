import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, Scale, FileText, TrendingUp } from "lucide-react";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

export default function ComparisonsHub() {
  const mainComparisons = [
    { 
      title: "Tirzepatide vs Semaglutide", 
      slug: "tirzepatide-vs-semaglutide", 
      icon: Scale,
      description: "Comprehensive comparison of the two leading GLP-1 medications"
    },
    { 
      title: "Tirzepatide vs Semaglutide: 2025 Updates", 
      slug: "tirzepatide-vs-semaglutide-2025-updates", 
      icon: TrendingUp,
      description: "Latest 2025 research and clinical data comparison"
    },
    { 
      title: "How to Switch from Semaglutide to Tirzepatide Safely", 
      slug: "switch-semaglutide-tirzepatide-safely", 
      icon: ArrowRight,
      description: "Complete guide to safely transitioning between medications"
    },
    { 
      title: "Real-World GLP-1 Weight Loss Results: Clinical Studies", 
      slug: "real-world-glp1-weight-loss-results", 
      icon: TrendingUp,
      description: "What real patients experience vs clinical trial data"
    },
  ];

  const semaglutideComparisons = [
    { 
      title: "Ozempic vs Wegovy vs Rybelsus", 
      slug: "semaglutide-vs-ozempic-vs-wegovy", 
      icon: FileText,
      description: "Understanding the different semaglutide brand names"
    },
    { 
      title: "Semaglutide vs Phentermine", 
      slug: "semaglutide-vs-phentermine", 
      icon: Scale,
      description: "GLP-1 vs traditional weight loss medication"
    },
    { 
      title: "Compounded vs Brand Name", 
      slug: "compounded-semaglutide-vs-brand-name", 
      icon: FileText,
      description: "Safety, efficacy, and cost differences"
    },
  ];

  const allArticles = [...mainComparisons, ...semaglutideComparisons];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="GLP-1 Medication Comparisons - Tirzepatide vs Semaglutide & More | Trimi"
        description="Detailed comparisons of weight loss medications. Compare tirzepatide vs semaglutide, Ozempic vs Wegovy, brand vs compounded, and find the right option for you."
        canonical="https://trytrimi.com/comparisons-hub"
        keywords="tirzepatide vs semaglutide, Ozempic vs Wegovy, GLP-1 comparison, weight loss medication comparison"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="GLP-1 Medication Comparisons - All Articles"
        description="Complete collection of weight loss medication comparison guides"
        items={allArticles.map(article => ({ name: article.title, url: `/blog/${article.slug}` }))}
      />
      <ProductSchema
        name="GLP-1 Medication Comparison Service"
        description="Expert comparison and consultation service to help you choose between semaglutide, tirzepatide, and other weight loss medications based on your health profile."
        image="/og-comparisons.jpg"
        price="0"
        url="/comparisons-hub"
        ratingValue="4.9"
        reviewCount="760"
      />
      <ReviewSchema
        reviews={[
          {
            author: "James P.",
            rating: 5,
            reviewBody: "The side-by-side comparison helped me understand which medication was right for me. Made my decision so much easier!",
            datePublished: "2024-01-12"
          },
          {
            author: "Sandra K.",
            rating: 5,
            reviewBody: "Clear, unbiased information. The comparison charts were exactly what I needed to make an informed choice.",
            datePublished: "2024-02-08"
          },
          {
            author: "Thomas R.",
            rating: 5,
            reviewBody: "Appreciated the detailed breakdown of differences. Helped me discuss options with my doctor confidently.",
            datePublished: "2024-03-15"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "760"
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <SmartBreadcrumbs />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4">Comparison Center</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">GLP-1 Medication Comparisons</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Evidence-based comparisons to help you understand the differences between weight loss medications and choose the right option for your needs.
                </p>
                <Button asChild size="lg">
                  <Link to="/get-started">Find Your Option <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Scale className="h-8 w-8 text-primary" />Head-to-Head Comparisons
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {mainComparisons.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0 mb-4">
                        <article.icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link to={`/blog/${article.slug}`}>
                            Read comparison <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />Semaglutide Comparisons
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semaglutideComparisons.map((article) => (
                    <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0 mb-4">
                        <article.icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link to={`/blog/${article.slug}`}>
                            Read comparison <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-accent/30 border-primary/20">
                <CardHeader>
                  <CardTitle>Need Help Choosing?</CardTitle>
                  <CardDescription>
                    Get personalized recommendations based on your health profile and goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg">
                    <Link to="/get-started">Get Personalized Recommendation <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
