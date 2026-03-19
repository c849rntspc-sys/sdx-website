'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/marketing/FadeInView';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { Crown, Package, Megaphone, ArrowDown, Check, Clock, Ban } from 'lucide-react';

const boardAttributes = [
  'Approves annual budget and operating plan',
  'Ultimate authority over charter amendments (supermajority required)',
  'Appoints committee co-chairs from among its members',
  'Sets commercialization boundaries and data protection thresholds',
  'Comprised of permanent founding members and trade association representatives',
  'Member organizations appoint their own representatives to SDX',
];

const productCommittee = {
  title: 'Product Committee',
  icon: Package,
  color: 'primary' as const,
  description: 'Governs what the platform builds and how data is standardized.',
  responsibilities: [
    'Defines property types, meter types, and boundary conventions',
    'Sets normalization methodology and benchmarking standards',
    'Approves data quality scoring criteria and audit requirements',
    'Prioritizes platform roadmap and feature development',
    'Reviews and approves integration standards and API specifications',
  ],
};

const commercializationCommittee = {
  title: 'Commercialization Committee',
  icon: Megaphone,
  color: 'cyan' as const,
  description: 'Governs which licensed content products are created and how they are distributed to third parties.',
  responsibilities: [
    'Defines which derivative data products are authorized for licensing',
    'Sets pricing frameworks for licensed content sold to third parties',
    'Ensures contributors receive all licensed content free for internal use',
    'Oversees data dividend calculation methodology and distribution',
    'Reviews third-party licensing agreements and partnership terms',
  ],
};

const keyPolicies = [
  { icon: Clock, text: 'Committee members serve 2-year terms, eligible for renewal by the Board' },
  { icon: Ban, text: 'No compensation — only customary reimbursement for travel, meetings, and meals' },
  { icon: Crown, text: 'Two Board members co-chair each committee, ensuring alignment with Board priorities' },
];

export function GovernanceStructureDiagram() {
  return (
    <section className="py-24 bg-navy-900">
      <Container>
        <SectionHeading
          eyebrow="Governance Structure"
          title="Board and committee model"
          subtitle="A clear hierarchy ensures accountability: the Board holds ultimate authority, while two specialized committees handle day-to-day governance of product and commercialization."
          dark
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Board */}
          <motion.div variants={fadeInUp}>
            <div className="bg-gradient-to-br from-primary-500/20 to-primary-500/5 border-2 border-primary-500/40 rounded-2xl p-8 mb-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">SDX Board</h3>
                  <p className="text-xs text-primary-400 font-medium">Ultimate authority and responsibility</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 text-center mb-6 max-w-2xl mx-auto">
                Permanent founding members and global trade associations at the organizational level. Each member organization appoints its own representative(s) to SDX.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
                {boardAttributes.map((attr, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400 leading-relaxed">{attr}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connector arrows */}
          <motion.div variants={fadeInUp} className="flex justify-center gap-40 my-2">
            <div className="flex flex-col items-center">
              <ArrowDown className="w-5 h-5 text-primary-400" />
              <span className="text-[10px] text-gray-500 mt-1">Co-chaired by 2 Board members</span>
            </div>
            <div className="flex flex-col items-center">
              <ArrowDown className="w-5 h-5 text-cyan" />
              <span className="text-[10px] text-gray-500 mt-1">Co-chaired by 2 Board members</span>
            </div>
          </motion.div>

          {/* Committees */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
            {[productCommittee, commercializationCommittee].map((committee, i) => {
              const Icon = committee.icon;
              const isProduct = i === 0;
              const accentColor = isProduct ? 'text-primary-400' : 'text-cyan';
              const bgColor = isProduct ? 'bg-primary-500/20' : 'bg-cyan/20';
              const borderColor = isProduct ? 'border-primary-500/30' : 'border-cyan/30';

              return (
                <div key={i} className={`bg-white/5 border ${borderColor} rounded-2xl p-6`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${accentColor}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{committee.title}</h3>
                      <p className={`text-[11px] ${accentColor} font-medium`}>2-year terms · Board-renewable</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{committee.description}</p>
                  <ul className="space-y-2">
                    {committee.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 ${accentColor} shrink-0 mt-0.5`} />
                        <p className="text-xs text-gray-400 leading-relaxed">{r}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>

          {/* Key policies */}
          <motion.div variants={fadeInUp} className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-white mb-4">Key governance policies</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {keyPolicies.map((policy, i) => {
                const Icon = policy.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400 leading-relaxed">{policy.text}</p>
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
