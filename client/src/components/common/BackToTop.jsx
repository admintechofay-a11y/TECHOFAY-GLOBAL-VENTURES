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
      className="fixed bottom-6 right-24 sm:right-36 z-40 p-2.5 rounded-full bg-[#0A1628] border border-[rgba(43,110,250,0.4)] text-[#00D4FF] hover:text-white hover:border-[#00D4FF] shadow-glow-cyan hover:scale-110 transition-all duration-300 backdrop-blur-md"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
