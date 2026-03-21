import { BlogSEO } from "@/components/blog/BlogSEO";
import { TopicClusterNav } from "@/components/blog/TopicClusterNav";
import { PeopleAlsoAsk } from "@/components/blog/PeopleAlsoAsk";
import { getClusterNavigation } from "@/utils/relatedContent";
import { Link } from "@/compat/react-router-dom";
import ogImage from "@/assets/og/managing-muscle-loss-semaglutide.jpg";

const ManagingMuscleLossSemaglutide = () => {
  const clusterNav = getClusterNavigation("lifestyle-integration");

  const faqs = [
    {
      question: "How much muscle do you lose on semaglutide?",
      answer: "Studies show approximately 25-40% of weight lost on GLP-1 medications comes from lean mass (muscle) if no preventive measures are taken. However, with adequate protein intake and resistance training, muscle preservation improves dramatically—reducing lean mass loss to 10-20% of total weight lost."
    },
    {
      question: "How much protein should I eat on GLP-1 medication?",
      answer: "Aim for 1.2-1.6 grams of protein per kilogram of ideal body weight daily (roughly 25-40 grams per meal). Prioritize protein at every meal to preserve muscle mass during weight loss. Higher protein intake is especially important when appetite is suppressed."
    },
    {
      question: "What exercises prevent muscle loss on semaglutide?",
      answer: "Resistance training (weightlifting, bodyweight exercises, resistance bands) 2-3 times per week is most effective. Focus on compound movements like squats, deadlifts, push-ups, and rows. Progressive overload—gradually increasing weight or resistance—is key to maintaining and building muscle."
    },
    {
      question: "Can you build muscle while taking GLP-1 medication?",
      answer: "Yes, though it's challenging while in a caloric deficit. With adequate protein, consistent resistance training, and sufficient calorie intake, muscle maintenance and even modest gains are possible. Most people focus on muscle preservation during active weight loss, then shift to muscle building during maintenance."
    }
  ];

  return (
    <>
      <BlogSEO
        title="Managing Muscle Loss on Semaglutide: Exercise and Nutrition Tips"
        description="Evidence-based strategies to preserve lean muscle mass during GLP-1 weight loss. Learn optimal protein intake, best resistance training exercises, and nutrition timing to maximize fat loss while protecting muscle on semaglutide or tirzepatide."
        url="/blog/managing-muscle-loss-semaglutide-exercise-nutrition"
        publishDate="2025-01-15"
        modifiedDate="2025-01-15"
        authorName="Trimi Editorial Team"
        imageUrl={ogImage}
        category="Lifestyle Integration"
        keywords={["muscle loss semaglutide", "preserve muscle on GLP-1", "protein on Ozempic", "resistance training weight loss", "lean mass preservation"]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Managing Muscle Loss on Semaglutide", url: "/blog/managing-muscle-loss-semaglutide-exercise-nutrition" }
        ]}
        faqs={faqs}
        isMedical={true}
        medicalAudience={["Patient"]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Managing Muscle Loss on Semaglutide: Exercise and Nutrition Tips
          </h1>
          <p className="text-xl text-muted-foreground article-intro">
            Practical, evidence-based strategies to protect lean muscle mass while losing weight on GLP-1 medications.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <time dateTime="2025-01-15">January 15, 2025</time>
            <span>•</span>
            <span>11 min read</span>
          </div>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>The Muscle Loss Problem on GLP-1 Medications</h2>
          <p>
            GLP-1 medications like <Link to="/hub/semaglutide" className="text-primary hover:underline">semaglutide</Link> and <Link to="/hub/tirzepatide" className="text-primary hover:underline">tirzepatide</Link> are incredibly effective for weight loss. But here's the challenge: not all weight loss is created equal. Losing fat is good. Losing muscle is problematic.
          </p>
        </section>

        <PeopleAlsoAsk questions={faqs} className="my-12" />

        <TopicClusterNav
          topic="Lifestyle Integration"
          hubPage={clusterNav.hubPage}
          relatedArticles={clusterNav.relatedInCluster}
        />
      </article>
    </>
  );
};

export default ManagingMuscleLossSemaglutide;