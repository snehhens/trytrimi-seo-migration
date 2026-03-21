import { BlogLayout } from "@/components/blog/BlogLayout";
import { InternalLink } from "@/components/blog/InternalLink";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { ClipboardCheck, User, FileText, Stethoscope, Truck, CheckCircle, Clock, ArrowRight } from "lucide-react";

const TrimiSignupMedicalAssessment = () => {
  const publishDate = "2026-01-25";
  const clusterNav = getClusterNavigation("/blog/trimi-signup-medical-assessment");

  const faqs = [
    { 
      question: "How do I sign up for Trimi?", 
      answer: "Visit trytrimi.com and click 'Get Started.' You'll create an account, complete a brief medical assessment questionnaire, and a licensed physician will review your information. If approved, your prescription ships within days. The entire process typically takes 24-48 hours from signup to approval." 
    },
    { 
      question: "What questions are on the Trimi medical assessment?", 
      answer: "The assessment covers your medical history, current medications, weight loss goals, previous weight loss attempts, and health conditions relevant to GLP-1 therapy. Questions focus on contraindications like thyroid cancer history, pancreatitis, pregnancy, and current medications that may interact." 
    },
    { 
      question: "How long does the Trimi signup process take?", 
      answer: "The online assessment takes about 10-15 minutes to complete. Physician review typically occurs within 24 hours, often same-day for assessments completed during business hours. If approved, your medication ships within 1-2 business days and arrives 3-5 days later." 
    },
    { 
      question: "Do I need to schedule a video call for the Trimi assessment?", 
      answer: "No, Trimi uses an asynchronous assessment model for convenience. You complete the questionnaire online, and a physician reviews it on their schedule. However, if the physician has questions or wants additional information, they may request a brief video consultation at no extra cost." 
    },
    { 
      question: "What happens if I'm not approved for GLP-1 medication?", 
      answer: "If the physician determines GLP-1 therapy isn't appropriate for you, you won't be charged. The physician will explain why and may suggest alternatives or recommend consulting your primary care provider. Your health and safety are the priority." 
    },
    { 
      question: "What BMI do I need to qualify for Trimi?", 
      answer: "Generally, candidates should have a BMI of 27 or higher with a weight-related health condition (like high blood pressure or type 2 diabetes), or a BMI of 30 or higher regardless of other conditions. The physician evaluates your complete health picture, not just BMI." 
    },
    { 
      question: "Is my medical information secure with Trimi?", 
      answer: "Yes, Trimi uses HIPAA-compliant systems to protect your health information. All data is encrypted in transit and at rest, and access is restricted to your care team. We never sell or share your information with third parties for marketing purposes." 
    },
    { 
      question: "Can I choose between semaglutide and tirzepatide during signup?", 
      answer: "You can indicate your preference during the assessment, and the physician will consider it alongside your medical history. Some patients are better suited for one medication over the other based on their health conditions, insurance considerations, or previous medication experiences." 
    }
  ];

  return (
    <BlogLayout
      title="How to Sign Up for Trimi: Complete Medical Assessment Guide"
      description="Step-by-step walkthrough of Trimi's signup process and online medical assessment. Learn what to expect, what questions you'll answer, and how quickly you can start treatment."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="Getting Started"
      currentPath="/blog/trimi-signup-medical-assessment"
      pageKeywords={["Trimi signup", "Trimi medical assessment", "how to get semaglutide online", "Trimi enrollment", "online weight loss prescription", "GLP-1 qualification"]}
      authorName="Trimi Enrollment Team"
      authorCredentials="Updated January 25, 2026"
      medicallyReviewed={false}
      reviewDate={publishDate}
      faqs={faqs}
      isMedical={false}
    >
      <QuickAnswerBox 
        question="How do I sign up with Trimi and complete their online medical assessment?"
        answer="Visit trytrimi.com and complete a 10-15 minute online medical assessment. A physician reviews your information within 24 hours (often same-day). If approved, your medication ships within 1-2 days and arrives in 3-5 days. No video call required—it's fully asynchronous."
      />

      <div className="prose max-w-none mt-8">
        <LastUpdated publishDate={publishDate} modifiedDate={publishDate} />

        <p className="text-lg text-foreground/80 leading-relaxed">
          Getting started with <InternalLink to="/">Trimi</InternalLink> is straightforward and designed for your convenience. This guide walks you through every step of the signup process—from creating your account to receiving your first medication shipment.
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-4">Timeline at a Glance</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 font-medium">10-15 min</span>
              <span>Assessment</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 font-medium">24 hours</span>
              <span>Physician Review</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 font-medium">3-5 days</span>
              <span>Delivery</span>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <User className="h-7 w-7 text-primary" />
          Step 1: Create Your Account
        </h2>

        <p className="text-foreground/80">
          Start by visiting <a href="https://members.trytrimi.com/signup" className="text-primary font-medium">trytrimi.com</a> and clicking "Get Started" or "Start Now." You'll create a secure account with:
        </p>

        <ul>
          <li><strong>Email address</strong> – Used for account access and important notifications</li>
          <li><strong>Password</strong> – Create a secure password for your patient portal</li>
          <li><strong>Basic contact info</strong> – Name, phone number, and shipping address</li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 my-6 not-prose">
          <p className="text-sm">
            <strong>Pro Tip:</strong> Use an email you check regularly—this is where you'll receive prescription updates, shipment tracking, and care team messages.
          </p>
        </div>

        <h2 className="flex items-center gap-3">
          <ClipboardCheck className="h-7 w-7 text-primary" />
          Step 2: Complete the Medical Assessment
        </h2>

        <p className="text-foreground/80">
          The medical assessment is where a physician gathers the information needed to determine if <InternalLink to="/treatments/semaglutide">semaglutide</InternalLink> or <InternalLink to="/treatments/tirzepatide">tirzepatide</InternalLink> is right for you. Plan for about 10-15 minutes to complete it thoughtfully.
        </p>

        <div className="space-y-6 my-8 not-prose">
          <div className="border rounded-xl p-5">
            <h3 className="font-bold mb-3">Personal & Health History</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Date of birth, sex assigned at birth, height, and current weight</li>
              <li>• Weight history and previous weight loss attempts</li>
              <li>• Any previous experience with GLP-1 medications</li>
              <li>• Allergies and medication sensitivities</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold mb-3">Medical Conditions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Current diagnoses (diabetes, high blood pressure, sleep apnea, etc.)</li>
              <li>• History of thyroid conditions or thyroid cancer</li>
              <li>• History of pancreatitis or gallbladder issues</li>
              <li>• Kidney or liver conditions</li>
              <li>• Mental health history</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold mb-3">Current Medications</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• All prescription medications you're currently taking</li>
              <li>• Over-the-counter medications and supplements</li>
              <li>• Insulin or other diabetes medications (important for dosing)</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold mb-3">Contraindication Screening</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Family history of medullary thyroid carcinoma (MTC)</li>
              <li>• Multiple Endocrine Neoplasia syndrome type 2 (MEN2)</li>
              <li>• Pregnancy status or plans to become pregnant</li>
              <li>• Breastfeeding status</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 my-6 not-prose">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Be Honest & Complete</h4>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Accurate information is essential for your safety. The physician uses your responses to identify potential risks and customize your treatment. There's no judgment—we're here to help you succeed safely.
          </p>
        </div>

        <h2 className="flex items-center gap-3">
          <FileText className="h-7 w-7 text-primary" />
          Step 3: Treatment Preferences
        </h2>

        <p className="text-foreground/80">
          After the medical questions, you'll share your treatment preferences:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
          <div className="border rounded-xl p-5">
            <h4 className="font-semibold mb-3">Medication Preference</h4>
            <p className="text-sm text-muted-foreground">
              Indicate if you prefer semaglutide, tirzepatide, or want the physician to recommend based on your profile. Learn about the differences in our <InternalLink to="/compare">comparison guide</InternalLink>.
            </p>
          </div>
          <div className="border rounded-xl p-5">
            <h4 className="font-semibold mb-3">Weight Loss Goals</h4>
            <p className="text-sm text-muted-foreground">
              Share your target weight or percentage of body weight you'd like to lose. This helps the physician plan your treatment timeline.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <Stethoscope className="h-7 w-7 text-primary" />
          Step 4: Physician Review
        </h2>

        <p className="text-foreground/80">
          After you submit your assessment, a <InternalLink to="/blog/trimi-board-certified-providers">board-certified physician</InternalLink> reviews your information. Here's what happens:
        </p>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 my-8 not-prose">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold">Comprehensive Review</h4>
                <p className="text-sm text-muted-foreground">The physician evaluates your complete health profile, not just BMI, to determine candidacy</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold">Follow-Up (If Needed)</h4>
                <p className="text-sm text-muted-foreground">If clarification is needed, the physician may message you or request a brief video call</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold">Treatment Decision</h4>
                <p className="text-sm text-muted-foreground">You'll receive an email with the physician's decision and next steps</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
          <div className="text-center p-5 border rounded-xl">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary mb-1">&lt;24 hrs</div>
            <p className="text-sm text-muted-foreground">Typical review time</p>
          </div>
          <div className="text-center p-5 border rounded-xl">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary mb-1">Same Day</div>
            <p className="text-sm text-muted-foreground">Common for business hours</p>
          </div>
          <div className="text-center p-5 border rounded-xl">
            <Stethoscope className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <p className="text-sm text-muted-foreground">Physician reviewed</p>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <Truck className="h-7 w-7 text-primary" />
          Step 5: Prescription & Shipping
        </h2>

        <p className="text-foreground/80">
          Once approved, your prescription is sent to our partner pharmacy and your medication ships promptly:
        </p>

        <div className="space-y-4 my-8 not-prose">
          <div className="flex items-center gap-4 p-4 border rounded-xl">
            <div className="bg-primary/10 rounded-full p-2">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Prescription Sent</h4>
              <p className="text-sm text-muted-foreground">Your prescription is transmitted to our FDA-registered pharmacy partner</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border rounded-xl">
            <div className="bg-primary/10 rounded-full p-2">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Medication Prepared</h4>
              <p className="text-sm text-muted-foreground">Your personalized dose is compounded and quality-tested (1-2 business days)</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border rounded-xl">
            <div className="bg-primary/10 rounded-full p-2">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Cold-Chain Shipping</h4>
              <p className="text-sm text-muted-foreground">Shipped with ice packs in insulated packaging (2-3 business days transit)</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border rounded-xl">
            <div className="bg-primary/10 rounded-full p-2">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Delivered to Your Door</h4>
              <p className="text-sm text-muted-foreground">Discreet packaging with tracking—refrigerate promptly upon arrival</p>
            </div>
          </div>
        </div>

        <h2>Qualification Requirements</h2>

        <p className="text-foreground/80">
          While each case is evaluated individually, general qualification criteria include:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <h3 className="font-bold mb-3">Typically Qualify</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                BMI ≥30 (with or without other conditions)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                BMI ≥27 with weight-related condition
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Age 18+ and not pregnant/breastfeeding
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                No contraindicated conditions
              </li>
            </ul>
          </div>
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
            <h3 className="font-bold mb-3 text-destructive">May Not Qualify</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-destructive">✗</span>
                Personal/family history of MTC or MEN2
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive">✗</span>
                Active pancreatitis
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive">✗</span>
                Pregnant or breastfeeding
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive">✗</span>
                Known hypersensitivity to GLP-1s
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-8 my-8 text-center not-prose">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Complete your free medical assessment in about 10 minutes. There's no obligation—you're only charged if approved and you choose to proceed.
          </p>
          <a 
            href="https://members.trytrimi.com/signup"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Free Assessment
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            No credit card required until prescription is approved
          </p>
        </div>

        <TopicClusterNav 
          topic="Getting Started"
          relatedArticles={clusterNav.relatedInCluster}
          hubPage={clusterNav.hubPage}
        />
      </div>
    </BlogLayout>
  );
};

export default TrimiSignupMedicalAssessment;
