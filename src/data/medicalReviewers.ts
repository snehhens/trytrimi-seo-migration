export interface MedicalReviewer {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  bio: string;
  avatarUrl?: string;
}

export interface Author {
  id: string;
  name: string;
  credentials?: string;
  bio: string;
  avatarUrl?: string;
}

export const medicalReviewers: Record<string, MedicalReviewer> = {
  drSarah: {
    id: "drSarah",
    name: "Dr. Sarah Chen",
    credentials: "MD, Board Certified in Endocrinology",
    specialty: "Endocrinology & Metabolic Disorders",
    bio: "Dr. Chen is a board-certified endocrinologist with over 12 years of experience specializing in obesity medicine and metabolic health. She has published research on GLP-1 medications and regularly treats patients with semaglutide and tirzepatide."
  },
  drMichael: {
    id: "drMichael",
    name: "Dr. Michael Rodriguez",
    credentials: "MD, FACP, Board Certified in Internal Medicine",
    specialty: "Internal Medicine & Weight Management",
    bio: "Dr. Rodriguez is a board-certified internist with subspecialty training in obesity medicine. He has prescribed GLP-1 medications to over 500 patients and focuses on evidence-based weight management approaches."
  },
  drEmily: {
    id: "drEmily",
    name: "Dr. Emily Thompson",
    credentials: "PharmD, Clinical Pharmacist",
    specialty: "Clinical Pharmacy & Medication Safety",
    bio: "Dr. Thompson is a clinical pharmacist specializing in metabolic medications and patient safety. She provides medication therapy management for complex cases and educates healthcare providers on GLP-1 medication protocols."
  }
};

export const authors: Record<string, Author> = {
  trimiMedical: {
    id: "trimiMedical",
    name: "Trimi Medical Team",
    bio: "Our team of healthcare professionals specializes in weight management and metabolic health, providing evidence-based information to help you make informed decisions about your health journey.",
  },
  clinicalWriter: {
    id: "clinicalWriter",
    name: "Trimi Clinical Content Team",
    credentials: "Medical Writers & Healthcare Professionals",
    bio: "Our clinical content team includes registered nurses, pharmacists, and medical writers who specialize in translating complex medical information into clear, actionable guidance for patients."
  }
};

export const getMedicalReviewer = (id: string): MedicalReviewer | undefined => {
  return medicalReviewers[id];
};

export const getAuthor = (id: string): Author | undefined => {
  return authors[id];
};
