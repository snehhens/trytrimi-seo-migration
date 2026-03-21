import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "@/compat/react-router-dom";

const ImportantSafetyInformation = () => {
	return (
		<div className="min-h-screen flex flex-col bg-background">
			<SEOHead
				title="Important Safety Information | Trimi Health"
				description="Important safety information for compounded GLP-1 medications including semaglutide and tirzepatide. Learn about potential risks, side effects, warnings, and drug interactions."
				canonical="https://trytrimi.com/important-safety-information"
			/>
			<Navigation />

			<main className="flex-1 py-12 md:py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						{/* Page Title */}
						<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
							Important Safety Information
						</h1>

						{/* Jump to Section */}
						<div className="mb-12 space-y-3">
							<p className="text-muted-foreground font-medium">Jump to a treatment</p>
							<div className="flex flex-wrap gap-2">
								<a
									href="#section-compounded-glp-1"
									className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
								>
									Compounded GLP-1 (semaglutide)
								</a>
								<a
									href="#section-compounded-glp-1-gip"
									className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
								>
									Compounded GLP-1+GIP (tirzepatide)
								</a>
							</div>
						</div>

						{/* Intro Text */}
						<div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
							<p>
								Please see Important Safety Information below for intended use, potential risks and side effects, use in specific populations, and drug interactions of advertised prescription treatments.
							</p>
							<p>
								Trimi encourages the reporting of any adverse side effects of medications to the medical professional and the distributing pharmacy. Additionally, to report suspected adverse reactions contact the FDA at 1-800-FDA-1088 or{" "}
								<a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
									www.fda.gov/medwatch
								</a>.
							</p>
							<p>
								In case of emergencies, please call 911 or go seek care at the nearest emergency room.
							</p>
						</div>

						{/* Trimi Advertisements */}
						<section className="mb-12">
							<h2 className="text-2xl font-bold text-foreground mb-4">Trimi Advertisements</h2>
							<p className="text-muted-foreground leading-relaxed">
								Advertisements from TryTrimi.com are paid for by Trimi Health for the purposes of advertising and marketing Trimi services. Advertisements may include paid actors or actor portrayals. Advertisements including testimonials, endorsements, or real Trimi users will be indicated as such. Medication and program results may vary and there is no guarantee of any given outcome.
							</p>
						</section>

						{/* Trimi Services */}
						<section className="mb-12">
							<h2 className="text-2xl font-bold text-foreground mb-4">Trimi Services</h2>
							<p className="text-muted-foreground leading-relaxed">
								Trimi offers and facilitates access to consultations with licensed medical professionals to determine medical appropriateness for advertised treatments and plans. Trimi, through its services, may facilitate fulfillment of prescriptions through its third-party pharmacy network. Trimi, as a managed services organization, does not provide medical advice and does not fulfill prescription medication and is not licensed as a medical provider or a pharmacy. Trimi offers software and technology services to facilitate medical consultation and fulfillment of prescription medications. For further information, please see Trimi's Terms of Service.
							</p>
						</section>

						{/* Special Advertising Offers */}
						<section className="mb-12">
							<h2 className="text-2xl font-bold text-foreground mb-4">Trimi Special Advertising Offers</h2>
							<p className="text-muted-foreground leading-relaxed mb-4">
								Advertisements from TryTrimi.com may include, from time to time, special or introductory offers for promotional pricing of services. All advertised offers from TryTrimi.com are only available for 24 hours following removal of the offer from the website and automatically expire thereafter.
							</p>
							<p className="text-muted-foreground leading-relaxed mb-4">
								"Same price per dose" or similar offers are subject to additional terms and conditions including:
							</p>
							<ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
								<li>TryTrimi.com reserves the right to adjust pricing from time to time in accordance with supply and market conditions</li>
								<li>Same price per dose offers automatically expire within 24 hours of any price changes for services available through TryTrimi.com</li>
								<li>Promotional offers including "first month" are not subject to the same price per dose offerings and are instead promotional offers. Same price per dose offers only apply to standard full-price purchases based on price listed on website.</li>
							</ul>
						</section>

						{/* Prescription Medications */}
						<section className="mb-12">
							<h2 className="text-2xl font-bold text-foreground mb-4">Prescription Medications</h2>
							<p className="text-muted-foreground leading-relaxed mb-4">
								Prescription medications require a medical consultation and prescription with a licensed healthcare provider. Writing of a prescription is solely determined by the medical professional and access to medications and treatment plans is in no way guaranteed. Prescriptions written by medical professionals may be available through Trimi software services and may be fulfilled by licensed pharmacies.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								Prescription medications carry risks. To review a full list of risks and side effects, please see "Important Safety Information" and speak with your doctor regarding potential risks or side effects.
							</p>
						</section>

						{/* Compounded Medications */}
						<section className="mb-12">
							<h2 className="text-2xl font-bold text-foreground mb-4">Compounded Medications</h2>
							<p className="text-muted-foreground leading-relaxed mb-4">
								Medical professionals may issue prescriptions to compounded medications that can be filled by licensed USA-based compounding pharmacies. Compounded medications are not approved by the FDA for safety or effectiveness but may be prescribed during drug shortages or when commercially available FDA-approved drugs do not meet patient needs.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								Trimi may facilitate the filling of FDA-approved medications or compounded medications through a network of licensed pharmacies throughout the US. Medication may be compounded based on a healthcare provider's prescription to meet the specific needs of the patient, which may differ from commercially available products. For medications compounded during drug shortages, FDA-approved medications may be available.
							</p>
						</section>

						{/* Ownership of Trademarks */}
						<section className="mb-12">
							<h2 className="text-2xl font-bold text-foreground mb-4">Ownership of Trademarks</h2>
							<p className="text-muted-foreground leading-relaxed">
								Ozempic® and Wegovy® are trademarks of Novo Nordisk A/S. Mounjaro® and Zepbound® are trademarks of Eli Lilly and Company. Trimi has no ownership over brand-name, FDA-approved medications or products.
							</p>
						</section>

						{/* Inquiries */}
						<section className="mb-16">
							<h2 className="text-2xl font-bold text-foreground mb-4">Inquiries</h2>
							<p className="text-muted-foreground leading-relaxed">
								For questions related to Trimi's advertisements or services, please contact{" "}
								<a href="mailto:support@trytrimi.com" className="text-primary hover:underline">
									support@trytrimi.com
								</a>.
							</p>
						</section>

						{/* Compounded GLP-1 (semaglutide) Section */}
						<section id="section-compounded-glp-1" className="mb-16 scroll-mt-24">
							<h2 className="text-3xl font-bold text-foreground mb-4">Compounded GLP-1 (semaglutide)</h2>
							<p className="text-muted-foreground italic mb-6">
								*Compounded medications may be prescribed by physicians but have not been FDA regulated for safety, effectiveness, or quality. FDA-approved medicines containing semaglutide are available.
							</p>

							{/* Warning */}
							<div className="mb-8">
								<h3 className="text-xl font-bold text-foreground mb-4">WARNING</h3>
								<p className="text-muted-foreground mb-4">
									Please contact your doctor ASAP and seek in-person care immediately if a side effect becomes problematic or you experience:
								</p>
								<ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
									<li>Severe nausea and/or vomiting resulting in dehydration—it is important to stay well hydrated and drink plenty of fluids while on this medication</li>
									<li>Kidney problems/kidney failure - vomiting, nausea, diarrhea can cause dehydration and kidney issues and make kidney problems worse in individuals who have pre-existing kidney conditions; may sometimes lead to the need for hemodialysis</li>
									<li>Thyroid C-Cell Tumor: Trouble swallowing, hoarseness, a lump or swelling in your neck, or shortness of breath (see black box warning below)</li>
									<li>Pancreatitis: Severe pain in your abdomen or back that will not go away</li>
									<li>Acute gallbladder disease - Pain in the middle or right upper stomach, fever, white parts of your eyes turn yellow or skin turns yellow, nausea/vomiting. If gallstones or inflammation of the gallbladder is suspected further studies are needed.</li>
									<li>Hepatitis/Elevated liver enzymes/Jaundice</li>
									<li>Diabetic retinopathy problems: Changes in vision in those with type II diabetes, particularly vision problems may worsen in those with a history of diabetic retinopathy</li>
									<li>Severe gastrointestinal disease - may cause gastrointestinal disease; do not use if you have a history of severe gastrointestinal disease</li>
									<li>Signs of low blood sugar (for example, dizziness, weakness, shakiness, jitteriness, headache, anxiety/mood changes, rapid heartbeat, confusion, slurred speech, sweating, or lightheadedness). While this is rare with GLP-1s, if it occurs, please seek in-person care immediately.</li>
									<li>Increasing heart rate</li>
									<li>Worsening depression, behavior changes, or suicidality</li>
								</ul>
								<p className="text-muted-foreground mt-4 font-medium">
									Never share the semaglutide with other people.
								</p>
							</div>

							{/* Drug Interactions */}
							<div className="mb-8">
								<h3 className="text-xl font-bold text-foreground mb-4">Drug Interactions</h3>
								<p className="text-muted-foreground leading-relaxed mb-4">
									As with other medications, compounded semaglutide can interact with alcohol and certain prescription and non-prescription medications and herbal products. The risk of hypoglycemia is increased when combined with insulin or insulin secretagogues such as sulfonylureas. Compounded semaglutide delays gastric emptying and may impact the absorption of oral medications. If you are on thyroid hormone medication, prior to starting compounded semaglutide, please review the timing of taking your thyroid hormone medication with the doctor who prescribes it as it may need to be adjusted. The drug levels of medications with narrow therapeutic windows (ie warfarin) should be monitored closely while on compounded semaglutide.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Please consult the pharmaceutical packaging for a full list of side effects, warnings, interactions and additional information.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									To report suspected adverse reactions to compounded semaglutide, contact the FDA at 1-800-FDA-1088 or{" "}
									<a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
										www.fda.gov/medwatch
									</a>.
								</p>
								<p className="text-muted-foreground leading-relaxed">
									In case of emergencies, please call 911 or go to the nearest emergency room.
								</p>
								<p className="text-muted-foreground leading-relaxed mt-4 italic">
									<strong>Note:</strong> The above statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
								</p>
							</div>

							{/* Black Box Warning */}
							<div className="mb-8 bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg">
								<h3 className="text-xl font-bold text-foreground mb-4">BLACK BOX WARNING</h3>
								<p className="text-muted-foreground leading-relaxed mb-4">
									GLP-1s are contraindicated in individuals with a history of medullary thyroid carcinoma, a family history of such, or in patients with multiple endocrine neoplasia syndrome type 2. Do not take them if you have ever had thyroid cancer. In studies with rodents, GLP-1s caused thyroid tumors, including thyroid cancer; it is not known if they will cause thyroid tumors or cancer in humans. Please notify your doctor ASAP if you develop trouble swallowing, hoarseness, a lump or swelling in your neck, or shortness of breath.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									If you experience a medical emergency, call 911 or go to the nearest emergency room.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Tell your healthcare provider about your medical history prior to taking semaglutide.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Avoid alcohol while taking this medication. If you're taking diabetes medications, please discuss this with your prescribing doctor before starting semaglutide, as your diabetes medications may need to be adjusted as you lose weight.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Use adequate contraception while taking this medication. Do not take this medication if pregnant, trying to get pregnant or breastfeeding. If you plan to become pregnant, this medication needs to be stopped at least 2 months before trying. This medication may cause fetal harm.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Notify your doctor if you have kidney, liver, or pancreas problems.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Stop using semaglutide and call your healthcare provider immediately if you have severe stomach or abdomen pain that will not go away, with or without vomiting.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Stop using semaglutide and get medical help right away if you have any symptoms of a serious allergic reaction, including swelling of your face, lips, tongue, or throat; problems breathing or swallowing; severe rash or itching; fainting or feeling dizzy; or very rapid heartbeat.
								</p>
								<p className="text-muted-foreground leading-relaxed">
									Serious hypersensitivity reactions (e.g., anaphylaxis and angioedema) have been reported. Discontinue semaglutide if suspected and promptly seek medical advice.
								</p>
							</div>

							<a href="#" className="text-primary hover:underline text-sm">
								return to treatment list
							</a>
						</section>

						{/* Compounded GLP-1+GIP (tirzepatide) Section */}
						<section id="section-compounded-glp-1-gip" className="mb-16 scroll-mt-24">
							<h2 className="text-3xl font-bold text-foreground mb-4">Compounded GLP-1+GIP (tirzepatide)</h2>
							<p className="text-muted-foreground italic mb-6">
								*Compounded medications may be prescribed by physicians but have not been FDA regulated for safety, effectiveness, or quality. FDA-approved medicines containing tirzepatide are available.
							</p>

							{/* Warning */}
							<div className="mb-8">
								<h3 className="text-xl font-bold text-foreground mb-4">WARNING</h3>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Compounded tirzepatide usage has been associated with the potential development of thyroid tumors, including thyroid cancer. Watch for any potential symptoms, such as neck lumps or swelling, hoarseness, difficulty swallowing, or breathlessness. Should any of these symptoms arise, it is imperative to inform your healthcare provider promptly.
								</p>
								<p className="text-muted-foreground leading-relaxed">
									Avoid using compounded tirzepatide if you or any family members have a history of medullary thyroid carcinoma (MTC), a specific type of thyroid cancer. Similarly, refrain from its use if diagnosed with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2), or if you've previously experienced a severe allergic reaction to tirzepatide or any of its components.
								</p>
							</div>

							{/* Serious Side Effects */}
							<div className="mb-8">
								<h3 className="text-xl font-bold text-foreground mb-4">Serious Side Effects</h3>
								<p className="text-muted-foreground mb-4">
									Compounded tirzepatide carries the risk of severe side effects, which include:
								</p>
								<ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
									<li><strong>Gastrointestinal Issues:</strong> Reports indicate the possibility of severe stomach problems associated with compounded tirzepatide usage. Notify your healthcare provider if you experience persistent or severe stomach discomfort.</li>
									<li><strong>Kidney Complications:</strong> Diarrhea, nausea, and vomiting may lead to dehydration, potentially resulting in kidney problems. Adequate fluid intake is crucial to mitigate this risk.</li>
									<li><strong>Gallbladder Concerns:</strong> Some individuals may encounter gallbladder problems while using compounded tirzepatide. Seek immediate medical attention if symptoms such as upper abdominal pain, fever, jaundice, or changes in stool color occur.</li>
									<li><strong>Pancreatitis:</strong> Discontinue use and contact your healthcare provider if you experience persistent abdominal pain, with or without vomiting, as it could indicate inflammation of the pancreas.</li>
									<li><strong>Allergic Reactions:</strong> Cease compounded tirzepatide usage and seek urgent medical assistance if you develop symptoms of a severe allergic reaction, including facial swelling, breathing difficulties, rash, or rapid heartbeat.</li>
									<li><strong>Hypoglycemia:</strong> The risk of low blood sugar may increase when using compounded tirzepatide alongside medications that lower blood sugar levels. Recognizable symptoms include dizziness, sweating, confusion, and rapid heartbeat.</li>
									<li><strong>Vision Changes:</strong> Notify your healthcare provider of any alterations in vision observed during tirzepatide treatment.</li>
									<li><strong>Depression or Suicidal Thoughts:</strong> Pay close attention to changes in mood or mental state while using tirzepatide, and promptly report any concerns to your healthcare provider.</li>
								</ul>
							</div>

							{/* Common Side Effects */}
							<div className="mb-8">
								<h3 className="text-xl font-bold text-foreground mb-4">Common Side Effects</h3>
								<p className="text-muted-foreground mb-4">
									The most frequently reported side effects of compounded tirzepatide include:
								</p>
								<ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
									<li>Nausea</li>
									<li>Diarrhea</li>
									<li>Vomiting</li>
									<li>Constipation</li>
									<li>Abdominal pain</li>
									<li>Indigestion</li>
									<li>Injection site reactions</li>
									<li>Fatigue</li>
									<li>Allergic reactions</li>
									<li>Belching</li>
									<li>Hair loss</li>
									<li>Heartburn</li>
								</ul>
								<p className="text-muted-foreground mt-4">
									These side effects are not exhaustive. Should you experience any persistent or bothersome side effects, discuss them with your healthcare provider for appropriate management.
								</p>
								<p className="text-muted-foreground mt-2">
									Tell your healthcare provider if you have any side effects.
								</p>
								<p className="text-muted-foreground mt-4">
									To report suspected severe side effects or adverse reactions to compounded tirzepatide, contact the FDA at 1-800-FDA-1088 or{" "}
									<a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
										www.fda.gov/medwatch
									</a>. In case of emergencies, please call 911 or go to the nearest emergency room.
								</p>
							</div>

							{/* Drug Interactions */}
							<div className="mb-8">
								<h3 className="text-xl font-bold text-foreground mb-4">Drug Interactions</h3>
								<p className="text-muted-foreground leading-relaxed mb-4">
									As with other medications, compounded tirzepatide can interact with alcohol and certain prescription and non-prescription medications and herbal products. The risk of hypoglycemia is increased when combined with insulin or insulin secretagogues such as sulfonylureas. Compounded tirzepatide delays gastric emptying and may impact the absorption of oral medications. If you are on thyroid hormone medication, prior to starting compounded tirzepatide, please review the timing of taking your thyroid hormone medication with the doctor who prescribes it as it may need to be adjusted. The drug levels of medications with narrow therapeutic windows (ie warfarin) should be monitored closely while on compounded tirzepatide.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Please consult the pharmaceutical packaging for a full list of side effects, warnings, interactions and additional information.
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Tirzepatide may alter the efficacy of birth control pills. Talk with your doctor before starting tirzepatide if you are on birth control. Your healthcare provider may recommend another type of birth control for 4 weeks after you start tirzepatide and for 4 weeks after each increase in your dose.
								</p>
								<p className="text-muted-foreground leading-relaxed italic">
									<strong>Note:</strong> The above statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
								</p>
							</div>

							<a href="#" className="text-primary hover:underline text-sm">
								return to treatment list
							</a>
						</section>

						{/* Related Resources - Internal Links for SEO */}
						<section className="mt-16 pt-8 border-t border-border">
							<h2 className="text-2xl font-bold text-foreground mb-6">Related Resources</h2>
							<div className="grid sm:grid-cols-2 gap-4">
								<Link 
									to="/treatments/semaglutide" 
									className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
								>
									<h3 className="font-semibold text-foreground mb-1">Compounded Semaglutide</h3>
									<p className="text-sm text-muted-foreground">Learn about our semaglutide treatment options and pricing.</p>
								</Link>
								<Link 
									to="/treatments/tirzepatide" 
									className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
								>
									<h3 className="font-semibold text-foreground mb-1">Compounded Tirzepatide</h3>
									<p className="text-sm text-muted-foreground">Explore our tirzepatide treatment options and pricing.</p>
								</Link>
								<Link 
									to="/faq" 
									className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
								>
									<h3 className="font-semibold text-foreground mb-1">Frequently Asked Questions</h3>
									<p className="text-sm text-muted-foreground">Get answers to common questions about our treatments.</p>
								</Link>
								<Link 
									to="/how-it-works" 
									className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
								>
									<h3 className="font-semibold text-foreground mb-1">How It Works</h3>
									<p className="text-sm text-muted-foreground">Learn about our simple process to get started.</p>
								</Link>
							</div>
						</section>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default ImportantSafetyInformation;
