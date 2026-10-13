"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/auth-store";
import { useUIStore } from "@/stores/ui-store";
import { Settings, Save } from "lucide-react";

export default function ClientSettingsPage() {
  const { currentUser } = useAuthStore();
  const { selectedLanguage, setSelectedLanguage } = useUIStore();
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Profile & Portal Settings</h1>
        <p className="text-xs text-slate-500 mt-1">Contact details, preferred language, and notification channels</p>
      </div>

      <Card className="p-6 bg-white space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-slate-500 mb-1">Full Name</label>
            <Input defaultValue={currentUser.name} />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">WhatsApp Mobile (+91)</label>
            <Input defaultValue={currentUser.phone} />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">Email</label>
            <Input defaultValue={currentUser.email} />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">Location</label>
            <Input defaultValue={`${currentUser.location.city}, ${currentUser.location.state}`} />
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 text-xs">
          <label className="block text-slate-700 font-semibold mb-2">Preferred Portal Language</label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setSelectedLanguage("en")}
              className={`px-3 py-1.5 rounded-lg font-medium cursor-pointer ${
                selectedLanguage === "en" ? "bg-slate-900 text-white font-bold" : "bg-slate-100 text-slate-700"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setSelectedLanguage("ml")}
              className={`px-3 py-1.5 rounded-lg font-medium cursor-pointer ${
                selectedLanguage === "ml" ? "bg-slate-900 text-white font-bold" : "bg-slate-100 text-slate-700"
              }`}
            >
              മലയാളം (Malayalam)
            </button>
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="teal"
            size="sm"
            onClick={() => setSaved(true)}
            className="text-xs font-semibold gap-1.5"
          >
            <Save className="h-3.5 w-3.5" /> Save Changes
          </Button>
          {saved && <span className="ml-3 text-xs text-emerald-600 font-medium">Profile saved!</span>}
        </div>
      </Card>
    </div>
  );
}
