import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Lock, Star, ChevronLeft, ChevronRight, Loader2, Download, List, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useKundaliPDF } from "@/hooks/useKundaliPDF";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

interface SamplePDFModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sample preview pages data - All 20 pages of the report
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
      </div>
    ),
  },
  {
    id: 2,
    title: "Introduction",
    titleHindi: "परिचय",
    isBlurred: false,
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground leading-relaxed">
          Welcome to your personalized Vedic Kundali Report. This comprehensive analysis is based on ancient Jyotish Shastra...
        </p>
        <div className="bg-amber-50 rounded-lg p-3">
          <div className="text-xs text-amber-700 font-medium mb-2">What's Inside:</div>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>• Lagna & Navamsa Charts</li>
            <li>• Planetary Positions & Dashas</li>
            <li>• Life Predictions (Career, Marriage, Health)</li>
            <li>• Doshas & Remedies</li>
            <li>• Gemstone Recommendations</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Birth Details",
    titleHindi: "जन्म विवरण",
    isBlurred: false,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            { label: 'Name', value: 'राम कुमार शर्मा' },
            { label: 'Date', value: '15 Aug 1990' },
            { label: 'Time', value: '10:30 AM' },
            { label: 'Place', value: 'Jaipur' },
            { label: 'Nakshatra', value: 'Rohini' },
            { label: 'Rashi', value: 'वृषभ (Taurus)' },
            { label: 'Lagna', value: 'तुला (Libra)' },
            { label: 'Tithi', value: 'Krishna Panchami' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-50 rounded p-2">
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div className="font-medium text-amber-700">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Lagna Chart",
    titleHindi: "लग्न कुंडली",
    isBlurred: false,
    content: (
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-sm font-medium text-amber-700">North Indian Style</div>
        </div>
        <div className="relative w-40 h-40 mx-auto border-2 border-amber-500 bg-amber-50">
          <div className="absolute inset-0">
            <div className="absolute w-20 h-20 border border-amber-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-amber-700">Su Me</div>
            <div className="absolute top-1/2 right-2 -translate-y-1/2 text-xs text-amber-700">Ra</div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-amber-700">Mo</div>
            <div className="absolute top-1/2 left-2 -translate-y-1/2 text-xs text-amber-700">Sa</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Planetary Positions",
    titleHindi: "ग्रह स्थिति",
    isBlurred: false,
    content: (
      <div className="space-y-2">
        <div className="text-xs grid grid-cols-4 gap-1 font-medium text-amber-700 border-b pb-1">
          <span>Planet</span>
          <span>Sign</span>
          <span>House</span>
          <span>Degree</span>
        </div>
        {[
          { planet: 'Sun ☉', sign: 'Leo', house: '11', degree: '22°15' },
          { planet: 'Moon ☽', sign: 'Taurus', house: '8', degree: '8°30' },
          { planet: 'Mars ♂', sign: 'Aries', house: '7', degree: '15°45' },
          { planet: 'Mercury ☿', sign: 'Virgo', house: '12', degree: '3°20' },
        ].map((p, i) => (
          <div key={i} className="text-xs grid grid-cols-4 gap-1 py-1 border-b border-amber-100">
            <span className="font-medium">{p.planet}</span>
            <span>{p.sign}</span>
            <span>{p.house}</span>
            <span>{p.degree}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 6,
    title: "Personality",
    titleHindi: "व्यक्तित्व",
    isBlurred: true,
    content: (
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Your Libra Lagna makes you diplomatic, charming, and relationship-oriented...
        </p>
        <div className="grid grid-cols-2 gap-2">
          {['Strengths', 'Weaknesses'].map((label) => (
            <div key={label} className="bg-amber-50 rounded p-2">
              <div className="text-xs font-medium text-amber-700 mb-1">{label}</div>
              <div className="text-xs text-muted-foreground">• Detail 1<br/>• Detail 2</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Career Prediction",
    titleHindi: "करियर भविष्यवाणी",
    isBlurred: true,
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Best Fields', value: 'Admin, Finance' },
            { label: 'Govt Job', value: '80% favorable' },
            { label: 'Promotion', value: '2025-2026' },
            { label: 'Abroad', value: 'After 35' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-50 rounded-lg p-2">
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div className="text-sm font-medium text-amber-700">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Wealth & Finance",
    titleHindi: "धन और वित्त",
    isBlurred: true,
    content: (
      <div className="space-y-3">
        <div className="text-center">
          <div className="text-2xl">💰</div>
          <div className="text-sm font-medium text-amber-700">Dhana Yoga Present</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-3 text-sm text-muted-foreground">
          Strong wealth indicators in your chart suggest financial stability through career...
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Marriage & Love",
    titleHindi: "विवाह और प्रेम",
    isBlurred: true,
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Marriage Age', value: '27-30 years' },
            { label: 'Partner Type', value: 'Educated, caring' },
            { label: 'Compatibility', value: 'High' },
            { label: 'Married Life', value: 'Harmonious' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-50 rounded p-2 text-center">
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div className="text-sm font-medium text-amber-700">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Health",
    titleHindi: "स्वास्थ्य",
    isBlurred: true,
    content: (
      <div className="space-y-3">
        <div className="text-center text-2xl">🏥</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-green-50 rounded p-2 text-center">
            <div className="text-green-700 font-medium">Strong Areas</div>
            <div>Digestion, Heart</div>
          </div>
          <div className="bg-red-50 rounded p-2 text-center">
            <div className="text-red-700 font-medium">Watch Out</div>
            <div>Eyes, Skin</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "Children",
    titleHindi: "संतान",
    isBlurred: true,
    content: (
      <div className="space-y-3 text-center">
        <div className="text-2xl">👶</div>
        <div className="bg-amber-50 rounded-lg p-3">
          <div className="text-sm font-medium text-amber-700">Santan Yoga Analysis</div>
          <div className="text-xs text-muted-foreground mt-1">
            Your 5th house indicates blessings of progeny...
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    title: "Doshas",
    titleHindi: "दोष",
    isBlurred: true,
    content: (
      <div className="space-y-3">
        {[
          { name: 'Mangal Dosha', status: 'Mild', color: 'bg-yellow-100 text-yellow-700' },
          { name: 'Kaal Sarp', status: 'Not Present', color: 'bg-green-100 text-green-700' },
          { name: 'Shani Dosha', status: 'Moderate', color: 'bg-orange-100 text-orange-700' },
        ].map((dosha, i) => (
          <div key={i} className="flex items-center justify-between bg-amber-50 rounded p-2">
            <span className="text-sm font-medium">{dosha.name}</span>
            <span className={`text-xs px-2 py-1 rounded ${dosha.color}`}>{dosha.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 13,
    title: "Remedies",
    titleHindi: "उपाय",
    isBlurred: true,
    content: (
      <div className="space-y-2">
        {['🕉️ Mantras', '🪔 Pujas', '🍽️ Vrats', '🎁 Donations'].map((item, i) => (
          <div key={i} className="flex items-center gap-2 bg-amber-50 rounded p-2">
            <span className="text-lg">{item.split(' ')[0]}</span>
            <span className="text-sm font-medium text-amber-700">{item.split(' ')[1]}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 14,
    title: "Gemstone",
    titleHindi: "रत्न",
    isBlurred: true,
    content: (
      <div className="space-y-3 text-center">
        <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center mx-auto">
          <span className="text-2xl">💎</span>
        </div>
        <div className="text-lg font-bold text-amber-700">Ruby (Manik)</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { label: 'Day', value: 'Sunday' },
            { label: 'Finger', value: 'Ring' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-50 rounded p-2">
              <div className="text-muted-foreground">{item.label}</div>
              <div className="font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 15,
    title: "Lucky Factors",
    titleHindi: "शुभ तत्व",
    isBlurred: true,
    content: (
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Color', value: 'Red', icon: '🔴' },
          { label: 'Number', value: '1, 4', icon: '🔢' },
          { label: 'Day', value: 'Sunday', icon: '📅' },
          { label: 'Direction', value: 'East', icon: '🧭' },
        ].map((item, i) => (
          <div key={i} className="bg-amber-50 rounded-lg p-3 text-center">
            <div className="text-xl mb-1">{item.icon}</div>
            <div className="text-xs text-muted-foreground">{item.label}</div>
            <div className="text-sm font-medium text-amber-700">{item.value}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 16,
    title: "Yearly Prediction",
    titleHindi: "वार्षिक भविष्यवाणी",
    isBlurred: true,
    content: (
      <div className="space-y-2">
        <div className="text-sm font-medium text-amber-700 text-center">2025 Overview</div>
        {['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'].map((q, i) => (
          <div key={i} className="flex items-center justify-between bg-amber-50 rounded p-2 text-xs">
            <span className="font-medium">{q}</span>
            <div className="flex gap-2">
              <span className={i % 2 === 0 ? 'text-green-600' : 'text-amber-600'}>Career: {i % 2 === 0 ? '⬆' : '➡'}</span>
              <span className={i % 3 === 0 ? 'text-green-600' : 'text-amber-600'}>Money: {i % 3 === 0 ? '⬆' : '➡'}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 17,
    title: "Muhurat Dates",
    titleHindi: "शुभ मुहूर्त",
    isBlurred: true,
    content: (
      <div className="space-y-2">
        {[
          { purpose: 'Marriage', dates: 'Nov 2025, Feb 2026' },
          { purpose: 'Business', dates: 'Mar 2025, Aug 2025' },
          { purpose: 'Property', dates: 'Oct 2025' },
        ].map((item, i) => (
          <div key={i} className="bg-amber-50 rounded p-2">
            <div className="text-sm font-medium text-amber-700">{item.purpose}</div>
            <div className="text-xs text-muted-foreground">{item.dates}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 18,
    title: "Foreign Travel",
    titleHindi: "विदेश यात्रा",
    isBlurred: true,
    content: (
      <div className="space-y-3 text-center">
        <div className="text-2xl">✈️</div>
        <div className="bg-amber-50 rounded-lg p-3">
          <div className="text-sm font-medium text-amber-700">Travel Yoga Analysis</div>
          <div className="text-xs text-muted-foreground mt-1">
            Strong indications for foreign travel and overseas opportunities...
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 19,
    title: "Pandit's Message",
    titleHindi: "पंडित जी का संदेश",
    isBlurred: false,
    content: (
      <div className="space-y-3 text-center">
        <div className="text-4xl">🙏</div>
        <div className="text-sm italic text-muted-foreground">
          "May the divine light of the planets guide your path to success and happiness..."
        </div>
        <div className="text-sm font-medium text-amber-700">— Pt. Ramesh Shastri</div>
      </div>
    ),
  },
  {
    id: 20,
    title: "Contact Us",
    titleHindi: "संपर्क करें",
    isBlurred: false,
    content: (
      <div className="space-y-3 text-center">
        <div className="text-2xl font-bold text-amber-600">ॐ BoloAstro</div>
        <div className="space-y-2 text-sm">
          <p>📱 WhatsApp: +91 72619 69798</p>
          <p>🌐 www.boloastro.com</p>
          <p>📧 support@boloastro.com</p>
        </div>
        <div className="text-xs text-muted-foreground italic mt-4">
          ॥ शुभं भवतु ॥
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
          {/* Table of Contents Dropdown */}
          <div className="flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 text-amber-700 border-amber-200 hover:bg-amber-50">
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">Contents</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 max-h-[300px] overflow-y-auto">
                <DropdownMenuLabel className="text-amber-700">Jump to Section</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {previewPages.map((p, i) => (
                  <DropdownMenuItem
                    key={p.id}
                    onClick={() => setCurrentPage(i)}
                    className={`flex items-center justify-between cursor-pointer ${
                      i === currentPage ? 'bg-amber-50 text-amber-700' : ''
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground w-5">{p.id}.</span>
                      <span>{p.title}</span>
                    </span>
                    {p.isBlurred && <Lock className="w-3 h-3 text-muted-foreground" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <span className="text-sm font-medium text-amber-700">
              Page {page.id} of 20
            </span>
          </div>
          
          {/* Page Preview */}
          <div className="relative bg-gradient-to-b from-amber-50 to-orange-50 rounded-lg border-2 border-amber-200 overflow-hidden">
            {/* Page Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-amber-200 bg-amber-100/50">
              <span className="text-xs text-amber-700">ॐ BoloAstro</span>
              <span className="text-xs text-amber-600">{page.title}</span>
              <span className="text-xs text-muted-foreground">{page.titleHindi}</span>
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
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="gap-1 flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </Button>
            
            <div className="flex items-center gap-2 flex-1 justify-center min-w-0">
              {/* Page indicator for mobile */}
              <span className="text-sm text-muted-foreground font-medium">
                {currentPage + 1} / {previewPages.length}
              </span>
              
              {/* Quick jump dots - show subset on mobile */}
              <div className="hidden sm:flex gap-0.5 flex-wrap justify-center max-w-[200px]">
                {previewPages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === currentPage ? 'bg-amber-500' : 'bg-amber-200 hover:bg-amber-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === previewPages.length - 1}
              className="gap-1 flex-shrink-0"
            >
              <span className="hidden sm:inline">Next</span>
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
