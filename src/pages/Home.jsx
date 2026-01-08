import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, CheckCircle, ShieldCheck, Building2, HardHat, Star, TrendingUp } from 'lucide-react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
    // Stats Data
    const stats = [
        { id: 1, icon: <Award className="text-[#f59e0b]" />, count: "25+", label: "Years of Trust" },
        { id: 2, icon: <CheckCircle className="text-[#f59e0b]" />, count: "300+", label: "Masterpieces Built" },
        { id: 3, icon: <Users className="text-[#f59e0b]" />, count: "1000+", label: "Satisfied Families" },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="overflow-x-hidden bg-white">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Stats Section - Animated Industrial Grid */}
            <section className="py-20 bg-[#fcfcfc] border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-[#0f172a] shadow-2xl"
                    >
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.id}
                                variants={fadeInUp}
                                className="flex flex-col items-center text-center p-12 bg-white border-r last:border-0 border-slate-100 hover:bg-slate-50 transition-colors group"
                            >
                                <div className="mb-6 bg-[#0f172a] p-5 rounded-sm rotate-45 group-hover:rotate-0 transition-all duration-500">
                                    <div className="-rotate-45 group-hover:rotate-0 transition-all duration-500">
                                        {stat.icon}
                                    </div>
                                </div>
                                <h3 className="text-5xl font-black text-[#0f172a] mb-2 tracking-tighter">{stat.count}</h3>
                                <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. About Section - Interactive Content & Parallax Image */}
            <section className="py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex-1 space-y-10"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="w-12 h-[2px] bg-[#f59e0b]"></span>
                                <span className="text-[#f59e0b] font-black uppercase tracking-[0.4em] text-xs">Our Legacy</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] leading-[0.95] uppercase tracking-tighter">
                                Verma Prime Properties: <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>Pioneering</span> <br />
                                Engineering Excellence.
                            </h2>
                        </div>

                        <p className="text-slate-500 text-xl leading-relaxed font-medium border-l-8 border-[#f59e0b] pl-8">
                            We don't just build structures; we create landmarks. With a focus on structural integrity 
                            and architectural innovation, our team ensures every project becomes a testament to 
                            modern engineering standards in Indore.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: <ShieldCheck className="text-[#f59e0b]" />, title: "Quality Control", desc: "Rigorous 50-point safety & quality audits." },
                                { icon: <TrendingUp className="text-[#f59e0b]" />, title: "Precision Builds", desc: "Advanced 3D mapping and structural planning." }
                            ].map((item, i) => (
                                <motion.div key={i} whileHover={{ x: 10 }} className="flex gap-4">
                                    <div className="shrink-0">{item.icon}</div>
                                    <div>
                                        <h4 className="font-black text-[#0f172a] uppercase text-sm tracking-widest">{item.title}</h4>
                                        <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link to="/about" className="inline-flex items-center gap-4 bg-[#0f172a] text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-[#f59e0b] hover:text-[#0f172a] transition-all duration-500 shadow-[0_20px_50px_rgba(15,23,42,0.3)]">
                            Our Story <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 border-[20px] border-slate-50">
                            <img
                                src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1000&auto=format&fit=crop"
                                alt="Modern Engineering"
                                className="shadow-2xl w-full h-[650px] object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </div>
                        {/* Floating Credibility Box */}
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-10 -left-10 bg-[#f59e0b] p-12 hidden xl:block shadow-2xl z-20"
                        >
                            <p className="text-6xl font-black text-[#0f172a] leading-none mb-2 italic">100%</p>
                            <p className="font-black text-[#0f172a] uppercase text-[10px] tracking-[0.2em] leading-tight">Zero-Accident <br /> Safety Record</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Featured Projects - Dark Industrial Parallax */}
            <section className="py-32 bg-[#0f172a] text-white relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-6">
                                Elite <br /> <span className="text-[#f59e0b]">Portfolios</span>
                            </h2>
                            <p className="text-slate-400 font-bold max-w-sm uppercase tracking-widest text-[10px]">Revolutionizing the skyline of Central India through modern architecture.</p>
                        </motion.div>
                        <Link to="/projects" className="bg-white text-[#0f172a] px-12 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#f59e0b] transition-all">Explore All Projects</Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {[
                            { title: "Verma Sky-Villas", loc: "Vijay Nagar, Indore", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" },
                            { title: "Industrial Logistics Hub", loc: "Pithampur, SEZ", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000" }
                        ].map((proj, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ y: -20 }}
                                className="group relative cursor-pointer"
                            >
                                <div className="h-[500px] overflow-hidden border-b-8 border-[#f59e0b]">
                                    <img src={proj.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt={proj.title} />
                                </div>
                                <div className="mt-8 flex justify-between items-start">
                                    <div>
                                        <h4 className="text-3xl font-black uppercase tracking-tighter group-hover:text-[#f59e0b] transition-colors">{proj.title}</h4>
                                        <p className="text-slate-500 font-black text-xs uppercase tracking-[0.3em] mt-2">{proj.loc}</p>
                                    </div>
                                    <div className="bg-[#f59e0b] text-[#0f172a] p-4 group-hover:rotate-45 transition-transform duration-500">
                                        <ArrowRight size={24} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Section - Maximum Visibility */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
                    <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="inline-block p-6 bg-slate-50 rounded-full mb-10 shadow-inner"
                    >
                        <Building2 className="text-[#f59e0b]" size={60} />
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black text-[#0f172a] mb-10 leading-[0.8] tracking-tighter uppercase"
                    >
                        Architecting <br />
                        <span className="text-[#f59e0b]">Your Dreams.</span>
                    </motion.h2>

                    <p className="text-slate-400 text-xl mb-16 font-black uppercase tracking-[0.2em] max-w-3xl mx-auto">
                        Connect with Central India's most trusted structural experts today.
                    </p>

                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#f59e0b] text-[#0f172a] px-20 py-8 font-black text-2xl uppercase tracking-widest shadow-2xl transition-all"
                        >
                            Request a Free Estimate
                        </motion.button>
                    </Link>
                </div>

                {/* Parallax Background Background Elements */}
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 0.03, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 text-[25rem] font-black text-[#0f172a] select-none pointer-events-none"
                >
                    VERMA
                </motion.div>
            </section>
        </div>
    );
};

export default Home;