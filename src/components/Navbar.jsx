import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, HardHat, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  // Desktop styles
  const activeLinkStyle = "text-[#0f172a] font-black border-b-[3px] border-[#f59e0b] pb-1";
  const normalLinkStyle = "text-[#475569] hover:text-[#0f172a] font-bold pb-1 border-b-[3px] border-transparent transition-all";

  return (
    <nav className="bg-white w-full sticky top-0 z-[100] shadow-md border-t-4 border-[#f59e0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-[#0f172a] p-2 rounded">
                <HardHat className="text-[#f59e0b]" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-[#0f172a] leading-none tracking-tight">
                  VERMA <span className="text-[#f59e0b]">PRIME PROPERTIES</span>
                </span>
                <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-[0.15em]">
                  Quality Construction & Interiors
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}
              >
                {link.name}
              </NavLink>
            ))}
            
            <a 
              href="tel:+919993816314" 
              className="bg-[#f59e0b] text-[#0f172a] px-6 py-2.5 rounded font-black flex items-center gap-2 hover:bg-[#0f172a] hover:text-white transition-all shadow-sm"
            >
              <Phone size={18} fill="currentColor" />
              CONTACT US
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0f172a] p-2 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute w-full bg-white border-b shadow-2xl transition-all duration-300 ${
        isOpen ? 'top-20 opacity-100' : 'top-[-500px] opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 py-6 space-y-1 bg-gray-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `flex items-center justify-between px-4 py-4 rounded-md text-lg font-bold ${
                  isActive ? 'bg-[#0f172a] text-white' : 'text-[#0f172a] hover:bg-white hover:text-[#f59e0b]'
                }`
              }
            >
              {/* Chevron icon fix: Icon ko conditional render kiya hai */}
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && <ChevronRight size={20} className="text-[#f59e0b]" />}
                </>
              )}
            </NavLink>
          ))}
          <div className="pt-6">
            <a 
              href="tel:+919993816314" 
              className="w-full bg-[#f59e0b] text-[#0f172a] text-center py-4 rounded font-black text-xl block"
              onClick={() => setIsOpen(false)}
            >
              FREE QUOTE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;