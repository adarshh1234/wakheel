export type UserRole = "client" | "advocate" | "admin" | "knowledge_admin";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatarUrl?: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  preferredLanguage: "en" | "ml" | "hi" | "ta" | "kn";
  createdAt: string;
  verified: boolean;
}

export interface ClientProfile extends UserProfile {
  role: "client";
  activeMattersCount: number;
  consultationsCount: number;
}

export interface AdvocateProfile extends UserProfile {
  role: "advocate";
  barCouncilNumber: string; // e.g. "K/1248/2014" (Kerala)
  stateBarCouncil: string;
  enrollmentYear: number;
  experienceYears: number;
  primaryCourts: string[];
  practiceAreas: string[];
  languages: string[];
  firmName?: string;
  designation?: string;
  bio: string;
  rating?: number;
  reviewCount?: number;
  isAvailableForConsultation: boolean;
  consultationModes: ("video" | "phone" | "in_person")[];
  consultationFeeINR: number;
  verificationStatus: "verified" | "pending" | "under_review" | "rejected";
}

export interface AdminProfile extends UserProfile {
  role: "admin";
  permissions: string[];
  department: string;
}

export interface KnowledgeAdminProfile extends UserProfile {
  role: "knowledge_admin";
  jurisdictionAssigned: string[];
  curationPermissions: string[];
}
