import { SupportHub } from '@/components/docs/SupportHub';
import { getAllDocsMeta } from '@/lib/docs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description: 'SDX support center — documentation, guides, and API reference for real estate owners, developers, and service providers.',
};

export default function DocsIndexPage() {
  const allDocs = getAllDocsMeta();
  return <SupportHub allDocs={allDocs} />;
}
