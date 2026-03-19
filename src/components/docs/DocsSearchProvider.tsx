'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
} from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SearchResult {
  slug: string;
  title: string;
  description: string;
  category: string;
}

interface SearchContextValue {
  query: string;
  setQuery: (q: string) => void;
  results: SearchResult[];
  isLoading: boolean;
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const SearchCtx = createContext<SearchContextValue | null>(null);

export function useDocsSearch() {
  const ctx = useContext(SearchCtx);
  if (!ctx) throw new Error('useDocsSearch must be used within DocsSearchProvider');
  return ctx;
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

interface DocsSearchProviderProps {
  children: ReactNode;
}

type FlexDocument = {
  id: string;
  title: string;
  description: string;
  body: string;
  category: string;
  slug: string;
};

export function DocsSearchProvider({ children }: DocsSearchProviderProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Lazy-loaded index reference
  const indexRef = useRef<{
    search: (q: string) => FlexDocument[];
  } | null>(null);
  const docsRef = useRef<FlexDocument[]>([]);
  const loadedRef = useRef(false);
  const loadingRef = useRef(false);

  // Lazy load the search index from the API
  const ensureIndex = useCallback(async () => {
    if (loadedRef.current || loadingRef.current) return;
    loadingRef.current = true;
    setIsLoading(true);

    try {
      const res = await fetch('/api/docs-search');
      const data: FlexDocument[] = await res.json();
      docsRef.current = data;

      // Dynamic import of flexsearch
      const FlexSearch = await import('flexsearch');
      const index = new FlexSearch.Document<FlexDocument, true>({
        document: {
          id: 'id',
          index: ['title', 'description', 'body'],
          store: true,
        },
        tokenize: 'forward',
      });

      for (const doc of data) {
        index.add(doc);
      }

      indexRef.current = {
        search: (q: string) => {
          const raw = index.search(q, { limit: 10, enrich: true }) as unknown as Array<{
            result: Array<{ doc: FlexDocument }>;
          }>;
          // Deduplicate across fields
          const seen = new Set<string>();
          const matched: FlexDocument[] = [];

          for (const fieldResult of raw) {
            for (const entry of fieldResult.result) {
              const doc = entry.doc;
              if (doc && !seen.has(doc.id)) {
                seen.add(doc.id);
                matched.push(doc);
              }
            }
          }

          return matched;
        },
      };

      loadedRef.current = true;
    } catch (err) {
      console.error('Failed to load docs search index:', err);
    } finally {
      setIsLoading(false);
      loadingRef.current = false;
    }
  }, []);

  // Search whenever query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Ensure index is loaded before searching
    if (!loadedRef.current) {
      ensureIndex().then(() => {
        if (indexRef.current && query.trim()) {
          const matched = indexRef.current.search(query);
          setResults(
            matched.map((d) => ({
              slug: d.slug,
              title: d.title,
              description: d.description,
              category: d.category,
            })),
          );
        }
      });
      return;
    }

    if (indexRef.current) {
      const matched = indexRef.current.search(query);
      setResults(
        matched.map((d) => ({
          slug: d.slug,
          title: d.title,
          description: d.description,
          category: d.category,
        })),
      );
    }
  }, [query, ensureIndex]);

  return (
    <SearchCtx.Provider value={{ query, setQuery, results, isLoading }}>
      {children}
    </SearchCtx.Provider>
  );
}
