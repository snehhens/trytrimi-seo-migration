import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface AuthorBioProps {
  name?: string;
  bio?: string;
  avatarUrl?: string;
  credentials?: string;
  showIcon?: boolean;
}

export const AuthorBio = ({ 
  name = "Trimi Medical Team",
  bio = "Our team of healthcare professionals specializes in weight management and metabolic health, providing evidence-based information to help you make informed decisions about your health journey.",
  avatarUrl,
  credentials,
  showIcon = true
}: AuthorBioProps) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="p-6 my-8 border-muted">
      <div className="flex items-start gap-4">
        {showIcon && <User className="h-5 w-5 text-primary flex-shrink-0 mt-1" />}
        <div className="flex gap-4 flex-1">
          <Avatar className="h-16 w-16 flex-shrink-0">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-muted text-foreground">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold mb-1 text-foreground">
              Written by {name}
            </h3>
            {credentials && (
              <p className="text-sm font-medium text-primary mb-2">{credentials}</p>
            )}
            <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
