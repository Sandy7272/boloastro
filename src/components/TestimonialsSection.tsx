import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <section className="py-24 lg:py-32 bg-card/50" id="testimonials">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Users Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by thousands of satisfied customers across India.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-background border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
