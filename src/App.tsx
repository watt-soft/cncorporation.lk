import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Import = lazy(() => import('./pages/Import'));
const Export = lazy(() => import('./pages/Export'));
const VisaServices = lazy(() => import('./pages/VisaServices'));
const Contact = lazy(() => import('./pages/Contact'));
const MachineDetails = lazy(() => import('./pages/MachineDetails'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Simple loading spinner for suspense fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Suspense fallback={<PageLoader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/import" element={<Import />} />
                <Route path="/import/:id" element={<MachineDetails />} />
                <Route path="/export" element={<Export />} />
                <Route path="/visa-services" element={<VisaServices />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
