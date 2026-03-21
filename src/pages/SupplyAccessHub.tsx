import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { Package, DollarSign, MapPin, AlertTriangle } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

const SupplyAccessHub = () => {
  const accessArticles = [
    {
      title: "Semaglutide Cost Breakdown",
      url: "/blog/semaglutide-cost",
      excerpt: "Complete pricing guide comparing Ozempic, Wegovy, and compounded semaglutide options.",
      category: "Cost"
    },
    {
      title: "Semaglutide Without Insurance",
      url: "/blog/semaglutide-without-insurance",
      excerpt: "Affordable options and strategies for obtaining semaglutide without insurance coverage.",
      category: "Access"
    },
    {
      title: "Online Semaglutide Programs Comparison",
      url: "/blog/online-semaglutide-weight-loss-programs",
      excerpt: "Evaluating telehealth platforms, costs, and quality of care for GLP-1 prescriptions.",
      category: "Telehealth"
    },
    {
      title: "2025 Semaglutide & Tirzepatide Shortages",
      url: "/blog/semaglutide-tirzepatide-2025-shortages",
      excerpt: "Current shortage updates, alternative options, and how to secure consistent supply.",
      category: "Supply"
    },
    {
      title: "Compounded vs Brand-Name Semaglutide",
      url: "/blog/compounded-vs-brand-semaglutide",
      excerpt: "Understanding quality, efficacy, and cost differences between compounded and brand medications.",
      category: "Options"
    },
    {
      title: "Insurance Coverage Strategies",
      url: "/blog/insurance-coverage-glp1",
      excerpt: "Navigating prior authorizations and maximizing insurance benefits for GLP-1 medications.",
      category: "Insurance"
    },
    {
      title: "Pharmacy Options for GLP-1s",
      url: "/blog/pharmacy-options-glp1",
      excerpt: "Local pharmacies vs mail-order vs compounding pharmacies: pros and cons.",
      category: "Pharmacy"
    },
    {
      title: "Savings Programs and Coupons",
      url: "/blog/savings-programs-semaglutide",
      excerpt: "Manufacturer savings cards, patient assistance programs, and discount strategies.",
      category: "Savings"
    },
    {
      title: "International Access to Semaglutide",
      url: "/blog/international-semaglutide-access",
      excerpt: "Availability, pricing, and regulations for GLP-1 medications outside the United States.",
      category: "International"
    }
  ];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="GLP-1 Supply, Cost & Access Guide | Trimi"
        description="Navigate semaglutide and tirzepatide availability, costs, insurance coverage, and access options. Current shortage updates and affordable alternatives."
        canonical="https://trytrimi.com/supply-access-hub"
        keywords="semaglutide supply, tirzepatide shortage, GLP-1 cost, weight loss medication access"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="GLP-1 Supply and Access Resources"
        description="Comprehensive guides on accessing and affording GLP-1 medications"
        items={accessArticles.map(article => ({ name: article.title, url: article.url }))}
      />
      <ProductSchema
        name="GLP-1 Access & Affordability Program"
        description="Guaranteed medication supply and access program with transparent pricing, insurance navigation support, and alternative options during shortages."
        image="/og-supply-access.jpg"
        price="199"
        url="/supply-access-hub"
        ratingValue="4.8"
        reviewCount="890"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Gregory T.",
            rating: 5,
            reviewBody: "Never had to worry about shortages. Consistent supply and clear communication throughout my treatment.",
            datePublished: "2024-01-28"
          },
          {
            author: "Maria S.",
            rating: 5,
            reviewBody: "Helped me navigate insurance denials and found affordable compounded options. Saved thousands!",
            datePublished: "2024-02-19"
          },
          {
            author: "Paul W.",
            rating: 4,
            reviewBody: "Transparent pricing was refreshing. Knew exactly what I'd pay before starting treatment.",
            datePublished: "2024-03-06"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "890"
        }}
      />

      <Navigation />
      <SmartBreadcrumbs />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Package className="h-4 w-4" />
              <span className="text-sm font-medium">Supply & Access Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GLP-1 Supply, Cost & Access Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Navigate the complexities of obtaining semaglutide and tirzepatide. Up-to-date information on costs, insurance coverage, shortages, and affordable alternatives.
            </p>
          </div>

          {/* Key Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <DollarSign className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Pricing & Costs</h3>
              <p className="text-sm text-muted-foreground">Transparent cost comparisons and savings</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Package className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className="text-sm text-muted-foreground">Shortage updates and supply alternatives</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Access Options</h3>
              <p className="text-sm text-muted-foreground">Telehealth, pharmacies, and delivery</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <AlertTriangle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Insurance</h3>
              <p className="text-sm text-muted-foreground">Coverage strategies and prior auth</p>
            </Card>
          </div>

          {/* Articles Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Supply & Access Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessArticles.map((article, index) => (
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
                      Learn More →
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
                <h2 className="text-2xl font-bold mb-4">Start with Affordable Access</h2>
                <p className="text-muted-foreground mb-6">
                  Get transparent pricing and consistent supply through our telehealth platform
                </p>
                <Link to="/#quiz">
                  <Button size="lg" className="font-semibold">
                    Check Your Options
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

export default SupplyAccessHub;
