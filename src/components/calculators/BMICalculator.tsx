import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { InlineEmailCapture } from "@/components/LeadMagnet";

export const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");
  const [eligible, setEligible] = useState<boolean | null>(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) * 0.0254; // inches to meters
    const weightInKg = parseFloat(weight) * 0.453592; // lbs to kg
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue);
      
      let cat = "";
      let isEligible = false;
      
      if (bmiValue < 18.5) {
        cat = "Underweight";
        isEligible = false;
      } else if (bmiValue < 25) {
        cat = "Normal weight";
        isEligible = false;
      } else if (bmiValue < 27) {
        cat = "Overweight";
        isEligible = false;
      } else if (bmiValue < 30) {
        cat = "Overweight";
        isEligible = true;
      } else {
        cat = "Obese";
        isEligible = true;
      }
      
      setCategory(cat);
      setEligible(isEligible);
    }
  };

  const getBMIColor = (bmiValue: number) => {
    if (bmiValue < 18.5) return "text-blue-600";
    if (bmiValue < 25) return "text-green-600";
    if (bmiValue < 30) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Calculate your Body Mass Index and check GLP-1 medication eligibility
      </p>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="height">Height (inches)</Label>
          <Input
            id="height"
            type="number"
            placeholder="e.g., 68"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="weight">Weight (lbs)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="e.g., 180"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        
        <Button onClick={calculateBMI} className="w-full">
          Calculate BMI
        </Button>
        
        {bmi !== null && (
          <div className="space-y-4 mt-6">
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
              <p className={`text-4xl font-bold ${getBMIColor(bmi)}`}>
                {bmi.toFixed(1)}
              </p>
              <p className="text-lg mt-2">{category}</p>
            </div>
            
            {eligible !== null && (
              <Alert className={eligible ? "border-green-500 bg-green-50" : "border-yellow-500 bg-yellow-50"}>
                {eligible ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                )}
                <AlertDescription className={eligible ? "text-green-900" : "text-yellow-900"}>
                  {eligible ? (
                    <>
                      <strong>You may be eligible</strong> for GLP-1 medications like semaglutide or tirzepatide. 
                      These medications are typically prescribed for individuals with BMI ≥27 with weight-related conditions or BMI ≥30.
                    </>
                  ) : (
                    <>
                      <strong>Standard eligibility criteria not met.</strong> GLP-1 medications are typically prescribed 
                      for individuals with BMI ≥27 with weight-related conditions. Consult with a healthcare provider 
                      for personalized advice.
                    </>
                  )}
                </AlertDescription>
              </Alert>
            )}
            
            {eligible && (
              <Button className="w-full" size="lg">
                Get Started with Trimi
              </Button>
            )}
            
            {bmi !== null && (
              <div className="mt-6">
                <InlineEmailCapture source="bmi-calculator" />
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
