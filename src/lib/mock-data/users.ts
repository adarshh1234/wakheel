import { ClientProfile, AdvocateProfile, AdminProfile, KnowledgeAdminProfile } from "@/types";

export const DEMO_CLIENT_USER: ClientProfile = {
  id: "usr_client_01",
  name: "Gopakumar Nambiar",
  email: "gopakumar.client@example.com",
  phone: "+91 98470 12345",
  role: "client",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  location: {
    city: "Kochi",
    state: "Kerala",
    country: "India",
  },
  preferredLanguage: "en",
  createdAt: "2024-01-15T10:00:00Z",
  verified: true,
  activeMattersCount: 3,
  consultationsCount: 5,
};

export const DEMO_ADVOCATE_USER: AdvocateProfile = {
  id: "adv_kerala_01",
  name: "Adv. Meera Krishnan",
  email: "meera.krishnan@advocate.in",
  phone: "+91 94471 98765",
  role: "advocate",
  avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  location: {
    city: "Ernakulam",
    state: "Kerala",
    country: "India",
  },
  preferredLanguage: "en",
  createdAt: "2023-08-20T11:30:00Z",
  verified: true,
  barCouncilNumber: "K/1429/2012",
  stateBarCouncil: "Bar Council of Kerala",
  enrollmentYear: 2012,
  experienceYears: 13,
  primaryCourts: [
    "High Court of Kerala",
    "District & Sessions Court, Ernakulam",
    "National Company Law Tribunal (NCLT Kochi Bench)"
  ],
  practiceAreas: [
    "Constitutional Law",
    "Corporate & Commercial",
    "Civil Litigation",
    "Property & Real Estate",
    "Arbitration"
  ],
  languages: ["English", "Malayalam", "Hindi"],
  firmName: "Krishnan & Associates Legal Chambers",
  designation: "Senior Managing Advocate",
  bio: "Advocate practicing before the High Court of Kerala and subordinate courts with 13 years standing. Specializes in commercial disputes, land acquisition, writ petitions, and constitutional remedies.",
  rating: 4.9,
  reviewCount: 38,
  isAvailableForConsultation: true,
  consultationModes: ["video", "phone", "in_person"],
  consultationFeeINR: 2500,
  verificationStatus: "verified",
};

export const DEMO_ADMIN_USER: AdminProfile = {
  id: "admin_platform_01",
  name: "Rajesh Varma",
  email: "admin@wakheel.com",
  phone: "+91 98950 00112",
  role: "admin",
  location: {
    city: "Thiruvananthapuram",
    state: "Kerala",
    country: "India",
  },
  preferredLanguage: "en",
  createdAt: "2023-01-01T00:00:00Z",
  verified: true,
  permissions: ["manage_users", "verify_advocates", "audit_logs", "system_health", "platform_billing"],
  department: "Platform Trust & Governance",
};

export const DEMO_KNOWLEDGE_ADMIN_USER: KnowledgeAdminProfile = {
  id: "kadmin_curator_01",
  name: "Dr. Arundhati Menon",
  email: "knowledge.admin@wakheel.com",
  phone: "+91 94960 55443",
  role: "knowledge_admin",
  location: {
    city: "New Delhi",
    state: "Delhi",
    country: "India",
  },
  preferredLanguage: "en",
  createdAt: "2023-03-10T09:00:00Z",
  verified: true,
  jurisdictionAssigned: ["Supreme Court of India", "High Court of Kerala", "Central Acts"],
  curationPermissions: ["statute_ingestion", "citation_graph_editor", "vector_reindex_trigger", "source_review_queue"],
};
