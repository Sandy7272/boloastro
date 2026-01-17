import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Lock, Star, ChevronLeft, ChevronRight, Loader2, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useKundaliPDF } from "@/hooks/useKundaliPDF";
import { useToast } from "@/hooks/use-toast";

interface SamplePDFModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sample preview pages data
const previewPages = [
  {
    id: 1,
    title: "Cover Page",
    titleHindi: "कवर पेज",
    isBlurred: false,
    content: (
      <div className="text-center space-y-4">
        <div className="text-2xl font-bold text-amber-600">ॐ BoloAstro</div>
        <div className="text-xs text-muted-foreground uppercase tracking-widest">Vedic Astrology</div>
        <div className="h-px w-32 bg-amber-500 mx-auto" />
        <div className="text-xl font-serif text-amber-700">Premium Janam Kundali</div>
        <div className="text-sm text-amber-600">प्रीमियम जन्म कुंडली रिपोर्ट</div>
        <div className="mt-6 text-lg font-medium">राम कुमार शर्मा</div>
        <div className="bg-amber-50 rounded-lg p-4 space-y-2 text-sm">
          <p><span className="text-muted-foreground">DOB:</span> 15 अगस्त 1990</p>
          <p><span className="text-muted-foreground">Time:</span> 10:30 प्रातः</p>
          <p><span className="text-muted-foreground">Place:</span> जयपुर, राजस्थान</p>
        </div>
        <div className="text-amber-600 italic text-sm mt-4">
          ॥ कर्मण्येवाधिकारस्ते ॥
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Lagna Chart",
    titleHindi: "लग्न कुंडली",
    isBlurred: false,
    content: (
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-lg font-bold text-amber-700">North Indian Style Chart</div>
        </div>
        {/* Simplified chart representation */}
        <div className="relative w-48 h-48 mx-auto border-2 border-amber-500 bg-amber-50">
          <div className="absolute inset-0">
            <div className="absolute w-24 h-24 border border-amber-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-amber-700">Su Me Ke</div>
            <div className="absolute top-1/2 right-2 -translate-y-1/2 text-xs text-amber-700">Ra</div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-amber-700">Mo</div>
            <div className="absolute top-1/2 left-2 -translate-y-1/2 text-xs text-amber-700">Sa</div>
            <div className="absolute top-1/4 right-1/4 text-xs text-red-600">Ma(R)</div>
            <div className="absolute bottom-1/4 left-1/4 text-xs text-amber-700">Ju</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          {['Su-Sun', 'Mo-Moon', 'Ma-Mars', 'Me-Mercury', 'Ju-Jupiter'].map((p) => (
            <span key={p} className="px-2 py-1 bg-amber-100 rounded">{p}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Career Prediction",
    titleHindi: "करियर भविष्यवाणी",
    isBlurred: true,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Best Fields', value: 'Admin, Finance...' },
            { label: 'Govt Job Yoga', value: '80% favorable' },
            { label: 'Promotion', value: '2025-2026' },
            { label: 'Abroad', value: 'After age 35' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div className="text-sm font-medium text-amber-700">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          Your 10th house lord is well-placed, indicating success in career...
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Gemstone & Remedies",
    titleHindi: "रत्न और उपाय",
    isBlurred: true,
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
            <span className="text-2xl">💎</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-amber-700">Ruby (Manik)</div>
          <div className="text-amber-600">माणिक</div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { label: 'Day', value: 'Sunday' },
            { label: 'Finger', value: 'Ring finger' },
            { label: 'Metal', value: 'Gold' },
            { label: 'Weight', value: '5-7 Carats' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-50 rounded p-2 text-center">
              <div className="text-muted-foreground">{item.label}</div>
              <div className="font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const SamplePDFModal: React.FC<SamplePDFModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { toast } = useToast();
  
  // PDF download hook - uses real data from session if available, else sample data
  const { downloadPDF, isGenerating, hasRealData } = useKundaliPDF({
    onSuccess: () => {
      toast({
        title: "PDF Downloaded! 🎉",
        description: "Your Kundali report has been saved.",
      });
    },
    onError: (error) => {
      toast({
        title: "Download Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, previewPages.length - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const page = previewPages[currentPage];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-600" />
            Sample Premium Report
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-4 space-y-4">
          {/* Page Preview */}
          <div className="relative bg-gradient-to-b from-amber-50 to-orange-50 rounded-lg border-2 border-amber-200 overflow-hidden">
            {/* Page Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-amber-200 bg-amber-100/50">
              <span className="text-xs text-amber-700">ॐ BoloAstro</span>
              <span className="text-xs text-amber-600">{page.title}</span>
              <span className="text-xs text-muted-foreground">Page {page.id}/20</span>
            </div>
            
            {/* Page Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={page.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 min-h-[350px] relative"
              >
                <div className="text-center mb-4">
                  <h3 className="font-serif text-lg text-amber-700 border-b-2 border-amber-400 pb-2 inline-block">
                    ॐ {page.title}
                  </h3>
                  {page.titleHindi && (
                    <p className="text-sm text-amber-600 mt-1">{page.titleHindi}</p>
                  )}
                </div>
                
                <div className={page.isBlurred ? 'filter blur-sm select-none pointer-events-none' : ''}>
                  {page.content}
                </div>
                
                {/* Blur overlay for premium content */}
                {page.isBlurred && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-white/60 to-white/80">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-3">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-amber-700">Premium Content</p>
                      <p className="text-sm text-muted-foreground">Get full report to unlock</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            
            {/* Page Footer */}
            <div className="px-4 py-2 border-t border-amber-200 bg-amber-100/50 text-center">
              <span className="text-xs text-muted-foreground">© 2025 BoloAstro | www.boloastro.com</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex gap-1">
              {previewPages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentPage ? 'bg-amber-500' : 'bg-amber-200'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === previewPages.length - 1}
              className="gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-4 text-white">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5" />
              </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Get Your Complete Report</h4>
                  <p className="text-sm text-white/80 mb-3">
                    20 pages • Personalized predictions • Remedies • Muhurat dates
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {/* Download PDF Button */}
                    <Button 
                      size="sm" 
                      className="bg-white text-amber-600 hover:bg-white/90 gap-1"
                      onClick={() => downloadPDF()}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                      {isGenerating 
                        ? "Generating..." 
                        : hasRealData() 
                          ? "Download Your Report" 
                          : "Download Sample PDF"
                      }
                    </Button>
                    
                    {/* WhatsApp Button */}
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                      asChild
                    >
                      <a 
                        href="https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20the%20Premium%20Kundali%20Report" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        WhatsApp - ₹199
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SamplePDFModal;
