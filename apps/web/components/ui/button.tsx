import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Button — pills, conforme DESIGN_SYSTEM §7.1.
 * Variantes: primary (preto), accent (altara-600), secondary, ghost, danger.
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-altara-100 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-ink text-white hover:bg-ink-soft',
        accent: 'bg-altara-600 text-white hover:bg-altara-700',
        secondary:
          'bg-neutral-0 border border-neutral-300 text-neutral-900 hover:bg-neutral-50 hover:border-neutral-500',
        ghost: 'text-neutral-900 hover:bg-neutral-100',
        danger: 'bg-neutral-0 border border-danger text-danger hover:bg-danger/5',
      },
      size: {
        sm: 'px-3.5 py-2 text-[13px]',
        md: 'px-5 py-3 text-body',
        lg: 'px-7 py-4 text-[17px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { buttonVariants };
