import { VaultDocument, DocumentRiskLevel } from "@/types";
import { MOCK_VAULT_DOCUMENTS } from "../mock-data";

export interface IDocumentService {
  getDocuments(matterId?: string): Promise<VaultDocument[]>;
  getDocumentById(id: string): Promise<VaultDocument | undefined>;
  filterByRisk(risk: DocumentRiskLevel): Promise<VaultDocument[]>;
}

export class MockDocumentService implements IDocumentService {
  private documents: VaultDocument[] = [...MOCK_VAULT_DOCUMENTS];

  async getDocuments(matterId?: string): Promise<VaultDocument[]> {
    if (matterId) {
      return this.documents.filter((d) => d.matterId === matterId);
    }
    return [...this.documents];
  }

  async getDocumentById(id: string): Promise<VaultDocument | undefined> {
    return this.documents.find((d) => d.id === id);
  }

  async filterByRisk(risk: DocumentRiskLevel): Promise<VaultDocument[]> {
    return this.documents.filter((d) => d.overallRisk === risk);
  }
}

export const documentService = new MockDocumentService();
