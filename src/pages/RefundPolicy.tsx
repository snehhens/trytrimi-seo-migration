import { SEOHead } from "@/components/seo/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <>
      <SEOHead
        title="Refund & Cancellation Policy | Trimi Health"
        description="Refund and cancellation policy for Trimi Health services and medications."
        canonical="https://trytrimi.com/refund-policy"
        noIndex={true}
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <p className="mb-8">
              This Refund & Cancellation Policy explains the conditions for cancellations, refunds, and returns for services and medications provided by Trimi Health ("Trimi," "we," "us," or "our"). By making a purchase through Trimi, you agree to the terms outlined below.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">General Policy</h2>
              <ul>
                <li>All prescriptions are <strong>personalized</strong> for individual patients and therefore <strong>cannot be returned or refunded</strong> once prepared.</li>
                <li>Federal and state pharmacy rules prohibit the return of prescription medications under any circumstances.</li>
                <li><strong>Once an order ships, it is final and non-refundable.</strong></li>
                <li>Refunds are only provided under the circumstances described in this policy or where otherwise required by law.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Order Cancellation</h2>
              <ul>
                <li>
                  <strong>Before Pharmacy Submission:</strong> If you've completed a provider consultation but the medication order has not yet been submitted to the pharmacy, you may cancel for a refund.
                </li>
                <li>
                  <strong>After Pharmacy Submission:</strong> Once your prescription has been transmitted to the pharmacy, cancellation and refund are no longer possible.
                </li>
                <li>
                  <strong>After Shipping:</strong> Orders that have left the pharmacy cannot be canceled.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Medical Ineligibility</h2>
              <p>
                If, after review, a licensed healthcare provider determines that you are not medically eligible for treatment, your order will be canceled and you will receive a <strong>full refund</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Damaged Deliveries</h2>
              <ul>
                <li>If your package arrives damaged, you must notify us within <strong>24 hours of delivery</strong> and include a clear photo of the damage.</li>
                <li>After verification, Trimi will either replace the product or issue a refund.</li>
                <li>Requests submitted outside this timeframe may not be honored.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Subscription Plan Cancellations</h2>
              <ul>
                <li>To end a subscription plan, contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a> with your request.</li>
                <li>Once confirmed, your plan will stay active until the end of your current billing cycle, and no further renewals will be charged.</li>
                <li>Partial or prorated refunds are <strong>not</strong> offered for unused time within a billing cycle.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">When Refunds Are Not Available</h2>
              <p>Refunds will <strong>not</strong> be issued in the following circumstances:</p>
              <ul>
                <li>The prescription has already been sent to the pharmacy</li>
                <li>The customer changes their mind after an order has been processed</li>
                <li>Incorrect or incomplete details provided by the customer (e.g., invalid or wrong shipping address)</li>
                <li>Any violation of Trimi's Terms of Service</li>
                <li>Dissatisfaction with a compounded medication, since it is uniquely prepared for each patient</li>
                <li>Shipments confirmed as <strong>delivered by the carrier</strong> to the correct address</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Shipping Concerns</h2>
              <ul>
                <li>If a shipment is marked <strong>delivered by the carrier but not received</strong>, you must notify Trimi within <strong>24 hours</strong> and submit documentation, such as a missing package claim.</li>
                <li>If theft is suspected, a <strong>police report</strong> may be required before a replacement can be considered.</li>
                <li>Trimi is not responsible for packages after the carrier has confirmed delivery.</li>
                <li>All medications are compounded and packaged for stability during transit. Variations in packaging or exposure to temperature changes do not qualify for a refund unless the dispensing pharmacy confirms that medication integrity has been compromised.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Requesting a Refund</h2>
              <p>To request a refund:</p>
              <ol>
                <li>
                  <strong>Submit Your Request:</strong> Contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a> or patient portal.
                </li>
                <li>
                  <strong>Include Required Information:</strong> Provide your full name, email address, order number, payment date, and reason for the request. Attach supporting documents, such as photos if the medication arrived damaged.
                </li>
                <li>
                  <strong>Processing Time:</strong> Refund requests are reviewed within 2–4 business days. You will be notified of the outcome.
                </li>
                <li>
                  <strong>Refund Issuance:</strong> Approved refunds are returned to the original payment method within 5–10 business days. Please allow time for your bank or card issuer to post the credit.
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Service Dissatisfaction</h2>
              <p>
                Concerns about service quality (such as delays or communication issues) do not automatically qualify for refunds. However, Trimi may review such cases individually at its discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Billing Errors & Duplicate Payments</h2>
              <ul>
                <li>Refunds will be granted if a duplicate charge or billing error is confirmed.</li>
                <li>If a pricing error occurs, Trimi reserves the right to correct it and issue any applicable refund.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p>
                If you have any questions about this policy, please visit our <a href="/contact" className="text-primary hover:underline">contact page</a>. We're available to help answer your questions.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RefundPolicy;
