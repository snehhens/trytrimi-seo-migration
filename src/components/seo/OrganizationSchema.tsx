import { Helmet } from "@/compat/react-helmet-async";
import { ORGANIZATION_ID } from "@/lib/seo/entities";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo/site";

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": ORGANIZATION_ID,
    "name": SITE_NAME,
    "alternateName": "Trimi",
    "url": SITE_URL,
    "logo": DEFAULT_OG_IMAGE,
    "image": DEFAULT_OG_IMAGE,
    "description": SITE_DESCRIPTION,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://trytrimi.com/contact"
    },
    "sameAs": [
      "https://www.facebook.com/trytrimi",
      "https://twitter.com/trytrimi",
      "https://www.instagram.com/trytrimi"
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
