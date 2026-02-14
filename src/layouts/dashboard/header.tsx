'use client';

import { Menu, History } from 'lucide-react';

import { Button } from 'src/components/ui/button';

import { Logo } from 'src/components/logo';

// ----------------------------------------------------------------------

type DashboardHeaderProps = {
  onOpenSidebar: () => void;
};

export function DashboardHeader({ onOpenSidebar }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 md:h-20 items-center justify-between border-b border-border/40 bg-white/70 px-4 backdrop-blur-md sm:px-7 md:px-40 dark:bg-card/70">
      <Button variant="link" size="icon-lg" onClick={onOpenSidebar} aria-label="القائمة">
        <Menu className="size-5" />
      </Button>

      <div className="inset-x-0 flex items-center justify-center gap-2 pointer-events-none">
        <span className="pointer-events-auto text-lg font-bold text-primary sm:text-xl">
          Teacher Ai
        </span>
        <Logo href="/dashboard" className="pointer-events-auto h-9 w-9" />
      </div>

      <Button variant="link" size="icon-lg" aria-label="السجل">
        <History className="size-5" />
      </Button>
    </header>
  );
}
