'use client';

import type { LucideIcon } from 'lucide-react';

import { m } from 'framer-motion';

import { cn } from 'src/lib/utils';

// ----------------------------------------------------------------------

type SubjectCardProps = {
  label: string;
  icon: LucideIcon;
  iconClassName?: string;
  delay?: number;
};

export function SubjectCard({ label, icon: Icon, iconClassName }: SubjectCardProps) {
  return (
    <m.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'backInOut' }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'group flex flex-col items-center justify-center gap-5',
        'rounded-4xl bg-card p-6 sm:p-8',
        'shadow-none transition-shadow duration-100',
        'hover:shadow-lg',
        'cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring'
      )}
    >
      {/* Icon Container */}
      <div
        className={cn(
          'flex size-14 items-center justify-center rounded-2xl sm:size-16',
          iconClassName
        )}
      >
        <Icon className="size-7 sm:size-8" />
      </div>

      {/* Label */}
      <span className="text-sm font-bold text-primary sm:text-xl">{label}</span>
    </m.button>
  );
}
