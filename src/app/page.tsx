import { ButtonLink } from '@/components/ButtonLink';
import { Card, FeatureCard } from '@/components/Card';
import { Container } from '@/components/Container';
import { CTA } from '@/components/CTA';
import { SectionHeader } from '@/components/SectionHeader';
import { platformPillars, services, workSteps } from '@/lib/content';

const stats = [
  { value: '4', label: 'Core user groups: research owners, field officers, participants, and admins' },
  { value: '360°', label: 'Research workflow from planning to data collection, monitoring, analysis, and reporting' },
  { value: 'Africa-first', label: 'Built for research execution across diverse local contexts' }
];

const pillarMarks = ['01', '02', '03', '04'];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-brand shadow-sm">
                Research execution. Data collection. Analytics. Intelligence.
              </p>
              <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
                We are Changing how Research is done across Africa.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                RediSerche connects organizations, researchers, field officers, and research participants through a trusted platform for fieldwork, respondent access, survey monitoring, data quality, analytics, and evidence generation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Start a research project</ButtonLink>
                <ButtonLink href="/platform" variant="secondary">Explore the platform</ButtonLink>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.value} className="rounded-3xl border border-line bg-white/80 p-5 shadow-sm">
                    <p className="text-2xl font-black text-brand">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="card-sheen bg-gradient-to-br from-brand to-ink p-8 text-white lg:p-10">
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">RediSerche model</p>
                    <h2 className="mt-3 text-3xl font-bold">One infrastructure layer for research delivery.</h2>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl font-black text-white/80">RS</span>
                </div>
                <div className="mt-8 grid gap-4">
                  {platformPillars.map((pillar, index) => {
                    return (
                      <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                        <div className="flex gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-black text-brand">{pillarMarks[index]}</span>
                          <div>
                            <h3 className="font-bold">{pillar.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-white/70">{pillar.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="What we do" title="A clean, end-to-end research company built around technology and trusted people." align="center">
            <p>We combine platform infrastructure with research services so clients can move from problem definition to reliable evidence without fragmented tools and scattered teams.</p>
          </SectionHeader>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <FeatureCard key={service.title} title={service.title} text={service.text} />)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader eyebrow="How we work" title="From research question to decision-ready evidence.">
              <p>RediSerche is designed to support organizations that need credible research execution in health, finance, policy, agriculture, education, social impact, and consumer markets.</p>
              <div className="mt-8">
                <ButtonLink href="/about" variant="secondary">Learn who we are →</ButtonLink>
              </div>
            </SectionHeader>
            <div className="grid gap-5 sm:grid-cols-2">
              {workSteps.map((step) => (
                <Card key={step.step} className="h-full">
                  <p className="text-sm font-black text-brand">{step.step}</p>
                  <h3 className="mt-4 text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{step.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
