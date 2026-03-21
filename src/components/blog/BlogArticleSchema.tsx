import { Helmet } from "@/compat/react-helmet-async";

interface BlogArticleSchemaProps {
  title: string;
  description: string;
  date: string;
  modifiedDate?: string;
  image: string;
  url: string;
  category: string;
  readTime: string;
}

export const BlogArticleSchema = ({
  title,
  description,
  date,
  modifiedDate,
  image,
  url,
  category,
  readTime
}: BlogArticleSchemaProps) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `https://trytrimi.com${image}`,
    "datePublished": date,
    "dateModified": modifiedDate || date,
    "author": {
      "@type": "Organization",
      "name": "Trimi",
      "url": "https://trytrimi.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trimi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trytrimi.com/trimi-logo-new.png"
      },
      "url": "https://trytrimi.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://trytrimi.com${url}`
    },
    "articleSection": category,
    "timeRequired": readTime,
    "inLanguage": "en-US"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
    </Helmet>
  );
};
