import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { SectionHeader } from '@/components/SectionHeader';
import { workSteps } from '@/lib/content';

const values = [
  ['Trust', 'We protect the integrity of data, participants, field teams, and client decisions.'],
  ['Quality', 'We design research systems that reduce fieldwork errors and improve evidence quality.'],
  ['Access', 'We make it easier to reach field officers, respondents, communities, and hard-to-reach groups.'],
  ['Usefulness', 'We focus on research that can support better decisions, stronger systems, and measurable impact.']
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="We are building Africa's research execution infrastructure.">
        <p>
          RediSerche is a research execution, data collection, analytics, and data intelligence company. We help organizations design studies, reach real people, coordinate fieldwork, monitor quality, analyse data, and produce evidence for better decisions.
        </p>
      </PageHero>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader eyebrow="Who we are" title="A bridge between researchers, field officers, participants, and decision-makers.">
              <p>
                We started with a clear problem which is that research execution is often fragmented across different platforms. Organizations often struggle to find credible field officers or recruit the right respondents. Things become harder when there is no one platform to monitor fieldwork, ensure data quality, make payments, and turn data into useful insights.
              </p>
              <p>
                We are solving that by combining a research marketplace, participant network, survey operations, quality control, analytics consultancy, and future data intelligence products in one coordinated ecosystem.
              </p>
            </SectionHeader>
            <div className="grid gap-5 sm:grid-cols-2">
              {values.map(([title, text]) => (
                <Card key={title}>
                  <h3 className="text-xl font-bold text-ink">{title}</h3>
                  <p className="mt-3 leading-7 text-muted">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeader eyebrow="How we work" title="A practical research workflow built for delivery." align="center">
            <p>Our model is deliberately simple: understand the problem, design the method, deploy people and technology, then deliver evidence that can be acted on.</p>
          </SectionHeader>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step) => (
              <Card key={step.step} className="h-full">
                <p className="text-sm font-black text-brand">{step.step}</p>
                <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
