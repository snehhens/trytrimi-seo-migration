import { Helmet } from "@/compat/react-helmet-async";
import { DEFAULT_OG_IMAGE, formatSeoTitle, toAbsoluteUrl } from "@/lib/seo/site";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
  ogType?: string;
  keywords?: string;
  children?: React.ReactNode;
}

/**
 * SEOHead - A reusable component for page-level SEO meta tags
 * 
 * This component should be used on every page to set:
 * - Title tag
 * - Meta description
 * - Canonical URL
 * - Open Graph tags
 * - Twitter Card tags
 * - Robots directives
 * 
 * @param title - Page title (should be unique, under 60 chars)
 * @param description - Meta description (under 160 chars)
 * @param canonical - Full canonical URL (e.g., "https://trytrimi.com/treatments")
 * @param ogImage - Open Graph image URL (optional, defaults to logo)
 * @param noIndex - Set to true for pages that should not be indexed
 * @param ogType - Open Graph type (optional, defaults to "website")
 * @param keywords - Meta keywords (optional)
 * @param children - Additional Helmet children for page-specific tags
 */
export const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  ogType = "website",
  keywords,
  children
}: SEOHeadProps) => {
  const fullCanonical = toAbsoluteUrl(canonical);
  const fullOgImage = toAbsoluteUrl(ogImage);
  const formattedTitle = formatSeoTitle(title);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:site_name" content="Trimi Health" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@trytrimi" />
      
      {/* Additional page-specific tags */}
      {children}
    </Helmet>
  );
};

export default SEOHead;
