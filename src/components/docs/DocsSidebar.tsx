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
    <div className="h-full overflow-y-auto bg-navy-900">
      {/* Search placeholder */}
      <div className="p-4 border-b border-white/10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search support..."
            readOnly
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-white/10 bg-white/5 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 cursor-pointer"
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
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 group-hover:text-gray-400 transition-colors">
                  {section.title}
                </span>
                <ChevronRight
                  className={`w-3.5 h-3.5 text-gray-600 transition-transform duration-200 ${
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
                              ? 'bg-primary-500/15 text-primary-400 font-medium border-l-2 border-primary-500'
                              : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
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
    </div>
  );
}
