import { ReactNode } from "react";
import { OptimizedNavigation } from "@/components/OptimizedNavigation";
import { OptimizedFooter } from "@/components/OptimizedFooter";
import { SmartBreadcrumbs } from "@/components/SmartBreadcrumbs";
import { ContentFreshness } from "@/components/ContentFreshness";
import { InternalLinkSidebar } from "@/components/InternalLinkSidebar";
import { RelatedArticles } from "@/components/RelatedArticles";
import { TableOfContents } from "./TableOfContents";
import { ReadingTime } from "./ReadingTime";
import { SocialShare } from "./SocialShare";
import { AuthorBio } from "./AuthorBio";
import { ArticleFeedback } from "./ArticleFeedback";
import { BlogSEO } from "./BlogSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { generateBreadcrumbs } from "@/utils/internalLinking";
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/blog/discovery";

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  publishDate: string;
  lastUpdated?: string;
  medicallyReviewed?: boolean;
  reviewDate?: string;
  pageKeywords: string[];
  currentPath: string;
  relatedArticles?: any[];
  currentSlug?: string;
  readingTime?: number;
  authorName?: string;
  authorBio?: string;
  authorCredentials?: string;
  imageUrl?: string;
  category?: string;
  faqs?: Array<{ question: string; answer: string }>;
  isMedical?: boolean;
  medicalAudience?: string[];
}

export const BlogLayout = ({
  children,
  title,
  description,
  publishDate,
  lastUpdated,
  medicallyReviewed = false,
  reviewDate,
  pageKeywords,
  currentPath,
  relatedArticles = [],
  currentSlug = "",
  readingTime,
  authorName = "Trimi Medical Team",
  authorBio,
  authorCredentials,
  imageUrl,
  category,
  faqs,
  isMedical = true,
  medicalAudience
}: BlogLayoutProps) => {
  // Generate breadcrumbs with hub page hierarchy
  const breadcrumbs = generateBreadcrumbs(currentPath);
  const resolvedSlug = currentSlug || currentPath.split("/").filter(Boolean).pop() || "";
  const currentPost = resolvedSlug ? getBlogPostBySlug(resolvedSlug) : undefined;
  const autoRelatedArticles = currentPost ? getRelatedBlogPosts(currentPost, 4) : [];
  const mergedRelatedArticles = [...relatedArticles, ...autoRelatedArticles]
    .map((article: any) => ({
      title: article.title,
      slug:
        article.slug ||
        article.url?.replace(/^\/blog\//, "") ||
        article.path?.replace(/^\/blog\//, ""),
      excerpt: article.excerpt,
      category: article.category,
      publishDate: article.publishDate || article.date,
      path: article.path || article.url,
      readTime: article.readTime,
      readTimeMinutes: article.readTimeMinutes,
      content: article.content,
    }))
    .filter((article) => article.slug && article.slug !== resolvedSlug)
    .filter((article, index, collection) => {
      return collection.findIndex((candidate) => candidate.slug === article.slug) === index;
    })
    .slice(0, 4);
  
  return (
    <>
      <BlogSEO
        title={title}
        description={description || `Read our comprehensive guide on ${title}`}
        url={currentPath}
        publishDate={publishDate}
        modifiedDate={lastUpdated}
        authorName={authorName}
        imageUrl={imageUrl}
        category={category}
        keywords={pageKeywords}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        isMedical={isMedical}
        medicalAudience={medicalAudience}
      />
      <div className="min-h-screen bg-background">
        <OptimizedNavigation />
        <SmartBreadcrumbs />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Main Content */}
            <article className="max-w-4xl">
              {/* Article Header */}
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {readingTime && <ReadingTime minutes={readingTime} />}
                  <SocialShare title={title} url={currentPath} />
                </div>

                <ContentFreshness
                  publishDate={publishDate}
                  lastUpdated={lastUpdated}
                  medicallyReviewed={medicallyReviewed}
                  reviewDate={reviewDate}
                />
              </header>

              {/* Table of Contents - auto-generated */}
              <div className="mb-8">
                <TableOfContents />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {children}
              </div>

              {/* CTA Section */}
              <div className="my-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Weight Loss Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  Get started with physician-guided GLP-1 treatment from the comfort of your home.
                </p>
                <Button size="lg" asChild>
                  <a href="https://mytrimi.com/" className="inline-flex items-center gap-2">
                    Get Started Today <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Author Bio */}
              <AuthorBio 
                name={authorName}
                bio={authorBio}
                credentials={authorCredentials}
              />

              {/* Article Feedback */}
              <ArticleFeedback 
                articleTitle={title}
                articleUrl={currentPath}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <InternalLinkSidebar 
                pageKeywords={pageKeywords}
                currentPath={currentPath}
              />
            </aside>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      {mergedRelatedArticles.length > 0 && (
        <RelatedArticles 
          articles={mergedRelatedArticles}
          currentSlug={resolvedSlug}
        />
      )}

        <OptimizedFooter />
      </div>
    </>
  );
};
