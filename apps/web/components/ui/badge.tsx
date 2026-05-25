import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/** Badge — pill funcional. DESIGN_SYSTEM §7.6. */
const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-1 text-[13px] font-medium',
  {
    variants: {
      variant: {
        ativo: 'bg-[#DCFCE7] text-[#14532D]',
        ocioso: 'bg-[#FEF3C7] text-[#78350F]',
        atrasado: 'bg-[#FEE2E2] text-[#7F1D1D]',
        neutral: 'bg-neutral-100 text-neutral-700',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
