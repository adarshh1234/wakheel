"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_APPOINTMENTS } from "@/lib/mock-data";
import { Clock, Video, UserCheck, CheckCircle2, XCircle } from "lucide-react";

export default function AdvocateAppointmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Client Consultations & Appointments</h1>
        <p className="text-xs text-slate-500 mt-1">Manage scheduled video consultations and in-person chamber sessions</p>
      </div>

      <div className="space-y-3">
        {MOCK_APPOINTMENTS.map((apt) => (
          <Card key={apt.id} className="p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                  {apt.date} • {apt.timeSlot}
                </span>
                <Badge variant="teal" className="capitalize text-[10px]">{apt.mode}</Badge>
                <Badge variant="outline" className="capitalize text-[10px]">{apt.status}</Badge>
              </div>

              <h3 className="text-sm font-bold text-slate-900">{apt.category}</h3>
              <p className="text-xs text-slate-600">Client: <strong>{apt.clientName}</strong> ({apt.clientPhone})</p>
              <p className="text-xs text-slate-500">{apt.summary}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {apt.mode === "video" && (
                <Button variant="teal" size="sm" className="text-xs gap-1">
                  <Video className="h-3.5 w-3.5" /> Start Video Demo
                </Button>
              )}
              <Button variant="outline" size="sm" className="text-xs">
                Reschedule
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
