import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { getAllDocsMeta, getDocBySlug, getAdjacentDocs } from '@/lib/docs';
import { mdxComponents } from '@/components/docs/mdx-components';
import { DocsBreadcrumbs } from '@/components/docs/DocsBreadcrumbs';
import { DocsPrevNext } from '@/components/docs/DocsPrevNext';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const docs = getAllDocsMeta();
  return docs.map((doc) => ({ slug: doc.slug.split('/') }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = getDocBySlug(slug);
    return {
      title: meta.title,
      description: meta.description,
    };
  } catch {
    return { title: 'Not Found' };
  }
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;

  let doc: ReturnType<typeof getDocBySlug>;
  try {
    doc = getDocBySlug(slug);
  } catch {
    notFound();
  }

  const { prev, next } = getAdjacentDocs(slug);

  return (
    <article className="prose-sdx">
      <DocsBreadcrumbs slug={slug} />

      <MDXRemote
        source={doc.content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
          },
        }}
      />

      <DocsPrevNext prev={prev} next={next} />
    </article>
  );
}
