import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is BoloAstro accurate?",
    answer: "Yes! BoloAstro uses authentic Vedic astrology principles combined with AI for accurate predictions. Our system is trained on traditional Jyotish methods and has helped over 10,000+ users.",
  },
  {
    question: "How does the WhatsApp bot work?",
    answer: "Simply click our WhatsApp button to start a chat. Share your birth details and our AI astrologer will generate your personalized kundali and predictions instantly.",
  },
  {
    question: "Is my personal data safe?",
    answer: "Absolutely! Your birth details and conversations are encrypted and never shared with third parties. We follow strict data protection guidelines.",
  },
  {
    question: "Can I talk to a human astrologer?",
    answer: "Yes! Our VIP plan includes access to experienced human astrologers for complex questions and personalized consultations.",
  },
  {
    question: "What languages do you support?",
    answer: "Currently, our bot supports Hindi and English (Hinglish). You can chat in whichever language you're comfortable with.",
  },
  {
    question: "Can I get a refund if not satisfied?",
    answer: "Yes, we offer a 7-day money-back guarantee on all paid plans. If you're not satisfied, just reach out and we'll process your refund.",
  },
  {
    question: "Do I need to download any app?",
    answer: "No! BoloAstro works entirely on WhatsApp. There's no app to download. Just start chatting and get your readings instantly.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card/50" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about BoloAstro.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
