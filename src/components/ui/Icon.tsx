'use client';

import * as Icons from 'lucide-react';

type Props = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: Props) {
  const IconMap = Icons as unknown as Record<string, Icons.LucideIcon>;
  const LucideIcon = IconMap[name] || Icons.Circle;
  return <LucideIcon className={className} />;
}
