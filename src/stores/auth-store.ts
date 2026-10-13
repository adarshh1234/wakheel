import { create } from "zustand";
import { UserProfile, UserRole } from "@/types";
import { DEMO_ADVOCATE_USER, DEMO_CLIENT_USER, DEMO_ADMIN_USER, DEMO_KNOWLEDGE_ADMIN_USER } from "@/lib/mock-data";

interface AuthState {
  currentUser: UserProfile;
  currentRole: UserRole;
  isDemoMode: boolean;
  setRole: (role: UserRole) => void;
  setUser: (user: UserProfile) => void;
  switchUserRole: (role: UserRole) => void;
  logoutDemo: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: DEMO_ADVOCATE_USER,
  currentRole: "advocate",
  isDemoMode: true,
  setRole: (role: UserRole) => set({ currentRole: role }),
  setUser: (user: UserProfile) => set({ currentUser: user, currentRole: user.role }),
  switchUserRole: (role: UserRole) => {
    let nextUser: UserProfile = DEMO_ADVOCATE_USER;
    if (role === "client") nextUser = DEMO_CLIENT_USER;
    if (role === "advocate") nextUser = DEMO_ADVOCATE_USER;
    if (role === "admin") nextUser = DEMO_ADMIN_USER;
    if (role === "knowledge_admin") nextUser = DEMO_KNOWLEDGE_ADMIN_USER;

    set({
      currentUser: nextUser,
      currentRole: role,
    });
  },
  logoutDemo: () => {
    set({
      currentUser: DEMO_CLIENT_USER,
      currentRole: "client",
    });
  },
}));
