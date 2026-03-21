import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Building2, CheckCircle } from "lucide-react";

export const DoctorCredentials = () => {
  const doctors = [
    {
      name: "Dr. Sarah Mitchell, MD",
      title: "Medical Director",
      credentials: "Board Certified Internal Medicine",
      education: "Harvard Medical School",
      experience: "15+ years"
    },
    {
      name: "Dr. James Patterson, DO",
      title: "Chief Medical Officer",
      credentials: "Board Certified Family Medicine",
      education: "Stanford School of Medicine",
      experience: "12+ years"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Care Led by Board-Certified Physicians
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your health is in expert hands. All prescriptions are reviewed and approved by licensed, 
            board-certified medical providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-primary font-medium">{doctor.title}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Credentials</p>
                      <p className="text-sm text-muted-foreground">{doctor.credentials}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Education</p>
                      <p className="text-sm text-muted-foreground">{doctor.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Experience</p>
                      <p className="text-sm text-muted-foreground">{doctor.experience} in weight management</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-semibold mb-4 text-center">Our Medical Team's Commitment</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Personalized treatment plans for every patient</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Ongoing monitoring and support throughout your journey</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Evidence-based approach to weight management</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Licensed and available in all 50 states</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
