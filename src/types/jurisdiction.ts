export type IndianCourtLevel = 
  | "supreme_court" 
  | "high_court" 
  | "district_court" 
  | "tribunal" 
  | "magistrate_court";

export interface JurisdictionConfig {
  id: string;
  code: string;
  name: string;
  country: string;
  state?: string;
  courtLevel: IndianCourtLevel;
  primaryCourtName: string;
  officialLanguages: string[];
  activeStatus: "active" | "planned" | "beta";
}

export interface LegalCategory {
  id: string;
  name: string;
  code: string;
  description: string;
  iconName: string;
  popularInJurisdiction: string[];
  sampleTopics: string[];
}
