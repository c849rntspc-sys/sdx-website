'use client';

import { GOVERNANCE } from '@/lib/constants';
import { FadeInView } from './FadeInView';
import { Icon } from '@/components/ui/Icon';

export function GovernanceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <FadeInView>
        <div className="bg-gradient-to-br from-primary-500 to-primary-400 rounded-2xl p-8 text-white h-full">
          <h3 className="text-lg font-bold mb-6">Owner Governance</h3>
          <div className="space-y-5">
            {GOVERNANCE.owner.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-white/90 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInView>
      <FadeInView>
        <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 h-full">
          <h3 className="text-lg font-bold text-white mb-6">Neutral Operator</h3>
          <div className="space-y-5">
            {GOVERNANCE.operator.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInView>
    </div>
  );
}
