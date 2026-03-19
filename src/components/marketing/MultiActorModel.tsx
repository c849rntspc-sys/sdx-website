'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { Building2, Users, Code, Shield, ArrowRightLeft, Eye, Settings, Key } from 'lucide-react';

const actors = [
  {
    icon: Building2,
    title: 'Property Owners',
    subtitle: 'Direct access to your data',
    color: 'primary' as const,
    features: [
      'Manage your portfolio directly — add properties, submit data, track benchmarks',
      'Delegate management to trusted consultants with granular access control',
      'Generate API keys for automated integration with your property management software',
      'Full audit trail — know who changed what, when, and on whose behalf',
    ],
  },
  {
    icon: Users,
    title: 'Consultants & Service Providers',
    subtitle: 'Manage multiple clients from one account',
    color: 'cyan' as const,
    features: [
      'Register once, get invited by owner organizations to act on their behalf',
      'Consolidated dashboard showing all clients\u2019 performance at a glance',
      'Switch between client organizations instantly with the in-app org switcher',
      'Each client controls your access level — view-only, operate, or full management',
    ],
  },
  {
    icon: Code,
    title: 'Technology Partners',
    subtitle: 'Integrate via API at zero cost',
    color: 'primary' as const,
    features: [
      'RESTful API with scoped API keys for secure machine-to-machine integration',
      '11 granular permission scopes — request only the access you need',
      'Push and pull data on behalf of owners without logging into the platform',
      'Rate-limited, auditable, and instantly revocable — enterprise-grade security',
    ],
  },
];

export function MultiActorModel() {
  return (
    <section className="py-24 bg-navy-800">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-4">
              Built for everyone
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Owners, consultants, and technology partners
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              SDX supports three distinct access models — each with tailored capabilities, granular permissions, and a complete audit trail.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {actors.map((actor, i) => {
              const Icon = actor.icon;
              const accentColor = actor.color === 'cyan' ? 'text-cyan' : 'text-primary-400';
              const bgColor = actor.color === 'cyan' ? 'bg-cyan/15' : 'bg-primary-500/15';
              const borderColor = actor.color === 'cyan' ? 'border-cyan/20' : 'border-primary-500/20';

              return (
                <div
                  key={i}
                  className={`bg-white/5 border ${borderColor} rounded-2xl p-6`}
                >
                  <div className={`w-11 h-11 rounded-xl ${bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${accentColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{actor.title}</h3>
                  <p className={`text-xs font-medium ${accentColor} mb-4`}>{actor.subtitle}</p>
                  <ul className="space-y-3">
                    {actor.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Shield className={`w-3.5 h-3.5 ${accentColor} shrink-0 mt-0.5`} />
                        <p className="text-xs text-gray-400 leading-relaxed">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>

          {/* Security footer */}
          <motion.div variants={fadeInUp} className="mt-8 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-wrap gap-6 justify-center">
              {[
                { icon: Key, text: 'Scoped API keys with bcrypt-hashed storage' },
                { icon: Eye, text: 'Complete audit log of all data modifications' },
                { icon: Settings, text: '11 API scopes · 3 access levels · 4 user roles' },
                { icon: ArrowRightLeft, text: '"Performed by [rep] on behalf of [owner]" tracking' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-gray-500" />
                    <p className="text-xs text-gray-500">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
