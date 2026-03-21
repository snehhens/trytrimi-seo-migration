import { Link } from "@/compat/react-router-dom";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface PopularPost {
  title: string;
  slug?: string;
  path?: string;
  category?: string;
}

interface PeopleAlsoReadProps {
  posts?: PopularPost[];
  links?: Array<{ title: string; path: string }>;
}

export const PeopleAlsoRead = ({ posts, links }: PeopleAlsoReadProps) => {
  // Support both 'posts' and 'links' prop formats
  const displayItems = posts || links?.map(link => ({
    title: link.title,
    slug: link.path.replace('/blog/', ''),
    path: link.path
  })) || [];
  
  if (displayItems.length === 0) return null;

  return (
    <Card className="p-6 my-8 bg-secondary/5">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">People Also Read</h3>
      </div>
      <ul className="space-y-3">
        {displayItems.map((post) => (
          <li key={post.slug || post.path}>
            <Link 
              to={post.path || `/blog/${post.slug}`}
              className="flex items-start gap-2 text-sm hover:text-primary transition-colors group"
            >
              <span className="text-muted-foreground mt-1 group-hover:text-primary">→</span>
              <div>
                <span className="font-medium">{post.title}</span>
                {post.category && (
                  <span className="text-xs text-muted-foreground ml-2">
                    in {post.category}
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
};
