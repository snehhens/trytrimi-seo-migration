import { lazy, Suspense, useEffect, useState } from "react";
import { Link, useNavigate } from "@/compat/react-router-dom";
import { Helmet } from "@/compat/react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { LinkIcon, FileEdit, LogOut, Search, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { GEOContentEditor } from "@/components/seo/GEOContentEditor";

const Navigation = lazy(() => import("@/components/Navigation"));
const Footer = lazy(() => import("@/components/Footer"));

const SEODashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check auth
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        navigate("/auth");
      } else {
        setUser(user);
      }
    });
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You've been signed out successfully",
    });
    navigate("/auth");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-20 bg-background border-b border-border" />}>
        <Navigation />
      </Suspense>

      <Helmet>
        <title>SEO Dashboard - Trimi Health</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">SEO Dashboard</h1>
            <p className="text-muted-foreground">Manage backlinks and content updates</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="geo-editor">GEO Editor</TabsTrigger>
            <TabsTrigger value="backlinks">Backlinks</TabsTrigger>
            <TabsTrigger value="content">Content Updates</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/seo-dashboard/research">
                <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-2 border-primary/20">
                  <Search className="h-12 w-12 text-primary mb-4" />
                  <Badge className="mb-3" variant="default">AI Powered</Badge>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Prospect Research</h2>
                  <p className="text-muted-foreground mb-4">
                    AI-powered site analysis with contact email extraction
                  </p>
                  <Button>Research Prospects</Button>
                </Card>
              </Link>

              <Link to="/seo-dashboard/sitemap-monitor">
                <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-2 border-primary/20">
                  <MapPin className="h-12 w-12 text-primary mb-4" />
                  <Badge className="mb-3" variant="default">Health Check</Badge>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Sitemap Monitor</h2>
                  <p className="text-muted-foreground mb-4">
                    Check sitemap health, validity, and accessibility
                  </p>
                  <Button>Check Sitemaps</Button>
                </Card>
              </Link>

              <Link to="/seo-dashboard/backlinks">
                <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer">
                  <LinkIcon className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">Backlink Outreach</h2>
                  <p className="text-muted-foreground mb-4">
                    Track prospects, manage outreach campaigns, and monitor backlink acquisitions
                  </p>
                  <Button>Manage Backlinks</Button>
                </Card>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card 
                className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-2 border-primary/20"
                onClick={() => {
                  const tabTrigger = document.querySelector('[value="geo-editor"]') as HTMLButtonElement;
                  tabTrigger?.click();
                }}
              >
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <Badge className="mb-3" variant="default">AI Powered</Badge>
                <h2 className="text-2xl font-bold text-foreground mb-2">GEO Content Editor</h2>
                <p className="text-muted-foreground mb-4">
                  AI-powered content optimization with LSI keywords, entity linking & schema markup
                </p>
                <Button>Open Editor</Button>
              </Card>

              <Link to="/seo-dashboard/content">
                <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer">
                  <FileEdit className="h-12 w-12 text-secondary mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">Content Updates</h2>
                  <p className="text-muted-foreground mb-4">
                    Prioritize posts, track improvements, and maintain content freshness
                  </p>
                  <Button>Update Content</Button>
                </Card>
              </Link>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/10">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <Link to="/seo-dashboard/research">Research Site</Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link to="/seo-dashboard/backlinks">Add Prospect</Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link to="/seo-dashboard/content">Mark Article Updated</Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link to="/blog">View All Articles</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">SEO Strategy Tips</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Focus on high-authority sites (DA 50+) for maximum backlink impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Update top 20 traffic articles first - they'll rank faster than new posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Add FeaturedSnippet components to target "People Also Ask" questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Personalize outreach emails - generic templates have low success rates</span>
                </li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="geo-editor">
            <GEOContentEditor />
          </TabsContent>

          <TabsContent value="backlinks">
            <Card className="p-8">
              <p className="text-muted-foreground text-center">
                Backlink management interface coming soon. Visit{" "}
                <Link to="/seo-dashboard/backlinks" className="text-primary hover:underline">
                  dedicated backlinks page
                </Link>
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card className="p-8">
              <p className="text-muted-foreground text-center">
                Content update interface coming soon. Visit{" "}
                <Link to="/seo-dashboard/content" className="text-primary hover:underline">
                  dedicated content page
                </Link>
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Suspense fallback={<div className="h-64 bg-background" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default SEODashboard;
