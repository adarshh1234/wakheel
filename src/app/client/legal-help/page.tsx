"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LEGAL_CATEGORIES } from "@/lib/mock-data";
import { CheckCircle2, ArrowRight, ArrowLeft, Send } from "lucide-react";

export default function ClientLegalHelpWizardPage() {
  const [step, setStep] = React.useState(1);
  const [category, setCategory] = React.useState("PROPERTY");
  const [district, setDistrict] = React.useState("Ernakulam");
  const [description, setDescription] = React.useState("");
  const [urgency, setUrgency] = React.useState("Medium");
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Legal Help Submission Wizard</h1>
        <p className="text-xs text-slate-500 mt-1">Submit your legal grievance to match with verified Kerala advocates</p>
      </div>

      {/* Progress Indicators */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 border-b border-slate-200 pb-3">
        <span className={step >= 1 ? "text-teal-700 font-bold" : ""}>1. Category</span>
        <span>→</span>
        <span className={step >= 2 ? "text-teal-700 font-bold" : ""}>2. Location & Details</span>
        <span>→</span>
        <span className={step >= 3 ? "text-teal-700 font-bold" : ""}>3. Review & Submit</span>
      </div>

      <Card className="p-6 bg-white space-y-5">
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Legal Help Request Submitted!</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Your grievance has been safely saved in your client dashboard. Verified advocates in <strong>{district}</strong> have been notified to review your matter.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link href="/client/dashboard">
                <Button variant="teal" size="sm">Go to Dashboard</Button>
              </Link>
              <Link href="/client/advocates">
                <Button variant="outline" size="sm">Discover Advocates</Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {step === 1 && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900">Step 1: Select Legal Category</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {LEGAL_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.code)}
                      className={`p-3 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer ${
                        category === cat.code
                          ? "border-teal-700 bg-teal-50 text-teal-900 font-bold ring-1 ring-teal-700"
                          : "border-slate-200 hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
                <div className="pt-4 flex justify-end">
                  <Button variant="teal" size="sm" onClick={() => setStep(2)}>
                    Next: Location & Description →
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Step 2: Location & Problem Description</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">State & Country</label>
                    <Input defaultValue="Kerala, India" disabled className="bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">District in Kerala</label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full h-9 rounded-lg border border-slate-300 px-3 text-xs focus:ring-2 focus:ring-slate-900"
                    >
                      {["Ernakulam", "Thiruvananthapuram", "Kozhikode", "Kottayam", "Thrissur", "Alappuzha", "Palakkad", "Malappuram", "Kollam", "Kannur"].map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-slate-700 font-semibold mb-1">Briefly Describe Your Issue</label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what occurred, dates, notices received, or questions you have..."
                    className="w-full rounded-lg border border-slate-300 p-2 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                    required
                  />
                </div>

                <div className="pt-2 flex justify-between">
                  <Button variant="outline" size="sm" onClick={() => setStep(1)}>
                    ← Back
                  </Button>
                  <Button variant="teal" size="sm" onClick={() => setStep(3)}>
                    Next: Review & Submit →
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Step 3: Review Before Submission</h3>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div><strong>Category:</strong> {category}</div>
                  <div><strong>Location:</strong> {district}, Kerala, India</div>
                  <div><strong>Urgency:</strong> {urgency}</div>
                  <div><strong>Issue Details:</strong> {description || "Property demarcation and route alignment dispute."}</div>
                </div>

                <div className="pt-2 flex justify-between">
                  <Button variant="outline" size="sm" onClick={() => setStep(2)}>
                    ← Back
                  </Button>
                  <Button variant="teal" size="sm" onClick={() => setSubmitted(true)}>
                    Confirm & Submit Grievance
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
}
