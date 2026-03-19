import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { DocsCallout } from '@/components/docs/DocsCallout';
import { DocsApiEndpoint } from '@/components/docs/DocsApiEndpoint';
import { DocsAudienceBadge } from '@/components/docs/DocsAudienceBadge';
import { DocsTabs, DocsTab } from '@/components/docs/DocsTabs';

// ---------------------------------------------------------------------------
// HTML element overrides — dark navy theme
// ---------------------------------------------------------------------------

function H1(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1 className="text-3xl font-bold text-white mt-2 mb-6" {...props} />;
}

function H2(props: ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      className="text-2xl font-semibold text-white mt-10 mb-4 pb-2 border-b border-white/10"
      {...props}
    />
  );
}

function H3(props: ComponentPropsWithoutRef<'h3'>) {
  return <h3 className="text-xl font-semibold text-white mt-8 mb-3" {...props} />;
}

function H4(props: ComponentPropsWithoutRef<'h4'>) {
  return <h4 className="text-lg font-semibold text-white mt-6 mb-2" {...props} />;
}

function P(props: ComponentPropsWithoutRef<'p'>) {
  return <p className="text-gray-300 leading-relaxed mb-4" {...props} />;
}

function Anchor(props: ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      className="text-primary-400 hover:text-primary-300 underline underline-offset-2"
      {...props}
    />
  );
}

function UL(props: ComponentPropsWithoutRef<'ul'>) {
  return <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300" {...props} />;
}

function OL(props: ComponentPropsWithoutRef<'ol'>) {
  return <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-300" {...props} />;
}

function LI(props: ComponentPropsWithoutRef<'li'>) {
  return <li className="leading-relaxed" {...props} />;
}

function Blockquote(props: ComponentPropsWithoutRef<'blockquote'>) {
  return (
    <blockquote
      className="border-l-4 border-primary-500 pl-4 italic text-gray-400 my-4"
      {...props}
    />
  );
}

function InlineCode(props: ComponentPropsWithoutRef<'code'>) {
  return (
    <code
      className="bg-white/10 text-cyan px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  );
}

function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <pre
      className="bg-navy-800 border border-white/10 text-gray-100 rounded-xl p-4 overflow-x-auto mb-6 text-sm font-mono"
      {...props}
    />
  );
}

function Table(props: ComponentPropsWithoutRef<'table'>) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm" {...props} />
    </div>
  );
}

function TH(props: ComponentPropsWithoutRef<'th'>) {
  return (
    <th
      className="text-left font-semibold text-white p-3 border-b-2 border-white/20 bg-white/5"
      {...props}
    />
  );
}

function TD(props: ComponentPropsWithoutRef<'td'>) {
  return (
    <td className="p-3 border-b border-white/10 text-gray-300" {...props} />
  );
}

function HR() {
  return <hr className="border-white/10 my-8" />;
}

function Img(props: ComponentPropsWithoutRef<'img'>) {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img className="rounded-xl my-6" {...props} />;
}

function Strong(props: ComponentPropsWithoutRef<'strong'>) {
  return <strong className="text-white font-semibold" {...props} />;
}

// ---------------------------------------------------------------------------
// Exported components map
// ---------------------------------------------------------------------------

export const mdxComponents: Record<string, (props: Record<string, unknown>) => ReactNode> = {
  h1: H1 as never,
  h2: H2 as never,
  h3: H3 as never,
  h4: H4 as never,
  p: P as never,
  a: Anchor as never,
  ul: UL as never,
  ol: OL as never,
  li: LI as never,
  blockquote: Blockquote as never,
  code: InlineCode as never,
  pre: Pre as never,
  table: Table as never,
  th: TH as never,
  td: TD as never,
  hr: HR as never,
  img: Img as never,
  strong: Strong as never,

  // Custom components available in MDX files
  Callout: DocsCallout as never,
  ApiEndpoint: DocsApiEndpoint as never,
  AudienceBadge: DocsAudienceBadge as never,
  Tabs: DocsTabs as never,
  Tab: DocsTab as never,
};
