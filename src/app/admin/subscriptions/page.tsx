"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign } from "lucide-react";

export default function AdminSubscriptionsPage() {
  const subs = [
    { chamber: "Krishnan & Associates Legal Chambers", plan: "Advocate Professional (Annual)", amount: "₹24,990/yr", status: "Active" },
    { chamber: "Kurian & Chacko Legal Practice", plan: "Advocate Professional (Monthly)", amount: "₹2,499/mo", status: "Active" },
    { chamber: "Ramanathan Chambers of Law", plan: "Chamber & Firm (5 Counsel)", amount: "₹7,999/mo", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Platform Subscriptions & Billing</h1>
        <p className="text-xs text-slate-500 mt-1">Chamber subscription tiers, revenue distribution, and GST invoicing</p>
      </div>

      <div className="space-y-3">
        {subs.map((s, i) => (
          <Card key={i} className="p-4 bg-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div>
              <span className="font-bold text-slate-900">{s.chamber}</span>
              <span className="text-slate-500 ml-2">• {s.plan}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-900">{s.amount}</span>
              <Badge variant="success">{s.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
