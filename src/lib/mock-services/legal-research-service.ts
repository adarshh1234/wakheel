import { LegalAuthoritySource, LegalSearchFilter, CitationVerificationRecord } from "@/types";
import { MOCK_LEGAL_SOURCES, MOCK_CITATIONS } from "../mock-data";

export interface ILegalResearchService {
  searchSources(filters: LegalSearchFilter): Promise<LegalAuthoritySource[]>;
  getSourceById(id: string): Promise<LegalAuthoritySource | undefined>;
  verifyCitation(citationString: string): Promise<CitationVerificationRecord | undefined>;
  getAllVerifiedCitations(): Promise<CitationVerificationRecord[]>;
}

export class MockLegalResearchService implements ILegalResearchService {
  private sources: LegalAuthoritySource[] = [...MOCK_LEGAL_SOURCES];
  private citations: CitationVerificationRecord[] = [...MOCK_CITATIONS];

  async searchSources(filters: LegalSearchFilter): Promise<LegalAuthoritySource[]> {
    return this.sources.filter((s) => {
      if (filters.query) {
        const q = filters.query.toLowerCase();
        const matchesTitle = s.title.toLowerCase().includes(q);
        const matchesCitation = s.citation.toLowerCase().includes(q);
        const matchesTopics = s.keyLegalTopics.some((t) => t.toLowerCase().includes(q));
        const matchesHeadnotes = s.headnotesSummary.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCitation && !matchesTopics && !matchesHeadnotes) {
          return false;
        }
      }
      if (filters.sourceType && filters.sourceType !== "ALL" && s.sourceType !== filters.sourceType) {
        return false;
      }
      if (filters.court && !s.courtOrBody.toLowerCase().includes(filters.court.toLowerCase())) {
        return false;
      }
      return true;
    });
  }

  async getSourceById(id: string): Promise<LegalAuthoritySource | undefined> {
    return this.sources.find((s) => s.id === id);
  }

  async verifyCitation(citationString: string): Promise<CitationVerificationRecord | undefined> {
    const cleanStr = citationString.trim().toLowerCase();
    return this.citations.find((c) => c.citationString.toLowerCase().includes(cleanStr));
  }

  async getAllVerifiedCitations(): Promise<CitationVerificationRecord[]> {
    return [...this.citations];
  }
}

export const legalResearchService = new MockLegalResearchService();
