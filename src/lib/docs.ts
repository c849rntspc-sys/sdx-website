import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DocFrontmatter = {
  title: string;
  description: string;
  category: string;
  order: number;
  audience: ('contributor' | 'integrator' | 'buyer')[];
};

export type DocMeta = DocFrontmatter & { slug: string };

export type SidebarSection = {
  title: string;
  slug: string;
  items: DocMeta[];
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const CONTENT_DIR = path.join(process.cwd(), 'src/content/docs');

/**
 * Recursively collect all .mdx file paths under a directory.
 */
function collectMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMdxFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(full);
    }
  }

  return files;
}

/**
 * Derive a URL-safe slug from a file path relative to the content directory.
 *
 * - `getting-started/index.mdx`  → `getting-started`
 * - `api/authentication.mdx`     → `api/authentication`
 */
function filePathToSlug(filePath: string): string {
  const relative = path.relative(CONTENT_DIR, filePath);
  const withoutExt = relative.replace(/\.mdx$/, '');
  // index files map to the parent directory
  return withoutExt.replace(/\/index$/, '');
}

/**
 * Parse frontmatter from a raw file and return DocMeta.
 */
function parseFile(filePath: string): DocMeta {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(raw);

  return {
    title: data.title ?? '',
    description: data.description ?? '',
    category: data.category ?? '',
    order: typeof data.order === 'number' ? data.order : 999,
    audience: Array.isArray(data.audience) ? data.audience : [],
    slug: filePathToSlug(filePath),
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Read every .mdx file in the docs content directory and return sorted DocMeta[].
 */
export function getAllDocsMeta(): DocMeta[] {
  const files = collectMdxFiles(CONTENT_DIR);
  const metas = files.map(parseFile);

  return metas.sort((a, b) => {
    // Primary sort by category, secondary by order
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.order - b.order;
  });
}

/**
 * Load a single document by its slug segments (e.g. `['api', 'authentication']`).
 * Returns both the parsed frontmatter and the raw MDX content string.
 */
export function getDocBySlug(slug: string[]): { meta: DocMeta; content: string } {
  const slugStr = slug.join('/');

  // Try direct file first, then index.mdx inside a directory
  const candidates = [
    path.join(CONTENT_DIR, `${slugStr}.mdx`),
    path.join(CONTENT_DIR, slugStr, 'index.mdx'),
  ];

  const filePath = candidates.find((p) => fs.existsSync(p));
  if (!filePath) {
    throw new Error(`Doc not found for slug: ${slugStr}`);
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const meta: DocMeta = {
    title: data.title ?? '',
    description: data.description ?? '',
    category: data.category ?? '',
    order: typeof data.order === 'number' ? data.order : 999,
    audience: Array.isArray(data.audience) ? data.audience : [],
    slug: filePathToSlug(filePath),
  };

  return { meta, content };
}

/**
 * Build a sidebar tree grouped by top-level directory.
 * Each section title is derived from the directory name (title-cased).
 */
export function getDocsSidebarTree(): SidebarSection[] {
  const allDocs = getAllDocsMeta();
  const sectionMap = new Map<string, DocMeta[]>();

  for (const doc of allDocs) {
    const parts = doc.slug.split('/');
    const sectionSlug = parts[0];
    if (!sectionMap.has(sectionSlug)) {
      sectionMap.set(sectionSlug, []);
    }
    sectionMap.get(sectionSlug)!.push(doc);
  }

  const sections: SidebarSection[] = [];

  for (const [sectionSlug, items] of sectionMap) {
    // Use the index doc's category as section title, or title-case the slug
    const indexDoc = items.find((d) => d.slug === sectionSlug);
    const title =
      indexDoc?.category ||
      sectionSlug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

    sections.push({
      title,
      slug: sectionSlug,
      items: items.sort((a, b) => a.order - b.order),
    });
  }

  // Sort sections by the lowest order among their items
  return sections.sort((a, b) => {
    const aMin = Math.min(...a.items.map((i) => i.order));
    const bMin = Math.min(...b.items.map((i) => i.order));
    return aMin - bMin;
  });
}

/**
 * Given the current slug segments, return the previous and next docs
 * according to the global sort order. Returns null for either if at the boundary.
 */
export function getAdjacentDocs(
  slug: string[],
): { prev: DocMeta | null; next: DocMeta | null } {
  const allDocs = getAllDocsMeta();
  const current = slug.join('/');
  const idx = allDocs.findIndex((d) => d.slug === current);

  if (idx === -1) return { prev: null, next: null };

  return {
    prev: idx > 0 ? allDocs[idx - 1] : null,
    next: idx < allDocs.length - 1 ? allDocs[idx + 1] : null,
  };
}
