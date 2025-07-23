import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
}

export function PageHeader({ title, subtitle, children, centered = false }: PageHeaderProps) {
  return (
    <div className={centered ? "mb-6" : "p-4"}>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className={centered ? "text-center w-full" : ""}>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {subtitle && (
              <p className="text-gray-600 mt-1">{subtitle}</p>
            )}
          </div>
          {children && !centered && (
            <div className="flex items-center space-x-2">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}