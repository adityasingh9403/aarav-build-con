import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-400 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Company Info */}
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">
              AARAV <span className="text-yellow-500">BUILD CON</span>
            </h3>
          </Link>
          <p className="text-sm leading-relaxed">
            Indore's most trusted name in construction and infrastructure. We build spaces that combine luxury, 
            durability, and modern architecture.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500 transition-colors p-2 bg-slate-800 rounded-full"><Facebook size={18} /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors p-2 bg-slate-800 rounded-full"><Instagram size={18} /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors p-2 bg-slate-800 rounded-full"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors p-2 bg-slate-800 rounded-full"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div className="lg:pl-8">
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'Projects', 'Services', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                  className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  <ArrowRight size={14} className="text-yellow-500" /> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services (SEO Benefit) */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h4>
          <ul className="space-y-4 text-sm">
            <li className="border-b border-slate-800 pb-2">Residential Construction</li>
            <li className="border-b border-slate-800 pb-2">Commercial Developments</li>
            <li className="border-b border-slate-800 pb-2">Civil Infrastructure</li>
            <li className="border-b border-slate-800 pb-2">Interior Designing</li>
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Info</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-yellow-500 shrink-0" size={20} />
              <p className="text-sm">102, Pulak City, Rau, Indore, Madhya Pradesh - 452012</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-yellow-500 shrink-0" size={20} />
              <p className="text-sm">+91 99772 67799</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-yellow-500 shrink-0" size={20} />
              <p className="text-sm">info@aaravbuildcon.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {currentYear} <span className="text-white font-medium">Aarav Build Con</span>. All Rights Reserved.
          </p>
          <p className="text-xs">
            Designed with ❤️ for Indore's Growth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;