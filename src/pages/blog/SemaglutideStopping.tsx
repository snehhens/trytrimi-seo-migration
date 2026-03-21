import { Helmet } from "@/compat/react-helmet-async";
import { Link } from "@/compat/react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, AlertTriangle, TrendingUp } from "lucide-react";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/semaglutide-stopping.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";

const SemaglutideStopping = () => {
	const postMeta = getBlogPostMeta("semaglutide-stopping");
	const publishDate = postMeta?.date || "2025-02-03";
	const readTime = postMeta?.readTime || "14 min";
	const clusterNav = getClusterNavigation("semaglutide-stopping");

	return (
		<>
			<Helmet>
				<title>Stopping Semaglutide: Weight Regain, Withdrawal & What to Expect | Trimi</title>
				<meta
					name="description"
					content="What happens when you stop taking semaglutide? Learn about weight regain risks, withdrawal symptoms, how to maintain results, and strategies for discontinuing treatment safely."
				/>
				<meta
					name="keywords"
					content="stopping semaglutide, semaglutide weight regain, coming off semaglutide, semaglutide withdrawal, discontinuing semaglutide, after stopping ozempic"
				/>
				<meta name="author" content="Trimi Medical Team" />
				<link rel="canonical" href="https://trytrimi.com/blog/semaglutide-stopping" />

				<meta
					property="og:title"
					content="Stopping Semaglutide: Weight Regain, Withdrawal & What to Expect"
				/>
				<meta
					property="og:description"
					content="Comprehensive guide to discontinuing semaglutide, including weight regain prevention and maintenance strategies."
				/>
				<meta property="og:type" content="article" />
				<meta property="og:url" content="https://trytrimi.com/blog/semaglutide-stopping" />
				<meta property="article:published_time" content="2025-02-15T09:00:00Z" />
				<meta property="article:author" content="Trimi Medical Team" />
				<meta property="article:section" content="Weight Loss Management" />

				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "MedicalWebPage",
						headline: "Stopping Semaglutide: Weight Regain, Withdrawal & What to Expect",
						description: "Guide to discontinuing semaglutide and maintaining weight loss",
						datePublished: "2025-02-15T09:00:00Z",
						dateModified: "2025-02-15T09:00:00Z",
						author: {
							"@type": "Organization",
							name: "Trimi Medical Team",
						},
					})}
				</script>
			</Helmet>

			<Navigation />

			<main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
				<article className="container max-w-4xl mx-auto px-4 py-12">
					<Link
						to="/blog"
						className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Blog
					</Link>

					<header className="mb-12">
						<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
							Stopping Semaglutide: Weight Regain & What to Expect
						</h1>

						<div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
							<span className="flex items-center">
								<Calendar className="mr-2 h-4 w-4" />
								<time dateTime={publishDate}>
									{new Date(publishDate).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</time>
							</span>
							<span className="flex items-center">
								<Clock className="mr-2 h-4 w-4" />
								{readTime} read
							</span>
						</div>

						<p className="text-xl text-muted-foreground leading-relaxed">
							Considering stopping semaglutide? Understanding what happens when you discontinue
							treatment—and how to maintain your results—is crucial for long-term success. Here's
							everything you need to know.
						</p>
					</header>

					<div className="prose prose-lg max-w-none space-y-8">
						<section>
							<h2 className="text-3xl font-bold mb-4 text-foreground">
								The Reality of Stopping Semaglutide
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Semaglutide is highly effective for weight loss, but it's not a permanent solution
								in itself. The medication works by suppressing appetite and slowing gastric
								emptying—effects that reverse when you stop taking it.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								Clinical trials paint a clear picture: Most people who stop semaglutide regain a
								significant portion of their lost weight within 12 months. The STEP 1 extension
								study showed participants regained about two-thirds of their lost weight within a
								year of discontinuation.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								However, this doesn't mean stopping is impossible or that maintenance is futile.
								With proper planning and lifestyle changes, some people successfully maintain their
								weight loss after discontinuing. The key is understanding what you're up against and
								preparing accordingly.
							</p>
						</section>

						<Card className="p-6 bg-amber-500/10 border-amber-500/20">
							<h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
								<AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
								Weight Regain Statistics After Stopping
							</h3>
							<div className="space-y-3 text-muted-foreground">
								<div className="border-b border-border pb-3">
									<p className="font-semibold text-foreground mb-1">STEP 1 Extension Study:</p>
									<p>Participants regained 67% of lost weight within 52 weeks of stopping</p>
								</div>
								<div className="border-b border-border pb-3">
									<p className="font-semibold text-foreground mb-1">STEP 4 Withdrawal Trial:</p>
									<p>
										Those switched to placebo regained 7% body weight vs. 1.9% loss in continued
										group
									</p>
								</div>
								<div>
									<p className="font-semibold text-foreground mb-1">Average Timeline:</p>
									<p>Most weight regain occurs within first 6-12 months after discontinuation</p>
								</div>
							</div>
						</Card>

						<section>
							<h2 className="text-3xl font-bold mb-4 text-foreground">
								What Happens When You Stop
							</h2>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Week 1-2: Initial Adjustment
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Semaglutide has a half-life of about 7 days, meaning it takes roughly 4-5 weeks to
								completely clear from your system. During the first two weeks, you still have
								significant medication levels.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Appetite changes:</strong> You may notice increased hunger, but it's
									typically gradual
								</li>
								<li>
									<strong>Gastric emptying:</strong> Food starts moving through your digestive
									system faster
								</li>
								<li>
									<strong>Cravings:</strong> Food thoughts and cravings may increase slightly
								</li>
								<li>
									<strong>Weight:</strong> Minimal changes yet; might see 1-3 pounds gain (often
									water weight)
								</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Weeks 3-4: Noticeable Changes
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								As medication levels drop significantly, the protective effects diminish more
								rapidly.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Return of baseline appetite:</strong> Hunger levels return to
									pre-treatment patterns
								</li>
								<li>
									<strong>Faster satiety signals:</strong> Takes more food to feel full compared to
									on-medication
								</li>
								<li>
									<strong>Food focus increases:</strong> Mental preoccupation with food may return
								</li>
								<li>
									<strong>Weight trends:</strong> May gain 3-7 pounds, combination of water
									retention and actual weight
								</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Months 2-3: Critical Period
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								This is when most people face their biggest challenges. The medication is completely
								out of your system, and old eating patterns can easily re-emerge.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Appetite fully restored:</strong> No more medication-induced suppression
								</li>
								<li>
									<strong>Metabolic adaptation:</strong> Your metabolism may have slowed from weight
									loss
								</li>
								<li>
									<strong>Behavioral challenges:</strong> Must rely entirely on learned habits
								</li>
								<li>
									<strong>Weight trajectory:</strong> Without intervention, expect 5-10 pounds gain
								</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Months 4-12: Long-Term Pattern
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								The trajectory set in months 2-3 typically continues. Those who've implemented
								strong lifestyle changes plateau; those who haven't continue gradual regain.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>New normal established:</strong> You've adapted to life without medication
								</li>
								<li>
									<strong>Habits solidified:</strong> Either maintaining or regaining becomes your
									pattern
								</li>
								<li>
									<strong>Metabolic adjustment:</strong> Body has adapted to new weight (whether
									maintained or regained)
								</li>
								<li>
									<strong>Weight outcome:</strong> Highly variable—from full maintenance to complete
									regain
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-3xl font-bold mb-4 text-foreground">Why Weight Regain Happens</h2>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								1. Loss of Appetite Suppression
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								The most obvious reason. Semaglutide powerfully reduces hunger and increases
								satiety. When it's gone, your natural appetite returns—often with a vengeance. Your
								brain's hunger hormones (ghrelin, leptin) revert to their baseline patterns, which
								for many people means strong hunger signals.
							</p>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								2. Metabolic Adaptation
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Also called "adaptive thermogenesis," this is your body's response to weight loss.
								Your metabolism slows to conserve energy—a survival mechanism. Studies show
								metabolic rate can decrease by 10-15% beyond what's expected from simply weighing
								less.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								This means you need fewer calories to maintain your new weight than someone who
								naturally weighs that amount. It's not fair, but it's biology.
							</p>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">3. Hormonal Changes</h3>
							<p className="text-muted-foreground leading-relaxed">
								Weight loss triggers multiple hormonal changes that promote weight regain:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>Increased ghrelin (hunger hormone)</li>
								<li>Decreased leptin (satiety hormone)</li>
								<li>Reduced thyroid hormone</li>
								<li>Changes in insulin sensitivity</li>
								<li>Alterations in stress hormones</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								4. Return of Old Behaviors
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Many people rely heavily on semaglutide's appetite suppression rather than
								developing sustainable eating habits. When the medication stops, old
								patterns—emotional eating, large portions, frequent snacking—often return.
							</p>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								5. Psychological Factors
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								The mental game is huge. After stopping, some people experience:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>Loss of the psychological support the medication provided</li>
								<li>Anxiety about weight regain (which can trigger stress eating)</li>
								<li>"Screw it" mentality after initial regain</li>
								<li>Disappointment that maintenance requires ongoing effort</li>
							</ul>
						</section>

						<section>
							<h2 className="text-3xl font-bold mb-4 text-foreground">
								Strategies to Maintain Weight Loss
							</h2>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Before You Stop: Transition Planning
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Ideally, plan your discontinuation rather than stopping abruptly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Gradual taper:</strong> Consider reducing to a lower maintenance dose for
									2-3 months first
								</li>
								<li>
									<strong>Habit solidification:</strong> Spend final months on medication building
									rock-solid habits
								</li>
								<li>
									<strong>Support system:</strong> Establish accountability (dietitian, coach,
									support group)
								</li>
								<li>
									<strong>Realistic expectations:</strong> Accept some regain may occur; aim to keep
									50-75% of loss
								</li>
								<li>
									<strong>Emergency plan:</strong> Decide criteria for restarting if needed
								</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">Dietary Strategies</h3>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Calorie awareness:</strong> Track intake for first 3-6 months after
									stopping
								</li>
								<li>
									<strong>Protein priority:</strong> High protein (0.7-1g per pound of goal weight)
									increases satiety
								</li>
								<li>
									<strong>Volumetrics approach:</strong> Fill up on low-calorie, high-volume foods
									(vegetables, lean proteins)
								</li>
								<li>
									<strong>Meal timing:</strong> Eat at consistent times; avoid grazing
								</li>
								<li>
									<strong>Limit ultraprocessed foods:</strong> These bypass satiety signals
								</li>
								<li>
									<strong>Mindful eating:</strong> Eat slowly, without screens, paying attention to
									fullness cues
								</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Exercise Non-Negotiables
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Physical activity becomes absolutely critical for maintenance:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Resistance training:</strong> 3-4x weekly to preserve muscle mass and
									metabolism
								</li>
								<li>
									<strong>Daily movement:</strong> Aim for 10,000+ steps
								</li>
								<li>
									<strong>NEAT increase:</strong> Non-exercise activity thermogenesis—take stairs,
									park far, fidget more
								</li>
								<li>
									<strong>Cardiovascular exercise:</strong> 150+ minutes weekly moderate intensity
								</li>
								<li>
									<strong>Consistency over intensity:</strong> Sustainable routine beats sporadic
									intense workouts
								</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">Behavioral Tools</h3>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Daily weigh-ins:</strong> Catch regain early (5-pound rule: if you gain 5
									pounds, take action)
								</li>
								<li>
									<strong>Meal planning:</strong> Plan and prep meals to avoid impulsive eating
								</li>
								<li>
									<strong>Environment control:</strong> Don't keep trigger foods at home
								</li>
								<li>
									<strong>Stress management:</strong> Address emotional eating triggers
								</li>
								<li>
									<strong>Sleep priority:</strong> 7-9 hours—poor sleep increases appetite hormones
								</li>
								<li>
									<strong>Social support:</strong> Join maintenance groups or work with professional
								</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">Metabolic Adaptations</h3>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Accept lower calorie needs:</strong> You may need 200-300 fewer calories
									than expected
								</li>
								<li>
									<strong>Reverse dieting:</strong> Slowly increase calories to find your
									maintenance level
								</li>
								<li>
									<strong>Metabolic flexibility:</strong> Vary calories day-to-day (calorie cycling)
								</li>
								<li>
									<strong>Refeed days:</strong> Occasional higher-calorie days may help metabolism
								</li>
							</ul>
						</section>

						<Card className="p-6 bg-primary/5 border-primary/20">
							<h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
								<TrendingUp className="mr-2 h-5 w-5 text-primary" />
								Success Stories: Who Maintains and Why
							</h3>
							<p className="text-muted-foreground mb-4">
								Research shows successful maintainers share common traits:
							</p>
							<ul className="space-y-2 text-muted-foreground">
								<li>✓ Regular self-monitoring (daily weigh-ins, food tracking)</li>
								<li>✓ High physical activity levels (60-90 min daily)</li>
								<li>✓ Eating breakfast consistently</li>
								<li>✓ Limiting TV/screen time</li>
								<li>✓ Consistent eating patterns (weekdays and weekends)</li>
								<li>✓ Catching regain early and responding quickly</li>
								<li>✓ Ongoing support system or professional guidance</li>
							</ul>
							<p className="text-sm text-muted-foreground mt-4 italic">
								*Based on National Weight Control Registry data of successful weight loss
								maintainers
							</p>
						</Card>

						<section>
							<h2 className="text-3xl font-bold mb-4 text-foreground">
								When to Consider Restarting
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								There's no shame in restarting semaglutide. Many people use it cyclically or return
								to it after attempting maintenance. Consider restarting if:
							</p>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">Clear Indicators</h3>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>You've regained more than 10-15% of lost weight despite consistent effort</li>
								<li>Hunger and cravings are unmanageable despite lifestyle strategies</li>
								<li>Health markers worsen (blood sugar, blood pressure, cholesterol)</li>
								<li>Quality of life significantly impacted by constant food preoccupation</li>
								<li>You're applying all maintenance strategies but still struggling</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Long-Term Medication Use
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Emerging evidence suggests treating obesity as a chronic disease requiring long-term
								medication may be most effective for many people. There's growing acceptance that
								ongoing GLP-1 therapy—like ongoing medication for hypertension or diabetes—is
								appropriate for many patients.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								Discuss with your provider whether low-dose maintenance therapy might be right for
								you rather than stopping completely.
							</p>
						</section>

						<section>
							<h2 className="text-3xl font-bold mb-4 text-foreground">
								Withdrawal and Side Effects from Stopping
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Good news: Semaglutide doesn't cause physical withdrawal symptoms like some
								medications. You won't experience tremors, sweating, or dangerous effects from
								stopping.
							</p>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								What You Might Experience
							</h3>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Increased appetite:</strong> Expected and normal
								</li>
								<li>
									<strong>More frequent hunger:</strong> As gastric emptying speeds up
								</li>
								<li>
									<strong>Mood changes:</strong> Some people report irritability or low mood (likely
									related to food restriction frustration)
								</li>
								<li>
									<strong>Fatigue initially:</strong> As your body adjusts to processing food
									differently
								</li>
								<li>
									<strong>Digestive changes:</strong> GI system returns to baseline (constipation
									may resolve, but some experience opposite)
								</li>
							</ul>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Blood Sugar Considerations
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								If you have type 2 diabetes, stopping semaglutide will affect blood sugar control.
								Monitor closely and work with your provider to adjust other diabetes medications as
								needed. Never stop semaglutide without provider guidance if you're using it for
								diabetes.
							</p>
						</section>

						<section>
							<h2 className="text-3xl font-bold mb-4 text-foreground">Alternative Approaches</h2>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">Maintenance Dosing</h3>
							<p className="text-muted-foreground leading-relaxed">
								Instead of stopping completely, consider reducing to the lowest effective dose. Some
								people maintain successfully on 0.5 mg or 1 mg weekly rather than 2.4 mg.
							</p>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">Intermittent Use</h3>
							<p className="text-muted-foreground leading-relaxed">
								Some patients use semaglutide cyclically—on for 6-12 months, off for 3-6 months,
								then back on if needed. This isn't officially studied but is practiced by some
								providers.
							</p>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Transitioning to Other Medications
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Options like phentermine/topiramate, naltrexone/bupropion, or orlistat work
								differently than GLP-1s and might help with maintenance. Discuss with your provider.
							</p>

							<h3 className="text-2xl font-semibold mb-3 text-foreground">
								Comprehensive Support Programs
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Enrolling in structured weight maintenance programs significantly improves success
								rates. Look for programs offering:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>Regular check-ins with professionals</li>
								<li>Accountability and support groups</li>
								<li>Nutrition and exercise guidance</li>
								<li>Behavioral therapy components</li>
							</ul>
						</section>

						<section>
							<h2 className="text-3xl font-bold mb-4 text-foreground">The Bottom Line</h2>
							<p className="text-muted-foreground leading-relaxed">
								Stopping semaglutide is challenging, and most people experience some weight regain.
								This isn't failure—it's the expected biological response to discontinuing a powerful
								medication that suppresses appetite.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								However, with proper planning, strong habits, and ongoing vigilance, many people
								successfully maintain a significant portion of their weight loss. The key is
								realistic expectations, early intervention if regain starts, and willingness to
								restart medication if needed.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								Increasingly, medical professionals view obesity as a chronic disease requiring
								ongoing management—whether through continued medication, lifestyle interventions, or
								both. There's no shame in long-term medication use if it improves your health and
								quality of life.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								Discuss your goals and concerns with your healthcare provider to develop a
								personalized plan that works for you, whether that's stopping completely,
								maintaining on a lower dose, or committing to long-term therapy.
							</p>
						</section>

						<section className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
							<h3 className="text-lg font-semibold mb-3 text-foreground">Medical Disclaimer</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								This article is for informational purposes only and does not constitute medical
								advice. Never stop taking semaglutide without consulting your healthcare provider,
								especially if you're using it for type 2 diabetes. Decisions about discontinuing
								medication should be made in partnership with your healthcare team based on your
								individual circumstances, health status, and treatment goals.
							</p>
						</section>

						<section className="mt-8">
							<h3 className="text-lg font-semibold mb-3 text-foreground">References</h3>
							<ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
								<li>
									Rubino D, et al. Effect of Weekly Subcutaneous Semaglutide vs Daily Liraglutide on
									Body Weight in Adults With Overweight or Obesity Without Diabetes: The STEP 8
									Randomized Clinical Trial. JAMA. 2022;327(2):138-150.
								</li>
								<li>
									Wilding JPH, et al. Weight regain and cardiometabolic effects after withdrawal of
									semaglutide: The STEP 1 trial extension. Diabetes Obes Metab.
									2022;24(8):1553-1564.
								</li>
								<li>
									Rubino DM, et al. Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo
									on Weight Loss Maintenance in Adults With Overweight or Obesity: The STEP 4
									Randomized Clinical Trial. JAMA. 2021;325(14):1414-1425.
								</li>
								<li>
									Wing RR, Phelan S. Long-term weight loss maintenance. Am J Clin Nutr. 2005;82(1
									Suppl):222S-225S.
								</li>
								<li>
									Thomas JG, et al. Weight-Loss Maintenance for 10 Years in the National Weight
									Control Registry. Am J Prev Med. 2014;46(1):17-23.
								</li>
							</ol>
						</section>
					</div>

					<div className="mt-12 flex flex-col sm:flex-row gap-4">
						<Link to="/treatments/semaglutide" className="flex-1">
							<Button size="lg" className="w-full">
								Explore Semaglutide Options
							</Button>
						</Link>
						<Link to="/blog" className="flex-1">
							<Button size="lg" variant="outline" className="w-full">
								More Articles
							</Button>
						</Link>
					</div>
				</article>

				<TopicClusterNav
					pillarPage={clusterNav.pillarPage}
					hubPage={clusterNav.hubPage}
					relatedArticles={clusterNav.relatedInCluster}
					topic="Semaglutide"
				/>
			</main>

			<Footer />
		</>
	);
};

export default SemaglutideStopping;
