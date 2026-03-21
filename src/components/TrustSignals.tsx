import { Star, Users, Shield, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TrustSignals = () => {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-2xl font-bold">4.9/5</p>
            <p className="text-sm text-muted-foreground">2,800+ Reviews</p>
          </div>
          
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">12,000+</p>
            <p className="text-sm text-muted-foreground">Active Patients</p>
          </div>
          
          <div className="text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">Licensed</p>
            <p className="text-sm text-muted-foreground">Medical Providers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DetailedTrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your medical information is secure and private"
    },
    {
      icon: Award,
      title: "503B Licensed Pharmacy",
      description: "FDA-registered and inspected compounding facilities"
    },
    {
      icon: Users,
      title: "Board-Certified Providers",
      description: "Licensed medical professionals in all 50 states"
    },
    {
      icon: Star,
      title: "Trusted by Thousands",
      description: "Join 12,000+ satisfied patients"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge) => (
        <Card key={badge.title} className="p-6 text-center">
          <badge.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="font-semibold mb-2">{badge.title}</h3>
          <p className="text-sm text-muted-foreground">{badge.description}</p>
        </Card>
      ))}
    </div>
  );
};

export const LiveActivityIndicator = () => {
  const activities = [
    "Sarah from New York just started treatment",
    "Michael from California received his shipment",
    "Jessica from Texas completed her consultation",
    "David from Florida just got approved",
    "Emily from Illinois started her journey"
  ];

  const randomActivity = activities[Math.floor(Math.random() * activities.length)];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm hidden lg:block">
      <Card className="p-4 shadow-lg border-primary/20 animate-in slide-in-from-left">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <p className="text-sm">{randomActivity}</p>
        </div>
      </Card>
    </div>
  );
};
