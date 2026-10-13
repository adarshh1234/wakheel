import { AdvocateProfile, AdvocateFilterParams } from "@/types";
import { MOCK_ADVOCATES } from "../mock-data";

export interface IAdvocateService {
  getAdvocates(filters?: AdvocateFilterParams): Promise<AdvocateProfile[]>;
  getAdvocateById(id: string): Promise<AdvocateProfile | undefined>;
}

export class MockAdvocateService implements IAdvocateService {
  private advocates: AdvocateProfile[] = [...MOCK_ADVOCATES];

  async getAdvocates(filters?: AdvocateFilterParams): Promise<AdvocateProfile[]> {
    if (!filters) return this.advocates;
    return this.advocates.filter((adv) => {
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = adv.name.toLowerCase().includes(query);
        const matchesCourt = adv.primaryCourts.some((c) => c.toLowerCase().includes(query));
        const matchesPractice = adv.practiceAreas.some((p) => p.toLowerCase().includes(query));
        if (!matchesName && !matchesCourt && !matchesPractice) return false;
      }
      if (filters.practiceArea && !adv.practiceAreas.includes(filters.practiceArea)) {
        return false;
      }
      if (filters.state && adv.location.state.toLowerCase() !== filters.state.toLowerCase()) {
        return false;
      }
      if (filters.availableOnly && !adv.isAvailableForConsultation) {
        return false;
      }
      if (filters.minExperience && adv.experienceYears < filters.minExperience) {
        return false;
      }
      return true;
    });
  }

  async getAdvocateById(id: string): Promise<AdvocateProfile | undefined> {
    return this.advocates.find((a) => a.id === id);
  }
}

export const advocateService = new MockAdvocateService();
