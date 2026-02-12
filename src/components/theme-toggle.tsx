'use client';

import { m } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from 'src/components/ui/button';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <m.div
      className="fixed top-8 left-8 z-50"
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
        className="size-14 rounded-xl text-white"
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
