import React from 'react';
import { Inbox } from 'lucide-react';

export default function EmptyState({
  icon: Icon = Inbox,
  title = 'No Records Found',
  description = 'There are no items matching the current view or filter criteria.',
  actionText,
  onAction,
  className = '',
}) {
  return (
    <div className={`py-14 px-6 text-center space-y-4 max-w-sm mx-auto ${className}`}>
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] mx-auto shadow-inner">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-orbitron font-semibold text-white text-sm">
          {title}
        </h4>
        <p className="text-xs text-[#8B9AB5] mt-1 leading-relaxed">
          {description}
        </p>
      </div>
      {actionText && onAction && (
        <div className="pt-2">
          <button
            onClick={onAction}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
          >
            {actionText}
          </button>
        </div>
      )}
    </div>
  );
}
