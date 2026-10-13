import { CitationVerificationStatus } from "./citation";

export type AICopilotMode = 
  | "Ask" 
  | "Research" 
  | "Analyze" 
  | "Draft" 
  | "Review" 
  | "Compare" 
  | "Summarize" 
  | "Extract" 
  | "Explain" 
  | "Plan" 
  | "Verify";

export interface AISourceCitation {
  id: string;
  authorityName: string;
  citation: string;
  sourceType: string;
  status: CitationVerificationStatus;
  relevantExcerpt: string;
}

export interface AIMessage {
  id: string;
  sender: "user" | "assistant";
  timestamp: string;
  mode: AICopilotMode;
  content: string;
  materialFacts?: string[];
  applicableIssues?: string[];
  authorities?: AISourceCitation[];
  analysis?: string;
  uncertainties?: string[];
  missingInformation?: string[];
  suggestedNextSteps?: string[];
  verificationNotice: string;
  isSimulatedDemo: true;
}

export interface DeepResearchStep {
  stepNumber: number;
  title: string;
  description: string;
  status: "completed" | "in_progress" | "pending";
  findingsCount?: number;
}

export interface LegalResearchMemo {
  id: string;
  questionPresented: string;
  jurisdiction: string;
  executiveSummary: string;
  shortAnswer: string;
  materialFacts: string[];
  issues: string[];
  applicableStatutes: string[];
  leadingAuthorities: AISourceCitation[];
  contraryAuthorities: AISourceCitation[];
  analysis: string;
  applicationToFacts: string;
  uncertainties: string[];
  conclusion: string;
  disclaimer: string;
  advocateSignOffRequired: boolean;
  isSampleDemonstration: true;
}

export interface LegalAgentConfig {
  id: string;
  name: string;
  role: string;
  iconName: string;
  description: string;
  supportedInputs: string[];
  expectedOutputs: string[];
  requiredHumanReview: boolean;
  applicableJurisdiction: string;
  status: "ready" | "running" | "idle";
}
