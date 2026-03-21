import { useLocation, Link } from "@/compat/react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/utils/internalLinking";

export const SmartBreadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  // Don't show on homepage
  if (location.pathname === '/') return null;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.url} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-foreground">
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                  {crumb.name}
                </span>
              ) : (
                <Link 
                  to={crumb.url} 
                  className="hover:text-primary transition-colors"
                >
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
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
