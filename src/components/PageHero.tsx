import { ReactNode } from 'react';
import { Container } from './Container';

export function PageHero({
  eyebrow,
  title,
  children,
  actions
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-white via-lavender to-paper py-20 sm:py-24">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <Container className="relative">
        <div className="max-w-4xl">
          {eyebrow ? <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand">{eyebrow}</p> : null}
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
          {children ? <div className="mt-6 max-w-3xl text-lg leading-8 text-muted">{children}</div> : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
