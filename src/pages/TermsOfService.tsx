import { SEOHead } from "@/components/seo/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | Trimi Health"
        description="Terms of Service for Trimi Health."
        canonical="https://trytrimi.com/terms-of-service"
        noIndex={true}
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                This Terms of Service is a contract between you ("You", "your") and Trimi Health ("Trimi," "we," "us") and our affiliates. These terms and conditions (together with our Privacy Policy and Code of Conduct, the "Terms of Service" or "Terms") govern your access to and use of the Website and any related documentation, software, application, content, functionality, and products (collectively, the "Service(s)").
              </p>
              <p>
                Please read the Terms of Service carefully before you access or use our Services. By accessing our Website or using our Services, you accept and agree to be bound by these Terms.
              </p>
              <p className="font-semibold">
                THIS AGREEMENT INCLUDES A MANDATORY ARBITRATION CLAUSE AND WAIVER OF CLASS ACTION RIGHTS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
              <p>To qualify to use the Services, the following must be true:</p>
              <ul>
                <li>You are age 18 or over</li>
                <li>You are located in a state where we operate</li>
                <li>You agree to be legally bound by these Terms</li>
              </ul>
              <p>
                Satisfying these requirements does not guarantee you will receive Services through Trimi. We reserve the right to change or include new requirements as deemed appropriate.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Requirements for Use</h2>
              <p>
                You must have compatible computing and/or mobile devices, access to the Internet, and certain necessary software to use the Services. Fees and charges may apply to your use of mobile services and the Internet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Consent to Telehealth Services</h2>
              <p>
                Telemedicine involves the delivery of healthcare services using electronic communications between a healthcare provider and a patient who are not in the same physical location. Telemedicine may include:
              </p>
              <ul>
                <li>Electronic transmission of medical records, images, and health information</li>
                <li>Interactions via audio, video, and/or data communications</li>
                <li>Use of output data from medical devices</li>
              </ul>
              <p>
                The electronic systems used incorporate security protocols to protect the privacy and security of health information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <p>
                Trimi understands the importance of confidentiality and privacy regarding your health information. Please see our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for details on how we collect and use your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Relationship with Trimi</h2>
              <p>
                Trimi provides a technology platform for you to access licensed healthcare providers and obtain health information. The healthcare resources made available through our Services are not a substitute for direct in-person healthcare services in all cases. The decision regarding diagnosis and treatment rests with you and the healthcare provider.
              </p>
              <p>
                By using the Services, you consent to receiving disclosures, notices, messages, and other communications from Trimi and healthcare providers. It is your responsibility to monitor these communications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Communications by Text and Email</h2>
              <p>
                By opting-in to receive text messages from Trimi, you consent to receiving messages regarding your account, order confirmations, shipping notifications, and provider communications. You understand that:
              </p>
              <ul>
                <li>You are the authorized user of the mobile device</li>
                <li>You are responsible for messaging and data charges</li>
                <li>Messages may not be encrypted</li>
              </ul>
              <p>You can opt-out at any time by texting "STOP" to any message received.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Registration and User Accounts</h2>
              <p>
                You must register with Trimi to access the Services. You agree to provide accurate, complete, and current information. You are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your username and password</li>
                <li>All activities that occur under your account</li>
                <li>Immediately notifying us of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Prohibited Use</h2>
              <p>You agree that you will not:</p>
              <ul>
                <li>Impersonate any person or entity</li>
                <li>Use the Services to violate any law</li>
                <li>Reverse engineer or disassemble any software</li>
                <li>Distribute harmful computer code</li>
                <li>Access the Services in a manner that infringes on others' rights</li>
                <li>Use the Services to create competing products</li>
                <li>Interfere with or harm the Services</li>
                <li>Bypass security measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p>
                All content, features, and functionality of the Services are owned by Trimi and are protected by copyright, trademark, and other intellectual property laws. You are granted a limited license to access and use the Services for personal, non-commercial purposes only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p>
                THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, TRIMI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Arbitration Agreement</h2>
              <p>
                Any dispute arising out of or relating to these Terms or the Services shall be resolved by binding arbitration, rather than in court. You waive your right to a jury trial and to participate in a class action lawsuit.
              </p>
              <p>
                You may opt-out of this arbitration agreement by sending written notice within 30 days of first accepting these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. We will notify you of material changes by posting the new Terms on this page. Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                If you have questions about these Terms, please visit our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
