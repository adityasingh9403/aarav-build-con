import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, HardHat, PenTool, CheckCircle2, ChevronRight } from 'lucide-react';

const services = [
  { 
    title: "Residential Construction", 
    icon: <Home size={32} />, 
    desc: "Designing and building dream homes with modern amenities in Indore's heart.",
    features: ["Vastu Compliant", "Modern Architecture", "Smart Home Ready"]
  },
  { 
    title: "Commercial Projects", 
    icon: <Building2 size={32} />, 
    desc: "High-end office spaces and shopping complexes with global standards.",
    features: ["Prime Locations", "High ROI", "Modern Glass Facades"]
  },
  { 
    title: "Civil Engineering", 
    icon: <HardHat size={32} />, 
    desc: "Expertise in roads, bridges, and large scale infrastructure planning.",
    features: ["Public Infrastructure", "Structural Strength", "Timely Delivery"]
  },
  { 
    title: "Interior Design", 
    icon: <PenTool size={32} />, 
    desc: "Transforming empty spaces into aesthetic and functional living areas.",
    features: ["Luxury Finishing", "Modular Kitchens", "Space Optimization"]
  },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Understanding your vision and site requirements." },
  { step: "02", title: "Planning", desc: "Detailed blueprints and structural engineering." },
  { step: "03", title: "Construction", desc: "Execution with high-quality materials and labor." },
  { step: "04", title: "Handover", desc: "Final quality checks and key handover." },
];

const Services = () => {
  return (
    <div className="pt-24 bg-white overflow-hidden">
      
      {/* 1. Header Section with Animation */}
      <section className="bg-primary py-20 text-white relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl font-black mb-6 italic tracking-tighter"
          >
            OUR <span className="text-yellow-500">EXPERTISE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Aarav Build Con delivers precision-engineered solutions for every construction need in Indore.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Services Grid with Staggered Animation */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-white w-20 h-20 rounded-2xl shadow-sm flex items-center justify-center text-yellow-500 mb-8 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-500">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{s.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{s.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {s.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-yellow-500" /> {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-primary font-black text-xs hover:gap-4 transition-all">
                ENQUIRE NOW <ChevronRight size={16} className="text-yellow-500" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. The Process Section (New Feature) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-primary underline decoration-yellow-500 decoration-4 underline-offset-8">How We Work</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div className="text-8xl font-black text-gray-200 absolute -top-10 left-1/2 -translate-x-1/2 z-0">
                  {item.step}
                </div>
                <div className="relative z-10 space-y-4">
                  <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                  <p className="text-gray-500 text-sm px-4">{item.desc}</p>
                </div>
                {/* Connector Line for Desktop */}
                {idx !== 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-yellow-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Teaser */}
      <section className="py-20 text-center">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-6 italic">Need a customized solution for your project?</h2>
          <p className="text-gray-600 mb-10">Our team is ready to provide technical expertise and cost-effective planning for your construction needs in Indore.</p>
          <button className="bg-yellow-500 text-primary font-black px-12 py-5 rounded-full hover:shadow-xl hover:bg-yellow-400 transition transform active:scale-95 uppercase tracking-widest">
            Book Free Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;