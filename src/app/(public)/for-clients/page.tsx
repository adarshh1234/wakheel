"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, ShieldCheck, Calendar, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";

export default function ForClientsPage() {
  const steps = [
    {
      step: "01",
      title: "Plain Language Issue Submission",
      description: "Explain your legal problem in everyday Malayalam or English without confusing legal jargon. Our wizard helps pinpoint the right category.",
    },
    {
      step: "02",
      title: "Discover Verified Advocates",
      description: "Connect with genuine advocates verified with the Bar Council of Kerala and District Bar Associations across all 14 districts.",
    },
    {
      step: "03",
      title: "Transparent Consultations",
      description: "Book video consultations or in-person chamber appointments with clear consultation fees in Indian Rupees.",
    },
    {
      step: "04",
      title: "Track Court Milestones",
      description: "Follow your matter's timeline, upcoming court hearing dates, and view documents securely uploaded to your vault.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <Users className="h-3.5 w-3.5 text-teal-700" />
          <span>Citizen Legal Services</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Accessible Legal Help for Every Citizen in Kerala & India
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From property boundary disputes and tenancy agreements to consumer complaints and court matters, get clear, professional guidance from verified advocates.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link href="/auth?role=client">
            <Button variant="teal" size="lg" className="font-semibold gap-2">
              Get Started as Client <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/legal-research">
            <Button variant="outline" size="lg">
              Explore Legal Answers
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((item) => (
          <Card key={item.step} className="p-6 relative overflow-hidden flex flex-col justify-between">
            <span className="text-3xl font-extrabold text-teal-600/20 font-mono absolute top-4 right-4">
              {item.step}
            </span>
            <div className="space-y-2 mt-2">
              <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
