import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, PencilRuler, HardHat, Key, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            id: "01",
            title: "Strategic Consultation",
            desc: "We perform a comprehensive site analysis and provide technical advisory on structural feasibility and material selection aligned with your investment goals.",
            icon: <ClipboardList size={32} />,
        },
        {
            id: "02",
            title: "Architectural Engineering",
            desc: "Our elite design team develops high-fidelity 3D models and Vastu-compliant structural blueprints, ensuring every millimeter is engineered for durability.",
            icon: <PencilRuler size={32} />,
        },
        {
            id: "03",
            title: "Precision Execution",
            desc: "Our on-site civil engineers manage ground-level construction using premium Tier-1 materials and high-precision machinery under 24/7 technical supervision.",
            icon: <HardHat size={32} />,
        },
        {
            id: "04",
            title: "Elite Handover",
            desc: "Following a rigorous 50-point quality audit and final aesthetic finishing, we deliver the keys to your landmark property with a structural warranty.",
            icon: <Key size={32} />,
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section className="py-24 bg-[#fcfcfc] px-6 relative overflow-hidden">
            {/* Background Structural Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/graphy.png')` }} />
            
            {/* Massive Parallax Text */}
            <div className="absolute top-20 -left-10 text-[15rem] font-black text-slate-100 select-none pointer-events-none uppercase tracking-tighter opacity-40">
                SYSTEM
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
                    <div className="space-y-4">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-[#0f172a] text-[#f59e0b] px-4 py-1.5 rounded-sm shadow-xl"
                        >
                            <Zap size={14} fill="currentColor" />
                            <span className="font-black text-[10px] uppercase tracking-[0.3em]">Operational Protocol</span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-6xl md:text-8xl font-black text-[#0f172a] uppercase tracking-tighter leading-[0.85]"
                        >
                            THE <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>VERMA</span> <br /> 
                            WORKFLOW
                        </motion.h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="max-w-md border-l-8 border-[#f59e0b] pl-8 py-2"
                    >
                        <p className="text-slate-400 font-black text-xs uppercase tracking-widest mb-2 italic">Standard of Excellence</p>
                        <p className="text-slate-600 font-bold text-lg leading-relaxed">
                            Transparency is the bedrock of our legacy. We employ a modular construction framework to ensure on-time delivery and structural superiorlty.
                        </p>
                    </motion.div>
                </div>

                {/* Industrial Steps Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-4 border-[#0f172a] bg-white shadow-2xl"
                >
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="relative group p-12 border-b-4 md:border-b-0 md:border-r-4 last:border-r-0 border-[#0f172a]/10 hover:bg-[#0f172a] transition-all duration-700"
                        >
                            {/* Step Number with Outline Effect */}
                            <div className="absolute top-6 right-8 text-7xl font-black text-slate-50 group-hover:text-white/5 transition-colors duration-500 select-none">
                                {step.id}
                            </div>

                            {/* Dynamic Icon Container */}
                            <div className="bg-[#0f172a] text-[#f59e0b] w-16 h-16 flex items-center justify-center mb-12 rounded-sm shadow-xl group-hover:bg-[#f59e0b] group-hover:text-[#0f172a] group-hover:rotate-[360deg] transition-all duration-1000">
                                {step.icon}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-[#0f172a] mb-6 uppercase tracking-tighter leading-none group-hover:text-white transition-colors duration-500">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8 group-hover:text-slate-400 transition-colors duration-500">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Connecting Visual Arrow */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-6 z-30 w-12 h-12 bg-[#f59e0b] rounded-full items-center justify-center text-[#0f172a] shadow-2xl group-hover:translate-x-3 transition-transform duration-500 scale-75">
                                    <ArrowRight size={24} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Brands Trust - Infinite Marquee Section */}
                <div className="mt-32 border-t border-slate-200 pt-20">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                        <div className="flex items-center gap-4">
                           <ShieldCheck className="text-[#f59e0b]" size={28} />
                           <span className="font-black text-[#0f172a] uppercase tracking-[0.4em] text-sm">Industrial Grade Materials Only</span>
                        </div>
                        <div className="h-[2px] bg-slate-100 flex-grow mx-8 hidden md:block"></div>
                        <Link to="/contact" className="text-[10px] font-black uppercase text-slate-400 hover:text-[#f59e0b] tracking-widest flex items-center gap-2 transition-all">
                           Technical Specs <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="relative flex overflow-hidden group">
                        <motion.div 
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                            className="flex whitespace-nowrap gap-20 items-center opacity-30 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
                        >
                            {/* Duplicate brands for seamless loop */}
                            {['TATA TISCON', 'ULTRATECH', 'ACC CEMENT', 'ASIAN PAINTS', 'HAVELLS', 'BARRON PUMPS', 'TATA TISCON', 'ULTRATECH', 'ACC CEMENT', 'ASIAN PAINTS', 'HAVELLS', 'BARRON PUMPS'].map((brand, i) => (
                                <span key={i} className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tighter hover:text-[#f59e0b] cursor-default transition-colors">
                                    {brand}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simple link helper to avoid errors if you don't have Link setup yet
const Link = ({ children, ...props }) => <a {...props}>{children}</a>;

export default Process;