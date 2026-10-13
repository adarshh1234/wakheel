"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Download, Plus, ArrowUpRight } from "lucide-react";

export default function AdvocateBillingPage() {
  const invoices = [
    { id: "INV-2024-001", client: "Gopakumar Nambiar", matter: "WP(C) 19482/2024", date: "15-Oct-2024", amount: "₹25,000", status: "Paid" },
    { id: "INV-2024-002", client: "Malabar Infotech", matter: "ARB/NCLT/KOCHI", date: "22-Oct-2024", amount: "₹50,000", status: "Pending" },
    { id: "INV-2024-003", client: "Radhika Warrier", matter: "Chamber Consultation", date: "28-Oct-2024", amount: "₹2,500", status: "Paid" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Billing, Invoices & Payouts</h1>
          <p className="text-xs text-slate-500 mt-1">Chamber retainers, professional fees, and GST tax invoice generation</p>
        </div>
        <Button variant="teal" size="sm" className="text-xs gap-1.5">
          <Plus className="h-4 w-4" /> Create Chamber Invoice
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 bg-white">
          <span className="text-xs font-semibold text-slate-500 uppercase block">Total Earnings (Oct)</span>
          <span className="text-2xl font-bold text-slate-900 mt-1 block">₹77,500</span>
          <span className="text-[11px] text-emerald-600 mt-1 block font-medium">+18% GST Compliant</span>
        </Card>
        <Card className="p-4 bg-white">
          <span className="text-xs font-semibold text-slate-500 uppercase block">Pending Collections</span>
          <span className="text-2xl font-bold text-amber-700 mt-1 block">₹50,000</span>
          <span className="text-[11px] text-amber-600 mt-1 block font-medium">1 Invoice Due</span>
        </Card>
        <Card className="p-4 bg-white">
          <span className="text-xs font-semibold text-slate-500 uppercase block">Completed Consultations</span>
          <span className="text-2xl font-bold text-teal-700 mt-1 block">14</span>
          <span className="text-[11px] text-slate-500 mt-1 block">Video & In-Person</span>
        </Card>
      </div>

      <Card className="p-5 bg-white space-y-3">
        <h3 className="text-sm font-bold text-slate-900">Recent Chamber Invoices</h3>
        <div className="divide-y divide-slate-100 text-xs">
          {invoices.map((inv) => (
            <div key={inv.id} className="py-3 flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="font-mono font-bold text-slate-900">{inv.id}</span>
                <span className="text-slate-500 ml-2">• {inv.client} ({inv.matter})</span>
                <span className="text-slate-400 block text-[11px]">{inv.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900 text-sm">{inv.amount}</span>
                <Badge variant={inv.status === "Paid" ? "success" : "warning"} className="text-[10px]">
                  {inv.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
