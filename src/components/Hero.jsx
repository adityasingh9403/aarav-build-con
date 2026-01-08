import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2, Hammer, HardHat } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] bg-slate-50 flex items-center justify-center overflow-hidden">
      
      {/* 1. Industrial Accent - Yellow Bar (Left Side) */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-16">
        
        {/* Left Side: Text Content (Occupies 7 columns) */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-[#0f172a] text-[#f59e0b] px-4 py-2 rounded-sm mb-8"
          >
            <HardHat size={16} />
            <span className="font-black tracking-[0.2em] text-[10px] md:text-xs uppercase">
              Verma Prime Properties Indore
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0f172a] leading-[0.95] mb-8 tracking-tighter"
          >
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#d97706]">
              STRENGTH.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium border-l-4 border-slate-200 pl-6"
          >
            Experience the pinnacle of civil engineering. From luxury high-rises to robust industrial structures, 
            <span className="text-[#0f172a] font-bold"> Verma Prime Properties </span> delivers excellence without compromise.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <button className="w-full sm:w-auto bg-[#0f172a] text-white px-10 py-5 font-black flex items-center justify-center gap-3 hover:bg-[#f59e0b] hover:text-[#0f172a] transition-all duration-300 shadow-xl group">
              OUR PORTFOLIO 
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4">
               <div className="h-12 w-[2px] bg-slate-300 hidden sm:block" />
               <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center"><Building2 size={16}/></div>
                  <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center"><Hammer size={16}/></div>
               </div>
               <p className="text-sm font-bold text-slate-700">500+ Projects Completed</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image Section (Occupies 5 columns) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* High Quality Hero Image */}
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800" 
                alt="Modern Architecture Verma Prime Properties" 
                className="w-full h-[450px] lg:h-[600px] object-cover rounded-sm shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -top-6 -left-6 bg-[#f59e0b] text-[#0f172a] p-6 shadow-xl hidden xl:block">
                <p className="text-4xl font-black">25+</p>
                <p className="text-[10px] font-black uppercase tracking-widest">Years of Trust</p>
              </div>

              {/* Quality Badge Overlay */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-6 bg-white p-8 shadow-2xl hidden md:flex items-center gap-5 border-b-8 border-[#0f172a]"
              >
                <div className="bg-slate-100 p-3 rounded-full">
                  <ShieldCheck className="text-[#f59e0b]" size={32} />
                </div>
                <div>
                  <p className="font-black text-xl text-[#0f172a]">ISO 9001:2015</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Quality Management Certified</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border-[20px] border-[#0f172a]/5 z-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;