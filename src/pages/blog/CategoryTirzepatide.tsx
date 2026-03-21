import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Helmet } from "@/compat/react-helmet-async";
import { Button } from "@/components/ui/button";

const CategoryTirzepatide = () => {
  const tirzepatidePosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes('tirzepatide') || 
    post.slug.includes('tirzepatide')
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tirzepatide Guide: Mounjaro & Zepbound Alternatives | Trimi</title>
        <meta name="description" content="Complete tirzepatide resource library. Mounjaro & Zepbound alternative guides, dosage charts, side effects, cost savings. Buy compounded tirzepatide from $125/month." />
        <meta name="keywords" content="tirzepatide online, mounjaro alternative, zepbound alternative, buy tirzepatide online, compounded tirzepatide, tirzepatide weight loss, affordable tirzepatide, tirzepatide cost, tirzepatide dosage guide, dual GIP GLP-1" />
        <link rel="canonical" href="https://trytrimi.com/blog/category/tirzepatide" />
        
        <meta property="og:title" content="Tirzepatide Guide: Mounjaro & Zepbound Alternatives | Trimi" />
        <meta property="og:description" content="Complete tirzepatide resource library. Buy compounded tirzepatide from $125/month. Expert dosage guides, side effects, and cost savings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trytrimi.com/blog/category/tirzepatide" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tirzepatide Guide: Mounjaro & Zepbound Alternatives | Trimi" />
        <meta name="twitter:description" content="Complete tirzepatide resource library. Buy compounded tirzepatide from $125/month." />
      </Helmet>

      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Tirzepatide Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about tirzepatide (Mounjaro, Zepbound) for weight loss. Evidence-based guides from medical experts.
              </p>
              <div className="mt-6">
                <span className="text-sm text-muted-foreground">
                  {tirzepatidePosts.length} articles
                </span>
              </div>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {tirzepatidePosts.map((post) => (
                <Link key={post.slug} to={post.path}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-secondary" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-6 text-secondary-foreground/90">
                Get personalized tirzepatide treatment from licensed medical providers
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                onClick={() => window.location.href = 'https://app.trytrimi.com/start-online-visit/weight-loss-memberships'}
              >
                Get Started Today
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryTirzepatide;
