import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertCircle } from "lucide-react";

interface ContentFreshnessIndicatorProps {
  lastModified: string;
  publishDate: string;
  showBadge?: boolean;
}

export const ContentFreshnessIndicator = ({ 
  lastModified, 
  publishDate,
  showBadge = true 
}: ContentFreshnessIndicatorProps) => {
  const [daysSinceUpdate, setDaysSinceUpdate] = useState(0);
  const [freshnessStatus, setFreshnessStatus] = useState<'fresh' | 'moderate' | 'stale'>('fresh');

  useEffect(() => {
    const lastModDate = new Date(lastModified);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - lastModDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    setDaysSinceUpdate(diffDays);

    // Determine freshness status
    if (diffDays < 90) {
      setFreshnessStatus('fresh');
    } else if (diffDays < 180) {
      setFreshnessStatus('moderate');
    } else {
      setFreshnessStatus('stale');
    }
  }, [lastModified]);

  if (!showBadge) return null;

  const getBadgeVariant = () => {
    switch (freshnessStatus) {
      case 'fresh':
        return 'default';
      case 'moderate':
        return 'secondary';
      case 'stale':
        return 'outline';
    }
  };

  const getBadgeText = () => {
    if (daysSinceUpdate < 30) {
      return 'Recently Updated';
    } else if (daysSinceUpdate < 90) {
      return 'Updated This Quarter';
    } else if (daysSinceUpdate < 180) {
      return 'Updated This Year';
    } else {
      return 'May Need Update';
    }
  };

  return (
    <Badge variant={getBadgeVariant()} className="flex items-center gap-1">
      {freshnessStatus === 'stale' ? (
        <AlertCircle className="h-3 w-3" />
      ) : (
        <Clock className="h-3 w-3" />
      )}
      {getBadgeText()}
    </Badge>
  );
};
