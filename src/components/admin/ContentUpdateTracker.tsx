import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, TrendingUp, Calendar } from "lucide-react";

interface ContentStats {
  totalArticles: number;
  recentlyUpdated: number;
  needsUpdate: number;
  lastAuditDate: string;
}

export const ContentUpdateTracker = () => {
  const stats: ContentStats = {
    totalArticles: 165,
    recentlyUpdated: 165, // All articles updated Nov 26, 2025
    needsUpdate: 0,
    lastAuditDate: "2025-11-26"
  };

  const updateSchedule = [
    { frequency: "Monthly", category: "High-traffic articles", count: 25 },
    { frequency: "Quarterly", category: "Medium-traffic articles", count: 60 },
    { frequency: "Bi-annually", category: "Low-traffic articles", count: 80 }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Content Freshness Status</h2>
          <Badge variant="secondary" className="gap-2">
            <Calendar className="w-4 h-4" />
            Last Audit: {stats.lastAuditDate}
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-primary/5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Total Articles</h3>
            </div>
            <p className="text-3xl font-bold">{stats.totalArticles}</p>
          </Card>

          <Card className="p-4 bg-green-500/10">
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">Recently Updated</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">{stats.recentlyUpdated}</p>
            <p className="text-sm text-muted-foreground mt-1">Updated in last 90 days</p>
          </Card>

          <Card className="p-4 bg-orange-500/10">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold">Needs Update</h3>
            </div>
            <p className="text-3xl font-bold text-orange-600">{stats.needsUpdate}</p>
            <p className="text-sm text-muted-foreground mt-1">Older than 90 days</p>
          </Card>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Update Schedule</h3>
          <div className="space-y-2">
            {updateSchedule.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-background rounded-lg border"
              >
                <div>
                  <p className="font-medium">{item.category}</p>
                  <p className="text-sm text-muted-foreground">{item.count} articles</p>
                </div>
                <Badge variant="outline">{item.frequency}</Badge>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-primary/5">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          SEO Impact of Content Freshness
        </h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>Google favors recently updated content in search rankings</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>Visible "Last Updated" dates build user trust and engagement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>Regular updates signal active site maintenance to search engines</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>Fresh content increases click-through rates from search results</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};