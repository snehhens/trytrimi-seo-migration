import { Helmet } from "@/compat/react-helmet-async";
import {
  getBaseEntityGraph,
  MEDICAL_BUSINESS_ID,
  ORGANIZATION_ID,
  TREATMENT_ENTITIES,
  WEBSITE_ID,
} from "@/lib/seo/entities";
import { DEFAULT_OG_IMAGE, toAbsoluteUrl } from "@/lib/seo/site";

type EntityId =
  | typeof TREATMENT_ENTITIES.semaglutide.id
  | typeof TREATMENT_ENTITIES.tirzepatide.id;

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface EntityGraphSchemaProps {
  title: string;
  description: string;
  url: string;
  pageType?: "WebPage" | "CollectionPage" | "MedicalWebPage";
  aboutEntityIds?: EntityId[];
  breadcrumbItems?: BreadcrumbItem[];
  image?: string;
}

export const EntityGraphSchema = ({
  title,
  description,
  url,
  pageType = "WebPage",
  aboutEntityIds = [],
  breadcrumbItems = [],
  image = DEFAULT_OG_IMAGE,
}: EntityGraphSchemaProps) => {
  const fullUrl = toAbsoluteUrl(url);
  const pageId = `${fullUrl}#webpage`;
  const breadcrumbId = `${fullUrl}#breadcrumb`;

  const graph = [
    ...getBaseEntityGraph(),
    {
      "@type": pageType,
      "@id": pageId,
      url: fullUrl,
      name: title,
      description,
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      about: aboutEntityIds.map((entityId) => ({ "@id": entityId })),
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      provider: {
        "@id": MEDICAL_BUSINESS_ID,
      },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: toAbsoluteUrl(image),
      },
      breadcrumb: breadcrumbItems.length
        ? {
            "@id": breadcrumbId,
          }
        : undefined,
    },
    ...(breadcrumbItems.length
      ? [
          {
            "@type": "BreadcrumbList",
            "@id": breadcrumbId,
            itemListElement: breadcrumbItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: toAbsoluteUrl(item.url),
            })),
          },
        ]
      : []),
  ];

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        })}
      </script>
    </Helmet>
  );
};
