import * as React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, ShieldAlert, AlertTriangle, HelpCircle, CheckCircle2 } from "lucide-react";
import { CitationVerificationStatus } from "@/types";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 
    | "default" 
    | "secondary" 
    | "outline" 
    | "success" 
    | "warning" 
    | "danger" 
    | "teal" 
    | "gold";
  verificationStatus?: CitationVerificationStatus;
  riskLevel?: "RED" | "YELLOW" | "GREEN";
}

export function Badge({
  className,
  variant = "default",
  verificationStatus,
  riskLevel,
  children,
  ...props
}: BadgeProps) {
  // If verification status is supplied
  if (verificationStatus) {
    switch (verificationStatus) {
      case "VALID":
        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200",
              className
            )}
            {...props}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            VALID
          </span>
        );
      case "PARTIALLY_VALID":
        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200",
              className
            )}
            {...props}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            PARTIALLY VALID
          </span>
        );
      case "CONFLICTING":
        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200",
              className
            )}
            {...props}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-purple-600" />
            CONFLICTING
          </span>
        );
      case "NOT_FOUND":
        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200",
              className
            )}
            {...props}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            NOT FOUND
          </span>
        );
      case "UNVERIFIED":
      default:
        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-300",
              className
            )}
            {...props}
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            UNVERIFIED
          </span>
        );
    }
  }

  // If riskLevel is supplied
  if (riskLevel) {
    switch (riskLevel) {
      case "RED":
        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold uppercase bg-red-100 text-red-900 border border-red-300",
              className
            )}
            {...props}
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            High Risk (RED)
          </span>
        );
      case "YELLOW":
        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300",
              className
            )}
            {...props}
          >
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            Caution (YELLOW)
          </span>
        );
      case "GREEN":
        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold uppercase bg-emerald-100 text-emerald-900 border border-emerald-300",
              className
            )}
            {...props}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Standard (GREEN)
          </span>
        );
    }
  }

  const variants = {
    default: "bg-slate-900 text-white",
    secondary: "bg-slate-100 text-slate-800 border border-slate-200",
    outline: "border border-slate-300 text-slate-700",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border border-amber-200",
    danger: "bg-red-50 text-red-800 border border-red-200",
    teal: "bg-teal-50 text-teal-800 border border-teal-200",
    gold: "bg-amber-50 text-amber-900 border border-amber-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
