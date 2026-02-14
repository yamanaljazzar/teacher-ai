import type { Metadata } from 'next';

import DashboardLayout from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'لوحة التحكم | Teacher AI',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
