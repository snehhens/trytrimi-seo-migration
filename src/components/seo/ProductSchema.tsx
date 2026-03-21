import { Helmet } from "@/compat/react-helmet-async";
import { DEFAULT_OG_IMAGE, SITE_NAME, toAbsoluteUrl } from "@/lib/seo/site";

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: string;
  url: string;
  ratingValue?: string;
  reviewCount?: string;
}

export const ProductSchema = ({
  name,
  description,
  image,
  price,
  url,
  ratingValue = "4.8",
  reviewCount = "500"
}: ProductSchemaProps) => {
  const fullImage = image ? toAbsoluteUrl(image) : DEFAULT_OG_IMAGE;
  const fullUrl = toAbsoluteUrl(url);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": fullImage,
    "url": fullUrl,
    "brand": {
      "@type": "Brand",
      "name": SITE_NAME
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": fullUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
