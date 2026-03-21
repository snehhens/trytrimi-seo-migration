import { Helmet } from "@/compat/react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CodeOfConduct = () => {
  return (
    <>
      <Helmet>
        <title>Provider Code of Conduct | Trimi Health</title>
        <meta name="description" content="Code of Conduct for healthcare providers on the Trimi Health platform." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">Provider Code of Conduct</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                The Trimi Health mission is dedicated to enhancing healthcare accessibility and transforming how individuals engage with the medical system for weight management and metabolic health. This document outlines the universal code of conduct for healthcare providers utilizing the Trimi platform, aiming to align the principles of Trimi Health with the medical professionals on our platform. This Code of Conduct is dynamic, evolving with provider feedback to ensure the delivery of premium care to patients.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Best Practices on the Platform</h2>
              <ul>
                <li>
                  <strong>Be Patient:</strong> Telemedicine may be unfamiliar to many patients. Address their questions, no matter how straightforward they may seem, with sensitivity and guide them toward the most effective treatment path.
                </li>
                <li>
                  <strong>Always Explain:</strong> Provide comprehensive explanations for your treatment decisions, ensuring patients understand your medical guidance, whether or not it involves prescribing medication.
                </li>
                <li>
                  <strong>Follow Up:</strong> The Trimi platform automates patient follow-ups post-treatment plan at regular intervals. For patients requiring closer monitoring, utilize the platform's messaging system for scheduled follow-ups or contact the Trimi Medical Operations Team for assistance.
                </li>
                <li>
                  <strong>Document:</strong> Maintain detailed records of your clinical decisions, especially if system alerts indicate potential contraindications or risks. Documenting additional information obtained through direct communication with patients is crucial.
                </li>
                <li>
                  <strong>Check-in:</strong> Top-rated providers check their messages daily. Notify the Trimi Medical Operations Team in advance if you expect to be unavailable for over 48 hours to ensure continuous patient support.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Conduct Expectations on the Platform</h2>
              <ul>
                <li>
                  <strong>Verify Identity:</strong> Confirm patient identity through government ID and photo verification, supported by automated software checks. Ensure personal information provided matches the government ID.
                </li>
                <li>
                  <strong>Follow State Protocols:</strong> Adhere to state-specific guidelines to establish a legitimate patient-physician relationship before offering medical advice or treatment. When uncertain, consult the Trimi Medical Operations team or Trimi's legal counsel.
                </li>
                <li>
                  <strong>Prioritize Responsiveness:</strong> Address patient consultations in a timely manner to maintain prompt service delivery and patient satisfaction.
                </li>
                <li>
                  <strong>One at a Time:</strong> Engage with one patient consultation at a time, ensuring your full attention to each case. Avoid intervening in ongoing treatments by other providers unless a second opinion is requested.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Safety, Security & Privacy</h2>
              <ul>
                <li>
                  <strong>Drug Interactions:</strong> Vigilantly review patient medications for potential drug interactions. Consult with Trimi's clinical directors through the Medical Operations team for guidance on complex drug interactions.
                </li>
                <li>
                  <strong>When in Doubt, Don't:</strong> Exercise caution in prescribing medications. Opt for consultations or refer patients to their primary physician if uncertain about treatment safety.
                </li>
                <li>
                  <strong>Address Underlying Concerns:</strong> Pay attention to both physical and mental health concerns. Follow appropriate protocols for handling medical emergencies or concerning patient behaviors.
                </li>
                <li>
                  <strong>Review Protocols Regularly:</strong> Consistently consult condition-specific provider protocols for guidelines on safe practices and make medical decisions based on the standard of care.
                </li>
                <li>
                  <strong>Never Share:</strong> Keep your Trimi provider credentials confidential. Do not disclose patient information outside of required Trimi operations.
                </li>
                <li>
                  <strong>Secure PHI:</strong> Ensure all patient information is shared through HIPAA-compliant channels. Avoid platform usage in public settings where protected health information could be exposed.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Ethical Expectations for Platform Providers</h2>
              <p>Trimi-affiliated healthcare providers are held to the highest ethical standards of the medical profession:</p>
              <ul>
                <li>
                  <strong>Do No Harm:</strong> Prioritize patient safety above all. Treatment decisions should not be influenced by the prospect of compensation.
                </li>
                <li>
                  <strong>No Self-Referral:</strong> Direct patients needing additional services or referrals to their primary healthcare provider or an external physician, not to your private practice.
                </li>
                <li>
                  <strong>Sound Body & Sound Mind:</strong> Abstain from practicing medicine on the platform while under the influence of substances that could impair judgment.
                </li>
                <li>
                  <strong>Keep Trimi Informed:</strong> Promptly inform the Trimi Medical Operations Team of any professional disciplinary actions or changes in your medical licensure status.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Commitment to Excellence</h2>
              <p>
                Thank you for your commitment to providing exceptional care through Trimi Health. Together, we're making quality healthcare more accessible and transforming lives through evidence-based weight management solutions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p>
                For questions or concerns regarding this Code of Conduct, please contact the Trimi Medical Operations Team through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CodeOfConduct;
