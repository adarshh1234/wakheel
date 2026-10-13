"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { Bot, ShieldCheck } from "lucide-react";

export default function AdminAIConfigurationPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Legal AI Guardrails & Models</h1>
        <p className="text-xs text-slate-500 mt-1">Prompt guardrails, citation verification threshold, and human-in-the-loop policies</p>
      </div>

      <Card className="p-6 bg-white space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Mandatory Human-in-the-Loop Policies</h3>
        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong>Policy 1: Mandatory Legal Disclaimer Injection</strong>
            <p className="text-slate-500 mt-0.5">Every AI output automatically includes the BCI research disclaimer.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong>Policy 2: Strict Overruled Precedent Warning</strong>
            <p className="text-slate-500 mt-0.5">Any cited ratio with negative treatment is flagged with a high-priority warning.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
