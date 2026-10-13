import { LegalAuthoritySource } from "@/types";

export const MOCK_LEGAL_SOURCES: LegalAuthoritySource[] = [
  {
    id: "src_sc_01",
    title: "Perkins Eastman Architects DPC & Anr. v. HSCC (India) Ltd.",
    shortTitle: "Perkins Eastman v. HSCC",
    sourceType: "SUPREME_COURT_JUDGMENT",
    citation: "AIR 2020 SC 59 : (2020) 20 SCC 760",
    courtOrBody: "Supreme Court of India",
    jurisdiction: "Supreme Court (New Delhi)",
    decisionOrEnactmentDate: "2019-11-26",
    benchOrAuthority: "Hon'ble U.U. Lalit & Indu Malhotra, JJ.",
    parties: {
      petitionerOrAppellant: "Perkins Eastman Architects DPC",
      respondent: "HSCC (India) Ltd."
    },
    actReference: {
      actName: "Arbitration and Conciliation Act, 1996",
      actYear: 1996,
      section: "Section 11(6), Section 12(5)"
    },
    keyLegalTopics: ["Arbitration", "Unilateral Appointment", "Impartiality of Arbitrator"],
    headnotesSummary: "A person who is ineligible to act as an arbitrator cannot nominate an arbitrator. Independence and impartiality are the hallmarks of arbitration; unilateral appointment clauses violate Section 12(5).",
    snippetMatch: "Held that a party having an interest in the outcome of the dispute cannot be given the sole power to appoint an arbitrator.",
    verificationStatus: "VALID",
    isSampleRecord: true,
    fullTextSample: "Sample demonstration record: Supreme Court held that the right to appoint an independent sole arbitrator cannot be exercised unilaterally by one party holding stake in the outcome...",
    paragraphs: [
      {
        paraNumber: 21,
        text: "The independence of an arbitrator is paramount. A person having an interest in the outcome of the dispute is disqualified from acting as an arbitrator or appointing one.",
        isKeyHolding: true,
      },
      {
        paraNumber: 22,
        text: "In eligible appointments under Section 11(6), the High Court or Supreme Court steps in to ensure an unbiased arbitral tribunal.",
        isKeyHolding: false,
      }
    ]
  },
  {
    id: "src_ker_01",
    title: "Valsamma v. Kerala State Electricity Board",
    shortTitle: "Valsamma v. KSEB",
    sourceType: "HIGH_COURT_JUDGMENT",
    citation: "(2011) 2 KLT 234 : 2011 (2) KLJ 112",
    courtOrBody: "High Court of Kerala",
    jurisdiction: "Kerala High Court (Ernakulam)",
    decisionOrEnactmentDate: "2011-03-15",
    benchOrAuthority: "Hon'ble Thottathil B. Radhakrishnan, J.",
    parties: {
      petitionerOrAppellant: "Valsamma",
      respondent: "Kerala State Electricity Board & District Magistrate"
    },
    actReference: {
      actName: "Indian Telegraph Act, 1885",
      actYear: 1885,
      section: "Section 16(1)"
    },
    keyLegalTopics: ["Telegraph Act", "Natural Justice", "Route Alignment", "District Magistrate Jurisdiction"],
    headnotesSummary: "When an owner objects to the drawing of electricity line through property, the authority must approach the District Magistrate under Section 16(1). The District Magistrate must afford an opportunity of being heard.",
    snippetMatch: "Section 16(1) enquiry is quasi-judicial in character and cannot be carried out ex-parte without hearing the affected land owner.",
    verificationStatus: "VALID",
    isSampleRecord: true,
    paragraphs: [
      {
        paraNumber: 12,
        text: "The exercise of discretion under Section 16 of the Telegraph Act requires objective satisfaction on feasibility and minimal damage to private property.",
        isKeyHolding: true,
      }
    ]
  },
  {
    id: "src_act_01",
    title: "The Bharatiya Nyaya Sanhita, 2023 (Act No. 45 of 2023)",
    shortTitle: "Bharatiya Nyaya Sanhita (BNS)",
    sourceType: "CENTRAL_ACT",
    citation: "Act No. 45 of 2023 (Gazette of India)",
    courtOrBody: "Parliament of India",
    jurisdiction: "Republic of India",
    decisionOrEnactmentDate: "2023-12-25",
    actReference: {
      actName: "Bharatiya Nyaya Sanhita",
      actYear: 2023,
      section: "All Sections"
    },
    keyLegalTopics: ["Criminal Law", "Penal Code", "BNS", "Offences Against State & Body"],
    headnotesSummary: "Modernized penal code replacing the Indian Penal Code, 1860 with updated definitions, electronic evidence integration, and community service provisions.",
    verificationStatus: "VALID",
    isSampleRecord: true,
    paragraphs: [
      {
        paraNumber: 1,
        text: "An Act to consolidate and amend the provisions relating to offences and for matters connected therewith or incidental thereto.",
        isKeyHolding: false,
      }
    ]
  },
  {
    id: "src_act_02",
    title: "The Kerala Land Reforms Act, 1963 (Act 1 of 1964)",
    shortTitle: "Kerala Land Reforms Act, 1963",
    sourceType: "STATE_ACT",
    citation: "Kerala Act 1 of 1964",
    courtOrBody: "Kerala State Legislature",
    jurisdiction: "Kerala, India",
    decisionOrEnactmentDate: "1964-02-23",
    actReference: {
      actName: "Kerala Land Reforms Act",
      actYear: 1963,
      section: "Section 72, Section 81"
    },
    keyLegalTopics: ["Land Tenancy", "Fixity of Tenure", "Ceiling Provisions", "Kudikidappukars"],
    headnotesSummary: "Landmark Kerala agrarian reform enactment establishing tenancy abolition, ceiling limits on land holdings, and vesting of rights in cultivating tenants.",
    verificationStatus: "VALID",
    isSampleRecord: true,
  }
];
