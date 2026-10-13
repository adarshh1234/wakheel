export type InvoiceStatus = "paid" | "pending" | "overdue" | "cancelled" | "refunded";

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rateINR: number;
  amountINR: number;
}

export interface LegalInvoice {
  id: string;
  invoiceNumber: string; // e.g. "INV-WAK-2024-0042"
  clientId: string;
  clientName: string;
  advocateId: string;
  advocateName: string;
  matterTitle?: string;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
  items: InvoiceItem[];
  subtotalINR: number;
  gstINR: number; // 18% GST in India
  totalINR: number;
  isDemoTransaction: true;
}

export interface AdvocatePayout {
  id: string;
  period: string;
  consultationCount: number;
  grossEarningsINR: number;
  platformFeeINR: number;
  netPayoutINR: number;
  payoutDate: string;
  status: "processed" | "scheduled" | "processing";
  isDemoRecord: true;
}
