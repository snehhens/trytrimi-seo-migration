import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "@/compat/react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, XCircle, RefreshCw, AlertTriangle, Clock } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

interface SitemapCheck {
  url: string;
  status: 'success' | 'error';
  statusCode?: number;
  error?: string;
  urlCount?: number;
  validXml?: boolean;
  issues?: string[];
}

interface MonitorResults {
  summary: {
    totalChecked: number;
    successful: number;
    errors: number;
    timestamp: string;
  };
  results: SitemapCheck[];
}

const SitemapMonitor = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<MonitorResults | null>(null);

  // Fetch validation history
  const { data: validationHistory, refetch: refetchHistory } = useQuery({
    queryKey: ['sitemap-validations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sitemap_validations')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(10);
      
      if (error) throw error;
      return data;
    },
  });

  const runCheck = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('sitemap-monitor', {
        body: {},
      });

      if (error) throw error;

      setResults(data);
      
      // Trigger saving results by calling with save parameter
      await supabase.functions.invoke('sitemap-monitor', {
        body: {},
      });
      
      // Refetch history to show the new result
      refetchHistory();
      
      const hasErrors = data.summary.errors > 0;
      if (hasErrors) {
        toast.error(`Found ${data.summary.errors} sitemap issue${data.summary.errors > 1 ? 's' : ''}`);
      } else {
        toast.success('All sitemaps are healthy!');
      }
    } catch (error) {
      console.error('Error checking sitemaps:', error);
      toast.error('Failed to check sitemaps');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4">
      <Helmet>
        <title>Sitemap Monitor | Trimi Health</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://trytrimi.com/seo-dashboard/sitemap-monitor" />
      </Helmet>
      <div className="container max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Sitemap Monitor</h1>
          <p className="text-muted-foreground">
            Check the health and validity of all your sitemaps
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Run Sitemap Health Check</CardTitle>
            <CardDescription>
              Automated checks run daily at 2 AM UTC. You can also run a manual check anytime.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={runCheck} 
              disabled={loading}
              className="w-full sm:w-auto"
            >
              {loading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Checking Sitemaps...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Run Health Check
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {results && (
          <>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Summary</CardTitle>
                <CardDescription>
                  Last checked: {new Date(results.summary.timestamp).toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {results.summary.totalChecked}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Total Checked</div>
                      <div className="font-semibold">Sitemaps</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Successful</div>
                      <div className="font-semibold text-green-500">
                        {results.summary.successful}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <XCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Errors</div>
                      <div className="font-semibold text-red-500">
                        {results.summary.errors}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {results.results.map((result, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg flex items-center gap-2 break-all">
                          {result.status === 'success' ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                          )}
                          {result.url}
                        </CardTitle>
                      </div>
                      <Badge
                        variant={result.status === 'success' ? 'default' : 'destructive'}
                        className="flex-shrink-0"
                      >
                        {result.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Status Code</div>
                        <div className="font-semibold">{result.statusCode || 'N/A'}</div>
                      </div>
                      {result.urlCount !== undefined && (
                        <div>
                          <div className="text-muted-foreground">URL Count</div>
                          <div className="font-semibold">{result.urlCount}</div>
                        </div>
                      )}
                      {result.validXml !== undefined && (
                        <div>
                          <div className="text-muted-foreground">Valid XML</div>
                          <div className="font-semibold">
                            {result.validXml ? 'Yes' : 'No'}
                          </div>
                        </div>
                      )}
                    </div>

                    {result.error && (
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>{result.error}</AlertDescription>
                      </Alert>
                    )}

                    {result.issues && result.issues.length > 0 && (
                      <div className="space-y-2">
                        <div className="font-semibold text-sm">Issues Found:</div>
                        {result.issues.map((issue, idx) => (
                          <Alert key={idx} variant="destructive">
                            <AlertDescription className="text-xs">{issue}</AlertDescription>
                          </Alert>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Validation History */}
        {validationHistory && validationHistory.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Validation History
              </CardTitle>
              <CardDescription>
                Past 10 automated and manual validation results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {validationHistory.map((validation) => (
                  <div 
                    key={validation.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${validation.errors === 0 ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                        {validation.errors === 0 ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">
                          {validation.successful}/{validation.total_checked} Successful
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {format(new Date(validation.timestamp), 'MMM dd, yyyy HH:mm')} • {validation.triggered_by}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {validation.errors > 0 && (
                        <Badge variant="destructive">
                          {validation.errors} Error{validation.errors !== 1 ? 's' : ''}
                        </Badge>
                      )}
                      {validation.errors === 0 && (
                        <Badge className="bg-green-600">
                          All Healthy
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {!results && !loading && !validationHistory?.length && (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Click "Run Health Check" to start monitoring your sitemaps
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SitemapMonitor;
