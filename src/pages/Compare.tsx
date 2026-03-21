import { SEOHead } from "@/components/seo/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ItemListSchema } from "@/components/seo/ItemListSchema";

const Compare = () => {
  const [selectedPriority, setSelectedPriority] = useState<string>("");

  const medicationComparison = [
    {
      feature: "Active Ingredient",
      values: ["Semaglutide", "Tirzepatide"]
    },
    {
      feature: "FDA Approved",
      values: [true, true]
    },
    {
      feature: "Weight Loss (Clinical Trials)",
      values: ["~15%", "~20%"]
    },
    {
      feature: "Dosing Frequency",
      values: ["Once weekly", "Once weekly"]
    },
    {
      feature: "Time to Max Dose",
      values: ["16-20 weeks", "20-24 weeks"]
    },
    {
      feature: "Starting Price (Compounded)",
      values: ["$299/month", "$399/month"]
    },
    {
      feature: "Brand Name Equivalent",
      values: ["Ozempic/Wegovy", "Mounjaro/Zepbound"]
    },
    {
      feature: "Dual Hormone Action",
      values: [false, true]
    }
  ];

  const providerComparison = [
    {
      feature: "Monthly Cost",
      values: ["$299-399", "$1,100+", "$25-50*"]
    },
    {
      feature: "Doctor Consultation",
      values: [true, true, true]
    },
    {
      feature: "Home Delivery",
      values: [true, false, false]
    },
    {
      feature: "Ongoing Support",
      values: [true, false, true]
    },
    {
      feature: "Insurance Required",
      values: [false, false, true]
    },
    {
      feature: "Same-Day Approval",
      values: [true, false, false]
    },
    {
      feature: "No Insurance Hassles",
      values: [true, true, false]
    }
  ];

  const decisionFlowchart = [
    {
      question: "What's your primary goal?",
      options: [
        { label: "Maximum weight loss", priority: "effectiveness" },
        { label: "Affordable pricing", priority: "cost" },
        { label: "Fast results", priority: "speed" },
        { label: "Minimal side effects", priority: "tolerance" }
      ]
    }
  ];

  const getRecommendation = () => {
    if (!selectedPriority) return null;

    const recommendations: Record<string, any> = {
      effectiveness: {
        title: "Tirzepatide is your best match",
        description: "Clinical trials show ~20% weight loss with tirzepatide vs ~15% with semaglutide",
        medication: "tirzepatide",
        price: "$399/month"
      },
      cost: {
        title: "Compounded Semaglutide is your best match",
        description: "Most affordable option at $299/month with proven results",
        medication: "semaglutide",
        price: "$299/month"
      },
      speed: {
        title: "Both medications work similarly",
        description: "Results typically visible within 4-8 weeks. Tirzepatide may show slightly faster results.",
        medication: "tirzepatide",
        price: "$399/month"
      },
      tolerance: {
        title: "Start with Semaglutide",
        description: "Lower starting dose allows for better tolerance while your body adjusts",
        medication: "semaglutide",
        price: "$299/month"
      }
    };

    return recommendations[selectedPriority];
  };

  const recommendation = getRecommendation();

  return (
    <>
      <SEOHead
        title="Compare GLP-1 Medications | Semaglutide vs Tirzepatide"
        description="Compare semaglutide vs tirzepatide side-by-side. See effectiveness, cost, side effects, and which GLP-1 medication is right for you."
        canonical="https://trytrimi.com/compare"
        keywords="semaglutide vs tirzepatide, GLP-1 comparison, weight loss medication comparison, which is better"
      />
      
      <ItemListSchema 
        name="GLP-1 Weight Loss Medications Comparison"
        description="Compare leading weight loss medications including semaglutide and tirzepatide"
        items={[
          {
            name: "Semaglutide (Compounded)",
            url: "/treatments/semaglutide",
            description: "GLP-1 medication with 15% average weight loss, $299/month"
          },
          {
            name: "Tirzepatide (Compounded)",
            url: "/treatments/tirzepatide",
            description: "Dual GIP/GLP-1 medication with 22% average weight loss, $399/month"
          },
          {
            name: "Wegovy (Brand Semaglutide)",
            description: "FDA-approved brand semaglutide for weight loss, $1,300+/month"
          },
          {
            name: "Mounjaro (Brand Tirzepatide)",
            description: "FDA-approved brand tirzepatide for diabetes, $1,000+/month"
          }
        ]}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Compare GLP-1 Weight Loss Medications
                </h1>
                <p className="text-xl text-muted-foreground">
                  Make an informed decision with comprehensive side-by-side comparisons
                </p>
              </div>
            </div>
          </section>

          {/* Tabs for Different Comparisons */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="medications" className="max-w-6xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="medications">Medications</TabsTrigger>
                  <TabsTrigger value="providers">Providers</TabsTrigger>
                  <TabsTrigger value="decision">Decision Tool</TabsTrigger>
                </TabsList>
                
                {/* Medication Comparison */}
                <TabsContent value="medications" className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Semaglutide vs Tirzepatide</h2>
                    <p className="text-lg text-muted-foreground">
                      Both are highly effective GLP-1 medications for weight loss
                    </p>
                  </div>
                  
                  <ComparisonTable
                    title="Medication Comparison"
                    columns={["Semaglutide", "Tirzepatide"]}
                    items={medicationComparison}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <Card className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Best for Semaglutide</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Lower starting price ($299/month)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Proven track record (longer market history)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Great for first-time GLP-1 users</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Effective 15% average weight loss</span>
                        </li>
                      </ul>
                      <Button className="w-full mt-6" asChild>
                        <a href="/treatments/semaglutide">Learn More About Semaglutide</a>
                      </Button>
                    </Card>
                    
                    <Card className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Best for Tirzepatide</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Maximum weight loss (~20% average)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Dual hormone action (GIP + GLP-1)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Better blood sugar control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Ideal for those seeking maximum results</span>
                        </li>
                      </ul>
                      <Button className="w-full mt-6" asChild>
                        <a href="/treatments/tirzepatide">Learn More About Tirzepatide</a>
                      </Button>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* Provider Comparison */}
                <TabsContent value="providers" className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">How to Get GLP-1 Medications</h2>
                    <p className="text-lg text-muted-foreground">
                      Compare your options for accessing weight loss medications
                    </p>
                  </div>
                  
                  <ComparisonTable
                    title="Provider Comparison"
                    columns={["Trimi (Compounded)", "Brand Name Pharmacy", "Traditional + Insurance"]}
                    items={providerComparison}
                  />
                  
                  <Card className="p-6 bg-primary/5 border-primary">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                        #1
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-2">Why Trimi?</h3>
                        <p className="text-muted-foreground mb-4">
                          We combine the affordability of compounded medications with the convenience of 
                          telehealth and the support of licensed healthcare providers.
                        </p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            <span>Save up to 70% vs brand name</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            <span>No insurance required</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            <span>Delivered to your door</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            <span>Ongoing medical support</span>
                          </li>
                        </ul>
                        <Button size="lg" asChild>
                          <a href="https://app.trytrimi.com/start-online-visit/weight-loss-memberships">
                            Get Started with Trimi
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    *Insurance coverage and copays vary widely by plan. Contact your insurance provider for specific pricing.
                  </p>
                </TabsContent>
                
                {/* Decision Tool */}
                <TabsContent value="decision" className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Which Medication is Right for You?</h2>
                    <p className="text-lg text-muted-foreground">
                      Answer one simple question to get a personalized recommendation
                    </p>
                  </div>
                  
                  <Card className="p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-semibold mb-6">What's your primary goal?</h3>
                    <div className="space-y-3">
                      {decisionFlowchart[0].options.map((option) => (
                        <button
                          key={option.priority}
                          onClick={() => setSelectedPriority(option.priority)}
                          className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                            selectedPriority === option.priority
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option.label}</span>
                            {selectedPriority === option.priority && (
                              <Check className="w-5 h-5 text-primary" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {recommendation && (
                      <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                        <h4 className="text-xl font-bold text-green-900 mb-2">
                          {recommendation.title}
                        </h4>
                        <p className="text-green-800 mb-4">{recommendation.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-green-700">Starting at</span>
                          <span className="text-2xl font-bold text-green-900">{recommendation.price}</span>
                        </div>
                        <Button className="w-full" size="lg" asChild>
                          <a href={`/treatments/${recommendation.medication}`}>
                            Get Started with {recommendation.medication.charAt(0).toUpperCase() + recommendation.medication.slice(1)}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </Card>
                  
                  <div className="max-w-2xl mx-auto">
                    <Card className="p-6 bg-blue-50 border-blue-200">
                      <h4 className="font-semibold mb-2 text-blue-900">Not sure? We can help.</h4>
                      <p className="text-sm text-blue-800 mb-4">
                        Schedule a free consultation with our medical team to discuss which medication 
                        is best for your specific situation, health history, and weight loss goals.
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="/contact">Schedule Free Consultation</a>
                      </Button>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Compare;
