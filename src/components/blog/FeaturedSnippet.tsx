import { Card } from "@/components/ui/card";
import { CheckCircle, Info, TrendingUp } from "lucide-react";

interface FeaturedSnippetProps {
  type: 'list' | 'definition' | 'table' | 'steps';
  title: string;
  content: string[] | { term: string; definition: string }[];
  icon?: 'check' | 'info' | 'trending';
}

export const FeaturedSnippet = ({ 
  type, 
  title, 
  content,
  icon = 'info'
}: FeaturedSnippetProps) => {
  const iconMap = {
    check: CheckCircle,
    info: Info,
    trending: TrendingUp
  };

  const Icon = iconMap[icon];

  return (
    <Card className="p-6 my-8 bg-accent/50 border-primary/20">
      <div className="flex items-start gap-3 mb-4">
        <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>

      {type === 'list' && Array.isArray(content) && typeof content[0] === 'string' && (
        <ul className="space-y-3">
          {(content as string[]).map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="font-bold text-primary mt-1 flex-shrink-0">{index + 1}.</span>
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {type === 'steps' && Array.isArray(content) && typeof content[0] === 'string' && (
        <ol className="space-y-4">
          {(content as string[]).map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <span className="text-foreground pt-1">{item}</span>
            </li>
          ))}
        </ol>
      )}

      {type === 'definition' && Array.isArray(content) && typeof content[0] === 'object' && (
        <dl className="space-y-4">
          {(content as { term: string; definition: string }[]).map((item, index) => (
            <div key={index} className="space-y-1">
              <dt className="font-bold text-primary">{item.term}</dt>
              <dd className="text-foreground pl-4 border-l-2 border-primary/20">{item.definition}</dd>
            </div>
          ))}
        </dl>
      )}

      {type === 'table' && Array.isArray(content) && typeof content[0] === 'string' && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {(content as string[]).map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-background/50' : ''}>
                  <td className="p-3 text-foreground">{row}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
};
