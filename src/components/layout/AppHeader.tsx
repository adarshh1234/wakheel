"use client";

import * as React from "react";
import { useAuthStore } from "@/stores/auth-store";
import { useMatterStore } from "@/stores/matter-store";
import { useUIStore } from "@/stores/ui-store";
import { MOCK_NOTIFICATIONS } from "@/lib/mock-data";
import {
  Menu,
  Bell,
  Scale,
  Briefcase,
  UserCheck,
  Check,
  ChevronDown,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoleSwitcherDemo } from "@/components/navigation/RoleSwitcherDemo";
import Link from "next/link";

export function AppHeader() {
  const { currentUser, currentRole } = useAuthStore();
  const { matters, selectedMatterId, setSelectedMatterId, getSelectedMatter } = useMatterStore();
  const { setMobileSidebarOpen, selectedLanguage, setSelectedLanguage } = useUIStore();
  const [roleSwitcherOpen, setRoleSwitcherOpen] = React.useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = React.useState(false);

  const activeMatter = getSelectedMatter();
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.isRead).length;

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur-md sm:px-6">
        {/* Left: Mobile menu & Context Bar */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Active Matter Selector (For Advocate & Client roles) */}
          {(currentRole === "advocate" || currentRole === "client") && (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <Briefcase className="h-3.5 w-3.5 text-teal-700 shrink-0" />
              <span className="font-semibold text-slate-700">Active Matter:</span>
              <select
                value={selectedMatterId}
                onChange={(e) => setSelectedMatterId(e.target.value)}
                className="bg-transparent text-slate-900 font-medium focus:outline-none cursor-pointer text-xs max-w-[220px] truncate"
              >
                {matters.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.matterNumber} — {m.title.slice(0, 30)}...
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Right: Quick actions, Role Switcher Demo, Language, Notifications, User */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Persona Switcher Pill */}
          <button
            onClick={() => setRoleSwitcherOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-teal-200 bg-teal-50/70 text-teal-900 text-xs font-semibold hover:bg-teal-100 transition-colors shadow-xs cursor-pointer"
            title="Click to switch demo role"
          >
            <UserCheck className="h-3.5 w-3.5 text-teal-700" />
            <span className="capitalize">{currentRole.replace("_", " ")}</span>
            <span className="text-[10px] text-teal-600 font-normal hidden lg:inline">
              (Switch Demo)
            </span>
          </button>

          {/* Language Toggle */}
          <div className="hidden sm:flex items-center bg-slate-100 p-0.5 rounded-md border border-slate-200 text-[11px]">
            <button
              onClick={() => setSelectedLanguage("en")}
              className={`px-2 py-0.5 rounded font-medium ${
                selectedLanguage === "en" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-500"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setSelectedLanguage("ml")}
              className={`px-2 py-0.5 rounded font-medium ${
                selectedLanguage === "ml" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-500"
              }`}
            >
              മലയാളം
            </button>
          </div>

          {/* Notifications Bell */}
          <div className="relative">
            <button
              onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
              className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
                </span>
              )}
            </button>

            {/* Notification Dropdown Preview */}
            {notifDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl border border-slate-200 bg-white p-3 shadow-xl z-50 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-900">Notifications</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold">
                      {unreadCount} new
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">Mock Data Feed</span>
                </div>

                <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto mt-2">
                  {MOCK_NOTIFICATIONS.map((n) => (
                    <div key={n.id} className="py-2.5 px-1 text-xs hover:bg-slate-50 rounded">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900">{n.title}</span>
                        <span className="text-[10px] text-slate-400">Recent</span>
                      </div>
                      <p className="text-slate-600 text-[11px] mt-0.5 leading-snug">{n.message}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 text-center">
                  <Link
                    href={currentRole === "client" ? "/client/notifications" : "/advocate/dashboard"}
                    onClick={() => setNotifDropdownOpen(false)}
                    className="text-xs font-medium text-teal-700 hover:text-teal-800"
                  >
                    View All Notifications →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Chip */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-xs">
              {currentUser.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-semibold text-slate-900 truncate max-w-[120px]">
                {currentUser.name}
              </span>
              <span className="text-[10px] text-slate-500 capitalize">{currentRole}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Role Switcher Modal */}
      <RoleSwitcherDemo open={roleSwitcherOpen} onOpenChange={setRoleSwitcherOpen} />
    </>
  );
}
