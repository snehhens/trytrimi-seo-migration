import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck } from "lucide-react";

interface MedicalReviewProps {
  reviewerName: string;
  credentials: string;
  reviewDate: string;
  avatarUrl?: string;
  specialty?: string;
}

export const MedicalReview = ({ 
  reviewerName,
  credentials,
  reviewDate,
  avatarUrl,
  specialty
}: MedicalReviewProps) => {
  const initials = reviewerName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  const formattedDate = new Date(reviewDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="p-6 my-8 bg-primary/5 border-primary/20">
      <div className="flex items-start gap-4">
        <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-foreground">
            Medically Reviewed
          </h3>
          <div className="flex gap-4 items-start">
            <Avatar className="h-14 w-14 flex-shrink-0">
              <AvatarImage src={avatarUrl} alt={reviewerName} />
              <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground">{reviewerName}</p>
              <p className="text-sm text-primary font-medium">{credentials}</p>
              {specialty && (
                <p className="text-sm text-muted-foreground mt-1">{specialty}</p>
              )}
              <p className="text-xs text-muted-foreground mt-2">
                Last reviewed: {formattedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
