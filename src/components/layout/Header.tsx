import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm transition-smooth">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-white">S</span>
          </div>
          <span className="text-xl font-bold">SaasFlow</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Reviews
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-smooth">
            Start Free Trial
          </Button>
        </div>
      </div>
    </header>
  );
}