import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { Container } from '@/components/ui/Container';
import { NewsletterSignup } from '@/components/marketing/NewsletterSignup';
import { getAllNewsletters, getNewsletterBySlug } from '@/lib/newsletters';
import { ArrowLeft, Calendar } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const newsletters = getAllNewsletters();
  return newsletters.map((nl) => ({ slug: nl.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getNewsletterBySlug(slug);
    return { title: meta.title, description: meta.summary };
  } catch {
    return { title: 'Not Found' };
  }
}

export default async function NewsletterPage({ params }: PageProps) {
  const { slug } = await params;

  let newsletter: ReturnType<typeof getNewsletterBySlug>;
  try {
    newsletter = getNewsletterBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = newsletter;

  return (
    <section className="bg-[#0A0A0A] min-h-screen">
      <Container className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All newsletters
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-text-muted" />
              <time className="text-sm text-text-muted font-medium">
                {new Date(meta.date + 'T12:00:00').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#EBEBEB] tracking-tight">
              {meta.title}
            </h1>
            <p className="text-lg text-text-secondary mt-3">
              {meta.summary}
            </p>
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none prose-headings:text-[#EBEBEB] prose-headings:font-bold prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-[#EBEBEB] prose-li:text-text-secondary prose-hr:border-[#2A2A2A]">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </article>

          {/* Subscribe CTA */}
          <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
            <NewsletterSignup variant="banner" />
          </div>
        </div>
      </Container>
    </section>
  );
}
