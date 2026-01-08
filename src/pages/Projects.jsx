import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Expand, Building2, ArrowUpRight, Filter, LayoutGrid } from 'lucide-react';

const projectsData = [
  { id: 1, title: "Verma Residency", location: "Vijay Nagar, Indore", status: "Completed", area: "25,000 sq.ft", type: "Residential", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600" },
  { id: 2, title: "Verma Skyline", location: "Bicholi Mardana, Indore", status: "Ongoing", area: "50,000 sq.ft", type: "Commercial", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600" },
  { id: 3, title: "Industrial Hub", location: "Pithampur, MP", status: "Completed", area: "85,000 sq.ft", type: "Industrial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600" },
  { id: 4, title: "Luxury Estate", location: "Rau Bypass, Indore", status: "Ongoing", area: "12,000 sq.ft", type: "Premium Villa", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600" },
  { id: 5, title: "Modern Tech Park", location: "Super Corridor, Indore", status: "Completed", area: "1,20,000 sq.ft", type: "IT Sector", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600" },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.status === filter);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { duration: 0.3 } 
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 bg-[#fcfcfc] min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Reveal Animation */}
        <div className="relative mb-20">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-2 bg-[#f59e0b] mb-6"
          />
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h6 className="text-[#f59e0b] font-black uppercase tracking-[0.5em] text-xs">Our Portfolio</h6>
            <h1 className="text-6xl md:text-8xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">
              THE <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>VERMA</span> <br /> 
              ARCHIVES
            </h1>
          </motion.div>
          {/* Decorative Background Text */}
          <div className="absolute top-0 right-0 text-[10rem] font-black text-slate-100 opacity-20 pointer-events-none select-none translate-x-20 -translate-y-10 hidden lg:block">
            BUILDS
          </div>
        </div>

        {/* Professional Animated Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 border-y-2 border-[#0f172a]/5 py-8"
        >
          <div className="flex items-center gap-4">
             <div className="p-3 bg-[#0f172a] text-[#f59e0b] rounded-full">
                <Filter size={20} />
             </div>
             <span className="font-black text-[#0f172a] uppercase text-sm tracking-[0.2em]">Project Stage</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Ongoing', 'Completed'].map((tab) => (
              <motion.button 
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tab)}
                className={`relative px-12 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                  filter === tab 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-[#0f172a]'
                }`}
              >
                {filter === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#0f172a] z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Animated Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                variants={cardVariants}
                key={project.id}
                className="group relative bg-white flex flex-col sm:flex-row overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(15,23,42,0.15)] transition-all duration-500"
              >
                {/* Image Section with Zoom Effect */}
                <div className="relative w-full sm:w-[45%] h-72 sm:h-auto overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" 
                  />
                  {/* Floating Status Tag */}
                  <div className={`absolute top-0 left-0 px-6 py-2 font-black text-[9px] uppercase tracking-[0.2em] shadow-lg ${
                    project.status === 'Completed' ? 'bg-[#f59e0b] text-[#0f172a]' : 'bg-[#0f172a] text-white'
                  }`}>
                    {project.status}
                  </div>
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#0f172a]/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-[55%] p-10 flex flex-col justify-between relative bg-white">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-3xl font-black text-[#0f172a] leading-none uppercase tracking-tighter group-hover:text-[#f59e0b] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="p-2 border border-slate-100 rounded-full group-hover:bg-[#0f172a] group-hover:text-white transition-all duration-500 rotate-45 group-hover:rotate-0">
                         <ArrowUpRight size={20} />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                      <MapPin size={14} className="text-[#f59e0b]" />
                      {project.location}
                    </div>

                    <p className="text-slate-500 text-sm font-semibold leading-relaxed line-clamp-2">
                       A benchmark in structural engineering, delivering unmatched durability and aesthetics.
                    </p>
                  </div>

                  {/* Technical Specs Footer */}
                  <div className="mt-10 pt-8 border-t border-slate-50 grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <span className="text-[8px] text-slate-400 font-black uppercase tracking-[0.3em] mb-2">Total Scale</span>
                      <span className="text-[#0f172a] font-black text-sm italic flex items-center gap-2">
                        <Expand size={14} className="text-[#f59e0b]" /> {project.area}
                      </span>
                    </div>
                    <div className="flex flex-col border-l border-slate-100 pl-6">
                      <span className="text-[8px] text-slate-400 font-black uppercase tracking-[0.3em] mb-2">Structure</span>
                      <span className="text-[#0f172a] font-black text-sm italic">{project.type}</span>
                    </div>
                  </div>

                  {/* Vertical ID Bar */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <span className="text-9xl font-black text-[#0f172a]">0{project.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-40 border-2 border-dashed border-slate-100">
             <LayoutGrid size={60} className="mx-auto text-slate-200 mb-6" />
             <h3 className="text-2xl font-black text-slate-400 uppercase tracking-widest">No matching projects found</h3>
          </motion.div>
        )}

        {/* High-Impact Animated CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#f59e0b] to-[#0f172a] rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white p-16 text-center border-t-8 border-[#0f172a]">
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6 uppercase tracking-tighter">Your Landmark is Next.</h2>
            <p className="text-slate-500 mb-12 font-bold uppercase tracking-widest text-sm">Join Indore's top-tier infrastructure family today.</p>
            <motion.button 
               whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(15,23,42,0.3)" }}
               whileTap={{ scale: 0.95 }}
               className="bg-[#0f172a] text-white px-20 py-6 font-black uppercase tracking-widest text-lg transition-all"
            >
               Request Consultation
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;