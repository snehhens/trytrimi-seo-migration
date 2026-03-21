import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
	if (req.method === "OPTIONS") {
		return new Response("ok", { headers: corsHeaders });
	}

	try {
		const baseUrl = "https://trytrimi.com";

		// Map images to their pages
		const imageMap: Record<string, string[]> = {
			"/": [
				"/hero-image.jpg",
				"/semaglutide-vial.webp",
				"/tirzepatide-vial.webp",
				"/trimi-logo-new.png",
				"/shipping-box.webp",
				"/doctor-support-video.webp",
			],
			"/treatments/semaglutide": ["/semaglutide.jpg", "/semaglutide-compare.webp"],
			"/treatments/tirzepatide": ["/tirzepatide.jpg", "/tirzepatide-slider.webp"],
			"/compare": ["/semaglutide-compare.webp", "/tirzepatide-slider.webp"],
			"/blog/buy-semaglutide-online": ["/og/buy-semaglutide-online.jpg"],
			"/blog/buy-tirzepatide-legally-online": ["/og/buy-tirzepatide-legally-online.jpg"],
			"/blog/buy-tirzepatide-online": ["/og/buy-tirzepatide-online.jpg"],
			"/blog/buying-semaglutide-online-safely": ["/og/buying-semaglutide-online-safely.jpg"],
			"/blog/cheapest-tirzepatide-online": ["/og/cheapest-tirzepatide-online.jpg"],
			"/blog/compounded-semaglutide-safety": ["/og/compounded-semaglutide-safety.jpg"],
			"/blog/compounded-semaglutide-vs-brand-name": ["/og/compounded-semaglutide-vs-brand-name.jpg"],
			"/blog/compounded-tirzepatide-cost": ["/og/compounded-tirzepatide-cost.jpg"],
			"/blog/glp1-complete-guide": ["/og/glp1-complete-guide.jpg"],
			"/blog/how-tirzepatide-works": ["/og/how-tirzepatide-works.jpg"],
			"/blog/how-to-start-semaglutide": ["/og/how-to-start-semaglutide.jpg"],
			"/blog/online-semaglutide-prescription": ["/og/online-semaglutide-prescription.jpg"],
			"/blog/online-semaglutide-weight-loss-programs": ["/og/online-semaglutide-programs.jpg"],
			"/blog/semaglutide-alcohol": ["/og/semaglutide-alcohol.jpg"],
			"/blog/semaglutide-blood-pressure": ["/og/semaglutide-blood-pressure.jpg"],
			"/blog/semaglutide-bone-health": ["/og/semaglutide-bone-health.jpg"],
			"/blog/semaglutide-clinical-results": ["/og/semaglutide-clinical-results.jpg"],
			"/blog/semaglutide-compounding-pharmacy": ["/og/semaglutide-compounding-pharmacy.jpg"],
			"/blog/semaglutide-cost": ["/og/semaglutide-cost.jpg"],
			"/blog/semaglutide-cost-breakdown": ["/og/semaglutide-cost-breakdown.jpg"],
			"/blog/semaglutide-cost-savings": ["/og/semaglutide-cost-savings.jpg"],
			"/blog/semaglutide-diet-plan": ["/og/semaglutide-diet-plan.jpg"],
			"/blog/semaglutide-dosage-guide": ["/og/semaglutide-dosage-guide.jpg"],
			"/blog/semaglutide-dosing-chart": ["/og/semaglutide-dosing-chart.jpg"],
			"/blog/semaglutide-eligibility": ["/og/semaglutide-eligibility.jpg"],
			"/blog/semaglutide-energy-levels": ["/og/semaglutide-energy-levels.jpg"],
			"/blog/semaglutide-exercise": ["/og/semaglutide-exercise.jpg"],
			"/blog/semaglutide-first-month": ["/og/semaglutide-first-month.jpg"],
			"/blog/semaglutide-food-aversions": ["/og/semaglutide-food-aversions.jpg"],
			"/blog/semaglutide-for-diabetes": ["/og/semaglutide-for-diabetes.jpg"],
			"/blog/semaglutide-gut-health": ["/og/semaglutide-gut-health.jpg"],
			"/blog/semaglutide-hair-loss": ["/og/semaglutide-hair-loss.jpg"],
			"/blog/semaglutide-injection-guide": ["/og/semaglutide-injection-guide.jpg"],
			"/blog/semaglutide-injection-site-reactions": ["/og/semaglutide-injection-site-reactions.jpg"],
			"/blog/semaglutide-intermittent-fasting": ["/og/semaglutide-intermittent-fasting.jpg"],
			"/blog/semaglutide-kidney-function": ["/og/semaglutide-kidney-function.jpg"],
			"/blog/semaglutide-longevity": ["/og/semaglutide-longevity.jpg"],
			"/blog/semaglutide-mental-health": ["/og/semaglutide-mental-health.jpg"],
			"/blog/semaglutide-muscle-preservation": ["/og/semaglutide-muscle-preservation.jpg"],
			"/blog/semaglutide-plateau": ["/og/semaglutide-plateau.jpg"],
			"/blog/semaglutide-pregnancy": ["/og/semaglutide-pregnancy.jpg"],
			"/blog/semaglutide-results-timeline": ["/og/semaglutide-results-timeline.jpg"],
			"/blog/semaglutide-side-effects": ["/og/semaglutide-side-effects.jpg"],
			"/blog/semaglutide-skin": ["/og/semaglutide-skin.jpg"],
			"/blog/semaglutide-stopping": ["/og/semaglutide-stopping.jpg"],
			"/blog/semaglutide-stress-cortisol": ["/og/semaglutide-stress-cortisol.jpg"],
			"/blog/semaglutide-thyroid": ["/og/semaglutide-thyroid.jpg"],
			"/blog/semaglutide-vitamin-deficiencies": ["/og/semaglutide-vitamin-deficiencies.jpg"],
			"/blog/semaglutide-vs-ozempic-vs-wegovy": ["/og/semaglutide-vs-ozempic-vs-wegovy.jpg"],
			"/blog/semaglutide-vs-phentermine": ["/og/semaglutide-vs-phentermine.jpg"],
			"/blog/semaglutide-weight-loss-online-cost": ["/og/semaglutide-weight-loss-online-cost.jpg"],
			"/blog/semaglutide-weight-loss-online-guide": ["/og/semaglutide-weight-loss-online-guide.jpg"],
			"/blog/semaglutide-weight-loss-online-reviews": ["/og/semaglutide-weight-loss-online-reviews.jpg"],
			"/blog/semaglutide-weight-loss-online-safety": ["/og/semaglutide-weight-loss-online-safety.jpg"],
			"/blog/semaglutide-weight-loss-results": ["/og/semaglutide-weight-loss-results.jpg"],
			"/blog/semaglutide-without-insurance": ["/og/semaglutide-without-insurance.jpg"],
			"/blog/tirzepatide-appetite-control": ["/og/tirzepatide-appetite-control.jpg"],
			"/blog/tirzepatide-athletic-performance": ["/og/tirzepatide-athletic-performance.jpg"],
			"/blog/tirzepatide-before-after": ["/og/tirzepatide-before-after.jpg"],
			"/blog/tirzepatide-brain-health": ["/og/tirzepatide-brain-health.jpg"],
			"/blog/tirzepatide-cholesterol": ["/og/tirzepatide-cholesterol.jpg"],
			"/blog/tirzepatide-cost-comparison": ["/og/tirzepatide-cost-comparison.jpg"],
			"/blog/tirzepatide-diet-guide": ["/og/tirzepatide-diet-guide.jpg"],
			"/blog/tirzepatide-dosage-guide": ["/og/tirzepatide-dosage-guide.jpg"],
			"/blog/tirzepatide-dosing-chart": ["/og/tirzepatide-dosing-chart.jpg"],
			"/blog/tirzepatide-exercise": ["/og/tirzepatide-exercise.jpg"],
			"/blog/tirzepatide-exercise-timing": ["/og/tirzepatide-exercise-timing.jpg"],
			"/blog/tirzepatide-fatty-liver": ["/og/tirzepatide-fatty-liver.jpg"],
			"/blog/tirzepatide-fertility": ["/og/tirzepatide-fertility.jpg"],
			"/blog/tirzepatide-first-month": ["/og/tirzepatide-first-month.jpg"],
			"/blog/tirzepatide-for-prediabetes": ["/og/tirzepatide-for-prediabetes.jpg"],
			"/blog/tirzepatide-gastric-emptying": ["/og/tirzepatide-gastric-emptying.jpg"],
			"/blog/tirzepatide-heart-health": ["/og/tirzepatide-heart-health.jpg"],
			"/blog/tirzepatide-hormones": ["/og/tirzepatide-hormones.jpg"],
			"/blog/tirzepatide-inflammation": ["/og/tirzepatide-inflammation.jpg"],
			"/blog/tirzepatide-insurance-coverage": ["/og/tirzepatide-insurance-coverage.jpg"],
			"/blog/tirzepatide-joint-pain": ["/og/tirzepatide-joint-pain.jpg"],
			"/blog/tirzepatide-kidney-health": ["/og/tirzepatide-kidney-health.jpg"],
			"/blog/tirzepatide-long-term-use": ["/og/tirzepatide-long-term-use.jpg"],
			"/blog/tirzepatide-maintenance-dose": ["/og/tirzepatide-maintenance-dose.jpg"],
			"/blog/tirzepatide-mechanism-guide": ["/og/tirzepatide-mechanism-guide.jpg"],
			"/blog/tirzepatide-medication-interactions": ["/og/tirzepatide-medication-interactions.jpg"],
			"/blog/tirzepatide-menopause": ["/og/tirzepatide-menopause.jpg"],
			"/blog/tirzepatide-nutrition-absorption": ["/og/tirzepatide-nutrition-absorption.jpg"],
			"/blog/tirzepatide-older-adults": ["/og/tirzepatide-older-adults.jpg"],
			"/blog/tirzepatide-online-prescription": ["/og/tirzepatide-online-prescription.jpg"],
			"/blog/tirzepatide-pcos": ["/og/tirzepatide-pcos.jpg"],
			"/blog/tirzepatide-quick-start": ["/og/tirzepatide-quick-start.jpg"],
			"/blog/tirzepatide-safety": ["/og/tirzepatide-safety.jpg"],
			"/blog/tirzepatide-side-effects": ["/og/tirzepatide-side-effects.jpg"],
			"/blog/tirzepatide-sleep": ["/og/tirzepatide-sleep.jpg"],
			"/blog/tirzepatide-travel-tips": ["/og/tirzepatide-travel-tips.jpg"],
			"/blog/tirzepatide-vs-semaglutide": ["/og/tirzepatide-vs-semaglutide.jpg"],
			"/blog/tirzepatide-water-retention": ["/og/tirzepatide-water-retention.jpg"],
			"/blog/tirzepatide-weight-loss-results": ["/og/tirzepatide-weight-loss-results.jpg"],
			"/blog/understanding-glp1-medications": ["/og/understanding-glp1-medications.jpg"],
			"/blog/weight-loss-injection-costs": ["/og/weight-loss-injection-costs.jpg"],
		};

		let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
		xml +=
			'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

		// Generate URLs with their associated images
		Object.entries(imageMap).forEach(([pageUrl, images]) => {
			xml += "  <url>\n";
			xml += `    <loc>${baseUrl}${pageUrl}</loc>\n`;
			images.forEach((image) => {
				xml += "    <image:image>\n";
				xml += `      <image:loc>${baseUrl}${image}</image:loc>\n`;
				xml += "    </image:image>\n";
			});
			xml += "  </url>\n";
		});

		xml += "</urlset>";

		return new Response(xml, {
			headers: {
				...corsHeaders,
				"Content-Type": "application/xml",
			},
		});
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : "Unknown error";
		return new Response(JSON.stringify({ error: errorMessage }), {
			status: 500,
			headers: { ...corsHeaders, "Content-Type": "application/json" },
		});
	}
});
