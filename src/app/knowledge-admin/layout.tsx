import * as React from "react";
import { WorkspaceShell } from "@/components/layout/WorkspaceShell";

export default function KnowledgeAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WorkspaceShell>{children}</WorkspaceShell>;
}
