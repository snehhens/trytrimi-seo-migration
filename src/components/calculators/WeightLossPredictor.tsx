import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const WeightLossPredictor = () => {
  const [startWeight, setStartWeight] = useState("");
  const [medication, setMedication] = useState("semaglutide");
  const [showResults, setShowResults] = useState(false);
  const [projectionData, setProjectionData] = useState<any[]>([]);

  const calculate = () => {
    const weight = parseFloat(startWeight);
    if (weight > 0) {
      // Clinical trial data: Semaglutide ~15% weight loss, Tirzepatide ~20% weight loss over 12 months
      const totalLossPercent = medication === "semaglutide" ? 0.15 : 0.20;
      const totalLoss = weight * totalLossPercent;
      
      const data = [];
      for (let month = 0; month <= 12; month++) {
        // Progressive weight loss curve
        const progressFactor = month === 0 ? 0 : Math.pow(month / 12, 0.7);
        const currentLoss = totalLoss * progressFactor;
        const currentWeight = weight - currentLoss;
        
        data.push({
          month: month,
          weight: parseFloat(currentWeight.toFixed(1)),
          lost: parseFloat(currentLoss.toFixed(1))
        });
      }
      
      setProjectionData(data);
      setShowResults(true);
    }
  };

  const finalWeight = projectionData.length > 0 ? projectionData[projectionData.length - 1].weight : 0;
  const totalLost = projectionData.length > 0 ? projectionData[projectionData.length - 1].lost : 0;
  const lossPercent = startWeight ? ((totalLost / parseFloat(startWeight)) * 100).toFixed(1) : 0;

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Weight Loss Predictor</h2>
      <p className="text-muted-foreground mb-6">
        Project your weight loss journey based on clinical trial data
      </p>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="start-weight">Starting Weight (lbs)</Label>
          <Input
            id="start-weight"
            type="number"
            placeholder="e.g., 220"
            value={startWeight}
            onChange={(e) => setStartWeight(e.target.value)}
          />
        </div>
        
        <div>
          <Label className="text-base font-semibold mb-3 block">Select Medication</Label>
          <RadioGroup value={medication} onValueChange={setMedication}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="semaglutide" id="pred-semaglutide" />
              <Label htmlFor="pred-semaglutide" className="cursor-pointer">
                Semaglutide (~15% weight loss)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tirzepatide" id="pred-tirzepatide" />
              <Label htmlFor="pred-tirzepatide" className="cursor-pointer">
                Tirzepatide (~20% weight loss)
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button onClick={calculate} className="w-full">
          Calculate Weight Loss Projection
        </Button>
        
        {showResults && (
          <div className="space-y-6 mt-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Starting</p>
                <p className="text-2xl font-bold">{startWeight} lbs</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Projected Loss</p>
                <p className="text-2xl font-bold text-green-600">{totalLost} lbs</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Target Weight</p>
                <p className="text-2xl font-bold text-primary">{finalWeight} lbs</p>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="font-semibold mb-4">12-Month Projection ({lossPercent}% total weight loss)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="month" 
                    label={{ value: 'Months', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    label={{ value: 'Weight (lbs)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value: any, name: string) => {
                      if (name === 'weight') return [`${value} lbs`, 'Weight'];
                      return [`${value} lbs`, 'Lost'];
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> This projection is based on average clinical trial results. 
                Individual results may vary based on diet, exercise, starting weight, and adherence to treatment. 
                Consult with your healthcare provider for personalized guidance.
              </p>
            </div>
            
            <Button className="w-full" size="lg">
              Start Your Weight Loss Journey
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
