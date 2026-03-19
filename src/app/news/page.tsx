import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/marketing/Hero';
import { Container } from '@/components/ui/Container';
import { FadeInView } from '@/components/marketing/FadeInView';
import { NewsletterSignup } from '@/components/marketing/NewsletterSignup';
import { getAllNewsletters } from '@/lib/newsletters';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News',
  description: 'SDX newsletter archive — monthly updates on the platform, governance, partnerships, and roadmap.',
};

export default function NewsPage() {
  const newsletters = getAllNewsletters();

  return (
    <>
      <Hero
        compact
        eyebrow="Newsletter"
        title="Stay informed"
        subtitle="Monthly updates on the SDX platform, governance decisions, partnerships, and product roadmap. Published the last Thursday of each month."
      />

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Subscribe banner */}
            <div className="mb-12">
              <NewsletterSignup variant="banner" />
            </div>

            {/* Archive */}
            <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-6">
              Archive
            </h2>
            <div className="space-y-4">
              {newsletters.map((nl, i) => (
                <FadeInView key={nl.slug}>
                  <Link
                    href={`/news/${nl.slug}`}
                    className="group block bg-surface-bg border border-gray-100 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-text-muted" />
                          <time className="text-xs text-text-muted font-medium">
                            {new Date(nl.date + 'T12:00:00').toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                          {i === 0 && (
                            <span className="text-[10px] font-semibold uppercase tracking-wide text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                              Latest
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-navy-900 group-hover:text-primary-600 transition-colors">
                          {nl.title}
                        </h3>
                        <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                          {nl.summary}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary-500 transition-colors shrink-0 mt-1" />
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
