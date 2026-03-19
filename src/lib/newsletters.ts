import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type NewsletterMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

const NEWSLETTER_DIR = path.join(process.cwd(), 'src/content/newsletters');

export function getAllNewsletters(): NewsletterMeta[] {
  if (!fs.existsSync(NEWSLETTER_DIR)) return [];

  const files = fs.readdirSync(NEWSLETTER_DIR).filter((f) => f.endsWith('.mdx'));

  const newsletters = files.map((file) => {
    const raw = fs.readFileSync(path.join(NEWSLETTER_DIR, file), 'utf-8');
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: (data.title as string) ?? '',
      date: (data.date as string) ?? '',
      summary: (data.summary as string) ?? '',
    };
  });

  // Sort newest first
  return newsletters.sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsletterBySlug(slug: string): { meta: NewsletterMeta; content: string } {
  const filePath = path.join(NEWSLETTER_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Newsletter not found: ${slug}`);
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: (data.title as string) ?? '',
      date: (data.date as string) ?? '',
      summary: (data.summary as string) ?? '',
    },
    content,
  };
}
