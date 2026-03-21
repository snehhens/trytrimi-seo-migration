import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { useState } from "react";
import { Stethoscope, DollarSign, Pill, Rocket, ShieldCheck } from "lucide-react";

interface FAQ {
	question: string;
	answer: string;
	category: string;
}

const faqCategories = [
	{ id: "all", label: "All Questions", icon: null },
	{ id: "getting-started", label: "Getting Started", icon: Rocket },
	{ id: "medications", label: "Medications", icon: Pill },
	{ id: "pricing", label: "Pricing & Plans", icon: DollarSign },
	{ id: "side-effects", label: "Side Effects & Results", icon: Stethoscope },
	{ id: "account", label: "Account & Privacy", icon: ShieldCheck },
];

const faqs: FAQ[] = [
	{
		question: "How does Trimi work?",
		answer: "Trimi provides access to prescription weight loss medications through a 100% online process. Complete a brief health questionnaire, get reviewed by a board-certified medical provider, and receive your personalized treatment plan with medication shipped directly to your door.",
		category: "getting-started",
	},
	{
		question: "Who can use Trimi?",
		answer: "Trimi is designed for adults with a BMI of 22 or higher with a weight-related condition, or a BMI of 30 or higher. Your provider will review your health history to ensure the medication is safe and appropriate for you.",
		category: "getting-started",
	},
	{
		question: "How do I get started?",
		answer: "Getting started is easy: complete our online health questionnaire (takes 5-10 minutes), get reviewed by a board-certified provider within 24 hours, and receive your medication at your door. The entire process is 100% online.",
		category: "getting-started",
	},
	{
		question: "How quickly will I receive my medication?",
		answer: "Once you've completed the questionnaire, our network of licensed physicians will review and approve your request within 24 hours. Your medication will then ship discreetly and arrive at your doorstep in 2-5 days.",
		category: "getting-started",
	},
	{
		question: "What's included with my shipment?",
		answer: "Your Trimi shipment arrives with everything you need to start or continue your GLP-1 treatment safely and conveniently: a compounded medication vial (semaglutide or tirzepatide, clearly labeled with your dose), sterile syringes and needles ready-to-use for subcutaneous injection, alcohol disinfectant pads/wipes for proper site cleaning, and discreet packaging with free expedited shipping (2–3 days to your door). Plus, you get immediate access to our 24/7 patient portal where you can message your provider anytime, request dose adjustments or refills, and track your progress and get support. No hidden fees, no pharmacy runs — just simple, complete care delivered right to you.",
		category: "getting-started",
	},
	{
		question: "What medications do you offer?",
		answer: "We offer compounded versions of semaglutide (same active ingredient as Wegovy®) and tirzepatide (same active ingredient as Mounjaro®). Both are GLP-1 medications proven to help with significant weight loss.",
		category: "medications",
	},
	{
		question: "What's the difference between Semaglutide and Tirzepatide?",
		answer: "Semaglutide works on GLP-1 receptors, while Tirzepatide works on both GLP-1 and GIP receptors (dual-action). Clinical studies show Tirzepatide may produce slightly more weight loss (up to 22% vs 15-20%), but both are highly effective.",
		category: "medications",
	},
	{
		question: "How do I take the medication?",
		answer: "Both semaglutide and tirzepatide are administered as once-weekly injections using a small needle. We provide detailed instructions and support to make self-injection easy and comfortable.",
		category: "medications",
	},
	{
		question: "How long do I need to take the medication?",
		answer: "Weight loss medications work best as part of a long-term treatment plan. Your provider will work with you to determine the right duration based on your goals and progress. Many patients continue treatment for several months to achieve and maintain their target weight.",
		category: "medications",
	},
	{
		question: "What if the medication doesn't work for me?",
		answer: "While GLP-1 medications have high success rates, individual responses vary. Your provider will monitor your progress and may adjust your dosage or switch medications if needed. You can also pause or cancel at any time.",
		category: "medications",
	},
	{
		question: "How much does it cost?",
		answer: "Compounded semaglutide as low as $99/month and compounded tirzepatide as low as $125/month. No hidden fees or membership charges.",
		category: "pricing",
	},
	{
		question: "Is this covered by insurance?",
		answer: "Currently, our services are not covered by insurance. However, we offer transparent, upfront pricing that's often more affordable than traditional insurance co-pays for brand-name medications.",
		category: "pricing",
	},
	{
		question: "Do you offer any discounts or payment plans?",
		answer: "Yes! We offer significant savings when you commit to 3, 6, or 12-month plans. Monthly pricing gives you flexibility, while longer commitments provide the best value for your weight loss journey.",
		category: "pricing",
	},
	{
		question: "How often will my medication be shipped if I choose a 6-month or 12-month plan?",
		answer: "For both our 6-month and 12-month plans, we'll ship your medication every 3 months. This schedule helps maintain the highest quality and freshness of your medication.",
		category: "pricing",
	},
	{
		question: "Are there any side effects?",
		answer: "Common side effects include nausea, diarrhea, constipation, and stomach discomfort, especially when starting or increasing dosage. These typically improve over time. Your provider will monitor your progress and adjust treatment as needed. We offer Zofran to help with these side effects.",
		category: "side-effects",
	},
	{
		question: "How much weight can I expect to lose?",
		answer: "Results vary by individual, but clinical studies show patients can lose 15-22% of their body weight with GLP-1 medications when combined with lifestyle changes. Your provider will help set realistic goals based on your specific situation.",
		category: "side-effects",
	},
	{
		question: "Do I need to exercise or diet?",
		answer: "While the medications work by reducing appetite and helping you feel full, combining them with healthy eating and regular physical activity will maximize your results. We provide guidance on lifestyle changes that complement your medication.",
		category: "side-effects",
	},
	{
		question: "Will I gain the weight back after stopping?",
		answer: "Weight maintenance requires ongoing effort. Many patients continue treatment long-term, while others transition to lifestyle-based maintenance. Your provider will create a plan to help you maintain your weight loss.",
		category: "side-effects",
	},
	{
		question: "Can I cancel at any time?",
		answer: "Yes, there are no long-term contracts. You can pause or cancel your subscription at any time. We recommend consulting with your provider before making changes to ensure the best outcomes.",
		category: "account",
	},
	{
		question: "What if I have questions during treatment?",
		answer: "You'll have ongoing access to your medical provider through our secure messaging system. We also provide educational resources and customer support to help you throughout your journey.",
		category: "account",
	},
	{
		question: "Is my personal health information secure?",
		answer: "Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your personal and medical information is always protected and never shared without your consent.",
		category: "account",
	},
];

const FAQ = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredFaqs = activeCategory === "all"
		? faqs
		: faqs.filter(f => f.category === activeCategory);

	// Group FAQs by category for "all" view
	const groupedFaqs = faqCategories
		.filter(c => c.id !== "all")
		.map(cat => ({
			...cat,
			questions: faqs.filter(f => f.category === cat.id),
		}))
		.filter(cat => cat.questions.length > 0);

	return (
		<div className="min-h-screen bg-background">
			<GlobalSEO includeSchemas={true} />
			<SEOHead
				title="Weight Loss FAQ - Trimi Health Questions & Answers"
				description="Find answers to common questions about GLP-1 weight loss medications, pricing, side effects, and treatment process. Expert answers from Trimi Health."
				canonical="https://trytrimi.com/faq"
				keywords="weight loss FAQ, semaglutide questions, tirzepatide FAQ, GLP-1 cost, weight loss medication side effects"
			/>

			<FAQSchema faqs={faqs} />

			<Navigation />
			<SmartBreadcrumbs />

			<main>
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
								Frequently Asked
								<span className="block text-secondary mt-2">Questions</span>
							</h1>
							<p className="text-xl text-muted-foreground">
								Everything you need to know about Trimi and our weight loss programs
							</p>
						</div>
					</div>
				</section>

				{/* Category Filter */}
				<section className="py-8 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
					<div className="container mx-auto px-4">
						<div className="flex gap-2 flex-wrap justify-center max-w-4xl mx-auto">
							{faqCategories.map(cat => {
								const Icon = cat.icon;
								return (
									<Button
										key={cat.id}
										variant={activeCategory === cat.id ? "default" : "outline"}
										size="sm"
										onClick={() => setActiveCategory(cat.id)}
										className="gap-2"
									>
										{Icon && <Icon className="w-4 h-4" />}
										{cat.label}
									</Button>
								);
							})}
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							{activeCategory === "all" ? (
								<div className="space-y-12">
									{groupedFaqs.map(group => {
										const Icon = group.icon!;
										return (
											<div key={group.id}>
												<div className="flex items-center gap-3 mb-6">
													<div className="p-2 rounded-lg bg-secondary/10">
														<Icon className="w-5 h-5 text-secondary" />
													</div>
													<h2 className="text-2xl font-bold text-foreground">{group.label}</h2>
												</div>
												<Accordion type="single" collapsible className="space-y-3">
													{group.questions.map((faq, index) => (
														<AccordionItem
															key={index}
															value={`${group.id}-${index}`}
															className="bg-card border border-border rounded-lg px-6"
														>
															<AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
																{faq.question}
															</AccordionTrigger>
															<AccordionContent className="text-muted-foreground leading-relaxed">
																{faq.answer}
															</AccordionContent>
														</AccordionItem>
													))}
												</Accordion>
											</div>
										);
									})}
								</div>
							) : (
								<Accordion type="single" collapsible className="space-y-3">
									{filteredFaqs.map((faq, index) => (
										<AccordionItem
											key={index}
											value={`item-${index}`}
											className="bg-card border border-border rounded-lg px-6"
										>
											<AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
												{faq.question}
											</AccordionTrigger>
											<AccordionContent className="text-muted-foreground leading-relaxed">
												{faq.answer}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							)}
						</div>
					</div>
				</section>

				{/* Still Have Questions */}
				<section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
					<div className="container mx-auto px-4">
						<Card className="max-w-3xl mx-auto p-12 text-center">
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Still have questions?
							</h2>
							<p className="text-xl text-muted-foreground mb-8">
								Our team is here to help you on your weight loss journey
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" variant="outline" className="font-medium">
									Contact Support
								</Button>
								<Button
									size="lg"
									className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
									onClick={() =>
										(window.location.href =
											"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
									}
								>
									Get Started
								</Button>
							</div>
						</Card>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default FAQ;
