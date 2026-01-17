/**
 * FAQSection - Phase 4: Indian Questions in Hinglish
 * 
 * Features:
 * - Hinglish questions that Indian users actually ask
 * - Simple accordion design
 * - SEO FAQ schema
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
    { question: t("faq.q7"), answer: t("faq.a7") },
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section 
      className="py-16 lg:py-20 bg-card/50" 
      id="faq" 
      aria-labelledby="faq-heading"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            {t("faq.badge")}
          </p>
          <h2 
            id="faq-heading" 
            className="text-3xl lg:text-4xl font-semibold text-foreground mb-3"
          >
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div 
          className="max-w-2xl mx-auto"
          role="region"
          aria-label="Frequently Asked Questions"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-5 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-4 text-foreground text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
