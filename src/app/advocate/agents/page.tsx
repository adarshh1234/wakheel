"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_LEGAL_AGENTS } from "@/lib/mock-data";
import { Bot, Play, CheckCircle2, ShieldAlert } from "lucide-react";

export default function AdvocateAgentsPage() {
  const [runningAgent, setRunningAgent] = React.useState<string | null>(null);

  const handleRun = (id: string) => {
    setRunningAgent(id);
    setTimeout(() => {
      setRunningAgent(null);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Autonomous Legal Agents</h1>
          <p className="text-xs text-slate-500 mt-1">Deploy specialized agents for case preparation, contract analysis, and citation verification</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {MOCK_LEGAL_AGENTS.map((agent) => (
          <Card key={agent.id} className="p-5 bg-white hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <Badge variant="teal" className="text-[10px] uppercase">{agent.status}</Badge>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">{agent.name}</h3>
                <span className="text-xs text-teal-700 font-semibold">{agent.role}</span>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{agent.description}</p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                <div className="text-[11px] text-slate-500">
                  <strong className="text-slate-700">Inputs:</strong> {agent.supportedInputs.join(", ")}
                </div>
                <div className="text-[11px] text-slate-500">
                  <strong className="text-slate-700">Outputs:</strong> {agent.expectedOutputs.join(", ")}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <Button
                variant="primary"
                size="sm"
                className="w-full text-xs font-semibold gap-1.5 bg-slate-900"
                isLoading={runningAgent === agent.id}
                onClick={() => handleRun(agent.id)}
              >
                <Play className="h-3.5 w-3.5 text-teal-400" />
                {runningAgent === agent.id ? "Executing Agent Pipeline..." : "Run Agent Demo"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
