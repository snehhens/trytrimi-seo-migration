import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ComparisonTable } from "@/components/blog/ComparisonTable";

export const CostCalculator = () => {
  const [medication, setMedication] = useState("semaglutide");
  const [source, setSource] = useState("compounded");
  const [showResults, setShowResults] = useState(false);

  const costData = {
    semaglutide: {
      compounded: { monthly: 99, yearly: 1188, savings: 12012 },
      brand: { monthly: 1100, yearly: 13200, savings: 0 },
      insurance: { monthly: 25, yearly: 300, savings: 12900 }
    },
    tirzepatide: {
      compounded: { monthly: 125, yearly: 1500, savings: 11700 },
      brand: { monthly: 1100, yearly: 13200, savings: 0 },
      insurance: { monthly: 25, yearly: 300, savings: 12900 }
    }
  };

  const calculate = () => {
    setShowResults(true);
  };

  const currentCost = costData[medication as keyof typeof costData][source as keyof typeof costData.semaglutide];

  const comparisonItems = [
    {
      feature: "Monthly Cost",
      values: [
        `$${costData[medication as keyof typeof costData].compounded.monthly}`,
        `$${costData[medication as keyof typeof costData].brand.monthly}`,
        `$${costData[medication as keyof typeof costData].insurance.monthly}*`
      ]
    },
    {
      feature: "Yearly Cost",
      values: [
        `$${costData[medication as keyof typeof costData].compounded.yearly}`,
        `$${costData[medication as keyof typeof costData].brand.yearly}`,
        `$${costData[medication as keyof typeof costData].insurance.yearly}*`
      ]
    },
    {
      feature: "Insurance Required",
      values: [false, false, true]
    },
    {
      feature: "Doctor Consultation",
      values: [true, true, true]
    },
    {
      feature: "Home Delivery",
      values: [true, false, false]
    }
  ];

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cost Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Compare costs and find the most affordable option for your weight loss journey
      </p>
      
      <div className="space-y-6">
        <div>
          <Label className="text-base font-semibold mb-3 block">Select Medication</Label>
          <RadioGroup value={medication} onValueChange={setMedication}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="semaglutide" id="semaglutide" />
              <Label htmlFor="semaglutide" className="cursor-pointer">Semaglutide</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tirzepatide" id="tirzepatide" />
              <Label htmlFor="tirzepatide" className="cursor-pointer">Tirzepatide</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="text-base font-semibold mb-3 block">Select Source</Label>
          <RadioGroup value={source} onValueChange={setSource}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compounded" id="compounded" />
              <Label htmlFor="compounded" className="cursor-pointer">Compounded (Trimi)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="brand" id="brand" />
              <Label htmlFor="brand" className="cursor-pointer">Brand Name (Wegovy/Mounjaro)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="insurance" id="insurance" />
              <Label htmlFor="insurance" className="cursor-pointer">With Insurance Coverage</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button onClick={calculate} className="w-full">
          Calculate Costs
        </Button>
        
        {showResults && (
          <div className="space-y-6 mt-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Monthly</p>
                <p className="text-2xl font-bold text-primary">${currentCost.monthly}</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Yearly</p>
                <p className="text-2xl font-bold text-primary">${currentCost.yearly}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">You Save</p>
                <p className="text-2xl font-bold text-green-600">${currentCost.savings}</p>
              </div>
            </div>
            
            <ComparisonTable
              title={`${medication.charAt(0).toUpperCase() + medication.slice(1)} Cost Comparison`}
              columns={["Compounded", "Brand Name", "With Insurance"]}
              items={comparisonItems}
            />
            
            <p className="text-xs text-muted-foreground">
              *Insurance coverage varies by plan. Contact your insurance provider for exact costs.
            </p>
            
            <Button className="w-full" size="lg">
              Get Started with Trimi - ${costData[medication as keyof typeof costData].compounded.monthly}/month
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
