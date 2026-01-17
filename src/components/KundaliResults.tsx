import { motion } from "framer-motion";
import { 
  Sun, Moon, Star, Sparkles, Heart, Briefcase, 
  TrendingUp, Calendar, Clock, MapPin, MessageCircle,
  Download, Share2, ChevronRight, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlanetaryIcon, PLANETS, ZODIAC_SIGNS } from "@/components/ui/planetary-icons";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/config/constants";
import NorthIndianChart from "@/components/NorthIndianChart";
import { useKundaliPDF } from "@/hooks/useKundaliPDF";
import { useToast } from "@/hooks/use-toast";
import type { KundaliData } from "@/pdf/types";

interface BirthDetails {
  name: string;
  date: string;
  time: string;
  place: string;
}

interface KundaliResultsProps {
  details: BirthDetails;
  onReset: () => void;
  kundaliData?: KundaliData | null;
}

// Simulated results based on birth details
const generateResults = (details: BirthDetails) => {
  const date = new Date(details.date);
  const month = date.getMonth();
  const day = date.getDate();
  
  // Simple calculation for demo
  const sunSignIndex = month;
  const moonSignIndex = (month + (day > 15 ? 1 : 0)) % 12;
  const ascendantIndex = (month + 3) % 12;
  
  return {
    sunSign: ZODIAC_SIGNS[sunSignIndex],
    moonSign: ZODIAC_SIGNS[moonSignIndex],
    ascendant: ZODIAC_SIGNS[ascendantIndex],
    nakshatra: ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra"][day % 6],
    mangalDosha: day % 3 === 0,
    luckyNumber: (day % 9) + 1,
    luckyColor: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"][day % 7],
    favorablePeriod: `${2025 + (month % 3)} - ${2026 + (month % 3)}`,
  };
};

const KundaliResults = ({ details, onReset, kundaliData }: KundaliResultsProps) => {
  const results = generateResults(details);
  const { toast } = useToast();
  
  // PDF download hook
  const { downloadPDF, isGenerating, hasRealData } = useKundaliPDF({
    onSuccess: () => {
      toast({
        title: "PDF Downloaded! 🎉",
        description: "Your Kundali report has been downloaded successfully.",
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

  const handleDownloadPDF = () => {
    // Use provided kundaliData if available, otherwise the hook will use sessionStorage
    downloadPDF(kundaliData || undefined);
  };
  
  const quickInsights = [
    { 
      icon: Sun, 
      label: "Sun Sign", 
      value: results.sunSign.name,
      hindi: results.sunSign.hindi,
      color: "from-amber-500/20 to-orange-500/10"
    },
    { 
      icon: Moon, 
      label: "Moon Sign (Rashi)", 
      value: results.moonSign.name,
      hindi: results.moonSign.hindi,
      color: "from-blue-500/20 to-cyan-500/10"
    },
    { 
      icon: Star, 
      label: "Ascendant (Lagna)", 
      value: results.ascendant.name,
      hindi: results.ascendant.hindi,
      color: "from-purple-500/20 to-pink-500/10"
    },
    { 
      icon: Sparkles, 
      label: "Nakshatra", 
      value: results.nakshatra,
      hindi: "नक्षत्र",
      color: "from-gold/20 to-saffron/10"
    },
  ];

  const predictions = [
    { icon: Heart, label: "Love & Marriage", desc: "Favorable period for relationships", color: "text-pink-400" },
    { icon: Briefcase, label: "Career", desc: "Growth opportunities ahead", color: "text-blue-400" },
    { icon: TrendingUp, label: "Finance", desc: "Stable financial period", color: "text-green-400" },
    { icon: Calendar, label: "Health", desc: "Focus on mental wellness", color: "text-purple-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      {/* Header Card */}
      <Card variant="glass" className="overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        
        <CardHeader className="relative text-center pb-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
              <span className="text-4xl">{results.moonSign.symbol}</span>
            </div>
          </motion.div>
          
          <CardTitle className="text-2xl font-display">
            {details.name}'s <span className="text-gradient-saffron">Kundali</span>
          </CardTitle>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(details.date).toLocaleDateString("en-IN", { 
                day: "numeric", month: "short", year: "numeric" 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {details.time}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {details.place}
            </span>
          </div>
        </CardHeader>

        <CardContent className="relative space-y-6">
          {/* North Indian Lagna Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="flex justify-center"
          >
            <NorthIndianChart
              planets={[
                { house: 1, label: "As" },
                { house: 1, label: "Su" },
                { house: 2, label: "Me" },
                { house: 4, label: "Ve" },
                { house: 5, label: "Ma", isRetrograde: true },
                { house: 7, label: "Mo" },
                { house: 9, label: "Ju" },
                { house: 10, label: "Sa" },
                { house: 11, label: "Ra" },
                { house: 5, label: "Ke" },
              ]}
              size={280}
              title="Lagna Kundali"
            />
          </motion.div>

          {/* Quick Insights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickInsights.map((insight, i) => (
              <motion.div
                key={insight.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`p-4 rounded-xl bg-gradient-to-br ${insight.color} border border-border/30`}
              >
                <insight.icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-xs text-muted-foreground">{insight.label}</p>
                <p className="font-semibold text-foreground">{insight.value}</p>
                <p className="text-xs text-muted-foreground">{insight.hindi}</p>
              </motion.div>
            ))}
          </div>

          {/* Mangal Dosha Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className={`p-4 rounded-xl border ${
              results.mangalDosha 
                ? "bg-destructive/10 border-destructive/30" 
                : "bg-green-500/10 border-green-500/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  results.mangalDosha ? "bg-destructive/20" : "bg-green-500/20"
                }`}>
                  <span className="text-xl">♂</span>
                </div>
                <div>
                  <p className="font-medium">Mangal Dosha</p>
                  <p className="text-sm text-muted-foreground">
                    {results.mangalDosha ? "Mild Mangal Dosha detected" : "No Mangal Dosha"}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                Learn More <ChevronRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </motion.div>

          {/* Lucky Elements */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-1">Lucky Number</p>
              <p className="text-2xl font-display font-bold text-primary">{results.luckyNumber}</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-1">Lucky Color</p>
              <p className="text-lg font-semibold text-foreground">{results.luckyColor}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Predictions Card */}
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-lg font-display flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Life Predictions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {predictions.map((pred, i) => (
              <motion.div
                key={pred.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="p-4 rounded-xl bg-muted/20 border border-border/30 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <pred.icon className={`w-5 h-5 ${pred.color} mb-2`} />
                <p className="font-medium text-sm">{pred.label}</p>
                <p className="text-xs text-muted-foreground">{pred.desc}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="whatsapp"
          className="flex-1 h-14 rounded-xl text-base"
          asChild
        >
          <a
            href={getWhatsAppLink(`${WHATSAPP_MESSAGES.premiumReport} My details: ${details.name}, ${details.date}, ${details.time}, ${details.place}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Detailed Report
          </a>
        </Button>
        
        <Button
          variant="outline"
          className="h-14 rounded-xl"
          onClick={onReset}
        >
          Generate Another
        </Button>
      </div>

      {/* Share & Download */}
      <div className="flex justify-center gap-4">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-muted-foreground"
          onClick={handleDownloadPDF}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Download className="w-4 h-4 mr-2" />
          )}
          {isGenerating ? "Generating..." : "Download PDF"}
        </Button>
      </div>
    </motion.div>
  );
};

export default KundaliResults;
