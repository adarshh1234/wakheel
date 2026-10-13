"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Globe, UserCheck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/stores/ui-store";
import { RoleSwitcherDemo } from "@/components/navigation/RoleSwitcherDemo";

export function PublicHeader() {
  const pathname = usePathname();
  const { selectedLanguage, setSelectedLanguage } = useUIStore();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [switcherOpen, setSwitcherOpen] = React.useState(false);

  const navLinks = [
    { label: "Features", href: "/features" },
    { label: "Legal Research", href: "/legal-research" },
    { label: "For Advocates", href: "/for-advocates" },
    { label: "For Clients", href: "/for-clients" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="h-9 w-9 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-sm group-hover:bg-teal-700 transition-colors">
                <Scale className="h-5 w-5 text-teal-400 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-slate-900 flex items-center gap-1">
                  WAKHEEL<span className="text-teal-600">.COM</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase -mt-1">
                  AI Legal Intelligence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-slate-950 font-semibold bg-slate-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setSelectedLanguage("en")}
                className={`px-2 py-1 rounded-md font-medium transition-colors ${
                  selectedLanguage === "en"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setSelectedLanguage("ml")}
                className={`px-2 py-1 rounded-md font-medium transition-colors ${
                  selectedLanguage === "ml"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                മലയാളം
              </button>
            </div>

            {/* Demo Persona Switcher Trigger */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSwitcherOpen(true)}
              className="text-xs h-8 border-teal-600/40 text-teal-800 bg-teal-50/50 hover:bg-teal-100/50 gap-1.5"
            >
              <UserCheck className="h-3.5 w-3.5 text-teal-700" />
              Demo Roles
            </Button>

            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-sm font-medium">
                Sign In
              </Button>
            </Link>

            <Link href="/register">
              <Button variant="primary" size="sm" className="text-sm font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSwitcherOpen(true)}
              className="text-xs h-8 px-2"
            >
              Roles
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-slate-500 px-3 py-1">
                <span>Language / ഭാഷ:</span>
                <span className="font-semibold text-slate-900 uppercase">{selectedLanguage}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-xs">Sign In</Button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full text-xs">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Role Switcher Modal */}
      <RoleSwitcherDemo open={switcherOpen} onOpenChange={setSwitcherOpen} />
    </>
  );
}
