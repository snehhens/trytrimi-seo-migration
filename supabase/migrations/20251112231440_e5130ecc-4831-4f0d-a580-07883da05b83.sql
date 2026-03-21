-- Create table for sitemap validation history
CREATE TABLE IF NOT EXISTS public.sitemap_validations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  total_checked INTEGER NOT NULL,
  successful INTEGER NOT NULL,
  errors INTEGER NOT NULL,
  results JSONB NOT NULL,
  triggered_by TEXT DEFAULT 'manual',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster querying by timestamp
CREATE INDEX idx_sitemap_validations_timestamp ON public.sitemap_validations(timestamp DESC);

-- Enable RLS
ALTER TABLE public.sitemap_validations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read validation results (public monitoring data)
CREATE POLICY "Anyone can view sitemap validations"
ON public.sitemap_validations
FOR SELECT
USING (true);

-- Only allow insertions from service role (edge functions)
CREATE POLICY "Service role can insert validations"
ON public.sitemap_validations
FOR INSERT
WITH CHECK (true);