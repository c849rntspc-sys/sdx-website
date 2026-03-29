import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SDXLogo } from '@/components/ui/SDXLogo';
import { NewsletterSignup } from '@/components/marketing/NewsletterSignup';

const footerLinks = {
  Platform: [
    { label: 'Platform Features', href: '/platform' },
    { label: 'Data Dividend', href: '/data-dividend' },
    { label: 'Ecosystem', href: '/ecosystem' },
    { label: 'Benchmarking Standards', href: '/platform#standards' },
  ],
  Resources: [
    { label: 'Support', href: '/docs' },
    { label: 'Newsletter Archive', href: '/news' },
    { label: 'About Us', href: '/governance' },
    { label: 'Contact', href: '/about#contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-[#2A2A2A] text-gray-400">
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <SDXLogo size="sm" />
            </Link>
            <p className="text-sm leading-relaxed">
              The neutral measurement substrate for comparable, audit-ready real estate sustainability data.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#777777] mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <NewsletterSignup variant="card" />
        </div>
      </Container>

      <div className="border-t border-[#2A2A2A]">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#777777]">
            &copy; {new Date().getFullYear()} Sustainability Data Exchange. All rights reserved.
          </p>
          <p className="text-xs text-[#777777]">
            Neutral. Shared Value. Not-for-profit.
          </p>
        </Container>
      </div>
    </footer>
  );
}
