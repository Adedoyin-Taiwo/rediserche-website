import fs from 'fs';
import path from 'path';

export type InsightPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  insightType: string;
  publishedAt: string;
  category?: string;
  author?: string;
  body: string;
};

const insightsDirectory = path.join(process.cwd(), 'content', 'insights');

function parseFrontmatter(source: string): { data: Record<string, string>; body: string } {
  const trimmed = source.trim();
  if (!trimmed.startsWith('---')) return { data: {}, body: source };
  const end = trimmed.indexOf('---', 3);
  if (end === -1) return { data: {}, body: source };
  const frontmatter = trimmed.slice(3, end).trim();
  const body = trimmed.slice(end + 3).trim();
  const data: Record<string, string> = {};
  for (const line of frontmatter.split('\n')) {
    const index = line.indexOf(':');
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim().replace(/^['\"]|['\"]$/g, '');
    data[key] = value;
  }
  return { data, body };
}

function readPost(fileName: string): InsightPost {
  const fullPath = path.join(insightsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, body } = parseFrontmatter(fileContents);
  const slug = data.slug || fileName.replace(/\.mdx?$/, '');
  return {
    _id: slug,
    title: data.title || slug,
    slug,
    excerpt: data.excerpt || '',
    insightType: data.insightType || 'Insight',
    publishedAt: data.publishedAt || '',
    category: data.category || 'RediSerche',
    author: data.author || 'RediSerche Team',
    body
  };
}

export async function getInsights(): Promise<InsightPost[]> {
  if (!fs.existsSync(insightsDirectory)) return [];
  return fs
    .readdirSync(insightsDirectory)
    .filter((fileName) => /\.mdx?$/.test(fileName))
    .map(readPost)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getInsightBySlug(slug: string): Promise<InsightPost | null> {
  const posts = await getInsights();
  return posts.find((post) => post.slug === slug) || null;
}
