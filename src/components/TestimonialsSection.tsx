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
    <section className="py-28 lg:py-36 relative overflow-hidden" id="testimonials">
      <div className="nebula-bg opacity-30" />
      <div className="absolute inset-0 stars-bg opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-20 space-y-6">
          <div className="ornament-divider mb-8">✦</div>
          <p className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">Testimonials</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            What Our <span className="text-gradient-saffron">Users Say</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Thousands of happy customers trust BoloAstro for their astrology needs.
          </p>
        </ScrollReveal>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <Card variant="testimonial" className="card-premium hover-lift h-full">
                <CardContent className="p-8 space-y-5 relative z-10">
                  <Quote className="w-10 h-10 text-gold/30" />
                  <p className="text-foreground/90 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-saffron flex items-center justify-center text-cosmic-dark font-bold text-lg shadow-lg shadow-gold/20">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
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