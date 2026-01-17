import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    rating: 5,
    text: "BoloAstro ki prediction bahut accurate thi! Career change ke baare mein jo bataya, exactly wahi hua.",
    avatar: "R",
  },
  {
    name: "Priya Patel",
    location: "Delhi",
    rating: 5,
    text: "Marriage prediction bilkul sahi nikli! Timing aur partner ki description dono match kiya.",
    avatar: "P",
  },
  {
    name: "Amit Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Best WhatsApp astrology bot. Instant replies aur detailed analysis milti hai.",
    avatar: "A",
  },
  {
    name: "Sneha Gupta",
    location: "Jaipur",
    rating: 5,
    text: "Kundali PDF download karke dekhi, bohot detailed thi. Dasha analysis se future planning mein help mili.",
    avatar: "S",
  },
  {
    name: "Vikram Singh",
    location: "Lucknow",
    rating: 5,
    text: "Affordable pricing mein premium quality. Jo kaam pandit ji hazaaron mein karte, yahan hundreds mein!",
    avatar: "V",
  },
  {
    name: "Anjali Mehta",
    location: "Pune",
    rating: 5,
    text: "24/7 available hona sabse bada plus point hai. Raat ko bhi question poocha, instant reply mila!",
    avatar: "A",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 lg:py-32 bg-card/50" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4" role="doc-subtitle">
            {t('testimonials.badge')}
          </p>
          <h2 id="testimonials-heading" className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list" aria-label="Customer testimonials">
          {testimonials.map((testimonial, index) => (
            <motion.article 
              key={index}
              className="bg-background border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              role="listitem"
              aria-label={`Review by ${testimonial.name} from ${testimonial.location}`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" aria-hidden="true" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                <p>"{testimonial.text}"</p>
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold" aria-hidden="true">
                  {testimonial.avatar}
                </div>
                <div>
                  <cite className="font-semibold text-foreground text-sm not-italic">{testimonial.name}</cite>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;