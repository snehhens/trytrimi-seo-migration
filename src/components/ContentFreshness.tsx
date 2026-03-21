import { Badge } from "@/components/ui/badge";
import { Clock, RefreshCw } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ContentFreshnessProps {
  publishDate: string;
  lastUpdated?: string;
  medicallyReviewed?: boolean;
  reviewDate?: string;
}

export const ContentFreshness = ({ 
  publishDate, 
  lastUpdated, 
  medicallyReviewed,
  reviewDate 
}: ContentFreshnessProps) => {
  const publishDateObj = new Date(publishDate);
  const lastUpdatedObj = lastUpdated ? new Date(lastUpdated) : null;
  const reviewDateObj = reviewDate ? new Date(reviewDate) : null;

  const isRecent = lastUpdatedObj 
    ? (Date.now() - lastUpdatedObj.getTime()) < 90 * 24 * 60 * 60 * 1000 // 90 days
    : (Date.now() - publishDateObj.getTime()) < 90 * 24 * 60 * 60 * 1000;

  // Format dates for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="mb-8 p-4 bg-accent/30 border border-border rounded-lg">
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>
            Published: <time dateTime={publishDate}>{formatDate(publishDateObj)}</time>
          </span>
        </div>
        
        {lastUpdatedObj && (
          <div className="flex items-center gap-2 font-medium text-foreground">
            <RefreshCw className="w-4 h-4 text-primary" />
            <span>
              Last Updated: <time dateTime={lastUpdated}>{formatDate(lastUpdatedObj)}</time>
            </span>
            {isRecent && (
              <Badge variant="secondary" className="gap-1 ml-2">
                <RefreshCw className="w-3 h-3" />
                Recently Updated
              </Badge>
            )}
          </div>
        )}

        {medicallyReviewed && reviewDateObj && (
          <div className="flex items-center gap-2">
            <Badge className="gap-1 bg-green-600 hover:bg-green-700">
              ✓ Medically Reviewed {formatDistanceToNow(reviewDateObj, { addSuffix: true })}
            </Badge>
          </div>
        )}
      </div>
      
      {isRecent && (
        <p className="text-xs text-muted-foreground mt-2">
          This article has been recently updated with the latest information and guidelines.
        </p>
      )}
    </div>
  );
};
