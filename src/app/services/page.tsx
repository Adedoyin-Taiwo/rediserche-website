import { Card, FeatureCard } from '@/components/Card';
import { Container } from '@/components/Container';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { SectionHeader } from '@/components/SectionHeader';
import { services } from '@/lib/content';

const serviceGroups = [
  {
    title: 'Research execution',
    items: ['Study design support', 'Sampling support', 'Questionnaire design', 'Survey programming', 'Field officer recruitment', 'Field supervision', 'Monitoring and evaluation']
  },
  {
    title: 'Data and analytics',
    items: ['Data cleaning', 'Statistical analysis', 'Qualitative analysis', 'Dashboard development', 'Data visualization', 'Report writing', 'Insight briefs']
  },
  {
    title: 'Health and CRO-style support',
    items: ['Public health surveys', 'Participant recruitment', 'Patient follow-up support', 'Facility assessments', 'Longitudinal data collection', 'Consent workflow support', 'Study coordination support']
  },
  {
    title: 'Grant-funded projects',
    items: ['Technical proposal support', 'Field implementation', 'Partner coordination', 'Data quality plans', 'Donor reporting', 'Impact evaluations', 'Evidence generation']
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Research services, analytics consultancy, and implementation support.">
        <p>RediSerche is positioned to deliver research projects as a technology-enabled research company, not just a software platform.</p>
      </PageHero>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Service lines" title="Everything needed to move from research problem to reliable evidence." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <FeatureCard key={service.title} title={service.title} text={service.text} />)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <Card key={group.title}>
                <h3 className="text-2xl font-bold text-ink">{group.title}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => <span key={item} className="rounded-full bg-lavender px-4 py-2 text-sm font-semibold text-brand">{item}</span>)}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
