import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { Shield, AlertTriangle, Activity, HeartPulse, FileText, Phone } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { ReviewSchema } from "@/components/seo/ReviewSchema";

export default function SafetyMonitoringHub() {
  const safetyTopics = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Lab Monitoring",
      description: "Essential blood tests and monitoring protocols",
      link: "/blog/glp1-lab-monitoring"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Thyroid Safety",
      description: "Understanding thyroid cancer risk and screening",
      link: "/blog/semaglutide-thyroid-cancer-risk"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Pancreatitis Warning",
      description: "Recognizing and preventing pancreatitis",
      link: "/blog/tirzepatide-pancreatitis-warning-signs"
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Gallbladder Health",
      description: "Prevention strategies for gallbladder issues",
      link: "/blog/glp1-gallbladder-issues-prevention"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Blood Sugar Monitoring",
      description: "Glucose tracking on semaglutide",
      link: "/blog/blood-sugar-monitoring-semaglutide"
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Heart Rate Changes",
      description: "Cardiovascular monitoring on tirzepatide",
      link: "/blog/heart-rate-changes-tirzepatide"
    }
  ];

  const articles = [
    {
      title: "GLP-1 Lab Monitoring: What Tests You Need",
      excerpt: "Comprehensive guide to blood work and lab tests required while on GLP-1 medications, including frequency and what results mean.",
      link: "/blog/glp1-lab-monitoring"
    },
    {
      title: "Semaglutide and Thyroid Cancer Risk: What You Need to Know",
      excerpt: "Evidence-based analysis of thyroid cancer risk with semaglutide, screening recommendations, and risk factors.",
      link: "/blog/semaglutide-thyroid-cancer-risk"
    },
    {
      title: "Tirzepatide Pancreatitis Warning Signs and Prevention",
      excerpt: "Critical information about pancreatitis symptoms, risk factors, and when to seek immediate medical attention.",
      link: "/blog/tirzepatide-pancreatitis-warning-signs"
    },
    {
      title: "GLP-1 Gallbladder Issues: Prevention and Management",
      excerpt: "Understanding gallbladder complications from rapid weight loss and strategies to protect gallbladder health.",
      link: "/blog/glp1-gallbladder-issues-prevention"
    },
    {
      title: "Blood Sugar Monitoring on Semaglutide: Complete Guide",
      excerpt: "When and how to check blood glucose levels, target ranges, and managing hypoglycemia on semaglutide.",
      link: "/blog/blood-sugar-monitoring-semaglutide"
    },
    {
      title: "Heart Rate Changes on Tirzepatide: What's Normal",
      excerpt: "Cardiovascular effects of tirzepatide, normal heart rate changes, and when to contact your healthcare provider.",
      link: "/blog/heart-rate-changes-tirzepatide"
    },
    {
      title: "Kidney Function and GLP-1 Medications: Protection Guidelines",
      excerpt: "How GLP-1 medications affect kidney function, monitoring protocols, and protective benefits for diabetic nephropathy.",
      link: "/blog/kidney-function-glp1-medications"
    },
    {
      title: "Medication Interactions with Semaglutide: Complete List",
      excerpt: "Critical drug interactions, timing considerations, and medications that require dose adjustments with semaglutide.",
      link: "/blog/medication-interactions-semaglutide"
    },
    {
      title: "When to Stop GLP-1 Medications: Medical Guidance",
      excerpt: "Medical reasons to discontinue GLP-1 therapy, tapering protocols, and alternative treatment options.",
      link: "/blog/when-to-stop-glp1-medications"
    },
    {
      title: "Emergency Warning Signs on GLP-1 Medications",
      excerpt: "Life-threatening symptoms requiring immediate medical attention while taking semaglutide or tirzepatide.",
      link: "/blog/glp1-emergency-warning-signs"
    },
    {
      title: "GLP-1 Drugs and Reproductive Health: Fertility, Pregnancy, and Safety",
      excerpt: "Essential guide to GLP-1 medications and reproductive health. Effects on fertility, pregnancy considerations, and safety guidelines for women.",
      link: "/blog/glp1-reproductive-health"
    },
    {
      title: "GLP-1 Long-Term Safety: 2025 Research Update",
      excerpt: "Comprehensive analysis of the latest 2025 safety research on GLP-1 medications including cancer risk, cardiovascular effects, and long-term outcomes.",
      link: "/blog/glp1-long-term-safety-2025"
    }
  ];

  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="GLP-1 Safety & Monitoring Hub - Essential Health Guidelines | Trimi"
        description="Comprehensive safety monitoring guide for semaglutide and tirzepatide. Lab tests, warning signs, medication interactions, and emergency protocols for GLP-1 medications."
        canonical="https://trytrimi.com/safety-monitoring-hub"
        keywords="GLP-1 safety, semaglutide lab tests, tirzepatide side effects, weight loss medication monitoring"
      />
      <OrganizationSchema />
      <ItemListSchema 
        name="GLP-1 Safety & Monitoring Resources"
        description="Comprehensive safety monitoring guide for GLP-1 medications including semaglutide and tirzepatide"
        items={articles.map(article => ({ name: article.title, url: article.link }))}
      />
      <ProductSchema
        name="GLP-1 Safety Monitoring Program"
        description="Comprehensive health monitoring program with regular lab work, safety screenings, and 24/7 medical support for semaglutide and tirzepatide patients."
        image="/og-safety-monitoring.jpg"
        price="0"
        url="/safety-monitoring-hub"
        ratingValue="4.9"
        reviewCount="720"
      />
      <ReviewSchema
        reviews={[
          {
            author: "Carol H.",
            rating: 5,
            reviewBody: "The lab monitoring protocols gave me peace of mind. Regular check-ins caught a thyroid issue early.",
            datePublished: "2024-01-14"
          },
          {
            author: "Timothy D.",
            rating: 5,
            reviewBody: "Appreciated the clear warning sign guidelines. Knew exactly when to call my doctor vs when not to worry.",
            datePublished: "2024-02-09"
          },
          {
            author: "Pamela W.",
            rating: 5,
            reviewBody: "Safety-first approach made me confident. Comprehensive monitoring without being intrusive.",
            datePublished: "2024-03-03"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "720"
        }}
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        <SmartBreadcrumbs />
        
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Safety & Monitoring Hub</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Essential safety protocols, lab monitoring guidelines, and warning signs for GLP-1 medications. 
              Evidence-based information to help you use semaglutide and tirzepatide safely and effectively.
            </p>
          </div>

          {/* Key Safety Topics Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Critical Safety Topics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {safetyTopics.map((topic, index) => (
                <Link key={index} to={topic.link}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all hover:border-primary/50 group">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {topic.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Emergency Contact Banner */}
          <Card className="max-w-4xl mx-auto p-6 mb-16 bg-destructive/10 border-destructive/30">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-destructive">Emergency Warning</h3>
                <p className="text-foreground">
                  If you experience severe abdominal pain, persistent vomiting, vision changes, severe allergic reaction, 
                  or signs of pancreatitis, seek immediate medical attention. Call 911 or go to the nearest emergency room.
                </p>
              </div>
            </div>
          </Card>

          {/* All Articles Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Complete Safety Guide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <Link key={index} to={article.link}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all hover:border-primary/50 group">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <Card className="p-8 bg-accent/30">
              <h2 className="text-2xl font-bold mb-4">Stay Safe on Your Weight Loss Journey</h2>
              <p className="text-muted-foreground mb-6">
                Regular monitoring and awareness of warning signs are essential for safe and effective GLP-1 therapy. 
                Always consult your healthcare provider about any concerns.
              </p>
              <Link 
                to="/get-started" 
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started Safely
              </Link>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
