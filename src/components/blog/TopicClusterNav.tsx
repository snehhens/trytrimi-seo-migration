import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "@/compat/react-router-dom";

interface TopicClusterNavProps {
  pillarPage?: string;
  hubPage?: string;
  relatedArticles: {
    title: string;
    url: string;
    excerpt: string;
  }[];
  topic: string;
}

export const TopicClusterNav = ({
  pillarPage,
  hubPage,
  relatedArticles,
  topic
}: TopicClusterNavProps) => {
  if (relatedArticles.length === 0) return null;

  return (
    <Card className="p-6 my-12 bg-accent/30 border-primary/20">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-bold">More on {topic}</h3>
      </div>
      
      {hubPage && (
        <div className="mb-4">
          <Link 
            to={hubPage}
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            View all {topic} articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {relatedArticles.slice(0, 4).map((article, index) => (
          <Link
            key={index}
            to={article.url}
            className="p-4 rounded-lg bg-background hover:bg-accent/50 transition-colors border border-border"
          >
            <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary">
              {article.title}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </Card>
  );
};
