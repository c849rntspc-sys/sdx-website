const audienceStyles: Record<string, string> = {
  contributor: 'bg-green-100 text-green-800',
  integrator: 'bg-blue-100 text-blue-800',
  buyer: 'bg-purple-100 text-purple-800',
};

const audienceLabels: Record<string, string> = {
  contributor: 'Contributor',
  integrator: 'Integrator',
  buyer: 'Buyer',
};

interface DocsAudienceBadgeProps {
  audience: 'contributor' | 'integrator' | 'buyer';
}

export function DocsAudienceBadge({ audience }: DocsAudienceBadgeProps) {
  const style = audienceStyles[audience] ?? 'bg-gray-100 text-gray-800';
  const label = audienceLabels[audience] ?? audience;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}
    >
      {label}
    </span>
  );
}
