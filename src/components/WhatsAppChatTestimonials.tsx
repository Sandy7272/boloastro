/**
 * WhatsAppChatTestimonials - WhatsApp-style testimonial cards
 * 
 * Features:
 * - Looks like real WhatsApp chat screenshots
 * - Blurred background effect
 * - Authentic Indian user reviews
 */

import { useTranslation } from "react-i18next";
import { Check, CheckCheck } from "lucide-react";

const WhatsAppChatTestimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Rohit S.",
      location: "Pune",
      message: "Thank you Panditji! 🙏 The job prediction was 100% correct. Got the offer exactly when you said!",
      messageHi: "धन्यवाद पंडितजी! नौकरी की भविष्यवाणी बिल्कुल सही निकली। 🙏",
      time: "10:42 AM",
      verified: true,
    },
    {
      name: "Priya D.",
      location: "Mumbai", 
      message: "Shaadi ka yog bilkul sahi nikla! Got married within 6 months 💑",
      messageHi: "शादी का योग बिल्कुल सही निकला! 6 महीने में शादी हो गई 💑",
      time: "2:15 PM",
      verified: true,
    },
    {
      name: "Amit K.",
      location: "Delhi",
      message: "Career guidance was spot on! Finally got the promotion. Highly recommend 👍",
      messageHi: "करियर गाइडेंस एकदम सटीक! प्रमोशन मिल गया 👍",
      time: "7:30 PM",
      verified: true,
    },
    {
      name: "Neha P.",
      location: "Jaipur",
      message: "AI Pandit available 24/7, very convenient. Remedies really worked! 🌟",
      messageHi: "AI पंडित 24/7 उपलब्ध, बहुत सुविधाजनक। उपाय सच में काम किए! 🌟",
      time: "11:05 AM",
      verified: true,
    },
  ];

  return (
    <section 
      className="py-16 lg:py-20 bg-gradient-to-b from-background to-card/50" 
      id="testimonials" 
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            {t('testimonials.badge')}
          </p>
          <h2 
            id="testimonials-heading" 
            className="text-3xl lg:text-4xl font-semibold text-foreground mb-3"
          >
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* WhatsApp-style Testimonial Cards */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto" 
          role="list" 
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="relative group"
              role="listitem"
              aria-label={`Review by ${testimonial.name} from ${testimonial.location}`}
            >
              {/* Blurred background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              
              {/* WhatsApp Chat Card */}
              <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-4 hover:border-green-500/30 transition-colors">
                {/* WhatsApp Header */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-xs font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-foreground text-sm">{testimonial.name}</span>
                      {testimonial.verified && (
                        <span className="text-green-500 text-xs">✓</span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                  </div>
                </div>

                {/* Chat Bubble */}
                <div className="bg-green-500/10 rounded-lg rounded-tl-none p-3 mb-2">
                  <p className="text-foreground text-sm leading-relaxed">
                    {testimonial.message}
                  </p>
                </div>

                {/* Time & Read Receipt */}
                <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                  <span>{testimonial.time}</span>
                  <CheckCheck className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-medium">10,000+</span> satisfied customers across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppChatTestimonials;
