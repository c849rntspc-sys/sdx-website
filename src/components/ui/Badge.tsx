import { ReactNode } from 'react';

const colors = {
  green: 'bg-primary-50 text-primary-700',
  blue: 'bg-blue-50 text-blue-700',
  red: 'bg-red-50 text-red-700',
  gray: 'bg-gray-100 text-gray-600',
  amber: 'bg-amber-50 text-amber-700',
  cyan: 'bg-cyan-50 text-cyan-700',
};

export function Badge({ children, color = 'green' }: { children: ReactNode; color?: keyof typeof colors }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  );
}
