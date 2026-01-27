/**
 * FAQSection - Mobile-First FAQ with SEO Schema
 * 
 * Features:
 * - Cleaner accordion design
 * - Bilingual questions
 * - FAQ Schema for SEO
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    { 
      question: t('faq.q1') || "How accurate is AI astrology?",
      questionHi: "AI ज्योतिष कितना सटीक है?",
      answer: t('faq.a1') || "Our AI is trained on 5,000+ authentic Vedic scriptures and uses traditional calculation methods. Many users report 90%+ accuracy.",
      answerHi: "5,000+ प्रामाणिक वैदिक ग्रंथों पर प्रशिक्षित"
    },
    { 
      question: t('faq.q2') || "Is my birth data safe?",
      questionHi: "क्या मेरा डेटा सुरक्षित है?",
      answer: t('faq.a2') || "Absolutely! Your data is encrypted and never shared with third parties. We follow strict privacy protocols.",
      answerHi: "डेटा एन्क्रिप्टेड है, कभी शेयर नहीं होता"
    },
    { 
      question: t('faq.q3') || "How does WhatsApp service work?",
      questionHi: "WhatsApp सेवा कैसे काम करती है?",
      answer: t('faq.a3') || "Fill your birth details on our website, then chat with our AI Pandit on WhatsApp for instant kundali and answers 24/7.",
      answerHi: "जन्म विवरण भरें, WhatsApp पर तुरंत जवाब पाएं"
    },
    { 
      question: t('faq.q4') || "What's in the free report?",
      questionHi: "मुफ्त रिपोर्ट में क्या है?",
      answer: t('faq.a4') || "Free report includes basic kundali with Rashi, Nakshatra, Lagna, and general predictions. Upgrade for detailed analysis.",
      answerHi: "राशि, नक्षत्र, लग्न और सामान्य भविष्यवाणी"
    },
    { 
      question: t('faq.q5') || "What is Mangal Dosha?",
      questionHi: "मंगल दोष क्या है?",
      answer: t('faq.a5') || "Mangal Dosha occurs when Mars is in certain houses. Our AI checks automatically and provides remedies if present.",
      answerHi: "AI स्वचालित रूप से जांच करता है और उपाय बताता है"
    },
    { 
      question: t('faq.q6') || "Can I get marriage matching?",
      questionHi: "कुंडली मिलान मिल सकता है?",
      answer: t('faq.a6') || "Yes! Our Kundali Milan analyzes 36 Gunas. Share both birth details on WhatsApp for instant compatibility score.",
      answerHi: "36 गुणों का विश्लेषण, WhatsApp पर भेजें"
    },
    { 
      question: t('faq.q7') || "What is your refund policy?",
      questionHi: "रिफंड पॉलिसी क्या है?",
      answer: t('faq.a7') || "Free reports are completely free. For paid services, we offer 7-day satisfaction guarantee.",
      answerHi: "मुफ्त रिपोर्ट बिल्कुल मुफ्त, पेड में 7 दिन गारंटी"
    },
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
      className="py-16 sm:py-20 lg:py-28 bg-card/50" 
      id="faq" 
      aria-labelledby="faq-heading"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <HelpCircle className="w-4 h-4" />
            {t('faq.badge')} • आम सवाल
          </span>
          <h2 
            id="faq-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4"
          >
            {t('faq.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl sm:rounded-2xl px-4 sm:px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all"
              >
                <AccordionTrigger className="text-left py-4 sm:py-5 hover:no-underline group">
                  <div className="flex-1 pr-2">
                    <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors block leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-xs sm:text-sm text-primary/80 mt-0.5 block">
                      {faq.questionHi}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    {faq.answer}
                  </p>
                  <p className="text-xs sm:text-sm text-primary/70">
                    {faq.answerHi}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
            Still have questions? Chat with our AI Pandit!
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 sm:px-8 py-5 sm:py-6 gap-2 text-sm sm:text-base"
            asChild
          >
            <a href="https://wa.me/917261969798?text=Hi!%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Ask on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
