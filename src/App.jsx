import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopView from './components/ScrollToTopView';

// Page Components
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll To Top Logic: Page change hone par screen automatically upar chali jaye
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopView />

      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans antialiased text-slate-900">

        {/* Navigation Bar hamesha top par rahega */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 Page (Optional): Agar koi galat URL daale toh Home par bhej de */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer hamesha bottom par rahega */}
        <Footer />

        {/* Floating WhatsApp Button for Indore Clients (Optional but Recommended) */}
        <a
          href="https://wa.me/919977267799"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 animate-bounce"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.893 11.89-2.015 0-3.991-.511-5.741-1.486l-6.248 1.695zm6.416-3.766l.334.19c1.411.802 3.013 1.226 4.654 1.226 5.184 0 9.404-4.218 9.404-9.399 0-2.521-1.026-4.887-2.887-6.748-1.86-1.861-4.226-2.887-6.744-2.887-5.186 0-9.408 4.22-9.408 9.399 0 1.956.609 3.868 1.761 5.484l.208.291-1.104 4.027 4.122-1.114z" />
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;