import { SEOHead } from "@/components/seo/SEOHead";
import { MedicalWebPageSchema } from "@/components/seo/MedicalWebPageSchema";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, FileText, Users, Calendar, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function GettingStartedHub() {
  const articles = [
    {
      title: "How to Get Prescribed GLP-1 Medications",
      url: "/blog/how-to-get-prescribed-glp1",
      excerpt: "Step-by-step guide to getting a prescription for weight loss medications including eligibility requirements and consultation process.",
      icon: FileText
    },
    {
      title: "What to Expect: First Month on GLP-1s",
      url: "/blog/first-month-glp1-expectations",
      excerpt: "Detailed guide on what to expect during your first month, including side effects, dosing, and lifestyle adjustments.",
      icon: Calendar
    },
    {
      title: "Choosing Between Semaglutide and Tirzepatide",
      url: "/blog/choosing-semaglutide-tirzepatide",
      excerpt: "Compare the two leading medications to determine which might be the best fit for your weight loss goals.",
      icon: Stethoscope
    },
    {
      title: "Finding the Right Healthcare Provider",
      url: "/blog/finding-healthcare-provider-glp1",
      excerpt: "How to find a qualified healthcare provider who can prescribe and monitor your GLP-1 therapy.",
      icon: Users
    }
  ];

  return (
    <>
      <SEOHead
        title="Getting Started with GLP-1 Weight Loss Medications | Trimi"
        description="Complete beginner's guide to starting GLP-1 medications for weight loss. Learn about prescriptions, first-month expectations, choosing medications, and finding healthcare providers."
        canonical="https://trytrimi.com/blog/getting-started-hub"
        keywords="GLP-1 prescription, semaglutide beginner guide, tirzepatide first month, weight loss medication"
      />
      
      <MedicalWebPageSchema
        title="Getting Started with GLP-1 Weight Loss Medications"
        description="Comprehensive guide for beginners starting GLP-1 therapy including prescriptions, expectations, medication selection, and provider selection."
        url="/blog/getting-started-hub"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-primary mb-4">
            <FileText className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Getting Started</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Your Guide to Starting GLP-1 Medications
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know to begin your weight loss journey with GLP-1 medications safely and successfully.
          </p>
        </header>

        {/* Overview Section */}
        <section className="mb-12">
          <Card className="p-8 bg-accent/30 border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Beginning Your Weight Loss Journey</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Starting GLP-1 medications is an exciting step toward achieving your health goals. This comprehensive guide walks you through every stage of the process, from getting your initial prescription to understanding what to expect in your first weeks of treatment.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Step 1</div>
                <div className="text-sm text-muted-foreground">Consultation & Eligibility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Step 2</div>
                <div className="text-sm text-muted-foreground">Choose Your Medication</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Step 3</div>
                <div className="text-sm text-muted-foreground">Get Prescription</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Step 4</div>
                <div className="text-sm text-muted-foreground">Start Treatment</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Key Topics Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Essential Guides for Beginners</h2>
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

        {/* Eligibility Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Am I Eligible for GLP-1 Medications?</h2>
          <Card className="p-6 border-primary/20">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">BMI Requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generally approved for individuals with BMI ≥30 kg/m² (obesity) or BMI ≥27 kg/m² (overweight) with at least one weight-related condition such as type 2 diabetes, hypertension, or sleep apnea.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Medical Evaluation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A healthcare provider will review your medical history, current medications, and perform necessary lab tests to ensure GLP-1 medications are safe and appropriate for you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Contraindications</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GLP-1 medications may not be suitable for individuals with personal or family history of medullary thyroid carcinoma, Multiple Endocrine Neoplasia syndrome type 2, or severe gastrointestinal disease.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="p-8 bg-primary/5 border-primary/20 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Begin your weight loss journey with Trimi. Our healthcare providers can evaluate your eligibility and guide you through every step of the process.
            </p>
            <Link 
              to="/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Start Your Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Card>
        </section>
      </article>
    </>
  );
}
