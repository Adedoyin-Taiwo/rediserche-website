import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy and data protection commitment.">
        <p>This placeholder should be reviewed by legal counsel before launch. RediSerche should maintain privacy-first handling of research participants, clients, field officers, and project data.</p>
      </PageHero>
      <section className="py-20">
        <Container>
          <div className="prose-rediserche mx-auto max-w-3xl rounded-3xl border border-line bg-white p-8 shadow-card">
            <h2>Our privacy principles</h2>
            <p>Collect only what is necessary, explain the purpose clearly, protect identifiable data, respect consent and withdrawal, and use aggregated or anonymized outputs where possible.</p>
            <h2>Participant data</h2>
            <p>Participant information should be used only for approved research workflows and should never be sold as personal data.</p>
            <h2>Contact</h2>
            <p>For privacy questions, contact RediSerche through the official email on the website.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
