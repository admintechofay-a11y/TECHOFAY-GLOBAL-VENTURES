import React, { useState, useEffect, useRef } from 'react';
import { Users, Layers, Globe, HeartHandshake } from 'lucide-react';

export default function StatsCounter() {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    verticals: 0,
    countries: 0,
    retention: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;

    const targets = {
      clients: 500,
      verticals: 6,
      countries: 12,
      retention: 98,
    };

    const duration = 1800; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const factor = step / steps;
      // easeOutExpo function
      const ease = factor === 1 ? 1 : 1 - Math.pow(2, -10 * factor);

      setCounts({
        clients: Math.floor(targets.clients * ease),
        verticals: Math.floor(targets.verticals * ease),
        countries: Math.floor(targets.countries * ease),
        retention: Math.floor(targets.retention * ease),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasTriggered]);

  const stats = [
    {
      icon: Users,
      value: `${counts.clients}+`,
      label: 'Global Enterprise Clients',
      sublabel: 'Across North America, EMEA & APAC',
    },
    {
      icon: Layers,
      value: `${counts.verticals}`,
      label: 'Specialized Verticals',
      sublabel: 'Full-spectrum deep tech delivery',
    },
    {
      icon: Globe,
      value: `${counts.countries}+`,
      label: 'Global Operating Markets',
      sublabel: 'Active international engineering nodes',
    },
    {
      icon: HeartHandshake,
      value: `${counts.retention}%`,
      label: 'Client Retention Rate',
      sublabel: 'Multi-year enterprise contracts',
    },
  ];

  return (
    <section ref={sectionRef} className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl p-6 sm:p-8 bg-[#070E24] border border-[rgba(43,110,250,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group backdrop-blur-md">
        {/* Top 3px solid amber accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2B6EFA]" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(43,110,250,0.2)]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''} group/stat hover:translate-y-[-2px] transition-transform`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#2B6EFA] flex items-center gap-1.5">
                    <span>{stat.value}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B6EFA] animate-ping" />
                  </div>
                </div>
                <div className="font-semibold text-xs sm:text-sm text-[#FFFFFF] group-hover/stat:text-[#00D4FF] transition-colors">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#8B9AB5] mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
