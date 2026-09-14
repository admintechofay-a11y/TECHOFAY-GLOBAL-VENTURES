import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = 'max-w-2xl' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className={`relative w-full ${maxWidth} glass-panel rounded-2xl p-6 sm:p-8 bg-[#0A1628]/95 border border-[rgba(0,212,255,0.3)] shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 my-8`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#8B9AB5] hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-6 pr-8">
            {title && (
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#8B9AB5]">
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
