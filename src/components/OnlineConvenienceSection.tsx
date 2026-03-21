import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import manageTreatments from "@/assets/manage-treatments.png";
import shippingBox from "@/assets/trimi-box.png";

export const OnlineConvenienceSection = () => {
	const features = [
		{
			title: "Easily manage treatments",
			image: manageTreatments,
			alt: "Mobile app interface for managing treatments",
		},
		{
			title: "Free expedited shipping",
			image: shippingBox,
			alt: "Fast and free shipping delivery",
		},
	];

	return (
		<section className="py-10 sm:py-12 px-4 bg-gradient-to-b from-background to-secondary/5">
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-8">
					<h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
						<span className="font-light">Completely online</span>
						<br />
						<span className="font-light">on your schedule.</span>
					</h2>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button size="lg" asChild className="min-w-[160px]">
							<Link to="/how-it-works">Get started</Link>
						</Button>
						<Button size="lg" variant="outline" asChild className="min-w-[160px]">
							<Link to="/faq">See if you're eligible</Link>
						</Button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto items-stretch">
					{features.map((feature, index) => (
						<div key={index} className="flex flex-col">
							<h3 className="text-xl font-semibold text-foreground mb-6 text-center">
								{feature.title}
							</h3>
							<div className="rounded-3xl overflow-hidden bg-secondary/5 p-4 flex-1 flex items-center justify-center">
								<img
									src={feature.image}
									alt={feature.alt}
									className="w-full h-full object-cover rounded-2xl"
									loading="lazy"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
