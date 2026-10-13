"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, Phone, Mail, MapPin, Briefcase, Plus, ArrowRight } from "lucide-react";

export default function AdvocateClientsPage() {
  const [search, setSearch] = React.useState("");

  const clients = [
    {
      id: "usr_client_01",
      name: "Gopakumar Nambiar",
      phone: "+91 98470 12345",
      email: "gopakumar.client@example.com",
      location: "Aluva, Ernakulam, Kerala",
      activeMattersCount: 2,
      matters: ["WP(C) 19482/2024", "ARB/NCLT/KOCHI/2024/041"],
      status: "Active Retainer",
    },
    {
      id: "usr_client_02",
      name: "Radhika Warrier",
      phone: "+91 94471 22334",
      email: "radhika.warrier@example.com",
      location: "Kottayam, Kerala",
      activeMattersCount: 1,
      matters: ["OP(FC) 412/2024"],
      status: "Consultation Completed",
    },
    {
      id: "usr_client_03",
      name: "Sujith Mohan (CEO, Coastal Logistics)",
      phone: "+91 97450 99887",
      email: "sujith@coastallogistics.in",
      location: "Kochi, Kerala",
      activeMattersCount: 1,
      matters: ["Commercial Arbitration Claim"],
      status: "Pre-Litigation",
    },
  ];

  const filtered = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Chamber Clients Directory</h1>
          <p className="text-xs text-slate-500 mt-1">Manage active client retainers, matter assignments, and contact channels</p>
        </div>
        <Button variant="teal" size="sm" className="gap-1.5 text-xs">
          <Plus className="h-4 w-4" /> Add Client Profile
        </Button>
      </div>

      <div className="bg-white p-3.5 rounded-xl border border-slate-200">
        <Input
          isSearch
          placeholder="Search clients by name, phone, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((client) => (
          <Card key={client.id} className="p-5 flex flex-col justify-between bg-white hover:border-slate-300 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-full bg-slate-900 text-teal-400 font-bold flex items-center justify-center text-sm">
                  {client.name.slice(0, 2).toUpperCase()}
                </div>
                <Badge variant="secondary" className="text-[10px]">{client.status}</Badge>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">{client.name}</h3>
                <div className="space-y-1 text-xs text-slate-500 mt-2">
                  <div className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> {client.phone}</div>
                  <div className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> {client.email}</div>
                  <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {client.location}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs">
                <span className="font-semibold text-slate-700 block mb-1">Associated Matters ({client.activeMattersCount}):</span>
                <div className="flex flex-wrap gap-1">
                  {client.matters.map((m) => (
                    <span key={m} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link href="/advocate/communications">
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Message Client
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
