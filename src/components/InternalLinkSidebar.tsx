import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, TrendingUp, FileText, Users } from "lucide-react";
import { getRelevantLinks } from "@/utils/internalLinking";

interface InternalLinkSidebarProps {
  pageKeywords: string[];
  currentPath: string;
}

export const InternalLinkSidebar = ({ pageKeywords, currentPath }: InternalLinkSidebarProps) => {
  const relatedLinks = getRelevantLinks(pageKeywords, currentPath);
  const articleLinks = relatedLinks.filter((link) => link.kind === "article");
  const guideLinks = relatedLinks.filter((link) => link.kind !== "article");

  return (
    <div className="space-y-6">
      {articleLinks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Keep Reading
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {articleLinks.map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className="block rounded-lg p-3 hover:bg-muted transition-colors group"
              >
                <div className="text-sm font-medium group-hover:text-primary">
                  {link.text}
                </div>
                {link.description && (
                  <div className="mt-1 text-xs text-muted-foreground">{link.description}</div>
                )}
              </Link>
            ))}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Topic Guides
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {guideLinks.length > 0 ? (
            guideLinks.map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <div>
                  <div className="text-sm font-medium group-hover:text-primary">{link.text}</div>
                  {link.description && (
                    <div className="mt-1 text-xs text-muted-foreground">{link.description}</div>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))
          ) : (
            <div className="space-y-2">
              <Link to="/how-it-works" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group">
                <span className="text-sm font-medium group-hover:text-primary">How It Works</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link to="/compare" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group">
                <span className="text-sm font-medium group-hover:text-primary">Compare Treatments</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Popular Guides
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link to="/semaglutide-guide" className="block p-3 rounded-lg hover:bg-muted transition-colors">
            <div className="font-medium text-sm group-hover:text-primary">Semaglutide Complete Guide</div>
            <div className="text-xs text-muted-foreground mt-1">Everything you need to know</div>
          </Link>
          <Link to="/tirzepatide-guide" className="block p-3 rounded-lg hover:bg-muted transition-colors">
            <div className="font-medium text-sm group-hover:text-primary">Tirzepatide Complete Guide</div>
            <div className="text-xs text-muted-foreground mt-1">Comprehensive information</div>
          </Link>
          <Link to="/faq-hub" className="block p-3 rounded-lg hover:bg-muted transition-colors">
            <div className="font-medium text-sm group-hover:text-primary">FAQ Database</div>
            <div className="text-xs text-muted-foreground mt-1">100+ answered questions</div>
          </Link>
        </CardContent>
      </Card>

      {/* Social Proof CTA */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="w-5 h-5" />
            Join 8,247+ Patients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            See real results from verified patients
          </p>
          <Link 
            to="/blog/semaglutide-weight-loss-online-reviews" 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Read Success Stories <ArrowRight className="w-4 h-4" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
