import { VaultDocument } from "@/types";

export const MOCK_VAULT_DOCUMENTS: VaultDocument[] = [
  {
    id: "doc_01",
    title: "KSEB Route Alignment Notice & Survey Sketch",
    fileName: "KSEB_Survey_Notice_2023_Aluva.pdf",
    fileSize: "3.4 MB",
    fileType: "pdf",
    category: "Notices",
    matterId: "mat_ker_01",
    matterTitle: "WP(C) 19482/2024 - Gopakumar Nambiar v. KSEB",
    ownerName: "Adv. Meera Krishnan",
    uploadedAt: "2024-06-12T10:15:00Z",
    version: 1,
    processingStage: "ANALYZED",
    overallRisk: "YELLOW",
    ocrCompleted: true,
    pageCount: 14,
    tags: ["Statutory Notice", "Telegraph Act", "Kerala High Court"],
    isConfidential: true,
    advocateReviewStatus: "APPROVED",
    versionsTree: [
      {
        versionNumber: 1,
        createdAt: "2024-06-12T10:15:00Z",
        uploadedBy: "Adv. Meera Krishnan",
        changesSummary: "Original certified document scan from Ernakulam DM office.",
        riskLevel: "YELLOW",
        commentsCount: 2,
      }
    ],
    clauses: [
      {
        id: "cl_01",
        clauseTitle: "Power of Telegraph Authority to place and maintain lines",
        clauseText: "In exercise of powers conferred under Section 10 of the Indian Telegraph Act, 1885 read with Section 164 of the Electricity Act, 2003...",
        pageNumber: 2,
        riskLevel: "YELLOW",
        riskExplanation: "Notice fails to mention statutory right of objection under Section 16 before District Magistrate prior to entry.",
        suggestedRevision: "Point out jurisdictional defect under Section 16(1) in the Writ grounds.",
        advocateApproved: true,
      }
    ]
  },
  {
    id: "doc_04",
    title: "Master Software Services Agreement (Malabar Infotech)",
    fileName: "MSA_Malabar_Coastal_2023_Signed.pdf",
    fileSize: "2.1 MB",
    fileType: "pdf",
    category: "Agreements",
    matterId: "mat_ker_02",
    matterTitle: "Commercial Arbitration / Malabar Infotech",
    ownerName: "Gopakumar Nambiar",
    uploadedAt: "2024-08-01T14:30:00Z",
    version: 2,
    processingStage: "ANALYZED",
    overallRisk: "RED",
    ocrCompleted: true,
    pageCount: 22,
    tags: ["Contract Intelligence", "Arbitration Clause", "Indemnity"],
    isConfidential: true,
    advocateReviewStatus: "IN_REVIEW",
    versionsTree: [
      {
        versionNumber: 2,
        createdAt: "2024-08-05T11:00:00Z",
        uploadedBy: "Adv. Meera Krishnan",
        changesSummary: "Marked clause 14 unilateral arbitrator nomination clause as invalid under Perkins Eastman principles.",
        riskLevel: "RED",
        commentsCount: 4,
      },
      {
        versionNumber: 1,
        createdAt: "2024-08-01T14:30:00Z",
        uploadedBy: "Gopakumar Nambiar",
        changesSummary: "Initial contract copy uploaded by client.",
        riskLevel: "RED",
        commentsCount: 0,
      }
    ],
    clauses: [
      {
        id: "cl_14",
        clauseTitle: "Clause 14.2: Dispute Resolution and Sole Arbitrator",
        clauseText: "Any dispute arising hereunder shall be referred to a sole arbitrator appointed exclusively by the Managing Director of Coastal Logistics Services Ltd...",
        pageNumber: 18,
        riskLevel: "RED",
        riskExplanation: "Unilateral appointment clause is void ab initio under Section 12(5) read with Seventh Schedule of Arbitration and Conciliation Act (Perkins Eastman SC 2019).",
        suggestedRevision: "Invoke Section 11(6) before the High Court of Kerala for appointment of an independent sole arbitrator.",
        advocateApproved: true,
      },
      {
        id: "cl_09",
        clauseTitle: "Clause 9.1: Limitation of Liability Cap",
        clauseText: "In no event shall Service Provider's aggregate liability exceed 50% of the total fees paid in the immediately preceding 3 months...",
        pageNumber: 11,
        riskLevel: "GREEN",
        riskExplanation: "Liability cap is commercially protective and compliant with Indian Contract Act 1872 Section 73.",
        advocateApproved: true,
      }
    ]
  }
];
