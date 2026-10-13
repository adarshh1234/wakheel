"use client";

import * as React from "react";
import { useAuthStore } from "@/stores/auth-store";
import { UserRole } from "@/types";
import { useRouter } from "next/navigation";
import { Users, Scale, ShieldCheck, Database, Check } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RoleSwitcherDemoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RoleSwitcherDemo({ open, onOpenChange }: RoleSwitcherDemoProps) {
  const { currentRole, switchUserRole } = useAuthStore();
  const router = useRouter();

  const roles: {
    role: UserRole;
    title: string;
    description: string;
    dashboardRoute: string;
    icon: React.ElementType;
    badge: string;
  }[] = [
    {
      role: "client",
      title: "Common Man / Individual Client",
      description: "Submit legal problems, discover verified advocates in Kerala/India, track matters, view notices & timeline.",
      dashboardRoute: "/client/dashboard",
      icon: Users,
      badge: "Citizen / Client",
    },
    {
      role: "advocate",
      title: "Advocate / Legal Chambers",
      description: "Full Indian legal practice workspace: Matter Intelligence, High Court research, AI Copilot, drafting, vault & contracts.",
      dashboardRoute: "/advocate/dashboard",
      icon: Scale,
      badge: "Advocate on Record",
    },
    {
      role: "admin",
      title: "Platform Administrator",
      description: "Oversee user verification, advocate Bar Council checks, system health, disputes, and jurisdiction parameters.",
      dashboardRoute: "/admin/dashboard",
      icon: ShieldCheck,
      badge: "Platform Governance",
    },
    {
      role: "knowledge_admin",
      title: "Legal Knowledge Administrator",
      description: "Curate statutory acts, ingest Kerala High Court / Supreme Court gazettes, review citations, manage vector indices.",
      dashboardRoute: "/knowledge-admin/dashboard",
      icon: Database,
      badge: "Knowledge Curation",
    },
  ];

  const handleSelect = (r: (typeof roles)[0]) => {
    switchUserRole(r.role);
    onOpenChange(false);
    router.push(r.dashboardRoute);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="Switch Demo Persona & Workspace"
      description="Select any role to instantly experience Wakheel from that user's perspective. All data is locally simulated."
      className="max-w-xl"
    >
      <div className="space-y-3 mt-2">
        {roles.map((item) => {
          const Icon = item.icon;
          const isSelected = currentRole === item.role;

          return (
            <div
              key={item.role}
              onClick={() => handleSelect(item)}
              className={`group flex items-start justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? "border-teal-600 bg-teal-50/50 ring-1 ring-teal-600/20"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2.5 rounded-lg shrink-0 ${
                    isSelected
                      ? "bg-teal-700 text-white"
                      : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="shrink-0 pl-2">
                {isSelected ? (
                  <div className="h-6 w-6 rounded-full bg-teal-700 text-white flex items-center justify-center">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                ) : (
                  <Button size="sm" variant="outline" className="text-xs h-7">
                    Switch
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Dialog>
  );
}
