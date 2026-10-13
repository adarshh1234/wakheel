import { WakheelNotification } from "@/types";
import { MOCK_NOTIFICATIONS } from "../mock-data";

export interface INotificationService {
  getNotifications(): Promise<WakheelNotification[]>;
  markAsRead(id: string): Promise<void>;
  markAllAsRead(): Promise<void>;
  getUnreadCount(): Promise<number>;
}

export class MockNotificationService implements INotificationService {
  private notifications: WakheelNotification[] = [...MOCK_NOTIFICATIONS];

  async getNotifications(): Promise<WakheelNotification[]> {
    return [...this.notifications];
  }

  async markAsRead(id: string): Promise<void> {
    const n = this.notifications.find((notif) => notif.id === id);
    if (n) {
      n.isRead = true;
    }
  }

  async markAllAsRead(): Promise<void> {
    this.notifications.forEach((n) => (n.isRead = true));
  }

  async getUnreadCount(): Promise<number> {
    return this.notifications.filter((n) => !n.isRead).length;
  }
}

export const notificationService = new MockNotificationService();
