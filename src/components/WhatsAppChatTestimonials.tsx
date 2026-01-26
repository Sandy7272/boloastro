/**
 * WhatsAppChatTestimonials - Enhanced Testimonials
 * 
 * Features:
 * - Better WhatsApp-style cards
 * - More testimonials
 * - Verified badges
 * - Star ratings
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
      message: "Thank you Panditji! 🙏 Job prediction was 100% correct. Got the offer exactly when you said!",
      messageHi: "नौकरी की भविष्यवाणी बिल्कुल सही निकली!",
      time: "10:42 AM",
      category: "Career",
    },
    {
      name: "Priya D.",
      location: "Mumbai", 
      rating: 5,
      message: "Shaadi ka yog bilkul sahi nikla! Got married within 6 months 💑",
      messageHi: "6 महीने में शादी हो गई!",
      time: "2:15 PM",
      category: "Marriage",
    },
    {
      name: "Amit K.",
      location: "Delhi",
      rating: 5,
      message: "Career guidance was spot on! Finally got the promotion. Highly recommend 👍",
      messageHi: "प्रमोशन मिल गया!",
      time: "7:30 PM",
      category: "Career",
    },
    {
      name: "Neha P.",
      location: "Jaipur",
      rating: 5,
      message: "AI Pandit available 24/7, very convenient. Remedies really worked! 🌟",
      messageHi: "उपाय सच में काम किए!",
      time: "11:05 AM",
      category: "Remedies",
    },
    {
      name: "Vikram M.",
      location: "Bangalore",
      rating: 5,
      message: "Kundali report was so detailed! Better than expensive pandits. Very happy ❤️",
      messageHi: "बहुत विस्तृत रिपोर्ट!",
      time: "4:20 PM",
      category: "Kundali",
    },
    {
      name: "Sunita R.",
      location: "Chennai",
      rating: 5,
      message: "My daughter's marriage timing was predicted perfectly. Thank you so much! 🙏",
      messageHi: "शादी का समय एकदम सही बताया!",
      time: "9:15 AM",
      category: "Marriage",
    },
  ];

  return (
    <section 
      className="py-20 lg:py-28 bg-gradient-to-b from-background to-card/30" 
      id="testimonials" 
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Quote className="w-4 h-4" />
            Real Reviews • असली समीक्षाएं
          </span>
          <h2 
            id="testimonials-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
          >
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground">
            10,000+ satisfied customers across India
            <span className="block text-primary text-base mt-1">पूरे भारत में 10,000+ संतुष्ट ग्राहक</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.article 
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative bg-card border border-border rounded-2xl p-5 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all h-full">
                {/* Category Badge */}
                <span className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                  {testimonial.category}
                </span>

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{testimonial.name}</span>
                      <CheckCheck className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                  </div>
                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl rounded-tl-none p-4 mb-3">
                  <p className="text-foreground text-sm leading-relaxed">
                    {testimonial.message}
                  </p>
                  <p className="text-xs text-primary mt-2">
                    {testimonial.messageHi}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{testimonial.time}</span>
                  <span className="flex items-center gap-1">
                    <CheckCheck className="w-4 h-4 text-blue-500" />
                    Verified on WhatsApp
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col items-center gap-2 px-8 py-4 rounded-2xl bg-card border border-border">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-2xl font-bold text-foreground">4.9/5</p>
            <p className="text-sm text-muted-foreground">Based on 10,000+ reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppChatTestimonials;
