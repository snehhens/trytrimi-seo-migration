import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { Syringe, Calculator, TrendingUp, AlertCircle } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

const DosageHub = () => {
  const dosageArticles = [
    {
      title: "Starting Semaglutide: Dosage Guide",
      url: "/blog/starting-semaglutide-dosage-guide",
      excerpt: "Complete guide to semaglutide starting doses, titration schedules, and what to expect during dose escalation.",
      category: "Dosage"
    },
    {
      title: "Tirzepatide Dosing Schedule",
      url: "/blog/tirzepatide-dosing-schedule",
      excerpt: "Step-by-step tirzepatide dosing protocol from 1.5mg to 13.5mg maintenance dose.",
      category: "Dosage"
    },
    {
      title: "Semaglutide Injection Technique",
      url: "/blog/semaglutide-injection-technique",
      excerpt: "Proper injection technique, site rotation, and tips to minimize discomfort and side effects.",
      category: "Administration"
    },
    {
      title: "Missed Dose Protocol",
      url: "/blog/missed-dose-protocol-semaglutide",
      excerpt: "What to do if you miss a semaglutide or tirzepatide injection and how to get back on track safely.",
      category: "Administration"
    },
    {
      title: "Semaglutide Plateau Solutions",
      url: "/blog/semaglutide-plateau",
      excerpt: "Breaking through weight loss plateaus with dose adjustments and lifestyle modifications.",
      category: "Dosage"
    },
    {
      title: "Maximum Dose Guidelines",
      url: "/blog/maximum-dose-glp1",
      excerpt: "Understanding maximum therapeutic doses for semaglutide and tirzepatide.",
      category: "Dosage"
    }
  ];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="GLP-1 Dosage & Administration Guide | Trimi"
        description="Complete guide to semaglutide and tirzepatide dosing schedules, injection techniques, and administration protocols. Evidence-based dosage information."
        canonical="https://trytrimi.com/dosage-hub"
        keywords="semaglutide dosage, tirzepatide dosing schedule, GLP-1 injection technique, weight loss medication dosage"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="GLP-1 Dosage & Administration Resources"
        description="Comprehensive guides on GLP-1 medication dosing and administration"
        items={dosageArticles.map(article => ({ name: article.title, url: article.url }))}
      />
      <ProductSchema
        name="GLP-1 Dosage Optimization Program"
        description="Personalized dosage guidance and administration support with medical supervision, titration planning, and injection technique training."
        image="/og-dosage-hub.jpg"
        price="0"
        url="/dosage-hub"
        ratingValue="4.8"
        reviewCount="840"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Emily R.",
            rating: 5,
            reviewBody: "The injection technique guide made me feel confident from day one. No more anxiety about self-administering.",
            datePublished: "2024-01-22"
          },
          {
            author: "Chris M.",
            rating: 5,
            reviewBody: "Detailed titration schedule helped me understand the dose escalation process. No surprises, just steady progress.",
            datePublished: "2024-02-16"
          },
          {
            author: "Laura H.",
            rating: 4,
            reviewBody: "The missed dose protocol saved me from panicking when I forgot an injection. Clear, helpful instructions.",
            datePublished: "2024-03-11"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "840"
        }}
      />

      <Navigation />
      <SmartBreadcrumbs />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Syringe className="h-4 w-4" />
              <span className="text-sm font-medium">Dosage & Administration Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GLP-1 Dosage & Administration Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Evidence-based protocols for safe and effective GLP-1 medication use. Learn proper dosing schedules, injection techniques, and administration best practices.
            </p>
          </div>

          {/* Key Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Calculator className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Starting Doses</h3>
              <p className="text-sm text-muted-foreground">Initial dosing protocols and titration schedules</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Dose Escalation</h3>
              <p className="text-sm text-muted-foreground">Safe progression to therapeutic doses</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Syringe className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Injection Technique</h3>
              <p className="text-sm text-muted-foreground">Proper administration and site rotation</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <AlertCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Troubleshooting</h3>
              <p className="text-sm text-muted-foreground">Managing missed doses and side effects</p>
            </Card>
          </div>

          {/* Articles Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Comprehensive Dosage Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dosageArticles.map((article, index) => (
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
                <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-muted-foreground mb-6">
                  Get personalized dosing guidance from licensed medical professionals
                </p>
                <Link to="/#quiz">
                  <Button size="lg" className="font-semibold">
                    Get Started Today
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

export default DosageHub;
