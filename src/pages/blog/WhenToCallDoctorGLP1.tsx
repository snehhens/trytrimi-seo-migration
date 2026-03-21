import { Helmet } from "@/compat/react-helmet-async";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";

const WhenToCallDoctorGLP1 = () => {
  const relatedArticles = [
    {
      title: "Tirzepatide Pancreatitis Warning Signs",
      url: "/blog/tirzepatide-pancreatitis-warning-signs",
      excerpt: "Critical symptoms of pancreatitis to watch for during tirzepatide treatment and when to seek emergency care."
    },
    {
      title: "Managing GLP-1 Side Effects",
      url: "/blog/managing-glp1-side-effects",
      excerpt: "Complete guide to managing common GLP-1 side effects with proven strategies."
    },
    {
      title: "GLP-1 Gallbladder Issues & Prevention",
      url: "/blog/glp1-gallbladder-issues-prevention",
      excerpt: "Understanding gallbladder risks with GLP-1 medications and prevention strategies."
    }
  ];

  return (
    <>
      <BlogSEO
        title="When to Call Your Doctor on GLP-1s: Emergency Warning Signs"
        description="Critical symptoms and warning signs during GLP-1 treatment that require immediate medical attention. Know when side effects become emergencies."
        url="https://trytrimi.com/blog/when-to-call-doctor-glp1"
        publishDate="2025-01-15"
        authorName="Dr. Michael Rodriguez"
        category="Safety & Monitoring"
        keywords={["GLP-1 emergencies", "warning signs", "when to call doctor", "serious side effects", "medical attention"]}
      />

      <article className="container max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">When to Call Your Doctor on GLP-1s: Emergency Warning Signs</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <time dateTime="2025-01-15">January 15, 2025</time>
            <span>•</span>
            <span>By Dr. Michael Rodriguez</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            While most GLP-1 side effects are manageable at home, certain symptoms require immediate medical 
            attention. Knowing the difference between normal side effects and emergency warning signs can 
            prevent serious complications and save lives.
          </p>

          <h2>🚨 Call 911 Immediately For:</h2>
          
          <h3>Severe Allergic Reactions (Anaphylaxis)</h3>
          <p>
            Symptoms appearing within minutes to hours after injection:
          </p>
          <ul>
            <li>Difficulty breathing or swallowing</li>
            <li>Throat tightness or swelling</li>
            <li>Rapid heart rate with dizziness</li>
            <li>Widespread hives or rash</li>
            <li>Swelling of face, lips, tongue, or throat</li>
            <li>Feeling of impending doom</li>
          </ul>
          <p>
            <strong>Action:</strong> Use EpiPen if available and call 911. Do not wait to see if symptoms improve.
          </p>

          <h3>Pancreatitis Warning Signs</h3>
          <p>
            Severe, persistent abdominal pain that:
          </p>
          <ul>
            <li>Radiates to your back (band-like pattern)</li>
            <li>Worsens after eating</li>
            <li>Accompanied by fever over 100.4°F</li>
            <li>Causes uncontrollable vomiting</li>
            <li>Makes you unable to keep down liquids</li>
            <li>Tender to touch in upper abdomen</li>
          </ul>
          <p>
            <strong>Risk level:</strong> Acute pancreatitis is a medical emergency requiring immediate hospitalization.
          </p>

          <h3>Severe Dehydration/Kidney Issues</h3>
          <ul>
            <li>No urination for 12+ hours</li>
            <li>Dark brown or tea-colored urine</li>
            <li>Extreme confusion or disorientation</li>
            <li>Rapid heartbeat with very dry mouth</li>
            <li>Sunken eyes or extreme weakness</li>
            <li>Severe dizziness preventing standing</li>
          </ul>

          <h2>📞 Contact Doctor Within 24 Hours For:</h2>

          <h3>Gallbladder Attack Symptoms</h3>
          <ul>
            <li>Sudden, intense pain in upper right abdomen</li>
            <li>Pain lasting more than 5 hours</li>
            <li>Pain radiating to right shoulder or back</li>
            <li>Nausea/vomiting with abdominal pain</li>
            <li>Yellowing of skin or eyes (jaundice)</li>
            <li>Clay-colored stools or dark urine</li>
          </ul>

          <h3>Persistent Vomiting or Diarrhea</h3>
          <p>
            Call if experiencing:
          </p>
          <ul>
            <li>Vomiting 4+ times in 24 hours</li>
            <li>Unable to keep down liquids for 24 hours</li>
            <li>Diarrhea lasting more than 48 hours</li>
            <li>Blood in vomit or stool</li>
            <li>Signs of dehydration (decreased urination, extreme thirst)</li>
          </ul>

          <h3>Vision Changes</h3>
          <ul>
            <li>Sudden blurred vision not corrected by blinking</li>
            <li>New floaters or flashing lights</li>
            <li>Partial vision loss or blind spots</li>
            <li>Eye pain with vision changes</li>
          </ul>
          <p>
            <em>Note: Particularly important for diabetic patients at risk for diabetic retinopathy.</em>
          </p>

          <h3>Thyroid-Related Symptoms</h3>
          <ul>
            <li>New lump or swelling in neck</li>
            <li>Hoarseness lasting more than 2 weeks</li>
            <li>Difficulty swallowing</li>
            <li>Persistent cough without infection</li>
            <li>Rapid heartbeat with anxiety (thyroid storm)</li>
          </ul>

          <h3>Mental Health Changes</h3>
          <ul>
            <li>New or worsening depression</li>
            <li>Thoughts of self-harm or suicide</li>
            <li>Severe anxiety or panic attacks</li>
            <li>Unusual mood swings or behavior changes</li>
          </ul>

          <h2>📅 Schedule Appointment Within Week For:</h2>

          <h3>Injection Site Problems</h3>
          <ul>
            <li>Increasing redness spreading from injection site</li>
            <li>Warmth and swelling persisting 48+ hours</li>
            <li>Pus or drainage from injection site</li>
            <li>Red streaks extending from injection area</li>
            <li>Fever with injection site inflammation</li>
          </ul>

          <h3>Digestive Issues Not Improving</h3>
          <ul>
            <li>Constipation lasting more than 5 days</li>
            <li>Severe bloating interfering with daily activities</li>
            <li>Unintentional weight loss exceeding 2-3 lbs/week</li>
            <li>Persistent heartburn despite medication</li>
            <li>New abdominal pain (mild but consistent)</li>
          </ul>

          <h3>Side Effects Interfering with Life</h3>
          <ul>
            <li>Nausea preventing adequate nutrition for 1+ weeks</li>
            <li>Fatigue not improving after 4 weeks on medication</li>
            <li>Hair loss becoming noticeable</li>
            <li>Muscle weakness or cramping</li>
            <li>Persistent headaches (more than 3/week)</li>
          </ul>

          <h2>✅ Normal Side Effects (Usually Manageable at Home)</h2>

          <h3>Expected Initial Side Effects</h3>
          <ul>
            <li>Mild to moderate nausea (first 2-4 weeks)</li>
            <li>Reduced appetite</li>
            <li>Occasional constipation or loose stools</li>
            <li>Mild fatigue</li>
            <li>Minor injection site redness (resolves in 24 hours)</li>
            <li>Burping or gas</li>
            <li>Mild heartburn</li>
          </ul>
          <p>
            <em>These should improve with time and home management strategies.</em>
          </p>

          <h2>Pre-Existing Conditions Requiring Extra Vigilance</h2>

          <h3>History of Pancreatitis</h3>
          <p>
            Report ANY new abdominal pain immediately. Your threshold for concern should be lower.
          </p>

          <h3>Kidney Disease</h3>
          <p>
            Monitor hydration closely and report decreased urination or swelling in legs/feet.
          </p>

          <h3>Diabetic Retinopathy</h3>
          <p>
            Schedule regular eye exams and report any vision changes immediately.
          </p>

          <h3>History of Gallstones</h3>
          <p>
            Be alert for sudden severe abdominal pain, especially after meals high in fat.
          </p>

          <h2>Questions to Ask During Your Call</h2>
          <p>
            When contacting your provider, be prepared with:
          </p>
          <ul>
            <li>Current dose and how long you've been on it</li>
            <li>When did symptoms start and how have they progressed?</li>
            <li>Severity on scale of 1-10</li>
            <li>What makes symptoms better or worse?</li>
            <li>Any recent medication or diet changes?</li>
            <li>Temperature if experiencing fever</li>
          </ul>

          <h2>Building Your Safety Plan</h2>
          <ul>
            <li>Keep your provider's emergency number easily accessible</li>
            <li>Know which hospital your doctor prefers for emergencies</li>
            <li>Inform family members about warning signs</li>
            <li>Keep a symptom journal to track patterns</li>
            <li>Have a list of all current medications handy</li>
            <li>Know your medication dose and injection schedule</li>
          </ul>

          <h2>When in Doubt, Reach Out</h2>
          <p>
            Healthcare providers would rather assess a benign symptom than miss a serious complication. 
            Never hesitate to call if you're concerned about your symptoms. Trust your instincts—you 
            know your body best.
          </p>

          <h2>Conclusion</h2>
          <p>
            GLP-1 medications are generally safe when used appropriately, but vigilance is key. By knowing 
            which symptoms require immediate attention versus routine follow-up, you can use these medications 
            safely while maximizing their benefits. Always err on the side of caution—early intervention 
            prevents serious complications.
          </p>
        </div>

        <TopicClusterNav
          topic="Safety & Monitoring"
          hubPage="/safety-monitoring"
          relatedArticles={relatedArticles}
        />
      </article>
    </>
  );
};

export default WhenToCallDoctorGLP1;
