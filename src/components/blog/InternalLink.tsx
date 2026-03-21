import { Link } from "@/compat/react-router-dom";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export const InternalLink = ({ to, children, className, showIcon = false }: InternalLinkProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "text-primary hover:underline font-medium inline-flex items-center gap-1",
        className
      )}
    >
      {children}
      {showIcon && <ExternalLink className="h-3 w-3" />}
    </Link>
  );
};
