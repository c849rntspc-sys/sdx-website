import { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1920px] ${className}`}>
      {children}
    </div>
  );
}
