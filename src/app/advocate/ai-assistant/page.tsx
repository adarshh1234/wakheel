"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AICopilotMode } from "@/types";
import { Sparkles, Send, Bot, FileText, Scale, ShieldCheck, CheckCircle2, Copy } from "lucide-react";

export default function AdvocateAIAssistantPage() {
  const [mode, setMode] = React.useState<AICopilotMode>("Research");
  const [inputPrompt, setInputPrompt] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<Array<{ sender: "user" | "ai"; text: string; mode: string }>>([
    {
      sender: "ai",
      mode: "Research",
      text: "Namaskaram Adv. Meera. I am your Indian Legal Research Copilot. I can evaluate Kerala High Court ratios, examine central enactments, identify conflicting precedents, or draft grounds of petition. What proposition shall we examine?",
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPrompt.trim()) return;

    const userText = inputPrompt;
    setMessages((prev) => [...prev, { sender: "user", text: userText, mode }]);
    setInputPrompt("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          mode,
          text: `Analysis for query: "${userText}"\n\n1. Governing Precedent:\nUnder Settled law of the High Court of Kerala (Valsamma v. KSEB, (2011) 2 KLT 234), the Telegraph Authority cannot unilaterally enter private land when resistance is recorded; statutory adjudication under Sec 16(1) by the District Magistrate is quasi-judicial and mandatory.\n\n2. Supreme Court Ratio:\nAffirmed by the Supreme Court in Century Textiles & Industries (2017) 5 SCC 143. Principles of natural justice (audi alteram partem) require personal hearing before finalizing alternate transmission line alignments.\n\n3. Suggested Pleadings Ground:\nAssert violation of Article 300A and jurisdictional illegality under Section 16(1) of Indian Telegraph Act, 1885.`,
        },
      ]);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Wakheel AI Legal Copilot</h1>
            <Badge variant="teal">India Law Model</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">Multi-modal research, contract inspection, and drafting copilot with certified citation cross-checking</p>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="bg-white p-2 rounded-xl border border-slate-200 flex flex-wrap gap-1.5 text-xs">
        {(["Ask", "Research", "Analyze", "Draft", "Review", "Verify"] as AICopilotMode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
              mode === m ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Main Copilot Chat Area */}
      <Card className="border-slate-200 bg-white min-h-[460px] flex flex-col justify-between p-5 space-y-4">
        <div className="space-y-4 overflow-y-auto max-h-[500px]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 text-xs leading-relaxed ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <div className="h-8 w-8 rounded-lg bg-teal-700 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4" />
                </div>
              )}
              <div
                className={`p-4 rounded-xl max-w-2xl whitespace-pre-line ${
                  msg.sender === "user"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-50 border border-slate-200 text-slate-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-xs text-slate-500 italic p-3">
              <Sparkles className="h-4 w-4 animate-spin text-teal-600" />
              Scanning Kerala Law Times, AIR, and Supreme Court records...
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="pt-4 border-t border-slate-100 flex gap-2">
          <Input
            placeholder={`Ask Copilot in [${mode}] mode: e.g. What are the essential grounds to contest high tension line realignment in Kerala?`}
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" variant="teal" isLoading={loading} className="gap-1.5 font-semibold text-xs">
            <Send className="h-3.5 w-3.5" /> Execute
          </Button>
        </form>
      </Card>

      <DisclaimerBanner
        type="ai_disclaimer"
        message="AI-generated legal information for research and assistance. It is not a substitute for advice from a qualified legal professional."
      />
    </div>
  );
}
