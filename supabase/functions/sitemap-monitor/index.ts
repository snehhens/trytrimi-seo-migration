import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.74.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SitemapCheck {
  url: string;
  status: 'success' | 'error';
  statusCode?: number;
  error?: string;
  urlCount?: number;
  validXml?: boolean;
  issues?: string[];
}

async function checkSitemapUrl(url: string): Promise<SitemapCheck> {
  const issues: string[] = [];
  
  try {
    console.log(`Checking sitemap: ${url}`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Trimi-Sitemap-Monitor/1.0',
      },
    });

    if (!response.ok) {
      return {
        url,
        status: 'error',
        statusCode: response.status,
        error: `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('xml')) {
      issues.push(`Invalid content-type: ${contentType} (expected XML)`);
    }

    const text = await response.text();
    
    // Basic XML validation
    let validXml = true;
    let urlCount = 0;
    
    try {
      // Check for XML declaration
      if (!text.trim().startsWith('<?xml')) {
        issues.push('Missing XML declaration');
        validXml = false;
      }

      // Check for proper sitemap structure
      if (text.includes('<urlset')) {
        // Regular sitemap
        const urlMatches = text.match(/<url>/g);
        urlCount = urlMatches ? urlMatches.length : 0;
        
        if (urlCount === 0) {
          issues.push('No URLs found in sitemap');
        }

        // Check for required elements
        if (!text.includes('<loc>')) {
          issues.push('Missing <loc> tags');
          validXml = false;
        }
      } else if (text.includes('<sitemapindex')) {
        // Sitemap index
        const sitemapMatches = text.match(/<sitemap>/g);
        urlCount = sitemapMatches ? sitemapMatches.length : 0;
        
        if (urlCount === 0) {
          issues.push('No sitemaps found in sitemap index');
        }
      } else if (text.includes('<image:image>')) {
        // Image sitemap
        const imageMatches = text.match(/<image:image>/g);
        urlCount = imageMatches ? imageMatches.length : 0;
      } else {
        issues.push('Unknown sitemap format');
        validXml = false;
      }

      // Check for common XML errors
      if (text.includes('&') && !text.match(/&(amp|lt|gt|quot|apos);/)) {
        issues.push('Unescaped ampersands detected');
      }

    } catch (error) {
      validXml = false;
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      issues.push(`XML parsing error: ${errorMessage}`);
    }

    return {
      url,
      status: issues.length > 0 ? 'error' : 'success',
      statusCode: response.status,
      validXml,
      urlCount,
      issues: issues.length > 0 ? issues : undefined,
    };

  } catch (error) {
    console.error(`Error checking ${url}:`, error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      url,
      status: 'error',
      error: errorMessage,
    };
  }
}

async function checkSitemapUrls(sitemapUrl: string, maxToCheck: number = 10): Promise<{ checked: number; errors: number; sample: string[] }> {
  try {
    const response = await fetch(sitemapUrl);
    const text = await response.text();
    
    // Extract URLs from sitemap
    const locMatches = text.match(/<loc>(.*?)<\/loc>/g);
    if (!locMatches) {
      return { checked: 0, errors: 0, sample: [] };
    }

    const urls = locMatches
      .map(match => match.replace(/<\/?loc>/g, ''))
      .slice(0, maxToCheck);

    const errors: string[] = [];
    
    for (const url of urls) {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        if (!response.ok) {
          errors.push(`${url} returned ${response.status}`);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        errors.push(`${url} failed: ${errorMessage}`);
      }
    }

    return {
      checked: urls.length,
      errors: errors.length,
      sample: errors.slice(0, 5),
    };

  } catch (error) {
    console.error('Error checking sitemap URLs:', error);
    return { checked: 0, errors: 0, sample: [] };
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse query params to check if we should save results
    const url = new URL(req.url);
    const saveResults = url.searchParams.get('save') === 'true';
    const triggeredBy = url.searchParams.get('triggered_by') || 'manual';
    
    // Check edge functions directly to avoid Netlify redirect issues
    const projectRef = Deno.env.get('SUPABASE_URL')?.match(/https:\/\/([^.]+)/)?.[1] || 'sgkjunusitiusmgxufdu';
    const edgeFunctionBase = `https://${projectRef}.supabase.co/functions/v1`;
    
    const sitemaps = [
      { url: `${edgeFunctionBase}/sitemap-index`, name: 'sitemap-index.xml' },
      { url: `${edgeFunctionBase}/sitemap`, name: 'sitemap.xml' },
      { url: `${edgeFunctionBase}/image-sitemap`, name: 'image-sitemap.xml' },
    ];

    console.log('Starting sitemap monitoring check...');
    
    const results: SitemapCheck[] = [];
    
    for (const sitemap of sitemaps) {
      const check = await checkSitemapUrl(sitemap.url);
      // Use the friendly name for display
      check.url = sitemap.name;
      results.push(check);
    }

    const summary = {
      totalChecked: results.length,
      successful: results.filter(r => r.status === 'success').length,
      errors: results.filter(r => r.status === 'error').length,
      timestamp: new Date().toISOString(),
    };

    console.log('Monitoring complete:', summary);

    // Save results to database if requested
    if (saveResults) {
      try {
        const supabase = createClient(
          Deno.env.get('SUPABASE_URL') ?? '',
          Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );

        const { error: insertError } = await supabase
          .from('sitemap_validations')
          .insert({
            total_checked: summary.totalChecked,
            successful: summary.successful,
            errors: summary.errors,
            results: results,
            triggered_by: triggeredBy,
            timestamp: new Date().toISOString(),
          });

        if (insertError) {
          console.error('Error saving validation results:', insertError);
        } else {
          console.log('Validation results saved to database');
        }
      } catch (dbError) {
        console.error('Database error:', dbError);
      }
    }

    return new Response(
      JSON.stringify({ summary, results }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Error in sitemap monitor:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
