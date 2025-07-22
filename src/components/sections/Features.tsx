import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users, BarChart3, Workflow, Clock } from "lucide-react";

const features = [
  {
    icon: () => (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M16 8v8M8 8v8"/></svg>
    ),
    title: "Lightning Fast",
    description: "Built for speed with modern architecture that scales with your business needs."
  },
  {
    icon: () => (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    ),
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and end-to-end encryption."
  },
  {
    icon: () => (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: "Team Collaboration",
    description: "Real-time collaboration tools that keep your team in sync across projects."
  },
  {
    icon: () => (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>
    ),
    title: "Advanced Analytics",
    description: "Get deep insights with customizable dashboards and automated reporting."
  },
  {
    icon: () => (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
    title: "Workflow Automation",
    description: "Automate repetitive tasks with powerful no-code workflow builder."
  },
  {
    icon: () => (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: "24/7 Support",
    description: "Round-the-clock customer support with dedicated success managers."
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-24 bg-background text-foreground px-4">
      <svg className="absolute top-0 left-0 w-full" height="64" viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:2}}>
        <path d="M0,32 C360,0 1080,64 1440,32 L1440,0 L0,0 Z" fill="hsl(var(--background))" />
      </svg>
      <div className="container">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="text-gradient-primary">succeed</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you build, scale, and optimize your business operations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group border-0 shadow-soft hover:shadow-medium transition-smooth bg-card/50 backdrop-blur-sm animate-fade-in hover:scale-105
                ${index % 2 === 1 ? 'bg-gradient-to-br from-primary/10 to-accent/10' : ''}
                ${index % 3 === 1 ? 'lg:mt-12' : ''} ${index % 3 === 2 ? 'lg:mt-24' : ''} w-full max-w-full`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5 sm:p-8 flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary mb-4 group-hover:scale-110 transition-smooth">
                  <feature.icon />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 w-full" height="64" viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:2}}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="hsl(var(--background))" />
      </svg>
    </section>
  );
}