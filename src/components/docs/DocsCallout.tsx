'use client';

import type { ReactNode } from 'react';
import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

const variants = {
  info: {
    container: 'border-blue-200 bg-blue-50/60',
    icon: <Info className="h-5 w-5 shrink-0 text-blue-600" />,
    title: 'text-blue-900',
  },
  warning: {
    container: 'border-amber-200 bg-amber-50/60',
    icon: <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />,
    title: 'text-amber-900',
  },
  tip: {
    container: 'border-green-200 bg-green-50/60',
    icon: <Lightbulb className="h-5 w-5 shrink-0 text-green-600" />,
    title: 'text-green-900',
  },
} as const;

interface DocsCalloutProps {
  type: 'info' | 'warning' | 'tip';
  title?: string;
  children: ReactNode;
}

export function DocsCallout({ type, title, children }: DocsCalloutProps) {
  const v = variants[type];

  return (
    <aside className={`my-6 rounded-xl border p-4 ${v.container}`}>
      <div className="flex gap-3">
        {v.icon}
        <div className="min-w-0 flex-1">
          {title && (
            <p className={`mb-1 text-sm font-semibold ${v.title}`}>{title}</p>
          )}
          <div className="text-sm leading-relaxed text-text-secondary [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
