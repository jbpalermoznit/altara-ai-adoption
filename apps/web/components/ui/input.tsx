import * as React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/** Input — DESIGN_SYSTEM §7.3. */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'w-full rounded-[8px] border border-neutral-300 bg-neutral-0 px-4 py-3 text-body text-neutral-900 placeholder:text-neutral-500',
          'focus:border-altara-600 focus:outline-none focus:ring-[3px] focus:ring-altara-100',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
