"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, RefreshCw, CheckCircle2 } from "lucide-react";

export default function KnowledgeAdminVectorIndexPage() {
  const [reindexing, setReindexing] = React.useState(false);

  const handleReindex = () => {
    setReindexing(true);
    setTimeout(() => setReindexing(false), 1200);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Vector Index & Embedding Status</h1>
          <p className="text-xs text-slate-500 mt-1">Status of chunked legal embeddings for Indian statutory & case-law search</p>
        </div>
        <Button variant="teal" size="sm" isLoading={reindexing} onClick={handleReindex} className="text-xs gap-1.5 font-semibold">
          <RefreshCw className="h-3.5 w-3.5" /> Trigger Incremental Reindex
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 bg-white">
          <span className="text-xs font-semibold text-slate-500 uppercase block">Total Chunks</span>
          <span className="text-2xl font-bold text-slate-900 mt-1 block">1,842,910</span>
          <span className="text-[11px] text-teal-700 font-medium">1024-dim Indian Legal Embeddings</span>
        </Card>
        <Card className="p-4 bg-white">
          <span className="text-xs font-semibold text-slate-500 uppercase block">Index Health</span>
          <span className="text-2xl font-bold text-emerald-700 mt-1 block">100% Synced</span>
          <span className="text-[11px] text-emerald-600 font-medium">HNSW Index Active</span>
        </Card>
        <Card className="p-4 bg-white">
          <span className="text-xs font-semibold text-slate-500 uppercase block">Failed Ingestions</span>
          <span className="text-2xl font-bold text-slate-900 mt-1 block">0</span>
          <span className="text-[11px] text-slate-400 font-medium">Zero parsing errors</span>
        </Card>
      </div>
    </div>
  );
}
