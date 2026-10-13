import { LegalAgentConfig, LegalResearchMemo, AIMessage } from "@/types";

export const MOCK_LEGAL_AGENTS: LegalAgentConfig[] = [
  {
    id: "agent_research",
    name: "Indian Legal Research Agent",
    role: "Case Law & Statutory Discovery",
    iconName: "Search",
    description: "Autonomously searches Supreme Court and Kerala High Court judgments, cross-references central acts, and identifies conflicting ratios.",
    supportedInputs: ["Legal Proposition", "Fact Summary", "Specific Section/Act"],
    expectedOutputs: ["Authority Matrix", "Negative Treatment Report", "Precedent Summary"],
    requiredHumanReview: true,
    applicableJurisdiction: "India / Kerala",
    status: "ready",
  },
  {
    id: "agent_case_prep",
    name: "Matter & Case Prep Agent",
    role: "Litigation Strategy & Chronology",
    iconName: "Briefcase",
    description: "Extracts material chronological dates, constructs issue trees, maps opposing party arguments, and flags evidentiary gaps.",
    supportedInputs: ["Case Pleadings", "Lower Court Orders", "Factual Narrative"],
    expectedOutputs: ["Chronology Table", "Issue-Authority Map", "Evidentiary Checklist"],
    requiredHumanReview: true,
    applicableJurisdiction: "All Indian High Courts & District Courts",
    status: "ready",
  },
  {
    id: "agent_contract",
    name: "Contract & Risk Agent",
    role: "Clause Intelligence & Redlining",
    iconName: "FileCheck",
    description: "Analyzes commercial contracts, detects high-risk clauses (RED/YELLOW/GREEN), evaluates Indian Contract Act compliance, and drafts revisions.",
    supportedInputs: ["DOCX / PDF Contract", "Playbook Guidelines"],
    expectedOutputs: ["Risk Heatmap", "Perkins Eastman Flagging", "Redlined Revisions"],
    requiredHumanReview: true,
    applicableJurisdiction: "Indian Commercial Jurisdiction",
    status: "ready",
  },
  {
    id: "agent_drafting",
    name: "Pleadings & Notice Drafting Agent",
    role: "Structured Legal Drafting",
    iconName: "PenTool",
    description: "Drafts statutory legal notices, Section 21 arbitration notices, and Kerala High Court writ petition templates adhering to court conventions.",
    supportedInputs: ["Client Intake Facts", "Demand Amount", "Statutory Ground"],
    expectedOutputs: ["Draft Legal Notice", "Grounds of Petition", "Affidavit Format"],
    requiredHumanReview: true,
    applicableJurisdiction: "Kerala High Court & Civil Courts",
    status: "ready",
  },
  {
    id: "agent_verification",
    name: "Citation & Authority Verification Agent",
    role: "Hallucination Check & Shepardizing",
    iconName: "ShieldCheck",
    description: "Verifies whether cited case laws exist, checks overrulings, flags discordant bench opinions, and tags unverified citations.",
    supportedInputs: ["Draft Text", "Citation List"],
    expectedOutputs: ["Verification Score", "Overruled Status Warning", "Direct Quotes Verification"],
    requiredHumanReview: true,
    applicableJurisdiction: "Supreme Court & High Courts",
    status: "ready",
  }
];

export const MOCK_DEEP_RESEARCH_MEMO: LegalResearchMemo = {
  id: "memo_res_001",
  questionPresented: "Whether a land owner in Kerala can obtain an injunction against KSEB erecting a transmission line without District Magistrate permission under Section 16(1) of the Indian Telegraph Act, 1885?",
  jurisdiction: "High Court of Kerala (Ernakulam) & Indian Telegraph Act 1885",
  executiveSummary: "Under settled Kerala High Court jurisprudence, where a land owner raises an objection or resistance to the drawing of electricity transmission lines, the Telegraph Authority (KSEB) has no unilateral right to enter and must approach the District Magistrate under Section 16(1). The District Magistrate must conduct a quasi-judicial hearing granting the objector audi alteram partem.",
  shortAnswer: "Yes. In the presence of written objection, KSEB cannot enter without a District Magistrate order under Section 16(1). An order passed without personal hearing is liable to be set aside under Article 226.",
  materialFacts: [
    "Objector is the title holder in possession of agricultural land in Aluva taluk.",
    "KSEB issued route alignment notice dated 10-11-2023.",
    "Objector lodged formal objection before District Magistrate showing feasible alternate route along public road.",
    "Order passed ex-parte without inspecting alternate alignment or hearing the objector."
  ],
  issues: [
    "Whether Section 16(1) hearing is mandatory when objection is raised.",
    "Whether High Court will grant interim protection against line stringing pending Magistrate reconsideration."
  ],
  applicableStatutes: [
    "Indian Telegraph Act, 1885 - Section 10, Section 16(1)",
    "Electricity Act, 2003 - Section 67, Section 164",
    "Constitution of India - Article 226, Article 300A"
  ],
  leadingAuthorities: [
    {
      id: "cit_02",
      authorityName: "Valsamma v. Kerala State Electricity Board",
      citation: "(2011) 2 KLT 234",
      sourceType: "High Court of Kerala",
      status: "VALID",
      relevantExcerpt: "Section 16(1) enquiry is quasi-judicial in character and cannot be carried out ex-parte without hearing the affected land owner."
    },
    {
      id: "cit_sc_kseb",
      authorityName: "Power Grid Corporation of India v. Century Textiles & Industries Ltd.",
      citation: "(2017) 5 SCC 143",
      sourceType: "Supreme Court of India",
      status: "VALID",
      relevantExcerpt: "Powers under Section 10 are subject to procedure when obstruction is raised, requiring resolution under Section 16."
    }
  ],
  contraryAuthorities: [
    {
      id: "cit_contrary_01",
      authorityName: "Executive Engineer v. Devaki Amma",
      citation: "2006 (3) KLT 412",
      sourceType: "High Court of Kerala (Single Bench)",
      status: "PARTIALLY_VALID",
      relevantExcerpt: "Held that minor realignment objections cannot halt public interest transmission unless manifest mala fides are demonstrated. (Distinguished in later Division Bench rulings)."
    }
  ],
  analysis: "A harmonious reading of Section 10 and Section 16 reveals that the power of entry ceases to be unilateral the moment an owner resists. The District Magistrate acts not as an administrative agent but as an arbiter between private rights and public necessity. Non-consideration of alternative route proposals violates procedural fairness.",
  applicationToFacts: "In the client's case, the failure to serve notice of hearing and non-examination of the PWD road survey sketch renders the District Magistrate's order vulnerable to certiorari.",
  uncertainties: [
    "If transmission line erection has already physically completed on neighboring plots, courts may restrict relief to expedited compensation rather than alignment variation."
  ],
  conclusion: "The petitioner has a strong prima facie case for admission and continuation of interim stay before the High Court of Kerala.",
  disclaimer: "AI-generated legal information for research and assistance. It is not a substitute for advice from a qualified legal professional.",
  advocateSignOffRequired: true,
  isSampleDemonstration: true,
};

export const MOCK_COPILOT_SAMPLE_MESSAGES: AIMessage[] = [
  {
    id: "msg_01",
    sender: "assistant",
    timestamp: "2024-10-25T11:00:00Z",
    mode: "Ask",
    content: "Welcome to Wakheel Legal Copilot. I can assist in researching Indian case law, analyzing contracts under Indian law, outlining litigation chronologies, or drafting legal notices. What legal question or document would you like to examine today?",
    verificationNotice: "AI-generated legal information for research and assistance. It is not a substitute for advice from a qualified legal professional.",
    isSimulatedDemo: true,
  }
];
