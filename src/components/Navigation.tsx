import { Link, useLocation } from "@/compat/react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, memo } from "react";
import trimiLogo from "@/assets/trimi-logo-clean.png";

const Navigation = memo(() => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={trimiLogo} 
              alt="Trimi Logo" 
              className="h-12 w-auto object-contain" 
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-base font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/treatments"
              className={`text-base font-medium transition-colors ${
                isActive("/treatments") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Treatments
            </Link>
            <Link
              to="/how-it-works"
              className={`text-base font-medium transition-colors ${
                isActive("/how-it-works") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              How It Works
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors ${
                isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="font-medium border-[hsl(212,80%,16%)] text-[hsl(212,80%,16%)] hover:bg-[hsl(212,80%,16%)] hover:text-white"
              asChild
            >
              <a href="https://my.trytrimi.com/login">Sign In</a>
            </Button>
            <Button 
              className="bg-[hsl(212,80%,16%)] hover:bg-[hsl(212,80%,20%)] text-white font-medium"
              asChild
            >
              <a href="https://app.trytrimi.com/start-online-visit/weight-loss-memberships">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              to="/"
              className={`block py-2 text-base font-medium ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/treatments"
              className={`block py-2 text-base font-medium ${
                isActive("/treatments") ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Treatments
            </Link>
            <Link
              to="/how-it-works"
              className={`block py-2 text-base font-medium ${
                isActive("/how-it-works") ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/about"
              className={`block py-2 text-base font-medium ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 space-y-2">
              <Button 
                variant="outline"
                className="w-full font-medium border-[hsl(212,80%,16%)] text-[hsl(212,80%,16%)] hover:bg-[hsl(212,80%,16%)] hover:text-white"
                asChild
              >
                <a href="https://my.trytrimi.com/login">Sign In</a>
              </Button>
              <Button 
                className="w-full bg-[hsl(212,80%,16%)] hover:bg-[hsl(212,80%,20%)] text-white font-medium"
                asChild
              >
                <a href="https://app.trytrimi.com/start-online-visit/weight-loss-memberships">Get Started</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
