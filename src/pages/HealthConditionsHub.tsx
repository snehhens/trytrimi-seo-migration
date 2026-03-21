import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { Heart, Brain, Activity, Stethoscope } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

const HealthConditionsHub = () => {
  const healthArticles = [
    {
      title: "Semaglutide and Blood Pressure",
      url: "/blog/semaglutide-blood-pressure",
      excerpt: "How semaglutide reduces cardiovascular risk and improves blood pressure in patients with obesity.",
      category: "Cardiovascular"
    },
    {
      title: "Semaglutide for PCOS",
      url: "/blog/semaglutide-pcos",
      excerpt: "Evidence-based guide to using semaglutide for polycystic ovary syndrome management.",
      category: "Hormonal"
    },
    {
      title: "Semaglutide and Mental Health",
      url: "/blog/semaglutide-mental-health",
      excerpt: "Understanding psychological effects, mood changes, and mental health considerations during treatment.",
      category: "Mental Health"
    },
    {
      title: "Tirzepatide for Prediabetes",
      url: "/blog/tirzepatide-prediabetes",
      excerpt: "How tirzepatide can prevent progression from prediabetes to type 2 diabetes.",
      category: "Metabolic"
    },
    {
      title: "Semaglutide and Bone Health",
      url: "/blog/semaglutide-bone-health",
      excerpt: "Protecting bone density during rapid weight loss on GLP-1 medications.",
      category: "Musculoskeletal"
    },
    {
      title: "GLP-1 Medications and Liver Health",
      url: "/blog/tirzepatide-liver-health",
      excerpt: "Benefits for fatty liver disease and hepatic function improvements.",
      category: "Metabolic"
    },
    {
      title: "Semaglutide for Older Adults",
      url: "/blog/semaglutide-older-adults-guidance",
      excerpt: "Special considerations, safety, and efficacy in patients 65 and older.",
      category: "Age-Specific"
    },
    {
      title: "Tirzepatide and Sleep Quality",
      url: "/blog/tirzepatide-sleep-quality",
      excerpt: "Improvements in sleep apnea and overall sleep quality with weight loss.",
      category: "Sleep"
    },
    {
      title: "Semaglutide and Kidney Function",
      url: "/blog/semaglutide-kidney-health",
      excerpt: "Renal protection benefits and considerations for patients with kidney disease.",
      category: "Renal"
    },
    {
      title: "GLP-1 Cardiovascular Benefits Beyond Weight Loss",
      url: "/blog/glp1-cardiovascular-benefits",
      excerpt: "Discover how GLP-1 medications reduce heart attack risk, improve cholesterol, and provide heart benefits independent of weight loss.",
      category: "Cardiovascular"
    }
  ];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="GLP-1 Medications & Health Conditions | Trimi"
        description="How semaglutide and tirzepatide affect various health conditions including cardiovascular, metabolic, and hormonal health. Evidence-based medical information."
        canonical="https://trytrimi.com/health-conditions-hub"
        keywords="semaglutide health conditions, tirzepatide PCOS, GLP-1 blood pressure, weight loss medication health benefits"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="GLP-1 Medications and Health Conditions"
        description="Comprehensive guides on how GLP-1 medications affect various health conditions"
        items={healthArticles.map(article => ({ name: article.title, url: article.url }))}
      />
      <ProductSchema
        name="GLP-1 Health Condition Management Program"
        description="Specialized weight loss program addressing multiple health conditions with semaglutide or tirzepatide including cardiovascular, metabolic, and hormonal optimization."
        image="/og-health-conditions.jpg"
        price="299"
        url="/health-conditions-hub"
        ratingValue="4.9"
        reviewCount="680"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Barbara K.",
            rating: 5,
            reviewBody: "My blood pressure improved dramatically on semaglutide. Lost 40 pounds and came off two medications!",
            datePublished: "2024-01-30"
          },
          {
            author: "Steven P.",
            rating: 5,
            reviewBody: "PCOS symptoms greatly improved. More regular cycles and easier weight management than ever before.",
            datePublished: "2024-02-25"
          },
          {
            author: "Linda M.",
            rating: 5,
            reviewBody: "My prediabetes numbers are now in normal range. This medication changed my life and health trajectory.",
            datePublished: "2024-03-14"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "680"
        }}
      />

      <Navigation />
      <SmartBreadcrumbs />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Stethoscope className="h-4 w-4" />
              <span className="text-sm font-medium">Health Conditions Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GLP-1 Medications & Health Conditions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore how semaglutide and tirzepatide impact various health conditions beyond weight loss. Evidence-based information on cardiovascular, metabolic, and hormonal health.
            </p>
          </div>

          {/* Key Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Cardiovascular</h3>
              <p className="text-sm text-muted-foreground">Heart health, blood pressure, and risk reduction</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Activity className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Metabolic Health</h3>
              <p className="text-sm text-muted-foreground">Diabetes, prediabetes, and insulin sensitivity</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Mental Health</h3>
              <p className="text-sm text-muted-foreground">Mood, anxiety, and psychological wellbeing</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Stethoscope className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Hormonal Balance</h3>
              <p className="text-sm text-muted-foreground">PCOS, fertility, and endocrine effects</p>
            </Card>
          </div>

          {/* Articles Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Condition-Specific Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthArticles.map((article, index) => (
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
                <h2 className="text-2xl font-bold mb-4">Discuss Your Health History</h2>
                <p className="text-muted-foreground mb-6">
                  Get personalized medical guidance based on your specific health conditions
                </p>
                <Link to="/#quiz">
                  <Button size="lg" className="font-semibold">
                    Start Consultation
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

export default HealthConditionsHub;
