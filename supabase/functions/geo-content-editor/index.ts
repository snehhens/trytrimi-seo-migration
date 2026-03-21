import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContentRequest {
  content: string;
  targetKeyword: string;
  mode: "enhance" | "qna" | "entities" | "schema" | "full";
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { content, targetKeyword, mode } = await req.json() as ContentRequest;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = buildSystemPrompt(mode, targetKeyword);
    
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Original content:\n\n${content}\n\nTarget keyword: ${targetKeyword}` }
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("GEO editor error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function buildSystemPrompt(mode: string, targetKeyword: string): string {
  const basePrompt = `You are a GEO (Generative Engine Optimization) content expert. Your goal is to enhance content for both traditional search engines and AI-powered search (like Perplexity, ChatGPT, Google AI Overviews).

Core GEO principles to apply:
1. Use authoritative, confident language (avoid hedging words like "might", "could", "possibly")
2. Include specific statistics, data points, and citations
3. Structure content with clear headings and logical flow
4. Add semantic LSI (Latent Semantic Indexing) keywords naturally
5. Include entity references that can be linked to knowledge bases
6. Optimize for featured snippets with concise, direct answers

Target keyword: "${targetKeyword}"
`;

  switch (mode) {
    case "enhance":
      return `${basePrompt}

TASK: Enhance the content with GEO best practices:
- Rewrite with authoritative, confident language
- Add relevant LSI keywords naturally (provide list at end)
- Include specific data points and statistics where appropriate
- Improve readability and scannability
- Maintain original meaning and intent

OUTPUT FORMAT:
1. Enhanced content (with LSI keywords highlighted in **bold**)
2. ---LSI KEYWORDS---
   List of 10-15 LSI keywords used
3. ---GEO SCORE---
   Score out of 100 with brief explanation`;

    case "qna":
      return `${basePrompt}

TASK: Convert content to voice-search optimized Q&A format:
- Create 5-8 question-answer pairs from the content
- Questions should be natural, conversational queries people ask voice assistants
- Answers should be concise (40-60 words) and direct
- Include the target keyword naturally in questions and answers
- Format for featured snippet potential

OUTPUT FORMAT:
## Voice-Search Optimized Q&A

### Q: [Natural question]
**A:** [Direct, concise answer]

(Repeat for each Q&A pair)

---SCHEMA MARKUP---
Provide FAQPage schema JSON-LD for these Q&As`;

    case "entities":
      return `${basePrompt}

TASK: Identify and link entities to knowledge bases:
- Extract all named entities (people, organizations, medical terms, products)
- Provide Wikidata entity IDs where applicable
- Suggest internal linking opportunities to existing site pages
- Identify medical/scientific terms that need authoritative citations

OUTPUT FORMAT:
## Entity Analysis

### Named Entities
| Entity | Type | Wikidata ID | Suggested Link |
|--------|------|-------------|----------------|
| ... | ... | ... | ... |

### Medical/Scientific Terms
| Term | Definition | Citation Source |
|------|------------|-----------------|
| ... | ... | ... |

### Internal Linking Opportunities
- [suggested anchor text] → /suggested-path`;

    case "schema":
      return `${basePrompt}

TASK: Generate structured data markup for the content:
- Identify appropriate schema types (Article, FAQPage, HowTo, MedicalWebPage, Product, etc.)
- Generate complete JSON-LD markup
- Include all relevant properties
- Ensure medical content has proper MedicalAudience targeting

OUTPUT FORMAT:
## Recommended Schema Types
1. [Schema type] - [reason]

## JSON-LD Markup
\`\`\`json
[Complete schema markup]
\`\`\`

## Implementation Notes
- [Any special considerations]`;

    case "full":
      return `${basePrompt}

TASK: Provide comprehensive GEO optimization:
1. Rewrite content with authoritative language and LSI keywords
2. Create voice-search Q&A section
3. Entity analysis with Wikidata linking
4. Generate structured data markup
5. Provide optimization score and recommendations

OUTPUT FORMAT:
## 1. Enhanced Content
[Rewritten content with **LSI keywords** highlighted]

## 2. LSI Keywords Used
[List of semantic keywords]

## 3. Voice-Search Q&A
[3-5 Q&A pairs in voice-friendly format]

## 4. Entity Linking
[Table of entities with Wikidata IDs]

## 5. Schema Markup
\`\`\`json
[JSON-LD structured data]
\`\`\`

## 6. GEO Score: X/100
- Authoritative language: X/20
- LSI keyword density: X/20
- Entity coverage: X/20
- Schema completeness: X/20
- Voice optimization: X/20

## 7. Additional Recommendations
[Bullet points for further optimization]`;

    default:
      return basePrompt;
  }
}
