"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_NOTIFICATIONS } from "@/lib/mock-data";
import { Bell, CheckCircle2 } from "lucide-react";

export default function ClientNotificationsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Notifications & Alerts</h1>
        <p className="text-xs text-slate-500 mt-1">Court listings, appointment reminders, and document uploads</p>
      </div>

      <div className="space-y-3">
        {MOCK_NOTIFICATIONS.map((n) => (
          <Card key={n.id} className="p-4 bg-white flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-50 text-teal-700 shrink-0 mt-0.5">
              <Bell className="h-4 w-4" />
            </div>
            <div className="space-y-1 flex-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">{n.title}</span>
                <span className="text-[10px] text-slate-400 font-mono">{n.timestamp.split("T")[0]}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{n.message}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
