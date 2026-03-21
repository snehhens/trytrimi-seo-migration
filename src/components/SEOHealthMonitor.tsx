import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

interface SEOMetrics {
  title: {
    present: boolean;
    length: number;
    optimal: boolean;
  };
  description: {
    present: boolean;
    length: number;
    optimal: boolean;
  };
  h1Count: number;
  imagesMissingAlt: number;
  internalLinks: number;
  loadTime: number;
}

export const SEOHealthMonitor = () => {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const analyzePageSEO = () => {
      const titleTag = document.querySelector('title');
      const metaDescription = document.querySelector('meta[name="description"]');
      const h1Tags = document.querySelectorAll('h1');
      const images = document.querySelectorAll('img');
      const internalLinks = document.querySelectorAll('a[href^="/"]');

      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '');

      const titleLength = titleTag?.textContent?.length || 0;
      const descLength = metaDescription?.getAttribute('content')?.length || 0;

      const pageMetrics: SEOMetrics = {
        title: {
          present: !!titleTag,
          length: titleLength,
          optimal: titleLength >= 30 && titleLength <= 60
        },
        description: {
          present: !!metaDescription,
          length: descLength,
          optimal: descLength >= 120 && descLength <= 160
        },
        h1Count: h1Tags.length,
        imagesMissingAlt: imagesWithoutAlt.length,
        internalLinks: internalLinks.length,
        loadTime: performance.now()
      };

      setMetrics(pageMetrics);

      // Calculate SEO score
      let calculatedScore = 0;
      if (pageMetrics.title.present) calculatedScore += 15;
      if (pageMetrics.title.optimal) calculatedScore += 15;
      if (pageMetrics.description.present) calculatedScore += 15;
      if (pageMetrics.description.optimal) calculatedScore += 15;
      if (pageMetrics.h1Count === 1) calculatedScore += 10;
      if (pageMetrics.imagesMissingAlt === 0) calculatedScore += 10;
      if (pageMetrics.internalLinks >= 3) calculatedScore += 10;
      if (pageMetrics.loadTime < 2000) calculatedScore += 10;

      setScore(calculatedScore);
    };

    // Run analysis after page loads
    setTimeout(analyzePageSEO, 1000);
  }, []);

  if (!metrics || process.env.NODE_ENV !== 'development') return null;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm">SEO Health</h3>
          <Badge className={getScoreColor(score)}>
            {score}/100
          </Badge>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span>Title Tag</span>
            {metrics.title.optimal ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-yellow-600" />
            )}
          </div>

          <div className="flex items-center justify-between">
            <span>Meta Description</span>
            {metrics.description.optimal ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-yellow-600" />
            )}
          </div>

          <div className="flex items-center justify-between">
            <span>H1 Tags</span>
            {metrics.h1Count === 1 ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
          </div>

          <div className="flex items-center justify-between">
            <span>Images Alt Text</span>
            {metrics.imagesMissingAlt === 0 ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <Badge variant="destructive">{metrics.imagesMissingAlt} missing</Badge>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span>Internal Links</span>
            <Badge variant={metrics.internalLinks >= 3 ? "default" : "secondary"}>
              {metrics.internalLinks}
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <span>Load Time</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{(metrics.loadTime / 1000).toFixed(2)}s</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
