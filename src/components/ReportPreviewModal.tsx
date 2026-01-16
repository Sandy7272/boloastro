import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ChevronLeft, ChevronRight, Download, MessageCircle, 
  Lock, Star, User, Heart, Briefcase, Calendar, Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/config/constants";

interface ReportPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportType?: string;
}

// Sample report pages with mock content
const reportPages = [
  {
    title: "Birth Chart Overview",
    subtitle: "Janam Kundali",
    icon: Star,
    sections: [
      { label: "Sun Sign", value: "Leo (सिंह)", blur: false },
      { label: "Moon Sign", value: "Cancer (कर्क)", blur: false },
      { label: "Ascendant", value: "Virgo (कन्या)", blur: false },
      { label: "Nakshatra", value: "••••••••", blur: true },
      { label: "Pada", value: "••••", blur: true },
    ],
  },
  {
    title: "Personality Analysis",
    subtitle: "Character Traits",
    icon: User,
    sections: [
      { label: "Core Traits", value: "Creative, Ambitious, Loyal", blur: false },
      { label: "Strengths", value: "••••••••••••", blur: true },
      { label: "Challenges", value: "••••••••••", blur: true },
      { label: "Life Path", value: "••••••••••••••", blur: true },
      { label: "Hidden Talents", value: "••••••••", blur: true },
    ],
  },
  {
    title: "Marriage Predictions",
    subtitle: "Vivah Yog",
    icon: Heart,
    sections: [
      { label: "Marriage Timing", value: "••••-••••", blur: true },
      { label: "Partner Traits", value: "••••••••••••", blur: true },
      { label: "Mangal Dosha", value: "Mild Dosha Present", blur: false },
      { label: "Compatibility", value: "••••••••", blur: true },
      { label: "Remedies", value: "••••••••••••••", blur: true },
    ],
  },
  {
    title: "Career Forecast",
    subtitle: "Vyapar & Naukri",
    icon: Briefcase,
    sections: [
      { label: "Best Fields", value: "••••••••••••", blur: true },
      { label: "Success Period", value: "••••-••••", blur: true },
      { label: "Business Yog", value: "••••••••", blur: true },
      { label: "Wealth Potential", value: "••••••••••", blur: true },
      { label: "Career Changes", value: "••••••••••••", blur: true },
    ],
  },
  {
    title: "Yearly Predictions",
    subtitle: "Varshphal 2025",
    icon: Calendar,
    sections: [
      { label: "Jan-Mar", value: "••••••••••••", blur: true },
      { label: "Apr-Jun", value: "••••••••••", blur: true },
      { label: "Jul-Sep", value: "••••••••••••", blur: true },
      { label: "Oct-Dec", value: "••••••••••", blur: true },
      { label: "Lucky Months", value: "••••••••", blur: true },
    ],
  },
];

const ReportPreviewModal = ({ isOpen, onClose, reportType = "Premium" }: ReportPreviewModalProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipDirection, setFlipDirection] = useState<"left" | "right">("right");

  const nextPage = () => {
    if (currentPage < reportPages.length - 1) {
      setFlipDirection("right");
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setFlipDirection("left");
      setCurrentPage(currentPage - 1);
    }
  };

  const page = reportPages[currentPage];

  // Page flip animation variants
  const pageVariants = {
    enter: (direction: "left" | "right") => ({
      rotateY: direction === "right" ? 90 : -90,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: "left" | "right") => ({
      rotateY: direction === "right" ? -90 : 90,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-hidden"
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-2 right-2 z-20 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Report preview card */}
            <div 
              className="relative bg-gradient-to-br from-card to-muted rounded-3xl border border-border/50 shadow-2xl overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/20 to-accent/10 p-6 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Sample {reportType} Report</h3>
                    <p className="text-sm text-muted-foreground">Preview • Page {currentPage + 1} of {reportPages.length}</p>
                  </div>
                </div>
              </div>

              {/* Page content with flip animation */}
              <div className="relative min-h-[400px] p-6" style={{ transformStyle: "preserve-3d" }}>
                <AnimatePresence mode="wait" custom={flipDirection}>
                  <motion.div
                    key={currentPage}
                    custom={flipDirection}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="space-y-6"
                    style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                  >
                    {/* Page header */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20">
                        <page.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-semibold">{page.title}</h4>
                        <p className="text-sm text-muted-foreground">{page.subtitle}</p>
                      </div>
                    </div>

                    {/* Page sections */}
                    <div className="space-y-3">
                      {page.sections.map((section, i) => (
                        <motion.div
                          key={section.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/30"
                        >
                          <span className="text-sm font-medium text-muted-foreground">{section.label}</span>
                          <div className="flex items-center gap-2">
                            {section.blur ? (
                              <>
                                <span className="text-sm font-medium text-muted-foreground/50 blur-sm select-none">
                                  {section.value}
                                </span>
                                <Lock className="w-3.5 h-3.5 text-muted-foreground/50" />
                              </>
                            ) : (
                              <span className="text-sm font-semibold text-foreground">{section.value}</span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Unlock message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary/10 border border-primary/20"
                    >
                      <Lock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-medium">
                        Get full report to unlock all predictions
                      </span>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between p-4 border-t border-border/30 bg-muted/20">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                {/* Page dots */}
                <div className="flex items-center gap-1.5">
                  {reportPages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setFlipDirection(i > currentPage ? "right" : "left");
                        setCurrentPage(i);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentPage 
                          ? "w-6 bg-primary" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextPage}
                  disabled={currentPage === reportPages.length - 1}
                  className="gap-1"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* CTA Footer */}
              <div className="p-5 bg-gradient-to-r from-primary/10 to-accent/5 border-t border-primary/20">
                <Button
                  variant="whatsapp"
                  className="w-full h-14 rounded-xl text-base"
                  asChild
                >
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.premiumReport)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Full Report on WhatsApp
                  </a>
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Instant delivery • 50+ pages • Detailed analysis
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReportPreviewModal;
