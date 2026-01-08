import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, HardHat } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 px-4 border-t-8 border-[#f59e0b]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Company Info */}
        <div className="space-y-6">
          <Link to="/" className="inline-block group">
            <div className="flex items-center gap-2 mb-2">
              <HardHat className="text-[#f59e0b]" size={28} />
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                VERMA <span className="text-[#f59e0b]">CONSTRUCTION</span>
              </h3>
            </div>
            <p className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase">Building Excellence</p>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Verma Construction is a premier name in high-quality civil work and infrastructure. 
            From residential homes to massive commercial projects, we build with precision and integrity.
          </p>
          <div className="flex space-x-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="hover:bg-[#f59e0b] hover:text-[#0f172a] transition-all p-2.5 bg-slate-800 rounded text-white shadow-lg"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="lg:pl-12">
          <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest border-b-2 border-[#f59e0b] w-fit">Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'Projects', 'Services', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                  className="flex items-center gap-2 hover:text-[#f59e0b] hover:translate-x-2 transition-all duration-300 font-bold"
                >
                  <ArrowRight size={16} className="text-[#f59e0b]" /> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Expertise (SEO) */}
        <div>
          <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest border-b-2 border-[#f59e0b] w-fit">Our Expertise</h4>
          <ul className="space-y-4 text-sm font-semibold">
            <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
               Modern Home Construction
            </li>
            <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
               Commercial Hubs & Malls
            </li>
            <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
               Industrial Warehousing
            </li>
            <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
               Premium Interior Design
            </li>
            <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
               Renovation & Restoration
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-[#f59e0b]">
          <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Office Info</h4>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#f59e0b] shrink-0" size={24} />
              <p className="text-sm font-medium leading-snug text-gray-300">
                Verma House, Scheme No. 78, <br />
                Indore, MP - 452010
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#f59e0b] shrink-0" size={20} />
              <p className="text-sm font-bold text-white tracking-wide">+91 99999 XXXXX</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#f59e0b] shrink-0" size={20} />
              <p className="text-sm font-bold text-gray-300 truncate">contact@vermaconstruction.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-gray-500">
            © {currentYear} <span className="text-white">VERMA CONSTRUCTION</span>. Built for Strength.
          </p>
          <div className="flex gap-6 text-xs font-black uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;