/**
 * SampleReportPreview - Shows sample kundali content
 * 
 * Features:
 * - Visual preview of what premium report contains
 * - Mobile-friendly
 * - CTA to upgrade
 */

import { motion } from "framer-motion";
import { FileText, Star, TrendingUp, Heart, Briefcase, Gem, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi!%20I%20want%20the%20Premium%20Kundali%20Report";

const SampleReportPreview = () => {
  const reportSections = [
    { icon: Star, title: "Birth Chart Analysis", description: "Complete Lagna chart with planetary positions" },
    { icon: TrendingUp, title: "Life Predictions", description: "Yearly forecasts for next 5 years" },
    { icon: Heart, title: "Marriage Analysis", description: "Spouse characteristics & timing" },
    { icon: Briefcase, title: "Career Guidance", description: "Best career paths & timings" },
    { icon: Gem, title: "Gemstone Recommendations", description: "Personalized gemstone advice" },
    { icon: Calendar, title: "Auspicious Dates", description: "Best dates for important events" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-card/50" id="sample-report">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Sample Report • नमूना रिपोर्ट
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What's in Your Kundali
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse of our comprehensive 20-page premium report
            <span className="block text-primary text-base mt-1">20 पेज की विस्तृत रिपोर्ट की झलक</span>
          </p>
        </motion.div>

        {/* Report Preview Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {reportSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <section.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{section.title}</h3>
              <p className="text-sm text-muted-foreground">{section.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sample Chart Preview */}
        <motion.div 
          className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">Sample Birth Chart</h3>
            <p className="text-sm text-muted-foreground">North Indian style Lagna chart</p>
          </div>
          
          {/* Simplified Chart Visualization */}
          <div className="relative aspect-square max-w-xs mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-3">📊</div>
              <p className="text-sm text-muted-foreground">Interactive Birth Chart</p>
              <p className="text-xs text-primary">कुंडली चार्ट</p>
            </div>
            {/* Overlay for premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent rounded-xl flex items-end justify-center pb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Full chart in premium report
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="btn-gold text-lg px-10 py-7 rounded-2xl gap-2 shadow-lg"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Get Your Full Report (₹199)
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Includes all 20 pages • PDF download • WhatsApp delivery
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SampleReportPreview;
