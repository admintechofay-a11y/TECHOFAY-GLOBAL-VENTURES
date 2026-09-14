import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CookieBanner from './components/common/CookieBanner';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import BackToTop from './components/common/BackToTop';
import LoadingScreen from './components/common/LoadingScreen';

import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Products from './pages/Products';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminInquiries from './pages/admin/AdminInquiries';
import AdminBlog from './pages/admin/AdminBlog';
import AdminCareers from './pages/admin/AdminCareers';
import AdminDemoRequests from './pages/admin/AdminDemoRequests';
import AdminSettings from './pages/admin/AdminSettings';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {initialLoading && <LoadingScreen onComplete={() => setInitialLoading(false)} />}

      <ScrollToTop />

      {/* Public Navigation */}
      {!isAdminRoute && <Navbar />}

      {/* Main Application Routes */}
      <main className="relative z-10">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Authentication & Console */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="inquiries" element={<AdminInquiries />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="careers" element={<AdminCareers />} />
            <Route path="demos" element={<AdminDemoRequests />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Public Footer & Floating Widgets */}
      {!isAdminRoute && (
        <>
          <Footer />
          <CookieBanner />
          <WhatsAppFloat />
          <BackToTop />
        </>
      )}
    </>
  );
}
