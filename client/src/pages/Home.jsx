import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>TECHOFAY GLOBAL VENTURES — Complete Digital Growth & Custom AI Solutions</title>
        <meta
          name="description"
          content="Empowering enterprises with custom AI development, complete digital growth systems, software suites (ERP, HMS, School), and high-performance engineering."
        />
        <link rel="canonical" href="https://techofay.com/" />
      </Helmet>
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
