import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BlogSEO } from "@/components/blog/BlogSEO";

export default function DummyTestBlog() {
  return (
    <>
      <BlogSEO
        title="Dummy Test Blog - Sitemap Verification"
        description="Test blog to verify dynamic sitemap generation"
        url="/blog/dummy-test-blog"
        publishDate="2025-12-15"
        modifiedDate="2025-12-15"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
          <h1>Dummy Test Blog</h1>
          <p>This is a test blog to verify sitemap.xml generation.</p>
          <p>If you see this in sitemap.xml, dynamic generation works!</p>
        </main>
        <Footer />
      </div>
    </>
  );
}