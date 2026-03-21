import { SEOHead } from "@/components/seo/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Trimi Health"
        description="Trimi Health's privacy policy and notice of privacy practices."
        canonical="https://trytrimi.com/privacy-policy"
        noIndex={true}
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last Modified: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Trimi Health ("Trimi", "we", "our", or "us") respects your privacy and is committed to protecting it through our compliance with this Privacy Notice ("Notice"). We provide our customers ("Customers", "you", "your") the skills and knowledge they need to take control of their health. We are committed to being transparent in our handling and processing of personal information in accordance with applicable privacy and data protection laws.
              </p>
              <p>
                This Notice describes our practices for collecting, using, maintaining, protecting, and disclosing your Personal Information on or through our website, https://trytrimi.com/ ("Website"), any related applications, products, and platforms (collectively with the Website, the "Service(s)") or anywhere this Notice is posted as well as through any offline interactions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
              <ul>
                <li><strong>Account:</strong> A unique account created for you to access our Service.</li>
                <li><strong>Company:</strong> Refers to Trimi Health.</li>
                <li><strong>Cookies:</strong> Small files placed on your device containing browsing history details.</li>
                <li><strong>Device:</strong> Any device that can access the Service.</li>
                <li><strong>Personal Data:</strong> Information that relates to an identified or identifiable individual.</li>
                <li><strong>Service:</strong> Refers to the Website and related applications.</li>
                <li><strong>Usage Data:</strong> Data collected automatically from use of the Service.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Collection and Use of Personal Data</h2>
              <h3 className="text-xl font-semibold mb-3">Types of Data Collected</h3>
              <p>While using our Service, we may ask you to provide certain personally identifiable information including:</p>
              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Usage Data</h2>
              <p>
                Usage Data is collected automatically when using the Service. This may include your Device's Internet Protocol address, browser type, browser version, pages visited, time and date of visit, time spent on pages, unique device identifiers, and other diagnostic data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Tracking Technologies and Cookies</h2>
              <p>We use Cookies and similar tracking technologies to track activity on our Service. Technologies we use may include:</p>
              <ul>
                <li><strong>Cookies or Browser Cookies:</strong> Small files placed on your Device.</li>
                <li><strong>Web Beacons:</strong> Small electronic files in our Service and emails.</li>
              </ul>
              <p>We use both Session and Persistent Cookies for various purposes including necessary/essential cookies, functionality cookies, and tracking/performance cookies.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use of Your Personal Data</h2>
              <p>We may use Personal Data for the following purposes:</p>
              <ul>
                <li>To provide and maintain our Service</li>
                <li>To manage your Account</li>
                <li>For the performance of a contract</li>
                <li>To contact you with updates and information</li>
                <li>To provide you with news and special offers</li>
                <li>To manage your requests</li>
                <li>For business transfers</li>
                <li>For other purposes such as data analysis and service improvement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Retention of Your Personal Data</h2>
              <p>
                We will retain your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to comply with legal obligations, resolve disputes, and enforce our legal agreements and policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Security of Your Personal Data</h2>
              <p>
                The security of your Personal Data is important to us. While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p>
                Our Service is intended for users 18 and older. We do not knowingly collect Personal Information from anyone younger than age 18.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">HIPAA Privacy Statement</h2>
              <h3 className="text-xl font-semibold mb-3">Notice of Privacy Practices for Protected Health Information (PHI)</h3>
              <p>
                This Notice describes how Trimi Health may use and disclose your Protected Health Information (PHI) to carry out treatment, payment, or healthcare operations and for other purposes permitted or required by law.
              </p>
              
              <h4 className="text-lg font-semibold mb-2 mt-4">Usage and Disclosures of PHI</h4>
              <p>We may use and disclose your PHI for:</p>
              <ul>
                <li><strong>Treatment:</strong> To provide, coordinate, or manage your healthcare and related services.</li>
                <li><strong>Payment:</strong> To obtain payment for healthcare services provided to you.</li>
                <li><strong>Healthcare Operations:</strong> For quality assessment, improvement activities, and case management.</li>
                <li><strong>As Required by Law:</strong> When required by federal, state, or local law.</li>
                <li><strong>Public Health and Safety:</strong> To prevent or control disease, injury, or disability.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to your Personal Data</li>
                <li>Request correction of your Personal Data</li>
                <li>Request deletion of your Personal Data</li>
                <li>Object to processing of your Personal Data</li>
                <li>Request restriction of processing</li>
                <li>Request transfer of your Personal Data</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Modified" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, you can contact us by visiting our <a href="/contact" className="text-primary hover:underline">contact page</a>.</p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
