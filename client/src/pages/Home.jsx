import React from 'react';
import Hero from '../components/home/Hero';
import StatsCounter from '../components/home/StatsCounter';
import VerticalsOverview from '../components/home/VerticalsOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessTimeline from '../components/home/ProcessTimeline';
import ClientMarquee from '../components/home/ClientMarquee';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsCounter />
      <VerticalsOverview />
      <WhyChooseUs />
      <ProcessTimeline />
      <ClientMarquee />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
    </div>
  );
}
