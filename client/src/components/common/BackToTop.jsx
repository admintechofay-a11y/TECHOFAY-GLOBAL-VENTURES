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
      className="fixed bottom-6 right-24 sm:right-36 z-40 p-2.5 rounded-full bg-[#1A1A1A] border border-[rgba(245,158,11,0.3)] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#1c1400] hover:border-[#F59E0B] shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:scale-105 transition-all duration-300 cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
