import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground py-28 flex items-center min-h-[700px]" aria-label="Hero section">
      {/* Animated SVG Blob Background */}
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 animate-blob-move w-[1200px] h-[700px] max-w-none max-h-none" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:0}}>
        <defs>
          <linearGradient id="heroBlobGradient" x1="0" y1="0" x2="1200" y2="700" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <ellipse cx="600" cy="350" rx="520" ry="260" fill="url(#heroBlobGradient)" fillOpacity="0.18" />
        <ellipse cx="800" cy="200" rx="180" ry="90" fill="#34d399" fillOpacity="0.10" />
        <ellipse cx="400" cy="500" rx="140" ry="70" fill="#7c3aed" fillOpacity="0.08" />
      </svg>
      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight font-heading animate-gradient-move mb-6">
          <span className="bg-gradient-to-r from-primary via-primary-accent to-accent bg-clip-text text-transparent">Scale Your Business </span>
          <span className="text-primary">Effortlessly</span>
        </h1>
        <p className="mt-2 text-base sm:text-lg lg:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10">
          The all-in-one platform that helps growing companies automate workflows, manage teams, and boost productivity with AI-powered insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up w-full max-w-md mx-auto">
          <Button size="lg" className="btn-premium text-lg px-8 py-4">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 transition-smooth">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        {/* Modern Laptop Mockup with Dashboard */}
        <div className="relative mx-auto animate-float w-full max-w-[95vw] sm:max-w-[480px] md:max-w-[520px] h-[200px] sm:h-[260px] md:h-[320px]">
          <svg viewBox="0 0 520 340" width="100%" height="100%" className="absolute left-0 top-0 z-0" style={{filter:'drop-shadow(0 12px 48px rgba(60,80,180,0.16))'}}>
            <rect x="0" y="0" width="520" height="340" rx="28" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
            {/* Laptop base */}
            <rect x="120" y="320" width="280" height="16" rx="8" fill="#e5e7eb" />
          </svg>
          <div className="absolute left-0 top-0 w-full h-full rounded-t-[28px] overflow-hidden z-10">
            <img
              src={heroImage}
              alt="Dashboard Preview"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              style={{borderRadius:'28px'}}
            />
            {/* Overlay gradient for polish */}
            <div className="absolute inset-0 pointer-events-none" style={{background:'linear-gradient(to bottom,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.18) 100%)'}} />
          </div>
          {/* Floating UI Card/Icon, positioned bottom right */}
          <div className="flex absolute right-4 bottom-4 bg-white rounded-xl shadow-medium px-4 py-2 items-center gap-2 animate-float text-xs sm:text-base" style={{zIndex:20}}>
            <svg width="24" height="24" fill="none" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="5"/><path d="M12 8v8"/></svg>
            <span className="font-semibold text-primary">AI Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}