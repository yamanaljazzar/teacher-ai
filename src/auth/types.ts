export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

// ----------------------------------------------------------------------

export type AuthState = {
  user: User | null;
  loading: boolean;
};

export type AuthContextValue = AuthState & {
  authenticated: boolean;
  unauthenticated: boolean;
};
