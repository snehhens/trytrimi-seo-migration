import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Citation {
  authors: string[];
  title: string;
  publication: string;
  year: string;
  url?: string;
  doi?: string;
}

interface CitationListProps {
  citations: Citation[];
  className?: string;
}

export const CitationList = ({ citations, className = "" }: CitationListProps) => {
  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-2xl font-semibold text-foreground mb-4">Scientific References</h3>
      <ol className="space-y-4 list-decimal list-inside">
        {citations.map((citation, index) => (
          <li key={index} className="text-sm text-foreground/80">
            <span className="font-medium">
              {citation.authors.join(", ")}
            </span>
            {" "}({citation.year}). <span className="italic">{citation.title}</span>. {citation.publication}.
            {citation.url && (
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 ml-2 text-primary hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                Read Study
              </a>
            )}
            {citation.doi && (
              <span className="block mt-1 text-xs text-foreground/60">
                DOI: {citation.doi}
              </span>
            )}
          </li>
        ))}
      </ol>
    </Card>
  );
};
