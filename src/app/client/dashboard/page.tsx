"use client";

import * as React from "react";
import { useAuthStore } from "@/stores/auth-store";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_MATTERS, MOCK_APPOINTMENTS, MOCK_NOTIFICATIONS } from "@/lib/mock-data";
import {
  Sparkles,
  Users,
  Briefcase,
  Calendar,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";

export default function ClientDashboardPage() {
  const { currentUser } = useAuthStore();
  const activeMatters = MOCK_MATTERS.filter((m) => m.clientId === currentUser.id || true);
  const upcomingAppointments = MOCK_APPOINTMENTS.filter((a) => a.status === "confirmed" || a.status === "requested");

  return (
    <div className="space-y-6">
      {/* Welcome & Quick Action Card */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-medium">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Common Man Legal Services Portal • Kerala & India</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Namaskaram, {currentUser.name.split(" ")[0]}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Submit new legal grievances, track active court matters before the High Court of Kerala or Subordinate Courts, and consult with verified advocates without complicated legal jargon.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/client/legal-help">
              <Button size="md" variant="teal" className="gap-2 font-semibold">
                <PlusCircle className="h-4 w-4" />
                Submit New Legal Issue
              </Button>
            </Link>
            <Link href="/client/advocates">
              <Button size="md" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 gap-2">
                <Users className="h-4 w-4" />
                Find Verified Advocates
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Active Matters
            </span>
            <Briefcase className="h-4 w-4 text-teal-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">{activeMatters.length}</span>
            <span className="text-xs text-emerald-600 font-medium">Kerala High Court</span>
          </div>
        </Card>

        <Card className="p-4 border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Upcoming Consultations
            </span>
            <Calendar className="h-4 w-4 text-teal-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">{upcomingAppointments.length}</span>
            <span className="text-xs text-slate-500">Video & In-Person</span>
          </div>
        </Card>

        <Card className="p-4 border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Documents in Vault
            </span>
            <FileText className="h-4 w-4 text-teal-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">8</span>
            <span className="text-xs text-slate-500">Encrypted</span>
          </div>
        </Card>

        <Card className="p-4 border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Pending Actions
            </span>
            <Clock className="h-4 w-4 text-amber-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">1</span>
            <span className="text-xs text-amber-700 font-medium">Sketch review required</span>
          </div>
        </Card>
      </div>

      {/* Main Content Grid: Matters & Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Matters Feed */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base">Active Legal Matters</CardTitle>
                <CardDescription>
                  Real-time court status and assigned advocate progress
                </CardDescription>
              </div>
              <Link href="/client/matters">
                <Button variant="ghost" size="sm" className="text-xs gap-1">
                  View All <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              {activeMatters.map((matter) => (
                <div
                  key={matter.id}
                  className="rounded-xl border border-slate-200 p-4 hover:border-slate-300 transition-colors bg-white space-y-2.5"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                      {matter.matterNumber}
                    </span>
                    <Badge variant="teal" className="capitalize">
                      {matter.status.replace("_", " ")}
                    </Badge>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-900">
                    {matter.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
                    <span>Court: {matter.court}</span>
                    <span>•</span>
                    <span>Advocate: {matter.assignedAdvocateName}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Last update: {new Date(matter.lastUpdated).toLocaleDateString("en-IN")}
                    </span>
                    <Link href={`/client/matters`}>
                      <Button variant="outline" size="sm" className="text-xs h-7">
                        Matter Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar: Appointments & AI Help Widget */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Upcoming Appointments</CardTitle>
              <CardDescription>Scheduled consultations with advocates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              {upcomingAppointments.map((apt) => (
                <div key={apt.id} className="rounded-lg border border-slate-200 p-3 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">{apt.category}</span>
                    <Badge variant="outline" className="capitalize text-[10px]">
                      {apt.mode}
                    </Badge>
                  </div>
                  <p className="text-slate-600">{apt.advocateName} ({apt.advocateCourt})</p>
                  <div className="text-slate-500 font-mono text-[11px] pt-1">
                    {apt.date} • {apt.timeSlot}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Ask Wakheel AI Callout */}
          <Card className="border-teal-200 bg-teal-50/40 p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-teal-700 text-white shrink-0">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-teal-950 uppercase tracking-wider">
                  Ask Wakheel AI
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Have a question about Kerala tenant rights, consumer complaints, or police FIR procedures?
                </p>
                <Link href="/client/legal-ai">
                  <Button variant="teal" size="sm" className="text-xs h-8">
                    Start AI Consultation Demo →
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
