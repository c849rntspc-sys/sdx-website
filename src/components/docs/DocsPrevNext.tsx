import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PrevNextLink {
  title: string;
  slug: string;
}

interface DocsPrevNextProps {
  prev: PrevNextLink | null;
  next: PrevNextLink | null;
}

export function DocsPrevNext({ prev, next }: DocsPrevNextProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-16 flex items-stretch gap-4 border-t border-white/10 pt-8">
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group flex flex-1 flex-col rounded-xl border border-white/10 p-4 transition-colors hover:border-primary-500/40 hover:bg-white/5"
        >
          <span className="mb-1 flex items-center gap-1.5 text-xs font-medium text-gray-500">
            <ArrowLeft className="h-3 w-3" />
            Previous
          </span>
          <span className="text-sm font-semibold text-gray-200 group-hover:text-primary-400 transition-colors">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group flex flex-1 flex-col items-end rounded-xl border border-white/10 p-4 text-right transition-colors hover:border-primary-500/40 hover:bg-white/5"
        >
          <span className="mb-1 flex items-center gap-1.5 text-xs font-medium text-gray-500">
            Next
            <ArrowRight className="h-3 w-3" />
          </span>
          <span className="text-sm font-semibold text-gray-200 group-hover:text-primary-400 transition-colors">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
