import { LogoutButton } from './logout-button';

// ----------------------------------------------------------------------

export const metadata = { title: 'لوحة التحكم | Teacher AI' };

export default async function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-8">
      <h1 className="text-3xl font-bold text-primary">مرحباً بك في لوحة التحكم 🎉</h1>
      <p className="text-lg text-muted-foreground">تم تسجيل الدخول بنجاح!</p>
      <LogoutButton />
    </div>
  );
}
