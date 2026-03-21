import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/compat/react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { calculateReadingTime } from "@/utils/readingTime";

interface Article {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishDate?: string;
  path?: string;
  readTime?: string;
  readTimeMinutes?: number;
  content?: string;
}

interface RelatedArticlesProps {
  articles: Article[];
  currentSlug: string;
}

export const RelatedArticles = ({ articles, currentSlug }: RelatedArticlesProps) => {
  // Filter out current article and limit to 4
  const relatedArticles = articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, 4);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Keep Reading</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {relatedArticles.map((article) => (
              <Card key={article.slug} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2">{article.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2">
                    <Link 
                      to={article.path || `/blog/${article.slug}`} 
                      className="hover:text-primary transition-colors"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime || (article.readTimeMinutes ? `${article.readTimeMinutes} min read` : undefined) || (article.content ? calculateReadingTime(article.content) : '5 min read')}
                    </span>
                    <Link 
                      to={article.path || `/blog/${article.slug}`}
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
