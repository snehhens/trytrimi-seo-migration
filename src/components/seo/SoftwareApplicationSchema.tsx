import { Helmet } from "@/compat/react-helmet-async";

interface SoftwareApplicationSchemaProps {
  name?: string;
  description?: string;
  operatingSystem?: string;
  applicationCategory?: string;
}

/**
 * SoftwareApplicationSchema - For the online platform/app
 */
export const SoftwareApplicationSchema = ({
  name = "Trimi Health",
  description = "Online telemedicine platform for prescription weight loss treatments",
  operatingSystem = "Web",
  applicationCategory = "HealthApplication"
}: SoftwareApplicationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": "https://trytrimi.com",
    "operatingSystem": operatingSystem,
    "applicationCategory": applicationCategory,
    "offers": {
      "@type": "Offer",
      "price": "145",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Prescription weight loss medications",
      "24/7 provider access",
      "Free medication shipping",
      "Progress tracking"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
