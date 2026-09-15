import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CookieBanner from './components/common/CookieBanner';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import BackToTop from './components/common/BackToTop';
import LoadingScreen from './components/common/LoadingScreen';

// Lazy load all public pages for optimal bundle performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Admin chunk (separate bundle — only loaded if user visits /admin)
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminInquiries = lazy(() => import('./pages/admin/AdminInquiries'));
const AdminBlog = lazy(() => import('./pages/admin/AdminBlog'));
const AdminCareers = lazy(() => import('./pages/admin/AdminCareers'));
const AdminDemoRequests = lazy(() => import('./pages/admin/AdminDemoRequests'));
const AdminSettings = lazy(() => import('./pages/admin/AdminSettings'));

// Page fallback — shown while lazy chunks download
const PageLoader = () => (
  <div className="min-h-[70vh] bg-white flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#16A34A] border-t-transparent rounded-full animate-spin" />
  </div>
);

// Error Boundary class component
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary caught]:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 font-bold text-2xl">!</span>
          </div>
          <h2 className="font-heading font-bold text-xl text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-sm">
            {this.state.error?.message || 'An unexpected error occurred while rendering this page.'}
          </p>
          <button
            onClick={() => (window.location.href = '/')}
            className="px-6 py-3 bg-[#16A34A] hover:bg-[#166534] text-white rounded-lg text-sm font-medium transition-colors"
          >
            Return to Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

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
    <HelmetProvider>
      {initialLoading && <LoadingScreen onComplete={() => setInitialLoading(false)} />}

      <ScrollToTop />

      {/* Public Navigation */}
      {!isAdminRoute && <Navbar />}

      {/* Main Application Routes wrapped in ErrorBoundary + Suspense */}
      <main className="relative z-10">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </ErrorBoundary>
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
    </HelmetProvider>
  );
}
