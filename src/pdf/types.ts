// User birth details
export interface UserData {
  name: string;
  dob: string;
  time: string;
  place: string;
  nakshatra?: string;
  rashi?: string;
  lagnaRashi?: string;
}

// Planet position
export interface Planet {
  label: string;
  name: string;
  house: number;
  sign: string;
  degree: string;
  isRetrograde?: boolean;
}

// Dosha analysis
export interface Dosha {
  name: string;
  nameHindi: string;
  present: boolean;
  severity: 'none' | 'mild' | 'moderate' | 'severe';
  description: string;
  impact: string;
  remedies: string[];
}

// Prediction section
export interface PredictionSection {
  title: string;
  titleHindi?: string;
  content: string;
  highlights?: string[];
  warnings?: string[];
}

// Gemstone recommendation
export interface Gemstone {
  name: string;
  nameHindi: string;
  reason: string;
  wearingMethod: string;
  day: string;
  finger: string;
  weight: string;
  metal: string;
  mantra?: string;
}

// Lucky factors
export interface LuckyFactors {
  color: string;
  colorHindi?: string;
  number: number;
  day: string;
  dayHindi?: string;
  direction: string;
  directionHindi?: string;
  deity?: string;
}

// Yearly prediction month
export interface MonthlyPrediction {
  month: string;
  career: 'excellent' | 'good' | 'average' | 'challenging';
  money: 'excellent' | 'good' | 'average' | 'challenging';
  love: 'excellent' | 'good' | 'average' | 'challenging';
  health: 'excellent' | 'good' | 'average' | 'challenging';
  notes?: string;
}

// Muhurat timing
export interface Muhurat {
  purpose: string;
  purposeHindi?: string;
  dates: string[];
  notes?: string;
}

// Custom Q&A
export interface CustomQuestion {
  question: string;
  answer: string;
}

// Complete kundali data
export interface KundaliData {
  userData: UserData;
  planets: Planet[];
  
  // Predictions
  personality: PredictionSection;
  career: PredictionSection;
  wealth: PredictionSection;
  marriage: PredictionSection;
  health: PredictionSection;
  children: PredictionSection;
  foreignTravel: PredictionSection;
  
  // Analysis
  doshas: Dosha[];
  remedies: {
    mantras: string[];
    pujas: string[];
    vrats: string[];
    donations: string[];
    templeVisits: string[];
  };
  
  gemstone: Gemstone;
  luckyFactors: LuckyFactors;
  yearlyPrediction: MonthlyPrediction[];
  muhurats: Muhurat[];
  
  // Custom
  customQuestions?: CustomQuestion[];
  
  // Pandit details
  panditName?: string;
  panditMessage?: string;
}

// PDF Props
export interface KundaliPDFProps {
  data: KundaliData;
}
