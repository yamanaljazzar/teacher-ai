'use client';

import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';

// ----------------------------------------------------------------------

export function SplashScreen() {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <m.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <m.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/assets/logo/logo.svg"
              alt="Teacher AI"
              width={96}
              height={96}
              priority
              className="h-24 w-24"
            />
          </m.div>
        </m.div>
      </div>
    </AnimatePresence>
  );
}
