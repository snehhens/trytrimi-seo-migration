import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Clock, Package, Stethoscope, Flag, BadgeCheck } from "lucide-react";
import tirzepatideImg from "@/assets/tirzepatide-vial.webp";
import { SEOHead } from "@/components/seo/SEOHead";
import { Helmet } from "@/compat/react-helmet-async";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Link } from "@/compat/react-router-dom";
import { EntityGraphSchema } from "@/components/seo/EntityGraphSchema";
import { TIRZEPATIDE_ENTITY_ID } from "@/lib/seo/entities";

const TirzepatideProduct = () => {
	const benefits = [
		{ icon: CheckCircle, text: "Same price at every dose. No hidden fees." },
		{ icon: Package, text: "Free expedited shipping." },
		{ icon: Clock, text: "No membership fees." },
		{ icon: Stethoscope, text: "Doctor-led plans, coaching & active community." },
	];

	const pricingPlans = [
		{
			name: "Monthly",
			price: "$235",
			period: "per month",
			schedule: "Billed monthly",
		},
		{
			name: "Quarterly",
			price: "$597",
			period: "per quarter",
			schedule: "Billed every 3 months ($199/mo)",
			savings: "Save $108",
		},
		{
			name: "6 Months",
			price: "$1,050",
			period: "per 6 months",
			schedule: "Billed every 6 months ($175/mo)",
			savings: "Save $540",
			popular: true,
		},
		{
			name: "Annual",
			price: "$1,500",
			period: "per year",
			schedule: "Billed yearly ($125/mo)",
			savings: "Save $1,680",
		},
	];

	const faqs = [
		{
			question: "What's included with my plan?",
			answer:
				"Your plan includes the medication, free expedited shipping, ongoing medical support, access to our patient portal, and coaching resources. There are no hidden fees or membership costs.",
		},
		{
			question: "What weight loss treatment options are available to me?",
			answer:
				"We offer both Compounded Tirzepatide (same active ingredient as Mounjaro) and Compounded Semaglutide (same active ingredient as Wegovy). Trimi's Doctor Network will help determine which option is best suited for your weight loss goals.",
		},
		{
			question: "What if I need to cancel?",
			answer:
				"You can cancel your subscription at any time. There are no cancellation fees or long-term commitments. Simply contact our support team to manage your subscription.",
		},
		{
			question: "How does Tirzepatide work for weight loss?",
			answer:
				"Tirzepatide is a dual GIP/GLP-1 receptor agonist that activates two hormone pathways instead of one. This dual action leads to greater appetite suppression, improved blood sugar control, and enhanced fat metabolism, resulting in superior weight loss compared to single-action medications.",
		},
		{
			question: "What are the side effects of Tirzepatide?",
			answer:
				"The most common side effects are nausea, diarrhea, and decreased appetite, usually mild and temporary. Side effects tend to be similar to Semaglutide but may be slightly more intense initially due to the dual mechanism of action. Our medical team helps manage any side effects.",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			<EntityGraphSchema
				title="Compounded Tirzepatide"
				description="Treatment detail page for compounded tirzepatide with pricing, benefits, FAQs, and care model information."
				url="/treatments/tirzepatide"
				pageType="MedicalWebPage"
				aboutEntityIds={[TIRZEPATIDE_ENTITY_ID]}
				breadcrumbItems={[
					{ name: "Home", url: "/" },
					{ name: "Treatments", url: "/treatments" },
					{ name: "Compounded Tirzepatide", url: "/treatments/tirzepatide" },
				]}
			/>
			<ProductSchema
				name="Compounded Tirzepatide"
				description="Compounded tirzepatide for weight loss. Same active ingredient as Mounjaro. Dual GIP/GLP-1 receptor agonist with up to 22% weight loss results."
				image="/tirzepatide-vial.webp"
				price="125"
				url="/treatments/tirzepatide"
				ratingValue="4.9"
				reviewCount="5000"
			/>
			<FAQSchema
				faqs={faqs.map((faq) => ({
					question: faq.question,
					answer: faq.answer,
				}))}
			/>
		<SEOHead
				title="Compounded Tirzepatide Online $125/Month | Buy Now | Trimi"
				description="Buy compounded tirzepatide online from $125/month. Licensed US compounding pharmacy. Same active ingredient as Mounjaro & Zepbound. Up to 22% weight loss. Free shipping."
				canonical="https://trytrimi.com/treatments/tirzepatide"
				keywords="compounded tirzepatide, buy compounded tirzepatide, compounded tirzepatide online, compounded tirzepatide weight loss, compounded tirzepatide cost, compounded tirzepatide price, tirzepatide compounding pharmacy, compounded GLP-1, mounjaro alternative, zepbound alternative, affordable compounded tirzepatide, order compounded tirzepatide"
			>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Product",
						name: "Compounded Tirzepatide",
						description:
							"Compounded tirzepatide for weight loss. Same active ingredient as Mounjaro. Dual GIP/GLP-1 receptor agonist with superior results.",
						brand: {
							"@type": "Brand",
							name: "Trimi Health",
						},
						offers: {
							"@type": "Offer",
							price: "125",
							priceCurrency: "USD",
							url: "https://trytrimi.com/treatments/tirzepatide",
							priceValidUntil: "2025-12-31",
						},
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: "4.9",
							reviewCount: "5000",
						},
					})}
				</script>
			</SEOHead>
			<Navigation />

			<main className="py-8 md:py-12">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						{/* Hero Section - Two Column Layout */}
						<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
							{/* Left - Product Image */}
							<div className="relative">
								<div className="sticky top-24">
									<div className="relative bg-[#c5d4c0] rounded-2xl overflow-hidden aspect-square">
										<img
											src={tirzepatideImg}
											alt="Compounded Tirzepatide injection pen - same active ingredient as Mounjaro with dual GIP/GLP-1 action"
											className="w-full h-full object-cover"
											loading="eager"
										/>
									</div>
								</div>
							</div>

							{/* Right - Product Details */}
							<div className="space-y-6">
								<div>
									<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
										Compounded Tirzepatide
									</h1>
									<p className="text-muted-foreground">Same active ingredient in Mounjaro®</p>
								</div>


								{/* Pricing */}
								<div className="space-y-3">
									<div className="flex items-baseline justify-center gap-3">
										<span className="text-3xl font-bold text-foreground">$125</span>
										<span className="text-lg text-muted-foreground">per month</span>
									</div>

									{/* CTA Button */}
									<Button
										size="lg"
										className="w-full bg-foreground hover:bg-foreground/90 text-background font-medium py-6 text-lg rounded-full"
										onClick={() =>
											(window.location.href =
												"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
										}
									>
										Get started
									</Button>
								</div>

								{/* Tabs Section */}
								<Tabs defaultValue="pricing" className="w-full">
									<TabsList className="w-full grid grid-cols-3 bg-muted/50 rounded-full p-1">
										<TabsTrigger
											value="benefits"
											className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm"
										>
											Benefits
										</TabsTrigger>
										<TabsTrigger
											value="pricing"
											className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm"
										>
											Pricing
										</TabsTrigger>
										<TabsTrigger
											value="description"
											className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm"
										>
											Description
										</TabsTrigger>
									</TabsList>

									<TabsContent value="benefits" className="mt-6 space-y-4">
										{benefits.map((benefit, index) => (
											<div key={index} className="flex items-start gap-3">
												<benefit.icon className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
												<span className="text-foreground">{benefit.text}</span>
											</div>
										))}
									</TabsContent>

									<TabsContent value="pricing" className="mt-6">
										<div className="space-y-3">
											{pricingPlans.map((plan, index) => (
												<div
													key={index}
													className={`flex items-center justify-between p-4 rounded-xl border ${
														plan.popular
															? "border-secondary bg-secondary/5"
															: "border-border"
													}`}
												>
													<div>
														<div className="flex items-center gap-2">
															<span className="font-medium text-foreground">
																{plan.name}
															</span>
															{plan.popular && (
																<span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
																	Popular
																</span>
															)}
														</div>
														<span className="text-sm text-muted-foreground">
															{plan.schedule}
														</span>
													</div>
													<div className="text-right">
														<div className="font-bold text-foreground">{plan.price}</div>
														{plan.savings && (
															<span className="text-xs text-green-600">{plan.savings}</span>
														)}
													</div>
												</div>
											))}
										</div>
									</TabsContent>

									<TabsContent value="description" className="mt-6">
										<div className="prose prose-sm max-w-none text-muted-foreground">
											<p className="mb-4">
												Tirzepatide is a dual GIP/GLP-1 receptor agonist that activates two
												hormone pathways for enhanced weight loss. This dual action leads to
												greater appetite suppression and improved metabolism.
											</p>
											<p className="mb-4">
												Clinical trials demonstrate an average weight loss of 20-25% of body
												weight. For a 200-pound person, this translates to 40-50 pounds.
											</p>
											<p>
												Administered as a once-weekly subcutaneous injection. The starting dose
												is 2.5mg weekly, gradually increasing based on your response.
											</p>
										</div>
									</TabsContent>
								</Tabs>

								{/* Trust Badges */}
								<div className="flex items-center justify-center gap-6 py-4 border-t border-border">
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Flag className="h-4 w-4" />
										<span>Compounded in the U.S.A</span>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<BadgeCheck className="h-4 w-4" />
										<span>FSA & HSA Eligible</span>
									</div>
								</div>

								{/* FAQ Accordion */}
								<div className="space-y-3">
									{faqs.map((faq, index) => (
										<Card key={index} className="overflow-hidden">
											<Accordion type="single" collapsible>
												<AccordionItem value={`faq-${index}`} className="border-0">
													<AccordionTrigger className="px-4 py-4 hover:no-underline text-left font-medium">
														{faq.question}
													</AccordionTrigger>
													<AccordionContent className="px-4 pb-4 text-muted-foreground">
														{faq.answer}
													</AccordionContent>
												</AccordionItem>
											</Accordion>
										</Card>
									))}
								</div>

								{/* Disclaimer */}
								<div className="space-y-4">
									<Card className="p-4 bg-muted/30 border-muted border-l-4 border-l-muted-foreground/30">
										<p className="text-sm text-muted-foreground">
											The statements on this page have not been evaluated by the Food and Drug
											Administration. This product is not intended to diagnose, treat, cure or
											prevent any disease.
										</p>
									</Card>
									<div className="space-y-3 text-sm text-muted-foreground">
										<p>
											*Price shown applies to compounded GLP-1 12 month plan paid upfront or with buy now, pay later programs.
										</p>
										<p>
											**The FDA does not review or approve any compounded medications for safety or effectiveness.
										</p>
									</div>
									<Link 
										to="/important-safety-information" 
										className="block text-center text-sm text-foreground underline underline-offset-4 hover:text-primary"
									>
										Important safety information
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default TirzepatideProduct;
