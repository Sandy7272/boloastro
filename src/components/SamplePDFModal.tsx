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
// FREE pages (1-5, 19-20): Rich, detailed content showing depth of analysis
// LOCKED pages (6-18): Placeholder teaser content - NO specific values shown

const previewPages = [
  // ============ FREE PAGE 1: COVER ============
  {
    id: 1,
    title: "Cover Page",
    titleHindi: "कवर पेज",
    isBlurred: false,
    content: (
      <div className="text-center space-y-4">
        <div className="text-2xl font-bold text-amber-600">ॐ BoloAstro</div>
        <div className="text-xs text-muted-foreground uppercase tracking-widest">Vedic Astrology Since 1995</div>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
        <div className="text-xl font-serif text-amber-700">Premium Janam Kundali</div>
        <div className="text-sm text-amber-600">प्रीमियम जन्म कुंडली रिपोर्ट</div>
        <div className="mt-6 text-lg font-medium">राम कुमार शर्मा</div>
        <div className="bg-amber-50 rounded-lg p-4 space-y-2 text-sm border border-amber-200">
          <p><span className="text-muted-foreground">जन्म तिथि:</span> 15 अगस्त 1990</p>
          <p><span className="text-muted-foreground">जन्म समय:</span> 10:30 प्रातः</p>
          <p><span className="text-muted-foreground">जन्म स्थान:</span> जयपुर, राजस्थान</p>
        </div>
        <div className="text-xs text-muted-foreground mt-4 italic">
          Based on Brihat Parashara Hora Shastra
        </div>
      </div>
    ),
  },

  // ============ FREE PAGE 2: INTRODUCTION (RICH) ============
  {
    id: 2,
    title: "Introduction",
    titleHindi: "परिचय",
    isBlurred: false,
    content: (
      <div className="space-y-3 text-sm">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3 border-l-4 border-amber-500">
          <p className="text-amber-800 italic">
            "Dear Ram Kumar, your Kundali reveals a unique cosmic blueprint that has guided millions of seekers for over 5000 years..."
          </p>
          <p className="text-xs text-amber-600 mt-1 text-right">— Pt. Ramesh Shastri</p>
        </div>
        
        <div className="space-y-2">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Our Methodology</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            This report uses the authentic <strong>Parashari System</strong> combined with <strong>Jaimini Principles</strong> — 
            the most authoritative methods described in ancient Jyotish texts.
          </p>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
          <div className="text-xs text-amber-700 font-medium mb-2">Calculations Performed:</div>
          <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
            <span>✓ Vimshottari Dasha</span>
            <span>✓ Ashtakavarga Points</span>
            <span>✓ D-9 Navamsa Analysis</span>
            <span>✓ Yogini Dasha</span>
            <span>✓ 16 Divisional Charts</span>
            <span>✓ Shadbala Strength</span>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground">
          <strong>Why Vedic Astrology Works:</strong> Unlike Western astrology, Vedic Jyotish uses the 
          <strong> sidereal zodiac</strong> and <strong>Nakshatra system</strong>, providing precise timing 
          of events through Dasha periods that Western methods cannot predict.
        </div>
      </div>
    ),
  },

  // ============ FREE PAGE 3: BIRTH DETAILS (RICH) ============
  {
    id: 3,
    title: "Birth Details",
    titleHindi: "जन्म विवरण",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { label: 'Name', value: 'राम कुमार शर्मा', sub: '' },
            { label: 'Date', value: '15 Aug 1990', sub: 'Wednesday' },
            { label: 'Time', value: '10:30:00 AM', sub: 'IST (+5:30)' },
            { label: 'Place', value: 'Jaipur, Rajasthan', sub: '26.9°N, 75.7°E' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-50 rounded p-2 border border-amber-100">
              <div className="text-muted-foreground">{item.label}</div>
              <div className="font-medium text-amber-700">{item.value}</div>
              {item.sub && <div className="text-muted-foreground text-[10px]">{item.sub}</div>}
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3 border border-amber-200">
          <div className="text-xs font-semibold text-amber-700 mb-2">Astrological Significance:</div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Nakshatra:</span>
              <span className="font-medium text-amber-800">Rohini (रोहिणी)</span>
            </div>
            <p className="text-muted-foreground text-[11px] pl-2 border-l-2 border-amber-300">
              Ruled by Moon • Creative abilities • Love for luxury & beauty • Artistic temperament • 
              Strong maternal bond • Success in agriculture, arts & hospitality
            </p>
            
            <div className="flex justify-between mt-2">
              <span className="text-muted-foreground">Moon Sign (Rashi):</span>
              <span className="font-medium text-amber-800">वृषभ (Taurus)</span>
            </div>
            <p className="text-muted-foreground text-[11px] pl-2 border-l-2 border-amber-300">
              Moon EXALTED • Exceptional emotional stability • Strong attachment to material comforts • 
              Possessive nature • Excellent memory • Love for food & music
            </p>
            
            <div className="flex justify-between mt-2">
              <span className="text-muted-foreground">Ascendant (Lagna):</span>
              <span className="font-medium text-amber-800">तुला (Libra)</span>
            </div>
            <p className="text-muted-foreground text-[11px] pl-2 border-l-2 border-amber-300">
              Venus-ruled • Diplomatic & charming personality • Strong focus on relationships • 
              Artistic inclination • Justice-loving nature • Partnership-oriented life
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-1 text-xs text-center">
          <div className="bg-amber-50 rounded p-1">
            <div className="text-muted-foreground">Tithi</div>
            <div className="font-medium text-amber-700">Krishna Panchami</div>
          </div>
          <div className="bg-amber-50 rounded p-1">
            <div className="text-muted-foreground">Karana</div>
            <div className="font-medium text-amber-700">Bava</div>
          </div>
          <div className="bg-amber-50 rounded p-1">
            <div className="text-muted-foreground">Yoga</div>
            <div className="font-medium text-amber-700">Shubh</div>
          </div>
        </div>
      </div>
    ),
  },

  // ============ FREE PAGE 4: LAGNA CHART (RICH) ============
  {
    id: 4,
    title: "Lagna Chart",
    titleHindi: "लग्न कुंडली",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-center">
          <div className="text-xs font-medium text-amber-700">North Indian Style • Libra Ascendant</div>
        </div>
        <div className="relative w-36 h-36 mx-auto border-2 border-amber-500 bg-amber-50">
          <div className="absolute inset-0">
            <div className="absolute w-[72px] h-[72px] border border-amber-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] text-amber-700 font-medium">Su Me</div>
            <div className="absolute top-1/2 right-1 -translate-y-1/2 text-[10px] text-amber-700 font-medium">Ra</div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-amber-700 font-medium">Mo</div>
            <div className="absolute top-1/2 left-1 -translate-y-1/2 text-[10px] text-amber-700 font-medium">Sa Ke</div>
            <div className="absolute top-4 right-4 text-[10px] text-amber-600">Ju</div>
            <div className="absolute bottom-4 left-4 text-[10px] text-amber-600">Ve Ma</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-2 border border-amber-200">
          <div className="text-xs font-semibold text-amber-700 mb-1">What This Chart Reveals:</div>
          <div className="text-[11px] text-muted-foreground space-y-1">
            <p><strong>1st House (Self):</strong> Venus-ruled Libra gives charm, diplomacy, and relationship focus.</p>
            <p><strong>7th House (Marriage):</strong> Mars in Aries indicates passionate, dynamic partnerships.</p>
            <p><strong>10th House (Career):</strong> Cancer sign shows nurturing professions, real estate, hospitality.</p>
            <p><strong>Lagna Lord Venus:</strong> Placed in 6th house - success over competition through service.</p>
          </div>
        </div>
        
        <div className="text-center text-[10px] text-muted-foreground italic">
          Professional analysis reveals 3 Rajayogas and 2 Dhana Yogas in this chart
        </div>
      </div>
    ),
  },

  // ============ FREE PAGE 5: PLANETARY POSITIONS (RICH) ============
  {
    id: 5,
    title: "Planetary Positions",
    titleHindi: "ग्रह स्थिति",
    isBlurred: false,
    content: (
      <div className="space-y-2">
        <div className="text-[10px] grid grid-cols-5 gap-1 font-medium text-amber-700 border-b pb-1">
          <span>Planet</span>
          <span>Sign</span>
          <span>House</span>
          <span>Degree</span>
          <span>Status</span>
        </div>
        {[
          { planet: 'Sun ☉', sign: 'Leo', house: '11', degree: '22°15\'', status: 'Own Sign', statusColor: 'text-green-600' },
          { planet: 'Moon ☽', sign: 'Taurus', house: '8', degree: '8°30\'', status: 'EXALTED', statusColor: 'text-green-700 font-bold' },
          { planet: 'Mars ♂', sign: 'Aries', house: '7', degree: '15°45\'', status: 'Own Sign', statusColor: 'text-green-600' },
          { planet: 'Mercury ☿', sign: 'Virgo', house: '12', degree: '3°20\'', status: 'EXALTED', statusColor: 'text-green-700 font-bold' },
          { planet: 'Jupiter ♃', sign: 'Gemini', house: '9', degree: '18°10\'', status: 'Friendly', statusColor: 'text-blue-600' },
          { planet: 'Venus ♀', sign: 'Pisces', house: '6', degree: '25°40\'', status: 'EXALTED', statusColor: 'text-green-700 font-bold' },
          { planet: 'Saturn ♄', sign: 'Capricorn', house: '4', degree: '12°55\'', status: 'Own Sign', statusColor: 'text-green-600' },
        ].map((p, i) => (
          <div key={i} className="text-[10px] grid grid-cols-5 gap-1 py-0.5 border-b border-amber-100">
            <span className="font-medium">{p.planet}</span>
            <span>{p.sign}</span>
            <span className="text-center">{p.house}</span>
            <span>{p.degree}</span>
            <span className={p.statusColor}>{p.status}</span>
          </div>
        ))}
        
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200 mt-2">
          <div className="text-[10px] font-semibold text-green-700 mb-1">🎯 Exceptional Planetary Strength:</div>
          <p className="text-[10px] text-muted-foreground">
            <strong>3 Exalted Planets</strong> (Moon, Mercury, Venus) + <strong>3 Own Sign</strong> (Sun, Mars, Saturn) 
            = Extremely powerful chart indicating success in multiple life areas. Such planetary dignity 
            is found in only 2% of charts.
          </p>
        </div>
        
        <div className="text-[10px] text-muted-foreground">
          <span className="font-medium">Retrograde:</span> None | 
          <span className="font-medium"> Combust:</span> None | 
          <span className="font-medium"> Rahu-Ketu Axis:</span> 2nd-8th Houses
        </div>
      </div>
    ),
  },

  // ============ PAGE 6: PERSONALITY ============
  {
    id: 6,
    title: "Personality",
    titleHindi: "व्यक्तित्व",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <p className="text-xs text-muted-foreground">
          Your Lagna Analysis reveals your core nature, hidden talents, and life purpose...
        </p>
        
        <div className="bg-gray-100 rounded-lg p-3 border-2 border-dashed border-gray-300">
          <div className="flex items-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">PREMIUM INSIGHT</span>
          </div>
          <p className="text-xs text-muted-foreground italic">
            Your core personality traits, hidden talents, and life purpose based on Lagna Lord analysis...
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-amber-50 rounded p-2 border border-amber-200">
            <div className="text-xs font-medium text-amber-700 mb-1">Strengths</div>
            <div className="text-xs text-muted-foreground">
              <span className="bg-gray-200 rounded px-1">[Unlock to reveal 5 key strengths]</span>
            </div>
          </div>
          <div className="bg-amber-50 rounded p-2 border border-amber-200">
            <div className="text-xs font-medium text-amber-700 mb-1">Weaknesses</div>
            <div className="text-xs text-muted-foreground">
              <span className="bg-gray-200 rounded px-1">[Areas for improvement]</span>
            </div>
          </div>
        </div>
        
        <p className="text-[10px] text-muted-foreground italic">
          Understanding your inherent nature helps you make better career choices and find compatible partners.
        </p>
      </div>
    ),
  },

  // ============ PAGE 7: CAREER ============
  {
    id: 7,
    title: "Career Prediction",
    titleHindi: "करियर भविष्यवाणी",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground mb-2">
          <strong>10th House & Career Yoga Analysis</strong>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-2 text-xs space-y-1">
          <div className="font-medium text-gray-600">Your chart analyzed for:</div>
          <div className="text-muted-foreground grid grid-cols-2 gap-x-2">
            <span>✓ 10th Lord placement</span>
            <span>✓ Career Yogas</span>
            <span>✓ Govt job chances</span>
            <span>✓ Business suitability</span>
            <span>✓ Abroad work opportunities</span>
            <span>✓ Dasha-based timing</span>
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border-2 border-dashed border-amber-300">
          <div className="flex items-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">YOUR PREDICTIONS</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="text-muted-foreground">Best Fields:</span> <span className="bg-gray-200 rounded px-1">[Premium]</span></div>
            <div><span className="text-muted-foreground">Govt Job:</span> <span className="bg-gray-200 rounded px-1">[??%]</span></div>
            <div><span className="text-muted-foreground">Promotion:</span> <span className="bg-gray-200 rounded px-1">[20XX]</span></div>
            <div><span className="text-muted-foreground">Best Period:</span> <span className="bg-gray-200 rounded px-1">[Premium]</span></div>
          </div>
        </div>
        
        <p className="text-[10px] text-muted-foreground italic">
          The 10th house lord's placement and Dashas determine career success patterns that modern tests cannot predict.
        </p>
      </div>
    ),
  },

  // ============ PAGE 8: WEALTH ============
  {
    id: 8,
    title: "Wealth & Finance",
    titleHindi: "धन और वित्त",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground mb-2">
          <strong>Dhana Yoga & 2nd/11th House Analysis</strong>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-2 text-xs space-y-1">
          <div className="font-medium text-gray-600">We analyze:</div>
          <div className="text-muted-foreground grid grid-cols-2 gap-x-2">
            <span>✓ Dhan Yoga presence</span>
            <span>✓ 2nd house (savings)</span>
            <span>✓ 11th house (income)</span>
            <span>✓ Property Yoga</span>
            <span>✓ Lottery/Speculation luck</span>
            <span>✓ Investment periods</span>
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border-2 border-dashed border-amber-300">
          <div className="flex items-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">YOUR WEALTH MAP</span>
          </div>
          <div className="space-y-1 text-xs">
            <div><span className="text-muted-foreground">Dhana Yoga:</span> <span className="bg-gray-200 rounded px-1">[Status Hidden]</span></div>
            <div><span className="text-muted-foreground">Property Purchase:</span> <span className="bg-gray-200 rounded px-1">[Best years hidden]</span></div>
            <div><span className="text-muted-foreground">Investment Timing:</span> <span className="bg-gray-200 rounded px-1">[Premium]</span></div>
            <div><span className="text-muted-foreground">Wealth Cautions:</span> <span className="bg-gray-200 rounded px-1">[Premium]</span></div>
          </div>
        </div>
        
        <p className="text-[10px] text-muted-foreground italic">
          Jupiter aspecting the 2nd house creates Dhan Yoga, while Venus placement indicates luxury gains.
        </p>
      </div>
    ),
  },

  // ============ PAGE 9: MARRIAGE ============
  {
    id: 9,
    title: "Marriage & Love",
    titleHindi: "विवाह और प्रेम",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground mb-2">
          <strong>7th House & Vivah Yoga Analysis</strong>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-2 text-xs space-y-1">
          <div className="font-medium text-gray-600">Complete marriage analysis includes:</div>
          <div className="text-muted-foreground">
            • Ideal marriage age based on Dasha • Partner characteristics • Love vs Arranged prediction 
            • Marital happiness % • Mangal Dosha impact • Second marriage yoga
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border-2 border-dashed border-amber-300">
          <div className="flex items-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">YOUR MARRIAGE PREDICTIONS</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="text-muted-foreground">Best Age:</span> <span className="bg-gray-200 rounded px-1">[XX-XX years]</span></div>
            <div><span className="text-muted-foreground">Partner Type:</span> <span className="bg-gray-200 rounded px-1">[Premium]</span></div>
            <div><span className="text-muted-foreground">Happiness:</span> <span className="bg-gray-200 rounded px-1">[??%]</span></div>
            <div><span className="text-muted-foreground">Type:</span> <span className="bg-gray-200 rounded px-1">[Love/Arranged]</span></div>
          </div>
        </div>
        
        <p className="text-[10px] text-muted-foreground italic">
          We analyze Venus, 7th lord, Navamsa (D-9), and Upapada Lagna together for accurate predictions.
        </p>
      </div>
    ),
  },

  // ============ PAGE 10: HEALTH ============
  {
    id: 10,
    title: "Health",
    titleHindi: "स्वास्थ्य",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground mb-2">
          <strong>6th House & Ayurveda Constitution</strong>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-2 text-xs space-y-1">
          <div className="font-medium text-gray-600">Health analysis covers:</div>
          <div className="text-muted-foreground">
            • Ayurvedic body type (Vata/Pitta/Kapha) • Strong organs • Vulnerable areas 
            • Disease-prone periods • Accident timing • Mental health • Longevity analysis
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border-2 border-dashed border-amber-300">
          <div className="flex items-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">YOUR HEALTH MAP</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-100 rounded p-1 text-center">
              <div className="text-muted-foreground">Strong Areas</div>
              <div className="bg-gray-200 rounded px-1">[Premium]</div>
            </div>
            <div className="bg-gray-100 rounded p-1 text-center">
              <div className="text-muted-foreground">Weak Areas</div>
              <div className="bg-gray-200 rounded px-1">[Premium]</div>
            </div>
          </div>
          <div className="text-xs mt-2">
            <span className="text-muted-foreground">Caution Periods:</span> <span className="bg-gray-200 rounded px-1">[20XX-20XX]</span>
          </div>
        </div>
      </div>
    ),
  },

  // ============ PAGE 11: CHILDREN ============
  {
    id: 11,
    title: "Children",
    titleHindi: "संतान",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground mb-2">
          <strong>5th House & Santan Yoga Analysis</strong>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-2 text-xs space-y-1">
          <div className="font-medium text-gray-600">Children prediction includes:</div>
          <div className="text-muted-foreground">
            • Number of children • Gender of first child • Timing of childbirth 
            • Children's success • Parent-child relationship • Adoption possibilities
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border-2 border-dashed border-amber-300 text-center">
          <div className="flex items-center justify-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">SANTAN YOGA RESULTS</span>
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="bg-gray-200 rounded px-2 py-1">[All details in premium report]</span>
          </div>
        </div>
        
        <p className="text-[10px] text-muted-foreground italic">
          5th house lord placement and Jupiter's aspect determine timing and blessings of progeny.
        </p>
      </div>
    ),
  },

  // ============ PAGE 12: DOSHAS ============
  {
    id: 12,
    title: "Doshas",
    titleHindi: "दोष",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground mb-2">
          <strong>Mangal, Kaal Sarp & Other Dosha Analysis</strong>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-2 text-xs">
          <div className="font-medium text-gray-600 mb-1">We check for:</div>
          <div className="text-muted-foreground grid grid-cols-2 gap-x-2">
            <span>• Mangal Dosha (Mars)</span>
            <span>• Kaal Sarp Dosha</span>
            <span>• Shani Dosha (Saturn)</span>
            <span>• Pitra Dosha</span>
            <span>• Nadi Dosha</span>
            <span>• + Remedies for each</span>
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border-2 border-dashed border-amber-300">
          <div className="flex items-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">YOUR DOSHA STATUS</span>
          </div>
          <div className="space-y-1 text-xs">
            {['Mangal Dosha', 'Kaal Sarp', 'Shani Dosha', 'Pitra Dosha'].map((dosha) => (
              <div key={dosha} className="flex justify-between">
                <span className="text-muted-foreground">{dosha}:</span>
                <span className="bg-gray-200 rounded px-2">[???]</span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-[10px] text-muted-foreground italic">
          Doshas don't mean bad luck — they indicate specific challenges. Knowing them helps timely remedies.
        </p>
      </div>
    ),
  },

  // ============ PAGE 13: REMEDIES ============
  {
    id: 13,
    title: "Remedies",
    titleHindi: "उपाय",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground mb-2">
          <strong>Personalized Vedic Remedies</strong>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-2 text-xs">
          <div className="font-medium text-gray-600 mb-1">Remedy categories:</div>
          <div className="grid grid-cols-2 gap-1 text-muted-foreground">
            <span>🕉️ Mantras for each planet</span>
            <span>🪔 Specific Pujas</span>
            <span>🍽️ Recommended Vrats</span>
            <span>🎁 Donation items & days</span>
            <span>💎 Gemstone prescriptions</span>
            <span>🌿 Ayurvedic suggestions</span>
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border-2 border-dashed border-amber-300 text-center">
          <div className="flex items-center justify-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">YOUR PERSONALIZED REMEDIES</span>
          </div>
          <p className="text-xs text-muted-foreground italic">
            "Specific mantras, pujas, and donations tailored to strengthen your weak planets await..."
          </p>
        </div>
        
        <p className="text-[10px] text-muted-foreground italic">
          Generic remedies don't work — only chart-specific prescriptions bring results.
        </p>
      </div>
    ),
  },

  // ============ PAGE 14: GEMSTONE ============
  {
    id: 14,
    title: "Gemstone",
    titleHindi: "रत्न",
    isBlurred: false,
    content: (
      <div className="space-y-3 text-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mx-auto border-2 border-dashed border-gray-400">
          <span className="text-2xl">💎</span>
        </div>
        <div className="text-sm font-medium text-amber-700">Your Primary Gemstone</div>
        <div className="bg-gray-200 rounded px-3 py-1 inline-block text-xs">[Unlock to reveal]</div>
        
        <div className="bg-amber-50 rounded-lg p-3 border-2 border-dashed border-amber-300">
          <div className="flex items-center justify-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">WEARING INSTRUCTIONS</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="text-muted-foreground">Day:</span> <span className="bg-gray-200 rounded px-1">[???]</span></div>
            <div><span className="text-muted-foreground">Finger:</span> <span className="bg-gray-200 rounded px-1">[???]</span></div>
            <div><span className="text-muted-foreground">Metal:</span> <span className="bg-gray-200 rounded px-1">[???]</span></div>
            <div><span className="text-muted-foreground">Weight:</span> <span className="bg-gray-200 rounded px-1">[???]</span></div>
          </div>
        </div>
        
        <p className="text-[10px] text-muted-foreground italic">
          Wrong gemstone can harm! Only your chart determines the right stone.
        </p>
      </div>
    ),
  },

  // ============ PAGE 15: LUCKY FACTORS ============
  {
    id: 15,
    title: "Lucky Factors",
    titleHindi: "शुभ तत्व",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground text-center mb-2">
          Your personalized lucky elements based on Lagna & Moon analysis
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Lucky Color', icon: '🎨' },
            { label: 'Lucky Number', icon: '🔢' },
            { label: 'Lucky Day', icon: '📅' },
            { label: 'Lucky Direction', icon: '🧭' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-50 rounded-lg p-2 text-center border border-amber-200">
              <div className="text-lg mb-1">{item.icon}</div>
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div className="text-xs font-medium"><span className="bg-gray-200 rounded px-2">[???]</span></div>
            </div>
          ))}
        </div>
        
        <div className="bg-amber-50 rounded-lg p-2 border-2 border-dashed border-amber-300 text-center">
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">Ruling Deity:</span> <span className="bg-gray-200 rounded px-1">[Premium]</span>
          </div>
        </div>
      </div>
    ),
  },

  // ============ PAGE 16: YEARLY PREDICTION ============
  {
    id: 16,
    title: "Yearly Prediction",
    titleHindi: "वार्षिक भविष्यवाणी",
    isBlurred: false,
    content: (
      <div className="space-y-2">
        <div className="text-xs font-medium text-amber-700 text-center">2025-2026 Overview</div>
        
        <div className="bg-gray-100 rounded-lg p-2 text-xs">
          <div className="font-medium text-gray-600 mb-1">Quarter-wise analysis for:</div>
          <div className="text-muted-foreground">
            Career growth • Financial flow • Health • Relationships • Travel • Opportunities
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-2 border-2 border-dashed border-amber-300">
          {['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'].map((q, i) => (
            <div key={i} className="flex items-center justify-between py-1 text-xs border-b border-amber-200 last:border-0">
              <span className="font-medium text-amber-700">{q}</span>
              <div className="flex gap-2">
                <span className="bg-gray-200 rounded px-1">Career: <Lock className="w-3 h-3 inline" /></span>
                <span className="bg-gray-200 rounded px-1">Money: <Lock className="w-3 h-3 inline" /></span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-[10px] text-muted-foreground italic text-center">
          Know your best months for major decisions
        </p>
      </div>
    ),
  },

  // ============ PAGE 17: MUHURAT DATES ============
  {
    id: 17,
    title: "Muhurat Dates",
    titleHindi: "शुभ मुहूर्त",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground text-center mb-2">
          Auspicious dates personalized to YOUR chart for major life events
        </div>
        
        <div className="space-y-2">
          {[
            { purpose: '💒 Marriage Muhurat', desc: 'Best dates for wedding ceremony' },
            { purpose: '🏢 Business Start', desc: 'Auspicious dates to launch ventures' },
            { purpose: '🏠 Property Purchase', desc: 'Best dates for real estate deals' },
            { purpose: '🚗 Vehicle Purchase', desc: 'Auspicious dates for new vehicle' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-50 rounded p-2 border border-amber-200">
              <div className="text-xs font-medium text-amber-700">{item.purpose}</div>
              <div className="text-[10px] text-muted-foreground">{item.desc}</div>
              <div className="text-xs mt-1"><span className="bg-gray-200 rounded px-2">[Unlock to see dates]</span></div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ============ PAGE 18: FOREIGN TRAVEL ============
  {
    id: 18,
    title: "Foreign Travel",
    titleHindi: "विदेश यात्रा",
    isBlurred: false,
    content: (
      <div className="space-y-3">
        <div className="text-center text-2xl">✈️</div>
        
        <div className="bg-gray-100 rounded-lg p-2 text-xs">
          <div className="font-medium text-gray-600 mb-1">Foreign travel analysis includes:</div>
          <div className="text-muted-foreground">
            • 9th & 12th house analysis • Foreign settlement yoga • Best countries for you 
            • Travel timing through Dasha • Visa success periods • Overseas career prospects
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border-2 border-dashed border-amber-300 text-center">
          <div className="flex items-center justify-center gap-2 text-amber-700 mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-semibold">YOUR TRAVEL YOGA</span>
          </div>
          <div className="space-y-1 text-xs">
            <div><span className="text-muted-foreground">Foreign Yoga:</span> <span className="bg-gray-200 rounded px-1">[Present/Absent]</span></div>
            <div><span className="text-muted-foreground">Best Period:</span> <span className="bg-gray-200 rounded px-1">[20XX-20XX]</span></div>
            <div><span className="text-muted-foreground">Favorable Direction:</span> <span className="bg-gray-200 rounded px-1">[???]</span></div>
          </div>
        </div>
      </div>
    ),
  },

  // ============ FREE PAGE 19: PANDIT MESSAGE ============
  {
    id: 19,
    title: "Pandit's Message",
    titleHindi: "पंडित जी का संदेश",
    isBlurred: false,
    content: (
      <div className="space-y-3 text-center">
        <div className="text-4xl">🙏</div>
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-4 border border-amber-200">
          <div className="text-sm italic text-amber-800 leading-relaxed">
            "प्रिय राम कुमार जी,
            <br/><br/>
            Your Kundali shows exceptional planetary strength with 3 exalted planets. This is a blessed chart 
            that appears in only 2% of people. However, the Rahu-Ketu axis in 2nd-8th houses requires attention.
            <br/><br/>
            Follow the remedies in this report sincerely, and may Shri Ganesha remove all obstacles from your path.
            <br/><br/>
            ॥ शुभं भवतु ॥"
          </div>
          <div className="text-sm font-medium text-amber-700 mt-3">— Pt. Ramesh Shastri</div>
          <div className="text-xs text-muted-foreground">30+ years experience in Vedic Jyotish</div>
        </div>
      </div>
    ),
  },

  // ============ FREE PAGE 20: CONTACT ============
  {
    id: 20,
    title: "Contact Us",
    titleHindi: "संपर्क करें",
    isBlurred: false,
    content: (
      <div className="space-y-3 text-center">
        <div className="text-2xl font-bold text-amber-600">ॐ BoloAstro</div>
        <div className="text-xs text-muted-foreground">Authentic Vedic Astrology Since 1995</div>
        
        <div className="bg-amber-50 rounded-lg p-3 space-y-2 text-sm border border-amber-200">
          <p className="flex items-center justify-center gap-2">
            <span>📱</span>
            <span className="font-medium">WhatsApp: +91 72619 69798</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>🌐</span>
            <span>www.boloastro.com</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>📧</span>
            <span>support@boloastro.com</span>
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-3">
          <div className="text-sm font-semibold">Get Complete Report: ₹999 only</div>
          <div className="text-xs opacity-90">Pay via WhatsApp after reviewing</div>
        </div>
        
        <div className="text-xs text-muted-foreground italic mt-4">
          ॥ सर्वे भवन्तु सुखिनः ॥
          <br/>
          <span className="text-[10px]">May all beings be happy</span>
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
          <div className="relative bg-gradient-to-b from-amber-50 to-orange-50 rounded-lg border-2 border-amber-200">
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
                className="p-6 min-h-[350px] max-h-[60vh] overflow-y-auto relative"
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
                
                {/* Stronger overlay for premium content - no blur, just overlay */}
                {page.isBlurred && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white/40 via-white/70 to-white/90">
                    <div className="text-center p-4 bg-white/80 rounded-xl shadow-lg border border-amber-200">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Lock className="w-7 h-7 text-white" />
                      </div>
                      <p className="font-bold text-amber-700 text-lg">🔐 Premium Section</p>
                      <p className="text-sm text-muted-foreground mb-2">Unlock complete insights</p>
                      <div className="text-xs text-amber-600 font-medium bg-amber-50 rounded-full px-3 py-1">
                        ₹999 for Full Report
                      </div>
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
