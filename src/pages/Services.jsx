import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, HardHat, PenTool, CheckCircle2, ChevronRight, Zap, ShieldCheck, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { 
    title: "Residential Development", 
    icon: <Home size={32} />, 
    desc: "Crafting bespoke luxury villas and high-end apartments engineered for the modern family.",
    features: ["Vastu Compliant", "Sustainable Materials", "Structural Warranty"],
    color: "border-[#f59e0b]"
  },
  { 
    title: "Commercial Infrastructure", 
    icon: <Building2 size={32} />, 
    desc: "Developing iconic office hubs and retail complexes that drive business growth and ROI.",
    features: ["Steel-Frame Structures", "Modern Facades", "Optimized Layouts"],
    color: "border-[#0f172a]"
  },
  { 
    title: "Civil Engineering", 
    icon: <HardHat size={32} />, 
    desc: "Large-scale infrastructure including roads, industrial parks, and complex structural planning.",
    features: ["Heavy Equipment Fleet", "Precision Engineering", "Government Grade"],
    color: "border-[#f59e0b]"
  },
  { 
    title: "Premium Interior Design", 
    icon: <PenTool size={32} />, 
    desc: "Merging aesthetics with functionality to create world-class interiors and smart spaces.",
    features: ["Luxury Finishing", "Space Optimization", "3D Visualization"],
    color: "border-[#0f172a]"
  },
];

const processSteps = [
  { step: "01", title: "Technical Consultation", desc: "Evaluating site feasibility and aligning architectural vision." },
  { step: "02", title: "Strategic Planning", desc: "Drafting high-precision structural blueprints and timelines." },
  { step: "03", title: "On-Site Execution", desc: "Rigorous construction managed by elite civil engineers." },
  { step: "04", title: "Certified Handover", desc: "Final 50-point quality audit and successful project delivery." },
];

const Services = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="pt-24 bg-[#fcfcfc] overflow-hidden">
      
      {/* 1. Header Section - Dynamic Entrance */}
      <section className="bg-[#0f172a] py-32 text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/graphy.png')` }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-3 bg-[#f59e0b] text-[#0f172a] rounded-sm mb-6 font-black text-xs uppercase tracking-[0.3em]"
          >
            Elite Solutions
          </motion.div>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none"
          >
            Our <span className="text-transparent" style={{ WebkitTextStroke: '2px #f59e0b' }}>Capabilities.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed"
          >
            Verma Prime Properties provides world-class structural engineering and architectural 
            excellence tailored to Indore's growing landscape.
          </motion.p>
        </div>
      </section>

      {/* 2. Services Grid - 3D Hover & Staggered Reveal */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-4 border-[#0f172a]"
        >
          {services.map((s, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ backgroundColor: "#0f172a", color: "#ffffff" }}
              className={`p-10 bg-white border-r last:border-0 border-slate-100 transition-all duration-500 group relative flex flex-col justify-between overflow-hidden`}
            >
              {/* Decorative Number */}
              <div className="absolute -top-4 -right-4 text-8xl font-black text-slate-50 group-hover:text-white/5 pointer-events-none transition-colors">
                {index + 1}
              </div>

              <div>
                <div className="bg-[#0f172a] w-16 h-16 flex items-center justify-center text-[#f59e0b] mb-10 group-hover:bg-[#f59e0b] group-hover:text-[#0f172a] group-hover:rotate-[360deg] transition-all duration-700">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black mb-5 uppercase tracking-tighter leading-none">{s.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-300 mb-8 text-sm font-semibold leading-relaxed transition-colors">
                  {s.desc}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {s.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                      <ShieldCheck size={14} className="text-[#f59e0b]" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] text-[#f59e0b] group-hover:text-white transition-all"
              >
                Learn Detail <ChevronRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. The Execution Process - Parallax Motion */}
      <section className="py-32 bg-[#0f172a] relative overflow-hidden">
        {/* Animated Background Element */}
        <motion.div 
          animate={{ x: [-100, 100], opacity: [0.03, 0.05] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute top-1/2 left-0 text-[20rem] font-black text-white pointer-events-none select-none -translate-y-1/2"
        >
          QUALITY
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-24 text-white uppercase tracking-tighter"
          >
            HOW WE <span className="text-[#f59e0b]">EXECUTE</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connection Line Desktop */}
            <div className="hidden lg:block absolute top-[30%] left-0 w-full h-[2px] bg-white/10 z-0" />

            {processSteps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative group z-10"
              >
                <div className="w-20 h-20 bg-[#f59e0b] mx-auto flex items-center justify-center text-[#0f172a] font-black text-3xl mb-8 group-hover:bg-white transition-colors duration-500 shadow-2xl">
                  {item.step}
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-black text-white uppercase tracking-widest">{item.title}</h4>
                  <p className="text-slate-400 font-bold text-sm leading-relaxed px-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Call to Action */}
      <section className="py-40 text-center bg-white relative">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6"
        >
          <Ruler className="mx-auto text-[#f59e0b] mb-10" size={60} />
          <h2 className="text-4xl md:text-6xl font-black mb-10 text-[#0f172a] uppercase tracking-tighter leading-none">
            Scale Your Vision With <br />
            <span className="text-[#f59e0b]">Verma Structural</span> Expertise.
          </h2>
          <p className="text-slate-500 text-xl font-bold mb-16 uppercase tracking-widest max-w-2xl mx-auto">
            From blueprints to landmarks, we provide cost-effective engineering solutions for Indore's skyline.
          </p>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#0f172a", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f59e0b] text-[#0f172a] font-black px-16 py-6 rounded-sm shadow-2xl transition-all duration-300 uppercase tracking-[0.2em] text-lg"
            >
              Consult an Expert
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;