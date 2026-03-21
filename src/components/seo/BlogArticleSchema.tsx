import { Helmet } from "@/compat/react-helmet-async";

interface BlogArticleSchemaProps {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  authorName: string;
  authorUrl?: string;
  imageUrl?: string;
  url: string;
  category?: string;
  keywords?: string[];
}

export const BlogArticleSchema = ({
  title,
  description,
  publishDate,
  modifiedDate,
  authorName,
  authorUrl,
  imageUrl,
  url,
  category,
  keywords
}: BlogArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl || "https://trytrimi.com/og-image.jpg",
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl || "https://trytrimi.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trimi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trytrimi.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(category && { "articleSection": category }),
    ...(keywords && { "keywords": keywords.join(", ") })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
