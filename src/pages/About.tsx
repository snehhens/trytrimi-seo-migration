import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Heart, Target, Stethoscope } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import scienceBg from "@/assets/science-bg.jpg";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { HealthcareProviderSchema } from "@/components/seo/HealthcareProviderSchema";

const About = () => {
	return (
		<div className="min-h-screen bg-background">
			<GlobalSEO includeSchemas={true} />
			<HealthcareProviderSchema />
			<FAQSchema
				faqs={[
					{
						question: "Is Trimi a legitimate medical provider?",
						answer:
							"Yes, Trimi is a licensed telemedicine provider. All prescriptions are reviewed and approved by board-certified physicians licensed in your state. We follow strict HIPAA guidelines and use medications prepared by licensed US compounding pharmacies.",
					},
					{
						question: "How is Trimi different from other weight loss programs?",
						answer:
							"Trimi specializes exclusively in prescription weight loss medication, specifically Semaglutide and Tirzepatide. We offer affordable compounded versions of these medications with full medical supervision, transparent pricing, and ongoing support—all 100% online.",
					},
					{
						question: "What medications do you offer?",
						answer:
							"We offer both Semaglutide and Tirzepatide. Our compounded versions contain the same active ingredients as brand-name medications (Wegovy, Ozempic, Mounjaro, Zepbound) and are prepared by licensed US compounding pharmacies following strict safety guidelines.",
					},
					{
						question: "What makes Trimi more affordable?",
						answer:
							"We use compounded versions of Semaglutide and Tirzepatide instead of brand-name medications. This allows us to offer the same effective treatment at a fraction of the cost—$145-449/month compared to $1,000+ for brand names, without requiring insurance.",
					},
					{
						question: "How do I know if Trimi is right for me?",
						answer:
							"Trimi is ideal if you have a BMI of 27+ with a weight-related condition or BMI of 30+, want proven prescription weight loss medication, prefer convenience of online care, and want affordable treatment without insurance hassles. Complete our free assessment to find out if you qualify.",
					},
				]}
			/>
			<SEOHead
				title="About Trimi Health - Prescription Weight Loss Treatments Online"
				description="Learn about Trimi's mission to make prescription weight loss accessible. Board-certified providers, prescription medications, 100% online care."
				canonical="https://trytrimi.com/about"
				keywords="about trimi, online weight loss, telemedicine weight loss, GLP-1 provider, medical weight loss"
			/>
			<Navigation />
			<SmartBreadcrumbs />

			<main>
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
								About
								<span className="block text-secondary mt-2">Trimi</span>
							</h1>
							<p className="text-xl text-muted-foreground">
								We're on a mission to make effective weight loss accessible, affordable, and
								personalized for everyone.
							</p>
						</div>
					</div>
				</section>

				{/* Mission Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-12">
								<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Mission</h2>
								<p className="text-xl text-muted-foreground leading-relaxed">
									At Trimi, we believe everyone deserves access to proven weight loss solutions
									without the barriers of traditional healthcare. We combine cutting-edge medical
									science with compassionate care to help you achieve lasting results.
								</p>
							</div>

							<div className="grid md:grid-cols-3 gap-8 mt-16">
								{[
									{
										icon: Shield,
										title: "Safe & Regulated",
										description: "Prescription medications prescribed by board-certified providers",
									},
									{
										icon: Award,
										title: "Evidence-Based",
										description: "Clinically proven treatments backed by extensive research",
									},
									{
										icon: Users,
										title: "Personalized Care",
										description: "Tailored treatment plans designed for your unique needs",
									},
								].map((value, index) => (
									<Card key={index} className="p-6 text-center">
										<div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
											<value.icon className="h-8 w-8 text-secondary" />
										</div>
										<h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
										<p className="text-muted-foreground">{value.description}</p>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Science Section */}
				<section
					className="py-20 relative"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 48, 82, 0.95), rgba(0, 48, 82, 0.95)), url(${scienceBg})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="container mx-auto px-4 relative z-10">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-12">
								<h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
									The Science Behind Our Treatments
								</h2>
								<p className="text-xl text-primary-foreground/80">
									Understanding how GLP-1 medications work for weight loss
								</p>
							</div>

							<Card className="p-8 mb-8">
								<h3 className="text-2xl font-bold text-foreground mb-4">
									What are GLP-1 Medications?
								</h3>
								<p className="text-muted-foreground mb-4">
									GLP-1 (Glucagon-Like Peptide-1) receptor agonists are medications that mimic a
									natural hormone in your body that helps regulate appetite and blood sugar. These
									medications have been extensively studied and proven effective for weight loss.
								</p>
								<p className="text-muted-foreground">
									Originally developed for type 2 diabetes, GLP-1 medications have shown remarkable
									effectiveness for weight management and obesity treatment.
								</p>
							</Card>

							<div className="grid md:grid-cols-2 gap-8">
								<Card className="p-6">
									<Target className="h-12 w-12 text-secondary mb-4" />
									<h3 className="text-xl font-bold text-foreground mb-3">How They Work</h3>
									<ul className="space-y-2 text-muted-foreground">
										<li>• Reduce appetite and food cravings</li>
										<li>• Increase feelings of fullness</li>
										<li>• Slow gastric emptying</li>
										<li>• Improve blood sugar control</li>
										<li>• Support metabolic health</li>
									</ul>
								</Card>

								<Card className="p-6">
									<Stethoscope className="h-12 w-12 text-secondary mb-4" />
									<h3 className="text-xl font-bold text-foreground mb-3">Clinical Evidence</h3>
									<ul className="space-y-2 text-muted-foreground">
										<li>• 15-22% average body weight loss</li>
										<li>• Proven in multiple clinical trials</li>
										<li>• Thousands of patients studied</li>
										<li>• Long-term safety data available</li>
										<li>• Clinically proven active ingredients</li>
									</ul>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Why Choose Us */}
				<section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center mb-12">
							<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
								Why Choose Trimi?
							</h2>
							<p className="text-xl text-muted-foreground">
								We're different from traditional weight loss programs
							</p>
						</div>

						<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
							{[
								{
									title: "100% Online",
									description:
										"No office visits, no waiting rooms. Complete everything from the comfort of your home on your schedule.",
								},
								{
									title: "Transparent Pricing",
									description:
										"Know exactly what you'll pay upfront. No hidden fees, no surprises, no insurance hassles.",
								},
								{
									title: "Board-Certified Providers",
									description:
										"Your care is managed by licensed medical professionals with expertise in weight management.",
								},
								{
									title: "Ongoing Support",
									description:
										"Unlimited messaging with your provider, regular check-ins, and continuous care throughout your journey.",
								},
								{
									title: "Fast & Discreet",
									description:
										"Medication ships directly to your door in discreet packaging with free nationwide shipping.",
								},
								{
									title: "Quality Medications",
									description:
										"All medications are compounded in US-licensed pharmacies following strict safety standards.",
								},
							].map((item, index) => (
								<Card key={index} className="p-6">
									<h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
									<p className="text-muted-foreground">{item.description}</p>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
							{[
								{ number: "10,000+", label: "Patients Served" },
								{ number: "95%", label: "Satisfaction Rate" },
								{ number: "24-48h", label: "Provider Review Time" },
								{ number: "100%", label: "Online Process" },
							].map((stat, index) => (
								<div key={index}>
									<div className="text-5xl font-bold text-secondary mb-2">{stat.number}</div>
									<div className="text-muted-foreground font-medium">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-gradient-to-br from-primary to-primary/90">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
								Join thousands on their weight loss journey
							</h2>
							<p className="text-xl mb-8 text-primary-foreground/90">
								Start your personalized treatment plan today
							</p>
							<Button
								size="lg"
								className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-lg px-8"
								onClick={() =>
									(window.location.href =
										"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
								}
							>
								Get Started
							</Button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default About;
