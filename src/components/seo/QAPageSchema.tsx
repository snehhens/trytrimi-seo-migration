import { Helmet } from "@/compat/react-helmet-async";

interface QAPair {
  question: string;
  answer: string;
}

interface QAPageSchemaProps {
  questions: QAPair[];
  mainEntityName?: string;
}

export const QAPageSchema = ({ questions, mainEntityName }: QAPageSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    ...(mainEntityName && { "name": mainEntityName }),
    "mainEntity": questions.map(qa => ({
      "@type": "Question",
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer
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
