export type DocumentRiskLevel = "RED" | "YELLOW" | "GREEN";

export type DocumentProcessingStage = 
  | "UPLOADED" 
  | "SECURITY_SCAN_PASSED" 
  | "OCR_PROCESSED" 
  | "TEXT_EXTRACTED" 
  | "CLASSIFIED" 
  | "METADATA_EXTRACTED" 
  | "EMBEDDING_READY" 
  | "ANALYZED";

export interface DocumentClause {
  id: string;
  clauseTitle: string;
  clauseText: string;
  pageNumber: number;
  riskLevel: DocumentRiskLevel;
  riskExplanation: string;
  suggestedRevision?: string;
  advocateApproved: boolean;
}

export interface DocumentVersion {
  versionNumber: number;
  createdAt: string;
  uploadedBy: string;
  changesSummary: string;
  riskLevel: DocumentRiskLevel;
  commentsCount: number;
}

export interface VaultDocument {
  id: string;
  title: string;
  fileName: string;
  fileSize: string;
  fileType: "pdf" | "docx" | "image" | "scan";
  category: "Pleadings" | "Agreements" | "Evidence" | "Notices" | "Orders" | "Client KYC";
  matterId?: string;
  matterTitle?: string;
  ownerName: string;
  uploadedAt: string;
  version: number;
  processingStage: DocumentProcessingStage;
  overallRisk: DocumentRiskLevel;
  ocrCompleted: boolean;
  pageCount: number;
  clauses?: DocumentClause[];
  versionsTree?: DocumentVersion[];
  tags: string[];
  isConfidential: boolean;
  advocateReviewStatus: "UNREVIEWED" | "IN_REVIEW" | "APPROVED" | "FLAGGED";
}
