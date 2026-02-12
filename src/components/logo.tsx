import Link from 'next/link';
import Image from 'next/image';

import { cn } from 'src/lib/utils';

type LogoProps = {
  href?: string;
  disabled?: boolean;
  className?: string;
};

export function Logo({ href = '/', disabled, className }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Logo"
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        'h-10 w-10',
        disabled && 'pointer-events-none',
        className
      )}
    >
      <Image
        src="/assets/logo/logo.svg"
        alt="Logo"
        width={40}
        height={40}
        className="h-full w-full object-contain"
        priority
      />
    </Link>
  );
}
