'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import type { SidebarSection } from '@/lib/docs';

interface DocsSidebarMobileProps {
  sections: SidebarSection[];
}

export function DocsSidebarMobile({ sections }: DocsSidebarMobileProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  // Close on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function toggleSection(slug: string) {
    setCollapsed((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  return (
    <div className="lg:hidden">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Open docs navigation"
      >
        <Menu className="w-5 h-5" />
        <span>Menu</span>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="text-sm font-semibold text-text-primary">
                Documentation
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-gray-100 transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
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
                                className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
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
        </div>
      )}
    </div>
  );
}
