import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/compat/react-router-dom";
import { Shield, DollarSign, FileText, Phone, TrendingDown, CreditCard, Building2, Users } from "lucide-react";
import { Helmet } from "@/compat/react-helmet-async";

const InsuranceAccess = () => {
  const articles = [
    {
      title: "Does Insurance Cover Semaglutide for Weight Loss?",
      slug: "insurance-coverage-semaglutide-weight-loss",
      description: "Complete guide to insurance coverage for weight loss prescriptions including Medicare, Medicaid, and private insurance.",
      icon: Shield,
      readTime: "12 min"
    },
    {
      title: "Semaglutide Savings Programs & Patient Assistance",
      slug: "semaglutide-savings-programs",
      description: "Manufacturer savings cards, patient assistance programs, and copay reduction strategies.",
      icon: DollarSign,
      readTime: "10 min"
    },
    {
      title: "How to Get Prior Authorization Approved",
      slug: "prior-authorization-glp1-approval",
      description: "Step-by-step guide to navigating the prior authorization process for GLP-1 medications.",
      icon: FileText,
      readTime: "14 min"
    },
    {
      title: "Appealing Insurance Denials for GLP-1 Medications",
      slug: "appealing-insurance-denials-glp1",
      description: "Expert strategies for successfully appealing denied coverage with templates and timelines.",
      icon: Phone,
      readTime: "13 min"
    },
    {
      title: "Compounded Semaglutide: Cost, Safety & Access",
      slug: "compounded-semaglutide-cost-safety",
      description: "Everything about compounded GLP-1s including pricing, quality considerations, and where to access.",
      icon: TrendingDown,
      readTime: "11 min"
    },
    {
      title: "Cash Pay Options: Lowest Cost Semaglutide Sources",
      slug: "cash-pay-semaglutide-lowest-cost",
      description: "Comparing cash pay prices, online pharmacies, and discount programs for best value.",
      icon: CreditCard,
      readTime: "9 min"
    },
    {
      title: "International & Canadian Pharmacy Options",
      slug: "international-pharmacy-glp1-options",
      description: "Safe and legal options for accessing lower-cost GLP-1 medications from international sources.",
      icon: Building2,
      readTime: "10 min"
    },
    {
      title: "Employer Coverage: How to Advocate for GLP-1 Benefits",
      slug: "employer-coverage-glp1-advocacy",
      description: "Strategies for working with HR to add or improve GLP-1 medication coverage in workplace plans.",
      icon: Users,
      readTime: "12 min"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Insurance & Access Guide: Affording GLP-1 Medications | Trimi</title>
        <meta 
          name="description" 
          content="Complete guide to accessing affordable GLP-1 medications. Insurance coverage, savings programs, prior authorization, appeals, and cash pay options." 
        />
        <meta name="keywords" content="GLP-1 insurance, semaglutide coverage, patient assistance, savings programs, prior authorization, insurance appeals" />
        <link rel="canonical" href="https://trytrimi.com/insurance-access" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Insurance & Access Guide: Affording GLP-1 Medications" />
        <meta property="og:description" content="Navigate insurance coverage, savings programs, and affordable access to GLP-1 medications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trytrimi.com/insurance-access" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insurance & Access Guide: Affording GLP-1 Medications" />
        <meta name="twitter:description" content="Navigate insurance coverage, savings programs, and affordable access to GLP-1 medications." />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Insurance & Access Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Navigate insurance coverage, savings programs, and affordable access strategies for GLP-1 medications. 
              From prior authorization to cash pay options, find the solution that works for your situation.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">~40%</div>
                <p className="text-sm text-muted-foreground">Insurance coverage rate for weight loss</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">$25-50</div>
                <p className="text-sm text-muted-foreground">Monthly cost with savings cards</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">60-70%</div>
                <p className="text-sm text-muted-foreground">Successful appeal rate with proper documentation</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">$300-500</div>
                <p className="text-sm text-muted-foreground">Compounded GLP-1 monthly cost</p>
              </CardContent>
            </Card>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {articles.map((article) => {
              const Icon = article.icon;
              return (
                <Card key={article.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                        <CardDescription className="text-sm mb-3">
                          {article.description}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{article.readTime} read</span>
                          <Link to={`/blog/${article.slug}`}>
                            <Button variant="ghost" size="sm">
                              Read Article →
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="py-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Weight Loss Journey?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Trimi helps you navigate insurance, find savings programs, and access affordable GLP-1 medications 
                with expert medical support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-started">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started with Trimi
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default InsuranceAccess;
