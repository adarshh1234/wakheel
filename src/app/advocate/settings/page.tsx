"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuthStore } from "@/stores/auth-store";
import { Settings, Save, ShieldCheck } from "lucide-react";

export default function AdvocateSettingsPage() {
  const { currentUser } = useAuthStore();
  const [fee, setFee] = React.useState("2500");
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Chamber Practice Settings</h1>
        <p className="text-xs text-slate-500 mt-1">Bar Council enrollment credentials, consultation rates, and notifications</p>
      </div>

      <Card className="p-6 bg-white space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Bar Council of Kerala Verification</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-slate-500 mb-1">Advocate Name</label>
            <Input defaultValue={currentUser.name} />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">Bar Council Enrollment Number</label>
            <Input defaultValue="K/1429/2012" disabled className="bg-slate-50 font-mono" />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">State Bar Council</label>
            <Input defaultValue="Bar Council of Kerala" disabled className="bg-slate-50" />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">Standing</label>
            <Input defaultValue="13 Years" disabled className="bg-slate-50" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Consultation Preferences (INR)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-slate-500 mb-1">Standard 45-Min Consultation Fee (₹)</label>
            <Input value={fee} onChange={(e) => setFee(e.target.value)} />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">Consultation Modes</label>
            <div className="flex gap-2 pt-1">
              <Badge variant="teal">Video Call</Badge>
              <Badge variant="teal">Phone Call</Badge>
              <Badge variant="teal">In-Person</Badge>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="teal"
            size="sm"
            onClick={() => setSaved(true)}
            className="text-xs font-semibold gap-1.5"
          >
            <Save className="h-3.5 w-3.5" /> Save Preferences
          </Button>
          {saved && <span className="ml-3 text-xs text-emerald-600 font-medium">Settings updated successfully!</span>}
        </div>
      </Card>
    </div>
  );
}
