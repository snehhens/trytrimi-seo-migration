import { useState, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { publicSupabaseKey, publicSupabaseUrl } from "@/lib/runtime-env";
import { 
  Sparkles, 
  MessageSquare, 
  Link2, 
  Code2, 
  Zap, 
  Copy, 
  Check,
  Loader2,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";

type OptimizationMode = "enhance" | "qna" | "entities" | "schema" | "full";

interface ModeConfig {
  id: OptimizationMode;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const modes: ModeConfig[] = [
  { 
    id: "enhance", 
    label: "LSI Keywords", 
    description: "Enhance with semantic keywords & authoritative language",
    icon: <Sparkles className="h-4 w-4" />
  },
  { 
    id: "qna", 
    label: "Voice Q&A", 
    description: "Convert to voice-search optimized Q&A format",
    icon: <MessageSquare className="h-4 w-4" />
  },
  { 
    id: "entities", 
    label: "Entity Linking", 
    description: "Link entities to Wikidata & knowledge bases",
    icon: <Link2 className="h-4 w-4" />
  },
  { 
    id: "schema", 
    label: "Schema Markup", 
    description: "Generate structured data JSON-LD",
    icon: <Code2 className="h-4 w-4" />
  },
  { 
    id: "full", 
    label: "Full GEO", 
    description: "Complete GEO optimization with all features",
    icon: <Zap className="h-4 w-4" />
  },
];

export const GEOContentEditor = () => {
  const [content, setContent] = useState("");
  const [targetKeyword, setTargetKeyword] = useState("");
  const [selectedMode, setSelectedMode] = useState<OptimizationMode>("enhance");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleOptimize = useCallback(async () => {
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please enter content to optimize",
        variant: "destructive",
      });
      return;
    }

    if (!targetKeyword.trim()) {
      toast({
        title: "Keyword required",
        description: "Please enter a target keyword",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setOutput("");
    setError(null);

    try {
      const response = await fetch(
        `${publicSupabaseUrl}/functions/v1/geo-content-editor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicSupabaseKey}`,
          },
          body: JSON.stringify({
            content,
            targetKeyword,
            mode: selectedMode,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Optimization failed");
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let fullOutput = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          const line = buffer.slice(0, newlineIndex).trim();
          buffer = buffer.slice(newlineIndex + 1);

          if (line.startsWith(":") || line === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") continue;

          try {
            const parsed = JSON.parse(jsonStr);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              fullOutput += delta;
              setOutput(fullOutput);
            }
          } catch {
            // Incomplete JSON, wait for more data
          }
        }
      }

      toast({
        title: "Optimization complete",
        description: `Content enhanced with ${modes.find(m => m.id === selectedMode)?.label}`,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      toast({
        title: "Optimization failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [content, targetKeyword, selectedMode, toast]);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast({ title: "Copied to clipboard" });
    setTimeout(() => setCopied(false), 2000);
  }, [output, toast]);

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Input Panel */}
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            GEO Content Editor
          </CardTitle>
          <CardDescription>
            AI-powered content optimization for generative search engines
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="keyword">Target Keyword</Label>
            <Input
              id="keyword"
              placeholder="e.g., compounded tirzepatide"
              value={targetKeyword}
              onChange={(e) => setTargetKeyword(e.target.value)}
            />
          </div>

          <div className="space-y-2 flex-1 flex flex-col">
            <Label htmlFor="content">Content to Optimize</Label>
            <Textarea
              id="content"
              placeholder="Paste your existing content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 min-h-[200px] resize-none"
            />
          </div>

          <Separator />

          <div className="space-y-3">
            <Label>Optimization Mode</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {modes.map((mode) => (
                <Button
                  key={mode.id}
                  variant={selectedMode === mode.id ? "default" : "outline"}
                  size="sm"
                  className="flex items-center gap-1.5 h-auto py-2 px-3"
                  onClick={() => setSelectedMode(mode.id)}
                >
                  {mode.icon}
                  <span className="text-xs">{mode.label}</span>
                </Button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {modes.find(m => m.id === selectedMode)?.description}
            </p>
          </div>

          <Button 
            onClick={handleOptimize} 
            disabled={isLoading || !content.trim() || !targetKeyword.trim()}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Optimizing...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Optimize Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Output Panel */}
      <Card className="flex flex-col">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Optimized Output</CardTitle>
            <CardDescription>GEO-enhanced content with recommendations</CardDescription>
          </div>
          {output && (
            <Button variant="outline" size="sm" onClick={handleCopy}>
              {copied ? (
                <Check className="h-4 w-4 mr-1" />
              ) : (
                <Copy className="h-4 w-4 mr-1" />
              )}
              {copied ? "Copied" : "Copy"}
            </Button>
          )}
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          {error && (
            <div className="flex items-center gap-2 text-destructive mb-4 p-3 bg-destructive/10 rounded-md">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <ScrollArea className="flex-1 border rounded-md p-4 min-h-[400px]">
            {output ? (
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown>{output}</ReactMarkdown>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                {isLoading ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <span>Generating optimized content...</span>
                  </div>
                ) : (
                  <span>Optimized content will appear here</span>
                )}
              </div>
            )}
          </ScrollArea>

          {output && (
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">
                {modes.find(m => m.id === selectedMode)?.label}
              </Badge>
              <Badge variant="outline">
                {output.length.toLocaleString()} characters
              </Badge>
              <Badge variant="outline">
                ~{Math.ceil(output.split(/\s+/).length)} words
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
