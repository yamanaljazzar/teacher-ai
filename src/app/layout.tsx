import './globals.css';

import type { Metadata } from 'next';

import { Readex_Pro } from 'next/font/google';
import { LazyMotion, domAnimation } from 'framer-motion';

import { ThemeToggle } from 'src/components/theme-toggle';
import { ThemeProvider } from 'src/components/theme-provider';

const readexPro = Readex_Pro({
  variable: '--font-readex-pro',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Teacher AI',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${readexPro.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LazyMotion features={domAnimation}>
            <ThemeToggle />
            {children}
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  );
}
