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
      <div className="w-12 h-12 rounded-2xl bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.25)] flex items-center justify-center text-[#F59E0B] mx-auto shadow-inner">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-heading font-semibold text-[#FFFBEB] text-sm">
          {title}
        </h4>
        <p className="text-xs text-[#FDE68A] mt-1 leading-relaxed">
          {description}
        </p>
      </div>
      {actionText && onAction && (
        <div className="pt-2">
          <button
            onClick={onAction}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#1c1400] bg-[#F59E0B] hover:bg-[#B45309] hover:text-white transition-all cursor-pointer inline-flex items-center gap-2"
          >
            {actionText}
          </button>
        </div>
      )}
    </div>
  );
}
