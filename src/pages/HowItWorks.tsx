import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, UserCheck, Package, MessageCircle } from "lucide-react";
import { Link } from "@/compat/react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { HowToSchema } from "@/components/seo/HowToSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { GlobalSEO } from "@/components/seo/GlobalSEO";

const HowItWorks = () => {
	return (
		<div className="min-h-screen bg-background">
			<GlobalSEO includeSchemas={true} />
			<FAQSchema
				faqs={[
					{
						question: "How long does the process take from start to finish?",
						answer:
							"Most patients complete their online visit in 5-10 minutes and receive provider review within 24 hours. If approved, medication ships the same day and typically arrives within 3-5 business days. You can start treatment within a week of beginning the process.",
					},
					{
						question: "Do I need to have video appointments?",
						answer:
							"No video appointments required. Everything is done through our secure online platform. You complete a comprehensive medical questionnaire, and our licensed providers review your information. If they need clarification, they will reach out via secure messaging.",
					},
					{
						question: "What if I'm not approved for treatment?",
						answer:
							"If our medical team determines that Semaglutide or Tirzepatide is not appropriate for you, you will not be charged. We will provide information about why you were not approved and discuss alternative weight loss options if applicable.",
					},
					{
						question: "Can I cancel my subscription anytime?",
						answer:
							"Yes, there are no long-term commitments. You can cancel your monthly subscription at any time. We recommend discussing with your provider before stopping treatment to ensure a safe transition.",
					},
					{
						question: "What kind of support do I get?",
						answer:
							"You get ongoing support from our medical team throughout your journey. This includes regular check-ins, dosage adjustments as needed, side effect management, and answers to any questions via secure messaging. Support is included in your monthly membership.",
					},
				]}
			/>
			<HowToSchema
				name="How to Get Started with GLP-1 Weight Loss Medication"
				description="Complete online process to get prescription weight loss medication delivered to your door"
				totalTime="PT1W"
				steps={[
					{
						name: "Complete Your Online Visit",
						text: "Take 5-10 minutes to complete a comprehensive health questionnaire. Tell us about your medical history, current medications, and weight loss goals.",
						url: "https://app.trytrimi.com/start-online-visit/weight-loss-memberships"
					},
					{
						name: "Provider Review & Approval",
						text: "A board-certified medical provider reviews your information within 24 hours and creates a personalized treatment plan if approved."
					},
					{
						name: "Receive Your Medication",
						text: "Your prescription is fulfilled and shipped directly to your door with free shipping from US-licensed pharmacies."
					},
					{
						name: "Ongoing Support & Monitoring",
						text: "Get continuous care with unlimited messaging, regular check-ins, and dosage adjustments to optimize your results."
					}
				]}
			/>
			<SEOHead
				title="How Trimi Works - Online Weight Loss Process in 4 Steps"
				description="Simple 4-step process: Complete online visit, provider review, receive medication, get ongoing support. 100% online weight loss care."
				canonical="https://trytrimi.com/how-it-works"
				keywords="how trimi works, online weight loss process, telemedicine weight loss, GLP-1 prescription online"
			/>
			<Navigation />
			<SmartBreadcrumbs />

			<main>
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
								How Trimi
								<span className="block text-secondary mt-2">Works</span>
							</h1>
							<p className="text-xl text-muted-foreground">
								Your personalized weight loss journey starts here. Simple, effective, and 100%
								online.
							</p>
						</div>
					</div>
				</section>

				{/* Steps Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-5xl mx-auto space-y-16">
							{[
								{
									step: "01",
									icon: Calendar,
									title: "Complete Your Online Visit",
									description:
										"Take 5-10 minutes to complete a comprehensive health questionnaire from anywhere, at any time. Tell us about your medical history, current medications, and weight loss goals.",
									features: [
										"Quick 5-10 minute questionnaire",
										"Available 24/7 from any device",
										"Secure and HIPAA-compliant",
										"No office visits needed",
									],
								},
								{
									step: "02",
									icon: UserCheck,
									title: "Provider Review & Approval",
									description:
										"A board-certified medical provider reviews your information within 24 hours. If approved, they'll create a personalized treatment plan tailored to your needs.",
									features: [
										"Board-certified providers",
										"Review within 24 hours",
										"Personalized treatment plans",
										"Direct messaging with your provider",
									],
								},
								{
									step: "03",
									icon: Package,
									title: "Receive Your Medication",
									description:
										"Your prescription is fulfilled and shipped directly to your door with free shipping. All medications are compounded in US-licensed pharmacies.",
									features: [
										"Free nationwide shipping",
										"Discreet packaging",
										"Licensed US pharmacies",
										"Arrives within 5-7 business days",
									],
								},
								{
									step: "04",
									icon: MessageCircle,
									title: "Ongoing Support & Monitoring",
									description:
										"Get continuous care with unlimited messaging to your provider, regular check-ins, and dosage adjustments as needed to optimize your results.",
									features: [
										"Unlimited provider messaging",
										"Regular progress check-ins",
										"Dosage adjustments as needed",
										"Educational resources & tips",
									],
								},
							].map((item, index) => (
								<div key={index} className="relative">
									<div className="flex flex-col md:flex-row gap-8 items-start">
										<div className="flex-shrink-0">
											<div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
												<item.icon className="h-10 w-10 text-primary-foreground" />
											</div>
										</div>

										<div className="flex-1">
											<div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-4">
												STEP {item.step}
											</div>
											<h2 className="text-3xl font-bold text-foreground mb-4">{item.title}</h2>
											<p className="text-lg text-muted-foreground mb-6">{item.description}</p>

											<Card className="p-6">
												<div className="grid sm:grid-cols-2 gap-4">
													{item.features.map((feature, idx) => (
														<div key={idx} className="flex items-start gap-3">
															<CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
															<span className="text-sm text-foreground">{feature}</span>
														</div>
													))}
												</div>
											</Card>
										</div>
									</div>

									{index < 3 && (
										<div
											className="hidden md:block absolute left-10 top-24 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-transparent"
											style={{ height: "calc(100% + 64px)" }}
										/>
									)}
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Timeline Section */}
				<section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center mb-12">
							<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
								What to Expect
							</h2>
							<p className="text-xl text-muted-foreground">Your weight loss timeline with Trimi</p>
						</div>

						<div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
							{[
								{
									period: "Week 1-2",
									title: "Getting Started",
									description:
										"Begin your treatment, adjust to the medication, and establish new routines.",
								},
								{
									period: "Month 1-2",
									title: "Early Progress",
									description:
										"Notice reduced appetite and food cravings. Initial weight loss becomes visible.",
								},
								{
									period: "Month 3-6",
									title: "Significant Results",
									description: "Experience consistent weight loss and improved energy levels.",
								},
								{
									period: "Month 6+",
									title: "Maintenance",
									description: "Achieve your goals and maintain your healthy new weight long-term.",
								},
							].map((phase, index) => (
								<Card key={index} className="p-6 text-center">
									<div className="text-secondary font-bold text-sm mb-2">{phase.period}</div>
									<h3 className="text-lg font-bold text-foreground mb-3">{phase.title}</h3>
									<p className="text-sm text-muted-foreground">{phase.description}</p>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-12 text-center">
							<h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
							<p className="text-xl mb-8 text-primary-foreground/90">
								Begin your weight loss journey today with personalized care
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									size="lg"
									className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-lg px-8"
									onClick={() =>
										(window.location.href =
											"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
									}
								>
									Start Now
								</Button>
								<Link to="/treatments">
									<Button
										size="lg"
										variant="outline"
										className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium text-lg px-8"
									>
										View Treatments
									</Button>
								</Link>
							</div>
						</Card>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default HowItWorks;
