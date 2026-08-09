import { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-line bg-white/90 p-6 shadow-card backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

export function FeatureCard({ title, text, kicker }: { title: string; text: string; kicker?: string }) {
  return (
    <Card className="h-full transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      {kicker ? <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand">{kicker}</p> : null}
      <h3 className="text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{text}</p>
    </Card>
  );
}
