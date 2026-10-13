"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, Calendar, CheckSquare, Clock, ArrowRight } from "lucide-react";

export default function AdvocateCasePreparationPage() {
  const checklist = [
    { item: "Certified copy of District Magistrate entry permission order", done: true },
    { item: "PWD alternative route survey sketch with municipal seal", done: true },
    { item: "Draft Reply Affidavit to KSEB counter affidavit", done: false },
    { item: "Service of notice copy to Standing Counsel for KSEB", done: true },
    { item: "Compilation of Valsamma v. KSEB and Century Textiles judgments for Bench", done: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Case Preparation & Hearing Readiness</h1>
        <p className="text-xs text-slate-500 mt-1">Pre-trial litigation checklist, bench compendium, and evidentiary readiness</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-5 bg-white space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Litigation Readiness Checklist</h3>
            <span className="text-xs font-mono text-teal-700 font-bold">3 of 5 Ready</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {checklist.map((c, i) => (
              <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <input type="checkbox" defaultChecked={c.done} className="rounded text-teal-700" />
                <span className={c.done ? "text-slate-800 font-medium" : "text-amber-800 font-semibold"}>
                  {c.item}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5 bg-white space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Bench Hearing Compendium</h3>
            <Badge variant="warning">Hearing 20-Nov-2024</Badge>
          </div>

          <div className="p-3 bg-amber-50 rounded-lg text-xs space-y-1.5 text-amber-950">
            <strong>Listing: Court Hall 4B • Hon&apos;ble Justice K. Haripal</strong>
            <p className="text-[11px] leading-relaxed">
              Main argument focuses on failure of audi alteram partem under Sec 16(1) of Indian Telegraph Act. Emphasize that alternate road alignment creates zero tree-felling damages.
            </p>
          </div>

          <div className="pt-2">
            <Link href="/advocate/authorities">
              <Button variant="outline" size="sm" className="w-full text-xs gap-1.5">
                Review Authorities Compendium <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
