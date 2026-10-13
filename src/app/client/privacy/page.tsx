"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Download, Trash2 } from "lucide-react";

export default function ClientPrivacyPage() {
  const [downloadRequested, setDownloadRequested] = React.useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Privacy & Data Governance</h1>
        <p className="text-xs text-slate-500 mt-1">Manage data consent, download your case records, and exercise DPDP Act rights</p>
      </div>

      <Card className="p-6 bg-white space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Digital Personal Data Protection Act (DPDP Act) Controls</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Wakheel isolates client-advocate communications. You can request a full machine-readable archive of all documents and consultations associated with your account.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDownloadRequested(true)}
            className="text-xs gap-1.5"
          >
            <Download className="h-3.5 w-3.5" />
            {downloadRequested ? "Download Archive Ready (Demo ZIP)" : "Request Full Data Export"}
          </Button>
          <Button variant="outline" size="sm" className="text-xs text-red-700 hover:bg-red-50 gap-1.5">
            <Trash2 className="h-3.5 w-3.5" /> Request Account Erasure
          </Button>
        </div>
      </Card>
    </div>
  );
}
