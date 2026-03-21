import { Helmet } from "@/compat/react-helmet-async";
import { BlogArticleSchema } from "@/components/seo/BlogArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SpeakableSchema } from "@/components/seo/SpeakableSchema";
import { MedicalWebPageSchema } from "@/components/seo/MedicalWebPageSchema";
import { BlogFAQSchema } from "@/components/seo/BlogFAQSchema";
import { DEFAULT_OG_IMAGE, formatSeoTitle, toAbsoluteUrl } from "@/lib/seo/site";

interface BlogSEOProps {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
  authorName?: string;
  authorUrl?: string;
  imageUrl?: string;
  category?: string;
  keywords?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  isMedical?: boolean;
  medicalAudience?: string[];
}

export const BlogSEO = ({
  title,
  description,
  url,
  publishDate,
  modifiedDate,
  authorName = "Trimi Editorial Team",
  authorUrl = "https://trytrimi.com/about",
  imageUrl,
  category,
  keywords,
  breadcrumbs,
  faqs,
  isMedical = true,
  medicalAudience
}: BlogSEOProps) => {
  const fullUrl = toAbsoluteUrl(url);
  const ogImage = imageUrl ? toAbsoluteUrl(imageUrl) : DEFAULT_OG_IMAGE;
  const formattedTitle = formatSeoTitle(title);

  return (
    <>
      <Helmet>
        <title>{formattedTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords.join(", ")} />}
        
        {/* Self-referencing canonical */}
        <link rel="canonical" href={fullUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta property="article:published_time" content={publishDate} />
        {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
        {category && <meta property="article:section" content={category} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <BlogArticleSchema
        title={title}
        description={description}
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        authorName={authorName}
        authorUrl={authorUrl}
        imageUrl={imageUrl}
        url={fullUrl}
        category={category}
        keywords={keywords}
      />

      {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}

      <SpeakableSchema cssSelector={["h1", ".article-intro", "h2"]} />

      {isMedical && (
        <MedicalWebPageSchema
          title={title}
          description={description}
          url={url}
          datePublished={publishDate}
          dateModified={modifiedDate}
          medicalAudience={medicalAudience}
        />
      )}

      {faqs && faqs.length > 0 && <BlogFAQSchema faqs={faqs} />}
    </>
  );
};
