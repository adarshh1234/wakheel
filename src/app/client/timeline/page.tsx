"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, Calendar, CheckCircle2, Clock } from "lucide-react";

export default function ClientTimelinePage() {
  const events = [
    { date: "20-Nov-2024", title: "Upcoming Final Arguments in Kerala High Court", status: "Scheduled", desc: "Hon'ble Justice K. Haripal, Bench 4B. Your presence in court is optional; advocate will appear." },
    { date: "15-Nov-2024", title: "Pre-Hearing Video Consultation", status: "Scheduled", desc: "Video strategy meeting with Adv. Meera Krishnan." },
    { date: "02-Jul-2024", title: "Interim Stay of Tree-Felling Granted", status: "Completed", desc: "High Court passed stay order prohibiting KSEB from entering agricultural holding." },
    { date: "14-Jun-2024", title: "Writ Petition Filed in Kerala High Court", status: "Completed", desc: "Filed under Article 226 as WP(C) 19482/2024." },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Case Timeline & Next Steps</h1>
        <p className="text-xs text-slate-500 mt-1">Milestones, court orders, and next actions for WP(C) 19482/2024</p>
      </div>

      <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
        {events.map((e, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-full bg-teal-700 ring-4 ring-white" />
            <Card className="p-4 bg-white space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-slate-700">{e.date}</span>
                <Badge variant={e.status === "Completed" ? "success" : "warning"} className="text-[10px]">
                  {e.status}
                </Badge>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{e.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{e.desc}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
