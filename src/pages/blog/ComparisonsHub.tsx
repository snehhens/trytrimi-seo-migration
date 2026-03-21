import { SEOHead } from "@/components/seo/SEOHead";
import { MedicalWebPageSchema } from "@/components/seo/MedicalWebPageSchema";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, Scale, TrendingUp, DollarSign, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ComparisonsHub() {
  const articles = [
    {
      title: "Semaglutide vs. Tirzepatide: Head-to-Head Comparison",
      url: "/blog/semaglutide-vs-tirzepatide-comparison",
      excerpt: "Comprehensive comparison of efficacy, side effects, dosing, and cost between the two leading GLP-1 medications.",
      icon: Scale
    },
    {
      title: "GLP-1s vs. Traditional Weight Loss Methods",
      url: "/blog/glp1-vs-traditional-weight-loss",
      excerpt: "How GLP-1 medications compare to diet, exercise, and other weight loss interventions in terms of effectiveness.",
      icon: TrendingUp
    },
    {
      title: "Brand Name vs. Compounded GLP-1s",
      url: "/blog/brand-vs-compounded-glp1",
      excerpt: "Understanding the differences between FDA-approved medications and compounded alternatives including safety and cost.",
      icon: Target
    },
    {
      title: "Cost Comparison: All GLP-1 Options",
      url: "/blog/glp1-cost-comparison",
      excerpt: "Detailed breakdown of costs across all available GLP-1 medications and how to find the most affordable option.",
      icon: DollarSign
    },
    {
      title: "Best GLP-1 for Weight Loss: 2025 Rankings",
      url: "/blog/best-glp1-weight-loss-2025",
      excerpt: "Compare semaglutide, tirzepatide, and other GLP-1 medications. Updated 2025 rankings based on clinical data, cost, and real-world results.",
      icon: TrendingUp
    }
  ];

  return (
    <>
      <SEOHead
        title="Semaglutide vs Tirzepatide: Which GLP-1 is Better? | Trimi"
        description="Compare semaglutide vs tirzepatide side-by-side. Wegovy vs Mounjaro, Ozempic vs Zepbound. Efficacy, cost, side effects. Find the best GLP-1 for weight loss."
        canonical="https://trytrimi.com/blog/comparisons-hub"
        keywords="semaglutide vs tirzepatide, wegovy vs mounjaro, ozempic vs zepbound, best GLP-1 for weight loss, tirzepatide vs semaglutide cost, GLP-1 comparison 2025"
      />
      
      <MedicalWebPageSchema
        title="GLP-1 Medication Comparisons"
        description="Comprehensive comparisons of GLP-1 weight loss medications including semaglutide, tirzepatide, and alternatives."
        url="/blog/comparisons-hub"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Scale className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Comparisons</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Compare GLP-1 Weight Loss Medications
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Make informed decisions with detailed, evidence-based comparisons of all available GLP-1 medication options.
          </p>
        </header>

        {/* Overview Section */}
        <section className="mb-12">
          <Card className="p-8 bg-accent/30 border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Understanding Your Options</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With multiple GLP-1 medications available, choosing the right one can feel overwhelming. This hub provides comprehensive comparisons to help you understand the differences in efficacy, side effects, dosing schedules, and costs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15-22%</div>
                <div className="text-sm text-muted-foreground">Average Weight Loss Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">FDA-Approved Options</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$900-1,500</div>
                <div className="text-sm text-muted-foreground">Monthly Cost Range</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Key Comparisons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-foreground">In-Depth Comparisons</h2>
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

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Quick Comparison Overview</h2>
          <Card className="p-6 border-primary/20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Semaglutide</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Tirzepatide</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">Average Weight Loss</td>
                  <td className="py-3 px-4 text-foreground">15-17%</td>
                  <td className="py-3 px-4 text-foreground">20-22%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">Dosing Frequency</td>
                  <td className="py-3 px-4 text-foreground">Once weekly</td>
                  <td className="py-3 px-4 text-foreground">Once weekly</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">Mechanism</td>
                  <td className="py-3 px-4 text-foreground">GLP-1 agonist</td>
                  <td className="py-3 px-4 text-foreground">GLP-1/GIP dual agonist</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-muted-foreground">Average Cost/Month</td>
                  <td className="py-3 px-4 text-foreground">$900-1,200</td>
                  <td className="py-3 px-4 text-foreground">$1,000-1,500</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-muted-foreground">Common Side Effects</td>
                  <td className="py-3 px-4 text-foreground">Nausea, diarrhea</td>
                  <td className="py-3 px-4 text-foreground">Nausea, diarrhea</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="p-8 bg-primary/5 border-primary/20 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Find Your Perfect Match</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Talk to a Trimi healthcare provider to determine which GLP-1 medication is best suited for your unique needs and health goals.
            </p>
            <Link 
              to="/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Get Personalized Recommendations
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Card>
        </section>
      </article>
    </>
  );
}
