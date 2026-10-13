"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, ShieldCheck, Search } from "lucide-react";

export default function AdminUsersPage() {
  const users = [
    { name: "Adv. Meera Krishnan", email: "meera.krishnan@advocate.in", role: "Advocate", status: "Verified", date: "20-Aug-2023" },
    { name: "Gopakumar Nambiar", email: "gopakumar.client@example.com", role: "Client", status: "Active", date: "15-Jan-2024" },
    { name: "Adv. Thomas Kurian", email: "thomas.kurian@law.in", role: "Advocate", status: "Verified", date: "12-Sep-2023" },
    { name: "Dr. Arundhati Menon", email: "knowledge.admin@wakheel.com", role: "Knowledge Admin", status: "Active", date: "10-Mar-2023" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">User Management Directory</h1>
          <p className="text-xs text-slate-500 mt-1">Manage platform accounts across clients, advocates, and administrators</p>
        </div>
      </div>

      <Card className="p-5 bg-white space-y-3">
        <div className="divide-y divide-slate-100 text-xs">
          {users.map((u, i) => (
            <div key={i} className="py-3 flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="font-bold text-slate-900">{u.name}</span>
                <span className="text-slate-500 ml-2">• {u.email}</span>
                <span className="text-slate-400 block text-[11px]">Registered: {u.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{u.role}</Badge>
                <Badge variant="success">{u.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
