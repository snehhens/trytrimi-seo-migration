-- Create backlink outreach tracking table
CREATE TABLE public.backlink_prospects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  website_name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  contact_email TEXT,
  contact_name TEXT,
  outreach_type TEXT NOT NULL, -- 'guest_post', 'directory', 'partnership', 'press', 'resource_page'
  status TEXT NOT NULL DEFAULT 'prospect', -- 'prospect', 'contacted', 'responded', 'agreed', 'published', 'rejected'
  pitch_sent_date TIMESTAMP WITH TIME ZONE,
  response_date TIMESTAMP WITH TIME ZONE,
  published_date TIMESTAMP WITH TIME ZONE,
  backlink_url TEXT,
  domain_authority INTEGER,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create content update tracking table
CREATE TABLE public.content_updates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  article_slug TEXT NOT NULL,
  article_title TEXT NOT NULL,
  article_path TEXT NOT NULL,
  priority TEXT NOT NULL DEFAULT 'medium', -- 'high', 'medium', 'low'
  current_word_count INTEGER,
  target_word_count INTEGER,
  has_featured_snippet BOOLEAN DEFAULT false,
  has_last_updated BOOLEAN DEFAULT false,
  has_feedback_component BOOLEAN DEFAULT false,
  has_internal_links BOOLEAN DEFAULT false,
  update_status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'in_progress', 'completed'
  last_updated_date TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.backlink_prospects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_updates ENABLE ROW LEVEL SECURITY;

-- Create policies for backlink_prospects
CREATE POLICY "Users can view their own backlink prospects" 
ON public.backlink_prospects 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own backlink prospects" 
ON public.backlink_prospects 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own backlink prospects" 
ON public.backlink_prospects 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own backlink prospects" 
ON public.backlink_prospects 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create policies for content_updates
CREATE POLICY "Users can view their own content updates" 
ON public.content_updates 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own content updates" 
ON public.content_updates 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own content updates" 
ON public.content_updates 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own content updates" 
ON public.content_updates 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_backlink_prospects_updated_at
BEFORE UPDATE ON public.backlink_prospects
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_content_updates_updated_at
BEFORE UPDATE ON public.content_updates
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();