"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_VAULT_DOCUMENTS } from "@/lib/mock-data";
import { FolderLock, ShieldCheck } from "lucide-react";

export default function AdminDocumentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Document Moderation & Security</h1>
        <p className="text-xs text-slate-500 mt-1">Encrypted storage monitoring, malware scanning status, and OCR health</p>
      </div>

      <div className="space-y-3">
        {MOCK_VAULT_DOCUMENTS.map((d) => (
          <Card key={d.id} className="p-4 bg-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div>
              <span className="font-bold text-slate-900">{d.title}</span>
              <span className="text-slate-500 ml-2">• {d.fileName} ({d.fileSize})</span>
              <span className="text-slate-400 block text-[11px]">Owner: {d.ownerName} • Stage: {d.processingStage}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge riskLevel={d.overallRisk} />
              <Badge variant="outline">{d.advocateReviewStatus}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
