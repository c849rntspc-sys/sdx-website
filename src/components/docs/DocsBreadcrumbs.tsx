import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface DocsBreadcrumbsProps {
  slug: string[];
}

export function DocsBreadcrumbs({ slug }: DocsBreadcrumbsProps) {
  const crumbs = slug.map((segment, index) => {
    const href = '/docs/' + slug.slice(0, index + 1).join('/');
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    const isLast = index === slug.length - 1;

    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm">
      <Link
        href="/docs"
        className="flex items-center gap-1 text-text-muted hover:text-text-primary transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Docs</span>
      </Link>

      {crumbs.map((crumb) => (
        <span key={crumb.href} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 text-text-muted" />
          {crumb.isLast ? (
            <span className="text-text-primary font-medium">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
