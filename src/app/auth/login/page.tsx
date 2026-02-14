import type { Metadata } from 'next';

import LoginView from 'src/views/auth/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `تسجيل الدخول | Teacher AI` };

export default function Page() {
  return <LoginView />;
}
