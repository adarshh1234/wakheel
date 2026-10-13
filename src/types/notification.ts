export type NotificationCategory = 
  | "legal_request" 
  | "appointment" 
  | "case_update" 
  | "document" 
  | "payment" 
  | "hearing" 
  | "deadline" 
  | "security" 
  | "system" 
  | "regulatory_update";

export interface WakheelNotification {
  id: string;
  category: NotificationCategory;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
  matterId?: string;
  severity: "info" | "warning" | "alert" | "success";
}
