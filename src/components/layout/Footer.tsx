import { Twitter, Github, Dribbble } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background text-foreground/80" aria-label="Site footer">
      <div className="container py-20 px-4 sm:px-8">
        {/* Newsletter Signup */}
        <div className="newsletter-premium mb-12 mt-16 w-full max-w-lg mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0">
          <input type="email" placeholder="Your email address" aria-label="Email address" className="flex-1 rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background min-w-0" />
          <button type="button" onClick={() => alert('Subscribed! (Demo only)')} className="w-auto sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white font-semibold shadow-soft hover:opacity-90 transition-smooth sm:ml-3 sm:mt-0 mt-0 sm:static static order-2 sm:order-none">Subscribe</button>
        </div>
        <div className="grid gap-12 md:grid-cols-4 mb-10 text-center md:text-left">
          <div>
            {/* Logo and name removed for white-label */}
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Status</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="footer-socials mt-10 mb-6 justify-center md:justify-start">
          <a href="#" aria-label="Twitter" title="Twitter"><Twitter size={22} strokeWidth={2.2} /></a>
          <a href="#" aria-label="GitHub" title="GitHub"><Github size={22} strokeWidth={2.2} /></a>
          <a href="#" aria-label="Dribbble" title="Dribbble"><Dribbble size={22} strokeWidth={2.2} /></a>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2">
          <a href="/terms" className="hover:underline mx-2">Terms of Service</a>
          <span className="hidden sm:inline">|</span>
          <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}