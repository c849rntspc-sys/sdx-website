import { ReactNode } from 'react';

const colors = {
  green: 'bg-primary-500/15 text-primary-400',
  blue: 'bg-[#5B9BF6]/15 text-[#5B9BF6]',
  red: 'bg-[#FF433D]/15 text-[#FF433D]',
  gray: 'bg-[#2A2A2A] text-[#9A9A9A]',
  amber: 'bg-primary-500/15 text-primary-400',
  cyan: 'bg-cyan/15 text-cyan',
};

export function Badge({ children, color = 'green' }: { children: ReactNode; color?: keyof typeof colors }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  );
}
