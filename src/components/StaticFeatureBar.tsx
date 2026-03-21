import { Heart, CheckCircle, CreditCard, Truck } from "lucide-react";

export const StaticFeatureBar = () => {
  const features = [
    { icon: Heart, text: "Personalized support" },
    { icon: CheckCircle, text: "100% entirely online" },
    { icon: CreditCard, text: "FSA & HSA eligible" },
  ];

  return (
    <div className="bg-secondary/20 border-y border-secondary/30 py-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-foreground">
              <feature.icon className="h-5 w-5 text-foreground/70 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
