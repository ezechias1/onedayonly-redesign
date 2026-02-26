import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

// ---------------------------------------------------------------------------
// Breadcrumb
// ---------------------------------------------------------------------------

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('py-3', className)}
    >
      <ol className="flex items-center gap-1.5 text-sm overflow-x-auto scrollbar-hide">
        {/* Home link */}
        <li className="flex items-center shrink-0">
          <Link
            href="/"
            className="text-gray-400 hover:text-brand-red transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${index}-${item.label}`} className="flex items-center gap-1.5 min-w-0">
              <ChevronRight
                className="w-3.5 h-3.5 text-gray-400 shrink-0"
                aria-hidden="true"
              />

              {isLast || !item.href ? (
                <span
                  className={cn(
                    'font-medium truncate',
                    isLast
                      ? 'text-gray-700 dark:text-gray-200'
                      : 'text-gray-400',
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-brand-red transition-colors truncate"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
