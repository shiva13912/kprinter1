import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

export interface ErrorMessageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorMessage({
  title = 'Unable to Load Content',
  message = 'There was a technical problem fetching packaging specifications.',
  onRetry,
  className,
}: ErrorMessageProps) {
  return (
    <div className={`bg-red-50/80 border border-red-200 rounded-xl p-6 text-center max-w-md mx-auto ${className || ''}`}>
      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-slate-900 font-outfit mb-1">{title}</h3>
      <p className="text-xs text-slate-600 mb-4">{message}</p>
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          size="sm"
          leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
        >
          Retry
        </Button>
      )}
    </div>
  );
}
