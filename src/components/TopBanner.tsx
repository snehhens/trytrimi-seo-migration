import { Headphones, Users, Globe, Shield, Truck } from "lucide-react";
import { useEffect, useState } from "react";

const TopBanner = () => {
  const [patientCount, setPatientCount] = useState(14945);

  useEffect(() => {
    const baseDate = new Date('2026-03-11T00:00:00Z');
    const baseCount = 14945;

    const calculateCount = () => {
      const now = new Date();
      const hoursDiff = (now.getTime() - baseDate.getTime()) / (1000 * 60 * 60);
      const increment = Math.floor(hoursDiff) * 5;
      return baseCount + Math.max(0, increment);
    };

    setPatientCount(calculateCount());
    const interval = setInterval(() => {
      setPatientCount(calculateCount());
    }, 2 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { icon: Headphones, text: "Unlimited 24/7 support" },
    { icon: Users, text: `${patientCount.toLocaleString()}+ patients` },
    { icon: Globe, text: "100% online" },
    { icon: Shield, text: "FDA regulated pharmacies" },
    { icon: Truck, text: "Free expedited delivery" },
  ];

  return (
    <div className="bg-muted/30 border-b border-border overflow-hidden py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-2 mx-8 text-muted-foreground">
            <item.icon className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">{item.text}</span>
            <span className="ml-8 text-border">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TopBanner };