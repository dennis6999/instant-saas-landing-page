import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Standard integrations"
    ]
  },
  {
    name: "Professional",
    description: "Best for growing businesses",
    monthlyPrice: 99,
    yearlyPrice: 990,
    popular: true,
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "All integrations",
      "Custom workflows",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "Custom integrations",
      "Advanced security",
      "Dedicated success manager",
      "Custom training"
    ]
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simple, transparent{" "}
            <span className="text-gradient-primary">pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="mt-8 flex justify-center animate-slide-up">
          <div className="flex items-center space-x-4 bg-muted rounded-lg p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                !isYearly ? "bg-background shadow-soft" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                isYearly ? "bg-background shadow-soft" : "text-muted-foreground"
              }`}
            >
              Yearly
              <Badge variant="secondary" className="ml-2 bg-gradient-primary text-white">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-smooth hover:shadow-medium animate-scale-in ${
                plan.popular ? "border-primary shadow-soft" : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  
                  <div className="mt-6">
                    <span className="text-4xl font-bold">
                      ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                    {isYearly && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Billed annually (${plan.yearlyPrice}/year)
                      </p>
                    )}
                  </div>

                  <Button 
                    className={`w-full mt-6 transition-smooth ${
                      plan.popular ? "bg-gradient-primary hover:opacity-90" : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All plans include 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}