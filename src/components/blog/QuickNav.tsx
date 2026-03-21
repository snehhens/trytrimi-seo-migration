import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface QuickNavItem {
  title: string;
  items: string[];
}

interface QuickNavProps {
  sections: QuickNavItem[];
}

export const QuickNav = ({ sections }: QuickNavProps) => {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardContent className="pt-6">
        <h3 className="text-lg font-bold mb-4">What You'll Learn</h3>
        <div className="space-y-4">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-sm mb-2">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Button className="w-full mt-6" asChild>
          <a href="#content">
            Start Reading <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
