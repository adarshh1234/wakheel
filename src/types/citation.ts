export type CitationVerificationStatus = 
  | "VALID" 
  | "PARTIALLY_VALID" 
  | "NOT_FOUND" 
  | "CONFLICTING" 
  | "UNVERIFIED";

export interface CitationVerificationRecord {
  id: string;
  citationString: string; // e.g. "AIR 2021 SC 1422" or "(2020) 4 KLT 389"
  caseName: string;
  court: string;
  year: number;
  bench?: string;
  relevantSectionOrPara: string;
  sourceAuthority: string;
  status: CitationVerificationStatus;
  statusExplanation: string;
  verifiedAt: string;
  citingCasesCount?: number;
  conflictingAuthorities?: string[];
  treatment: "Followed" | "Distinguished" | "Overruled" | "Doubted" | "Pending Consideration" | "Unverified";
  isSampleDemonstration: true;
}
