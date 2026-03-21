import { Helmet } from "@/compat/react-helmet-async";

interface CourseSchemaProps {
  name: string;
  description: string;
  provider: string;
  url: string;
}

export const CourseSchema = ({ name, description, provider, url }: CourseSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "sameAs": "https://trytrimi.com"
    },
    "url": url,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT4W"
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
