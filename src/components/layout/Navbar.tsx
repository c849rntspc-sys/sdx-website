'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Leaf } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, APP_URL } from '@/lib/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className={`text-lg font-bold tracking-tight ${scrolled ? 'text-text-primary' : 'text-white'}`}>
                SDX
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    pathname === link.href
                      ? scrolled ? 'text-primary-500 bg-primary-50' : 'text-white bg-white/10'
                      : scrolled ? 'text-text-secondary hover:text-text-primary hover:bg-gray-100' : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`${APP_URL}/login`}
                className={`hidden sm:inline-flex px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? 'text-text-secondary hover:text-text-primary hover:bg-gray-100'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Log In
              </a>
              <a
                href={`${APP_URL}/register`}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:brightness-110 transition-all active:scale-[0.98]"
              >
                Create Account
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-6 pt-20">
            <nav className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <a
                href={`${APP_URL}/login`}
                className="block w-full px-4 py-3 text-center text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-gray-50 rounded-xl transition-colors"
              >
                Log In
              </a>
              <a
                href={`${APP_URL}/register`}
                className="block w-full px-6 py-3 text-center text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 text-white shadow-lg shadow-primary-500/25 transition-all"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
