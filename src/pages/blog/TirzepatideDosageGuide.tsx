import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Helmet } from "@/compat/react-helmet-async";
import { getBlogPostMeta } from "@/utils/getBlogPostMeta";
import ogImage from "@/assets/og/tirzepatide-dosage-guide.jpg";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { PeopleAlsoRead } from "@/components/blog/PeopleAlsoRead";
import { getPeopleAlsoRead } from "@/utils/blogLinks";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { MedicalReview } from "@/components/blog/MedicalReview";
import { BlogFAQSchema } from "@/components/blog/BlogFAQSchema";
import { InternalLink } from "@/components/blog/InternalLink";
import { getModifiedDate } from "@/utils/getModifiedDate";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { ContentFreshnessIndicator } from "@/components/ContentFreshnessIndicator";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { HowToSchema } from "@/components/seo/HowToSchema";

const TirzepatideDosageGuide = () => {
	const postMeta = getBlogPostMeta("tirzepatide-dosage-guide");
	const publishDate = postMeta?.date || "2024-02-20";
	const modifiedDate = getModifiedDate("tirzepatide-dosage-guide", publishDate);
	const readTime = postMeta?.readTime || "9 min";
	const peopleAlsoRead = getPeopleAlsoRead("tirzepatide-dosage-guide");

	return (
		<div className="min-h-screen bg-background">
			<HowToSchema 
				name="How to Use Tirzepatide for Weight Loss"
				description="Complete guide to starting and titrating tirzepatide doses for optimal weight loss results"
				totalTime="P24W"
				steps={[
					{
						name: "Start with 1.5mg weekly",
						text: "Begin treatment with 1.5mg subcutaneous injection once weekly for 4 weeks to minimize side effects and allow your body to adjust."
					},
					{
						name: "Increase to 3mg",
						text: "After 4 weeks, increase to 3mg weekly for the next 4 weeks. Monitor your response and side effects."
					},
					{
						name: "Progress to 6mg",
						text: "At week 9, increase to 6mg weekly for 4 weeks. Most people start seeing noticeable appetite reduction."
					},
					{
						name: "Titrate to 9mg",
						text: "At week 13, increase to 9mg weekly for 4 weeks. Weight loss typically accelerates at this dose."
					},
					{
						name: "Advance to 11mg",
						text: "At week 17, increase to 11mg weekly for 4 weeks. Many patients achieve their goals at this dose."
					},
					{
						name: "Consider 13.5mg maximum",
						text: "If additional weight loss is needed, increase to the maximum dose of 13.5mg weekly. Consult your provider."
					}
				]}
			/>
			<Helmet>
				<title>Tirzepatide Dosage Guide: Complete Injection & Administration Tips</title>
				<meta
					name="description"
					content="Complete tirzepatide dosing schedule from 1.5mg to 13.5mg. Injection techniques, side effect management, and optimization tips for best results."
				/>
				<meta
					name="keywords"
					content="tirzepatide dosage, tirzepatide schedule, how to inject tirzepatide, mounjaro dosing, tirzepatide titration"
				/>
				<link rel="canonical" href="https://trytrimi.com/blog/tirzepatide-dosage-guide" />
				<meta property="og:title" content="Tirzepatide Dosage & Administration Guide" />
				<meta
					property="og:description"
					content="Everything you need to know about tirzepatide dosing and injections."
				/>
				<meta property="og:url" content="https://trytrimi.com/blog/tirzepatide-dosage-guide" />
		</Helmet>
		
		<QAPageSchema 
			mainEntityName="Tirzepatide Dosage Questions"
			questions={[
				{
					question: "What is the starting dose of tirzepatide?",
					answer: "The starting dose is 1.5mg once weekly for the first 4 weeks. This gradual start helps minimize side effects while your body adjusts. The dose increases every 4 weeks: 1.5mg → 3mg → 6mg → 9mg → 11mg → 13.5mg (maximum dose)."
				},
				{
					question: "How long does it take to reach the maximum dose of tirzepatide?",
					answer: "It takes 20-24 weeks (5-6 months) to reach the maximum dose of 13.5mg when following the standard titration schedule. Some people achieve their weight loss goals at lower doses (9mg or 11mg) and may not need to increase to the maximum."
				},
				{
					question: "Where should I inject tirzepatide?",
					answer: "Inject tirzepatide subcutaneously (under the skin) in your abdomen, thigh, or upper arm. Rotate injection sites each week to prevent irritation. The abdomen typically has the best absorption and least discomfort."
				},
				{
					question: "What if I'm experiencing side effects at my current dose?",
					answer: "You can stay at your current dose for an additional 4 weeks before increasing to allow your body more time to adjust. Contact your healthcare provider if side effects are severe or don't improve. They may recommend staying at your current dose longer or adjusting your treatment plan."
				},
				{
					question: "Can I split my weekly dose into smaller amounts?",
					answer: "No, tirzepatide must be taken as a single weekly injection. Do not split the dose or inject more frequently than once per week. The medication is formulated for once-weekly dosing to maintain stable therapeutic levels."
				},
				{
					question: "What's the best day of the week to inject tirzepatide?",
					answer: "Choose a day that works best for your schedule and stick with it. Many people prefer Saturday or Sunday so they can manage any temporary side effects on the weekend. The key is consistency—inject on the same day each week."
				}
			]}
		/>
		
		<Navigation />

			<BlogBreadcrumb
				category="Tirzepatide"
				title="Tirzepatide Dosage Guide"
				url="/blog/tirzepatide-dosage-guide"
			/>

			<article className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<header className="mb-12">
							<div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
								<span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium">
									How-To
								</span>
								<span className="flex items-center gap-1">
									<Calendar className="h-4 w-4" />
									February 20, 2024
								</span>
								<span className="flex items-center gap-1">
									<Clock className="h-4 w-4" />9 min read
								</span>
							</div>

							<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
								Tirzepatide Dosage and Administration: Everything You Need to Know
							</h1>

							<p className="text-xl text-muted-foreground mb-6">
								A comprehensive guide to tirzepatide dosing schedules, injection techniques, and
								optimizing your treatment for best results.
							</p>

							<LastUpdated publishDate={publishDate} modifiedDate={modifiedDate} />
							
							<div className="mb-6">
								<ContentFreshnessIndicator 
									lastModified={modifiedDate}
									publishDate={publishDate}
									showBadge={true}
								/>
							</div>

							<MedicalReview
								reviewerName="Dr. Sarah Chen"
								credentials="MD, Board Certified in Endocrinology"
								reviewDate={modifiedDate}
								specialty="Endocrinology & Metabolic Disorders"
							/>
						</header>

						<div className="prose prose-lg max-w-none">
							<section className="mb-12">
								<h2 className="text-3xl font-bold text-foreground mb-4">
									The Tirzepatide Dosing Schedule (And Why It's So Slow)
								</h2>
								<p className="text-muted-foreground mb-4">
									Tirzepatide isn't like taking an antibiotic where you start at the full dose right
									away. Instead, you're going to slowly work your way up over several months. It
									might seem frustratingly slow, but there's actually a good reason for this
									approach—it dramatically cuts down on the nasty side effects.
								</p>
								<p className="text-muted-foreground mb-4">
									Here's the thing: if everyone jumped straight to the max dose, most people would
									spend their first few weeks feeling pretty miserable with nausea and stomach
									issues. The slow ramp-up lets your digestive system adapt gradually while still
									getting you excellent weight loss results in the end.
								</p>
							</section>

							<Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
								<h3 className="text-2xl font-bold text-foreground mb-4">
									Standard Dosing Schedule
								</h3>
							<div className="space-y-4 text-muted-foreground">
									<div>
										<h4 className="font-bold text-foreground">Weeks 1-4: 1.5mg once weekly</h4>
										<p className="text-sm mt-1">
											Starting dose for acclimation - not expected to produce maximum weight loss
										</p>
									</div>
									<div>
										<h4 className="font-bold text-foreground">Weeks 5-8: 3mg once weekly</h4>
										<p className="text-sm mt-1">
											First increase - body continues adapting to medication
										</p>
									</div>
									<div>
										<h4 className="font-bold text-foreground">Weeks 9-12: 6mg once weekly</h4>
										<p className="text-sm mt-1">
											Therapeutic increase - many patients start seeing noticeable appetite suppression
										</p>
									</div>
									<div>
										<h4 className="font-bold text-foreground">Weeks 13-16: 9mg once weekly</h4>
										<p className="text-sm mt-1">
											Intermediate dose - weight loss typically accelerates
										</p>
									</div>
									<div>
										<h4 className="font-bold text-foreground">Weeks 17-20: 11mg once weekly</h4>
										<p className="text-sm mt-1">Therapeutic dose for many patients</p>
									</div>
									<div>
										<h4 className="font-bold text-foreground">Week 21+: 13.5mg once weekly</h4>
										<p className="text-sm mt-1">
											Maximum maintenance dose - shown to produce an average 22.5% weight loss
										</p>
									</div>
								</div>
							</Card>

							<section className="mb-12">
								<h2 className="text-3xl font-bold text-foreground mb-4">
									How to Inject Tirzepatide
								</h2>
								<p className="text-muted-foreground mb-4">
									Tirzepatide comes in a pre-filled, single-use pen that makes administration
									straightforward. Here's a step-by-step guide:
								</p>

								<div className="space-y-6">
									<div>
										<h4 className="font-bold text-foreground mb-2">1. Prepare Your Supplies</h4>
										<ul className="space-y-2 text-muted-foreground">
											<li>
												• Tirzepatide pen from refrigerator (let warm to room temperature for 30
												minutes)
											</li>
											<li>• Alcohol swab</li>
											<li>• Sharps disposal container</li>
											<li>• Cotton ball or gauze (optional)</li>
										</ul>
									</div>

									<div>
										<h4 className="font-bold text-foreground mb-2">
											2. Choose Your Injection Site
										</h4>
										<p className="text-muted-foreground mb-2">
											Tirzepatide is injected subcutaneously (under the skin) in these areas:
										</p>
										<ul className="space-y-2 text-muted-foreground">
											<li>
												• Abdomen (at least 2 inches away from belly button) - most common site
											</li>
											<li>• Front of thighs - good alternative if abdomen is tender</li>
											<li>• Back of upper arms - may need assistance</li>
										</ul>
										<p className="text-muted-foreground mt-2">
											Rotate injection sites each week to prevent skin irritation and lipodystrophy
											(changes in fat tissue).
										</p>
									</div>

									<div>
										<h4 className="font-bold text-foreground mb-2">3. Administer the Injection</h4>
										<ul className="space-y-2 text-muted-foreground">
											<li>• Wash hands thoroughly with soap and water</li>
											<li>• Clean injection site with alcohol swab and let dry</li>
											<li>• Remove pen cap</li>
											<li>• Pinch skin gently to create a small fold</li>
											<li>• Insert needle at 90-degree angle with a quick motion</li>
											<li>• Press and hold the injection button</li>
											<li>• Keep holding for 10 seconds after injection completes</li>
											<li>• Remove needle and dispose in sharps container</li>
										</ul>
									</div>
								</div>
							</section>

							<section className="mb-12">
								<h2 className="text-3xl font-bold text-foreground mb-4">
									Best Practices for Administration
								</h2>

								<div className="space-y-6">
									<div>
										<h4 className="font-bold text-foreground mb-2">
											Pick a Consistent Day and Time
										</h4>
										<p className="text-muted-foreground">
											Choose the same day each week for your injection. Many people prefer Friday
											evenings or Saturday mornings to manage any potential side effects over the
											weekend. If you need to change your injection day, you can do so as long as
											there are at least 3 days (72 hours) between doses.
										</p>
									</div>

									<div>
										<h4 className="font-bold text-foreground mb-2">Storage Guidelines</h4>
										<ul className="space-y-2 text-muted-foreground">
											<li>• Store unused pens in refrigerator (36°F to 46°F)</li>
											<li>• Do not freeze - discard if pen has been frozen</li>
											<li>• Can be kept at room temperature (up to 86°F) for up to 21 days</li>
											<li>• Keep away from direct heat and light</li>
											<li>• Do not use if solution appears cloudy or discolored</li>
										</ul>
									</div>

									<div>
										<h4 className="font-bold text-foreground mb-2">If You Miss a Dose</h4>
										<p className="text-muted-foreground mb-2">
											Missing a dose occasionally happens. Here's what to do:
										</p>
										<ul className="space-y-2 text-muted-foreground">
											<li>• If less than 4 days late: Take as soon as you remember</li>
											<li>
												• If more than 4 days late: Skip the missed dose and resume your regular
												schedule
											</li>
											<li>• Never double up on doses to make up for a missed one</li>
											<li>• Contact your provider if you miss multiple doses</li>
										</ul>
									</div>
								</div>
							</section>

							<Card className="p-8 mb-12 bg-gradient-to-br from-secondary/5 to-primary/5">
								<h3 className="text-2xl font-bold text-foreground mb-4">
									Managing Side Effects at Each Dose
								</h3>
								<p className="text-muted-foreground mb-4">
									Most side effects occur when increasing to a new dose. Here's how to manage them:
								</p>
								<div className="space-y-4">
									<div>
										<h4 className="font-bold text-foreground mb-2">Nausea Management</h4>
										<ul className="space-y-2 text-muted-foreground">
											<li>• Eat smaller, more frequent meals</li>
											<li>• Avoid high-fat and spicy foods for 2-3 days after injection</li>
											<li>• Stay hydrated with small sips of water throughout the day</li>
											<li>• Consider taking injection before bedtime</li>
											<li>• Ginger tea or peppermint can provide relief</li>
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-foreground mb-2">If Side Effects Are Severe</h4>
										<p className="text-muted-foreground">
											Some patients benefit from slowing the dose escalation. Your provider may
											recommend staying at your current dose for an extra 4 weeks before increasing.
											There's no rush - finding your optimal tolerable dose is more important than reaching the
											maximum quickly.
										</p>
									</div>
								</div>
							</Card>

							<section className="mb-12">
								<h2 className="text-3xl font-bold text-foreground mb-4">
									Finding Your Optimal Maintenance Dose
								</h2>
								<p className="text-muted-foreground mb-4">
									Not everyone needs the maximum 13.5mg dose. Your optimal maintenance dose is the one
									that:
								</p>
								<ul className="space-y-2 text-muted-foreground mb-4">
									<li>• Effectively controls your appetite</li>
									<li>• Produces steady weight loss (1-2 pounds per week)</li>
									<li>• Causes minimal or manageable side effects</li>
									<li>• Fits within your budget</li>
								</ul>
								<p className="text-muted-foreground mb-4">
									Many patients achieve excellent results at 9mg or 11mg. If you're experiencing
									good weight loss and tolerating your current dose well, there may be no need to
									increase further. Work with your healthcare provider to determine the best
									maintenance dose for your individual needs.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-3xl font-bold text-foreground mb-4">
									What to Track During Treatment
								</h2>
								<p className="text-muted-foreground mb-4">
									Keeping records helps you and your provider optimize your treatment:
								</p>
								<ul className="space-y-2 text-muted-foreground mb-4">
									<li>• Weekly weight (same day, same time, same conditions)</li>
									<li>• Body measurements (waist, hips, chest)</li>
									<li>• Side effects and their severity (1-10 scale)</li>
									<li>• Appetite levels throughout the week</li>
									<li>• Energy levels and overall well-being</li>
									<li>• Any unusual symptoms or concerns</li>
								</ul>
								<p className="text-muted-foreground mb-4">
									Many patients find it helpful to track this information in a journal or smartphone
									app. This data becomes invaluable when deciding whether to increase doses or
									adjust your treatment plan.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-3xl font-bold text-foreground mb-4">Long-Term Maintenance</h2>
								<p className="text-muted-foreground mb-4">
									Once you reach your goal weight or optimal maintenance dose, you'll continue with
									regular weekly injections. Research shows that maintaining your dose is crucial
									for keeping weight off - most patients who discontinue tirzepatide regain weight.
								</p>
								<p className="text-muted-foreground mb-4">
									Think of tirzepatide as a long-term treatment for chronic obesity, similar to how
									you'd continue taking medication for high blood pressure or cholesterol. Regular
									follow-ups with your provider (typically every 3-6 months) help ensure continued
									success and monitor for any concerns.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-3xl font-bold text-foreground mb-4">
									Traveling with Tirzepatide
								</h2>
								<p className="text-muted-foreground mb-4">
									Planning to travel? Here are tips for bringing tirzepatide with you:
								</p>
								<ul className="space-y-2 text-muted-foreground">
									<li>• Carry pens in carry-on luggage, never checked bags</li>
									<li>• Use an insulated medication travel case with ice packs</li>
									<li>• Bring a prescription or doctor's letter for security</li>
									<li>• Plan injection timing around travel schedule</li>
									<li>• Pack sharps container or bring one to your destination</li>
									<li>• Keep medication in original packaging</li>
								</ul>
							</section>

							<Card className="p-6 bg-primary/5 mb-8">
								<h3 className="text-xl font-bold text-foreground mb-3">
									Pro Tips from Experienced Users
								</h3>
								<ul className="space-y-2 text-muted-foreground">
									<li>• Set a weekly phone reminder for injection day</li>
									<li>
										• Ice the injection site for 1 minute before injecting to reduce discomfort
									</li>
									<li>• Keep a spare pen in case one is damaged</li>
									<li>• Join online communities for support and tips</li>
									<li>• Take progress photos - they're more motivating than the scale</li>
									<li>• Be patient - significant weight loss takes 4-6 months</li>
								</ul>
							</Card>
						</div>

						<Card className="mt-12 p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground text-center">
							<h3 className="text-3xl font-bold mb-4">Start Your Tirzepatide Journey</h3>
							<p className="text-xl mb-6 text-primary-foreground/90">
								Get expert guidance on dosing and administration from our medical team
							</p>
							<Button
								size="lg"
								className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
								onClick={() =>
									(window.location.href =
										"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
								}
							>
								Get Started Today
							</Button>
						</Card>
					</div>

					<BlogFAQSchema
						faqs={[
							{
								question: "What is the starting dose of tirzepatide?",
								answer:
									"The starting dose is 3mg once weekly for 4 weeks. This allows your body to adjust and minimizes side effects.",
							},
							{
								question: "How often do you increase tirzepatide dose?",
								answer:
									"Doses increase every 4 weeks: 3mg → 6mg → 9mg → 11mg → 13.5mg. Your provider may adjust this schedule based on your tolerance.",
							},
							{
								question: "What happens if I miss a tirzepatide dose?",
								answer:
									"If less than 4 days late, take it as soon as possible. If more than 4 days late, skip that dose and resume your regular schedule. Never double up doses.",
							},
							{
								question: "Where should I inject tirzepatide?",
								answer:
									"Inject subcutaneously in your abdomen (2 inches from belly button), front of thighs, or back of upper arms. Rotate injection sites weekly.",
							},
							{
								question: "Do I need to reach the maximum 13.5mg dose?",
								answer:
									"No, many people achieve excellent results at 9mg or 11mg. Your optimal dose depends on effectiveness, side effects, and individual response.",
							},
						]}
					/>

					<PeopleAlsoRead links={peopleAlsoRead} />

					<TopicClusterNav
						hubPage="/tirzepatide-guide"
						topic="Tirzepatide"
						relatedArticles={[
							{
								title: "How Tirzepatide Works",
								url: "/blog/how-tirzepatide-works",
								excerpt: "Scientific explanation of tirzepatide's dual-action mechanism for weight loss."
							},
							{
								title: "Tirzepatide Side Effects",
								url: "/blog/tirzepatide-side-effects",
								excerpt: "Comprehensive guide to managing side effects during treatment."
							},
							{
								title: "Tirzepatide Quick Start Guide",
								url: "/blog/tirzepatide-quick-start",
								excerpt: "Everything you need to know to begin tirzepatide treatment safely."
							},
							{
								title: "Compounded Tirzepatide Cost",
								url: "/blog/compounded-tirzepatide-cost",
								excerpt: "Affordable tirzepatide options and pricing comparison."
							}
						]}
					/>

					<RelatedArticles
						articles={[
							{
								title: "Tirzepatide Side Effects",
								url: "/blog/tirzepatide-side-effects",
								excerpt:
									"Comprehensive guide to tirzepatide side effects, from common to rare, and management strategies.",
								category: "Tirzepatide",
							},
							{
								title: "How Tirzepatide Works",
								url: "/blog/how-tirzepatide-works",
								excerpt:
									"Scientific explanation of tirzepatide's dual-action mechanism for weight loss and blood sugar control.",
								category: "Tirzepatide",
							},
							{
								title: "Tirzepatide vs Semaglutide",
								url: "/blog/tirzepatide-vs-semaglutide",
								excerpt:
									"Detailed comparison of tirzepatide and semaglutide for weight loss effectiveness and side effects.",
								category: "Comparison",
							},
						]}
					/>
				</div>
			</article>

			<Footer />
		</div>
	);
};

export default TirzepatideDosageGuide;
