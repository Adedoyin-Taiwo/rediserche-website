import Link from 'next/link';
import { navItems, site } from '@/lib/site';
import { ButtonLink } from './ButtonLink';
import { Container } from './Container';
import Image from 'next/image';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-xl">
          <Image src="/ReSerchee-png6.png" alt="Company Logo" width={150} height={150} className="rounded-2xl"/>
          <span>
            <span className="block text-lg font-black tracking-tight text-ink">{site.name}</span>
            <span className="hidden text-xs font-medium text-muted sm:block">
              Research. Data. Intelligence. </span>
              </span>
              </Link>
              <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition hover:bg-lavender hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <ButtonLink href="/contact" variant="primary">Start a project</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
