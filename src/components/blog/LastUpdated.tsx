import { Calendar, RefreshCw } from "lucide-react";

interface LastUpdatedProps {
  publishDate: string;
  modifiedDate?: string;
}

export const LastUpdated = ({ publishDate, modifiedDate }: LastUpdatedProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isRecent = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const daysDiff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    return daysDiff <= 90; // Updated within last 90 days
  };

  const displayDate = modifiedDate || publishDate;
  const isRecentUpdate = isRecent(displayDate);

  return (
    <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b border-border py-4 my-6">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>
          Published: <time dateTime={publishDate}>{formatDate(publishDate)}</time>
        </span>
      </div>
      
      {modifiedDate && modifiedDate !== publishDate && (
        <div className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          <span>
            Last updated: <time dateTime={modifiedDate}>{formatDate(modifiedDate)}</time>
          </span>
          {isRecentUpdate && (
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium ml-2">
              Recently updated
            </span>
          )}
        </div>
      )}
    </div>
  );
};
