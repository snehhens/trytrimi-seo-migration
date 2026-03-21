import { Helmet } from "@/compat/react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LeadMagnet } from "@/components/LeadMagnet";

const LeadMagnets = () => {
  const magnets = [
    {
      title: "Free GLP-1 Medication Guide",
      description: "Complete 40-page guide covering everything about semaglutide and tirzepatide, including effectiveness, side effects, dosing schedules, and cost comparisons.",
      magnetType: "guide" as const,
      fileName: "glp1-complete-guide.pdf"
    },
    {
      title: "7-Day Meal Plan for GLP-1 Users",
      description: "Nutritionist-designed meal plan optimized for GLP-1 medications. Includes recipes, shopping lists, and tips to minimize side effects while maximizing results.",
      magnetType: "meal-plan" as const,
      fileName: "glp1-meal-plan.pdf"
    },
    {
      title: "Cost Savings Checklist",
      description: "10-point checklist to save up to 70% on weight loss medications. Discover insurance tips, discount programs, and compounding pharmacy secrets.",
      magnetType: "checklist" as const,
      fileName: "cost-savings-checklist.pdf"
    },
    {
      title: "Side Effects Management Guide",
      description: "Practical strategies to manage common GLP-1 side effects. Learn when to worry, when to adjust, and how to stay comfortable during treatment.",
      magnetType: "guide" as const,
      fileName: "side-effects-guide.pdf"
    },
    {
      title: "Weight Loss Tracking Template",
      description: "Printable 12-week tracker for weight, measurements, photos, and progress notes. Stay motivated and document your transformation journey.",
      magnetType: "tracker" as const,
      fileName: "weight-tracker.pdf"
    },
    {
      title: "Before You Start: Pre-Treatment Checklist",
      description: "Essential checklist covering medical preparations, lifestyle adjustments, and setting up for success before starting GLP-1 medication.",
      magnetType: "checklist" as const,
      fileName: "pre-treatment-checklist.pdf"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Weight Loss Guides & Resources | Trimi</title>
        <meta 
          name="description" 
          content="Download free GLP-1 guides, meal plans, checklists, and tracking tools. Expert-created resources to maximize your weight loss success."
        />
        <link rel="canonical" href="https://trytrimi.com/resources" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Free Weight Loss Resources
                </h1>
                <p className="text-xl text-muted-foreground">
                  Expert-created guides, meal plans, and tools to support your journey
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {magnets.map((magnet) => (
                  <LeadMagnet key={magnet.fileName} {...magnet} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get personalized treatment from licensed providers starting at $299/month
                </p>
                <a 
                  href="https://app.trytrimi.com/start-online-visit/weight-loss-memberships"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Free Consultation
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LeadMagnets;
