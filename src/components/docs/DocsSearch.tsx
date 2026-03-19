'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search as SearchIcon, Loader2 } from 'lucide-react';
import { useDocsSearch } from '@/components/docs/DocsSearchProvider';

export function DocsSearch() {
  const { query, setQuery, results, isLoading } = useDocsSearch();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on navigation
  useEffect(() => {
    setIsFocused(false);
    setQuery('');
  }, [pathname, setQuery]);

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        inputRef.current?.blur();
        setIsFocused(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const showDropdown = isFocused && query.trim().length > 0;
  const displayResults = results.slice(0, 8);

  return (
    <div ref={containerRef} className="relative">
      {/* Search input */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search docs..."
          className="w-full pl-9 pr-12 py-2 text-sm rounded-lg border border-gray-200 bg-gray-50 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium text-text-muted bg-gray-100 border border-gray-200 rounded">
          <span className="text-xs">&#8984;</span>K
        </kbd>
      </div>

      {/* Results dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl border border-gray-200 shadow-lg shadow-gray-200/50 overflow-hidden z-50 max-h-[420px] overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center gap-2 py-8 text-sm text-text-muted">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading search index...
            </div>
          ) : displayResults.length > 0 ? (
            <ul>
              {displayResults.map((result) => (
                <li key={result.slug}>
                  <Link
                    href={`/docs/${result.slug}`}
                    onClick={() => {
                      setIsFocused(false);
                      setQuery('');
                    }}
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-medium text-text-primary">
                        {result.title}
                      </span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider bg-gray-100 text-text-muted">
                        {result.category}
                      </span>
                    </div>
                    {result.description && (
                      <p className="text-xs text-text-muted line-clamp-1">
                        {result.description}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-8 text-center text-sm text-text-muted">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
