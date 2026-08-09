import Link from 'next/link';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { getInsights } from '@/lib/insights';

export default async function InsightsPage() {
  const posts = await getInsights();
  return (
    <>
      <PageHero eyebrow="Insights" title="Reports, research notes, news, and thought leadership.">
        <p>Here you can see published reports from RediSerche, fieldwork lessons, grant updates, articles, briefs, and policy notes.</p>
      </PageHero>
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post._id} href={`/insights/${post.slug}`} className="group block">
                <Card className="h-full transition duration-200 group-hover:-translate-y-1 group-hover:shadow-soft">
                  <div className="mb-5 h-44 rounded-3xl bg-gradient-to-br from-brand/12 via-lavender to-gold/20" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{post.insightType}</p>
                  <h2 className="mt-3 text-2xl font-bold text-ink">{post.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-sm text-muted">
                    <span>{post.category || 'RediSerche'}</span>
                    <span>{post.publishedAt ? new Date(post.publishedAt).getFullYear() : ''}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
