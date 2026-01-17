import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Users, Calendar, Clock, MapPin, Sparkles, 
  ArrowRight, Check, RotateCcw, MessageCircle, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/config/constants";

interface PersonDetails {
  name: string;
  date: string;
  time: string;
  place: string;
}

interface MatchResult {
  totalScore: number;
  mangalDosha: { boy: boolean; girl: boolean; match: boolean };
  ashtakoota: {
    name: string;
    maxPoints: number;
    obtained: number;
  }[];
  compatibility: string;
  recommendation: string;
}

const initialDetails: PersonDetails = {
  name: "",
  date: "",
  time: "",
  place: "",
};

const MatchMakingTool = () => {
  const [activeTab, setActiveTab] = useState<"boy" | "girl">("boy");
  const [boyDetails, setBoyDetails] = useState<PersonDetails>(initialDetails);
  const [girlDetails, setGirlDetails] = useState<PersonDetails>(initialDetails);
  const [result, setResult] = useState<MatchResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const isFormComplete = (details: PersonDetails) => {
    return details.name && details.date && details.time && details.place;
  };

  const bothFormsComplete = isFormComplete(boyDetails) && isFormComplete(girlDetails);

  const generateMockResult = (): MatchResult => {
    const totalScore = Math.floor(Math.random() * 19) + 18; // 18-36
    const boyMangal = Math.random() > 0.7;
    const girlMangal = Math.random() > 0.7;

    const ashtakoota = [
      { name: "Varna", maxPoints: 1, obtained: Math.random() > 0.3 ? 1 : 0 },
      { name: "Vashya", maxPoints: 2, obtained: Math.floor(Math.random() * 3) },
      { name: "Tara", maxPoints: 3, obtained: Math.floor(Math.random() * 4) },
      { name: "Yoni", maxPoints: 4, obtained: Math.floor(Math.random() * 5) },
      { name: "Graha Maitri", maxPoints: 5, obtained: Math.floor(Math.random() * 6) },
      { name: "Gana", maxPoints: 6, obtained: Math.floor(Math.random() * 7) },
      { name: "Bhakoot", maxPoints: 7, obtained: Math.floor(Math.random() * 8) },
      { name: "Nadi", maxPoints: 8, obtained: Math.floor(Math.random() * 9) },
    ];

    let compatibility = "";
    let recommendation = "";

    if (totalScore >= 32) {
      compatibility = "Excellent";
      recommendation = "This is an ideal match with very high compatibility. The union promises harmony and prosperity.";
    } else if (totalScore >= 25) {
      compatibility = "Very Good";
      recommendation = "A strong match with good compatibility. Minor differences can be easily resolved.";
    } else if (totalScore >= 18) {
      compatibility = "Good";
      recommendation = "A favorable match. Some areas may need attention but overall compatible.";
    } else {
      compatibility = "Average";
      recommendation = "Match requires careful consideration. Remedies may be recommended.";
    }

    return {
      totalScore,
      mangalDosha: {
        boy: boyMangal,
        girl: girlMangal,
        match: boyMangal === girlMangal,
      },
      ashtakoota,
      compatibility,
      recommendation,
    };
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setResult(generateMockResult());
      setIsCalculating(false);
    }, 2000);
  };

  const handleReset = () => {
    setBoyDetails(initialDetails);
    setGirlDetails(initialDetails);
    setResult(null);
    setActiveTab("boy");
  };

  const updateDetails = (
    setter: React.Dispatch<React.SetStateAction<PersonDetails>>,
    field: keyof PersonDetails,
    value: string
  ) => {
    setter((prev) => ({ ...prev, [field]: value }));
  };

  const renderForm = (
    details: PersonDetails,
    setDetails: React.Dispatch<React.SetStateAction<PersonDetails>>,
    label: string
  ) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${label}-name`} className="text-sm font-medium flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          {label}'s Name
        </Label>
        <Input
          id={`${label}-name`}
          type="text"
          placeholder="Enter full name"
          value={details.name}
          onChange={(e) => updateDetails(setDetails, "name", e.target.value)}
          className="h-12 bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${label}-date`} className="text-sm font-medium flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          Date of Birth
        </Label>
        <Input
          id={`${label}-date`}
          type="date"
          value={details.date}
          onChange={(e) => updateDetails(setDetails, "date", e.target.value)}
          className="h-12 bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${label}-time`} className="text-sm font-medium flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          Time of Birth
        </Label>
        <Input
          id={`${label}-time`}
          type="time"
          value={details.time}
          onChange={(e) => updateDetails(setDetails, "time", e.target.value)}
          className="h-12 bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${label}-place`} className="text-sm font-medium flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          Place of Birth
        </Label>
        <Input
          id={`${label}-place`}
          type="text"
          placeholder="City, State, Country"
          value={details.place}
          onChange={(e) => updateDetails(setDetails, "place", e.target.value)}
          className="h-12 bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
        />
      </div>
    </div>
  );

  if (result) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl mx-auto space-y-6"
      >
        <Card variant="glass" className="overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-primary/5" />
          
          <CardHeader className="relative text-center pb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500/20 to-primary/20 flex items-center justify-center border border-pink-500/30"
            >
              <Heart className="w-10 h-10 text-pink-400" />
            </motion.div>
            
            <CardTitle className="text-2xl font-display">
              <span className="text-gradient-saffron">Gun Milan</span> Results
            </CardTitle>
            <CardDescription>
              {boyDetails.name} & {girlDetails.name}
            </CardDescription>
          </CardHeader>

          <CardContent className="relative space-y-6">
            {/* Score Circle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 rounded-2xl bg-muted/30 border border-border/30"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted/30"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 352" }}
                    animate={{ strokeDasharray: `${(result.totalScore / 36) * 352} 352` }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-display font-bold">{result.totalScore}</span>
                  <span className="text-sm text-muted-foreground">out of 36</span>
                </div>
              </div>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                result.compatibility === "Excellent" ? "bg-green-500/20 text-green-400" :
                result.compatibility === "Very Good" ? "bg-blue-500/20 text-blue-400" :
                result.compatibility === "Good" ? "bg-primary/20 text-primary" :
                "bg-amber-500/20 text-amber-400"
              }`}>
                {result.compatibility} Match
              </div>
            </motion.div>

            {/* Ashtakoota Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="font-display font-semibold flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                Ashtakoota Analysis
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {result.ashtakoota.map((koota, i) => (
                  <motion.div
                    key={koota.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="p-3 rounded-xl bg-muted/20 border border-border/30"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{koota.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {koota.obtained}/{koota.maxPoints}
                      </span>
                    </div>
                    <Progress 
                      value={(koota.obtained / koota.maxPoints) * 100} 
                      className="h-1.5"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mangal Dosha Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`p-4 rounded-xl border ${
                result.mangalDosha.match 
                  ? "bg-green-500/10 border-green-500/30" 
                  : "bg-amber-500/10 border-amber-500/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  result.mangalDosha.match ? "bg-green-500/20" : "bg-amber-500/20"
                }`}>
                  <span className="text-xl">♂</span>
                </div>
                <div>
                  <p className="font-medium">Mangal Dosha Status</p>
                  <p className="text-sm text-muted-foreground">
                    Boy: {result.mangalDosha.boy ? "Yes" : "No"} | Girl: {result.mangalDosha.girl ? "Yes" : "No"}
                    {result.mangalDosha.match ? " (Matched)" : " (Mismatch)"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Recommendation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-4 rounded-xl bg-primary/5 border border-primary/20"
            >
              <p className="text-sm text-muted-foreground">{result.recommendation}</p>
            </motion.div>
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
              href={getWhatsAppLink(`${WHATSAPP_MESSAGES.matchMaking} Couple: ${boyDetails.name} & ${girlDetails.name}. Score: ${result.totalScore}/36`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Detailed Analysis
            </a>
          </Button>
          
          <Button
            variant="outline"
            className="h-14 rounded-xl"
            onClick={handleReset}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Check Another
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <Card variant="glass" className="w-full max-w-2xl mx-auto overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-display text-center">
          <span className="text-gradient-saffron">Gun Milan</span> Calculator
        </CardTitle>
        <CardDescription className="text-center">
          Check marriage compatibility based on Vedic astrology
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Tab Buttons (Mobile) */}
        <div className="flex gap-2 md:hidden">
          <Button
            variant={activeTab === "boy" ? "default" : "outline"}
            className={`flex-1 h-12 rounded-xl ${activeTab === "boy" ? "bg-gradient-to-r from-blue-500 to-cyan-500" : ""}`}
            onClick={() => setActiveTab("boy")}
          >
            <Users className="w-4 h-4 mr-2" />
            Boy's Details
            {isFormComplete(boyDetails) && <Check className="w-4 h-4 ml-2" />}
          </Button>
          <Button
            variant={activeTab === "girl" ? "default" : "outline"}
            className={`flex-1 h-12 rounded-xl ${activeTab === "girl" ? "bg-gradient-to-r from-pink-500 to-rose-500" : ""}`}
            onClick={() => setActiveTab("girl")}
          >
            <Heart className="w-4 h-4 mr-2" />
            Girl's Details
            {isFormComplete(girlDetails) && <Check className="w-4 h-4 ml-2" />}
          </Button>
        </div>

        {/* Mobile Form */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === "boy" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === "boy" ? 20 : -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "boy" 
                ? renderForm(boyDetails, setBoyDetails, "Boy")
                : renderForm(girlDetails, setGirlDetails, "Girl")
              }
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Side-by-Side Forms */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-6">
          <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              Boy's Details
              {isFormComplete(boyDetails) && (
                <Check className="w-4 h-4 text-green-400 ml-auto" />
              )}
            </h3>
            {renderForm(boyDetails, setBoyDetails, "Boy")}
          </div>

          <div className="p-4 rounded-xl bg-pink-500/5 border border-pink-500/20">
            <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-400" />
              Girl's Details
              {isFormComplete(girlDetails) && (
                <Check className="w-4 h-4 text-green-400 ml-auto" />
              )}
            </h3>
            {renderForm(girlDetails, setGirlDetails, "Girl")}
          </div>
        </div>

        {/* Calculate Button */}
        <Button
          onClick={handleCalculate}
          disabled={!bothFormsComplete || isCalculating}
          className="w-full h-14 rounded-xl bg-gradient-to-r from-pink-500 to-primary hover:opacity-90 transition-opacity"
        >
          {isCalculating ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Heart className="w-5 h-5" />
            </motion.div>
          ) : (
            <>
              Calculate Compatibility
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>

        {!bothFormsComplete && (
          <p className="text-center text-sm text-muted-foreground">
            Please fill in all details for both profiles to check compatibility
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MatchMakingTool;
