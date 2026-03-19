'use client';

import { useState, type ReactNode, type ReactElement } from 'react';

interface DocsTabProps {
  label: string;
  children: ReactNode;
}

export function DocsTab({ children }: DocsTabProps) {
  return <div>{children}</div>;
}

interface DocsTabsProps {
  children: ReactElement<DocsTabProps> | ReactElement<DocsTabProps>[];
}

export function DocsTabs({ children }: DocsTabsProps) {
  const tabs = Array.isArray(children) ? children : [children];
  const [active, setActive] = useState(0);

  return (
    <div className="my-6">
      <div className="flex gap-0.5 border-b border-gray-200">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              active === i
                ? 'border-b-2 border-primary-500 text-primary-700'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="pt-4">{tabs[active]}</div>
    </div>
  );
}
