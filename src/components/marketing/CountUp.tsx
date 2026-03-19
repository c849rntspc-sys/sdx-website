'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function CountUp({ value, className = '' }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ''));
    const hasDecimal = numStr.includes('.');
    const decimalPlaces = hasDecimal ? numStr.split('.')[1].length : 0;
    const hasComma = numStr.includes(',');
    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      let formatted = hasDecimal ? current.toFixed(decimalPlaces) : Math.round(current).toString();
      if (hasComma) {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formatted = parts.join('.');
      }

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (step >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
