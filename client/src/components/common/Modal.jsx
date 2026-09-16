import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = 'max-w-2xl' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div 
        role="dialog" 
        aria-modal="true"
        className={`relative w-full ${maxWidth} rounded-2xl p-6 sm:p-8 bg-[#1A1A1A] border border-[rgba(245,158,11,0.25)] shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 my-8 text-[#FFFBEB]`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#FDE68A] hover:text-[#F59E0B] hover:bg-[rgba(245,158,11,0.1)] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-6 pr-8">
            {title && (
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FFFBEB] mb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#FDE68A]">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Body Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
