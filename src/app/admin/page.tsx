import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';

export default function AdminGuidePage() {
  return (
    <>
      <PageHero eyebrow="Content management" title="RediSerche CMS access.">
        <p>The Insights section is prepared for a Git-based CMS. After GitHub OAuth is configured, use the CMS admin file to create posts, reports, news, grant updates, and thought leadership articles.</p>
      </PageHero>
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold text-ink">CMS setup required before login works</h2>
            <p className="mt-4 leading-8 text-muted">Open <code className="rounded bg-lavender px-2 py-1 text-brand">public/admin/config.yml</code> and replace <code className="rounded bg-lavender px-2 py-1 text-brand">YOUR_GITHUB_USERNAME/rediserche-website</code> with the real GitHub repository name.</p>
            <p className="mt-4 leading-8 text-muted">After deployment, the CMS entry file is available at <Link className="font-bold text-brand" href="/admin/index.html">/admin/index.html</Link>. The public website reads posts from <code className="rounded bg-lavender px-2 py-1 text-brand">content/insights</code>.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
