import { FeatureCard } from '@/components/Card';
import { Container } from '@/components/Container';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { SectionHeader } from '@/components/SectionHeader';

const industries = [
  ['Health', 'Public health surveys, health access studies, patient experience, facility assessments, clinical research support, and longitudinal follow-up.'],
  ['Finance', 'Financial inclusion, fintech adoption, SME finance, customer trust, credit behavior, and market intelligence.'],
  ['Agriculture', 'Farmer surveys, rural household research, climate impact studies, supply chain mapping, and input adoption research.'],
  ['Education', 'Student surveys, school performance research, learning outcomes, education access, and program evaluation.'],
  ['Government and policy', 'Citizen feedback, public service evaluation, policy impact studies, demographic research, and community-level data collection.'],
  ['Development and NGOs', 'Baseline studies, endline studies, impact evaluations, needs assessments, humanitarian surveys, and monitoring and evaluation.'],
  ['Consumer markets', 'Brand research, product testing, market entry studies, customer satisfaction, and consumer behavior research.'],
  ['Academic research', 'Field data collection, respondent recruitment, survey programming, research assistance, and data analysis support.']
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Research infrastructure for sectors where evidence matters.">
        <p>RediSerche supports clients across sectors where reliable data can improve services, solve problems, guide investments, and inform policy.</p>
      </PageHero>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Sectors" title="From health to finance, RediSerche helps teams collect credible data and act on it." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industries.map(([title, text]) => <FeatureCard key={title} title={title} text={text} />)}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
