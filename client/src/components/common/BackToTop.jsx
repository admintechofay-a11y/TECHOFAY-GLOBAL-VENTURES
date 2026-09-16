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
      className="fixed bottom-6 right-24 sm:right-36 z-40 p-2.5 rounded-full bg-[#0A1628] border border-[rgba(43,110,250,0.3)] text-[#2B6EFA] hover:bg-[#2B6EFA] hover:text-white font-semibold hover:border-[#2B6EFA] shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
