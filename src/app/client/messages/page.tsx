"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";

export default function ClientMessagesPage() {
  const [msgInput, setMsgInput] = React.useState("");
  const [messages, setMessages] = React.useState([
    { sender: "advocate", text: "Namaskaram Gopakumar, please upload the certified sketch from Aluva PWD office." },
    { sender: "client", text: "Yes Madam, I have collected the document. Uploading it now." },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setMessages((prev) => [...prev, { sender: "client", text: msgInput }]);
    setMsgInput("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Messages with Advocate</h1>
        <p className="text-xs text-slate-500 mt-1">Direct communication with Adv. Meera Krishnan regarding active matters</p>
      </div>

      <Card className="p-5 bg-white min-h-[460px] flex flex-col justify-between space-y-4">
        <div className="space-y-3 overflow-y-auto max-h-[400px]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col text-xs max-w-md ${
                m.sender === "client" ? "ml-auto items-end" : "mr-auto items-start"
              }`}
            >
              <div
                className={`p-3 rounded-xl leading-relaxed ${
                  m.sender === "client"
                    ? "bg-slate-900 text-white rounded-br-none"
                    : "bg-teal-50 border border-teal-200 text-teal-950 rounded-bl-none"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="pt-3 border-t border-slate-100 flex gap-2">
          <Input
            placeholder="Type your message to advocate..."
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
