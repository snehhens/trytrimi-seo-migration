import { ExternalLink, FileText } from "lucide-react";

interface NIHCitationProps {
  title: string;
  source: string;
  url: string;
  year?: string;
  authors?: string;
}

/**
 * NIHCitation - Links to NIH/PubMed studies for E-E-A-T authority signals
 * Improves credibility and provides shareable research references
 */
export const NIHCitation = ({ title, source, url, year, authors }: NIHCitationProps) => {
  return (
    <div className="flex items-start gap-3 p-4 border border-primary/20 bg-primary/5 rounded-lg my-4 not-prose hover:border-primary/40 transition-colors group">
      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors group-hover:underline"
        >
          {title}
        </a>
        <div className="text-sm text-muted-foreground mt-1">
          {authors && <span className="block">{authors}</span>}
          <span>{source}{year ? ` (${year})` : ''}</span>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
    </div>
  );
};

/**
 * CitationList - Groups multiple citations in a references section
 */
interface Citation {
  title: string;
  source: string;
  url: string;
  year?: string;
  authors?: string;
}

interface CitationListProps {
  citations: Citation[];
  title?: string;
}

export const CitationList = ({ citations, title = "Research References" }: CitationListProps) => {
  return (
    <div className="my-8 not-prose">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <FileText className="h-5 w-5 text-primary" />
        {title}
      </h3>
      <div className="space-y-3">
        {citations.map((citation, index) => (
          <NIHCitation key={index} {...citation} />
        ))}
      </div>
    </div>
  );
};
