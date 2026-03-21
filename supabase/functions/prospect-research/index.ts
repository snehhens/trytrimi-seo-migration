import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url, niche } = await req.json();
    console.log("Researching prospect:", url, "for niche:", niche);

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Fetch the website content
    let websiteContent = "";
    try {
      const siteResponse = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; ProspectBot/1.0)",
        },
      });
      websiteContent = await siteResponse.text();
      // Limit content size to avoid token limits
      websiteContent = websiteContent.slice(0, 10000);
    } catch (error) {
      console.error("Error fetching website:", error);
      websiteContent = "Unable to fetch website content";
    }

    // Use AI to analyze the website and extract information
    const systemPrompt = `You are a backlink prospect research assistant for a weight loss medication website (semaglutide/tirzepatide). 
Analyze the provided website content and extract:
1. Contact emails (look for contact@, info@, editor@, admin@, etc.)
2. Estimated domain authority (1-100 scale based on content quality, breadth, professionalism)
3. Outreach opportunity type (guest post, resource page, broken link, partnership, review)
4. Relevant content topics that align with weight loss, GLP-1 medications, health, wellness
5. Why this site would be a good backlink prospect
6. Suggested outreach angle

Respond in JSON format with these exact fields:
{
  "emails": ["email1@domain.com", "email2@domain.com"],
  "estimatedDA": 65,
  "outreachType": "guest post",
  "relevantTopics": ["weight loss", "health supplements"],
  "recommendation": "This site publishes health articles and has a resource page...",
  "outreachAngle": "Offer to write a guest post about GLP-1 medications..."
}`;

    const userPrompt = `Website URL: ${url}
Target Niche: ${niche || "weight loss medications, GLP-1, semaglutide, tirzepatide, health"}

Website Content:
${websiteContent}

Extract contact information and analyze this prospect.`;

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error("AI gateway error:", aiResponse.status, errorText);
      throw new Error(`AI gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const analysisText = aiData.choices[0].message.content;
    console.log("AI Analysis:", analysisText);

    // Parse the JSON response
    let analysis;
    try {
      // Extract JSON from markdown code blocks if present
      const jsonMatch = analysisText.match(/```json\n([\s\S]*?)\n```/) || 
                       analysisText.match(/```\n([\s\S]*?)\n```/) ||
                       [null, analysisText];
      analysis = JSON.parse(jsonMatch[1] || analysisText);
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      // Fallback structure
      analysis = {
        emails: [],
        estimatedDA: 50,
        outreachType: "general",
        relevantTopics: [],
        recommendation: analysisText,
        outreachAngle: "General partnership inquiry",
      };
    }

    return new Response(
      JSON.stringify({
        success: true,
        prospect: {
          url,
          ...analysis,
        },
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in prospect-research function:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
