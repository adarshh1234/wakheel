import { AdvocateProfile } from "./user";

export type AdvocateSpecialization = 
  | "Constitutional Law"
  | "Criminal Defense"
  | "Civil Litigation"
  | "Corporate & Commercial"
  | "Property & Real Estate"
  | "Family & Matrimonial"
  | "Banking & Insolvency"
  | "Consumer Protection"
  | "Labour & Employment"
  | "Taxation & GST"
  | "Intellectual Property"
  | "Cyber & Data Privacy";

export interface AdvocateFilterParams {
  searchQuery?: string;
  practiceArea?: string;
  state?: string;
  city?: string;
  court?: string;
  language?: string;
  minExperience?: number;
  availableOnly?: boolean;
  consultationMode?: "video" | "phone" | "in_person";
}

export interface AdvocateReview {
  id: string;
  clientName: string;
  rating: number;
  date: string;
  comment: string;
  practiceArea: string;
}

export type { AdvocateProfile };
