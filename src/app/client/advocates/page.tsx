"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MOCK_ADVOCATES } from "@/lib/mock-data";
import { Scale, MapPin, Video, Phone, ShieldCheck, ArrowRight } from "lucide-react";

export default function ClientAdvocateDiscoveryPage() {
  const [search, setSearch] = React.useState("");

  const filtered = MOCK_ADVOCATES.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.location.city.toLowerCase().includes(search.toLowerCase()) ||
    a.practiceAreas.some((p) => p.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Discover Verified Advocates</h1>
        <p className="text-xs text-slate-500 mt-1">Bar Council of Kerala verified advocates practicing before High Court and District Courts</p>
      </div>

      <div className="bg-white p-3.5 rounded-xl border border-slate-200">
        <Input
          isSearch
          placeholder="Search by advocate name, city (Kochi, Kottayam, Kozhikode), or practice area..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((adv) => (
          <Card key={adv.id} className="p-5 bg-white hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-slate-900 text-teal-400 font-bold flex items-center justify-center text-sm">
                    {adv.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{adv.name}</h3>
                    <span className="text-[11px] text-slate-500 font-mono">{adv.barCouncilNumber}</span>
                  </div>
                </div>
                <Badge variant="success" className="text-[10px]">Bar Verified</Badge>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{adv.bio}</p>

              <div className="space-y-1 text-xs text-slate-500">
                <div><MapPin className="h-3 w-3 inline mr-1 text-teal-700" /> {adv.location.city}, {adv.location.state}</div>
                <div>Courts: {adv.primaryCourts.join(", ")}</div>
                <div>Experience: <strong>{adv.experienceYears} Years Standing</strong></div>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                {adv.practiceAreas.map((p) => (
                  <span key={p} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Consultation</span>
                <span className="text-sm font-bold text-slate-900">₹{adv.consultationFeeINR}</span>
              </div>
              <Link href={`/client/advocates/${adv.id}`}>
                <Button variant="teal" size="sm" className="text-xs h-8 gap-1">
                  View Profile & Book <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
