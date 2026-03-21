import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

interface ProsConsListProps {
  pros: string[];
  cons: string[];
  title?: string;
  className?: string;
}

export const ProConsList = ({ 
  pros, 
  cons, 
  title = "Pros & Cons",
  className = "" 
}: ProsConsListProps) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      {title && (
        <div className="p-6 bg-primary/5">
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        </div>
      )}
      <div className="grid md:grid-cols-2 divide-x divide-border">
        <div className="p-6 space-y-4">
          <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Pros
          </h4>
          <ul className="space-y-3">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-6 space-y-4">
          <h4 className="text-lg font-semibold text-red-600 flex items-center gap-2">
            <XCircle className="w-5 h-5" />
            Cons
          </h4>
          <ul className="space-y-3">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
