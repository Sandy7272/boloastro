import { Card, CardContent } from "@/components/ui/card";
import { User, TrendingUp, Heart, Calendar } from "lucide-react";

const reports = [
  {
    icon: User,
    title: "Personality Analysis",
    description: "Understand your core traits, strengths, and hidden potentials based on your birth chart.",
    highlight: "Know Your True Self",
  },
  {
    icon: TrendingUp,
    title: "Career Graph",
    description: "Detailed career trajectory with best periods for job changes and business ventures.",
    highlight: "Next 5 Years Forecast",
  },
  {
    icon: Heart,
    title: "Marriage Timing",
    description: "Precise marriage timing prediction with compatibility insights for your life partner.",
    highlight: "Mangal Dosha Check",
  },
  {
    icon: Calendar,
    title: "Yearly Predictions",
    description: "Month-by-month forecast covering health, wealth, relationships, and opportunities.",
    highlight: "2024-2025 Varshphal",
  },
];

const SampleReportsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="reports">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-light/20 via-transparent to-cosmic-light/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Sample <span className="text-gradient-saffron">Reports</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's a preview of the detailed astrology reports you'll receive. 
            Each report is personalized based on your unique birth chart.
          </p>
        </div>
        
        {/* Reports grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report, index) => (
            <Card 
              key={index} 
              variant="cosmic"
              className="group cursor-pointer hover:border-saffron/40 hover:shadow-xl hover:shadow-saffron/10 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <report.icon className="w-8 h-8 text-saffron" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium">
                      {report.highlight}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-saffron transition-colors">
                      {report.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleReportsSection;
