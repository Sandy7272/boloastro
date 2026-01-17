/**
 * TestimonialsSection - Phase 4: Hinglish Reviews
 * 
 * Features:
 * - Hinglish testimonials from Indian users
 * - City names for local trust
 * - Star ratings
 * - Clean, simple card design
 */

import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  // Testimonials with translation keys
  const testimonials = [
    {
      nameKey: "testimonials.t1Name",
      locationKey: "testimonials.t1Location",
      textKey: "testimonials.t1Text",
      rating: 5,
    },
    {
      nameKey: "testimonials.t2Name",
      locationKey: "testimonials.t2Location",
      textKey: "testimonials.t2Text",
      rating: 5,
    },
    {
      nameKey: "testimonials.t3Name",
      locationKey: "testimonials.t3Location",
      textKey: "testimonials.t3Text",
      rating: 5,
    },
    {
      nameKey: "testimonials.t4Name",
      locationKey: "testimonials.t4Location",
      textKey: "testimonials.t4Text",
      rating: 5,
    },
  ];

  return (
    <section 
      className="py-16 lg:py-20 bg-card/50" 
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

        {/* Testimonials Grid - Simple Cards */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto" 
          role="list" 
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => {
            const name = t(testimonial.nameKey);
            const location = t(testimonial.locationKey);
            const text = t(testimonial.textKey);
            const avatar = name.charAt(0);

            return (
              <article 
                key={index}
                className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                role="listitem"
                aria-label={`Review by ${name} from ${location}`}
              >
                {/* Rating */}
                <div className="flex gap-0.5 mb-3" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" aria-hidden="true" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-foreground text-sm mb-4 leading-relaxed">
                  <p>"{text}"</p>
                </blockquote>

                {/* Author */}
                <footer className="flex items-center gap-3">
                  <div 
                    className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm" 
                    aria-hidden="true"
                  >
                    {avatar}
                  </div>
                  <div>
                    <cite className="font-semibold text-foreground text-sm not-italic block">
                      {name}
                    </cite>
                    <span className="text-xs text-muted-foreground">{location}</span>
                  </div>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;