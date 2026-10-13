import { LegalAppointment, AppointmentStatus } from "@/types";
import { MOCK_APPOINTMENTS } from "../mock-data";

export interface IAppointmentService {
  getAppointments(): Promise<LegalAppointment[]>;
  createAppointment(appointment: Partial<LegalAppointment>): Promise<LegalAppointment>;
  updateStatus(id: string, status: AppointmentStatus): Promise<LegalAppointment | undefined>;
}

export class MockAppointmentService implements IAppointmentService {
  private appointments: LegalAppointment[] = [...MOCK_APPOINTMENTS];

  async getAppointments(): Promise<LegalAppointment[]> {
    return [...this.appointments];
  }

  async createAppointment(data: Partial<LegalAppointment>): Promise<LegalAppointment> {
    const newApt: LegalAppointment = {
      id: `apt_${Date.now()}`,
      clientId: data.clientId || "usr_client_01",
      clientName: data.clientName || "Gopakumar Nambiar",
      clientPhone: data.clientPhone || "+91 98470 12345",
      advocateId: data.advocateId || "adv_kerala_01",
      advocateName: data.advocateName || "Adv. Meera Krishnan",
      advocateCourt: data.advocateCourt || "High Court of Kerala",
      date: data.date || new Date().toISOString().split("T")[0],
      timeSlot: data.timeSlot || "10:30 AM - 11:15 AM IST",
      mode: data.mode || "video",
      status: "requested",
      category: data.category || "Legal Consultation",
      summary: data.summary || "Consultation requested by client via Wakheel portal.",
      feeINR: data.feeINR || 2500,
    };
    this.appointments.unshift(newApt);
    return newApt;
  }

  async updateStatus(id: string, status: AppointmentStatus): Promise<LegalAppointment | undefined> {
    const apt = this.appointments.find((a) => a.id === id);
    if (apt) {
      apt.status = status;
    }
    return apt;
  }
}

export const appointmentService = new MockAppointmentService();
