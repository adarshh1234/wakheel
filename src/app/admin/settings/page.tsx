"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings, Save } from "lucide-react";

export default function AdminSettingsPage() {
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Governance Settings</h1>
        <p className="text-xs text-slate-500 mt-1">Platform parameters, default currency (INR), and jurisdiction controls</p>
      </div>

      <Card className="p-6 bg-white space-y-4 text-xs">
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Platform Default Currency</label>
          <Input defaultValue="INR (Indian Rupee - ₹)" disabled className="bg-slate-50 font-medium" />
        </div>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Primary Launch Jurisdiction</label>
          <Input defaultValue="Kerala, India (High Court of Kerala)" disabled className="bg-slate-50 font-medium" />
        </div>
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Bar Council Verification Requirement</label>
          <Input defaultValue="Mandatory before Advocate public directory listing" disabled className="bg-slate-50 font-medium" />
        </div>
        <Button variant="teal" size="sm" onClick={() => setSaved(true)} className="gap-1.5 font-semibold">
          <Save className="h-3.5 w-3.5" /> Save Platform Defaults
        </Button>
        {saved && <span className="ml-3 text-emerald-600 font-medium">Settings saved!</span>}
      </Card>
    </div>
  );
}
