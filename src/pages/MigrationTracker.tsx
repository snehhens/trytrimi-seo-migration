import { useQuery } from "@tanstack/react-query";
import { Helmet } from "@/compat/react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, AlertCircle } from "lucide-react";

export default function MigrationTracker() {
  const { data: updates, isLoading } = useQuery({
    queryKey: ["migration-tracker"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("content_updates")
        .select("*")
        .order("priority", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  const totalPosts = 126;
  const completedPosts = updates?.filter(u => u.update_status === "completed").length || 8;
  const inProgressPosts = updates?.filter(u => u.update_status === "in_progress").length || 0;
  const pendingPosts = totalPosts - completedPosts - inProgressPosts;
  const progress = (completedPosts / totalPosts) * 100;

  const priorityColors = {
    high: "destructive",
    medium: "default",
    low: "secondary",
  } as const;

  return (
    <div className="min-h-screen bg-background p-8">
      <Helmet>
        <title>Migration Tracker | Trimi Health</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://trytrimi.com/migration-tracker" />
      </Helmet>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Blog Migration Tracker</h1>
          <p className="text-muted-foreground">
            Systematic migration to BlogLayout for improved SEO and organic growth
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="text-2xl font-bold">{totalPosts}</div>
            <div className="text-sm text-muted-foreground">Total Posts</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-green-600">{completedPosts}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-yellow-600">{inProgressPosts}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-gray-600">{pendingPosts}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="p-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Migration Progress</span>
              <span className="font-medium">{progress.toFixed(1)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </Card>

        {/* Migration List */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Article Status</h2>
          
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Loading...</div>
          ) : (
            <div className="space-y-2">
              {updates?.map((update) => (
                <div
                  key={update.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {update.update_status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : update.update_status === "in_progress" ? (
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{update.article_title}</div>
                      <div className="text-sm text-muted-foreground">{update.article_path}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge variant={priorityColors[update.priority as keyof typeof priorityColors]}>
                      {update.priority}
                    </Badge>
                    
                    {update.last_updated_date && (
                      <span className="text-sm text-muted-foreground">
                        {new Date(update.last_updated_date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Migration Plan Link */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <h3 className="font-semibold mb-2">📋 Full Migration Plan</h3>
          <p className="text-sm text-muted-foreground">
            See BLOG_MIGRATION_PLAN.md in the project root for detailed batch strategy,
            priority scoring, and session workflow.
          </p>
        </Card>
      </div>
    </div>
  );
}
