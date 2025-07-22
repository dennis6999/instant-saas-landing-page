import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

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
  },
  {
    name: "David Kim",
    role: "CTO, CloudSync",
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&crop=face",
    content: "The onboarding was seamless and our team adopted it quickly. The integrations and automations are a game changer.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Head of Marketing, BrightEdge",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
    content: "We love the analytics and reporting. It gives us the insights we need to make data-driven decisions every day.",
    rating: 5
  },
  {
    name: "Alex Johnson",
    role: "Founder, Startly",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    content: "SaasFlow is the backbone of our operations. The support team is responsive and always helpful.",
    rating: 5
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 1, dragFree: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update selected index on scroll
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      if (emblaApi) emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  return (
    <section id="testimonials" className="py-24 bg-background text-foreground px-4">
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
        <div className="relative mt-16 flex items-center justify-center">
          {/* Desktop scroll buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 shadow-soft border border-border hover:bg-muted transition-smooth hidden sm:block"
            onClick={scrollPrev}
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="overflow-hidden w-full max-w-4xl min-w-0" ref={emblaRef}>
            <div className="flex gap-4 md:gap-8 min-w-0 max-w-full">
              {testimonials.map((testimonial, idx) => {
                let slideClass = "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ";
                if (idx === selectedIndex) {
                  slideClass += "scale-105 shadow-2xl z-20 bg-card/90 ";
                } else if (
                  idx === (selectedIndex - 1 + testimonials.length) % testimonials.length ||
                  idx === (selectedIndex + 1) % testimonials.length
                ) {
                  slideClass += "opacity-60 scale-95 z-10 ";
                } else {
                  slideClass += "opacity-30 scale-90 z-0 ";
                }
                return (
                  <div
                    key={idx}
                    className={`embla__slide flex-shrink-0 w-full md:w-1/3 ${slideClass} min-w-0 max-w-full`}
                    style={{ maxWidth: idx === selectedIndex ? 600 : 520, minWidth: 0, height: 420 }}
                  >
                    <Card
                      className="w-full h-[420px] border-0 shadow-soft bg-card/50 backdrop-blur-sm animate-fade-in-up embla__slide__inner flex flex-col justify-between"
                    >
                      <CardContent className="testimonial-bubble p-8 sm:p-12 flex flex-col flex-1 justify-between">
                        <div className="flex mb-4 text-base sm:text-lg">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <blockquote className="text-foreground mb-6 text-sm sm:text-base">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 sm:h-12 sm:w-12 mr-4 avatar-premium">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-base sm:text-lg">{testimonial.name}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 shadow-soft border border-border hover:bg-muted transition-smooth hidden sm:block"
            onClick={scrollNext}
            aria-label="Scroll testimonials right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        {/* Mobile scroll buttons below carousel */}
        <div className="flex sm:hidden justify-center gap-6 mt-6">
          <button
            className="bg-background/80 rounded-full p-3 shadow-soft border border-border hover:bg-muted transition-smooth"
            onClick={scrollPrev}
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            className="bg-background/80 rounded-full p-3 shadow-soft border border-border hover:bg-muted transition-smooth"
            onClick={scrollNext}
            aria-label="Scroll testimonials right"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      </div>
    </section>
  );
}