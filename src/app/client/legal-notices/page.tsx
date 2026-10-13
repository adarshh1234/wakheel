"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Download, AlertTriangle } from "lucide-react";

export default function ClientLegalNoticesPage() {
  const notices = [
    {
      id: "not_01",
      title: "KSEB Transmission Line Realignment Notice",
      sender: "Kerala State Electricity Board (Transmission Division)",
      date: "10-Nov-2023",
      statute: "Indian Telegraph Act Section 10/16",
      status: "Contested in HC",
    },
    {
      id: "not_02",
      title: "Demand Notice for Invoiced Arrears",
      sender: "Malabar Infotech Legal Cell",
      date: "05-May-2024",
      statute: "Negotiable Instruments Act / Contract Default",
      status: "Notice Issued",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Legal Notices Tracker</h1>
        <p className="text-xs text-slate-500 mt-1">Official notices received from authorities or dispatched by your advocate</p>
      </div>

      <div className="space-y-3">
        {notices.map((n) => (
          <Card key={n.id} className="p-5 bg-white space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-mono font-bold text-slate-700">{n.date}</span>
              <Badge variant="teal">{n.status}</Badge>
            </div>
            <h3 className="text-sm font-bold text-slate-900">{n.title}</h3>
            <p className="text-xs text-slate-600">Issued by: <strong>{n.sender}</strong></p>
            <p className="text-xs text-slate-500 font-medium">Statute Reference: {n.statute}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
