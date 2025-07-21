import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 lg:py-32">
      <div className="absolute inset-0 hero-glow"></div>
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Scale Your Business{" "}
              <span className="text-gradient-primary">Effortlessly</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl lg:text-2xl max-w-2xl mx-auto">
              The all-in-one platform that helps growing companies automate workflows, 
              manage teams, and boost productivity with AI-powered insights.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 transition-smooth">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground animate-fade-in">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>

        <div className="mt-16 animate-scale-in">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-sm opacity-30"></div>
            <div className="relative rounded-2xl border bg-card shadow-large overflow-hidden">
              <img
                src={heroImage}
                alt="SaasFlow Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}