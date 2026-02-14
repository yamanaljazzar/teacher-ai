'use client';

import { useState } from 'react';

import { DashboardHeader } from './header';
import { DashboardSidebar } from './sidebar';

// ----------------------------------------------------------------------

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader onOpenSidebar={() => setSidebarOpen(true)} />

      <DashboardSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />

      <main className="flex-1">{children}</main>
    </div>
  );
}
