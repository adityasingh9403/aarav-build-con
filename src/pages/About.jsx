import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, HardHat, Award, Globe, UserCheck, Sparkles, Quote, ArrowUpRight } from 'lucide-react';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="pt-20 bg-white overflow-hidden">
      
      {/* 1. Dynamic SEO Header Section */}
      <section className="bg-[#0f172a] py-32 md:py-48 text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }} />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            className="h-1 bg-[#f59e0b] mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            ENGINEERING <br /> <span className="text-[#f59e0b]">TRUST</span> SINCE 1995
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-medium italic">
            "We don't just build structures; we architect the future of Central India."
          </p>
        </motion.div>
        
        {/* Animated Background Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block">
          ESTD
        </div>
      </section>

      {/* 2. Founder Section - Symmetric & Interactive */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Industrial Frame Animation */}
              <motion.div 
                initial={{ x: 0, y: 0 }}
                whileInView={{ x: -20, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 border-l-[15px] border-b-[15px] border-[#f59e0b] z-0"
              ></motion.div>

              <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl bg-gray-100 group">
                <img
                  src="/rakesh_verma.jpg"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                  alt="Mr. Rakesh Verma - Founder"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-[#0f172a] text-white p-6 md:p-10 shadow-2xl z-20 border-b-8 border-[#f59e0b]"
              >
                <p className="text-4xl md:text-6xl font-black text-[#f59e0b] leading-none">25+</p>
                <p className="text-[10px] uppercase font-black tracking-[0.2em] mt-2">Years of Legacy</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div className="space-y-4">
              <h6 className="text-[#f59e0b] font-black uppercase tracking-[0.4em] text-sm">The Visionary</h6>
              <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter leading-[0.9]">
                MR. RAKESH <br /> VERMA
              </h2>
              <div className="w-24 h-3 bg-[#0f172a]"></div>
            </div>

            <div className="relative pt-6">
              <Quote className="absolute -top-4 -left-8 text-slate-100" size={100} />
              <p className="text-[#0f172a] text-xl md:text-2xl leading-relaxed font-bold italic relative z-10">
                "Our foundation is built on integrity. We treat every blueprint as a promise to the families of Indore."
              </p>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              A pioneer in <b>Turnkey Civil Engineering</b>, Mr. Verma has revolutionized the 
              <b>Indore Real Estate</b> market by integrating modern technology with Vastu principles. 
              Under his guidance, we have delivered over 300+ landmarks across the state.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 bg-slate-50 p-5 border-l-8 border-[#0f172a] shadow-sm">
                <UserCheck className="text-[#f59e0b]" size={28} />
                <span className="font-black text-[#0f172a] text-xs uppercase tracking-widest">ISO 9001:2015</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 bg-slate-50 p-5 border-l-8 border-[#f59e0b] shadow-sm">
                <Sparkles className="text-[#0f172a]" size={28} />
                <span className="font-black text-[#0f172a] text-xs uppercase tracking-widest">Global Standards</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Mission & Vision - 3D Tilt Cards */}
      <section className="py-32 bg-slate-50 skew-y-2 translate-y-20">
        <div className="max-w-7xl mx-auto px-6 -skew-y-2">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              { icon: <Target size={40} />, title: "Our Mission", desc: "To deliver RERA-certified, high-durability infrastructure that sets new benchmarks in the construction industry.", color: "bg-[#f59e0b]" },
              { icon: <Eye size={40} />, title: "Our Vision", desc: "To become the undisputed leader in Civil Engineering in Central India by 2030 through sustainable innovation.", color: "bg-[#0f172a]" },
              { icon: <Award size={40} />, title: "Our Values", desc: "Absolute transparency in pricing, uncompromising safety protocols, and a commitment to on-time delivery.", color: "bg-[#f59e0b]" }
            ].map((box, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -20, rotateY: 10 }}
                className="bg-white p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-b-[12px] border-[#0f172a] group transition-all"
              >
                <div className={`${box.color} text-white w-20 h-20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                  {box.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 text-[#0f172a] uppercase tracking-tighter">{box.title}</h3>
                <p className="text-slate-500 font-bold leading-relaxed text-lg">{box.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. The Verma Advantage - Staggered List */}
      <section className="py-52 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter">THE ADVANTAGE</h2>
          <div className="w-20 h-2 bg-[#f59e0b] mx-auto"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { t: "RERA CERTIFIED", d: "100% legal transparency and government-approved documentation." },
            { t: "VASTU EXPERTISE", d: "Ancient architectural science blended with modern civil designs." },
            { t: "ZERO COST OVERRUNS", d: "Fixed budgets with no hidden charges during project execution." },
            { t: "5-YEAR WARRANTY", d: "We stand by our strength. 5-year structural warranty on every villa." }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-left p-8 bg-white border-2 border-slate-100 hover:border-[#f59e0b] hover:shadow-2xl transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center group-hover:bg-[#0f172a] group-hover:text-white transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <h4 className="font-black text-[#0f172a] uppercase text-sm tracking-widest mb-4 group-hover:text-[#f59e0b]">{item.t}</h4>
              <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. Parallax Global Trust Section */}
      <section className="py-32 bg-[#0f172a] text-white relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/grid-me.png')` }} />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <Globe className="mx-auto text-[#f59e0b]" size={80} />
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">
            DEVELOPING <br /> THE PRIDE OF <br /> <span className="text-[#f59e0b]">INDORE</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto">
            From the Super Corridor to the Bypass, we are the silent force behind Indore's Smart City transformation. 
            Experience the <b>Verma Standard</b> of engineering.
          </p>
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#0f172a" }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#f59e0b] text-[#0f172a] px-16 py-6 font-black uppercase text-xl shadow-[0_20px_50px_rgba(245,158,11,0.3)]"
          >
            Connect With Our Team
          </motion.button>
        </div>
        
        {/* Background Overlay */}
        <div className="absolute bottom-0 right-0 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none translate-y-20">
          MP09
        </div>
      </section>
    </div>
  );
};

export default About;