import * as React from "react";
import Link from "next/link";
import { Scale, Shield } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                <Scale className="h-4 w-4 text-teal-400" />
              </div>
              <span className="font-bold text-base tracking-tight text-slate-900">
                WAKHEEL<span className="text-teal-600">.COM</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              India-first AI legal intelligence and matter workspace platform. Empowering advocates, legal chambers, and citizens with verifiable case-law discovery, citation validation, and document intelligence starting in Kerala, India.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <Shield className="h-4 w-4 text-teal-600 shrink-0" />
              <span>Compliant with Bar Council of India professional standards.</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/legal-research" className="hover:text-slate-900 transition-colors">
                  Indian Legal Research
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-slate-900 transition-colors">
                  AI Legal Copilot
                </Link>
              </li>
              <li>
                <Link href="/for-advocates" className="hover:text-slate-900 transition-colors">
                  Advocate Practice OS
                </Link>
              </li>
              <li>
                <Link href="/for-clients" className="hover:text-slate-900 transition-colors">
                  Client Legal Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-slate-900 transition-colors">
                  Subscription Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Jurisdictions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Jurisdictions
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-700 font-medium">Supreme Court of India</li>
              <li>High Court of Kerala (Ernakulam)</li>
              <li>Kerala District & Subordinate Courts</li>
              <li>NCLT Kochi Bench</li>
              <li className="text-slate-400 pt-1">Delhi / Bombay / Madras (Beta)</li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-slate-900 transition-colors">
                  Privacy Policy & Data Rights
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900 transition-colors">
                  Terms of Service & Disclaimers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-900 transition-colors">
                  About Wakheel
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer & Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 space-y-4">
          <div className="bg-slate-50 border border-slate-200/60 rounded-lg p-3.5 text-[11px] text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-700 uppercase tracking-wider block mb-1">
              Important Legal & Regulatory Notice
            </span>
            Wakheel.com is an informational legal technology and research platform. It does not solicit legal work or advertise legal services. No content generated by AI constitutes formal legal advice or creates an advocate-client relationship. All legal drafting, filings, and advice must be reviewed and approved by an authorized advocate enrolled with a State Bar Council.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <p>© 2026 Wakheel.com Technologies. All rights reserved.</p>
            <p>Designed for Indian Advocates & Citizens | Kerala, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
