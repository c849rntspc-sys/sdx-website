import { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { FadeInView } from '@/components/marketing/FadeInView';
import { StepCards } from '@/components/marketing/StepCards';
import { FAQ } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Join',
  description: 'Get started with SDX. Create a free account, onboard your first building, and start earning data dividends.',
};

export default function JoinPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Early Adopters"
        title={
          <>
            First-movers write the rules,{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan bg-clip-text text-transparent">
              earn the largest dividends
            </span>
          </>
        }
        subtitle="Shape the charter, governance rules, and comparability standard alongside other leading owners. Your investment is returned through dividends as the platform scales."
      />

      <section className="py-24 bg-surface-bg">
        <Container>
          <SectionHeading
            eyebrow="The Ask"
            title="What we need from early adopters"
          />
          <StepCards />
        </Container>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Let&apos;s build the infrastructure our industry deserves.
              </h2>
              <p className="text-text-secondary mb-8">
                Reach out to learn more about SDX, commit pilot assets, or explore the data dividend model.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:mpellis20@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:brightness-110 transition-all active:scale-[0.98]"
                >
                  Contact Matt Ellis
                </a>
                <Button href="/data-dividend" variant="secondary" size="lg">
                  Learn about Data Dividends
                </Button>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-surface-bg">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
          />
          <div className="max-w-2xl mx-auto">
            <Accordion items={FAQ} />
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20">
        <Container>
          <FadeInView>
            <div className="text-center">
              <p className="text-cyan text-sm font-medium mb-4">Neutral. Comparable. Owner-governed. Shared economics.</p>
              <p className="text-2xl md:text-3xl font-bold text-white tracking-tight max-w-2xl mx-auto">
                Let&apos;s build the infrastructure our industry deserves.
              </p>
            </div>
          </FadeInView>
        </Container>
      </section>
    </>
  );
}
