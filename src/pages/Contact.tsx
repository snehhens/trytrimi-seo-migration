import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Clock, HelpCircle } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

const Contact = () => {
	return (
		<div className="min-h-screen bg-background">
			<GlobalSEO includeSchemas={true} />
			<LocalBusinessSchema />
			<SEOHead
				title="Contact Trimi Health - Weight Loss Support & Questions"
				description="Get in touch with Trimi's customer support team. Email support, FAQ resources, and expert help for your weight loss journey."
				canonical="https://trytrimi.com/contact"
				keywords="contact trimi, customer support, weight loss help, consultation, medical questions"
			/>
			<Navigation />
			<SmartBreadcrumbs />

			<main>
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
								Get in
								<span className="block text-secondary mt-2">Touch</span>
							</h1>
							<p className="text-xl text-muted-foreground">
								Have questions? We're here to help. Reach out to our team and we'll get back to you
								soon.
							</p>
						</div>
					</div>
				</section>

				{/* Contact Options */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
							{[
								{
									icon: Mail,
									title: "Email Us",
									description: "Send us an email and we'll respond within 24 hours",
									contact: "care@trytrimi.com",
								},
								{
									icon: HelpCircle,
									title: "FAQ",
									description: "Find quick answers to common questions",
									contact: "Visit FAQ page",
								},
							].map((option, index) => (
								<Card key={index} className="p-6 text-center">
									<div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
										<option.icon className="h-8 w-8 text-secondary" />
									</div>
									<h3 className="text-xl font-bold text-foreground mb-3">{option.title}</h3>
									<p className="text-muted-foreground mb-2">{option.description}</p>
									<p className="text-secondary font-medium">{option.contact}</p>
								</Card>
							))}
						</div>

						{/* Contact Form */}
						<div className="max-w-2xl mx-auto">
							<Card className="p-8">
								<div className="mb-8">
									<h2 className="text-3xl font-bold text-foreground mb-2">Send us a message</h2>
									<p className="text-muted-foreground">
										Fill out the form below and we'll get back to you as soon as possible.
									</p>
								</div>

								<form className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<div className="space-y-2">
											<Label htmlFor="firstName">First Name</Label>
											<Input id="firstName" placeholder="John" />
										</div>
										<div className="space-y-2">
											<Label htmlFor="lastName">Last Name</Label>
											<Input id="lastName" placeholder="Doe" />
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="email">Email</Label>
										<Input id="email" type="email" placeholder="john@example.com" />
									</div>

									<div className="space-y-2">
										<Label htmlFor="phone">Phone Number (Optional)</Label>
										<Input id="phone" type="tel" placeholder="(607) 205-8490" />
									</div>

									<div className="space-y-2">
										<Label htmlFor="subject">Subject</Label>
										<Input id="subject" placeholder="How can we help you?" />
									</div>

									<div className="space-y-2">
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											placeholder="Tell us more about your question or concern..."
											className="min-h-[150px]"
										/>
									</div>

									<Button
										type="submit"
										size="lg"
										className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
									>
										Send Message
									</Button>
								</form>
							</Card>
						</div>
					</div>
				</section>

				{/* Business Hours */}
				<section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<Card className="p-8">
								<div className="flex items-start gap-6">
									<div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
										<Clock className="h-8 w-8 text-secondary" />
									</div>
									<div>
										<h2 className="text-2xl font-bold text-foreground mb-4">Support Hours</h2>
										<div className="space-y-2 text-muted-foreground">
											<p>
												<span className="font-semibold text-foreground">Monday - Friday:</span> 9:00
												AM - 6:00 PM EST
											</p>
											<p>
												<span className="font-semibold text-foreground">Saturday:</span> 10:00 AM -
												4:00 PM EST
											</p>
											<p>
												<span className="font-semibold text-foreground">Sunday:</span> Closed
											</p>
										</div>
										<p className="mt-4 text-sm text-muted-foreground">
											* Emails sent outside of business hours will be responded to on the next
											business day
										</p>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-12 text-center">
							<h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
							<p className="text-xl mb-8 text-primary-foreground/90">
								Don't wait - begin your weight loss transformation today
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
						</Card>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Contact;
