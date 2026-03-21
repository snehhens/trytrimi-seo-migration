import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/compat/react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { ReadingTime } from "@/components/blog/ReadingTime";
import { blogPosts } from "@/data/blogPosts";
import {
  getEvergreenBlogPosts,
  getFeaturedBlogPosts,
  getSortedBlogPosts,
  getTopicClusters,
  getTrendingBlogPosts,
} from "@/lib/blog/discovery";
import { useState, useMemo } from "react";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { ItemListSchema } from "@/components/seo/ItemListSchema";

const POSTS_PER_PAGE = 12;
const formatDateUTC = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const sortedPosts = useMemo(() => getSortedBlogPosts(blogPosts), []);
  const featuredPosts = useMemo(() => getFeaturedBlogPosts(3), []);
  const trendingPosts = useMemo(() => getTrendingBlogPosts(4), []);
  const evergreenPosts = useMemo(() => getEvergreenBlogPosts(4), []);
  const topicClusters = useMemo(() => getTopicClusters(6), []);
  
  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category)));
    return ["All", ...uniqueCategories.sort()];
  }, []);

  // Filter posts by category and sort by date (newest first)
  const filteredPosts = useMemo(() => {
    const posts = selectedCategory === "All" 
      ? [...sortedPosts]
      : sortedPosts.filter(post => post.category === selectedCategory);
    
    return posts;
  }, [selectedCategory, sortedPosts]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);
  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);

    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        document.getElementById("blog-posts-grid")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <GlobalSEO includeSchemas={true} />
      <SEOHead 
        title="Weight Loss Blog | Expert Tips on Semaglutide & Tirzepatide | Trimi"
        description="Expert insights on weight loss medications, GLP-1 treatments, and achieving your health goals. Learn about Tirzepatide, Semaglutide, dosing, side effects, and real results."
        canonical="https://trytrimi.com/blog"
      />
      <ItemListSchema
        name="Trimi Health Weight Loss Blog"
        description="Expert articles on GLP-1 weight loss medications"
        items={sortedPosts.slice(0, 20).map(post => ({
          name: post.title,
          url: post.path
        }))}
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Weight Loss
                <span className="block text-secondary mt-2">Insights & Education</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert guidance on tirzepatide, semaglutide, and achieving your weight loss goals with science-backed information.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Popular Categories</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/blog/category/semaglutide">
                    <Button variant="outline" className="hover:bg-primary/10" size="lg">
                      View All Semaglutide Articles
                    </Button>
                  </Link>
                  <Link to="/blog/category/tirzepatide">
                    <Button variant="outline" className="hover:bg-secondary/10" size="lg">
                      View All Tirzepatide Articles
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground w-full text-center mb-2">Filter by:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-secondary text-secondary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-secondary-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section id="blog-posts-grid" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium">
                          {post.category}
                        </span>
                        <span>
                          {formatDateUTC(post.date)}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <ReadingTime minutes={post.readTimeMinutes || parseInt(post.readTime) || 10} />
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="ghost" className="group">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
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
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="h-5 w-5 text-secondary" />
                <h2 className="text-3xl font-bold text-foreground">Start with high-impact guides</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Card key={post.slug} className="h-full overflow-hidden border-secondary/20 bg-gradient-to-br from-background to-secondary/5">
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground mb-4">
                        <Badge variant="outline">{post.category}</Badge>
                        <span>{formatDateUTC(post.modifiedDate || post.date)}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-3 line-clamp-3">{post.title}</h2>
                      <p className="text-muted-foreground mb-6 line-clamp-4">{post.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <ReadingTime minutes={post.readTimeMinutes || parseInt(post.readTime) || 10} />
                        <Link to={post.path}>
                          <Button className="group">
                            Read now
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Trending search paths</h2>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {trendingPosts.map((post) => (
                  <Card key={post.slug} className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">{post.category}</Badge>
                      <ReadingTime minutes={post.readTimeMinutes || parseInt(post.readTime) || 10} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-3">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5 line-clamp-4">{post.excerpt}</p>
                    <Link to={post.path} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                      Open article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Explore topic clusters</h2>
                  <p className="text-muted-foreground mt-2">
                    Keep exploring by topic after you browse the latest articles.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {evergreenPosts.slice(0, 2).map((post) => (
                    <Link key={post.slug} to={post.path}>
                      <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors">
                        {post.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {topicClusters.map((cluster) => (
                  <Card key={cluster.category} className="p-6 h-full">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <Badge variant="outline">{cluster.count} articles</Badge>
                      <button
                        onClick={() => handleCategoryChange(cluster.category)}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Filter this topic
                      </button>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{cluster.category}</h3>
                    <p className="text-sm text-muted-foreground mb-5">{cluster.description}</p>
                    <div className="space-y-3">
                      {cluster.posts.map((post) => (
                        <Link
                          key={post.slug}
                          to={post.path}
                          className="block rounded-lg border border-border/60 p-3 hover:border-primary/30 hover:bg-muted/40 transition-colors"
                        >
                          <div className="text-sm font-medium line-clamp-2">{post.title}</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {formatDateUTC(post.modifiedDate || post.date)}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Weight Loss Journey?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Get personalized treatment with tirzepatide or semaglutide
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-lg px-8"
                onClick={() => window.location.href = 'https://app.trytrimi.com/start-online-visit/weight-loss-memberships'}
              >
                Get Started Today
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
