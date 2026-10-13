"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { Sparkles, Send, ShieldCheck, HelpCircle } from "lucide-react";

export default function ClientLegalAIPage() {
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [answers, setAnswers] = React.useState<Array<{ q: string; a: string }>>([
    {
      q: "Can my landlord in Kochi increase rent by 25% without notice?",
      a: "Under the Kerala Buildings (Lease and Rent Control) Act, 1965 and standard tenancy practices in Kerala, unilateral unreasonable rent hikes without mutual agreement or statutory fair rent determination by the Rent Control Court are impermissible. A formal notice specifying the terms is required before any lease variation.",
    },
  ]);

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userQ = query;
    setQuery("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setAnswers((prev) => [
        ...prev,
        {
          q: userQ,
          a: `AI Research Summary: Regarding "${userQ}", under Kerala and Indian law, you are entitled to statutory remedies. However, this is informational only. Please book a consultation with a verified advocate on Wakheel to review your specific documentation.`,
        },
      ]);
    }, 700);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Ask Wakheel Legal AI</h1>
        <p className="text-xs text-slate-500 mt-1">Plain-language legal information for everyday citizens in Kerala and India</p>
      </div>

      <Card className="p-5 bg-white space-y-4">
        <form onSubmit={handleAsk} className="flex gap-2">
          <Input
            placeholder="Ask a legal question in simple English or Malayalam (e.g. Consumer court complaints, land survey)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" variant="teal" isLoading={loading} className="gap-1.5 font-semibold text-xs">
            <Send className="h-3.5 w-3.5" /> Ask AI
          </Button>
        </form>

        <div className="space-y-3 pt-3 border-t border-slate-100">
          {answers.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">Q: {item.q}</span>
              <p className="text-slate-700 leading-relaxed">A: {item.a}</p>
            </div>
          ))}
        </div>
      </Card>

      <DisclaimerBanner
        type="ai_disclaimer"
        message="AI-generated legal information for research and assistance. It is not a substitute for advice from a qualified legal professional."
      />
    </div>
  );
}
