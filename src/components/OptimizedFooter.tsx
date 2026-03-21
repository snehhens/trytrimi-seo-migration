import { memo } from "react";
import { Link } from "@/compat/react-router-dom";
import trimiLogo from "@/assets/trimi-logo-clean.png";
import { Instagram, Facebook } from "lucide-react";

// TikTok icon component
const TikTokIcon = memo(({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
));
TikTokIcon.displayName = "TikTokIcon";

export const OptimizedFooter = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center justify-center md:justify-start mb-4">
              <img 
                src={trimiLogo} 
                alt="Trimi Logo" 
                className="h-14 brightness-0 invert" 
                width="140"
                height="56"
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Prescription weight loss tailored to your needs.
            </p>
            <a 
              href="https://www.legitscript.com/websites/?checker_keywords=trytrimi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Verify LegitScript Approval for www.trytrimi.com"
              className="mt-3 inline-block"
            >
              <img 
                src="https://static.legitscript.com/seals/29977783.png" 
                alt="Verify Approval for www.trytrimi.com" 
                width="73" 
                height="79"
                loading="lazy"
              />
            </a>
            {/* Payment Method Icons */}
            <div className="flex flex-wrap items-center gap-1.5 mt-3">
              {[
                { name: "Visa", bg: "bg-[#1A1F71]", content: <span className="text-white font-bold text-[10px] italic">VISA</span> },
                { name: "Mastercard", bg: "bg-[#2D2D2D]", content: <div className="flex -space-x-1"><div className="w-3 h-3 rounded-full bg-[#EB001B]" /><div className="w-3 h-3 rounded-full bg-[#F79E1B] opacity-80" /></div> },
                { name: "Amex", bg: "bg-[#2E77BC]", content: <span className="text-white font-bold text-[7px] leading-tight text-center">AMEX</span> },
                { name: "Discover", bg: "bg-white", content: <span className="text-[#231F20] font-bold text-[7px]">DISCOVER</span> },
                { name: "Klarna", bg: "bg-[#FFB3C7]", content: <span className="text-[#0D0D0D] font-bold text-[8px]">Klarna.</span> },
                { name: "Apple Pay", bg: "bg-white", content: <span className="text-black font-semibold text-[8px]">Pay</span> },
                { name: "Link", bg: "bg-[#00D66F]", content: <span className="text-white font-bold text-[8px]">link</span> },
              ].map((card) => (
                <div key={card.name} className={`${card.bg} rounded-[4px] w-8 h-5 flex items-center justify-center`} title={card.name}>
                  {card.content}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/treatments" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Treatments</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">How It Works</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</Link></li>
              
              <li><Link to="/faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li><Link to="/affiliate" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Become an Affiliate</Link></li>
            </ul>
          </div>

          {/* Content Hubs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Content Hubs</h3>
            <ul className="space-y-2">
              <li><Link to="/blog/cost-affordability-hub" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cost & Affordability</Link></li>
              <li><Link to="/blog/getting-started-hub" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Getting Started</Link></li>
              <li><Link to="/blog/comparisons-hub" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Comparisons</Link></li>
              <li><Link to="/blog/side-effects-management-hub" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Side Effects</Link></li>
              <li><Link to="/blog/long-term-outcomes-hub" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Long-Term Outcomes</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Refund Policy</Link></li>
              <li><Link to="/code-of-conduct" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Code of Conduct</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="https://www.instagram.com/trytrimi" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/trytrimi" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@trytrimi" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Follow us on TikTok">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Medical Disclaimer */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Trimi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

OptimizedFooter.displayName = "OptimizedFooter";
