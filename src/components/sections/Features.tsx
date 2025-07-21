import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users, BarChart3, Workflow, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with modern architecture that scales with your business needs."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and end-to-end encryption."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools that keep your team in sync across projects."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights with customizable dashboards and automated reporting."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks with powerful no-code workflow builder."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support with dedicated success managers."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-subtle">
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-soft hover:shadow-medium transition-smooth bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary mb-4 group-hover:scale-110 transition-smooth">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}