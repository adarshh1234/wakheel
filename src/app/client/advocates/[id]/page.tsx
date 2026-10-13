"use client";

import * as React from "react";
import { Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_ADVOCATES } from "@/lib/mock-data";
import { ArrowLeft, Scale, MapPin, Video, Phone, CheckCircle2, Calendar } from "lucide-react";

function ClientAdvocateProfileContent() {
  const params = useParams();
  const advocateId = params?.id as string;
  const adv = MOCK_ADVOCATES.find((a) => a.id === advocateId) || MOCK_ADVOCATES[0];
  const [booked, setBooked] = React.useState(false);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link href="/client/advocates">
        <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Advocates
        </Button>
      </Link>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-slate-900 text-teal-400 font-bold flex items-center justify-center text-lg shadow-sm">
              {adv.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">{adv.name}</h1>
              <p className="text-xs text-slate-500 font-mono">
                {adv.barCouncilNumber} • {adv.stateBarCouncil}
              </p>
            </div>
          </div>
          <Badge variant="success">Bar Verified</Badge>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-100">
          {adv.bio}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2 border-t border-slate-100 text-slate-600">
          <div><span className="text-slate-400 block">Experience:</span><strong>{adv.experienceYears} Years Standing</strong></div>
          <div><span className="text-slate-400 block">City:</span><strong>{adv.location.city}, {adv.location.state}</strong></div>
          <div><span className="text-slate-400 block">Languages:</span><strong>{adv.languages.join(", ")}</strong></div>
          <div><span className="text-slate-400 block">Consultation Fee:</span><strong className="text-teal-800 text-sm">₹{adv.consultationFeeINR}</strong></div>
        </div>
      </div>

      <Card className="p-6 bg-white space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Book Legal Consultation</h3>
        {booked ? (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold block">Consultation Request Confirmed!</span>
              Your video consultation with {adv.name} has been scheduled for tomorrow at 10:30 AM IST. Check your consultations tab for the video link.
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-slate-600">Select consultation mode:</p>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="p-3 rounded-lg border border-teal-700 bg-teal-50 text-teal-900 text-xs font-bold text-center cursor-pointer"
              >
                Video Call (45m)
              </button>
              <button
                type="button"
                className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold text-center cursor-pointer"
              >
                Chambers In-Person
              </button>
              <button
                type="button"
                className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold text-center cursor-pointer"
              >
                Phone Call
              </button>
            </div>
            <Button
              variant="teal"
              className="w-full text-xs font-semibold py-2.5 mt-2"
              onClick={() => setBooked(true)}
            >
              Confirm & Book Demo Consultation (₹{adv.consultationFeeINR})
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default function ClientAdvocateProfilePage() {
  return (
    <Suspense fallback={<div className="p-8 text-xs text-slate-500">Loading advocate profile...</div>}>
      <ClientAdvocateProfileContent />
    </Suspense>
  );
}
