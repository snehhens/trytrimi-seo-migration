import { Link } from "@/compat/react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ReadingTime } from "./ReadingTime";
import { blogPosts } from "@/data/blogPosts";

interface RelatedPost {
  title: string;
  excerpt: string;
  slug: string;
  readTimeMinutes: number;
}

interface RelatedPostsProps {
  posts?: RelatedPost[];
  title?: string;
  currentSlug?: string;
  category?: string;
}

export const RelatedPosts = ({ posts, title = "Related Articles", currentSlug, category }: RelatedPostsProps) => {
  // If posts are provided directly, use them
  let displayPosts = posts || [];
  
  // If currentSlug and category are provided, find related posts
  if (!posts && currentSlug && category) {
    displayPosts = blogPosts
      .filter(post => post.category === category && post.slug !== currentSlug)
      .slice(0, 3)
      .map(post => ({
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        readTimeMinutes: post.readTimeMinutes || 10
      }));
  }
  
  if (displayPosts.length === 0) return null;

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <ReadingTime minutes={post.readTimeMinutes} />
                  <span className="text-primary flex items-center gap-1 text-sm font-medium">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
