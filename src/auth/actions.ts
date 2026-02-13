'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { paths } from 'src/routes/paths';

import { decrypt, createSession, deleteSession, SESSION_COOKIE } from 'src/lib/session';

// ----------------------------------------------------------------------

const MOCK_USER = {
  email: 'user@teacher.ai',
  password: 'password123',
  role: 'TEACHER',
  name: 'Yaman Aljazzar',
  avatar: 'https://i.pravatar.cc/300',
  emailVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  id: '1',
};

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

  const parsed = loginSchema.safeParse({ email, password });

  if (!parsed.success) {
    return {
      success: false,
      error: 'البيانات المدخلة غير صالحة',
    };
  }

  if (parsed.data.email !== MOCK_USER.email || parsed.data.password !== MOCK_USER.password) {
    return {
      success: false,
      error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
    };
  }

  await createSession(MOCK_USER.id);

  redirect(paths.dashboard);

  return { success: true };
}

export async function logoutAction(): Promise<void> {
  await deleteSession();

  redirect(paths.login);
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) return null;

  const payload = await decrypt(token);
  if (!payload?.userId) return null;

  return MOCK_USER;
}
