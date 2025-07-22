import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "You get 14 days of full access to all Pro features, no credit card required. You can cancel anytime during the trial period."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate your billing."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer email support for all plans, priority support for Pro users, and dedicated phone support for Enterprise customers."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption, are SOC 2 compliant, and regularly undergo security audits. Your data is safe with us."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24" aria-label="Frequently Asked Questions">
      <div className="container max-w-3xl">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="mt-16 animate-slide-up">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}