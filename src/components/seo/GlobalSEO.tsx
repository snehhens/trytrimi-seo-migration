import { Helmet } from "@/compat/react-helmet-async";
import { OrganizationSchema } from "./OrganizationSchema";
import { WebsiteSchema } from "./WebsiteSchema";
import { SITE_NAME } from "@/lib/seo/site";

interface GlobalSEOProps {
  includeSchemas?: boolean;
}

/**
 * GlobalSEO component adds site-wide SEO enhancements
 * Include on all pages for consistent SEO signals
 */
export const GlobalSEO = ({ includeSchemas = true }: GlobalSEOProps) => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <>
      <Helmet>
        <meta name="msvalidate.01" content="268167ADA20F70ACEC8F30048D7381E2" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="author" content={SITE_NAME} />
        <meta name="publisher" content={SITE_NAME} />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content={`© ${currentYear} ${SITE_NAME}. All rights reserved.`} />
      </Helmet>

      {includeSchemas && (
        <>
          <OrganizationSchema />
          <WebsiteSchema />
        </>
      )}
    </>
  );
};
