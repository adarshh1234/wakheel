"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, ShieldCheck, MapPin, Users, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <Scale className="h-3.5 w-3.5" />
          <span>About Wakheel.com</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
          Transforming Legal Intelligence for India
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Founded in Kerala with a national vision, Wakheel provides an AI-powered legal intelligence operating system designed for Indian jurisprudence and citizen access.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
        <p>
          The Indian legal system is one of the largest in the world, with tens of millions of active disputes and over a century of reported judicial rulings across the Supreme Court of India, 25 High Courts, and specialized tribunals.
        </p>
        <p>
          Yet, practicing advocates often navigate disconnected tools—one for case-law search, another for drafting, and paper files for client files. Wakheel unifies these functions into a single intelligent workspace that respects Indian legal ethics, Bar Council standards, and privacy requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <Card className="p-4 text-center space-y-1">
          <MapPin className="h-5 w-5 text-teal-700 mx-auto" />
          <h4 className="text-sm font-bold text-slate-900">Kerala Pilot</h4>
          <p className="text-xs text-slate-500">Ernakulam & 14 District Bar Associations</p>
        </Card>
        <Card className="p-4 text-center space-y-1">
          <ShieldCheck className="h-5 w-5 text-teal-700 mx-auto" />
          <h4 className="text-sm font-bold text-slate-900">Zero Solicitations</h4>
          <p className="text-xs text-slate-500">Compliant with Bar Council of India rules</p>
        </Card>
        <Card className="p-4 text-center space-y-1">
          <Users className="h-5 w-5 text-teal-700 mx-auto" />
          <h4 className="text-sm font-bold text-slate-900">Human in the Loop</h4>
          <p className="text-xs text-slate-500">Mandatory Advocate sign-off on AI work</p>
        </Card>
      </div>
    </div>
  );
}
