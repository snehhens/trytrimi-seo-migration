import { Users, Shield, Truck, FlaskConical, MessageCircle, Sparkles, Clock, MapPin, CreditCard } from "lucide-react";
import { useEffect, useState } from "react";

export const FeaturesBanner = () => {
  const [patientCount, setPatientCount] = useState(14945);

  useEffect(() => {
    const baseDate = new Date('2026-03-11T00:00:00Z');
    const baseCount = 14945;
    const calculateCount = () => {
      const now = new Date();
      const hoursDiff = (now.getTime() - baseDate.getTime()) / (1000 * 60 * 60);
      return baseCount + Math.max(0, Math.floor(hoursDiff) * 5);
    };
    setPatientCount(calculateCount());
    const interval = setInterval(() => setPatientCount(calculateCount()), 2 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: CreditCard, text: "FSA & HSA eligible" },
    { icon: FlaskConical, text: "FDA-registered labs" },
    { icon: MessageCircle, text: "24/7 provider messaging" },
    { icon: Sparkles, text: "Customized to your needs" },
    { icon: Clock, text: "Same day doctor visits & prescriptions" },
    { icon: MapPin, text: "Compounded in the USA" },
    { icon: Users, text: `${patientCount.toLocaleString()}+ patients` },
  ];

  return (
    <div className="bg-secondary/10 border-y border-secondary/20 py-4 overflow-hidden relative">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {/* First set of features */}
        <div className="flex items-center gap-12 px-6 flex-shrink-0">
          {features.map((feature, index) => (
            <div key={`first-${index}`} className="flex items-center gap-2 text-foreground whitespace-nowrap">
              <feature.icon className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-12 px-6 flex-shrink-0">
          {features.map((feature, index) => (
            <div key={`second-${index}`} className="flex items-center gap-2 text-foreground whitespace-nowrap">
              <feature.icon className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
        {/* Third set for extra smooth loop */}
        <div className="flex items-center gap-12 px-6 flex-shrink-0">
          {features.map((feature, index) => (
            <div key={`third-${index}`} className="flex items-center gap-2 text-foreground whitespace-nowrap">
              <feature.icon className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
