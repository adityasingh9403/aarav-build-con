import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
    // Stats Data
    const stats = [
        { id: 1, icon: <Award className="text-yellow-500" />, count: "12+", label: "Years Experience" },
        { id: 2, icon: <CheckCircle className="text-yellow-500" />, count: "150+", label: "Projects Delivered" },
        { id: 3, icon: <Users className="text-yellow-500" />, count: "500+", label: "Happy Clients" },
    ];

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="overflow-x-hidden">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Stats Section - Staggered Slide In */}
            <section className="py-12 bg-white border-b overflow-hidden">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={fadeInUp}
                            className="flex items-center justify-center gap-4 p-6 border-r last:border-0 border-gray-100"
                        >
                            <div className="p-3 bg-yellow-50 rounded-lg">{stat.icon}</div>
                            <div>
                                <h3 className="text-3xl font-bold text-[#0f172a]">{stat.count}</h3>
                                <p className="text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 3. Welcome Section - Content Slide Left & Image Slide Right */}
            <section className="py-24 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                            Leading the Way in <br />
                            <span className="text-yellow-500 italic">Quality Construction</span> in Indore
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Aarav Build Con stands for excellence, trust, and transparency. From residential villas
                            to mega commercial hubs, we build structures that define the skyline of Indore.
                        </p>
                        <Link to="/about" className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-500 hover:text-[#0f172a] transition-all duration-300">
                            LEARN MORE <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
                            alt="Aarav Build Con Project"
                            className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                        />
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute -bottom-6 -left-6 bg-yellow-500 p-8 rounded-xl hidden md:block shadow-xl"
                        >
                            <p className="text-[#0f172a] font-black text-xl italic uppercase">"Built to Last"</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Featured Projects - Hover Zoom & Fade In Up */}
            <section className="py-24 bg-[#0f172a] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
                    >
                        <div>
                            <h2 className="text-4xl font-black mb-2 tracking-tighter uppercase italic">Featured Projects</h2>
                            <div className="w-24 h-2 bg-yellow-500"></div>
                        </div>
                        <Link to="/projects" className="text-yellow-500 font-bold border-b-2 border-yellow-500 hover:text-white hover:border-white transition pb-1">VIEW PORTFOLIO</Link>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            { title: "The Grand Plaza", loc: "AB Road, Indore", img: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=600" },
                            { title: "Aarav Meadows", loc: "Bypass Road, Indore", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600" }
                        ].map((proj, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: idx * 0.2 }}
                                className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer shadow-2xl"
                            >
                                <img src={proj.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={proj.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent p-10 flex flex-col justify-end">
                                    <h4 className="text-3xl font-bold mb-1">{proj.title}</h4>
                                    <p className="text-yellow-500 font-medium tracking-widest">{proj.loc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Call To Action - Pulse & Scale Animation */}
            <section className="py-20 bg-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    className="max-w-5xl mx-auto text-center px-4 bg-yellow-500 p-16 rounded-[40px] shadow-2xl shadow-yellow-200"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 uppercase tracking-tighter">
                        Ready to build your <br /> next masterpiece?
                    </h2>
                    <p className="text-[#0f172a]/70 text-xl mb-10 font-medium max-w-2xl mx-auto">
                        Get a free quote and consultation from Indore's top engineers.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#0f172a] text-white px-12 py-5 rounded-full font-black text-xl hover:shadow-2xl transition shadow-xl"
                        >
                            GET A FREE QUOTE
                        </motion.button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;