import { Quote } from "lucide-react";

interface ExpertQuoteProps {
  quote: string;
  expertName: string;
  credentials: string;
  institution?: string;
}

/**
 * ExpertQuote - Adds E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) 
 * signals to blog content through expert citations
 */
export const ExpertQuote = ({ quote, expertName, credentials, institution }: ExpertQuoteProps) => {
  return (
    <blockquote className="relative border-l-4 border-primary bg-primary/5 rounded-r-xl p-6 my-8 not-prose">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
      <p className="text-foreground/90 text-lg italic leading-relaxed mb-4 pr-8">
        "{quote}"
      </p>
      <footer className="flex flex-col">
        <cite className="not-italic font-semibold text-foreground">{expertName}</cite>
        <span className="text-sm text-muted-foreground">{credentials}</span>
        {institution && (
          <span className="text-sm text-muted-foreground/80">{institution}</span>
        )}
      </footer>
    </blockquote>
  );
};
