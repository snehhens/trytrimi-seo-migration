import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "@/compat/react-helmet-async";
import { Button } from "@/components/ui/button";
import { getSortedBlogPosts } from "@/lib/blog/discovery";
import { useMemo, useState } from "react";

const POSTS_PER_PAGE = 12;
const formatDateUTC = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));

const CategorySemaglutide = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const semaglutidePosts = useMemo(
    () =>
      getSortedBlogPosts(
        blogPosts.filter(
          (post) =>
            post.title.toLowerCase().includes("semaglutide") ||
            post.slug.includes("semaglutide"),
        ),
      ),
    [],
  );
  const totalPages = Math.ceil(semaglutidePosts.length / POSTS_PER_PAGE);
  const currentPosts = semaglutidePosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Semaglutide Guide: Wegovy & Ozempic Alternatives | Trimi</title>
        <meta name="description" content="Complete semaglutide resource library. Wegovy & Ozempic alternative guides, dosage charts, side effects, cost savings tips. Buy compounded semaglutide from $99/month." />
        <meta name="keywords" content="semaglutide online, wegovy alternative, ozempic alternative, buy semaglutide online, compounded semaglutide, semaglutide weight loss, affordable semaglutide, semaglutide cost, semaglutide dosage guide, semaglutide side effects" />
        <link rel="canonical" href="https://trytrimi.com/blog/category/semaglutide" />
        
        <meta property="og:title" content="Semaglutide Guide: Wegovy & Ozempic Alternatives | Trimi" />
        <meta property="og:description" content="Complete semaglutide resource library. Buy compounded semaglutide from $99/month. Expert dosage guides, side effects, and cost savings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trytrimi.com/blog/category/semaglutide" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Semaglutide Guide: Wegovy & Ozempic Alternatives | Trimi" />
        <meta name="twitter:description" content="Complete semaglutide resource library. Buy compounded semaglutide from $99/month." />
      </Helmet>

      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Semaglutide Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about semaglutide (Wegovy, Ozempic) for weight loss. Evidence-based guides from medical experts.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <Link key={post.slug} to={post.path}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
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
                            {formatDateUTC(post.date)}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12 mb-12">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      className="w-10 h-10 p-0"
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}

            <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Get personalized semaglutide treatment from licensed medical providers
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
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

export default CategorySemaglutide;
