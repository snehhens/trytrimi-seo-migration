import { Helmet } from "@/compat/react-helmet-async";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo/site";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  priceRange?: string;
}

export const LocalBusinessSchema = ({
  name = SITE_NAME,
  description = "Online prescription weight loss treatment with Tirzepatide and Semaglutide. Personalized medical care.",
  telephone = "+1-855-TRIMI-01",
  priceRange = "$$"
}: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": name,
    "url": SITE_URL,
    "logo": DEFAULT_OG_IMAGE,
    "image": DEFAULT_OG_IMAGE,
    "description": description,
    "telephone": telephone,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Nationwide"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.0902",
      "longitude": "-95.7129"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Weight Loss Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Semaglutide Weight Loss Treatment",
            "description": "GLP-1 prescription medication for weight management"
          },
          "price": "189",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://trytrimi.com/treatments/semaglutide"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Tirzepatide Weight Loss Treatment",
            "description": "Dual GIP/GLP-1 prescription medication for weight management"
          },
          "price": "269",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://trytrimi.com/treatments/tirzepatide"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "medicalSpecialty": [
      "Weight Loss Medicine",
      "Endocrinology",
      "Primary Care"
    ],
    "paymentAccepted": "Credit Card, Debit Card, HSA, FSA",
    "currenciesAccepted": "USD"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
