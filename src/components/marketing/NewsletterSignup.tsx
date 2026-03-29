'use client';

import { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';

type Variant = 'inline' | 'banner' | 'card';

interface Props {
  variant?: Variant;
  dark?: boolean;
}

export function NewsletterSignup({ variant = 'inline', dark = false }: Props) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production this would POST to a newsletter API
    setSubmitted(true);
  };

  // ─── Success state ───────────────────────────────────────────
  if (submitted) {
    return (
      <div className={`flex items-center gap-2 text-sm font-medium ${dark ? 'text-primary-400' : 'text-primary-400'}`}>
        <Check className="w-4 h-4" />
        You&apos;re subscribed. Check your inbox for a welcome email.
      </div>
    );
  }

  // ─── Banner variant (for Support page / homepage) ────────────
  if (variant === 'banner') {
    return (
      <div className={`rounded-2xl border p-6 md:p-8 ${dark ? 'bg-white/5 border-white/10' : 'bg-primary-500/10 border-primary-500/20'}`}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Mail className={`w-5 h-5 ${dark ? 'text-primary-400' : 'text-primary-500'}`} />
              <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-[#EBEBEB]'}`}>
                Stay informed
              </h3>
            </div>
            <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-text-secondary'}`}>
              Monthly updates on product changes, partnerships, governance decisions, and the SDX roadmap. Published the last Thursday of each month.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className={`flex-1 md:w-64 px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500/30 ${
                dark
                  ? 'bg-white/5 border-white/10 text-gray-200 placeholder:text-gray-500'
                  : 'bg-[#141414] border-[#333333] text-[#EBEBEB] placeholder:text-[#555555]'
              }`}
            />
            <button
              type="submit"
              className="shrink-0 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:brightness-110 transition-all active:scale-[0.98]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Card variant (for footer) ──────────────────────────────
  if (variant === 'card') {
    return (
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          News
        </h4>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
          Monthly updates on the SDX product, partnerships, and roadmap.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="w-full px-3 py-2 text-sm rounded-lg border border-white/10 bg-white/5 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
          >
            Subscribe <ArrowRight className="w-3 h-3" />
          </button>
        </form>
      </div>
    );
  }

  // ─── Inline variant (default) ───────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
        className={`flex-1 px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500/30 ${
          dark
            ? 'bg-white/5 border-white/10 text-gray-200 placeholder:text-gray-500'
            : 'bg-[#141414] border-[#333333] text-[#EBEBEB] placeholder:text-[#555555]'
        }`}
      />
      <button
        type="submit"
        className="shrink-0 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:brightness-110 transition-all active:scale-[0.98]"
      >
        Subscribe
      </button>
    </form>
  );
}
