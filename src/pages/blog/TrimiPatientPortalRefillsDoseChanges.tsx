import { BlogLayout } from "@/components/blog/BlogLayout";
import { InternalLink } from "@/components/blog/InternalLink";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { Smartphone, RefreshCw, MessageSquare, Clock, Calendar, CheckCircle, Shield, Zap } from "lucide-react";

const TrimiPatientPortalRefillsDoseChanges = () => {
  const publishDate = "2026-01-25";
  const clusterNav = getClusterNavigation("/blog/trimi-patient-portal-refills-dose-changes");

  const faqs = [
    { 
      question: "Can I request medication refills through Trimi's patient portal?", 
      answer: "Yes, refills are automated through your subscription, but you can also request early refills or adjust your delivery schedule through the patient portal. Simply log in and navigate to 'My Medications' to view your refill status and make changes." 
    },
    { 
      question: "How do I request a dose change through Trimi?", 
      answer: "Dose changes can be requested through 24/7 messaging in the patient portal. Describe your progress, any side effects, and why you'd like to adjust your dose. A physician typically reviews and responds within 24 hours, often same-day during business hours." 
    },
    { 
      question: "Does Trimi offer telehealth follow-up appointments?", 
      answer: "Yes, Trimi provides telehealth follow-ups as part of your subscription. You can schedule video consultations with your physician or have asynchronous check-ins through secure messaging. Follow-ups are included at no additional cost." 
    },
    { 
      question: "Is Trimi support really available 24/7?", 
      answer: "Yes, you can message your care team 24/7 through the patient portal. Clinical questions receive physician review, while urgent matters are escalated appropriately. Response times average under 4 hours during business hours and within 24 hours on weekends." 
    },
    { 
      question: "What can I manage through the Trimi patient portal?", 
      answer: "The portal allows you to: message your care team, request dose changes, track shipments, view your prescription history, update payment and shipping info, download receipts for HSA/FSA reimbursement, access educational resources, and schedule telehealth appointments." 
    },
    { 
      question: "How quickly can I get a dose adjustment from Trimi?", 
      answer: "Most dose adjustment requests are reviewed within 24 hours. If approved, your next shipment will reflect the new dose. For urgent adjustments, indicate this in your message and the team prioritizes review. Same-day approvals are common for straightforward requests during business hours." 
    },
    { 
      question: "Can I pause or skip a medication shipment?", 
      answer: "Yes, you can pause your subscription or skip a shipment through the patient portal or by messaging support. Request changes at least 5 days before your next billing date to ensure the change takes effect before your next order processes." 
    },
    { 
      question: "How do I track my Trimi medication shipment?", 
      answer: "Once your order ships, you'll receive an email with tracking information. You can also view shipment status in the patient portal under 'My Orders.' All shipments include temperature monitoring and typically arrive within 3-5 business days." 
    }
  ];

  return (
    <BlogLayout
      title="Trimi Patient Portal: Refills, Dose Changes & 24/7 Telehealth Support"
      description="Complete guide to using Trimi's patient portal for medication refills, dose adjustments, telehealth follow-ups, and 24/7 support access. Manage your entire weight loss journey online."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="Getting Started"
      currentPath="/blog/trimi-patient-portal-refills-dose-changes"
      pageKeywords={["Trimi patient portal", "Trimi refills", "Trimi dose change", "Trimi telehealth", "24/7 weight loss support", "online prescription management"]}
      authorName="Trimi Patient Experience Team"
      authorCredentials="Updated January 25, 2026"
      medicallyReviewed={false}
      reviewDate={publishDate}
      faqs={faqs}
      isMedical={false}
    >
      <QuickAnswerBox 
        question="Can I request refills, dose changes, or telehealth follow-ups through Trimi's patient portal?"
        answer="Yes! Trimi's patient portal provides 24/7 access to request refills, dose adjustments, and telehealth consultations. Message your care team anytime, with typical responses within 4 hours during business hours. All follow-ups are included in your subscription."
      />

      <div className="prose max-w-none mt-8">
        <LastUpdated publishDate={publishDate} modifiedDate={publishDate} />

        <p className="text-lg text-foreground/80 leading-relaxed">
          <InternalLink to="/">Trimi's</InternalLink> patient portal puts you in control of your weight loss journey. From requesting refills to adjusting doses to 24/7 telehealth support, everything you need is accessible from your phone or computer. Here's how to make the most of these features.
        </p>

        <h2 className="flex items-center gap-3">
          <Smartphone className="h-7 w-7 text-primary" />
          Patient Portal Overview
        </h2>

        <p className="text-foreground/80">
          Your Trimi patient portal is your central hub for managing every aspect of your treatment. Access it anytime at <strong>members.trytrimi.com</strong> or through your email links.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 not-prose">
          {[
            { icon: <MessageSquare className="h-6 w-6" />, title: "24/7 Messaging", desc: "Direct access to your care team" },
            { icon: <RefreshCw className="h-6 w-6" />, title: "Manage Refills", desc: "View status & adjust schedule" },
            { icon: <Zap className="h-6 w-6" />, title: "Dose Changes", desc: "Request adjustments anytime" },
            { icon: <Calendar className="h-6 w-6" />, title: "Telehealth", desc: "Schedule video consultations" }
          ].map((feature, index) => (
            <div key={index} className="text-center p-5 border rounded-xl hover:border-primary transition-colors">
              <div className="text-primary mb-3 flex justify-center">{feature.icon}</div>
              <h4 className="font-semibold mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3">
          <RefreshCw className="h-7 w-7 text-primary" />
          Managing Medication Refills
        </h2>

        <p className="text-foreground/80">
          Your medication refills are automated with your subscription, but you have full control to adjust as needed.
        </p>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-4">How Refills Work</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <strong>Automatic Processing</strong>
                <p className="text-sm text-muted-foreground">Your refill is automatically processed 5-7 days before your previous supply runs out</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <strong>Notification Email</strong>
                <p className="text-sm text-muted-foreground">You'll receive an email before each refill with details and tracking once shipped</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <strong>Easy Adjustments</strong>
                <p className="text-sm text-muted-foreground">Skip, pause, or request early shipment through the portal or by messaging support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
          <div className="border rounded-xl p-5">
            <h4 className="font-semibold mb-2">Request Early Refill</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Need your medication sooner? Log into the portal and navigate to "My Medications" → "Request Early Refill." Available up to 7 days early.
            </p>
          </div>
          <div className="border rounded-xl p-5">
            <h4 className="font-semibold mb-2">Skip or Pause Shipment</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Going on vacation or have extra supply? Skip your next shipment or pause your subscription through "Account Settings."
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <Zap className="h-7 w-7 text-primary" />
          Requesting Dose Changes
        </h2>

        <p className="text-foreground/80">
          Your dose may need adjustment as you progress through treatment. Trimi makes this process seamless:
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold mb-4">How to Request a Dose Change</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <div>
                <strong>Log into your patient portal</strong>
                <p className="text-sm text-muted-foreground">Go to members.trytrimi.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <div>
                <strong>Click "Message Care Team"</strong>
                <p className="text-sm text-muted-foreground">Access 24/7 messaging with your providers</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <div>
                <strong>Describe your situation</strong>
                <p className="text-sm text-muted-foreground">Include: current dose, how long you've been on it, side effects, weight loss progress, and what change you'd like</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <div>
                <strong>Receive physician review</strong>
                <p className="text-sm text-muted-foreground">Most requests reviewed within 24 hours; often same-day during business hours</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="border rounded-xl p-5">
            <h4 className="font-semibold mb-3 text-primary">Common Reasons to Increase Dose</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Weight loss has plateaued for 2+ weeks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Minimal side effects at current dose
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Appetite suppression has diminished
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Been on current dose 4+ weeks
              </li>
            </ul>
          </div>
          <div className="border rounded-xl p-5">
            <h4 className="font-semibold mb-3 text-amber-600">Common Reasons to Decrease/Maintain Dose</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Significant ongoing side effects
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Rapid weight loss (2+ lbs/week sustained)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Approaching goal weight
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Difficulty eating adequate nutrition
              </li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <MessageSquare className="h-7 w-7 text-primary" />
          24/7 Support & Telehealth
        </h2>

        <p className="text-foreground/80">
          Questions don't keep business hours, and neither does Trimi support. Here's what's available around the clock:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
          <div className="text-center p-6 bg-primary/5 rounded-xl">
            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-bold mb-2">Always Available</h4>
            <p className="text-sm text-muted-foreground">
              Send messages anytime, day or night, through the secure portal
            </p>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-xl">
            <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-bold mb-2">Fast Response</h4>
            <p className="text-sm text-muted-foreground">
              Average response under 4 hours during business hours; within 24 hours on weekends
            </p>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-xl">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-bold mb-2">Physician Review</h4>
            <p className="text-sm text-muted-foreground">
              Clinical questions reviewed by board-certified physicians, not just support staff
            </p>
          </div>
        </div>

        <div className="border rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-4">Types of Support Available</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Clinical Questions</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Side effect management</li>
                <li>• Dose adjustment requests</li>
                <li>• Drug interaction concerns</li>
                <li>• Symptom evaluation</li>
                <li>• Treatment progress reviews</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Account & Logistics</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Shipping inquiries</li>
                <li>• Billing questions</li>
                <li>• Subscription changes</li>
                <li>• Address updates</li>
                <li>• Receipt requests (HSA/FSA)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <Calendar className="h-7 w-7 text-primary" />
          Scheduling Telehealth Appointments
        </h2>

        <p className="text-foreground/80">
          While most care happens through secure messaging, video consultations are available when you need face-to-face interaction:
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold mb-4">Telehealth Appointments Include:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Initial consultations (if preferred over async)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Quarterly progress reviews
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Complex medical discussions
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Medication switching consultations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Side effect troubleshooting
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Weight maintenance planning
              </li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Cost:</strong> Telehealth appointments are included in your subscription at no additional charge.
          </p>
        </div>

        <h2>Additional Portal Features</h2>

        <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
          {[
            { title: "Shipment Tracking", desc: "Real-time tracking for all medication shipments with temperature monitoring" },
            { title: "Prescription History", desc: "View your complete medication history, doses, and refill dates" },
            { title: "Document Center", desc: "Download receipts, prescriptions, and documentation for records" },
            { title: "Educational Resources", desc: "Access guides on injection technique, diet optimization, and more" },
            { title: "Account Management", desc: "Update payment methods, shipping address, and preferences" },
            { title: "Health Logging", desc: "Track your weight, side effects, and progress over time" }
          ].map((feature, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-xl p-8 my-8 text-center not-prose">
          <h3 className="text-2xl font-bold mb-3">Ready for Convenient Care?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of patients managing their weight loss journey through Trimi's seamless patient portal. Start your free consultation today.
          </p>
          <a 
            href="https://members.trytrimi.com/signup"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Today
          </a>
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

export default TrimiPatientPortalRefillsDoseChanges;
