"use client";

import * as React from "react";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";
import { UserRole } from "@/types";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import {
  Scale,
  Users,
  ShieldCheck,
  Smartphone,
  KeyRound,
  UserPlus,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  MessageSquare,
  Lock,
} from "lucide-react";

function AuthContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "register" ? "register" : "whatsapp_otp";
  const initialRole = (searchParams.get("role") as UserRole) || "advocate";

  const { switchUserRole } = useAuthStore();

  const [selectedRole, setSelectedRole] = React.useState<UserRole>(initialRole);
  const [authTab, setAuthTab] = React.useState<"whatsapp_otp" | "password" | "register">(initialMode);

  // WhatsApp OTP State
  const [phone, setPhone] = React.useState("9847012345");
  const [otpSent, setOtpSent] = React.useState(false);
  const [otpCode, setOtpCode] = React.useState("");
  const [simulatedGeneratedOtp, setSimulatedGeneratedOtp] = React.useState<string | null>(null);
  const [countdown, setCountdown] = React.useState(30);
  const [otpError, setOtpError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  // Password Login State
  const [email, setEmail] = React.useState("meera.krishnan@advocate.in");
  const [password, setPassword] = React.useState("demo12345");

  // Registration Form State
  const [regName, setRegName] = React.useState("");
  const [regPhone, setRegPhone] = React.useState("");
  const [regEmail, setRegEmail] = React.useState("");
  const [regBarNumber, setRegBarNumber] = React.useState("K/1429/2012");
  const [regState, setRegState] = React.useState("Kerala");
  const [regCourt, setRegCourt] = React.useState("High Court of Kerala");
  const [regExperience, setRegExperience] = React.useState("10");
  const [regErrors, setRegErrors] = React.useState<Record<string, string>>({});

  // Countdown timer for OTP
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpSent && countdown > 0) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpSent, countdown]);

  const handleSendWhatsAppOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpError(null);

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setOtpError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const generatedCode = "847291";
      setSimulatedGeneratedOtp(generatedCode);
      setOtpSent(true);
      setCountdown(30);
    }, 600);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpError(null);

    if (otpCode.trim() !== "847291" && otpCode.trim() !== "123456") {
      setOtpError("Invalid OTP. Use demo verification code: 847291");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      switchUserRole(selectedRole);
      redirectToDashboard(selectedRole);
    }, 600);
  };

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      switchUserRole(selectedRole);
      redirectToDashboard(selectedRole);
    }, 500);
  };

  const handleQuickDemoFill = (role: UserRole) => {
    setSelectedRole(role);
    if (role === "client") {
      setEmail("gopakumar.client@example.com");
      setPhone("9847012345");
    } else if (role === "advocate") {
      setEmail("meera.krishnan@advocate.in");
      setPhone("9447198765");
    } else if (role === "admin") {
      setEmail("admin@wakheel.com");
      setPhone("9895000112");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!regName.trim()) errors.name = "Full name is required.";
    if (!regPhone.trim() || regPhone.length < 10) errors.phone = "Valid 10-digit mobile number required.";
    if (!regEmail.trim() || !regEmail.includes("@")) errors.email = "Valid email address required.";

    if (selectedRole === "advocate" && !regBarNumber.trim()) {
      errors.barNumber = "Bar Council enrollment number (e.g. K/xxxx/20xx) is required.";
    }

    if (Object.keys(errors).length > 0) {
      setRegErrors(errors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      switchUserRole(selectedRole);
      redirectToDashboard(selectedRole);
    }, 700);
  };

  const redirectToDashboard = (role: UserRole) => {
    switch (role) {
      case "client":
        router.push("/client/dashboard");
        break;
      case "advocate":
        router.push("/advocate/dashboard");
        break;
      case "admin":
        router.push("/admin/dashboard");
        break;
      case "knowledge_admin":
        router.push("/knowledge-admin/dashboard");
        break;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <PublicHeader />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto space-y-6">
          {/* Header Title & Branding */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
              <Scale className="h-3.5 w-3.5 text-teal-700" />
              <span>India-First AI Legal Workspace</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Sign In to Wakheel.com
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Select your role and authenticate via instant WhatsApp OTP or verified demo credentials.
            </p>
          </div>

          {/* Role Selection Tabs */}
          <div className="bg-white p-2 rounded-xl border border-slate-200/90 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block px-2 mb-1.5">
              Select Your Role / പങ്ക് തിരഞ്ഞെടുക്കുക
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => handleQuickDemoFill("client")}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRole === "client"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Users className="h-4 w-4 mb-1" />
                <span>Client / Citizen</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickDemoFill("advocate")}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRole === "advocate"
                    ? "bg-teal-700 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Scale className="h-4 w-4 mb-1" />
                <span>Advocate / Law Firm</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickDemoFill("admin")}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRole === "admin"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <ShieldCheck className="h-4 w-4 mb-1" />
                <span>Platform Admin</span>
              </button>
            </div>
          </div>

          {/* Authentication Container */}
          <Card className="border-slate-200 shadow-md">
            {/* Mode Selector Tabs (WhatsApp OTP vs Password vs Register) */}
            <div className="flex border-b border-slate-100 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setAuthTab("whatsapp_otp")}
                className={`flex-1 py-3 px-2 text-center border-b-2 flex items-center justify-center gap-1.5 cursor-pointer ${
                  authTab === "whatsapp_otp"
                    ? "border-teal-700 text-teal-800 bg-teal-50/30"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Smartphone className="h-3.5 w-3.5 text-teal-600" />
                WhatsApp OTP
              </button>

              <button
                type="button"
                onClick={() => setAuthTab("password")}
                className={`flex-1 py-3 px-2 text-center border-b-2 flex items-center justify-center gap-1.5 cursor-pointer ${
                  authTab === "password"
                    ? "border-slate-900 text-slate-900 bg-slate-50"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <KeyRound className="h-3.5 w-3.5" />
                Email / Password
              </button>

              <button
                type="button"
                onClick={() => setAuthTab("register")}
                className={`flex-1 py-3 px-2 text-center border-b-2 flex items-center justify-center gap-1.5 cursor-pointer ${
                  authTab === "register"
                    ? "border-slate-900 text-slate-900 bg-slate-50"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <UserPlus className="h-3.5 w-3.5" />
                New Registration
              </button>
            </div>

            <CardContent className="p-6">
              {/* TAB 1: WHATSAPP OTP AUTHENTICATION */}
              {authTab === "whatsapp_otp" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                    <MessageSquare className="h-4 w-4 text-emerald-700 shrink-0" />
                    <span>
                      India / Kerala Verified Login: Receive a secure 6-digit one-time passcode on your registered WhatsApp number.
                    </span>
                  </div>

                  {!otpSent ? (
                    /* Step 1: Request WhatsApp OTP */
                    <form onSubmit={handleSendWhatsAppOtp} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          WhatsApp Mobile Number (India)
                        </label>
                        <div className="flex rounded-lg shadow-xs">
                          <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-xs font-semibold">
                            +91
                          </span>
                          <Input
                            type="tel"
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                            placeholder="98470 12345"
                            className="rounded-l-none"
                            required
                          />
                        </div>
                        {otpError && <p className="mt-1 text-xs text-red-600 font-medium">{otpError}</p>}
                      </div>

                      <Button
                        type="submit"
                        variant="teal"
                        isLoading={isLoading}
                        className="w-full font-semibold gap-2 py-2.5 text-sm"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Send WhatsApp OTP
                      </Button>
                    </form>
                  ) : (
                    /* Step 2: Verify WhatsApp OTP */
                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                      {simulatedGeneratedOtp && (
                        <div className="p-3 rounded-lg bg-teal-50 border border-teal-300 text-teal-950 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold">WhatsApp Demo Dispatch:</span>
                            <Badge variant="teal">Simulated Demo</Badge>
                          </div>
                          <p>
                            WhatsApp message delivered to <strong>+91 {phone}</strong> with OTP:{" "}
                            <span className="font-mono text-sm font-extrabold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                              {simulatedGeneratedOtp}
                            </span>
                          </p>
                        </div>
                      )}

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-xs font-semibold text-slate-700">
                            Enter 6-Digit WhatsApp OTP
                          </label>
                          <button
                            type="button"
                            onClick={() => setOtpSent(false)}
                            className="text-xs text-teal-700 hover:underline"
                          >
                            Change Number
                          </button>
                        </div>
                        <Input
                          type="text"
                          maxLength={6}
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value.trim())}
                          placeholder="e.g. 847291"
                          className="font-mono text-center tracking-widest text-base font-bold"
                          autoFocus
                          required
                        />
                        {otpError && <p className="mt-1 text-xs text-red-600 font-medium">{otpError}</p>}
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>Resend OTP on WhatsApp:</span>
                        {countdown > 0 ? (
                          <span className="font-mono font-medium text-slate-700">{countdown}s</span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setCountdown(30);
                              setSimulatedGeneratedOtp("847291");
                            }}
                            className="text-teal-700 font-semibold hover:underline"
                          >
                            Resend Now
                          </button>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        isLoading={isLoading}
                        className="w-full font-semibold gap-2 py-2.5 text-sm bg-slate-950"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        Verify WhatsApp OTP & Continue
                      </Button>
                    </form>
                  )}
                </div>
              )}

              {/* TAB 2: EMAIL & PASSWORD LOGIN */}
              {authTab === "password" && (
                <form onSubmit={handlePasswordLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="advocate@wakheel.in"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Password
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                      <span>Remember demo session</span>
                    </label>
                    <span className="text-teal-700 cursor-pointer hover:underline">Forgot password?</span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isLoading}
                    className="w-full font-semibold py-2.5 text-sm bg-slate-950"
                  >
                    Sign In as {selectedRole.replace("_", " ").toUpperCase()}
                  </Button>
                </form>
              )}

              {/* TAB 3: NEW USER REGISTRATION */}
              {authTab === "register" && (
                <form onSubmit={handleRegister} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name (As per official Bar ID or Aadhaar)
                    </label>
                    <Input
                      type="text"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder={selectedRole === "advocate" ? "Adv. Meera Krishnan" : "Gopakumar Nambiar"}
                      error={regErrors.name}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Mobile (+91)
                      </label>
                      <Input
                        type="tel"
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        placeholder="98470 12345"
                        error={regErrors.phone}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="legal@chambers.in"
                        error={regErrors.email}
                        required
                      />
                    </div>
                  </div>

                  {/* Advocate-specific fields */}
                  {selectedRole === "advocate" && (
                    <div className="space-y-3 pt-2 border-t border-slate-100">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Bar Council Enrollment Number
                        </label>
                        <Input
                          type="text"
                          value={regBarNumber}
                          onChange={(e) => setRegBarNumber(e.target.value)}
                          placeholder="e.g. K/1429/2012"
                          error={regErrors.barNumber}
                          required
                        />
                        <span className="text-[11px] text-slate-500">
                          Format: K/xxxx/20xx for Bar Council of Kerala
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Primary Court
                          </label>
                          <Input
                            type="text"
                            value={regCourt}
                            onChange={(e) => setRegCourt(e.target.value)}
                            placeholder="High Court of Kerala"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Standing (Years)
                          </label>
                          <Input
                            type="number"
                            value={regExperience}
                            onChange={(e) => setRegExperience(e.target.value)}
                            placeholder="12"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="teal"
                    isLoading={isLoading}
                    className="w-full font-semibold py-2.5 text-sm mt-2"
                  >
                    Complete {selectedRole === "advocate" ? "Advocate" : "Client"} Registration
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Compliance & Demo Disclaimer */}
          <DisclaimerBanner
            type="demo_notice"
            message="Wakheel Simulated Authentication • Client session runs locally on frontend port 3000"
          />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xs text-slate-500">Loading Wakheel Authentication...</div>}>
      <AuthContent />
    </Suspense>
  );
}
