/**
 * FAQSection - Enhanced FAQ with better UX
 * 
 * Features:
 * - Cleaner accordion design
 * - FAQ Schema for SEO
 * - Bilingual questions
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
      question: "How accurate is AI astrology?",
      questionHi: "AI ज्योतिष कितना सटीक है?",
      answer: "Our AI is trained on 5,000+ authentic Vedic scriptures and uses traditional calculation methods. Many users report 90%+ accuracy in predictions. The AI combines ancient wisdom with modern precision for reliable results.",
      answerHi: "हमारा AI 5,000+ प्रामाणिक वैदिक ग्रंथों पर प्रशिक्षित है।"
    },
    { 
      question: "Is my birth data safe and private?",
      questionHi: "क्या मेरा डेटा सुरक्षित है?",
      answer: "Absolutely! Your data is encrypted and never shared with third parties. We follow strict privacy protocols. Your birth details are only used to generate your personalized reports.",
      answerHi: "बिल्कुल! आपका डेटा एन्क्रिप्टेड है और कभी शेयर नहीं होता।"
    },
    { 
      question: "How does the WhatsApp service work?",
      questionHi: "WhatsApp सेवा कैसे काम करती है?",
      answer: "Simply fill in your birth details on our website. You'll be redirected to WhatsApp where our AI Pandit will instantly generate your kundali and answer your questions 24/7.",
      answerHi: "बस जन्म विवरण भरें और WhatsApp पर तुरंत जवाब पाएं।"
    },
    { 
      question: "What's included in the free report?",
      questionHi: "मुफ्त रिपोर्ट में क्या शामिल है?",
      answer: "The free report includes your basic kundali with Rashi, Nakshatra, Lagna, and general predictions. For detailed Dasha analysis, remedies, and full PDF report, you can upgrade to Premium.",
      answerHi: "मुफ्त रिपोर्ट में राशि, नक्षत्र, लग्न और सामान्य भविष्यवाणी शामिल है।"
    },
    { 
      question: "What is Mangal Dosha and do I have it?",
      questionHi: "मंगल दोष क्या है?",
      answer: "Mangal Dosha occurs when Mars is placed in certain houses of your chart. Our AI checks for this automatically and provides remedies if present. Don't worry - most Doshas can be remedied!",
      answerHi: "मंगल दोष तब होता है जब मंगल कुछ विशेष घरों में हो। हमारा AI स्वचालित रूप से जांच करता है।"
    },
    { 
      question: "Can I get marriage compatibility matching?",
      questionHi: "क्या मुझे शादी के लिए कुंडली मिलान मिल सकता है?",
      answer: "Yes! Our Kundali Milan service analyzes 36 Gunas for compatibility. Just share both birth details on WhatsApp and get instant compatibility score with detailed analysis.",
      answerHi: "हां! 36 गुणों का विश्लेषण करते हैं। दोनों के जन्म विवरण WhatsApp पर भेजें।"
    },
    { 
      question: "What is your refund policy?",
      questionHi: "रिफंड पॉलिसी क्या है?",
      answer: "Free reports are completely free. For paid services, we offer a satisfaction guarantee. If you're not happy with the premium report within 7 days, contact us for a refund.",
      answerHi: "मुफ्त रिपोर्ट बिल्कुल मुफ्त है। पेड सेवाओं के लिए संतुष्टि गारंटी है।"
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
      className="py-20 lg:py-28 bg-card/50" 
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
        <motion.div 
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Common Questions • आम सवाल
          </span>
          <h2 
            id="faq-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our service
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
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline group">
                  <div className="flex-1">
                    <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors block">
                      {faq.question}
                    </span>
                    <span className="text-sm text-primary/80 mt-1 block">
                      {faq.questionHi}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {faq.answer}
                  </p>
                  <p className="text-sm text-primary/70">
                    {faq.answerHi}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? Chat with our AI Pandit!
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-8 py-6 gap-2"
            asChild
          >
            <a href="https://wa.me/917261969798?text=Hi!%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Ask on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
