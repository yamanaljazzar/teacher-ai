'use client';

import { m } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from 'src/components/ui/button';

import { cn } from 'src/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <m.div
      className={cn(className)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 12,
        delay: 0.3,
      }}
    >
      <Button
        size="icon"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="size-8 sm:size-12 md:size-14 rounded-md sm:rounded-lg md:rounded-xl text-white"
        aria-label="Toggle theme"
      >
        <Sun
          className={`size-6 transition-transform duration-300 ${isDark ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`}
        />
        <Moon
          className={`absolute size-6 transition-transform duration-300 ${isDark ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'}`}
        />
      </Button>
    </m.div>
  );
}
