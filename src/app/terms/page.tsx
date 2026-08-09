import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms of use.">
        <p>This placeholder should be reviewed by legal counsel before launch.</p>
      </PageHero>
      <section className="py-20">
        <Container>
          <div className="prose-rediserche mx-auto max-w-3xl rounded-3xl border border-line bg-white p-8 shadow-card">
            <h2>Use of RediSerche</h2>
            <p>Visitors, clients, field officers, and participants should use RediSerche only for lawful research, data collection, consultancy, and partnership purposes.</p>
            <h2>Research ethics</h2>
            <p>Research activities should follow applicable ethical, legal, consent, safeguarding, and data protection requirements.</p>
            <h2>Payments</h2>
            <p>Payments should only be made using official RediSerche instructions and confirmed invoices or written project approvals.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
