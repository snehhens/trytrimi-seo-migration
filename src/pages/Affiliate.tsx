import { SEOHead } from "@/components/seo/SEOHead";
import Navigation from "@/components/Navigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Become an Affiliate | Trimi"
        description="Join the Trimi affiliate program and earn $50 per order by referring customers to prescription weight loss treatments. Apply today."
        canonical="https://trytrimi.com/affiliate"
      />
      <Navigation />

      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-accent/30 to-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(212,60%,25%)] mb-6">
              Become a Trimi Affiliate
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with Trimi and earn <strong>$50 per order</strong> by helping people access affordable, prescription weight loss treatments.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://app.usesteer.io/brands/Trimi" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Partner With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: DollarSign,
                  title: "$50 Per Order",
                  description: "Earn $50 for every order placed through your custom affiliate link. Simple, transparent, and among the best payouts in the telehealth space.",
                },
                {
                  icon: Users,
                  title: "Growing Market",
                  description: "The GLP-1 weight loss market is booming. Position yourself in one of the fastest-growing health categories.",
                },
                {
                  icon: TrendingUp,
                  title: "High Conversion Rates",
                  description: "Our optimized funnel and affordable pricing mean more of your referrals convert into paying customers.",
                },
              ].map((benefit) => (
                <div key={benefit.title} className="text-center p-6 rounded-2xl border border-border bg-card">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Apply", description: "Fill out a quick application and our team will review it within 48 hours." },
                { step: "2", title: "Get Your Link", description: "Once approved, you'll receive a unique referral link and marketing assets." },
                { step: "3", title: "Share & Earn", description: "Share your link with your audience and earn $50 for every customer who places an order." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Who Should Apply</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Health & wellness influencers",
                "Fitness coaches & personal trainers",
                "Healthcare bloggers & content creators",
                "Nutritionists & dietitians",
                "Weight loss community leaders",
                "Telehealth & health-tech affiliates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-lg bg-accent/30">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Email us at <strong>care@trytrimi.com</strong> with a brief intro about yourself and your audience. We'll get back to you within 48 hours.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <a href="https://app.usesteer.io/brands/Trimi" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <OptimizedFooter />
    </div>
  );
};

export default Affiliate;
