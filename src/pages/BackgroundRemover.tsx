import { useState } from "react";
import { Helmet } from "@/compat/react-helmet-async";
import { Button } from "@/components/ui/button";
import { removeBackground, loadImage } from "@/utils/removeBackground";
import { toast } from "sonner";
import trimiLogo from "@/assets/trimi-logo.png";

const BackgroundRemover = () => {
  const [processing, setProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleProcessLogo = async () => {
    try {
      setProcessing(true);
      toast.info("Loading AI model... This may take a moment on first run.");

      // Load the current logo
      const response = await fetch(trimiLogo);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);

      toast.info("Processing image...");
      const resultBlob = await removeBackground(imageElement);

      // Create a URL for the processed image
      const url = URL.createObjectURL(resultBlob);
      setProcessedImage(url);

      toast.success("Background removed! Right-click the image below to save it.");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to remove background. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <Helmet>
        <title>Background Remover | Trimi Health</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://trytrimi.com/background-remover" />
      </Helmet>
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Logo Background Remover</h1>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-8 bg-card">
            <h2 className="text-xl font-semibold mb-4">Original Logo</h2>
            <div className="flex justify-center bg-muted/50 p-8 rounded">
              <img src={trimiLogo} alt="Original Trimi Logo" className="max-h-32" />
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleProcessLogo}
              disabled={processing}
              size="lg"
            >
              {processing ? "Processing..." : "Remove Background"}
            </Button>
          </div>

          {processedImage && (
            <div className="border rounded-lg p-8 bg-card">
              <h2 className="text-xl font-semibold mb-4">Processed Logo (Transparent Background)</h2>
              <div className="flex justify-center bg-muted/50 p-8 rounded" style={{
                backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}>
                <img src={processedImage} alt="Processed Trimi Logo" className="max-h-32" />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Right-click the image above and select "Save image as..." to download the transparent logo.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackgroundRemover;
