import { Helmet } from "@/compat/react-helmet-async";

interface ListItem {
  name: string;
  url?: string;
  description?: string;
  image?: string;
}

interface ItemListSchemaProps {
  name: string;
  description?: string;
  items: ListItem[];
}

export const ItemListSchema = ({ name, description, items }: ItemListSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    ...(description && { "description": description }),
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "url": `https://trytrimi.com${item.url}` }),
      ...(item.description && { "description": item.description }),
      ...(item.image && { "image": item.image })
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
