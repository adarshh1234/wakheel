import { AIMessage, AICopilotMode, LegalResearchMemo, LegalAgentConfig } from "@/types";
import { MOCK_LEGAL_AGENTS, MOCK_DEEP_RESEARCH_MEMO, MOCK_COPILOT_SAMPLE_MESSAGES } from "../mock-data";

export interface IAIWorkspaceService {
  getMessages(): Promise<AIMessage[]>;
  sendMessage(content: string, mode: AICopilotMode): Promise<AIMessage>;
  getDeepResearchMemo(): Promise<LegalResearchMemo>;
  getAgents(): Promise<LegalAgentConfig[]>;
}

export class MockAIWorkspaceService implements IAIWorkspaceService {
  private messages: AIMessage[] = [...MOCK_COPILOT_SAMPLE_MESSAGES];

  async getMessages(): Promise<AIMessage[]> {
    return [...this.messages];
  }

  async sendMessage(content: string, mode: AICopilotMode): Promise<AIMessage> {
    const userMsg: AIMessage = {
      id: `msg_u_${Date.now()}`,
      sender: "user",
      timestamp: new Date().toISOString(),
      mode,
      content,
      verificationNotice: "",
      isSimulatedDemo: true,
    };
    this.messages.push(userMsg);

    // Simulated responsive AI output
    const aiResponse: AIMessage = {
      id: `msg_a_${Date.now() + 1}`,
      sender: "assistant",
      timestamp: new Date().toISOString(),
      mode,
      content: `Demonstration Analysis for query: "${content}"\n\nUnder applicable Indian law, the statutory provisions of Section 16(1) of the Indian Telegraph Act, 1885 require adherence to natural justice prior to drawing lines over private property. Supreme Court precedents (e.g. Century Textiles & Industries) stipulate that when an owner objects in writing, the authority must submit the dispute to the District Magistrate.`,
      materialFacts: [
        "Written objection raised by landowner before statutory authority.",
        "Alternate route proposal documented via municipal survey.",
      ],
      applicableIssues: [
        "Statutory necessity of Section 16(1) adjudication by District Magistrate.",
        "Availability of interim relief under Article 226 of the Constitution of India.",
      ],
      authorities: [
        {
          id: "cit_02",
          authorityName: "Valsamma v. Kerala State Electricity Board",
          citation: "(2011) 2 KLT 234",
          sourceType: "High Court of Kerala",
          status: "VALID",
          relevantExcerpt: "Quasi-judicial hearing mandatory under Section 16(1) before entering private property.",
        },
      ],
      analysis: "The balance of convenience favours preserving status quo when an alternative route creates substantially lesser private damage.",
      uncertainties: [
        "Physical completion status of line installation on neighboring segments.",
      ],
      suggestedNextSteps: [
        "Advocate review and drafting of Reply Affidavit before High Court.",
        "Obtain certified extract of PWD route survey sketch.",
      ],
      verificationNotice: "AI-generated legal information for research and assistance. It is not a substitute for advice from a qualified legal professional.",
      isSimulatedDemo: true,
    };

    this.messages.push(aiResponse);
    return aiResponse;
  }

  async getDeepResearchMemo(): Promise<LegalResearchMemo> {
    return MOCK_DEEP_RESEARCH_MEMO;
  }

  async getAgents(): Promise<LegalAgentConfig[]> {
    return [...MOCK_LEGAL_AGENTS];
  }
}

export const aiWorkspaceService = new MockAIWorkspaceService();
