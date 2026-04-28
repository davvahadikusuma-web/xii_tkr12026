import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-sans uppercase tracking-[0.2em] text-xs transition-all duration-300 disabled:opacity-50",
          variant === 'primary' && "bg-gold text-black hover:bg-gold-light active:scale-95 px-8 py-3",
          variant === 'outline' && "border border-gold text-gold hover:bg-gold hover:text-black px-8 py-3",
          variant === 'ghost' && "text-white/60 hover:text-gold px-4 py-2",
          size === 'sm' && "px-4 py-2 text-[10px]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
