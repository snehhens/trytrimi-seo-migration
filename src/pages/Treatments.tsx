import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "@/compat/react-router-dom";
import tirzepatideImg from "@/assets/tirzepatide-vial.webp";
import semaglutideImg from "@/assets/semaglutide-vial.webp";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";

const Treatments = () => {
	const treatments = [
		{
			name: "Compounded Tirzepatide",
			price: "$125 per month",
			subtitle: "(Same active ingredient in Mounjaro ®)",
			image: tirzepatideImg,
			benefits: [
				"Highly effective weight loss medication",
				"Works on both GLP-1 and GIP receptors",
				"Reduces appetite and food cravings",
				"Improves blood sugar control",
				"Once-weekly injection",
			],
		},
		{
			name: "Compounded Semaglutide",
			price: "$99 per month",
			subtitle: "(Same active ingredient in Wegovy ®)",
			image: semaglutideImg,
			benefits: [
				"Proven weight loss results",
				"GLP-1 receptor agonist",
				"Decreases hunger and increases fullness",
				"Supports long-term weight management",
				"Once-weekly injection",
			],
		},
	];

	return (
		<div className="min-h-screen bg-background">
			<GlobalSEO includeSchemas={true} />
		<SEOHead
				title="Compounded Semaglutide & Tirzepatide | Weight Loss Treatments"
				description="Buy compounded Semaglutide from $99/month and compounded Tirzepatide from $125/month. Licensed compounding pharmacies. Free shipping and 24/7 support."
				canonical="https://trytrimi.com/treatments"
				keywords="compounded semaglutide, compounded tirzepatide, buy compounded semaglutide, buy compounded tirzepatide, compounded semaglutide cost, compounded tirzepatide price, compounded GLP-1, semaglutide compounding pharmacy, tirzepatide compounding pharmacy, compounded weight loss medication"
			/>
			<Navigation />
			<SmartBreadcrumbs />

			<main>
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
								Clinically proven
								<span className="block text-secondary mt-2">weight loss treatments</span>
							</h1>
							<p className="text-xl text-muted-foreground">
								Prescription medications, personalized to your needs, delivered to your door.
							</p>
						</div>
					</div>
				</section>

				{/* Treatments Grid */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
							{treatments.map((treatment, index) => (
								<Card
									key={index}
									className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
								>
									<div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-6 rounded-3xl overflow-hidden border border-border/50">
										<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
										<div className="relative aspect-square flex items-center justify-center">
											<div className="relative w-full h-full flex items-center justify-center">
												<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-30" />
												<img
													src={treatment.image}
													alt={`${treatment.name} prescription weight loss injection for medical weight management`}
													className="relative w-full h-full object-contain drop-shadow-2xl"
													width={800}
													height={800}
													loading="lazy"
												/>
											</div>
										</div>
									</div>

								<div className="p-8 text-center">
									<div className="mb-4">
										<h3 className="text-2xl font-bold text-foreground mb-2">{treatment.name}</h3>
										<p className="text-sm text-muted-foreground mb-2">{treatment.subtitle}</p>
										<p className="text-3xl font-bold" style={{ color: 'hsl(212, 70%, 32%)' }}>{treatment.price}</p>
									</div>

									<div className="space-y-3 mb-6 inline-block text-left">
										{treatment.benefits.map((benefit, idx) => (
											<div key={idx} className="flex items-start gap-3">
												<CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
												<span className="text-sm text-foreground">{benefit}</span>
											</div>
										))}
									</div>

										<div className="grid grid-cols-2 gap-3">
											<Link
												to={
													treatment.name.includes("Tirzepatide")
														? "/treatments/tirzepatide"
														: "/treatments/semaglutide"
												}
												className="w-full"
											>
												<Button variant="outline" className="w-full font-medium">
													Learn More
												</Button>
											</Link>
											<Button
												className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
												onClick={() =>
													(window.location.href =
														"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
												}
											>
												Get Started
											</Button>
										</div>
									</div>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* How It Works */}
				<section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How it works</h2>
							<p className="text-xl text-muted-foreground">
								Get started on your weight loss journey in three simple steps
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
							{[
								{
									step: "1",
									title: "Complete online visit",
									description:
										"Answer a few questions about your health and weight loss goals from the comfort of home.",
								},
								{
									step: "2",
									title: "Provider review",
									description:
										"A board-certified medical provider will review your information and create your personalized plan.",
								},
								{
									step: "3",
									title: "Receive medication",
									description:
										"Your prescription is shipped directly to your door with free shipping and ongoing support.",
								},
							].map((item, index) => (
								<div key={index} className="text-center">
									<div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
										{item.step}
									</div>
									<h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
									<p className="text-muted-foreground">{item.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-12 text-center">
							<h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
							<p className="text-xl mb-8 text-primary-foreground/90">
								Join thousands who have already lost weight with Trimi
							</p>
							<Button
								size="lg"
								className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-lg px-8"
								onClick={() =>
									(window.location.href =
										"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
								}
							>
								Get Started Today
							</Button>
						</Card>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Treatments;
