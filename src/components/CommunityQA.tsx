import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageCircle, CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  author: string;
  verified: boolean;
  question: string;
  category: string;
  answers: number;
  likes: number;
  time: string;
  answered: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    author: "Jennifer M.",
    verified: true,
    question: "When do most people start seeing results with semaglutide?",
    category: "Results",
    answers: 12,
    likes: 48,
    time: "2 hours ago",
    answered: true
  },
  {
    id: 2,
    author: "Michael R.",
    verified: true,
    question: "Best tips for managing nausea during the first week?",
    category: "Side Effects",
    answers: 23,
    likes: 67,
    time: "5 hours ago",
    answered: true
  },
  {
    id: 3,
    author: "Sarah L.",
    verified: true,
    question: "Can I exercise on the same day as my injection?",
    category: "Lifestyle",
    answers: 8,
    likes: 34,
    time: "1 day ago",
    answered: true
  },
  {
    id: 4,
    author: "David K.",
    verified: false,
    question: "How do I store my medication when traveling?",
    category: "Medication",
    answers: 15,
    likes: 52,
    time: "2 days ago",
    answered: true
  }
];

export const CommunityQA = () => {
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "Results", "Side Effects", "Lifestyle", "Medication", "Diet"];

  const filteredQuestions = selectedCategory && selectedCategory !== "All"
    ? questions.filter(q => q.category === selectedCategory)
    : questions;

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your question has been submitted! The community will answer soon.");
    setShowQuestionForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">Community Q&A</h2>
          <p className="text-muted-foreground">
            Get answers from patients and medical professionals
          </p>
        </div>
        <Button onClick={() => setShowQuestionForm(!showQuestionForm)}>
          Ask a Question
        </Button>
      </div>

      {/* Question Form */}
      {showQuestionForm && (
        <Card>
          <CardHeader>
            <CardTitle>Ask Your Question</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitQuestion} className="space-y-4">
              <Input placeholder="Your name" required />
              <select className="w-full p-2 border rounded-md">
                <option>Select Category</option>
                {categories.filter(c => c !== "All").map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <Textarea 
                placeholder="What would you like to know?" 
                rows={4}
                required
              />
              <Button type="submit" className="w-full">Submit Question</Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category || (!selectedCategory && category === "All") ? "default" : "outline"}
            onClick={() => setSelectedCategory(category === "All" ? null : category)}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map(q => (
          <Card key={q.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-medium">{q.author}</span>
                    {q.verified && (
                      <Badge variant="secondary" className="gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Patient
                      </Badge>
                    )}
                    <Badge variant="outline">{q.category}</Badge>
                    {q.answered && (
                      <Badge className="gap-1 bg-green-500">
                        <CheckCircle2 className="w-3 h-3" />
                        Answered
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {q.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {q.answers} answers
                    </span>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {q.likes}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">
          Load More Questions
        </Button>
      </div>
    </div>
  );
};
