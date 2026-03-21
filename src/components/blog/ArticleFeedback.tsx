import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import { toast } from "sonner";

interface ArticleFeedbackProps {
  articleTitle: string;
  articleUrl: string;
}

export const ArticleFeedback = ({ articleTitle, articleUrl }: ArticleFeedbackProps) => {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedback(type);
    setShowComment(true);
  };

  const handleSubmit = () => {
    // In production, this would send to analytics or backend
    console.log('Feedback submitted:', {
      article: articleTitle,
      url: articleUrl,
      feedback,
      comment
    });
    
    setSubmitted(true);
    toast.success("Thank you for your feedback!");
    
    // Reset after 3 seconds
    setTimeout(() => {
      setFeedback(null);
      setShowComment(false);
      setComment("");
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <Card className="p-6 my-8 bg-primary/5 border-primary/20">
        <p className="text-center text-foreground font-medium">
          Thank you for helping us improve!
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 my-8 border-border">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Was this article helpful?
          </h3>
        </div>

        <div className="flex gap-3">
          <Button
            variant={feedback === 'positive' ? 'default' : 'outline'}
            onClick={() => handleFeedback('positive')}
            className="flex-1"
          >
            <ThumbsUp className="h-4 w-4 mr-2" />
            Yes, helpful
          </Button>
          <Button
            variant={feedback === 'negative' ? 'default' : 'outline'}
            onClick={() => handleFeedback('negative')}
            className="flex-1"
          >
            <ThumbsDown className="h-4 w-4 mr-2" />
            Needs improvement
          </Button>
        </div>

        {showComment && (
          <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <Textarea
              placeholder="Tell us more about your experience... (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-24"
            />
            <Button onClick={handleSubmit} className="w-full">
              Submit Feedback
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
