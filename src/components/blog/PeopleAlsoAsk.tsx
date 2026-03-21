import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

interface Question {
  question: string;
  answer: string;
}

interface PeopleAlsoAskProps {
  questions: Question[];
  className?: string;
}

export const PeopleAlsoAsk = ({ questions, className = "" }: PeopleAlsoAskProps) => {
  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-semibold text-foreground">People Also Ask</h3>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};
