import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // NavLink add kiya
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Active Style Logic
  const activeLinkStyle = "text-blue-900 bg-gray-100 md:bg-transparent md:text-yellow-600 font-bold underline decoration-2 underline-offset-8";
  const normalLinkStyle = "text-gray-700 hover:text-yellow-500 font-semibold transition-colors duration-300";

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold text-blue-900 leading-none">
                AARAV <span className="text-yellow-500">BUILD CON</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase">Indore's Pride</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                // isActive property ka use karke class change ki
                className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}
              >
                {link.name}
              </NavLink>
            ))}
            
            <a 
              href="tel:+919977267799" 
              className="bg-blue-900 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-blue-800 transition shadow-md"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'top-20 opacity-100' : 'top-[-400px] opacity-0'} pointer-events-auto`}>
        <div className="px-4 pt-2 pb-6 space-y-2 border-t border-gray-100">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              // Mobile ke liye active style thoda alag (background ke saath)
              className={({ isActive }) => 
                `block px-3 py-4 text-base rounded-md transition-all ${
                  isActive 
                  ? 'bg-blue-900 text-white font-bold' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-yellow-500 font-bold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4">
            <a 
              href="tel:+919977267799" 
              className="w-full bg-yellow-500 text-blue-900 text-center py-4 rounded-md font-bold block shadow-inner"
              onClick={() => setIsOpen(false)}
            >
              CALL FOR QUOTE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;