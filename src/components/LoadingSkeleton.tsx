import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const BlogPostSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-6 w-full mb-3" />
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-20 w-full mb-4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </Card>
  );
};

export const PageLoadingSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
        <div className="space-y-4 pt-8">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
};
