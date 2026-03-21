import { Helmet } from "@/compat/react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQSchemaProps {
  faqs: FAQItem[];
}

export const BlogFAQSchema = ({ faqs }: BlogFAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
