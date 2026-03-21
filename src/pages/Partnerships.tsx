import { Helmet } from "@/compat/react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Handshake, Users, FileText, TrendingUp, Mail, Building } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Partnerships = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to backend
    console.log('Partnership inquiry:', formData);
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", organization: "", type: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Partnerships & Collaborations | Trimi Health</title>
        <meta 
          name="description" 
          content="Partner with Trimi Health. Opportunities for healthcare providers, medical organizations, content creators, and health organizations." 
        />
        <link rel="canonical" href="https://trytrimi.com/partnerships" />
        <meta property="og:title" content="Partner with Trimi Health" />
        <meta property="og:description" content="Collaboration opportunities with a leading weight loss telehealth platform" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Partner with Trimi
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us in making evidence-based weight loss accessible to everyone
            </p>
          </div>

          {/* Partnership Types */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <Building className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Healthcare Providers</h3>
              <p className="text-muted-foreground mb-4">
                Collaborate with licensed physicians and nurse practitioners to expand weight loss care.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Referral partnerships</li>
                <li>• Co-branded programs</li>
                <li>• Telehealth integration</li>
              </ul>
            </Card>

            <Card className="p-6">
              <FileText className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Content Creators</h3>
              <p className="text-muted-foreground mb-4">
                Share accurate, evidence-based weight loss information with your audience.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Guest posting opportunities</li>
                <li>• Medical review services</li>
                <li>• Educational resources</li>
              </ul>
            </Card>

            <Card className="p-6">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Health Organizations</h3>
              <p className="text-muted-foreground mb-4">
                Partner to provide comprehensive weight management solutions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Corporate wellness programs</li>
                <li>• Research collaborations</li>
                <li>• Community health initiatives</li>
              </ul>
            </Card>

            <Card className="p-6">
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Affiliates & Influencers</h3>
              <p className="text-muted-foreground mb-4">
                Earn while helping your community achieve their health goals.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Competitive commission structure</li>
                <li>• Marketing support</li>
                <li>• Dedicated partner portal</li>
              </ul>
            </Card>
          </div>

          {/* Benefits Section */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Handshake className="h-6 w-6 text-primary" />
              Why Partner with Trimi?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Evidence-Based Care</h3>
                <p className="text-sm text-muted-foreground">
                  Clinically proven medications with proven results
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Licensed Providers</h3>
                <p className="text-sm text-muted-foreground">
                  Board-certified physicians and nurse practitioners
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Comprehensive Support</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing patient care and medical supervision
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Trusted Platform</h3>
                <p className="text-sm text-muted-foreground">
                  10,000+ patients served with 4.8/5 rating
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    placeholder="Your company or organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Partnership Type *
                  </label>
                  <Input
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    placeholder="e.g., Healthcare Provider, Content Creator"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your partnership idea *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe how you'd like to collaborate with Trimi..."
                  className="min-h-32"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Partnership Inquiry
              </Button>
            </form>
          </Card>

          {/* Additional Resources */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Looking for something else?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="/about">About Trimi</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">General Contact</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/blog">Medical Resources</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
