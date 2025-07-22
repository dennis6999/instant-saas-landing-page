import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-smooth ${scrolled ? "bg-background shadow-lg text-foreground" : "bg-background/80 backdrop-blur-sm text-foreground"}`} aria-label="Site header">
      <div className="container flex h-16 items-center justify-between gap-2 px-4 md:px-8">
        <div className="flex items-center flex-shrink-0">
          <a href="/" aria-label="Home" className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent shadow-soft focus:outline-none focus:ring-2 focus:ring-primary">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="11" fill="#fff" stroke="#2563eb" strokeWidth="2" />
              <path d="M13 7v6l4 2" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="7" y="15" width="12" height="3" rx="1.5" fill="#7c3aed" />
            </svg>
          </a>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 min-w-0 ml-4">
            <a href="#features" className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth px-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Features section">
              Features
            </a>
            <a href="#pricing" className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth px-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Pricing section">
              Pricing
            </a>
            <a href="#testimonials" className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth px-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Reviews section">
              Reviews
            </a>
            <a href="#faq" className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth px-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" aria-label="FAQ section">
              FAQ
            </a>
          </nav>
        </div>
        {/* Mobile Menu Popover */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMobileOpen(false)}>
            <nav
              className="absolute right-4 top-4 w-56 rounded-xl bg-white shadow-2xl p-6 flex flex-col gap-4 animate-fade-in-up"
              aria-label="Mobile navigation"
              onClick={e => e.stopPropagation()}
            >
              <a href="#features" className="nav-link text-base font-medium text-muted-foreground hover:text-foreground transition-smooth" onClick={() => setMobileOpen(false)}>Features</a>
              <a href="#pricing" className="nav-link text-base font-medium text-muted-foreground hover:text-foreground transition-smooth" onClick={() => setMobileOpen(false)}>Pricing</a>
              <a href="#testimonials" className="nav-link text-base font-medium text-muted-foreground hover:text-foreground transition-smooth" onClick={() => setMobileOpen(false)}>Reviews</a>
              <a href="#faq" className="nav-link text-base font-medium text-muted-foreground hover:text-foreground transition-smooth" onClick={() => setMobileOpen(false)}>FAQ</a>
              <Link to="/login" className="w-full mt-2" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="w-full" variant="ghost">Log in</Button>
              </Link>
              <Button size="sm" className="btn-premium w-full mt-2" onClick={() => setMobileOpen(false)}>Start Free Trial</Button>
            </nav>
          </div>
        )}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <ThemeToggle />
          <Link to="/login" className="hidden md:inline-flex" aria-label="Log in button">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Button size="sm" className="btn-premium hidden md:inline-flex" aria-label="Start Free Trial">
            Start Free Trial
          </Button>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden ml-2 p-2 rounded-lg bg-muted hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}