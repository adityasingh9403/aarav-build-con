import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react'; // Better icon handling

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
import Process from './pages/Process';

// Scroll To Top Logic
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Page change smooth feel dega
    });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopView />
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen font-sans antialiased text-slate-900 bg-[#fcfcfc]">

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-0"> {/* Padding Navbar handle karega */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<Process />} />
            {/* Default redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Professional WhatsApp Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-[999] group">
          {/* Tooltip text - Visible on Hover */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0f172a] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border-r-4 border-[#f59e0b]">
            Consult with Rakesh Verma
          </span>
          
          <a
            href="https://wa.me/919977267799"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all flex items-center justify-center animate-pulse hover:animate-none scale-100 hover:scale-110 active:scale-90"
          >
            <MessageCircle size={32} fill="currentColor" className="text-white" />
          </a>
        </div>

      </div>
    </Router>
  );
}

export default App;