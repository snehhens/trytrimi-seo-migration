import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "lucide-react";

export const DosageGuide = () => {
  const [medication, setMedication] = useState("semaglutide");
  const [showSchedule, setShowSchedule] = useState(false);

  const semaglutideSchedule = [
    { week: "1-4", dose: "0.25 mg", frequency: "Once weekly", notes: "Initial dose" },
    { week: "5-8", dose: "0.5 mg", frequency: "Once weekly", notes: "First increase" },
    { week: "9-12", dose: "1.0 mg", frequency: "Once weekly", notes: "Second increase" },
    { week: "13-16", dose: "1.7 mg", frequency: "Once weekly", notes: "Third increase (optional)" },
    { week: "17+", dose: "2.4 mg", frequency: "Once weekly", notes: "Maintenance dose" }
  ];

  const tirzepatideSchedule = [
    { week: "1-4", dose: "1.5 mg", frequency: "Once weekly", notes: "Initial dose" },
    { week: "5-8", dose: "3 mg", frequency: "Once weekly", notes: "First increase" },
    { week: "9-12", dose: "6 mg", frequency: "Once weekly", notes: "Second increase" },
    { week: "13-16", dose: "9 mg", frequency: "Once weekly", notes: "Third increase" },
    { week: "17-20", dose: "11 mg", frequency: "Once weekly", notes: "Fourth increase (optional)" },
    { week: "21+", dose: "13.5 mg", frequency: "Once weekly", notes: "Maximum dose" }
  ];

  const schedule = medication === "semaglutide" ? semaglutideSchedule : tirzepatideSchedule;

  const showGuide = () => {
    setShowSchedule(true);
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dosage Guide</h2>
      <p className="text-muted-foreground mb-6">
        Step-by-step dosing schedule for safe and effective treatment
      </p>
      
      <div className="space-y-6">
        <div>
          <Label className="text-base font-semibold mb-3 block">Select Medication</Label>
          <RadioGroup value={medication} onValueChange={setMedication}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="semaglutide" id="dose-semaglutide" />
              <Label htmlFor="dose-semaglutide" className="cursor-pointer">Semaglutide</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tirzepatide" id="dose-tirzepatide" />
              <Label htmlFor="dose-tirzepatide" className="cursor-pointer">Tirzepatide</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button onClick={showGuide} className="w-full">
          View Dosing Schedule
        </Button>
        
        {showSchedule && (
          <div className="space-y-4 mt-6">
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {medication.charAt(0).toUpperCase() + medication.slice(1)} Dosing Schedule
              </h3>
              <p className="text-sm text-muted-foreground">
                Gradual dose increases help minimize side effects and improve tolerability
              </p>
            </div>
            
            <div className="space-y-3">
              {schedule.map((step, index) => (
                <div 
                  key={index} 
                  className="border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold">Weeks {step.week}</p>
                      <p className="text-2xl font-bold text-primary mt-1">{step.dose}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{step.frequency}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.notes}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>Important:</strong> This is a general dosing guide. Your healthcare provider 
                will determine the appropriate dose and titration schedule based on your individual 
                response, tolerance, and weight loss goals. Always follow your doctor's instructions.
              </p>
            </div>
            
            <div className="grid gap-3">
              <Button className="w-full" size="lg">
                Get Personalized Dosing Plan
              </Button>
              <Button variant="outline" className="w-full">
                Download Dosing Schedule (PDF)
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
