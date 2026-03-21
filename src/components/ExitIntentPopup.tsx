import { useState, useEffect } from "react";
import { useLocation } from "@/compat/react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Gift, Copy } from "lucide-react";
import { toast } from "sonner";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem('discountPopupShown');
    if (shown) {
      return;
    }

    // Show popup after 45 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('discountPopupShown', 'true');
    }, 45000);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  const copyCode = () => {
    navigator.clipboard.writeText("TRIMI25");
    toast.success("Code copied to clipboard!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[90vw] sm:max-w-md max-h-[80vh] overflow-y-auto bg-gradient-to-br from-background to-secondary/5 border-secondary/20">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 text-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <div className="mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/80 p-4 rounded-full shadow-lg">
            <Gift className="w-12 h-12 text-white" />
          </div>
          <DialogTitle className="text-2xl text-center text-foreground font-bold">Wait! Special Offer Inside</DialogTitle>
          <DialogDescription className="text-center text-base text-foreground/80">
            Get <span className="font-bold text-secondary">$25 OFF</span> your first month
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 rounded-lg p-6 text-center shadow-sm">
            <p className="text-sm text-muted-foreground mb-2">Use promo code:</p>
            <div className="text-3xl font-bold text-primary tracking-wider mb-3">
              TRIMI25
            </div>
            <Button 
              onClick={copyCode}
              className="w-full bg-secondary hover:bg-secondary/90 text-white border-0"
              size="lg"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Code
            </Button>
          </div>
        </div>

        <div className="space-y-2 text-sm text-foreground/70">
          <p className="flex items-start gap-2">
            <span className="text-secondary">✓</span> Same day doctor approval
          </p>
          <p className="flex items-start gap-2">
            <span className="text-secondary">✓</span> Licensed medical providers
          </p>
          <p className="flex items-start gap-2">
            <span className="text-secondary">✓</span> No hidden fees
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
