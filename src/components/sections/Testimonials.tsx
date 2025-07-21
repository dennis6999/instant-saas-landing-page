import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    content: "SaasFlow transformed how we manage our team workflows. The automation features saved us 15+ hours per week, and the analytics give us insights we never had before.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Operations Director, GrowthLabs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    content: "The best investment we've made for our business. The customer support is exceptional, and the platform scales beautifully as we grow. Highly recommended!",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Product Manager, InnovateX",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    content: "SaasFlow's intuitive interface and powerful features helped us streamline our product development process. Our time-to-market improved by 40%.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-subtle">
      <div className="container">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Loved by{" "}
            <span className="text-gradient-primary">thousands</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their experience with SaasFlow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-foreground mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}