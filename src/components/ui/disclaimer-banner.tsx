import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, ShieldAlert, CheckCircle2, UserCheck } from "lucide-react";

interface DisclaimerBannerProps {
  type?: "ai_disclaimer" | "human_review_required" | "advocate_approved" | "demo_notice";
  message?: string;
  className?: string;
}

export function DisclaimerBanner({
  type = "ai_disclaimer",
  message,
  className,
}: DisclaimerBannerProps) {
  if (type === "ai_disclaimer") {
    return (
      <div
        className={cn(
          "flex items-start gap-3 rounded-lg border border-amber-200/90 bg-amber-50/70 p-3.5 text-xs text-amber-900",
          className
        )}
      >
        <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
        <div>
          <span className="font-semibold uppercase tracking-wider text-[10px] text-amber-800 block mb-0.5">
            Legal AI Research Disclaimer
          </span>
          <p className="leading-relaxed">
            {message ||
              "AI-generated legal information for research and assistance. It is not a substitute for advice from a qualified legal professional."}
          </p>
        </div>
      </div>
    );
  }

  if (type === "human_review_required") {
    return (
      <div
        className={cn(
          "flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/70 p-3 text-xs text-purple-900",
          className
        )}
      >
        <ShieldAlert className="h-4 w-4 shrink-0 text-purple-600 mt-0.5" />
        <div>
          <span className="font-semibold uppercase tracking-wider text-[10px] text-purple-800 block mb-0.5">
            Human Review Required
          </span>
          <p className="leading-relaxed">
            {message ||
              "This draft or analysis contains simulated AI conclusions and must be scrutinized, revised, and signed off by an authorized advocate."}
          </p>
        </div>
      </div>
    );
  }

  if (type === "advocate_approved") {
    return (
      <div
        className={cn(
          "flex items-center gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50/70 px-3.5 py-2 text-xs text-emerald-900",
          className
        )}
      >
        <UserCheck className="h-4 w-4 shrink-0 text-emerald-600" />
        <span className="font-medium">
          {message || "Formally scrutinized and approved by Advocate on Record."}
        </span>
      </div>
    );
  }

  // demo_notice
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs text-slate-700",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-teal-600" />
        <span className="font-medium">
          {message || "Wakheel Frontend Architecture Demonstration — Local Mock Data & UI Workflow Mode"}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
        No Real External API Calls
      </span>
    </div>
  );
}
