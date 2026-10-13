import { create } from "zustand";
import { LegalMatter } from "@/types";
import { MOCK_MATTERS } from "@/lib/mock-data";

interface MatterState {
  matters: LegalMatter[];
  selectedMatterId: string;
  searchFilter: string;
  setSelectedMatterId: (id: string) => void;
  setSearchFilter: (query: string) => void;
  addMatter: (matter: LegalMatter) => void;
  getSelectedMatter: () => LegalMatter | undefined;
}

export const useMatterStore = create<MatterState>((set, get) => ({
  matters: [...MOCK_MATTERS],
  selectedMatterId: MOCK_MATTERS[0]?.id || "",
  searchFilter: "",
  setSelectedMatterId: (id) => set({ selectedMatterId: id }),
  setSearchFilter: (query) => set({ searchFilter: query }),
  addMatter: (matter) => set((state) => ({ matters: [matter, ...state.matters] })),
  getSelectedMatter: () => {
    const { matters, selectedMatterId } = get();
    return matters.find((m) => m.id === selectedMatterId) || matters[0];
  },
}));
