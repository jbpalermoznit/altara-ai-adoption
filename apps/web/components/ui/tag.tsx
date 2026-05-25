import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/** Tag — categoria pastel quente. DESIGN_SYSTEM §7.5. */
const tagVariants = cva(
  'inline-flex items-center rounded-sm px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider',
  {
    variants: {
      tone: {
        pink: 'bg-tag-pink-bg text-tag-pink-fg',
        peach: 'bg-tag-peach-bg text-tag-peach-fg',
        mint: 'bg-tag-mint-bg text-tag-mint-fg',
        lavender: 'bg-tag-lavender-bg text-tag-lavender-fg',
        butter: 'bg-tag-butter-bg text-tag-butter-fg',
        neutral: 'bg-neutral-100 text-neutral-700',
      },
    },
    defaultVariants: {
      tone: 'neutral',
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

export function Tag({ className, tone, ...props }: TagProps) {
  return <span className={cn(tagVariants({ tone }), className)} {...props} />;
}

export { tagVariants };
