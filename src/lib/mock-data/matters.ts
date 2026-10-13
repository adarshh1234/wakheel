import { LegalMatter } from "@/types";

export const MOCK_MATTERS: LegalMatter[] = [
  {
    id: "mat_ker_01",
    matterNumber: "WP(C) 19482/2024",
    title: "Gopakumar Nambiar v. Kerala State Electricity Board & Ors.",
    matterType: "Writ Petition (Civil)",
    clientId: "usr_client_01",
    clientName: "Gopakumar Nambiar",
    clientPhone: "+91 98470 12345",
    assignedAdvocateId: "adv_kerala_01",
    assignedAdvocateName: "Adv. Meera Krishnan",
    court: "High Court of Kerala (Ernakulam Bench)",
    jurisdiction: "Kerala, India",
    state: "Kerala",
    filingDate: "2024-06-14",
    status: "admitted",
    priority: "high",
    opposingParty: {
      name: "Kerala State Electricity Board Ltd (KSEB)",
      advocateName: "Standing Counsel for KSEB",
      entityType: "Public Authority"
    },
    facts: [
      {
        id: "fact_01",
        date: "2023-11-10",
        description: "Petitioner received high-tension transmission line realignment demand notice impacting commercial agricultural holding in Aluva taluk.",
        supportingDocId: "doc_01",
        isDisputed: false,
        verifiedByAdvocate: true,
      },
      {
        id: "fact_02",
        date: "2024-01-22",
        description: "Representation submitted before the District Magistrate under Section 16(1) of Indian Telegraph Act, 1885.",
        supportingDocId: "doc_02",
        isDisputed: false,
        verifiedByAdvocate: true,
      },
      {
        id: "fact_03",
        date: "2024-05-18",
        description: "District Magistrate passed order without granting personal hearing to petitioner or considering alternate feasible route survey report.",
        supportingDocId: "doc_03",
        isDisputed: true,
        verifiedByAdvocate: true,
      }
    ],
    issues: [
      {
        id: "iss_01",
        issueStatement: "Whether the order passed by the District Magistrate violates principles of natural justice by denying statutory hearing under Sec 16 of Indian Telegraph Act.",
        applicableLaw: "Indian Telegraph Act 1885 Section 16(1), Electricity Act 2003 Section 67",
        petitionerStance: "Order is vitiated by gross non-compliance with audi alteram partem; viable alternative alignment ignored.",
        respondentStance: "Public utility project has overriding priority and notice was affixed in village office.",
        supportingAuthorities: ["(2011) 2 KLT 234", "AIR 2017 SC 1120"],
        status: "in_arguments",
      },
      {
        id: "iss_02",
        issueStatement: "Whether interim stay of tree-felling and foundation work should continue pending independent PWD route inspection.",
        applicableLaw: "Article 226 of the Constitution of India",
        petitionerStance: "Irreparable injury would result if standing nutmeg plantation is felled before route adjudication.",
        respondentStance: "Delay increases project cost for public exchequer.",
        supportingAuthorities: ["2020 (3) KHC 551"],
        status: "open",
      }
    ],
    hearings: [
      {
        id: "hr_01",
        date: "2024-07-02",
        time: "10:30 AM",
        courtRoom: "Court Hall 4B",
        judgeBench: "Hon'ble Justice K. Haripal",
        purpose: "Admission & Interim Relief Hearing",
        previousOrderSummary: "Notice issued to respondent No. 1 and 2.",
        outcome: "Interim stay granted against coercive felling until next posting date.",
        status: "completed",
      },
      {
        id: "hr_02",
        date: "2024-11-20",
        time: "11:15 AM",
        courtRoom: "Court Hall 4B",
        judgeBench: "Hon'ble Justice K. Haripal",
        purpose: "Final Arguments & Counter Affidavit Consideration",
        previousOrderSummary: "Interim stay extended. Counter affidavit filed by respondent board.",
        status: "scheduled",
      }
    ],
    tasks: [
      {
        id: "tsk_01",
        title: "Draft Reply Affidavit to KSEB Counter",
        dueDate: "2024-11-12",
        assignedTo: "Adv. Meera Krishnan",
        priority: "high",
        status: "in_progress",
      },
      {
        id: "tsk_02",
        title: "Obtain certified copy of alternate route PWD sketch",
        dueDate: "2024-11-15",
        assignedTo: "Gopakumar Nambiar",
        priority: "medium",
        status: "pending",
      }
    ],
    documentCount: 8,
    lastUpdated: "2024-10-25T14:20:00Z",
    aiInsightsCount: 6,
    reviewStatus: "advocate_reviewed",
  },
  {
    id: "mat_ker_02",
    matterNumber: "ARB/NCLT/KOCHI/2024/041",
    title: "Malabar Infotech Solutions v. Coastal Logistics Services Ltd",
    matterType: "Commercial Arbitration / Insolvency Petition",
    clientId: "usr_client_01",
    clientName: "Gopakumar Nambiar (Director, Malabar Infotech)",
    clientPhone: "+91 98470 12345",
    assignedAdvocateId: "adv_kerala_01",
    assignedAdvocateName: "Adv. Meera Krishnan",
    court: "National Company Law Tribunal (Kochi Bench)",
    jurisdiction: "Ernakulam, Kerala",
    state: "Kerala",
    filingDate: "2024-08-01",
    status: "pre_filing",
    priority: "urgent",
    opposingParty: {
      name: "Coastal Logistics Services Ltd",
      advocateName: "Senior Counsel Anantharaman",
      entityType: "Corporate"
    },
    facts: [
      {
        id: "fact_21",
        date: "2023-04-10",
        description: "Master Software Services Agreement executed with explicit Section 21 Arbitration clause seated in Kochi.",
        supportingDocId: "doc_04",
        isDisputed: false,
        verifiedByAdvocate: true,
      },
      {
        id: "fact_22",
        date: "2024-05-15",
        description: "Invoices totaling INR 42,50,000 defaulted beyond 90-day contractual credit period.",
        supportingDocId: "doc_05",
        isDisputed: false,
        verifiedByAdvocate: true,
      }
    ],
    issues: [
      {
        id: "iss_21",
        issueStatement: "Whether Section 9 interim measures application before Commercial Court or Section 11 arbitrator appointment petition before Kerala High Court is optimal forum.",
        applicableLaw: "Arbitration & Conciliation Act 1996, Commercial Courts Act 2015",
        petitionerStance: "Bank guarantees must be secured under Section 9 prior to arbitrator appointment.",
        respondentStance: "Claims are pre-mature and disputed on service delivery quality.",
        supportingAuthorities: ["(2021) 5 SCC 671"],
        status: "open",
      }
    ],
    hearings: [],
    tasks: [
      {
        id: "tsk_21",
        title: "Draft Section 21 Statutory Notice of Arbitration",
        dueDate: "2024-11-05",
        assignedTo: "Adv. Meera Krishnan",
        priority: "urgent",
        status: "review",
      }
    ],
    documentCount: 14,
    lastUpdated: "2024-10-28T09:40:00Z",
    aiInsightsCount: 9,
    reviewStatus: "draft_pending",
  }
];
