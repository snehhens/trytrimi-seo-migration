import { Helmet } from "@/compat/react-helmet-async";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/entities";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo/site";

/**
 * SiteLinksSearchBoxSchema - Helps Google show a search box in sitelinks
 * Should only be placed on the homepage
 */
export const SiteLinksSearchBoxSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "url": SITE_URL,
    "name": SITE_NAME,
    "description": SITE_DESCRIPTION,
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/blog?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "inLanguage": "en-US"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
