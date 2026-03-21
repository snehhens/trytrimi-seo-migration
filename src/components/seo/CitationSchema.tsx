import { Helmet } from "@/compat/react-helmet-async";

interface Citation {
  "@type": "ScholarlyArticle" | "MedicalScholarlyArticle";
  headline: string;
  author?: string[];
  datePublished?: string;
  url?: string;
  publisher?: {
    name: string;
  };
}

interface CitationSchemaProps {
  citations: Citation[];
}

export const CitationSchema = ({ citations }: CitationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "citation": citations
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
