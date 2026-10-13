"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";
import { useUIStore } from "@/stores/ui-store";
import {
  Scale,
  LayoutDashboard,
  Briefcase,
  Users,
  FolderLock,
  Search,
  Sparkles,
  Bot,
  Workflow,
  PenTool,
  FileCheck,
  Calendar,
  Clock,
  MessageSquare,
  BookOpen,
  DollarSign,
  Settings,
  History,
  FileText,
  ShieldCheck,
  Globe2,
  Database,
  Layers,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  GitBranch,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();
  const { currentRole, currentUser } = useAuthStore();
  const { sidebarCollapsed, toggleSidebar, mobileSidebarOpen, setMobileSidebarOpen } = useUIStore();

  // Navigation schema tailored to active role
  const clientNav = [
    { label: "Dashboard", href: "/client/dashboard", icon: LayoutDashboard },
    { label: "Ask Wakheel AI", href: "/client/legal-ai", icon: Sparkles },
    { label: "Find Legal Help", href: "/client/legal-help", icon: Users },
    { label: "Discover Advocates", href: "/client/advocates", icon: Scale },
    { label: "My Matters", href: "/client/matters", icon: Briefcase },
    { label: "Documents", href: "/client/documents", icon: FileText },
    { label: "Document Filing", href: "/client/document-filing", icon: FolderLock },
    { label: "Legal Notices", href: "/client/legal-notices", icon: FileCheck },
    { label: "Contracts", href: "/client/contracts", icon: FileCheck },
    { label: "Consultations", href: "/client/consultations", icon: Calendar },
    { label: "Appointments", href: "/client/appointments", icon: Clock },
    { label: "Messages", href: "/client/messages", icon: MessageSquare },
    { label: "Tasks & Timeline", href: "/client/timeline", icon: History },
    { label: "Payments & Invoices", href: "/client/payments", icon: DollarSign },
    { label: "Privacy & Data", href: "/client/privacy", icon: ShieldCheck },
    { label: "Settings", href: "/client/settings", icon: Settings },
  ];

  const advocateNav = [
    { label: "Dashboard", href: "/advocate/dashboard", icon: LayoutDashboard },
    { label: "Matter Intelligence", href: "/advocate/matters", icon: Briefcase },
    { label: "Clients", href: "/advocate/clients", icon: Users },
    { label: "Document Vault", href: "/advocate/vault", icon: FolderLock },
    { label: "Indian Legal Research", href: "/advocate/research", icon: Search },
    { label: "AI Legal Copilot", href: "/advocate/ai-assistant", icon: Sparkles },
    { label: "Legal Agents", href: "/advocate/agents", icon: Bot },
    { label: "Workflows & Skills", href: "/advocate/workflows", icon: Workflow },
    { label: "Legal Drafting", href: "/advocate/drafting", icon: PenTool },
    { label: "Contract Intelligence", href: "/advocate/contracts", icon: FileCheck },
    { label: "Case Preparation", href: "/advocate/case-preparation", icon: Layers },
    { label: "Chronology & Facts", href: "/advocate/chronology", icon: History },
    { label: "Issues & Authorities", href: "/advocate/authorities", icon: Scale },
    { label: "Deadlines & Calendar", href: "/advocate/calendar", icon: Calendar },
    { label: "Appointments", href: "/advocate/appointments", icon: Clock },
    { label: "Communications", href: "/advocate/communications", icon: MessageSquare },
    { label: "Knowledge Base", href: "/advocate/knowledge-base", icon: BookOpen },
    { label: "Billing & Earnings", href: "/advocate/billing", icon: DollarSign },
    { label: "Audit History", href: "/advocate/audit-history", icon: History },
    { label: "Settings", href: "/advocate/settings", icon: Settings },
  ];

  const adminNav = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "User Management", href: "/admin/users", icon: Users },
    { label: "Advocate Verification", href: "/admin/verification", icon: ShieldCheck },
    { label: "Matter Overview", href: "/admin/matters", icon: Briefcase },
    { label: "Document Moderation", href: "/admin/documents", icon: FolderLock },
    { label: "Jurisdictions & Courts", href: "/admin/jurisdictions", icon: Globe2 },
    { label: "Legal Knowledge Index", href: "/admin/legal-knowledge", icon: Database },
    { label: "AI Configuration", href: "/admin/ai-configuration", icon: Bot },
    { label: "Subscriptions & Billing", href: "/admin/subscriptions", icon: DollarSign },
    { label: "Disputes & Complaints", href: "/admin/disputes", icon: ShieldAlert },
    { label: "Audit Logs", href: "/admin/audit-logs", icon: History },
    { label: "System Health", href: "/admin/system-health", icon: Settings },
  ];

  const knowledgeAdminNav = [
    { label: "Dashboard", href: "/knowledge-admin/dashboard", icon: LayoutDashboard },
    { label: "Legal Sources Catalogue", href: "/knowledge-admin/sources", icon: BookOpen },
    { label: "Statute & Order Ingestion", href: "/knowledge-admin/ingestion", icon: Database },
    { label: "Curation Review Queue", href: "/knowledge-admin/review-queue", icon: ShieldCheck },
    { label: "Citation Graph Editor", href: "/knowledge-admin/citations", icon: GitBranch },
    { label: "Version Control", href: "/knowledge-admin/versions", icon: History },
    { label: "Vector Index Status", href: "/knowledge-admin/vector-index", icon: Layers },
    { label: "Jurisdictions & Gazettes", href: "/knowledge-admin/jurisdictions", icon: Globe2 },
    { label: "Audit History", href: "/knowledge-admin/audit-history", icon: History },
  ];

  let currentNavItems = advocateNav;
  let roleBadge = "Advocate Practice";
  if (currentRole === "client") {
    currentNavItems = clientNav;
    roleBadge = "Citizen Portal";
  } else if (currentRole === "admin") {
    currentNavItems = adminNav;
    roleBadge = "Platform Admin";
  } else if (currentRole === "knowledge_admin") {
    currentNavItems = knowledgeAdminNav;
    roleBadge = "Knowledge Curation";
  }

  return (
    <>
      {/* Mobile backdrop */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col bg-slate-950 text-slate-300 border-r border-slate-800 transition-all duration-300 ease-in-out md:static shrink-0 select-none",
          sidebarCollapsed ? "w-18" : "w-64",
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Brand header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-slate-800/80">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2.5 transition-opacity overflow-hidden",
              sidebarCollapsed && "justify-center w-full"
            )}
          >
            <div className="h-9 w-9 rounded-lg bg-teal-600 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Scale className="h-5 w-5 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-white flex items-center">
                  WAKHEEL<span className="text-teal-400">.COM</span>
                </span>
                <span className="text-[10px] text-teal-400 font-medium uppercase tracking-wider -mt-0.5">
                  {roleBadge}
                </span>
              </div>
            )}
          </Link>

          {!sidebarCollapsed && (
            <button
              onClick={toggleSidebar}
              className="hidden md:flex p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/70"
              title="Collapse sidebar"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* User preview header */}
        {!sidebarCollapsed && (
          <div className="px-4 py-3 border-b border-slate-800/50 bg-slate-900/40">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-teal-300 shrink-0">
                {currentUser?.name?.slice(0, 2).toUpperCase() || "WK"}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-medium text-slate-200 truncate">
                  {currentUser?.name || "Wakheel User"}
                </span>
                <span className="text-[10px] text-slate-400 truncate">
                  {currentUser?.location?.city}, {currentUser?.location?.state}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation items list */}
        <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
          {currentNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all group",
                  isActive
                    ? "bg-teal-600/20 text-teal-300 font-semibold border-l-2 border-teal-400"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900",
                  sidebarCollapsed && "justify-center px-0"
                )}
                title={sidebarCollapsed ? item.label : undefined}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive ? "text-teal-400" : "text-slate-400 group-hover:text-slate-200"
                  )}
                />
                {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </div>

        {/* Footer controls */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-900/50">
          {sidebarCollapsed ? (
            <button
              onClick={toggleSidebar}
              className="w-full flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              title="Expand sidebar"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="truncate">Kerala / India Legal OS</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-teal-400 font-mono">
                v1.0-fe
              </span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
