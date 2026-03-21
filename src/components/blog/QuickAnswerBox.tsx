import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface QuickAnswerBoxProps {
  question: string;
  answer: string;
  highlights?: string[];
  className?: string;
}

export const QuickAnswerBox = ({ 
  question, 
  answer, 
  highlights,
  className = "" 
}: QuickAnswerBoxProps) => {
  return (
    <Card className={`p-6 bg-primary/5 border-primary/20 ${className}`}>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            {question}
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {answer}
          </p>
        </div>
        
        {highlights && highlights.length > 0 && (
          <div className="space-y-2 pt-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
