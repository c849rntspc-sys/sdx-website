'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ChevronRight } from 'lucide-react';
import type { SidebarSection } from '@/lib/docs';

interface DocsSidebarProps {
  sections: SidebarSection[];
}

export function DocsSidebar({ sections }: DocsSidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  function toggleSection(slug: string) {
    setCollapsed((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto hidden lg:block">
      {/* Search placeholder */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search docs..."
            readOnly
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 bg-gray-50 text-text-secondary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Sections */}
      <nav className="p-4 space-y-4">
        {sections.map((section) => {
          const isCollapsed = collapsed[section.slug] ?? false;

          return (
            <div key={section.slug}>
              <button
                onClick={() => toggleSection(section.slug)}
                className="flex items-center justify-between w-full group"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-text-muted group-hover:text-text-secondary transition-colors">
                  {section.title}
                </span>
                <ChevronRight
                  className={`w-3.5 h-3.5 text-text-muted transition-transform duration-200 ${
                    isCollapsed ? '' : 'rotate-90'
                  }`}
                />
              </button>

              {!isCollapsed && (
                <ul className="mt-1.5 space-y-0.5">
                  {section.items.map((item) => {
                    const href = `/docs/${item.slug}`;
                    const isActive = pathname === href;

                    return (
                      <li key={item.slug}>
                        <Link
                          href={href}
                          className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                            isActive
                              ? 'bg-primary-50 text-primary-600 font-medium border-l-2 border-primary-500'
                              : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
