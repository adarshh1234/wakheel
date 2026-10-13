"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-950">Contact Wakheel Support</h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Inquiries for chambers, bar associations, and technical support in Kerala and India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardContent className="p-0 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Send an Inquiry</h3>
            {submitted ? (
              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Thank you! Your simulated demo message has been received.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Name</label>
                  <Input placeholder="Adv. / Mr. / Ms." required />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email</label>
                  <Input type="email" placeholder="name@domain.com" required />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-slate-300 p-2 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                    placeholder="Chamber pilot inquiry, technical question..."
                    required
                  />
                </div>
                <Button type="submit" variant="teal" className="w-full text-xs font-semibold py-2">
                  <Send className="h-3.5 w-3.5 mr-1" /> Send Inquiry
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6 text-xs text-slate-600">
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900">Registered Office</h4>
              <p>Wakheel Technologies Pvt Ltd</p>
              <p>High Court Junction, Ernakulam, Kerala 682031, India</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900">Email</h4>
              <p>support@wakheel.com • chambers@wakheel.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900">Phone</h4>
              <p>+91 (0484) 234-5678 (Kochi)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
