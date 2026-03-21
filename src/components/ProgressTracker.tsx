import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, Calendar, Award, Target } from "lucide-react";
import { toast } from "sonner";

interface WeightEntry {
  date: string;
  weight: number;
  note?: string;
}

export const ProgressTracker = () => {
  const [entries, setEntries] = useState<WeightEntry[]>([
    { date: "2024-01-01", weight: 220, note: "Starting weight" },
    { date: "2024-01-15", weight: 215, note: "First weigh-in" },
    { date: "2024-02-01", weight: 208, note: "Feeling great!" },
    { date: "2024-02-15", weight: 202, note: "Halfway there" }
  ]);

  const startWeight = entries[0]?.weight || 220;
  const currentWeight = entries[entries.length - 1]?.weight || 220;
  const goalWeight = 170;
  const totalLoss = startWeight - currentWeight;
  const percentToGoal = ((startWeight - currentWeight) / (startWeight - goalWeight)) * 100;

  const handleAddEntry = () => {
    toast.success("Weight entry added successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Current Weight</span>
              <TrendingDown className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">{currentWeight} lbs</div>
            <p className="text-sm text-muted-foreground mt-1">
              {totalLoss} lbs lost
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Goal Weight</span>
              <Target className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">{goalWeight} lbs</div>
            <p className="text-sm text-muted-foreground mt-1">
              {currentWeight - goalWeight} lbs to go
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">{percentToGoal.toFixed(0)}%</div>
            <p className="text-sm text-muted-foreground mt-1">
              To goal weight
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Bar */}
      <Card>
        <CardHeader>
          <CardTitle>Your Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Progress to Goal</span>
                <span className="text-sm font-medium">{percentToGoal.toFixed(1)}%</span>
              </div>
              <Progress value={percentToGoal} className="h-3" />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Start: {startWeight} lbs</span>
              <span>Goal: {goalWeight} lbs</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add New Entry */}
      <Card>
        <CardHeader>
          <CardTitle>Log Weight</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Input type="date" />
            <Input type="number" placeholder="Weight (lbs)" />
            <Button onClick={handleAddEntry}>
              Add Entry
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Weight History */}
      <Card>
        <CardHeader>
          <CardTitle>Weight History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {entries.map((entry, idx) => {
              const prevWeight = idx > 0 ? entries[idx - 1].weight : entry.weight;
              const change = prevWeight - entry.weight;
              
              return (
                <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{entry.weight} lbs</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(entry.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {entry.note && (
                      <span className="text-sm text-muted-foreground italic">
                        {entry.note}
                      </span>
                    )}
                    {change > 0 && (
                      <Badge variant="default" className="gap-1">
                        <TrendingDown className="w-3 h-3" />
                        -{change} lbs
                      </Badge>
                    )}
                    {change < 0 && (
                      <Badge variant="secondary" className="gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +{Math.abs(change)} lbs
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
