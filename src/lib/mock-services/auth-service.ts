import { UserProfile, UserRole } from "@/types";
import { DEMO_CLIENT_USER, DEMO_ADVOCATE_USER, DEMO_ADMIN_USER, DEMO_KNOWLEDGE_ADMIN_USER } from "../mock-data";

export interface IAuthService {
  getCurrentUser(): Promise<UserProfile | null>;
  demoLoginAs(role: UserRole): Promise<UserProfile>;
  logout(): Promise<void>;
  switchRole(role: UserRole): Promise<UserProfile>;
}

export class MockAuthService implements IAuthService {
  private activeUser: UserProfile = DEMO_ADVOCATE_USER;

  async getCurrentUser(): Promise<UserProfile | null> {
    return this.activeUser;
  }

  async demoLoginAs(role: UserRole): Promise<UserProfile> {
    switch (role) {
      case "client":
        this.activeUser = DEMO_CLIENT_USER;
        break;
      case "advocate":
        this.activeUser = DEMO_ADVOCATE_USER;
        break;
      case "admin":
        this.activeUser = DEMO_ADMIN_USER;
        break;
      case "knowledge_admin":
        this.activeUser = DEMO_KNOWLEDGE_ADMIN_USER;
        break;
    }
    return this.activeUser;
  }

  async logout(): Promise<void> {
    // Reset to client for demo defaults
    this.activeUser = DEMO_CLIENT_USER;
  }

  async switchRole(role: UserRole): Promise<UserProfile> {
    return this.demoLoginAs(role);
  }
}

export const authService = new MockAuthService();
