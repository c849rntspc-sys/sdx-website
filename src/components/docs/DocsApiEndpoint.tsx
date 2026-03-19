const methodStyles: Record<string, string> = {
  GET: 'bg-green-100 text-green-800',
  POST: 'bg-blue-100 text-blue-800',
  PUT: 'bg-amber-100 text-amber-800',
  DELETE: 'bg-red-100 text-red-800',
  PATCH: 'bg-purple-100 text-purple-800',
};

interface DocsApiEndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
}

export function DocsApiEndpoint({ method, path }: DocsApiEndpointProps) {
  const badge = methodStyles[method] ?? 'bg-gray-100 text-gray-800';

  return (
    <div className="my-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-surface-card px-4 py-3">
      <span
        className={`inline-flex shrink-0 items-center rounded-md px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${badge}`}
      >
        {method}
      </span>
      <code className="text-sm font-mono text-navy-900 break-all">{path}</code>
    </div>
  );
}
