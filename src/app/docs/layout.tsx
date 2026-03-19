import type { ReactNode } from 'react';
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { DocsSearchProvider } from '@/components/docs/DocsSearchProvider';
import { getDocsSidebarTree } from '@/lib/docs';

export default function DocsLayout({ children }: { children: ReactNode }) {
  const sections = getDocsSidebarTree();

  return (
    <DocsSearchProvider>
      <div className="bg-navy-900 min-h-screen">
        <div className="mx-auto flex w-full max-w-[1440px] pt-16">
          {/* Left sidebar */}
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-white/10 lg:block">
            <DocsSidebar sections={sections} />
          </aside>

          {/* Center content */}
          <div className="min-w-0 flex-1 px-6 py-10 md:px-10 lg:px-12">
            <div className="mx-auto max-w-3xl">{children}</div>
          </div>

          {/* Right TOC placeholder */}
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-[200px] shrink-0 xl:block">
            {/* TableOfContents will go here */}
          </aside>
        </div>
      </div>
    </DocsSearchProvider>
  );
}
