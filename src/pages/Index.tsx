import { useEffect, useState } from "react";
import { Link } from "@/compat/react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Helmet } from "@/compat/react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	CheckCircle,
	Shield,
	Clock,
	Sparkles,
	Users,
	Heart,
	FileText,
	Stethoscope,
	Truck,
} from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import { LazySection } from "@/components/LazySection";
import { usePagePerformance } from "@/hooks/usePagePerformance";
import { Slider } from "@/components/ui/slider";
import { SearchBar } from "@/components/SearchBar";
import { blogPosts } from "@/data/blogPosts";
import { FeaturesBanner } from "@/components/FeaturesBanner";
import { OnlineConvenienceSection } from "@/components/OnlineConvenienceSection";

import { PaymentBadges } from "@/components/PaymentBadges";
import { TopBanner } from "@/components/TopBanner";

import tirzepatideImg from "@/assets/tirzepatide-vial-updated.webp";
import tirzepatideImgPng from "@/assets/tirzepatide-vial-updated.png";
import tirzepatideCompareImg from "@/assets/tirzepatide-slider.webp";
import semaglutideImg from "@/assets/semaglutide-vial-updated.webp";
import semaglutideImgPng from "@/assets/semaglutide-vial-updated.png";
import semaglutideCompareImg from "@/assets/semaglutide-compare.webp";
import { TransformationCarousel } from "@/components/TransformationCarousel";
import scienceBg from "@/assets/science-bg.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { EntityGraphSchema } from "@/components/seo/EntityGraphSchema";
import { SiteLinksSearchBoxSchema } from "@/components/seo/SiteLinksSearchBoxSchema";
import { SEMAGLUTIDE_ENTITY_ID, TIRZEPATIDE_ENTITY_ID } from "@/lib/seo/entities";

const Index = () => {
	usePagePerformance("homepage");
	const [currentWeight, setCurrentWeight] = useState(200);
	const [selectedTreatment, setSelectedTreatment] = useState<"semaglutide" | "tirzepatide">(
		"tirzepatide"
	);

	const semaglutideWeightLoss = Math.round(currentWeight * 0.16);
	const tirzepatideWeightLoss = Math.round(currentWeight * 0.22);
	const selectedWeightLoss =
		selectedTreatment === "semaglutide" ? semaglutideWeightLoss : tirzepatideWeightLoss;
	const selectedPercentage = selectedTreatment === "semaglutide" ? "16%" : "22%";

	useEffect(() => {
		// Defer third-party scripts to improve initial load
		const loadScript = (src: string, id: string) => {
			if (document.getElementById(id)) {
				// Re-trigger TikTok embed processing if script already exists
				if (id === "tiktok-embed" && window.tiktokEmbed) {
					window.tiktokEmbed.lib.render(document.querySelectorAll(".tiktok-embed"));
				}
				return;
			}

			const script = document.createElement("script");
			script.src = src;
			script.async = true;
			script.defer = true;
			script.id = id;
			script.onload = () => {
				if (id === "tiktok-embed" && window.tiktokEmbed) {
					window.tiktokEmbed.lib.render(document.querySelectorAll(".tiktok-embed"));
				}
			};
			document.body.appendChild(script);
		};

		// Delay loading social embeds until user scrolls to them
		const timer = setTimeout(() => {
			const hasEmbeds = document.querySelector('.tiktok-embed, .instagram-media');
			if (hasEmbeds) {
				loadScript("https://www.tiktok.com/embed.js", "tiktok-embed");
				loadScript("https://www.instagram.com/embed.js", "instagram-embed");
			}
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			<SEOHead
				title="Compounded Semaglutide & Tirzepatide Online | Trimi"
				description="Get compounded Semaglutide & Tirzepatide prescription weight loss medication online from $99/month. FDA-compliant compounding pharmacies. Start today."
				canonical="https://trytrimi.com/"
				keywords="compounded semaglutide, compounded tirzepatide, compounded semaglutide online, compounded tirzepatide online, compounded semaglutide weight loss, compounded tirzepatide weight loss, buy compounded semaglutide, buy compounded tirzepatide, semaglutide compounding pharmacy, tirzepatide compounding pharmacy, wegovy alternative, mounjaro alternative, ozempic alternative, zepbound alternative, GLP-1 weight loss, affordable semaglutide, affordable tirzepatide"
			>
				{/* Resource Hints for Performance */}
				<link rel="preconnect" href="https://www.tiktok.com" />
				<link rel="preconnect" href="https://www.instagram.com" />
				<link rel="dns-prefetch" href="https://www.tiktok.com" />
				<link rel="dns-prefetch" href="https://www.instagram.com" />
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "MedicalBusiness",
						name: "Trimi Health",
						url: "https://trytrimi.com",
						logo: "https://trytrimi.com/logo.png",
						description:
							"Prescription weight loss treatment with Tirzepatide and Semaglutide. 100% online.",
						medicalSpecialty: "Weight Loss Medicine",
						priceRange: "$$",
						address: {
							"@type": "PostalAddress",
							addressCountry: "US",
						},
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: "4.8",
							reviewCount: "10000",
						},
						hasOfferCatalog: {
							"@type": "OfferCatalog",
							name: "Weight Loss Treatments",
							itemListElement: [
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "MedicalTherapy",
										name: "Compounded Semaglutide",
										description: "GLP-1 weight loss medication",
									},
									price: "269",
									priceCurrency: "USD",
									availability: "https://schema.org/InStock",
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "MedicalTherapy",
										name: "Compounded Tirzepatide",
										description: "Dual GIP/GLP-1 weight loss medication",
									},
									price: "345",
									priceCurrency: "USD",
									availability: "https://schema.org/InStock",
								},
							],
						},
					})}
				</script>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ItemList",
						itemListElement: [
							{
								"@type": "VideoObject",
								name: "Melissa's Weight Loss Journey with Trimi",
								description: "Real weight loss results with GLP-1 medication",
								thumbnailUrl: "https://www.tiktok.com/@improvingmelissa/video/7453944676677143854",
								uploadDate: "2024-01-01",
								contentUrl: "https://www.tiktok.com/@improvingmelissa/video/7453944676677143854",
							},
							{
								"@type": "VideoObject",
								name: "Chaney's Transformation Story with Tirzepatide",
								description: "Real transformation results from our community",
								thumbnailUrl: "https://www.tiktok.com/@capablechaney/video/7488729605629578526",
								uploadDate: "2024-02-01",
								contentUrl: "https://www.tiktok.com/@capablechaney/video/7488729605629578526",
							},
							{
								"@type": "VideoObject",
								name: "Real Results with GLP-1 Medication",
								description: "Success story with weight loss medication",
								thumbnailUrl: "https://www.tiktok.com/@capablechaney/video/7483186951135169823",
								uploadDate: "2024-02-15",
								contentUrl: "https://www.tiktok.com/@capablechaney/video/7483186951135169823",
							},
						],
					})}
				</script>
			</SEOHead>

			<EntityGraphSchema
				title="Trimi Health Home"
				description="Homepage for Trimi's physician-guided compounded semaglutide and tirzepatide weight-loss program."
				url="/"
				pageType="CollectionPage"
				aboutEntityIds={[SEMAGLUTIDE_ENTITY_ID, TIRZEPATIDE_ENTITY_ID]}
				breadcrumbItems={[
					{ name: "Home", url: "/" },
				]}
			/>
			<SiteLinksSearchBoxSchema />
			<FAQSchema
					faqs={[
						{
							question: "How much does Trimi cost?",
							answer:
								"Trimi offers Semaglutide starting at $99/month and Tirzepatide starting at $125/month. All plans include medication, doctor consultations, ongoing support, and free shipping. No hidden fees or insurance required.",
						},
						{
							question: "What medications does Trimi offer?",
							answer:
								"We offer both Semaglutide and Tirzepatide. Our compounded versions contain the same active ingredients as brand-name versions (Wegovy, Ozempic, Mounjaro, Zepbound) and are prepared by licensed US pharmacies following strict safety guidelines.",
						},
						{
							question: "How much weight can I lose with Semaglutide or Tirzepatide?",
							answer:
								"Clinical trials show an average weight loss of 15-20% with Semaglutide and 20-25% with Tirzepatide over 68 weeks. Individual results vary based on factors like starting weight, diet, exercise, and adherence to treatment.",
						},
						{
							question: "Do I qualify for weight loss medication?",
							answer:
								"You may qualify if you have a BMI of 30 or higher, or a BMI of 27 or higher with at least one weight-related health condition (like high blood pressure or type 2 diabetes). Our online consultation will determine your eligibility.",
						},
						{
							question: "How does Trimi work?",
							answer:
								"Done in minutes: Fill out our quick, secure online questionnaire. Our doctor network reviews it within 24 hours and—if appropriate—prescribes your medication. No video consultation required.\n\nIf approved, your compounded medication ships discreetly to your door with free expedited delivery, unlimited 24/7 support, and zero hidden fees.",
						},
						{
							question: "What pharmacy do we use?",
							answer: "We partner with trusted, US-based compounding pharmacies — VialsRx and Greenwich RX — that operate in full compliance with FDA guidelines and USP <797> sterile compounding standards. They prepare high-quality, patient-specific sterile GLP-1 medications using rigorous quality controls to ensure safety, potency, and consistency.",
						},
						{
							question: "Who is our provider?",
							answer:
								"Beluga Health. Read more about our provider at https://www.belugahealth.com/",
						},
						{
							question: "Are there side effects?",
							answer:
								"The most common side effects are mild GI symptoms like nausea, which typically decrease over time. Serious side effects are rare. Our medical team provides guidance on managing any side effects throughout your treatment.",
						},
					]}
				/>

			<div className="min-h-screen bg-background">
				<TopBanner />
				<Navigation />

			<main>
			{/* Hero Section with Treatments */}
				<section className="relative pb-0 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
					<div className="container mx-auto px-4 sm:px-6 relative z-10 py-4 sm:py-12 md:py-16">
						{/* Header */}
						<div className="text-center mb-4 sm:mb-12">
							<PaymentBadges />
						<h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mt-2 sm:mt-4 mb-2 sm:mb-4">
								<span className="font-semibold text-[hsl(212,60%,25%)] tracking-tight">Prescription Weight Loss</span>
								<span className="block text-[hsl(187,100%,30%)] font-light mt-1 sm:mt-2 tracking-tight">Tirzepatide &amp; Semaglutide</span>
							</h1>
							<p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 sm:mb-6">
								Science-backed weight loss solutions. No hidden fees. 100% online.
							</p>
							
							{/* Feature Badges */}
							<div className="flex flex-wrap justify-center items-center gap-2 sm:gap-8 max-w-3xl mx-auto">
								{[
									{ icon: Shield, text: "Licensed & regulated" },
									{ icon: Clock, text: "100% online" },
									{ icon: Heart, text: "Personalized support" },
								].map((item, index) => (
									<div
										key={index}
										className="flex items-center gap-1.5 sm:gap-2 text-foreground"
									>
										<item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
										<span className="text-xs sm:text-sm font-medium">
											{item.text}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Treatment Cards */}
						<div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
							{[
								{
									name: "Compounded Tirzepatide",
									price: "$125 per month",
									subtitle: "(Same active ingredient in Mounjaro ®)",
									image: tirzepatideImg,
									fallbackImage: tirzepatideImgPng,
									link: "/treatments/tirzepatide",
								},
								{
									name: "Compounded Semaglutide",
									price: "$99 per month",
									subtitle: "(Same active ingredient in Wegovy ®)",
									image: semaglutideImg,
									fallbackImage: semaglutideImgPng,
									link: "/treatments/semaglutide",
								},
							].map((treatment, index) => (
								<Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
									<div className="bg-gradient-to-br from-primary/5 to-secondary/10 p-4 sm:p-6">
										<div className="aspect-square flex items-center justify-center">
											<OptimizedImage
												src={treatment.image}
												fallbackSrc={treatment.fallbackImage}
												alt={`${treatment.name} weight loss injection pen with clear dosage markings`}
												className="w-[90%] h-[90%] object-contain"
												width={500}
												height={500}
												priority={index === 0}
											/>
										</div>
									</div>
								<div className="p-3 sm:p-4 text-center">
									<h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
										{treatment.name}
									</h2>
									<p className="text-xs sm:text-sm text-muted-foreground mb-1">
										{treatment.subtitle}
									</p>
									<p className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 sm:mb-4" style={{ color: 'hsl(212, 70%, 32%)' }}>
										{treatment.price}
									</p>
									<div className="flex flex-col gap-2">
										<Button
											className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm sm:text-base py-4 sm:py-5"
											onClick={() =>
												(window.location.href =
													"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
											}
										>
											Get Started
										</Button>
										<Link to={treatment.link} className="w-full">
											<Button
												variant="outline"
												className="w-full text-sm sm:text-base py-4 sm:py-5"
											>
												Learn More
											</Button>
										</Link>
									</div>
									</div>
								</Card>
							))}
						</div>
					</div>
					
					{/* Integrated Feature Bar */}
					<div className="relative z-10 bg-secondary/20 border-y border-secondary/30 py-4">
						<div className="container mx-auto px-4 sm:px-6">
							<div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
								{[
									{ icon: Heart, text: "Personalized support" },
									{ icon: CheckCircle, text: "100% entirely online" },
									{ text: "FSA & HSA eligible", isCredit: true },
								].map((feature, index) => (
									<div key={index} className="flex items-center gap-2 text-foreground">
										{feature.isCredit ? (
											<svg className="h-5 w-5 text-foreground/70 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<rect width="20" height="14" x="2" y="5" rx="2" />
												<line x1="2" x2="22" y1="10" y2="10" />
											</svg>
										) : (
											<feature.icon className="h-5 w-5 text-foreground/70 flex-shrink-0" />
										)}
										<span className="text-sm md:text-base font-medium">{feature.text}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Features Banner */}
				<FeaturesBanner />

				{/* Benefits Section */}
				<section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-secondary/5 to-primary/5">
					<div className="container mx-auto px-4 sm:px-6">
						<div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
							<h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-2 sm:mb-3 px-2">
								<span className="font-light">Why choose</span>{" "}
								<span className="italic text-muted-foreground font-light">Trimi?</span>
							</h2>
							<p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
								We provide comprehensive support for your weight loss journey
							</p>
						</div>

						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
							{[
								{
									title: "Same price for any dose",
									description:
										"Transparent pricing with no surprises - your medication costs the same regardless of dosage adjustments",
									icon: "🔒",
								},
								{
									title: "24/7 patient portal and customer support",
									description:
										"Access your health information anytime and get support whenever you need it",
									icon: "🩺",
								},
								{
									title: "No hidden fees",
									description:
										"All-inclusive pricing covering medication, consultations, and free shipping with no surprises",
									icon: "🤝",
								},
							].map((benefit, index) => (
								<Card
									key={index}
									className="p-3 sm:p-4 md:p-6 text-center hover:shadow-lg transition-shadow"
								>
									<div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{benefit.icon}</div>
									<h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
										{benefit.title}
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground">
										{benefit.description}
									</p>
								</Card>
							))}
						</div>
					</div>
				</section>

			{/* How It Works */}
				<section className="py-10 sm:py-12 md:py-14 bg-background">
					<div className="container mx-auto px-4 sm:px-6">
						<div className="max-w-5xl mx-auto">
							<div className="text-center mb-8 sm:mb-10">
								<span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-3">
									Simple Process
								</span>
								<h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
									<span className="font-light">Your path to</span>{" "}
									<span className="italic text-muted-foreground font-light">results</span>
								</h2>
								<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
									Getting started takes just minutes. Here's what to expect.
								</p>
							</div>

							{/* Steps - Horizontal Timeline */}
							<div className="relative">
								{/* Connecting Line - Desktop */}
								<div className="hidden lg:block absolute top-14 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-secondary via-primary to-secondary/50" />

								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
									{/* Step 1 */}
									<div className="relative">
										<div className="flex flex-col items-center text-center">
											<div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4 shadow-lg">
												<FileText className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-foreground" />
											</div>
											<span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Step 1</span>
											<h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
												Share Your Health Journey
											</h3>
											<p className="text-sm text-muted-foreground mb-4 max-w-xs">
												Take a few minutes to tell us about your health background, daily habits, and weight loss goals.
											</p>
											<Button
												size="default"
												className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full max-w-[180px]"
												onClick={() =>
													(window.location.href =
														"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
												}
											>
												Begin Assessment
											</Button>
										</div>
									</div>

									{/* Step 2 */}
									<div className="relative">
										<div className="flex flex-col items-center text-center">
											<div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-lg">
												<Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
											</div>
											<span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Step 2</span>
											<h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
												Physician Evaluation
											</h3>
											<p className="text-sm text-muted-foreground mb-4 max-w-xs">
												A licensed provider reviews your profile and designs a personalized treatment approach just for you.
											</p>
											<Button
												asChild
												size="default"
												variant="outline"
												className="w-full max-w-[180px]"
											>
												<Link to="/get-started">See If You Qualify</Link>
											</Button>
										</div>
									</div>

									{/* Step 3 */}
									<div className="relative sm:col-span-2 lg:col-span-1">
										<div className="flex flex-col items-center text-center">
											<div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 shadow-lg">
												<Truck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
											</div>
											<span className="text-xs font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent uppercase tracking-wider mb-1">Step 3</span>
											<h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
												Medication at Your Door
											</h3>
											<p className="text-sm text-muted-foreground mb-4 max-w-xs">
												Your prescription arrives in discreet packaging with free shipping included—no pharmacy trips needed.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Bottom CTA */}
							<div className="mt-8 sm:mt-10 text-center">
								<div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
									<CheckCircle className="w-4 h-4 text-secondary" />
									<span className="text-sm text-muted-foreground"><span className="text-sm text-muted-foreground">Patients approved within 24 hours</span></span>
								</div>
							</div>
						</div>
					</div>
				</section>

			{/* Compare Treatments */}
				<section className="py-10 sm:py-12 md:py-14 bg-gradient-to-b from-muted/20 to-background">
					<div className="container mx-auto px-4 sm:px-6">
						<div className="max-w-5xl mx-auto">
							<div className="text-center mb-6 sm:mb-8">
								<span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
									Find Your Fit
								</span>
								<h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
									<span className="font-light">Which treatment is</span>{" "}
									<span className="italic text-muted-foreground font-light">right for you?</span>
								</h2>
								<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
									Both options deliver real results. See how much you could lose based on clinical data.
								</p>
							</div>

							{/* Treatment Toggle */}
							<div className="flex justify-center mb-6 sm:mb-8">
								<div className="inline-flex bg-muted rounded-full p-1.5">
									<button
										onClick={() => setSelectedTreatment("semaglutide")}
										className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
											selectedTreatment === "semaglutide"
												? "bg-primary text-primary-foreground shadow-md"
												: "text-muted-foreground hover:text-foreground"
										}`}
									>
										Semaglutide
									</button>
									<button
										onClick={() => setSelectedTreatment("tirzepatide")}
										className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
											selectedTreatment === "tirzepatide"
												? "bg-secondary text-secondary-foreground shadow-md"
												: "text-muted-foreground hover:text-foreground"
										}`}
									>
										Tirzepatide
									</button>
								</div>
							</div>

							{/* Main Comparison Card */}
							<Card className="overflow-hidden border-0 shadow-xl rounded-3xl bg-card">
								<div className="grid md:grid-cols-2">
									{/* Left: Product Image */}
									<div className={`p-8 sm:p-12 flex items-center justify-center transition-colors ${
										selectedTreatment === "semaglutide"
											? "bg-gradient-to-br from-cyan-50 to-cyan-100/50"
											: "bg-gradient-to-br from-secondary/5 to-secondary/15"
									}`}>
										<div className="text-center">
											<OptimizedImage
												src={selectedTreatment === "semaglutide" ? semaglutideCompareImg : tirzepatideCompareImg}
												alt={`${selectedTreatment === "semaglutide" ? "Semaglutide" : "Tirzepatide"} weight loss medication`}
												className="max-w-[280px] sm:max-w-[340px] h-auto object-contain drop-shadow-2xl mx-auto mb-6"
												width={340}
												height={340}
											/>
											<span className={`inline-block px-6 py-2.5 rounded-full text-base font-semibold ${
												selectedTreatment === "semaglutide"
													? "bg-cyan-200 text-cyan-900"
													: "bg-secondary/20 text-secondary"
											}`}>
												Up to {selectedPercentage} weight loss
											</span>
										</div>
									</div>

									{/* Right: Calculator */}
									<div className="p-5 sm:p-12 flex flex-col justify-center">
										<div className="mb-8">
											<div className="flex items-baseline justify-between mb-4">
												<h3 className="text-base sm:text-xl font-semibold text-foreground">
													Your current weight
												</h3>
												<span className="text-3xl sm:text-5xl font-bold text-foreground">
													{currentWeight}
													<span className="text-base sm:text-xl text-muted-foreground ml-1">lbs</span>
												</span>
											</div>
											<Slider
												value={[currentWeight]}
												onValueChange={(value) => setCurrentWeight(value[0])}
												min={100}
												max={400}
												step={1}
												className="w-full"
											/>
											<div className="flex justify-between text-xs text-muted-foreground mt-2">
												<span>100 lbs</span>
												<span>400 lbs</span>
											</div>
										</div>

										<div className={`p-6 sm:p-8 rounded-2xl text-center transition-colors ${
											selectedTreatment === "semaglutide"
												? "bg-cyan-50 border border-cyan-200"
												: "bg-secondary/5 border border-secondary/20"
										}`}>
											<p className="text-sm text-muted-foreground mb-2">You could lose</p>
											<div className={`text-6xl sm:text-7xl font-bold mb-2 ${
												selectedTreatment === "semaglutide" ? "text-cyan-600" : "text-secondary"
											}`}>
												{selectedWeightLoss}
												<span className="text-2xl sm:text-3xl ml-1">lbs</span>
											</div>
											<p className="text-sm text-muted-foreground">
												with {selectedTreatment === "semaglutide" ? "Semaglutide" : "Tirzepatide"}
											</p>
										</div>

										<Button
											size="lg"
											className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-base sm:text-lg py-6"
											onClick={() =>
												(window.location.href =
													"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
											}
										>
											Get Started with {selectedTreatment === "semaglutide" ? "Semaglutide" : "Tirzepatide"}
										</Button>
									</div>
								</div>
							</Card>

							{/* Disclaimer */}
							<p className="text-xs sm:text-sm text-muted-foreground text-center max-w-3xl mx-auto mt-4">
								Results based on clinical trial averages. Individual outcomes vary depending on health factors, lifestyle, and treatment adherence. Consult with a healthcare provider for personalized guidance.
							</p>
						</div>
					</div>
				</section>

			{/* Science-Backed Results */}
				<LazySection>
					<section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-background to-muted/30">
						<div className="container mx-auto px-4 sm:px-6">
							<div className="max-w-6xl mx-auto">
								<div className="mb-8 sm:mb-10 text-center">
									<span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-3">
										Proven Outcomes
									</span>
									<h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
										<span className="font-light">Evidence-based</span>{" "}
										<span className="italic text-muted-foreground font-light">weight loss</span>
									</h2>
									<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
										Real data from real patients shows meaningful improvements in health, energy, and quality of life.
									</p>
								</div>

								{/* Stats Grid - New Design */}
								<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
									{/* Stat 1 */}
									<div className="relative group">
										<div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl sm:rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
										<div className="relative p-6 sm:p-8 text-center">
											<div className="text-5xl sm:text-6xl md:text-7xl font-bold text-secondary mb-2">
												93<span className="text-3xl sm:text-4xl">%</span>
											</div>
											<p className="text-sm sm:text-base text-muted-foreground mb-3">
												reported <strong className="text-foreground">greater stamina & activity</strong>
											</p>
											<span className="inline-block text-xs text-muted-foreground/70 bg-muted px-3 py-1 rounded-full">
												Within 8 weeks
											</span>
										</div>
									</div>

									{/* Stat 2 */}
									<div className="relative group">
										<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
										<div className="relative p-6 sm:p-8 text-center">
											<div className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-2">
												79<span className="text-3xl sm:text-4xl">%</span>
											</div>
											<p className="text-sm sm:text-base text-muted-foreground mb-3">
												experienced <strong className="text-foreground">improved quality of life</strong>
											</p>
											<span className="inline-block text-xs text-muted-foreground/70 bg-muted px-3 py-1 rounded-full">
												After 6 months
											</span>
										</div>
									</div>

									{/* Stat 3 */}
									<div className="relative group">
										<div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-primary/10 rounded-2xl sm:rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
										<div className="relative p-6 sm:p-8 text-center">
											<div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
												86<span className="text-3xl sm:text-4xl">%</span>
											</div>
											<p className="text-sm sm:text-base text-muted-foreground mb-3">
												noticed <strong className="text-foreground">higher daily energy</strong>
											</p>
											<span className="inline-block text-xs text-muted-foreground/70 bg-muted px-3 py-1 rounded-full">
												By week 12
											</span>
										</div>
									</div>
								</div>

								{/* CTA */}
								<div className="text-center">
									<p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
										Join thousands who've transformed their health with clinically-proven GLP-1 medications.
									</p>
									<Button
										size="lg"
										className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-base sm:text-lg px-8 py-6"
										onClick={() =>
											(window.location.href =
												"https://app.trytrimi.com/start-online-visit/weight-loss-memberships")
										}
									>
										Start Your Transformation
									</Button>
								</div>
							</div>
						</div>
					</section>
				</LazySection>

				{/* Online Convenience Section */}
				<OnlineConvenienceSection />

				{/* Testimonials */}
				<section className="py-10 sm:py-12 md:py-14 bg-gradient-to-br from-primary/5 to-secondary/5">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
							<h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
								<span className="font-light">Real people,</span>{" "}
								<span className="italic text-muted-foreground font-light">real results</span>
							</h2>
							<p className="text-base sm:text-lg text-muted-foreground">
								Join thousands who have transformed their lives with Trimi
							</p>
						</div>

						<div className="max-w-6xl mx-auto">
							<TransformationCarousel />
						</div>
					</div>
				</section>


			{/* FAQ Preview */}
			<section className="py-10 sm:py-12 md:py-14">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<div className="text-center mb-8">
							<h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
								<span className="font-light">Your questions,</span>{" "}
								<span className="italic text-muted-foreground font-light">answered.</span>
							</h2>
							<p className="text-base sm:text-lg text-muted-foreground">
								Get answers to frequently asked questions
							</p>
						</div>

						<div className="space-y-8 mb-8">
							{/* Getting Started */}
							<div>
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 rounded-lg bg-secondary/10">
										<Sparkles className="w-5 h-5 text-secondary" />
									</div>
									<h3 className="text-xl font-bold text-foreground">Getting Started</h3>
								</div>
								<div className="space-y-3">
									{[
										{
											question: "How does Trimi work?",
											answer: "Done in minutes: Fill out our quick, secure online questionnaire. Our doctor network reviews it within 24 hours and—if appropriate—prescribes your medication. No video consultation required.\n\nIf approved, your compounded medication ships discreetly to your door with free expedited delivery, unlimited 24/7 support, and zero hidden fees.",
										},
										{
										question: "Can I resume at my current dose?",
											answer: "Yes, you can!\n\nWhether you're already on a GLP-1 medication or just getting started, it's simple.\n\nIf you have an existing prescription, complete our quick online questionnaire. Our network of licensed doctors will review it and issue a new prescription at the equivalent dose.\n\nIf you're new to treatment, you can begin at the lowest starting dose.\n\nAnd the best part? All doses are the same price — no increase as you move up.",
										},
									{
										question: "What states do we ship to?",
										answer: "All 50 US states via Beluga Health's licensed providers. Free, discreet expedited shipping.",
									},
									{
										question: "What's included with my shipment?",
										answer: "Your Trimi shipment arrives with everything you need: a compounded medication vial (clearly labeled with your dose), sterile syringes and needles, alcohol disinfectant pads, and discreet packaging with free expedited shipping (2–3 days). Plus, you get 24/7 patient portal access to message your provider, request dose adjustments, and track your progress.",
									},
									].map((faq, index) => (
										<Card key={index} className="p-6">
											<h4 className="text-lg font-bold text-foreground mb-3">{faq.question}</h4>
											<p className="text-muted-foreground">{faq.answer}</p>
										</Card>
									))}
								</div>
							</div>

							{/* Pricing & Plans */}
							<div>
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 rounded-lg bg-secondary/10">
										<Shield className="w-5 h-5 text-secondary" />
									</div>
									<h3 className="text-xl font-bold text-foreground">Pricing & Plans</h3>
								</div>
								<div className="space-y-3">
									{[
										{
											question: "How much does it cost?",
											answer: "Compounded semaglutide: $99/month. Compounded tirzepatide: $125/month. Includes consultation, prescription, meds, and free shipping—no hidden fees or memberships. Insurance not accepted; HSA/FSA is accepted.",
										},
										{
											question: "How much weight can I expect to lose?",
											answer: "Clinical trials show 15-22% body weight loss (e.g., 30-44 lbs from 200 lbs) over 6-12 months with GLP-1 meds plus diet/exercise. Results vary; side effects are possible.",
										},
									].map((faq, index) => (
										<Card key={index} className="p-6">
											<h4 className="text-lg font-bold text-foreground mb-3">{faq.question}</h4>
											<p className="text-muted-foreground">{faq.answer}</p>
										</Card>
									))}
								</div>
							</div>

							{/* About Our Partners */}
							<div>
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 rounded-lg bg-secondary/10">
										<Stethoscope className="w-5 h-5 text-secondary" />
									</div>
									<h3 className="text-xl font-bold text-foreground">About Our Partners</h3>
								</div>
								<div className="space-y-3">
									{[
										{
											question: "What pharmacy do we use?",
											answer: "We partner with trusted, US-based compounding pharmacies — VialsRx and Greenwich RX — that operate in full compliance with FDA guidelines and USP <797> sterile compounding standards. They prepare high-quality, patient-specific sterile GLP-1 medications using rigorous quality controls to ensure safety, potency, and consistency.",
										},
										{
											question: "Who is our provider?",
											answer: "Beluga Health, a telehealth platform with board-certified providers licensed in all 50 states, specializing in weight management.",
											link: "https://www.belugahealth.com/",
											linkText: "Learn more.",
										},
									].map((faq, index) => (
										<Card key={index} className="p-6">
											<h4 className="text-lg font-bold text-foreground mb-3">{faq.question}</h4>
											<p className="text-muted-foreground">
												{faq.answer}
												{faq.link && (
													<>
														{" "}
														<a
															href={faq.link}
															target="_blank"
															rel="noopener noreferrer"
															className="text-secondary hover:underline font-medium"
														>
															{faq.linkText}
														</a>
													</>
												)}
											</p>
										</Card>
									))}
								</div>
							</div>
						</div>

						<div className="text-center">
							<Link to="/faq">
								<Button size="lg" variant="outline" className="font-medium">
									View All FAQs
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

				{/* Search & Featured Articles */}
				<LazySection>
					<section className="py-10 sm:py-12 md:py-14 bg-gradient-to-br from-secondary/5 to-primary/5">
						<div className="container mx-auto px-4">
							<div className="max-w-4xl mx-auto">
								<div className="text-center mb-8">
									<h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
										<span className="font-light">Find answers to</span>{" "}
										<span className="italic text-muted-foreground font-light">your questions</span>
									</h2>
									<p className="text-base sm:text-lg text-muted-foreground mb-6">
										Search our comprehensive library of articles about weight loss medications
									</p>
									<div className="max-w-2xl mx-auto">
										<SearchBar />
									</div>
								</div>

								<div className="mt-8">
									<h3 className="text-2xl font-bold text-foreground mb-6 text-center">
										Popular Articles
									</h3>
									<div className="grid md:grid-cols-3 gap-6">
										{blogPosts
											.filter((post) => 
												post.slug === "tirzepatide-dosing-chart" || 
												post.slug === "semaglutide-dosing-chart" ||
												post.slug === "tirzepatide-vs-semaglutide-2025-updates"
											)
											.map((post) => (
											<Link key={post.slug} to={post.path}>
												<Card className="p-6 h-full hover:shadow-lg transition-shadow">
													<span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
														{post.category}
													</span>
													<h4 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
														{post.title}
													</h4>
													<p className="text-muted-foreground text-sm line-clamp-3">
														{post.excerpt}
													</p>
													<div className="mt-4 text-sm text-muted-foreground">{post.readTime}</div>
												</Card>
											</Link>
										))}
									</div>
									<div className="text-center mt-8">
										<Link to="/blog">
											<Button variant="outline" size="lg">
												View All Articles
											</Button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
				</LazySection>

				{/* CTA Section */}
				<section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-primary to-primary/90">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-4">
								<span className="font-light">Ready to start</span>{" "}
								<span className="italic font-light opacity-80">your journey?</span>
							</h2>
							<p className="text-base sm:text-lg mb-6 text-primary-foreground/90">
								Join thousands who have already lost weight with Trimi
							</p>
							<div className="flex justify-center">
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
					</div>
				</section>
			</main>

			<Footer />
			</div>
		</>
	);
};

export default Index;
