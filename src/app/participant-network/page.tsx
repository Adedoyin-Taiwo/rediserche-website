import { Card, FeatureCard } from '@/components/Card';
import { Container } from '@/components/Container';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { SectionHeader } from '@/components/SectionHeader';

const features = [
  ['Consent-based participation', 'Participants should only enter the RediSerche network with clear consent and the ability to withdraw.'],
  ['Field officer assisted recruitment', 'Trusted field officers can help recruit respondents, subject to verification and consent confirmation.'],
  ['Direct study invitations', 'In the future, qualified participants can be invited directly to approved studies.'],
  ['Longitudinal readiness', 'The network can support follow-up surveys, cohorts, EMA, ambulatory studies, and clinical research recruitment support.']
];

export default function ParticipantNetworkPage() {
  return (
    <>
      <PageHero eyebrow="Participant network" title="A consent-based respondent network for the future of research in Africa.">
        <p>RediSerche is building toward a verified participant network that helps organizations reach the right respondents while protecting privacy, consent, and participant rights.</p>
      </PageHero>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Future participant infrastructure" title="Not a list of names, but a trust-based research participation system." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map(([title, text]) => <FeatureCard key={title} title={title} text={text} />)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Card className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-ink">Privacy-first positioning</h2>
            <p className="mt-4 leading-8 text-muted">
              RediSerche should never sell personal data. The long-term model should be to connect approved research projects with qualified, consented participants while using aggregated and anonymized insights for data products.
            </p>
          </Card>
        </Container>
      </section>
      <CTA />
    </>
  );
}
