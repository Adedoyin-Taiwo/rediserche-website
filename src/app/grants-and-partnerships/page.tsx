import { ButtonLink } from '@/components/ButtonLink';
import { Card, FeatureCard } from '@/components/Card';
import { Container } from '@/components/Container';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { SectionHeader } from '@/components/SectionHeader';
import { grantReadiness } from '@/lib/content';

const partnerTypes = [
  ['Universities and research institutes', 'Academic collaboration, field implementation, data collection, participant recruitment, and analysis support.'],
  ['NGOs and development partners', 'Baseline, endline, impact evaluation, monitoring and evaluation, and community research.'],
  ['Government agencies', 'Policy research, citizen feedback, service evaluation, and public sector data collection.'],
  ['Health organizations and CRO partners', 'Public health research, participant follow-up, facility assessments, and clinical-adjacent study support.'],
  ['Private sector organizations', 'Market research, customer insight, product testing, and sector intelligence.'],
  ['Donors and grant makers', 'Evidence generation, implementation support, data quality systems, and reporting-ready research outputs.']
];

export default function GrantsPage() {
  return (
    <>
      <PageHero eyebrow="Grants and partnerships" title="Built to support grant-funded research, tenders, and implementation partnerships.">
        <p>RediSerche is positioned as a technology-enabled research implementation partner for organizations that need credible field execution, participant access, analytics, and evidence-generation support.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Discuss a partnership</ButtonLink>
          <ButtonLink href="/services" variant="secondary">View services</ButtonLink>
        </div>
      </PageHero>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Who we partner with" title="A flexible research implementation partner across sectors." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map(([title, text]) => <FeatureCard key={title} title={title} text={text} />)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader eyebrow="Grant readiness" title="The documents and systems serious research partners expect.">
              <p>RediSerche will maintain a grant-readiness pack that can be adapted for donor proposals, government tenders, academic collaborations, and institutional research projects.</p>
            </SectionHeader>
            <Card>
              <div className="grid gap-3 sm:grid-cols-2">
                {grantReadiness.map((item) => <div key={item} className="rounded-2xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink">{item}</div>)}
              </div>
            </Card>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
