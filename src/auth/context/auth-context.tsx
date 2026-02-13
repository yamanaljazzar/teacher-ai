'use client';

import { createContext } from 'react';

import type { AuthContextValue } from 'src/auth/types';

// ----------------------------------------------------------------------

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
