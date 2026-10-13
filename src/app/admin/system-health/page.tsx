"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Activity, CheckCircle2, ShieldCheck } from "lucide-react";

export default function AdminSystemHealthPage() {
  const services = [
    { name: "Kerala High Court Cause List Ingestor", status: "Operational", uptime: "99.98%", latency: "42ms" },
    { name: "Citation Graph & Shepardizer Index", status: "Operational", uptime: "100.0%", latency: "18ms" },
    { name: "Legal Document OCR & Vault Encryption", status: "Operational", uptime: "99.95%", latency: "88ms" },
    { name: "AI Guardrail Policy Engine", status: "Operational", uptime: "100.0%", latency: "12ms" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Platform System Health</h1>
          <p className="text-xs text-slate-500 mt-1">Real-time infrastructure health, cluster latency, and uptime</p>
        </div>
        <Badge variant="success">All Systems Operational</Badge>
      </div>

      <div className="space-y-3">
        {services.map((s, i) => (
          <Card key={i} className="p-4 bg-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="font-bold text-slate-900">{s.name}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span>Uptime: <strong className="text-slate-700">{s.uptime}</strong></span>
              <span>Latency: <strong className="text-teal-700">{s.latency}</strong></span>
              <Badge variant="success" className="text-[10px]">{s.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
