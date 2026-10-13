"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MOCK_VAULT_DOCUMENTS } from "@/lib/mock-data";
import { FolderLock, UploadCloud, FileText, CheckCircle2, Shield, Eye, Download } from "lucide-react";

export default function AdvocateVaultPage() {
  const [search, setSearch] = React.useState("");

  const filtered = MOCK_VAULT_DOCUMENTS.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase()) ||
    d.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Encrypted Document Vault</h1>
          <p className="text-xs text-slate-500 mt-1">Court filings, notices, and scanned evidence with OCR text extraction & version trees</p>
        </div>
        <Button variant="teal" size="sm" className="gap-1.5 text-xs">
          <UploadCloud className="h-4 w-4" /> Upload Document Scan
        </Button>
      </div>

      <div className="bg-white p-3.5 rounded-xl border border-slate-200">
        <Input
          isSearch
          placeholder="Search documents by title, matter, or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((doc) => (
          <Card key={doc.id} className="p-5 bg-white hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-800">Version {doc.version}.0</span>
                    <span className="text-[11px] text-slate-400 block">{doc.fileSize} • {doc.category}</span>
                  </div>
                </div>
                <Badge riskLevel={doc.overallRisk} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{doc.title}</h3>
                <p className="text-xs text-slate-500 font-mono">{doc.fileName}</p>
                {doc.matterTitle && (
                  <p className="text-xs text-teal-800 mt-1 font-medium">Matter: {doc.matterTitle}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 text-[11px]">
                <span className="text-emerald-700 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5" /> OCR Complete
                </span>
                <span>•</span>
                <span className="text-slate-500">{doc.pageCount} Pages</span>
                <span>•</span>
                <span className="text-slate-500">{doc.processingStage}</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <Link href="/advocate/contracts">
                <Button variant="outline" size="sm" className="text-xs h-8 gap-1">
                  <Eye className="h-3.5 w-3.5" /> Clause Intelligence
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="text-xs h-8 gap-1 text-slate-600">
                <Download className="h-3.5 w-3.5" /> Export PDF
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
