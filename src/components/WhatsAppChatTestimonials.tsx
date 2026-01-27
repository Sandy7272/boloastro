/**
 * WhatsAppChatTestimonials - Mobile-First Testimonials
 * 
 * Features:
 * - WhatsApp-style cards
 * - Responsive grid
 * - Star ratings and verified badges
 */

import { useTranslation } from "react-i18next";
import { CheckCheck, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppChatTestimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Rohit S.",
      location: "Pune",
      rating: 5,
      message: "Job prediction was 100% correct! Got the offer exactly when predicted 🙏",
      messageHi: "नौकरी की भविष्यवाणी सही निकली!",
      time: "10:42 AM",
      category: "Career",
    },
    {
      name: "Priya D.",
      location: "Mumbai", 
      rating: 5,
      message: "Shaadi ka yog sahi nikla! Got married within 6 months 💑",
      messageHi: "6 महीने में शादी हो गई!",
      time: "2:15 PM",
      category: "Marriage",
    },
    {
      name: "Amit K.",
      location: "Delhi",
      rating: 5,
      message: "Career guidance spot on! Finally got the promotion 👍",
      messageHi: "प्रमोशन मिल गया!",
      time: "7:30 PM",
      category: "Career",
    },
    {
      name: "Neha P.",
      location: "Jaipur",
      rating: 5,
      message: "AI Pandit available 24/7, very convenient. Remedies worked! 🌟",
      messageHi: "उपाय सच में काम किए!",
      time: "11:05 AM",
      category: "Remedies",
    },
    {
      name: "Vikram M.",
      location: "Bangalore",
      rating: 5,
      message: "Kundali report was so detailed! Better than expensive pandits ❤️",
      messageHi: "बहुत विस्तृत रिपोर्ट!",
      time: "4:20 PM",
      category: "Kundali",
    },
    {
      name: "Sunita R.",
      location: "Chennai",
      rating: 5,
      message: "Daughter's marriage timing predicted perfectly. Thank you! 🙏",
      messageHi: "शादी का समय सही बताया!",
      time: "9:15 AM",
      category: "Marriage",
    },
  ];

  return (
    <section 
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-background to-card/30" 
      id="testimonials" 
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Quote className="w-4 h-4" />
            {t('testimonials.badge')} • असली समीक्षाएं
          </span>
          <h2 
            id="testimonials-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4"
          >
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.article 
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all h-full">
                {/* Category Badge */}
                <span className="absolute -top-2.5 right-3 sm:right-4 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-500 text-white text-[10px] sm:text-xs font-medium">
                  {testimonial.category}
                </span>

                {/* Header */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-sm sm:text-lg font-bold shadow-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="font-semibold text-foreground text-sm sm:text-base truncate">{testimonial.name}</span>
                      <CheckCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.location}</span>
                  </div>
                  {/* Rating - Hidden on very small screens */}
                  <div className="hidden xs:flex gap-0.5">
                    {[...Array(Math.min(testimonial.rating, 3))].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-lg sm:rounded-xl rounded-tl-none p-3 sm:p-4 mb-2 sm:mb-3">
                  <p className="text-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {testimonial.message}
                  </p>
                  <p className="text-[10px] sm:text-xs text-primary mt-1.5 sm:mt-2">
                    {testimonial.messageHi}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground">
                  <span>{testimonial.time}</span>
                  <span className="flex items-center gap-1">
                    <CheckCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                    <span className="hidden sm:inline">Verified on</span> WhatsApp
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-card border border-border">
            <div className="flex gap-0.5 sm:gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xl sm:text-2xl font-bold text-foreground">4.9/5</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Based on 10,000+ reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppChatTestimonials;
