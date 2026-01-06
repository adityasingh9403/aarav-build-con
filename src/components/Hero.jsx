import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      
      {/* 1. Enhanced Background with Dark Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
          alt="Aarav Build Con Indore" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Modern Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left">
        
        {/* 2. Floating Badge Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-500 text-[#0f172a] px-4 py-1 rounded-sm font-black text-xs uppercase tracking-[0.3em] mb-6"
        >
          Since 2012 • Indore
        </motion.div>

        {/* 3. Main Heading with Slide-up Animation */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1]"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Greatness.
          </span>
        </motion.h1>
        
        {/* 4. Subtext with permanent gentle floating animation */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: [0, -5, 0], // Permanent floating effect
            opacity: 1 
          }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // Infinite float
          }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed border-l-2 border-yellow-500 pl-6"
        >
          Aarav Build Con transforms blueprints into landmarks. From luxury villas to industrial hubs, we build the future of Indore.
        </motion.p>

        {/* 5. Buttons with Hover Scale Effects */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-5"
        >
          <button className="group relative bg-yellow-500 text-[#0f172a] font-black px-10 py-5 rounded-sm overflow-hidden transition-all hover:bg-yellow-400">
            <span className="relative z-10 flex items-center gap-2">VIEW PROJECTS</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="border-2 border-white/30 text-white font-bold px-10 py-5 rounded-sm backdrop-blur-sm hover:bg-white hover:text-[#0f172a] transition-all duration-300">
            OUR SERVICES
          </button>
        </motion.div>
      </div>

      {/* 6. Permanent Scroll Indicator Animation */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase font-bold">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>

      {/* 7. Animated Background Particles (Visual Detail) */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-yellow-500 rounded-full blur-[120px] animate-pulse" />
      </div>
    </div>
  );
};

export default Hero;