import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    rating: 5,
    text: "BoloAstro ki prediction bahut accurate thi! Career change ke baare mein jo bataya, exactly wahi hua. Highly recommended!",
    avatar: "R",
  },
  {
    name: "Priya Patel",
    location: "Delhi",
    rating: 5,
    text: "Marriage prediction bilkul sahi nikli! Timing aur partner ki description dono match kiya. Thank you BoloAstro!",
    avatar: "P",
  },
  {
    name: "Amit Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Best WhatsApp astrology bot I've ever used. Instant replies aur detailed analysis milti hai. Ab doosra astrologer nahi dekhta.",
    avatar: "A",
  },
  {
    name: "Sneha Gupta",
    location: "Jaipur",
    rating: 5,
    text: "Kundali PDF download karke dekhi, bohot detailed thi. Dasha analysis se future planning mein bahut help mili.",
    avatar: "S",
  },
  {
    name: "Vikram Singh",
    location: "Lucknow",
    rating: 5,
    text: "Affordable pricing mein premium quality. Jo kaam pandit ji hazaaron mein karte, yahan hundreds mein ho gaya!",
    avatar: "V",
  },
  {
    name: "Anjali Mehta",
    location: "Pune",
    rating: 5,
    text: "24/7 available hona sabse bada plus point hai. Raat ko 2 baje bhi question poocha, instant reply mila!",
    avatar: "A",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 stars-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            What Our <span className="text-gradient-saffron">Users Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thousands of happy customers trust BoloAstro for their astrology needs.
          </p>
        </ScrollReveal>
        
        {/* Testimonials grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <Card 
                variant="testimonial"
                className="hover:border-saffron/40 transition-all duration-300 h-full"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-saffron/40" />
                  
                  {/* Text */}
                  <p className="text-foreground/90 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-cosmic-dark font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
