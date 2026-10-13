import { CitationVerificationStatus } from "./citation";

export type LegalSourceType = 
  | "CONSTITUTION"
  | "CENTRAL_ACT"
  | "STATE_ACT"
  | "RULES_REGULATIONS"
  | "NOTIFICATION_CIRCULAR"
  | "SUPREME_COURT_JUDGMENT"
  | "HIGH_COURT_JUDGMENT"
  | "TRIBUNAL_ORDER"
  | "OFFICIAL_GAZETTE"
  | "USER_AUTHORITY";

export interface LegalAuthoritySource {
  id: string;
  title: string;
  shortTitle: string;
  sourceType: LegalSourceType;
  citation: string;
  courtOrBody: string;
  jurisdiction: string;
  decisionOrEnactmentDate: string;
  benchOrAuthority?: string;
  parties?: {
    petitionerOrAppellant: string;
    respondent: string;
  };
  actReference?: {
    actName: string;
    actYear: number;
    section: string;
  };
  keyLegalTopics: string[];
  headnotesSummary: string;
  snippetMatch?: string;
  verificationStatus: CitationVerificationStatus;
  isSampleRecord: true;
  fullTextSample?: string;
  paragraphs?: {
    paraNumber: number;
    text: string;
    isKeyHolding?: boolean;
  }[];
}

export interface LegalSearchFilter {
  query: string;
  sourceType?: LegalSourceType | "ALL";
  court?: string;
  state?: string;
  yearFrom?: number;
  yearTo?: number;
  judgeName?: string;
  actName?: string;
  section?: string;
  topic?: string;
}
