import { create } from "zustand";

interface UIState {
  sidebarCollapsed: boolean;
  mobileSidebarOpen: boolean;
  selectedLanguage: "en" | "ml";
  notificationsOpen: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setMobileSidebarOpen: (open: boolean) => void;
  setSelectedLanguage: (lang: "en" | "ml") => void;
  setNotificationsOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarCollapsed: false,
  mobileSidebarOpen: false,
  selectedLanguage: "en",
  notificationsOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  setMobileSidebarOpen: (open) => set({ mobileSidebarOpen: open }),
  setSelectedLanguage: (lang) => set({ selectedLanguage: lang }),
  setNotificationsOpen: (open) => set({ notificationsOpen: open }),
}));
