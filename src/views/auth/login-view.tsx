'use client';

import { z } from 'zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { Eye, Lock, EyeOff, Rocket, UserRound, CircleAlert } from 'lucide-react';

import { Button } from 'src/components/ui/button';
import { Separator } from 'src/components/ui/separator';
import { Alert, AlertDescription } from 'src/components/ui/alert';
import { Card, CardFooter, CardHeader, CardContent } from 'src/components/ui/card';

import { paths } from 'src/routes/paths';

import { loginAction } from 'src/actions/auth';

import { Logo } from 'src/components/logo';
import { Form, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const loginSchema = z.object({
  email: z.string().min(1, 'البريد الإلكتروني مطلوب').email('يرجى إدخال بريد إلكتروني صالح'),
  password: z
    .string()
    .min(1, 'كلمة المرور مطلوبة')
    .min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// ----------------------------------------------------------------------

export default function LoginView() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();

  const methods = useForm<LoginFormValues>({
    resolver: standardSchemaResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    startTransition(async () => {
      try {
        const result = await loginAction(data.email, data.password);

        if (!result.success) {
          methods.setError('root', { message: result.error });
        }
      } catch (error) {
        if (error instanceof Error && !error.message.includes('NEXT_REDIRECT')) {
          methods.setError('root', { message: 'حدث خطأ غير متوقع. حاول مرة أخرى.' });
        }
      }
    });
  });

  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="gap-6">
        <Logo disabled className="h-20 w-20 sm:h-25 sm:w-25 place-self-center" />
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-primary sm:text-4xl md:text-[45px]">
            أهلاً بك يا بطل! 👋
          </h1>
          <p className="text-sm font-medium text-secondary sm:text-base md:text-[22px]">
            جاهز تبدأ رحلة التعلّم الذكي والممتع؟
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <Form methods={methods} onSubmit={onSubmit}>
          <div className="flex w-full flex-col gap-5">
            {methods.formState.errors.root && (
              <Alert variant="destructive">
                <CircleAlert />
                <AlertDescription>{methods.formState.errors.root.message}</AlertDescription>
              </Alert>
            )}

            <RHFTextField
              name="email"
              label="البريد الإلكتروني"
              required
              type="email"
              placeholder="أدخل البريد الإلكتروني الخاص بك"
              icon={<UserRound size={24} />}
              disabled={isPending}
            />

            <RHFTextField
              name="password"
              label="كلمة المرور"
              required
              type={showPassword ? 'text' : 'password'}
              placeholder="أدخل كلمة المرور الخاصة بك"
              icon={<Lock size={24} />}
              disabled={isPending}
              suffix={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword((prev) => !prev)}
                  disabled={isPending}
                >
                  {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </Button>
              }
            />

            <Button
              type="submit"
              size="lg"
              isPending={isPending}
              className="mt-2 w-full bg-linear-to-r from-[#B656C0] to-secondary text-xl font-bold text-white"
            >
              ابدأ التعلّم الآن
              <Rocket size={24} />
            </Button>
          </div>
        </Form>
      </CardContent>

      <CardFooter className="justify-center gap-6">
        <Link
          href={paths.forgotPassword}
          className="text-xs text-secondary hover:text-secondary md:text-base"
        >
          نسيت كلمة المرور؟
        </Link>
        <Separator />
        <p className="text-center text-base font-bold text-secondary sm:text-lg">
          ليس لديك حساب؟{' '}
          <Link href={paths.register} className="hover:underline">
            أنشئ حسابك الآن 🌟
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
