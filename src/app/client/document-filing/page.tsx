"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { FolderLock, UploadCloud, CheckCircle2, AlertCircle } from "lucide-react";

export default function ClientDocumentFilingPage() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Document Submission for Advocate Review</h1>
        <p className="text-xs text-slate-500 mt-1">Submit evidence and counter-arguments to your assigned legal counsel</p>
      </div>

      <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
        <AlertCircle className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block uppercase tracking-wider text-[10px]">Important Legal Clarification</span>
          Submitting a document here transmits it securely to your advocate within Wakheel. It does NOT constitute formal filing before a High Court or District Court registry. Only your authorized advocate can formally file pleadings with the court.
        </div>
      </div>

      <Card className="p-6 bg-white space-y-4">
        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">Document Submitted to Advocate</h3>
            <p className="text-xs text-slate-600">Your advocate has been notified to inspect and verify the upload.</p>
            <Button variant="teal" size="sm" onClick={() => setSubmitted(false)}>
              Submit Another Document
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Select Matter</label>
              <select className="w-full h-9 rounded-lg border border-slate-300 px-3 text-xs focus:ring-2 focus:ring-slate-900">
                <option>WP(C) 19482/2024 — Gopakumar Nambiar v. KSEB</option>
                <option>ARB/NCLT/KOCHI/2024/041 — Malabar Infotech</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Document Category</label>
              <select className="w-full h-9 rounded-lg border border-slate-300 px-3 text-xs focus:ring-2 focus:ring-slate-900">
                <option>Survey Sketch / Site Map</option>
                <option>Statutory Notice from Authority</option>
                <option>Property Title Deed</option>
                <option>Agreement / Contract</option>
                <option>Identity Proof</option>
              </select>
            </div>

            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center space-y-2">
              <UploadCloud className="h-8 w-8 text-teal-700 mx-auto" />
              <div className="text-xs text-slate-700">
                <span className="font-semibold text-teal-800">Click to select files</span> or drag and drop
              </div>
              <p className="text-[11px] text-slate-400">PDF, DOCX, JPG, PNG up to 25 MB</p>
            </div>

            <Button type="submit" variant="teal" className="w-full font-semibold py-2.5">
              Submit to Advocate for Court Preparation
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
