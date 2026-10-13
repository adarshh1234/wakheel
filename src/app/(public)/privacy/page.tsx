"use client";

import * as React from "react";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Governance & Compliance</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-950">Privacy Policy & Data Rights</h1>
        <p className="text-xs text-slate-500">Effective Date: October 2026 • Compliant with Indian DPDP Act 2023</p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
        <h3 className="text-base font-bold text-slate-900">1. Client Confidentiality & Advocate Privilege</h3>
        <p>
          Wakheel respects the sanctity of advocate-client communications protected under Section 126 of the Indian Evidence Act, 1872 / Bharatiya Sakshya Adhiniyam, 2023. User documents uploaded to the vault are isolated and encrypted.
        </p>

        <h3 className="text-base font-bold text-slate-900">2. No Real Data Exfiltration</h3>
        <p>
          This frontend preview operates exclusively on mock demonstration records and local state. No personal legal documents, passwords, or communications are transmitted to third-party language models or public servers.
        </p>

        <h3 className="text-base font-bold text-slate-900">3. Rights of Data Principals</h3>
        <p>
          Under the Digital Personal Data Protection Act, 2023 (DPDP Act), users have the right to request access, correction, and deletion of their personal data.
        </p>
      </div>
    </div>
  );
}
