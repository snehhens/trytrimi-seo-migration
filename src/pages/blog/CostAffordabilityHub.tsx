import { SEOHead } from "@/components/seo/SEOHead";
import { MedicalWebPageSchema } from "@/components/seo/MedicalWebPageSchema";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, DollarSign, CreditCard, Heart, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CostAffordabilityHub() {
  const articles = [
    {
      title: "Insurance Coverage for Weight Loss Medications",
      url: "/blog/insurance-coverage-weight-loss-medications",
      excerpt: "Understanding insurance coverage options for GLP-1 medications and how to maximize your benefits.",
      icon: ShieldCheck
    },
    {
      title: "Savings Programs and Patient Assistance",
      url: "/blog/savings-programs-patient-assistance",
      excerpt: "Explore manufacturer savings programs, copay cards, and patient assistance programs to reduce costs.",
      icon: CreditCard
    },
    {
      title: "Comparing Costs: Semaglutide vs. Tirzepatide",
      url: "/blog/comparing-costs-semaglutide-tirzepatide",
      excerpt: "A detailed comparison of costs between leading GLP-1 medications and strategies to save money.",
      icon: DollarSign
    },
    {
      title: "Long-Term Value of GLP-1 Therapy",
      url: "/blog/long-term-value-glp1-therapy",
      excerpt: "Understanding the long-term health benefits and cost-effectiveness of GLP-1 medications.",
      icon: Heart
    }
  ];

  return (
    <>
      <SEOHead
        title="Cost & Affordability Guide for GLP-1 Medications | Trimi"
        description="Comprehensive guide to managing costs of GLP-1 medications. Learn about insurance coverage, savings programs, patient assistance, and affordability strategies for weight loss medications."
        canonical="https://trytrimi.com/blog/cost-affordability-hub"
        keywords="GLP-1 cost, semaglutide insurance, tirzepatide savings, weight loss medication affordability"
      />
      
      <MedicalWebPageSchema
        title="Cost & Affordability Guide for GLP-1 Medications"
        description="Complete resource for understanding and managing the costs of GLP-1 weight loss medications including insurance, savings programs, and financial assistance."
        url="/blog/cost-affordability-hub"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-primary mb-4">
            <DollarSign className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Cost & Affordability</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Making GLP-1 Medications Affordable
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your complete guide to understanding costs, insurance coverage, and financial assistance options for GLP-1 weight loss medications.
          </p>
        </header>

        {/* Overview Section */}
        <section className="mb-12">
          <Card className="p-8 bg-accent/30 border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Understanding GLP-1 Medication Costs</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              GLP-1 medications like semaglutide and tirzepatide can be expensive, but various options exist to make them more affordable. The average retail cost ranges from $900-$1,500 per month, but with insurance coverage, savings programs, and patient assistance, many patients pay significantly less.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$900-1,500</div>
                <div className="text-sm text-muted-foreground">Average Retail Cost/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$25-150</div>
                <div className="text-sm text-muted-foreground">With Insurance Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$0-25</div>
                <div className="text-sm text-muted-foreground">With Savings Programs</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Key Topics Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Explore Cost-Saving Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Link
                  key={index}
                  to={article.url}
                  className="group"
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                          {article.title}
                          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Financial Assistance Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Financial Assistance Options</h2>
          <Card className="p-6 border-primary/20">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Manufacturer Savings Programs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Both Novo Nordisk (Wegovy, Ozempic) and Eli Lilly (Mounjaro, Zepbound) offer savings cards that can reduce copays to as low as $25 per month for eligible patients with commercial insurance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Patient Assistance Programs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Manufacturers provide free medication to qualifying patients without insurance or with financial hardship. Income limits typically range from 300-400% of federal poverty level.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Online Pharmacies and Compounding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Telehealth platforms and compounding pharmacies may offer lower-cost alternatives, though it's important to ensure quality and safety with these options.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="p-8 bg-primary/5 border-primary/20 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore affordable GLP-1 medication options with Trimi. Our team can help you navigate insurance coverage and find the most cost-effective solution for your needs.
            </p>
            <Link 
              to="/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Get Started with Trimi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Card>
        </section>
      </article>
    </>
  );
}
