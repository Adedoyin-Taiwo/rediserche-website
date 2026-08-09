import { ReactNode } from 'react';

export function SectionHeader({
  eyebrow,
  title,
  children,
  align = 'left'
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {children ? <div className="mt-5 text-base leading-8 text-muted sm:text-lg">{children}</div> : null}
    </div>
  );
}
