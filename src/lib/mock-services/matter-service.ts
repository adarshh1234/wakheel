import { LegalMatter } from "@/types";
import { MOCK_MATTERS } from "../mock-data";

export interface IMatterService {
  getMatters(): Promise<LegalMatter[]>;
  getMatterById(id: string): Promise<LegalMatter | undefined>;
  getMattersByClientId(clientId: string): Promise<LegalMatter[]>;
  getMattersByAdvocateId(advocateId: string): Promise<LegalMatter[]>;
  createMatter(matter: Partial<LegalMatter>): Promise<LegalMatter>;
  updateMatterStatus(id: string, status: LegalMatter["status"]): Promise<LegalMatter | undefined>;
}

export class MockMatterService implements IMatterService {
  private matters: LegalMatter[] = [...MOCK_MATTERS];

  async getMatters(): Promise<LegalMatter[]> {
    return [...this.matters];
  }

  async getMatterById(id: string): Promise<LegalMatter | undefined> {
    return this.matters.find((m) => m.id === id);
  }

  async getMattersByClientId(clientId: string): Promise<LegalMatter[]> {
    return this.matters.filter((m) => m.clientId === clientId);
  }

  async getMattersByAdvocateId(advocateId: string): Promise<LegalMatter[]> {
    return this.matters.filter((m) => m.assignedAdvocateId === advocateId);
  }

  async createMatter(data: Partial<LegalMatter>): Promise<LegalMatter> {
    const newMatter: LegalMatter = {
      id: `mat_${Date.now()}`,
      matterNumber: data.matterNumber || `MAT-KER-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
      title: data.title || "New Legal Matter",
      matterType: data.matterType || "Civil Suit",
      clientId: data.clientId || "usr_client_01",
      clientName: data.clientName || "Gopakumar Nambiar",
      clientPhone: data.clientPhone || "+91 98470 12345",
      assignedAdvocateId: data.assignedAdvocateId || "adv_kerala_01",
      assignedAdvocateName: data.assignedAdvocateName || "Adv. Meera Krishnan",
      court: data.court || "High Court of Kerala",
      jurisdiction: data.jurisdiction || "Kerala, India",
      state: data.state || "Kerala",
      filingDate: new Date().toISOString().split("T")[0],
      status: data.status || "intake",
      priority: data.priority || "medium",
      opposingParty: data.opposingParty || {
        name: "Opposing Party / Authority",
        entityType: "Individual",
      },
      facts: data.facts || [],
      issues: data.issues || [],
      hearings: data.hearings || [],
      tasks: data.tasks || [],
      documentCount: 0,
      lastUpdated: new Date().toISOString(),
      aiInsightsCount: 1,
      reviewStatus: "draft_pending",
    };
    this.matters.unshift(newMatter);
    return newMatter;
  }

  async updateMatterStatus(id: string, status: LegalMatter["status"]): Promise<LegalMatter | undefined> {
    const matter = this.matters.find((m) => m.id === id);
    if (matter) {
      matter.status = status;
      matter.lastUpdated = new Date().toISOString();
    }
    return matter;
  }
}

export const matterService = new MockMatterService();
