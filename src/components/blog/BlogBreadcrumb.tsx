import { Link } from "@/compat/react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "@/compat/react-helmet-async";
import { generateBreadcrumbs } from "@/utils/internalLinking";

interface BlogBreadcrumbProps {
  category: string;
  title: string;
  url: string;
}

export const BlogBreadcrumb = ({ category, title, url }: BlogBreadcrumbProps) => {
  // Generate breadcrumbs with hub page hierarchy
  const breadcrumbs = generateBreadcrumbs(url);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://trytrimi.com${item.url}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.url} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-4 w-4" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {index === 0 && <Home className="h-4 w-4 inline mr-1" />}
                  {crumb.name}
                </span>
              ) : (
                <Link 
                  to={crumb.url}
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="h-4 w-4" />}
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
