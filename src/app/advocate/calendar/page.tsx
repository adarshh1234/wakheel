"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function AdvocateCalendarPage() {
  const events = [
    {
      date: "20-Nov-2024",
      time: "11:15 AM",
      title: "WP(C) 19482/2024 — Gopakumar Nambiar v. KSEB",
      court: "Court Hall 4B, High Court of Kerala",
      bench: "Hon'ble Justice K. Haripal",
      stage: "Final Arguments & Counter Consideration",
      status: "Listed",
    },
    {
      date: "24-Nov-2024",
      time: "02:30 PM",
      title: "ARB/NCLT/KOCHI/2024/041 — Malabar Infotech",
      court: "Court Hall 1, NCLT Kochi Bench",
      bench: "Judicial Member & Technical Member",
      stage: "Section 9 Interim Measure Hearing",
      status: "Scheduled",
    },
    {
      date: "28-Nov-2024",
      time: "10:30 AM",
      title: "Title Verification Chamber Session",
      court: "Chamber Conference Room",
      bench: "Client Consultation",
      stage: "Kottayam Property Partition Draft",
      status: "Chambers",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Cause List & Court Calendar</h1>
          <p className="text-xs text-slate-500 mt-1">Daily cause list postings, hearing item numbers, and chamber consultations</p>
        </div>
      </div>

      <div className="space-y-3">
        {events.map((e, idx) => (
          <Card key={idx} className="p-5 bg-white hover:border-slate-300 transition-all space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
                  {e.date} • {e.time}
                </span>
                <span className="text-xs font-semibold text-slate-700">{e.court}</span>
              </div>
              <Badge variant="teal">{e.status}</Badge>
            </div>

            <h3 className="text-sm font-bold text-slate-900">{e.title}</h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
              <span>Bench: <strong className="text-slate-700">{e.bench}</strong></span>
              <span>•</span>
              <span>Stage: <strong className="text-teal-800">{e.stage}</strong></span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
