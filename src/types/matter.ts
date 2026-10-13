export type MatterStatus = 
  | "intake" 
  | "pre_filing" 
  | "filed" 
  | "admitted" 
  | "evidence_stage" 
  | "arguments" 
  | "reserved_for_orders" 
  | "disposed" 
  | "appeal_pending";

export type MatterPriority = "urgent" | "high" | "medium" | "low";

export interface MatterFact {
  id: string;
  date: string;
  description: string;
  supportingDocId?: string;
  isDisputed: boolean;
  verifiedByAdvocate: boolean;
}

export interface MatterIssue {
  id: string;
  issueStatement: string;
  applicableLaw: string;
  petitionerStance: string;
  respondentStance: string;
  supportingAuthorities: string[];
  status: "open" | "settled" | "in_arguments";
}

export interface MatterHearing {
  id: string;
  date: string;
  time: string;
  courtRoom: string;
  judgeBench: string;
  purpose: string;
  previousOrderSummary?: string;
  outcome?: string;
  status: "scheduled" | "completed" | "adjourned";
}

export interface MatterTask {
  id: string;
  title: string;
  dueDate: string;
  assignedTo: string;
  priority: MatterPriority;
  status: "pending" | "in_progress" | "review" | "completed";
}

export interface LegalMatter {
  id: string;
  matterNumber: string; // e.g. "WP(C) 19482/2024" or "MAT-KER-2024-089"
  title: string;
  matterType: string; // e.g. "Writ Petition", "Civil Appeal", "Property Injunction", "Arbitration"
  clientId: string;
  clientName: string;
  clientPhone: string;
  assignedAdvocateId: string;
  assignedAdvocateName: string;
  court: string;
  jurisdiction: string;
  state: string;
  filingDate: string;
  status: MatterStatus;
  priority: MatterPriority;
  opposingParty: {
    name: string;
    advocateName?: string;
    entityType: "Individual" | "Corporate" | "State Government" | "Public Authority";
  };
  facts: MatterFact[];
  issues: MatterIssue[];
  hearings: MatterHearing[];
  tasks: MatterTask[];
  documentCount: number;
  lastUpdated: string;
  aiInsightsCount: number;
  reviewStatus: "advocate_reviewed" | "draft_pending" | "client_approval_pending";
}
