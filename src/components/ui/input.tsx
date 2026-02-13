import * as React from 'react';

import { cn } from 'src/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
}

function Input({ className, type, icon, suffix, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        data-slot="input"
        className={cn(
          'file:text-foreground placeholder:text-input-placeholder selection:bg-primary selection:text-primary-foreground bg-input-bg h-14 w-full min-w-0 rounded-md px-4 py-3.5 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-lg',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          icon && 'ps-13',
          suffix && 'pe-13',
          className
        )}
        {...props}
      />
      {icon && (
        <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-input-placeholder">
          {icon}
        </span>
      )}
      {suffix && (
        <span className="absolute inset-y-0 end-0 flex items-center pe-3 text-input-placeholder">
          {suffix}
        </span>
      )}
    </div>
  );
}

export { Input };
