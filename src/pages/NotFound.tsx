import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, Link } from "@/compat/react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";

const NotFound = () => {
  const navigate = useNavigate();

  const popularPages = [
    { title: "Semaglutide Treatment", path: "/treatments/semaglutide" },
    { title: "Tirzepatide Treatment", path: "/treatments/tirzepatide" },
    { title: "Blog & Resources", path: "/blog" },
    { title: "How It Works", path: "/how-it-works" },
    { title: "FAQ", path: "/faq" },
    { title: "Contact Us", path: "/contact" },
  ];

  const helpfulLinks = [
    { title: "View Sitemap", path: "/sitemap.xml", external: true },
    { title: "About Us", path: "/about" },
    { title: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="404 - Page Not Found | Trimi"
        description="The page you're looking for doesn't exist. Explore our weight loss treatments and resources."
        canonical="https://trytrimi.com/404"
        noIndex={true}
      />
      <Navigation />
      
      <main id="main-content" className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto py-20">
          <div className="mb-8">
            <Search className="h-24 w-24 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              size="lg"
              className="gap-2"
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="gap-2"
              aria-label="Return to homepage"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-4">Popular Pages</h3>
              <nav aria-label="Popular pages navigation">
                <ul className="space-y-3">
                  {popularPages.map((page) => (
                    <li key={page.path}>
                      <Link 
                        to={page.path}
                        className="text-primary hover:underline flex items-center gap-2"
                      >
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Card>

            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-4">Helpful Links</h3>
              <nav aria-label="Helpful links navigation">
                <ul className="space-y-3">
                  {helpfulLinks.map((link) => (
                    <li key={link.path}>
                      {link.external ? (
                        <a 
                          href={link.path}
                          className="text-primary hover:underline flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ArrowLeft className="h-4 w-4 rotate-180" />
                          {link.title}
                        </a>
                      ) : (
                        <Link 
                          to={link.path}
                          className="text-primary hover:underline flex items-center gap-2"
                        >
                          <ArrowLeft className="h-4 w-4 rotate-180" />
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
