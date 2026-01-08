import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe, Send, HardHat, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="pt-32 pb-24 bg-[#fcfcfc] min-h-screen overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* 1. Header Section - Dynamic Entrance */}
                <div className="text-center mb-24">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-[#0f172a] text-[#f59e0b] px-5 py-2 rounded-sm mb-8 shadow-2xl"
                    >
                        <HardHat size={18} className="animate-bounce" />
                        <span className="font-black text-[10px] uppercase tracking-[0.3em]">Direct Communication Line</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-black text-[#0f172a] mb-6 uppercase tracking-tighter leading-none"
                    >
                        GET IN <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>TOUCH.</span>
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        className="h-3 bg-[#f59e0b] mx-auto mb-10"
                    />
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed"
                    >
                        Whether you're planning a luxury villa or an industrial complex, 
                        our engineering experts are ready to assist you.
                    </motion.p>
                </div>

                {/* 2. Info Grid - 3D Hover Cards */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[6px] border-[#0f172a] mb-24 bg-white shadow-2xl"
                >
                    {/* Office Address */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ backgroundColor: "#f8fafc" }}
                        className="p-12 border-b-[6px] md:border-b-0 md:border-r-[6px] border-[#0f172a] text-center group transition-all duration-500"
                    >
                        <div className="bg-[#0f172a] w-16 h-16 flex items-center justify-center text-[#f59e0b] mx-auto mb-8 group-hover:rotate-[360deg] transition-transform duration-700">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-[#0f172a] mb-4 uppercase tracking-tighter">Corporate Office</h3>
                        <p className="text-slate-500 font-bold leading-relaxed">
                            Verma House, Scheme 78, <br />
                            Vijay Nagar, Indore, <br />
                            Madhya Pradesh - 452010
                        </p>
                    </motion.div>

                    {/* Direct Contact - Highlighted Center */}
                    <motion.div 
                        variants={itemVariants}
                        className="p-12 bg-[#0f172a] text-white text-center relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="bg-[#f59e0b] w-16 h-16 flex items-center justify-center text-[#0f172a] mx-auto mb-8">
                                <Phone size={32} fill="currentColor" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase text-[#f59e0b] tracking-tighter">Quick Connect</h3>
                            <div className="space-y-4">
                                <a href="tel:+919993816314" className="block text-3xl font-black hover:text-[#f59e0b] transition-colors tracking-tighter">+91 9993816314</a>
                                <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Available for Technical Queries</p>
                            </div>
                        </div>
                        {/* Parallax Background Icon */}
                        <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
                            <Globe size={250} />
                        </div>
                    </motion.div>

                    {/* Office Hours */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ backgroundColor: "#f8fafc" }}
                        className="p-12 text-center group transition-all duration-500 border-t-[6px] md:border-t-0 md:border-l-[0px] border-[#0f172a]"
                    >
                        <div className="bg-[#0f172a] w-16 h-16 flex items-center justify-center text-[#f59e0b] mx-auto mb-8 group-hover:rotate-[360deg] transition-transform duration-700">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-[#0f172a] mb-4 uppercase tracking-tighter">Office Hours</h3>
                        <div className="text-slate-500 font-bold space-y-2">
                            <p>Mon - Sat: 10:00 AM - 07:30 PM</p>
                            <p className="text-[#f59e0b] bg-[#0f172a] inline-block px-4 py-1 text-[10px] uppercase tracking-widest">Sunday: Appointments Only</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 3. Actions & Interactive Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    
                    {/* Action Panel */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <h2 className="text-5xl font-black text-[#0f172a] uppercase tracking-tighter">LET'S BUILD <br /> SOMETHING <span className="text-[#f59e0b]">GREAT.</span></h2>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed">
                                Our technical desk is equipped to provide instant estimates and structural feasibility reports.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <motion.a 
                                whileHover={{ x: 15 }}
                                href="tel:+919993816314" 
                                className="flex items-center justify-between bg-[#0f172a] text-white px-10 py-6 font-black hover:bg-[#f59e0b] hover:text-[#0f172a] transition-all shadow-2xl"
                            >
                                CALL TECHNICAL HEAD <Phone size={24} />
                            </motion.a>
                            <motion.a 
                                whileHover={{ x: 15 }}
                                href="https://wa.me/919993816314" 
                                className="flex items-center justify-between bg-green-600 text-white px-10 py-6 font-black hover:bg-green-700 transition-all shadow-2xl"
                            >
                                WHATSAPP CONSULTATION <MessageCircle size={24} />
                            </motion.a>
                        </div>

                        <div className="p-8 bg-slate-50 border-l-[10px] border-[#0f172a] flex items-start gap-4 shadow-sm">
                            <CheckCircle className="text-[#f59e0b] shrink-0" size={24} />
                            <p className="text-[#0f172a] font-bold text-sm leading-relaxed uppercase tracking-tight">
                                Verma Prime Properties ensures 100% data privacy. Your project details are secure with our structural vault.
                            </p>
                        </div>
                    </motion.div>

                    {/* Industrial Inquiry Form */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-t-[12px] border-[#0f172a]"
                    >
                        <h3 className="text-4xl font-black text-[#0f172a] mb-10 uppercase tracking-tighter underline decoration-[#f59e0b] decoration-8 underline-offset-8">Inquiry Form</h3>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-b-4 border-slate-100 p-4 focus:border-[#f59e0b] outline-none font-bold transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                                    <input type="tel" placeholder="+91 99938 16314" className="w-full bg-slate-50 border-b-4 border-slate-100 p-4 focus:border-[#f59e0b] outline-none font-bold transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Category</label>
                                <select className="w-full bg-slate-50 border-b-4 border-slate-100 p-4 focus:border-[#f59e0b] outline-none font-bold text-slate-500 appearance-none">
                                    <option>Residential Development</option>
                                    <option>Commercial Complex</option>
                                    <option>Industrial Warehouse</option>
                                    <option>Renovation & Interior</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Details</label>
                                <textarea rows="4" placeholder="Mention plot size or specific requirements..." className="w-full bg-slate-50 border-b-4 border-slate-100 p-4 focus:border-[#f59e0b] outline-none font-bold transition-all"></textarea>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.02, backgroundColor: "#f59e0b", color: "#0f172a" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-[#0f172a] text-white py-6 font-black flex items-center justify-center gap-4 transition-all text-xl uppercase tracking-widest shadow-xl"
                            >
                                DISPATCH INQUIRY <Send size={24} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* 4. Map Section - High Contrast Industrial Style */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="relative group pt-10"
                >
                    <div className="absolute top-0 left-10 bg-[#0f172a] text-[#f59e0b] px-8 py-3 font-black text-xs uppercase tracking-[0.3em] z-20 shadow-xl border-b-4 border-[#f59e0b]">
                        Precision Location Tracking
                    </div>
                    <div className="relative h-[600px] w-full bg-white rounded-sm overflow-hidden shadow-2xl border-[10px] border-slate-50 outline outline-2 outline-[#0f172a]/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.63388705031!2d75.8203704!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b44d3fd%3A0xad6248a83e721793!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 brightness-90 hover:brightness-100"
                        ></iframe>
                    </div>
                    {/* Decorative Background Element */}
                    <div className="absolute -bottom-10 -left-10 text-[15rem] font-black text-[#0f172a]/[0.02] select-none pointer-events-none hidden lg:block">
                        MP09
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;