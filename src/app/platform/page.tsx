import { ButtonLink } from '@/components/ButtonLink';
import { Card, FeatureCard } from '@/components/Card';
import { Container } from '@/components/Container';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { SectionHeader } from '@/components/SectionHeader';
import { platformPillars } from '@/lib/content';

const modules = [
  'Research Owner portal', 'Field Officer portal', 'Participant portal', 'Super Admin portal',
  'Project posting and management', 'Survey planner', 'Field officer matching', 'GPS-enabled monitoring',
  'Participant registry', 'Consent center', 'Wallets and payment tracking', 'Quality control dashboard',
  'Data export and analytics', 'Longitudinal and EMA readiness', 'Audit logs and compliance workflows'
];

export default function PlatformPage() {
  return (
    <>
      <PageHero eyebrow="Platform" title="The operating system for research execution.">
        <p>RediSerche is being built as a modular platform that helps organizations recruit field officers, manage studies, reach participants, collect data, monitor quality, and analyse results.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Request platform demo</ButtonLink>
          <ButtonLink href="/participant-network" variant="secondary">View participant network</ButtonLink>
        </div>
      </PageHero>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Core platform pillars" title="People, process, data, and trust in one product." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {platformPillars.map((pillar) => <FeatureCard key={pillar.title} title={pillar.title} text={pillar.text} />)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader eyebrow="Modules" title="Designed to grow from MVP to full research infrastructure.">
              <p>The MVP can begin with users, projects, field officer applications, and basic survey workflows. The architecture should already prepare for participants, consent, quality control, payments, analytics, longitudinal studies, and future data products.</p>
            </SectionHeader>
            <Card>
              <div className="grid gap-3 sm:grid-cols-2">
                {modules.map((module) => (
                  <div key={module} className="rounded-2xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink">{module}</div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
