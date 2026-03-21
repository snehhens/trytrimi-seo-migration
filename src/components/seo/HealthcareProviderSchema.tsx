import { Helmet } from "@/compat/react-helmet-async";
import { BELUGA_ID, MEDICAL_BUSINESS_ID, TREATMENT_ENTITIES } from "@/lib/seo/entities";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo/site";

export const HealthcareProviderSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": MEDICAL_BUSINESS_ID,
    "name": SITE_NAME,
    "alternateName": "Trimi",
    "description": SITE_DESCRIPTION,
    "url": SITE_URL,
    "logo": DEFAULT_OG_IMAGE,
    "image": DEFAULT_OG_IMAGE,
    "telephone": "",
    "email": "support@trytrimi.com",
    "priceRange": "$145-$449",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Credit Card", "Debit Card", "HSA", "FSA"],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Weight Loss Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": TREATMENT_ENTITIES.semaglutide.id
          },
          "price": TREATMENT_ENTITIES.semaglutide.offerPrice,
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": TREATMENT_ENTITIES.tirzepatide.id
          },
          "price": TREATMENT_ENTITIES.tirzepatide.offerPrice,
          "priceCurrency": "USD"
        }
      ]
    },
    "medicalSpecialty": [
      "Weight Loss",
      "Obesity Medicine",
      "Telemedicine"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Online Medical Consultation",
        "procedureType": "Telemedicine"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Weight Loss Treatment Program",
        "procedureType": "Medical Weight Management"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/trytrimi",
      "https://twitter.com/trytrimi",
      "https://www.instagram.com/trytrimi"
    ],
    "provider": {
      "@id": BELUGA_ID
    },
    "isAcceptingNewPatients": true,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
      "description": "Online services available 24/7"
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
