import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface BirthDetails {
  name: string;
  date: string;
  time: string;
  place: string;
}

interface BirthDetailsFormProps {
  onSubmit: (details: BirthDetails) => void;
  isLoading?: boolean;
}

const BirthDetailsForm = ({ onSubmit, isLoading = false }: BirthDetailsFormProps) => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState<BirthDetails>({
    name: "",
    date: "",
    time: "",
    place: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const updateField = (field: keyof BirthDetails, value: string) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isStepValid = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return details.name.trim().length >= 2;
      case 2:
        return details.date !== "";
      case 3:
        return details.time !== "";
      case 4:
        return details.place.trim().length >= 2;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < 4 && isStepValid(step)) {
      setStep(step + 1);
    } else if (step === 4 && isStepValid(4)) {
      onSubmit(details);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const steps = [
    { num: 1, label: "Name", icon: Sparkles },
    { num: 2, label: "Date", icon: Calendar },
    { num: 3, label: "Time", icon: Clock },
    { num: 4, label: "Place", icon: MapPin },
  ];

  return (
    <Card variant="glass" className="w-full max-w-md mx-auto overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-display text-center">
          Generate Your <span className="text-gradient-saffron">Kundali</span>
        </CardTitle>
        <CardDescription className="text-center">
          Enter your birth details for accurate predictions
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <motion.div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
                  ${step > s.num 
                    ? "bg-primary border-primary text-primary-foreground" 
                    : step === s.num 
                      ? "border-primary text-primary bg-primary/10" 
                      : "border-border text-muted-foreground"
                  }
                `}
                animate={step === s.num ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {step > s.num ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <s.icon className="w-5 h-5" />
                )}
              </motion.div>
              
              {i < steps.length - 1 && (
                <div 
                  className={`w-8 sm:w-12 h-0.5 mx-1 transition-colors ${
                    step > s.num ? "bg-primary" : "bg-border"
                  }`} 
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {step === 1 && (
              <div className="space-y-3">
                <Label htmlFor="name" className="text-base font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  What's your name?
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={details.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className="h-14 text-lg bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
                  autoFocus
                />
                {touched.name && !isStepValid(1) && (
                  <p className="text-sm text-destructive">Please enter your name</p>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <Label htmlFor="date" className="text-base font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  When were you born?
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={details.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  onBlur={() => handleBlur("date")}
                  className="h-14 text-lg bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
                  autoFocus
                />
                <p className="text-sm text-muted-foreground">
                  Your birth date determines your planetary positions
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <Label htmlFor="time" className="text-base font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  What time were you born?
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={details.time}
                  onChange={(e) => updateField("time", e.target.value)}
                  onBlur={() => handleBlur("time")}
                  className="h-14 text-lg bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
                  autoFocus
                />
                <p className="text-sm text-muted-foreground">
                  Tip: Check your birth certificate for exact time
                </p>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-3">
                <Label htmlFor="place" className="text-base font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Where were you born?
                </Label>
                <Input
                  id="place"
                  type="text"
                  placeholder="City, State, Country"
                  value={details.place}
                  onChange={(e) => updateField("place", e.target.value)}
                  onBlur={() => handleBlur("place")}
                  className="h-14 text-lg bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
                  autoFocus
                />
                <p className="text-sm text-muted-foreground">
                  Birth location affects your ascendant (Lagna)
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex gap-3 pt-4">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex-1 h-12 rounded-xl"
              disabled={isLoading}
            >
              Back
            </Button>
          )}
          
          <Button
            onClick={handleNext}
            disabled={!isStepValid(step) || isLoading}
            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            ) : step === 4 ? (
              <>
                Generate Kundali
                <Sparkles className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BirthDetailsForm;
