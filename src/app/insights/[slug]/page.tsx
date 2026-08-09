import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { MarkdownContent } from '@/components/MarkdownContent';
import { PageHero } from '@/components/PageHero';
import { getInsightBySlug, getInsights } from '@/lib/insights';

export async function generateStaticParams() {
  const posts = await getInsights();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const post = await getInsightBySlug(resolvedParams.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.insightType || 'Insight'} title={post.title}>
        <p>{post.excerpt}</p>
        <p className="mt-4 text-sm text-muted">{post.category || 'RediSerche'} {post.publishedAt ? `- ${new Date(post.publishedAt).toLocaleDateString()}` : ''}</p>
      </PageHero>
      <section className="py-20">
        <Container>
          <article className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-8 shadow-card">
            <MarkdownContent content={post.body} />
          </article>
        </Container>
      </section>
    </>
  );
}
