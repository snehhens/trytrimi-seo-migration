import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate, Link } from "@/compat/react-router-dom";
import { Helmet } from "@/compat/react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Navigation = lazy(() => import("@/components/Navigation"));
const Footer = lazy(() => import("@/components/Footer"));

interface ContentUpdate {
  id: string;
  article_slug: string;
  article_title: string;
  article_path: string;
  priority: string;
  update_status: string;
  has_featured_snippet: boolean;
  has_last_updated: boolean;
  has_feedback_component: boolean;
  created_at: string;
}

const ContentUpdateManager = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [updates, setUpdates] = useState<ContentUpdate[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth();
    fetchUpdates();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/auth");
    }
  };

  const fetchUpdates = async () => {
    const { data, error } = await supabase
      .from("content_updates")
      .select("*")
      .order("priority", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch content updates",
        variant: "destructive",
      });
    } else {
      setUpdates(data || []);
    }
  };

  const initializeTopArticles = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Get top 20 articles to prioritize
    const topArticles = blogPosts.slice(0, 20).map(post => ({
      user_id: user.id,
      article_slug: post.slug,
      article_title: post.title,
      article_path: post.path,
      priority: "high",
      update_status: "pending"
    }));

    const { error } = await supabase.from("content_updates").insert(topArticles);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Top 20 articles added for updating",
      });
      fetchUpdates();
    }
    setLoading(false);
  };

  const getPriorityColor = (priority: string): "default" | "destructive" | "outline" | "secondary" => {
    const colors: Record<string, "default" | "destructive" | "outline" | "secondary"> = {
      high: "destructive",
      medium: "default",
      low: "secondary"
    };
    return colors[priority] || "default";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "in_progress":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-20 bg-background border-b border-border" />}>
        <Navigation />
      </Suspense>

      <Helmet>
        <title>Content Update Manager - Trimi Health</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/seo-dashboard">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Content Updates</h1>
              <p className="text-muted-foreground">Track and prioritize blog post improvements</p>
            </div>
          </div>
        </div>

        {updates.length === 0 && (
          <Card className="p-12 text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to optimize your content?</h2>
            <p className="text-muted-foreground mb-6">
              Initialize the top 20 articles to start tracking updates and improvements
            </p>
            <Button onClick={initializeTopArticles} disabled={loading} size="lg">
              {loading ? "Initializing..." : "Initialize Top 20 Articles"}
            </Button>
          </Card>
        )}

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="text-2xl font-bold text-foreground">{updates.length}</div>
            <div className="text-sm text-muted-foreground">Total Articles</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-destructive">
              {updates.filter(u => u.priority === "high").length}
            </div>
            <div className="text-sm text-muted-foreground">High Priority</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-green-600">
              {updates.filter(u => u.update_status === "completed").length}
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-yellow-600">
              {updates.filter(u => u.update_status === "in_progress").length}
            </div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </Card>
        </div>

        {updates.length > 0 && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Article Updates</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Article</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Components</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {updates.map((update) => (
                    <TableRow key={update.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(update.update_status)}
                          <span className="text-sm capitalize">{update.update_status.replace("_", " ")}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{update.article_title}</div>
                          <Link
                            to={update.article_path}
                            className="text-sm text-primary hover:underline"
                            target="_blank"
                          >
                            View Article →
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getPriorityColor(update.priority)}>
                          {update.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1 text-xs">
                          {update.has_featured_snippet && <span className="text-green-600">✓ Featured Snippet</span>}
                          {update.has_last_updated && <span className="text-green-600">✓ Last Updated</span>}
                          {update.has_feedback_component && <span className="text-green-600">✓ Feedback</span>}
                          {!update.has_featured_snippet && <span className="text-muted-foreground">○ Featured Snippet</span>}
                          {!update.has_last_updated && <span className="text-muted-foreground">○ Last Updated</span>}
                          {!update.has_feedback_component && <span className="text-muted-foreground">○ Feedback</span>}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={update.article_path}>Edit</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        )}

        <Card className="p-8 mt-8 bg-gradient-to-br from-primary/5 to-secondary/10">
          <h3 className="text-xl font-bold text-foreground mb-4">Content Update Checklist</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">1.</span>
              <span>Add <code className="bg-muted px-1">FeaturedSnippet</code> component for "People Also Ask" targeting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">2.</span>
              <span>Add <code className="bg-muted px-1">LastUpdated</code> component with modified date</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">3.</span>
              <span>Add <code className="bg-muted px-1">ArticleFeedback</code> component at end of article</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">4.</span>
              <span>Expand content to 2000+ words with new research/data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">5.</span>
              <span>Add internal links to related articles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">6.</span>
              <span>Update modified date in <code className="bg-muted px-1">getModifiedDate.ts</code></span>
            </li>
          </ul>
        </Card>
      </main>

      <Suspense fallback={<div className="h-64 bg-background" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ContentUpdateManager;
