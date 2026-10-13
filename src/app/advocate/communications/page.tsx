"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, User } from "lucide-react";

export default function AdvocateCommunicationsPage() {
  const [msgInput, setMsgInput] = React.useState("");
  const [messages, setMessages] = React.useState([
    { sender: "client", name: "Gopakumar Nambiar", text: "Advocate madam, I have collected the certified sketch from Aluva PWD office. Should I upload it to the vault?" },
    { sender: "advocate", name: "Adv. Meera Krishnan", text: "Yes Gopakumar, please upload it to WP(C) 19482/2024 vault so we can exhibit it with our reply affidavit before 12-Nov." },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setMessages((prev) => [...prev, { sender: "advocate", name: "Adv. Meera Krishnan", text: msgInput }]);
    setMsgInput("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Client Communications & Threads</h1>
        <p className="text-xs text-slate-500 mt-1">Direct confidential messaging channel with active clients and chamber retainers</p>
      </div>

      <Card className="p-5 bg-white min-h-[460px] flex flex-col justify-between space-y-4">
        <div className="space-y-3 overflow-y-auto max-h-[400px]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col text-xs max-w-md ${
                m.sender === "advocate" ? "ml-auto items-end" : "mr-auto items-start"
              }`}
            >
              <span className="text-[10px] text-slate-400 mb-1 font-semibold">{m.name}</span>
              <div
                className={`p-3 rounded-xl leading-relaxed ${
                  m.sender === "advocate"
                    ? "bg-teal-700 text-white rounded-br-none"
                    : "bg-slate-100 text-slate-800 rounded-bl-none"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="pt-3 border-t border-slate-100 flex gap-2">
          <Input
            placeholder="Type confidential chamber message to client..."
            value={msgInput}
            onChange={(e) => setMsgInput(e.target.value)}
          />
          <Button type="submit" variant="teal" size="sm" className="gap-1 text-xs px-4">
            <Send className="h-3.5 w-3.5" /> Send
          </Button>
        </form>
      </Card>
    </div>
  );
}
