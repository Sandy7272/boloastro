import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    question: "Is BoloAstro accurate?",
    answer: "Yes! BoloAstro uses authentic Vedic astrology principles combined with AI for accurate predictions. Our system is trained on traditional Jyotish methods and has helped over 10,000+ users with reliable readings.",
  },
  {
    question: "How does the WhatsApp bot work?",
    answer: "Simply click our WhatsApp button to start a chat. Share your birth details (date, time, place) and our AI astrologer will generate your personalized kundali and predictions instantly. You can then ask unlimited questions!",
  },
  {
    question: "Is my personal data safe?",
    answer: "Absolutely! We take privacy very seriously. Your birth details and chat conversations are encrypted and never shared with third parties. We follow strict data protection guidelines.",
  },
  {
    question: "Can I talk to a human astrologer?",
    answer: "Yes! Our VIP plan includes access to experienced human astrologers for complex questions and personalized guidance. They can review your chart and provide detailed consultations.",
  },
  {
    question: "What languages do you support?",
    answer: "Currently, our bot supports Hindi and English (Hinglish). You can chat in whichever language you're comfortable with, and we'll respond accordingly.",
  },
  {
    question: "How accurate are the marriage predictions?",
    answer: "Our marriage timing predictions are based on traditional Vedic principles including Dasha analysis, transit positions, and Navamsa chart. Many users have confirmed the accuracy of our marriage timing predictions.",
  },
  {
    question: "Can I get a refund if not satisfied?",
    answer: "Yes, we offer a 7-day money-back guarantee on all paid plans. If you're not satisfied with our service, just reach out and we'll process your refund, no questions asked.",
  },
  {
    question: "Do I need to download any app?",
    answer: "No! BoloAstro works entirely on WhatsApp. There's no app to download or install. Just start chatting and get your astrology readings instantly.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-light/20 via-transparent to-cosmic-light/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Frequently Asked <span className="text-gradient-saffron">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about BoloAstro.
          </p>
        </ScrollReveal>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <StaggerContainer staggerDelay={0.08}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-glass rounded-xl border border-border/40 px-6 data-[state=open]:border-saffron/40"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-saffron transition-colors py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
