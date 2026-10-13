"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Download, CheckCircle2 } from "lucide-react";

export default function ClientPaymentsPage() {
  const transactions = [
    { id: "PAY-2024-891", item: "Advocate Retainer Fee (High Court Filing)", advocate: "Adv. Meera Krishnan", amount: "₹25,000", date: "15-Jun-2024", status: "Paid" },
    { id: "PAY-2024-104", item: "Video Consultation (45 Min)", advocate: "Adv. Meera Krishnan", amount: "₹2,500", date: "10-Jun-2024", status: "Paid" },
  ];

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Payments & Receipts</h1>
        <p className="text-xs text-slate-500 mt-1">Receipts for advocate consultations and professional retainers</p>
      </div>

      <div className="space-y-3">
        {transactions.map((t) => (
          <Card key={t.id} className="p-5 bg-white flex items-center justify-between flex-wrap gap-3">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-slate-800">{t.id}</span>
              <h3 className="text-sm font-bold text-slate-900">{t.item}</h3>
              <p className="text-xs text-slate-500">{t.advocate} • {t.date}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-sm font-extrabold text-slate-900 block">{t.amount}</span>
                <Badge variant="success" className="text-[10px]">{t.status}</Badge>
              </div>
              <Button variant="outline" size="sm" className="text-xs h-8 gap-1">
                <Download className="h-3 w-3" /> Receipt
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
