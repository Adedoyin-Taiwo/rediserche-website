import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';

export default function PaymentsPage() {
  return (
    <>
      <PageHero eyebrow="Payments" title="Official payment information.">
        <p>Please only make payments after receiving an official RediSerche invoice, proposal acceptance, or written confirmation from an authorized RediSerche representative.</p>
      </PageHero>
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <Card>
              <h2 className="text-2xl font-bold text-ink">Bank transfer details</h2>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-lavender p-4"><p className="text-sm text-muted">Account name</p><p className="font-bold text-ink">{site.bank.accountName}</p></div>
                <div className="rounded-2xl bg-lavender p-4"><p className="text-sm text-muted">Bank</p><p className="font-bold text-ink">{site.bank.bankName}</p></div>
                <div className="rounded-2xl bg-lavender p-4"><p className="text-sm text-muted">Account number</p><p className="font-bold text-ink">{site.bank.accountNumber}</p></div>
              </div>
            </Card>
            <Card className="border-brand/20 bg-brand text-white">
              <h2 className="text-2xl font-bold">Payment safety notice</h2>
              <p className="mt-4 leading-8 text-white/75">RediSerche will never ask clients to pay into a personal account. Always include your invoice or project reference when making payments. Send proof of payment to {site.email}.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
