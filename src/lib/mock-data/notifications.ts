import { WakheelNotification } from "@/types";

export const MOCK_NOTIFICATIONS: WakheelNotification[] = [
  {
    id: "notif_01",
    category: "hearing",
    title: "Hearing Date Listed",
    message: "WP(C) 19482/2024 has been posted before Bench 4B on 20-Nov-2024 for Final Arguments.",
    timestamp: "2024-10-28T09:15:00Z",
    isRead: false,
    actionUrl: "/advocate/matters/mat_ker_01",
    matterId: "mat_ker_01",
    severity: "warning",
  },
  {
    id: "notif_02",
    category: "appointment",
    title: "Video Consultation Confirmed",
    message: "Adv. Meera Krishnan confirmed consultation for 15-Nov-2024 at 04:30 PM IST.",
    timestamp: "2024-10-27T16:20:00Z",
    isRead: false,
    actionUrl: "/client/consultations",
    severity: "success",
  },
  {
    id: "notif_03",
    category: "document",
    title: "Contract Risk Flagged",
    message: "Red-flag detected in MSA Clause 14.2: Unilateral sole arbitrator appointment violates Perkins Eastman ruling.",
    timestamp: "2024-10-26T14:40:00Z",
    isRead: true,
    actionUrl: "/advocate/contracts",
    severity: "alert",
  },
  {
    id: "notif_04",
    category: "regulatory_update",
    title: "Kerala High Court Practice Directions",
    message: "Updated e-filing guideline issued regarding digital signature specifications for writ pleadings.",
    timestamp: "2024-10-25T11:00:00Z",
    isRead: true,
    actionUrl: "/advocate/dashboard",
    severity: "info",
  }
];
