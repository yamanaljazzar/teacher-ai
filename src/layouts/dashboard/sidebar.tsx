'use client';

import { useTransition } from 'react';
import { Home, User, LogOut, BookOpen, Settings } from 'lucide-react';

import { Button } from 'src/components/ui/button';
import { Separator } from 'src/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from 'src/components/ui/avatar';
import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetFooter,
  SheetContent,
  SheetDescription,
} from 'src/components/ui/sheet';

import { ThemeToggle } from 'src/components/theme-toggle';

import { logoutAction } from 'src/auth/actions';
import { useAuthContext } from 'src/auth/hooks/use-auth-context';

// ----------------------------------------------------------------------

const NAV_LINKS = [
  { label: 'الرئيسية', href: '/dashboard', icon: Home },
  { label: 'المواد الدراسية', href: '/dashboard/subjects', icon: BookOpen },
  { label: 'الملف الشخصي', href: '/dashboard/profile', icon: User },
  { label: 'الإعدادات', href: '/dashboard/settings', icon: Settings },
];

// ----------------------------------------------------------------------

type DashboardSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function DashboardSidebar({ open, onOpenChange }: DashboardSidebarProps) {
  const { user } = useAuthContext();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="flex flex-col gap-0">
        {/* Theme Toggle */}
        <ThemeToggle className="absolute top-3 right-3 z-10" />

        {/* User Info */}
        <SheetHeader className="items-center px-6 pt-10 pb-6">
          <Avatar className="mb-3 size-20">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="text-2xl font-semibold">
              {user?.name?.charAt(0) ?? 'م'}
            </AvatarFallback>
          </Avatar>

          <SheetTitle className="text-lg">{user?.name ?? 'مستخدم'}</SheetTitle>
          <SheetDescription>{user?.email ?? ''}</SheetDescription>
        </SheetHeader>

        <Separator />

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <link.icon className="size-5 shrink-0" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Separator />

        {/* Logout */}
        <SheetFooter className="px-4 pb-8 pt-4">
          <Button
            variant="ghost"
            onClick={handleLogout}
            isPending={isPending}
            className="w-full justify-start gap-3 rounded-xl text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="size-5" />
            تسجيل الخروج
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
