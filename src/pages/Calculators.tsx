import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BMICalculator } from "@/components/calculators/BMICalculator";
import { CostCalculator } from "@/components/calculators/CostCalculator";
import { WeightLossPredictor } from "@/components/calculators/WeightLossPredictor";
import { DosageGuide } from "@/components/calculators/DosageGuide";
import { Calculator, DollarSign, TrendingDown, Calendar } from "lucide-react";

const Calculators = () => {
  return (
    <>
      <GlobalSEO includeSchemas={true} />
      <SEOHead
        title="GLP-1 Weight Loss Calculators | BMI, Cost & Dosage Tools"
        description="Free interactive calculators for GLP-1 medications. Calculate your BMI, compare costs, predict weight loss results, and view dosing schedules for semaglutide and tirzepatide."
        canonical="https://trytrimi.com/calculators"
        keywords="BMI calculator, weight loss calculator, semaglutide cost, tirzepatide cost, dosage calculator, GLP-1 tools"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  GLP-1 Weight Loss Calculators
                </h1>
                <p className="text-xl text-muted-foreground">
                  Free interactive tools to help you plan your weight loss journey with semaglutide or tirzepatide
                </p>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-8 border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#bmi" className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:border-primary transition-colors">
                  <Calculator className="w-4 h-4" />
                  BMI Calculator
                </a>
                <a href="#cost" className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:border-primary transition-colors">
                  <DollarSign className="w-4 h-4" />
                  Cost Calculator
                </a>
                <a href="#predictor" className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:border-primary transition-colors">
                  <TrendingDown className="w-4 h-4" />
                  Weight Loss Predictor
                </a>
                <a href="#dosage" className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:border-primary transition-colors">
                  <Calendar className="w-4 h-4" />
                  Dosage Guide
                </a>
              </div>
            </div>
          </section>

          {/* Calculators Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                <div id="bmi">
                  <BMICalculator />
                </div>
                
                <div id="cost">
                  <CostCalculator />
                </div>
                
                <div id="predictor">
                  <WeightLossPredictor />
                </div>
                
                <div id="dosage">
                  <DosageGuide />
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get personalized care, affordable pricing, and ongoing support with Trimi
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/treatments" 
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    View Treatment Options
                  </a>
                  <a 
                    href="/how-it-works" 
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
                  >
                    How It Works
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Calculators;
