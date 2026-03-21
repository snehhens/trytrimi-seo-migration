import { Helmet } from "@/compat/react-helmet-async";

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}

export const VideoSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration = "PT5M",
  contentUrl,
  embedUrl
}: VideoSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": duration,
    ...(contentUrl && { "contentUrl": contentUrl }),
    ...(embedUrl && { "embedUrl": embedUrl }),
    "publisher": {
      "@type": "Organization",
      "name": "Trimi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trytrimi.com/trimi-logo-new.png"
      }
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
