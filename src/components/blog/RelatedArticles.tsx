import { Link } from "@/compat/react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface RelatedArticle {
  title: string;
  url: string;
  excerpt: string;
  category: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

export const RelatedArticles = ({ articles, title = "Related Articles" }: RelatedArticlesProps) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="my-12 py-8 border-t border-border">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-xs font-semibold text-primary mb-2">
              {article.category}
            </div>
            <h3 className="text-lg font-semibold mb-3">
              <Link 
                to={article.url}
                className="hover:text-primary transition-colors"
              >
                {article.title}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <Link 
              to={article.url}
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
            >
              Read more <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};
