import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface LeadMagnetProps {
  title: string;
  description: string;
  magnetType: "guide" | "checklist" | "meal-plan" | "tracker";
  fileName: string;
}

export const LeadMagnet = ({ title, description, magnetType, fileName }: LeadMagnetProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate email capture (would integrate with email service)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Success! Check your email for the download link.");
      
      // In production, this would trigger actual download
      // For now, just show success state
    }, 1500);
  };

  const icons = {
    guide: FileText,
    checklist: CheckCircle,
    "meal-plan": FileText,
    tracker: FileText
  };

  const Icon = icons[magnetType];

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center bg-green-50 border-green-200">
        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
        <h3 className="text-2xl font-bold mb-2">Check Your Email!</h3>
        <p className="text-muted-foreground mb-4">
          We've sent {title} to {email}
        </p>
        <p className="text-sm text-muted-foreground">
          Don't see it? Check your spam folder or{" "}
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-primary hover:underline"
          >
            try again
          </button>
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <p className="text-xs text-muted-foreground mt-2">
            We'll send you the free download. No spam, unsubscribe anytime.
          </p>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          disabled={isSubmitting}
        >
          <Download className="w-4 h-4 mr-2" />
          {isSubmitting ? "Sending..." : "Get Free Download"}
        </Button>
      </form>

      <div className="mt-4 pt-4 border-t">
        <p className="text-sm text-muted-foreground text-center">
          By downloading, you agree to receive occasional emails with weight loss tips and updates.
        </p>
      </div>
    </Card>
  );
};

export const InlineEmailCapture = ({ source = "inline" }: { source?: string }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thanks for subscribing! Check your email for confirmation.");
      setEmail("");
    }, 1000);
  };

  return (
    <Card className="p-6 bg-primary/5 border-primary/20">
      <h3 className="font-semibold mb-2">Get Weight Loss Tips & Updates</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Join 12,000+ people getting weekly tips, success stories, and exclusive offers.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </form>
    </Card>
  );
};
