"use client";

import * as React from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";

interface WorkspaceShellProps {
  children: React.ReactNode;
  headerTitle?: string;
  headerSubtitle?: string;
  actions?: React.ReactNode;
}

export function WorkspaceShell({
  children,
  headerTitle,
  headerSubtitle,
  actions,
}: WorkspaceShellProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      {/* Role-aware dynamic sidebar */}
      <React.Suspense fallback={<div className="w-64 bg-slate-950" />}>
        <AppSidebar />
      </React.Suspense>

      {/* Main Workspace Column */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Workspace Top Header */}
        <React.Suspense fallback={<div className="h-16 bg-white border-b border-slate-200" />}>
          <AppHeader />
        </React.Suspense>

        {/* Global Demo & Compliance Indicator */}
        <div className="bg-slate-100/90 border-b border-slate-200/80 px-4 sm:px-6 py-2">
          <DisclaimerBanner
            type="demo_notice"
            message="Wakheel Simulated Intelligence Workspace • Kerala, India Legal Practice Pilot"
          />
        </div>

        {/* Workspace Body */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <React.Suspense fallback={<div className="p-8 text-xs text-slate-500">Loading workspace view...</div>}>
            {(headerTitle || actions) && (
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  {headerTitle && (
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                      {headerTitle}
                    </h1>
                  )}
                  {headerSubtitle && (
                    <p className="mt-1 text-xs sm:text-sm text-slate-500">{headerSubtitle}</p>
                  )}
                </div>
                {actions && <div className="flex items-center gap-2.5 shrink-0">{actions}</div>}
              </div>
            )}

            {children}
          </React.Suspense>
        </main>
      </div>
    </div>
  );
}
