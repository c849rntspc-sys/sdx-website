'use client';

import { useEffect, useRef, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface DocsTableOfContentsProps {
  headings: Heading[];
}

export function DocsTableOfContents({ headings }: DocsTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting from top
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pick the one closest to the top of the viewport
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          setActiveId(sorted[0].target.id);
        }
      },
      {
        rootMargin: '-64px 0px -75% 0px',
        threshold: 0,
      },
    );

    for (const el of elements) {
      observerRef.current.observe(el);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="w-48 shrink-0 hidden xl:block">
      <div className="sticky top-24">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
          On this page
        </h4>
        <nav className="space-y-1">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const isH3 = heading.level === 3;

            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  setActiveId(heading.id);
                }}
                className={`block text-[13px] leading-snug py-1 transition-colors ${
                  isH3 ? 'pl-4' : 'pl-0'
                } ${
                  isActive
                    ? 'text-primary-500 font-medium'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {heading.text}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
