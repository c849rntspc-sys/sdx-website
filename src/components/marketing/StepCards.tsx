'use client';

import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { EARLY_ADOPTER_STEPS } from '@/lib/constants';

export function StepCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {EARLY_ADOPTER_STEPS.map((step, i) => (
        <Card key={i}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-primary-400">{step.step}</span>
            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
              <Icon name={step.icon} className="w-5 h-5 text-primary-500" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
        </Card>
      ))}
    </div>
  );
}
