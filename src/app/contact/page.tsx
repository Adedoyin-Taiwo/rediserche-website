import { ContactForm } from '@/components/ContactForm';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us about your research, data, or partnership need.">
        <p>Send a project brief, request a quote, discuss a grant partnership, or ask about RediSerche services.</p>
      </PageHero>
      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <Card>
                <h2 className="text-2xl font-bold text-ink">Official contact</h2>
                <p className="mt-4 text-muted">Email: {site.email}</p>
                <p className="mt-2 text-muted">Phone: {site.phone}</p>
                <p className="mt-4 leading-7 text-muted">For project payments, request an official invoice or written confirmation before transferring funds.</p>
              </Card>
              <Card>
                <h2 className="text-2xl font-bold text-ink">What to include</h2>
                <ul className="mt-4 space-y-3 text-muted">
                  <li>Research problem or project objective</li>
                  <li>Location and target population</li>
                  <li>Sample size or expected reach</li>
                  <li>Timeline and budget range</li>
                  <li>Whether you need fieldwork, analysis, or full implementation</li>
                </ul>
              </Card>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
