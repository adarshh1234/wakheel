"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { PenTool, Save, CheckCircle2, Copy, Download, FileText } from "lucide-react";

export default function AdvocateDraftingPage() {
  const [template, setTemplate] = React.useState("writ");
  const [draftContent, setDraftContent] = React.useState(
    `BEFORE THE HON'BLE HIGH COURT OF KERALA AT ERNAKULAM\n(Special Original Jurisdiction)\n\nW.P.(C) No. ________ of 2024\n\nMEMORANDUM OF WRIT PETITION UNDER ARTICLE 226 OF THE CONSTITUTION OF INDIA\n\nBetween:\nGopakumar Nambiar, residing at Aluva Taluk, Ernakulam District... PETITIONER\n\nAND\n\n1. Kerala State Electricity Board Ltd., Vydyuthi Bhavanam, Thiruvananthapuram.\n2. The District Magistrate & District Collector, Collectorate, Kakkanad, Ernakulam.\n... RESPONDENTS\n\nGROUNDS:\nA. Because the impugned notice realignment violates Section 16(1) of the Indian Telegraph Act, 1885 read with principles of natural justice.\nB. Because the 2nd Respondent passed the entry permission without granting personal hearing to the petitioner contrary to the dictum in Valsamma v. KSEB (2011 (2) KLT 234).\nC. Because viable alternate alignment along the existing PWD road was arbitrarily disregarded.`
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Legal Drafting Workspace</h1>
          <p className="text-xs text-slate-500 mt-1">Structured pleading templates for Kerala High Court and civil proceedings</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs gap-1.5">
            <Copy className="h-3.5 w-3.5" /> Copy Draft
          </Button>
          <Button variant="teal" size="sm" className="text-xs gap-1.5 font-semibold">
            <Save className="h-3.5 w-3.5" /> Save Revision
          </Button>
        </div>
      </div>

      {/* Template Chooser */}
      <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-wrap gap-2 text-xs">
        <span className="font-semibold text-slate-500 self-center">Template:</span>
        <button
          onClick={() => setTemplate("writ")}
          className={`px-3 py-1.5 rounded-lg font-medium cursor-pointer ${
            template === "writ" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
          }`}
        >
          Kerala High Court Writ Petition
        </button>
        <button
          onClick={() => setTemplate("notice")}
          className={`px-3 py-1.5 rounded-lg font-medium cursor-pointer ${
            template === "notice" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
          }`}
        >
          Section 21 Arbitration Notice
        </button>
        <button
          onClick={() => setTemplate("stay")}
          className={`px-3 py-1.5 rounded-lg font-medium cursor-pointer ${
            template === "stay" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
          }`}
        >
          Interim Injunction Affidavit
        </button>
      </div>

      {/* Drafting Editor Card */}
      <Card className="p-5 bg-white border-slate-200 space-y-3">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-teal-700" />
            <span className="font-bold text-slate-800">Draft Document Editor</span>
          </div>
          <Badge variant="secondary" className="text-[10px]">
            Advocate Review Pending
          </Badge>
        </div>

        <textarea
          rows={16}
          value={draftContent}
          onChange={(e) => setDraftContent(e.target.value)}
          className="w-full font-mono text-xs leading-relaxed p-4 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </Card>

      <DisclaimerBanner
        type="human_review_required"
        message="Draft pleadings generated or edited must be reviewed and signed off by the Advocate on Record before filing with the registry."
      />
    </div>
  );
}
