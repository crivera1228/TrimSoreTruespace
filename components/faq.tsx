import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of services including basic wash, full detailing, and paint correction. Each service is designed to meet different needs and budgets."
  },
  {
    question: "How long does a full detail take?",
    answer: "A full detail typically takes 4-6 hours, depending on the size and condition of the vehicle."
  },
  {
    question: "Do you offer mobile detailing?",
    answer: "Yes, we offer mobile detailing services. We can come to your home or office at a time that's convenient for you."
  },
  {
    question: "What products do you use?",
    answer: "We use high-quality, professional-grade products that are safe for your vehicle and the environment."
  }
];

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}