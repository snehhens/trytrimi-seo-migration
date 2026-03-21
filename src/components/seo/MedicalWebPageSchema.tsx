import { Helmet } from "@/compat/react-helmet-async";
import { ORGANIZATION_ID } from "@/lib/seo/entities";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, toAbsoluteUrl } from "@/lib/seo/site";

interface MedicalWebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  medicalAudience?: string[];
}

export const MedicalWebPageSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  medicalAudience = ["Patient", "Physician"]
}: MedicalWebPageSchemaProps) => {
  const fullUrl = toAbsoluteUrl(url);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${fullUrl}#medicalwebpage`,
    "name": title,
    "description": description,
    "url": fullUrl,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@id": ORGANIZATION_ID
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": DEFAULT_OG_IMAGE
      }
    },
    "medicalAudience": medicalAudience.map(audience => ({
      "@type": "MedicalAudience",
      "audienceType": audience
    })),
    "lastReviewed": dateModified || datePublished,
    "reviewedBy": {
      "@type": "Organization",
      "name": "Trimi Medical Team"
    },
    "mainEntityOfPage": fullUrl,
    "isPartOf": SITE_URL
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
