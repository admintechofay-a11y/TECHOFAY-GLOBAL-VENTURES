import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-24 sm:right-36 z-40 p-2.5 rounded-full bg-white border border-[#E5E7EB] text-[#16A34A] hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] shadow-[0_4px_12px_rgba(22,163,74,0.15)] hover:scale-105 transition-all duration-300 cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
