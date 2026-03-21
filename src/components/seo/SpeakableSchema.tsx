import { Helmet } from "@/compat/react-helmet-async";

interface SpeakableSchemaProps {
  cssSelector?: string[];
  xPath?: string[];
}

export const SpeakableSchema = ({ cssSelector, xPath }: SpeakableSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      ...(cssSelector && { "cssSelector": cssSelector }),
      ...(xPath && { "xpath": xPath })
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
