import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, TrendingUp } from "lucide-react";
import { VideoSchema } from "@/components/seo/VideoSchema";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  uploadDate: string;
}

const videos: Video[] = [
  {
    id: "how-semaglutide-works",
    title: "How Semaglutide Works for Weight Loss",
    description: "Dr. Sarah explains the science behind GLP-1 medications and how they help you lose weight safely and effectively.",
    thumbnail: "/placeholder.svg",
    duration: "8:45",
    category: "Education",
    uploadDate: "2024-01-15"
  },
  {
    id: "patient-success-story",
    title: "Sarah's 50lb Weight Loss Journey",
    description: "Real patient Sarah shares her incredible transformation story using physician-guided semaglutide treatment.",
    thumbnail: "/placeholder.svg",
    duration: "12:30",
    category: "Success Stories",
    uploadDate: "2024-01-10"
  },
  {
    id: "injection-tutorial",
    title: "How to Self-Inject Semaglutide Safely",
    description: "Step-by-step guide from our medical team on proper injection technique for best results.",
    thumbnail: "/placeholder.svg",
    duration: "6:20",
    category: "How-To",
    uploadDate: "2024-01-05"
  },
  {
    id: "side-effects-management",
    title: "Managing Side Effects: Tips from Doctors",
    description: "Our physicians share practical advice on minimizing and managing common GLP-1 side effects.",
    thumbnail: "/placeholder.svg",
    duration: "10:15",
    category: "Medical Advice",
    uploadDate: "2024-01-01"
  }
];

export const VideoSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Video Library</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn From Our Medical Experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch educational videos, patient success stories, and expert medical advice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id}>
              <VideoSchema
                name={video.title}
                description={video.description}
                thumbnailUrl={`https://trytrimi.com${video.thumbnail}`}
                uploadDate={video.uploadDate}
                duration={`PT${video.duration.replace(':', 'M')}S`}
                embedUrl={`https://trytrimi.com/videos/${video.id}`}
              />
              
              <Card className="hover:shadow-lg transition-all cursor-pointer group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Play className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {video.duration}
                  </div>
                  <Badge className="absolute top-2 left-2">{video.category}</Badge>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="#" 
            className="text-primary hover:underline font-medium inline-flex items-center gap-2"
          >
            View All Videos
            <TrendingUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
