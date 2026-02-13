'use client';

import { useTransition } from 'react';
import { LogOut } from 'lucide-react';

import { Button } from 'src/components/ui/button';

import { logoutAction } from 'src/auth/actions';

// ----------------------------------------------------------------------

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };

  return (
    <Button onClick={handleLogout} isPending={isPending} variant="outline" size="lg">
      <LogOut size={20} />
      تسجيل الخروج
    </Button>
  );
}
