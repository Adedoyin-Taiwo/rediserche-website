import Link from 'next/link';
import { site } from '@/lib/site';
import { Container } from './Container';

const groups = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'What we do',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
      { label: 'Grants and partnerships', href: '/grants-and-partnerships' }
    ]
  },
  {
    title: 'Trust',
    links: [
      { label: 'Payments', href: '/payments' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' }
    ]
  }
];

import Image from 'next/image';  

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/ReSerchee-png5.png" alt="Company Logo" width={150} height={150} className="rounded-2xl"/>
              <div>
                <p className="text-lg font-black">{site.name}</p>
                <p className="text-sm text-white/60">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-7 text-white/70">
              RediSerche is building research execution infrastructure for Africa by combining field networks,
              participant access, data quality systems, analytics, and research expertise.
            </p>
            <p className="mt-6 text-sm text-white/60">Email: {site.email}</p>
            <p className="mt-2 text-sm text-white/60">Phone: {site.phone}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/90">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-white/65 transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RediSerche. All rights reserved.</p>
          <p>Official domain: {site.domain}</p>
        </div>
      </Container>
    </footer>
  );
}
