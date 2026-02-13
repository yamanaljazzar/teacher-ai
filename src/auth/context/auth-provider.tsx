'use client';

import { useMemo } from 'react';

import type { User } from 'src/auth/types';
import { AuthContext } from 'src/auth/context/auth-context';

// ----------------------------------------------------------------------

type AuthProviderProps = {
  user: User | null;
  children: React.ReactNode;
};

export function AuthProvider({ user, children }: AuthProviderProps) {
  const authenticated = !!user;
  const unauthenticated = !user;

  const value = useMemo(
    () => ({
      user,
      loading: false,
      authenticated,
      unauthenticated,
    }),
    [user, authenticated, unauthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
