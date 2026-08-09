import { ButtonLink } from './ButtonLink';
import { Container } from './Container';

export function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-4xl bg-brand p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/70">Work with RediSerche</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Let us help you design, execute, monitor, and analyse your next research project.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/75">
              Whether you need field officers, respondents, data collection, analytics, grant partnerships, or a complete research implementation partner, RediSerche is built to support you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="secondary">Request a research brief</ButtonLink>
              <ButtonLink href="/grants-and-partnerships" variant="dark">Explore partnerships</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
