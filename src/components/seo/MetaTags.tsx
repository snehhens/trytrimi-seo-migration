import { Helmet } from "@/compat/react-helmet-async";
import { DEFAULT_OG_IMAGE, formatSeoTitle, toAbsoluteUrl } from "@/lib/seo/site";

interface MetaTagsProps {
  title: string;
  description: string;
  url?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  keywords?: string;
}

export const MetaTags = ({
  title,
  description,
  url,
  ogImage,
  ogType = "article",
  twitterCard = "summary_large_image",
  noindex = false,
  keywords
}: MetaTagsProps) => {
  const fullUrl = url ? toAbsoluteUrl(url) : undefined;
  const fullOgImage = ogImage ? toAbsoluteUrl(ogImage) : DEFAULT_OG_IMAGE;
  const formattedTitle = formatSeoTitle(title);

  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Self-referencing canonical */}
      {fullUrl && <link rel="canonical" href={fullUrl} />}
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Trimi" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@trytrimi" />
    </Helmet>
  );
};
