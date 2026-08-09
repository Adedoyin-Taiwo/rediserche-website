import Link from 'next/link';
import { ReactNode } from 'react';

const variants = {
  primary: 'bg-brand text-white shadow-soft hover:-translate-y-0.5 hover:bg-plum',
  secondary: 'bg-white text-brand ring-1 ring-line hover:-translate-y-0.5 hover:ring-brand/30',
  dark: 'bg-ink text-white hover:-translate-y-0.5 hover:bg-brand',
  ghost: 'text-brand hover:bg-lavender'
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = ''
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
