import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'RediSerche - Research execution and data intelligence for Africa',
    template: '%s | RediSerche'
  },
  description: 'RediSerche helps organizations design, execute, monitor, and analyse high-quality research projects across Africa.',
  openGraph: {
    title: 'RediSerche',
    description: site.tagline,
    url: site.url,
    siteName: 'RediSerche',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
