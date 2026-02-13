'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const MOCK_USER = {
  email: 'user@teacher.ai',
  password: 'password123',
};

const SESSION_COOKIE = 'session_token';

const loginSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(6),
});

// ----------------------------------------------------------------------

type LoginResponse = {
  success: boolean;
  error?: string;
};

export async function loginAction(email: string, password: string): Promise<LoginResponse> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Server-side validation
  const parsed = loginSchema.safeParse({ email, password });

  if (!parsed.success) {
    return {
      success: false,
      error: 'البيانات المدخلة غير صالحة',
    };
  }

  // Validate credentials
  if (parsed.data.email !== MOCK_USER.email || parsed.data.password !== MOCK_USER.password) {
    return {
      success: false,
      error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
    };
  }

  // Create a mock session token
  const sessionToken = crypto.randomUUID();

  // Set secure HTTP-Only cookie
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  redirect('/dashboard');

  // redirect() throws internally and never reaches here,
  // but we return to satisfy the consistent-return lint rule.
  return { success: true };
}

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.delete(SESSION_COOKIE);

  redirect(paths.login);
}
