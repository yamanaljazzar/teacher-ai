import './globals.css';

import type { Metadata, Viewport } from 'next';

import { Readex_Pro } from 'next/font/google';
import { LazyMotion, domAnimation } from 'framer-motion';

import { DirectionProvider } from 'src/components/ui/direction';

import { ThemeToggle } from 'src/components/theme-toggle';
import { ThemeProvider } from 'src/components/theme-provider';

import { getCurrentUser } from 'src/auth/actions';
import { AuthProvider } from 'src/auth/context/auth-provider';

const readexPro = Readex_Pro({
  variable: '--font-readex-pro',
  subsets: ['arabic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Teacher AI',

  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${readexPro.variable} antialiased`}>
        <DirectionProvider direction="rtl" dir="rtl">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LazyMotion features={domAnimation}>
              <AuthProvider user={user}>
                <ThemeToggle />
                {children}
              </AuthProvider>
            </LazyMotion>
          </ThemeProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
