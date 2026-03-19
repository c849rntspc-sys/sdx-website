import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    'bg-gradient-to-r from-primary-500 to-primary-400 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:brightness-110',
  secondary:
    'bg-white text-text-primary border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300',
  'outline-light':
    'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-gray-100',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({ children, href, variant = 'primary', size = 'md', className = '', onClick }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
