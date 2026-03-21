import { Link, useLocation } from "@/compat/react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, memo, useCallback } from "react";
import trimiLogo from "@/assets/trimi-logo-clean.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavigationLink = memo(({ 
  to, 
  isActive, 
  children,
  onClick 
}: { 
  to: string; 
  isActive: boolean; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`text-base font-medium transition-colors ${
      isActive ? "text-primary" : "text-foreground hover:text-primary"
    }`}
  >
    {children}
  </Link>
));
NavigationLink.displayName = "NavigationLink";

export const OptimizedNavigation = memo(() => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen(prev => !prev), []);

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
          <div className="hidden md:flex items-center space-x-8">
            <NavigationLink to="/" isActive={isActive("/")}>
              Home
            </NavigationLink>
            <NavigationLink to="/treatments" isActive={isActive("/treatments")}>
              Treatments
            </NavigationLink>
            
            {/* Medications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-base font-medium text-foreground hover:text-primary transition-colors focus:outline-none">
                Medications
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background border border-border z-50">
                <DropdownMenuItem asChild>
                  <Link to="/blog/semaglutide-hub" className="w-full cursor-pointer">
                    Semaglutide Guide
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog/tirzepatide-hub" className="w-full cursor-pointer">
                    Tirzepatide Guide
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <NavigationLink to="/how-it-works" isActive={isActive("/how-it-works")}>
              How It Works
            </NavigationLink>
            <NavigationLink to="/blog" isActive={isActive("/blog")}>
              Blog
            </NavigationLink>
            
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-base font-medium text-foreground hover:text-primary transition-colors focus:outline-none">
                Resources
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background border border-border z-50">
                <DropdownMenuItem asChild>
                  <Link to="/blog/cost-affordability-hub" className="w-full cursor-pointer">
                    Cost & Affordability
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog/getting-started-hub" className="w-full cursor-pointer">
                    Getting Started
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog/comparisons-hub" className="w-full cursor-pointer">
                    Comparisons
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog/side-effects-management-hub" className="w-full cursor-pointer">
                    Side Effects Management
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog/long-term-outcomes-hub" className="w-full cursor-pointer">
                    Long-Term Outcomes
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <NavigationLink to="/faq" isActive={isActive("/faq")}>
              FAQ
            </NavigationLink>
            <Link to="https://mytrimi.com/">
              <Button 
                variant="default"
                className="ml-4 bg-secondary hover:bg-secondary/90"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <NavigationLink to="/" isActive={isActive("/")} onClick={closeMobileMenu}>
              Home
            </NavigationLink>
            <NavigationLink to="/treatments" isActive={isActive("/treatments")} onClick={closeMobileMenu}>
              Treatments
            </NavigationLink>
            
            {/* Medications Section */}
            <div className="pt-2 pb-2 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2 px-2">Medications</p>
              <div className="space-y-2 pl-4">
                <Link to="/blog/semaglutide-hub" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-primary transition-colors">
                  Semaglutide Guide
                </Link>
                <Link to="/blog/tirzepatide-hub" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-primary transition-colors">
                  Tirzepatide Guide
                </Link>
              </div>
            </div>
            
            <NavigationLink to="/how-it-works" isActive={isActive("/how-it-works")} onClick={closeMobileMenu}>
              How It Works
            </NavigationLink>
            <NavigationLink to="/blog" isActive={isActive("/blog")} onClick={closeMobileMenu}>
              Blog
            </NavigationLink>
            
            {/* Resources Section */}
            <div className="pt-2 pb-2 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2 px-2">Resources</p>
              <div className="space-y-2 pl-4">
                <Link to="/blog/cost-affordability-hub" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-primary transition-colors">
                  Cost & Affordability
                </Link>
                <Link to="/blog/getting-started-hub" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-primary transition-colors">
                  Getting Started
                </Link>
                <Link to="/blog/comparisons-hub" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-primary transition-colors">
                  Comparisons
                </Link>
                <Link to="/blog/side-effects-management-hub" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-primary transition-colors">
                  Side Effects Management
                </Link>
                <Link to="/blog/long-term-outcomes-hub" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-primary transition-colors">
                  Long-Term Outcomes
                </Link>
              </div>
            </div>
            
            <NavigationLink to="/faq" isActive={isActive("/faq")} onClick={closeMobileMenu}>
              FAQ
            </NavigationLink>
            <Link to="https://mytrimi.com/" onClick={closeMobileMenu}>
              <Button 
                variant="default"
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
});

OptimizedNavigation.displayName = "OptimizedNavigation";
