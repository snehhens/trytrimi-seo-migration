import { lazy, Suspense, useState } from "react";
import { useNavigate } from "@/compat/react-router-dom";
import { Helmet } from "@/compat/react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Search, Mail, TrendingUp, ArrowLeft, Plus, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const Navigation = lazy(() => import("@/components/Navigation"));
const Footer = lazy(() => import("@/components/Footer"));

// Validation schema
const researchSchema = z.object({
  url: z.string()
    .trim()
    .url({ message: "Please enter a valid URL (e.g., https://example.com)" })
    .max(500, { message: "URL must be less than 500 characters" }),
  niche: z.string()
    .trim()
    .max(500, { message: "Niche description must be less than 500 characters" })
    .optional()
    .or(z.literal(""))
});

interface ProspectResult {
  url: string;
  emails: string[];
  estimatedDA: number;
  outreachType: string;
  relevantTopics: string[];
  recommendation: string;
  outreachAngle: string;
}

const ProspectResearch = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [niche, setNiche] = useState("weight loss medications, GLP-1, semaglutide, tirzepatide");
  const [isResearching, setIsResearching] = useState(false);
  const [result, setResult] = useState<ProspectResult | null>(null);

  const handleResearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate input
      const validated = researchSchema.parse({ url, niche });

      setIsResearching(true);
      setResult(null);

      const { data, error } = await supabase.functions.invoke("prospect-research", {
        body: { 
          url: validated.url, 
          niche: validated.niche || "weight loss medications, GLP-1, semaglutide, tirzepatide" 
        },
      });

      if (error) throw error;

      if (data.success) {
        setResult(data.prospect);
        toast({
          title: "Research Complete",
          description: `Found ${data.prospect.emails.length} contact email(s)`,
        });
      } else {
        throw new Error(data.error || "Research failed");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Research Failed",
          description: error instanceof Error ? error.message : "Failed to research prospect",
          variant: "destructive",
        });
      }
    } finally {
      setIsResearching(false);
    }
  };

  const handleAddToBacklinks = async () => {
    if (!result) return;

    try {
      // Check auth
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }

      const { error } = await supabase.from("backlink_prospects").insert({
        user_id: user.id,
        website_name: new URL(result.url).hostname,
        website_url: result.url,
        contact_email: result.emails[0] || "",
        outreach_type: result.outreachType,
        domain_authority: result.estimatedDA,
        notes: `${result.recommendation}\n\nOutreach Angle: ${result.outreachAngle}\n\nTopics: ${result.relevantTopics.join(", ")}`,
        status: "new",
      });

      if (error) throw error;

      toast({
        title: "Prospect Added",
        description: "Successfully added to backlink manager",
      });

      navigate("/seo-dashboard/backlinks");
    } catch (error) {
      console.error("Error adding prospect:", error);
      toast({
        title: "Error",
        description: "Failed to add prospect to backlink manager",
        variant: "destructive",
      });
    }
  };

  const getDAColor = (da: number) => {
    if (da >= 70) return "bg-green-500";
    if (da >= 50) return "bg-blue-500";
    if (da >= 30) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-20 bg-background border-b border-border" />}>
        <Navigation />
      </Suspense>

      <Helmet>
        <title>Prospect Research - SEO Dashboard - Trimi Health</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/seo-dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Prospect Research</h1>
          <p className="text-muted-foreground">
            AI-powered backlink prospect analysis with contact email extraction
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Research Form */}
          <Card className="p-6">
            <form onSubmit={handleResearch} className="space-y-6">
              <div>
                <Label htmlFor="url">Website URL</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="niche">Target Niche (Optional)</Label>
                <Textarea
                  id="niche"
                  placeholder="weight loss, GLP-1 medications, health..."
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  rows={3}
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Specify your niche for more targeted analysis
                </p>
              </div>

              <Button type="submit" disabled={isResearching} className="w-full">
                {isResearching ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Researching...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Research Prospect
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">What This Tool Does:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Extracts contact emails from websites</li>
                <li>• Estimates domain authority (1-100)</li>
                <li>• Identifies outreach opportunities</li>
                <li>• Suggests personalized outreach angles</li>
                <li>• Analyzes content relevance to your niche</li>
              </ul>
            </div>
          </Card>

          {/* Research Results */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Research Results</h2>

            {!result && !isResearching && (
              <div className="text-center py-12 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Enter a URL and click Research to analyze a prospect</p>
              </div>
            )}

            {isResearching && (
              <div className="text-center py-12">
                <Loader2 className="h-12 w-12 mx-auto mb-4 animate-spin text-primary" />
                <p className="text-muted-foreground">Analyzing website...</p>
              </div>
            )}

            {result && (
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{new URL(result.url).hostname}</h3>
                    <Badge className={`${getDAColor(result.estimatedDA)} text-white`}>
                      <TrendingUp className="h-3 w-3 mr-1" />
                      DA {result.estimatedDA}
                    </Badge>
                  </div>
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {result.url}
                  </a>
                </div>

                {/* Contact Emails */}
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4" />
                    Contact Emails ({result.emails.length})
                  </Label>
                  {result.emails.length > 0 ? (
                    <div className="space-y-1">
                      {result.emails.map((email, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Badge variant="outline" className="font-mono text-xs">
                            {email}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No emails found</p>
                  )}
                </div>

                {/* Outreach Type */}
                <div>
                  <Label className="mb-2">Outreach Type</Label>
                  <Badge variant="secondary">{result.outreachType}</Badge>
                </div>

                {/* Topics */}
                {result.relevantTopics.length > 0 && (
                  <div>
                    <Label className="mb-2">Relevant Topics</Label>
                    <div className="flex flex-wrap gap-2">
                      {result.relevantTopics.map((topic, index) => (
                        <Badge key={index} variant="outline">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommendation */}
                <div>
                  <Label className="mb-2">Why This Prospect?</Label>
                  <p className="text-sm text-muted-foreground">{result.recommendation}</p>
                </div>

                {/* Outreach Angle */}
                <div>
                  <Label className="mb-2">Suggested Outreach Angle</Label>
                  <p className="text-sm text-muted-foreground">{result.outreachAngle}</p>
                </div>

                {/* Add to Backlinks */}
                <Button onClick={handleAddToBacklinks} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Backlink Manager
                </Button>
              </div>
            )}
          </Card>
        </div>
      </main>

      <Suspense fallback={<div className="h-64 bg-background" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ProspectResearch;
