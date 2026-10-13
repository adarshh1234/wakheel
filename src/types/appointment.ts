export type ConsultationMode = "video" | "phone" | "in_person";

export type AppointmentStatus = 
  | "requested" 
  | "confirmed" 
  | "rescheduled" 
  | "completed" 
  | "cancelled";

export interface LegalAppointment {
  id: string;
  clientId: string;
  clientName: string;
  clientPhone: string;
  advocateId: string;
  advocateName: string;
  advocateCourt: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // "10:30 AM - 11:15 AM IST"
  mode: ConsultationMode;
  status: AppointmentStatus;
  matterTitle?: string;
  category: string;
  summary: string;
  feeINR: number;
  meetingLinkMock?: string;
  locationAddress?: string;
  rescheduleReason?: string;
}
