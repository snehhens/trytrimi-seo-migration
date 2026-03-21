import { BlogLayout } from "@/components/blog/BlogLayout";
import { InternalLink } from "@/components/blog/InternalLink";
import { QuickAnswerBox } from "@/components/blog/QuickAnswerBox";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { getClusterNavigation } from "@/utils/relatedContent";
import { LastUpdated } from "@/components/blog/LastUpdated";
import { DollarSign, Package, Truck, CreditCard, Calendar, CheckCircle, Clock, Shield } from "lucide-react";

const TrimiPricingSubscriptionShipping = () => {
  const publishDate = "2026-01-25";
  const clusterNav = getClusterNavigation("/blog/trimi-pricing-subscription-shipping");

  const faqs = [
    { 
      question: "How much does Trimi cost per month?", 
      answer: "Trimi offers semaglutide starting at $179/month and tirzepatide starting at $349/month. All plans include medication, physician consultations, 24/7 support, and free shipping. Prices may vary based on dosage, with higher doses available at adjusted pricing. No hidden fees or surprise charges." 
    },
    { 
      question: "What's included in a Trimi subscription?", 
      answer: "Every Trimi subscription includes: compounded medication (30-day supply), board-certified physician oversight, initial consultation and ongoing check-ins, 24/7 messaging support, dosage adjustments as needed, cold-chain shipping with tracking, syringes and alcohol swabs, and access to educational resources." 
    },
    { 
      question: "Does Trimi offer free shipping?", 
      answer: "Yes, Trimi provides free priority shipping on all medication orders. Medications ship in temperature-controlled packaging with ice packs to maintain proper storage conditions. Most orders arrive within 3-5 business days after prescription approval." 
    },
    { 
      question: "Can I cancel my Trimi subscription anytime?", 
      answer: "Yes, Trimi subscriptions can be cancelled anytime without penalties or cancellation fees. Simply contact support before your next billing date to cancel. You'll continue to have access through the end of your current billing period, and any unused medication is yours to keep." 
    },
    { 
      question: "How does Trimi billing work?", 
      answer: "Trimi bills monthly on the same date each month. You're charged after your prescription is approved, and subsequent charges occur on your billing anniversary. You can update payment methods, pause subscriptions, or adjust dosages through your patient portal or by contacting support." 
    },
    { 
      question: "Does Trimi accept insurance?", 
      answer: "Trimi operates on a cash-pay model and doesn't bill insurance directly. However, you can submit receipts to your insurance or HSA/FSA for potential reimbursement. Many patients find Trimi's transparent pricing more affordable than insurance copays for brand-name alternatives." 
    },
    { 
      question: "What payment methods does Trimi accept?", 
      answer: "Trimi accepts all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, HSA/FSA cards, and Apple Pay. All transactions are processed securely with industry-standard encryption to protect your financial information." 
    },
    { 
      question: "Are there any hidden fees with Trimi?", 
      answer: "No hidden fees. Your subscription price includes everything: medication, physician consultations, support, and shipping. There are no enrollment fees, consultation fees, or surprise charges. The price you see is the price you pay each month." 
    }
  ];

  return (
    <BlogLayout
      title="Trimi Pricing, Subscription Plans & Shipping: Complete Cost Breakdown"
      description="Transparent guide to Trimi's pricing structure, what's included in each subscription, shipping policies, and billing details. Everything you need to know about costs before starting."
      publishDate={publishDate}
      lastUpdated={publishDate}
      category="Cost"
      currentPath="/blog/trimi-pricing-subscription-shipping"
      pageKeywords={["Trimi cost", "Trimi pricing", "Trimi subscription", "Trimi shipping", "semaglutide price", "tirzepatide cost", "weight loss medication price"]}
      authorName="Trimi Customer Success Team"
      authorCredentials="Updated January 25, 2026"
      medicallyReviewed={false}
      reviewDate={publishDate}
      faqs={faqs}
      isMedical={false}
    >
      <QuickAnswerBox 
        question="What are Trimi's prices and what's included?"
        answer="Semaglutide starts at $179/month and tirzepatide at $349/month. All-inclusive pricing covers medication, physician consultations, 24/7 support, free priority shipping, and supplies. No hidden fees, cancel anytime."
      />

      <div className="prose max-w-none mt-8">
        <LastUpdated publishDate={publishDate} modifiedDate={publishDate} />

        <p className="text-lg text-foreground/80 leading-relaxed">
          Understanding exactly what you'll pay is essential when choosing a weight loss program. This complete guide breaks down <InternalLink to="/">Trimi's</InternalLink> pricing structure, subscription details, and shipping policies with full transparency—no hidden fees, no surprises.
        </p>

        <h2 className="flex items-center gap-3">
          <DollarSign className="h-7 w-7 text-primary" />
          Trimi Pricing Overview
        </h2>

        <p className="text-foreground/80">
          Trimi offers straightforward, all-inclusive pricing with no hidden fees. Your subscription includes medication, physician oversight, support, and shipping.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="border-2 border-primary rounded-xl p-6 relative">
            <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="font-bold text-xl mb-2 text-primary">Semaglutide</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">$179</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Same active ingredient as Ozempic® and Wegovy®
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                30-day medication supply
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Board-certified physician
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                24/7 support access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Free priority shipping
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Syringes & supplies included
              </li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl mb-2">Tirzepatide</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">$349</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Same active ingredient as Mounjaro® and Zepbound®
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                30-day medication supply
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Board-certified physician
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                24/7 support access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Free priority shipping
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Syringes & supplies included
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-8 not-prose">
          <h4 className="font-semibold mb-2">💡 Dosage-Based Pricing</h4>
          <p className="text-sm text-muted-foreground">
            Prices shown are for standard starting doses. Higher maintenance doses may have adjusted pricing. Your physician will discuss any pricing changes before adjusting your prescription.
          </p>
        </div>

        <h2 className="flex items-center gap-3">
          <Package className="h-7 w-7 text-primary" />
          What's Included in Your Subscription
        </h2>

        <p className="text-foreground/80">
          Every Trimi subscription is comprehensive—designed to give you everything needed for successful weight loss without additional costs.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
          {[
            { icon: "💊", title: "Medication", desc: "30-day supply of compounded semaglutide or tirzepatide from FDA-registered pharmacies" },
            { icon: "👨‍⚕️", title: "Physician Care", desc: "Initial consultation + ongoing check-ins with board-certified obesity medicine physicians" },
            { icon: "📱", title: "24/7 Support", desc: "Message your care team anytime through the patient portal—responses within hours" },
            { icon: "📈", title: "Dose Adjustments", desc: "Personalized titration schedule with adjustments based on your progress and tolerance" },
            { icon: "📦", title: "Free Shipping", desc: "Temperature-controlled priority shipping with tracking on every order" },
            { icon: "💉", title: "Supplies", desc: "Syringes, needles, and alcohol swabs included—no additional purchases needed" },
            { icon: "📚", title: "Resources", desc: "Educational materials, dietary guidance, and lifestyle optimization tips" },
            { icon: "🔄", title: "Flexibility", desc: "Pause, adjust, or cancel anytime without penalties or fees" }
          ].map((item, index) => (
            <div key={index} className="border rounded-lg p-4 flex items-start gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3">
          <Truck className="h-7 w-7 text-primary" />
          Shipping & Delivery
        </h2>

        <p className="text-foreground/80">
          All medications ship free with temperature-controlled packaging to maintain medication integrity during transit.
        </p>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-4">Shipping Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Delivery Timeline</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Orders ship within 1-2 business days
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Transit time: 2-3 business days
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Total: 3-5 business days from approval
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Packaging Includes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Insulated shipping container
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Gel ice packs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Temperature indicator
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Discreet packaging
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <CreditCard className="h-7 w-7 text-primary" />
          Billing & Payment
        </h2>

        <p className="text-foreground/80">
          Trimi makes billing simple and transparent. Here's how payment works:
        </p>

        <div className="space-y-4 my-8 not-prose">
          <div className="border rounded-xl p-5">
            <h4 className="font-semibold mb-2">When You're Charged</h4>
            <p className="text-sm text-muted-foreground">
              Your first charge occurs after your prescription is approved by a physician. Subsequent charges occur on the same date each month (your billing anniversary).
            </p>
          </div>
          <div className="border rounded-xl p-5">
            <h4 className="font-semibold mb-2">Accepted Payment Methods</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Visa", "Mastercard", "Amex", "Discover", "HSA/FSA", "Apple Pay"].map((method) => (
                <span key={method} className="bg-muted px-3 py-1 rounded-full text-sm">{method}</span>
              ))}
            </div>
          </div>
          <div className="border rounded-xl p-5">
            <h4 className="font-semibold mb-2">Insurance & HSA/FSA</h4>
            <p className="text-sm text-muted-foreground">
              While Trimi doesn't bill insurance directly, you can use HSA/FSA cards for payment. We provide detailed receipts you can submit to your insurance for potential reimbursement.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <Calendar className="h-7 w-7 text-primary" />
          Subscription Flexibility
        </h2>

        <p className="text-foreground/80">
          Your health needs may change, and Trimi makes it easy to adjust your plan:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
          <div className="text-center p-6 border rounded-xl">
            <div className="text-3xl mb-3">⏸️</div>
            <h4 className="font-semibold mb-2">Pause Anytime</h4>
            <p className="text-sm text-muted-foreground">
              Need a break? Pause your subscription for up to 3 months without losing your account or pricing.
            </p>
          </div>
          <div className="text-center p-6 border rounded-xl">
            <div className="text-3xl mb-3">🔄</div>
            <h4 className="font-semibold mb-2">Switch Medications</h4>
            <p className="text-sm text-muted-foreground">
              Work with your physician to switch between semaglutide and tirzepatide if needed.
            </p>
          </div>
          <div className="text-center p-6 border rounded-xl">
            <div className="text-3xl mb-3">❌</div>
            <h4 className="font-semibold mb-2">Cancel Anytime</h4>
            <p className="text-sm text-muted-foreground">
              No contracts, no cancellation fees. Stop your subscription whenever you choose.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3">
          <Shield className="h-7 w-7 text-primary" />
          Price Comparison: Trimi vs. Brand-Name
        </h2>

        <p className="text-foreground/80">
          See how Trimi's pricing compares to brand-name medications:
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse not-prose">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Medication</th>
                <th className="border p-3 text-left">Brand Price</th>
                <th className="border p-3 text-left">Trimi Price</th>
                <th className="border p-3 text-left">You Save</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Semaglutide</td>
                <td className="border p-3 text-muted-foreground">$1,000-1,400/mo</td>
                <td className="border p-3 text-primary font-bold">$179/mo</td>
                <td className="border p-3 text-primary font-bold">Up to 87%</td>
              </tr>
              <tr>
                <td className="border p-3">Tirzepatide</td>
                <td className="border p-3 text-muted-foreground">$1,000-1,200/mo</td>
                <td className="border p-3 text-primary font-bold">$349/mo</td>
                <td className="border p-3 text-primary font-bold">Up to 71%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8 not-prose">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">No Hidden Fees Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                The prices listed are all-inclusive. No enrollment fees, no consultation fees, no shipping fees, no surprise charges. What you see is what you pay.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-8 my-8 text-center not-prose">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Complete your free medical assessment and see which medication is right for you. First prescription ships within days.
          </p>
          <a 
            href="https://members.trytrimi.com/signup"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Free Consultation
          </a>
        </div>

        <TopicClusterNav 
          topic="Cost & Pricing"
          relatedArticles={clusterNav.relatedInCluster}
          hubPage={clusterNav.hubPage}
        />
      </div>
    </BlogLayout>
  );
};

export default TrimiPricingSubscriptionShipping;
