import { useParams } from "@/compat/react-router-dom";
import { Helmet } from "@/compat/react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Phone, Clock, CheckCircle } from "lucide-react";

const stateData: Record<string, any> = {
  california: {
    name: "California",
    abbreviation: "CA",
    telehealth: "Full telemedicine services available",
    insurance: "Insurance coverage varies by plan",
    regulations: "Compounded medications available with prescription",
    cities: ["Los Angeles", "San Francisco", "San Diego", "San Jose"]
  },
  texas: {
    name: "Texas",
    abbreviation: "TX",
    telehealth: "Telemedicine weight loss services permitted",
    insurance: "Various insurance plans accepted",
    regulations: "Licensed providers required for prescriptions",
    cities: ["Houston", "Dallas", "Austin", "San Antonio"]
  },
  florida: {
    name: "Florida",
    abbreviation: "FL",
    telehealth: "Telehealth consultations available",
    insurance: "Multiple insurance options",
    regulations: "State-licensed compounding pharmacies",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville"]
  },
  newyork: {
    name: "New York",
    abbreviation: "NY",
    telehealth: "Remote consultations permitted",
    insurance: "Insurance coverage available",
    regulations: "Strict quality control standards",
    cities: ["New York City", "Buffalo", "Rochester", "Albany"]
  }
};

const StateGuide = () => {
  const { state } = useParams();
  const stateInfo = stateData[state?.toLowerCase() || ""];

  if (!stateInfo) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">State Not Found</h1>
            <p className="text-muted-foreground mb-6">
              We're expanding to your state soon. Contact us for updates.
            </p>
            <Button asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Semaglutide & Tirzepatide in ${stateInfo.name} | Complete Guide`}</title>
        <meta 
          name="description" 
          content={`Get GLP-1 weight loss medications in ${stateInfo.name}. Telehealth consultations, affordable pricing, and licensed providers. Learn about regulations, insurance, and how to get started.`}
        />
        <link rel="canonical" href={`https://trytrimi.com/state/${state}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Weight Loss Medications in {stateInfo.name}
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground">
                  Access semaglutide and tirzepatide through licensed {stateInfo.abbreviation} providers
                </p>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-12 border-b">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">$299-399</p>
                  <p className="text-sm text-muted-foreground">Per Month</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">24-48 Hours</p>
                  <p className="text-sm text-muted-foreground">To Approval</p>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">100% Online</p>
                  <p className="text-sm text-muted-foreground">Telemedicine</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">Licensed</p>
                  <p className="text-sm text-muted-foreground">{stateInfo.abbreviation} Providers</p>
                </div>
              </div>
            </div>
          </section>

          {/* State Information */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Telemedicine Regulations in {stateInfo.name}</h2>
                  <p className="text-muted-foreground mb-4">{stateInfo.telehealth}</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Online consultations with licensed {stateInfo.abbreviation} providers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Prescriptions sent directly to your preferred pharmacy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Home delivery available throughout {stateInfo.name}</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Insurance & Pricing</h2>
                  <p className="text-muted-foreground mb-4">{stateInfo.insurance}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Semaglutide</h3>
                      <p className="text-3xl font-bold text-primary">$299/mo</p>
                      <p className="text-sm text-muted-foreground">Compounded</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Tirzepatide</h3>
                      <p className="text-3xl font-bold text-primary">$399/mo</p>
                      <p className="text-sm text-muted-foreground">Compounded</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Compounding Pharmacy Regulations</h2>
                  <p className="text-muted-foreground mb-4">{stateInfo.regulations}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>503B licensed compounding facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>FDA-registered ingredients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Quality tested and verified</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Major Cities We Serve in {stateInfo.name}</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {stateInfo.cities.map((city: string) => (
                      <div key={city} className="flex items-center gap-2 p-3 border rounded-lg">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{city}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started in {stateInfo.name}?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Complete a free online consultation with a licensed {stateInfo.abbreviation} provider today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://app.trytrimi.com/start-online-visit/weight-loss-memberships">
                      Start Free Consultation
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/how-it-works">Learn How It Works</a>
                  </Button>
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

export default StateGuide;
