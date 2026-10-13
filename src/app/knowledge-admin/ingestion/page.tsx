"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Database, UploadCloud, CheckCircle2 } from "lucide-react";

export default function KnowledgeAdminIngestionPage() {
  const [ingested, setIngested] = React.useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Statute & Order Ingestion Pipeline</h1>
        <p className="text-xs text-slate-500 mt-1">Upload legislative bills, Kerala gazettes, and certified judgment PDFs for OCR and indexing</p>
      </div>

      <Card className="p-6 bg-white space-y-4 text-xs">
        {ingested ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">Ingestion Queued for Headnote Curation</h3>
            <p className="text-slate-600">The document has been chunked and queued for editorial sign-off.</p>
            <Button variant="teal" size="sm" onClick={() => setIngested(false)}>Ingest Another Act</Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIngested(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Enactment / Regulation Title</label>
              <Input placeholder="e.g. Kerala Real Estate (Regulation and Development) Rules, 2018" required />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Jurisdiction</label>
                <Input defaultValue="Kerala, India" required />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Effective Date</label>
                <Input type="date" defaultValue="2024-01-01" required />
              </div>
            </div>

            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center space-y-2">
              <UploadCloud className="h-8 w-8 text-teal-700 mx-auto" />
              <div className="text-xs text-slate-700">
                <span className="font-semibold text-teal-800">Select Official Gazette PDF</span> or drag and drop
              </div>
            </div>

            <Button type="submit" variant="teal" className="w-full font-semibold py-2.5">
              Trigger Ingestion Pipeline Demo
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
