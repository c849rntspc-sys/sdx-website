import { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { StatsBar } from '@/components/marketing/StatsBar';
import { CTABanner } from '@/components/marketing/CTABanner';
import { Container } from '@/components/ui/Container';
import { FadeInView } from '@/components/marketing/FadeInView';
import { FOUNDER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'SDX is led by Matt Ellis, Co-Founder & Executive Chairman of Measurabl, with 18 years at the intersection of real estate, sustainability, and technology.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="About"
        title="Building the infrastructure our industry deserves"
        subtitle="Neutral. Comparable. Owner-governed. Shared economics."
      />

      <section className="py-24 bg-surface-bg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeInView>
              <div className="text-center mb-12">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                  ME
                </div>
                <h2 className="text-2xl font-bold text-text-primary">{FOUNDER.name}</h2>
                <p className="text-text-secondary mt-1">{FOUNDER.title}</p>
                <p className="text-text-muted text-sm">{FOUNDER.previousRole}</p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 mb-12">
                <p className="text-xl text-white leading-relaxed text-center italic">
                  &ldquo;{FOUNDER.quote}&rdquo;
                </p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="prose prose-lg max-w-none text-text-secondary">
                <p className="text-lg leading-relaxed">
                  At CBRE, Matt led the sustainability solutions practice and saw firsthand how fragmented data undermined every initiative. He founded Measurabl to solve that problem — growing it to 23 billion square feet across 90+ countries.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  But he realized the measurement layer itself needs to be neutral. No single company should own the substrate the entire industry depends on. That conviction led to SDX — a shared, owner-governed infrastructure modeled on the proven utility structures of DTCC, SWIFT, and S&P index families.
                </p>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      <StatsBar stats={FOUNDER.stats} dark />

      <section id="contact" className="py-24 bg-white">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Get in touch</h2>
              <p className="text-text-secondary mb-8">
                Interested in learning more about SDX? Reach out to start the conversation.
              </p>
              <a
                href="mailto:mpellis20@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:brightness-110 transition-all active:scale-[0.98]"
              >
                Contact Matt Ellis
              </a>
            </FadeInView>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to shape the future of sustainability data?"
        subtitle="Join the working group alongside leading real estate owners."
      />
    </>
  );
}
